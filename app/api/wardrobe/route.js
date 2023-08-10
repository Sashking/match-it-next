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

//   // check if item already exists


// 	return NextResponse.json(newItem)
// }

// export async function PATCH({ category, subcategory, type, color }) {
// 	await connectMongo()

// 	await clothes.updateOne({ category, subcategory, type, color }, { inWardrobe: true })

// 	return NextResponse.redirect('/wardrobe')
// }
