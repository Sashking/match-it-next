import { GET } from '../api/outfits/route'
import OutfitCard from '../components/OutfitCard'

async function getData() {
	const res = await GET()
	return res.json()
}

export default async function Explore() {
	const data = await getData()

	return (
		<>
			<h1 className="text-2xl font-bold pb-4">Explore</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-3">
				{data.map((item, index) => (
					<OutfitCard
						key={index}
						id={item._id}
						image={item.image}
						name={item.clothes.map((item) => item.name).join(', ')}
						price={item.clothes.reduce(
							(acc, item) =>
								item.inWardrobe ? acc : acc + item.price,
							0
						)}
						inWardrobe={item.clothes.reduce(
							(acc, item) => (item.inWardrobe ? acc + 1 : acc),
							0
						)}
					/>
				))}
			</div>
		</>
	)
}

export const dynamic = 'force-dynamic'