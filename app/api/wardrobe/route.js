import connectMongo from '@/utils/dbConfig'
import clothes from '@/models/clothes'
import { NextResponse } from 'next/server'

export async function GET() {
	await connectMongo()

	const res = await clothes.find({ inWardrobe: true })

	return NextResponse.json(res)
}

// export async function POST(request) {
// 	await connectMongo()

// 	const data = await request.json()

// 	const newItem = new clothes(data)
// 	await newItem.save()

// 	return NextResponse.json(newItem)
// }

// export async function PATCH(itemId) {
// 	await connectMongo()

// 	await clothes.updateOne({ _id: itemId }, { inWardrobe: true })

// 	return NextResponse.redirect('/wardrobe')
// }
