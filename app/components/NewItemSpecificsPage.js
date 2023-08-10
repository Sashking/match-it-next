'use server'

import connectMongo from '@/utils/dbConfig'
import clothes from '@/models/clothes'

import NewItemSpecifics from './NewItemSpecifics'

async function getData(value) {
  await connectMongo()

  await clothes.updateOne(value, { inWardrobe: true })

  return await outfits.findById(id).populate('clothes')
}

export default async function NewItemSpecificsPage({
	category,
	subcategory,
	types
}) {
	const handleReturn = async (value) => {
    await getData(value)
	}

	return (
		<>
			<NewItemSpecifics
				category={category}
				subcategory={subcategory}
				types={types}
				handleReturn={handleReturn}
			/>
		</>
	)
}
