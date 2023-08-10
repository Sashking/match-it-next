import { GET } from "./api/matching/route"
import MatchingItemCard from "./components/MatchingItemCard"

async function getData() {
	const res = await GET()
	return res.json()
}

export default async function Home() {
	const data = await getData()

	return (
		<>
			<h1 className="text-2xl font-bold pb-4">Home</h1>
			<div className="flex flex-col gap-3 mb-16">
				{data.map((arrayOfItems, index) => (
					<div
						key={index}
						className="grid grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-3"
					>
						{arrayOfItems.map((item, index) => (
							<MatchingItemCard
								key={index}
								name={item.name}
								image={item.image}
							/>
						))}
					</div>
				))}
			</div>
		</>
	)
}

export const dynamic = 'force-dynamic'