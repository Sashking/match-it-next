import OutfitItemCard from '@/app/components/OutfitItemCard'
import connectMongo from '@/utils/dbConfig'
import outfits from '@/models/outfit'

async function getData(id) {
	await connectMongo()

	return await outfits.findById(id).populate('clothes')
}

export default async function Outfit({ params }) {
	const data = await getData(params.id)
	const name = data.clothes.map((item) => item.name).join(', ')

	return (
		<>
			<h1 className="text-2xl font-bold pb-4">{name}</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
				{data.clothes.map((item, index) => (
					<OutfitItemCard
						key={index}
						name={item.name}
						image={item.image}
						category={item.category}
						tag={
							item.inWardrobe ? 'In wardrobe' : item.price + ' Kč'
						}
					/>
				))}
			</div>
		</>
	)
}

export const dynamic = 'force-dynamic'