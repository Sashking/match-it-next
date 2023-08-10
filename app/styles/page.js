import { GET } from '../api/styles/route'
import StylesItemCard from '../components/StylesItemCard'

async function getData() {
	const res = await GET()
	return res.json()
}

export default async function Styles() {
	const data = await getData()

	return (
		<>
			<h1 className="text-2xl font-bold pb-4">Essentials</h1>
			<div className="flex flex-col gap-3">
				{data.map((item, index) => (
					<>
						<h2 key={index} className="text-lg font-semibold">
							{item.name}
						</h2>
						<div
							key={index}
							className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3"
						>
							{item.clothes.map((item, index) => (
								<StylesItemCard
									key={index}
									name={item.name}
									image={item.image}
                  					tag={item.inWardrobe ? 'In wardrobe' : item.price + ' Kč'} 
									//TODO: ^ replace with price / in wardrobe
								/>
							))}
						</div>
					</>
				))}
			</div>
		</>
	)
}
