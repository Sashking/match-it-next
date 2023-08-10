import NewItemForm from '@/app/components/NewItemForm'

export default function New() {
	async function handleReturn(data) {
		// async function getData(value) {
		// 	await connectMongo()
		  
		// 	await clothes.updateOne(value, { inWardrobe: true })
		  
		// 	return await outfits.findById(id).populate('clothes')
		// }

		console.log(data)
	}

	return (
		<>
			<h1 className="text-2xl font-bold pb-4">New item</h1>
			<NewItemForm handleReturn={handleReturn}/>
		</>
	)
}
