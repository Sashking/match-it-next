import { NextResponse } from 'next/server'
import connectMongo from '@/utils/dbConfig'
import outfits from '@/models/outfit'

export async function GET(id) {
	await connectMongo()

	if (id) {
		const res = await outfits.findById(id).populate('clothes')
		return NextResponse.json(res)
	} else {
		const res = await outfits.find().populate('clothes')
		return NextResponse.json(res)
	}
}

// export async function POST(request) {
// 	await connectMongo()

// 	const data = await request.json()

// 	const newOutfit = new outfits(data)
// 	await newOutfit.save()

// 	return NextResponse.json(newOutfit)
// }
