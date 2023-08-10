import connectMongo from '@/utils/dbConfig'
import styles from '@/models/styles'
import { NextResponse } from 'next/server'

export async function GET() {
	await connectMongo()

	const res = await styles.find().populate('clothes')

	return NextResponse.json(res)
}