import connectMongo from '@/utils/dbConfig'
import clothes from '@/models/clothes'
import { NextResponse } from 'next/server'

export async function GET() {
	await connectMongo()

	const res = await clothes.find({ inWardrobe: true })

    let finalCombinations = []

    res.forEach((item) => {
        const matching = res.filter((clothes) => clothes.style === item.style)
        const categories = {}

        matching.forEach((item) => {
            if (categories[item.category]) {
                categories[item.category].push(item)
            } else {
                categories[item.category] = [item]
            }
        })

        const combinations = []
        for (let i = 0; i < 5; i++) {
            const combination = []
            for (const category in categories) {
                const randomIndex = Math.floor(
                    Math.random() * categories[category].length
                )
                combination.push(categories[category][randomIndex])
            }
            combinations.push(combination)
        }

        const uniqueCombinations = new Set()

        for (const combination of combinations) {
            const sortedCombination = combination.slice().sort()
            const combinationKey = JSON.stringify(sortedCombination)

            if (!uniqueCombinations.has(combinationKey)) {
                uniqueCombinations.add(combinationKey)
            }
        }

        finalCombinations = Array.from(uniqueCombinations, combinationKey => JSON.parse(combinationKey))
    })

	return NextResponse.json(finalCombinations)
}
