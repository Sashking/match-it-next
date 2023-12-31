import connectMongo from '@/utils/dbConfig'
import outfits from '@/models/outfit'
import { NextResponse } from 'next/server'

export async function GET() {
	await connectMongo()

	const res = await outfits.find().populate('clothes')

	return NextResponse.json(res)
}
