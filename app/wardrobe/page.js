import ClothingItemCard from '../components/ClothingItemCard'
import NewItemButton from '../components/NewItemButton'

async function getData() {
  const res = await import('../api/wardrobe/route')
	return await (await res.GET()).json()
}

export default async function Wardrobe() {
	const data = await getData()

	return (
		<>
			<h1 className="text-2xl font-bold pb-4">Your wardrobe</h1>
			<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-3">
				<NewItemButton />
				{data.map((item, index) => (
					<ClothingItemCard
						key={index}
						name={item.name}
						image={item.image}
						category={item.category}
					/>
				))}
			</div>
		</>
	)
}
