import { NextResponse } from 'next/server'
import connectMongo from '@/utils/dbConfig'
import outfits from '@/models/outfit'

export async function GET({ params }) {
	await connectMongo()

	const res = await outfits.findById(params.id).populate('clothes')

	return NextResponse.json(res)
}
