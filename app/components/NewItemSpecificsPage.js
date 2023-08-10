import NewItemSpecifics from './NewItemSpecifics'

export default async function NewItemSpecificsPage({
	category,
	subcategory,
	types,
	handleReturn
}) {
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
