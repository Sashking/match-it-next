import NewItemSpecifics from './NewItemSpecifics'

export default async function NewItemSpecificsPage({
	category,
	subcategory,
	types,
	handleSubmit
}) {
	return (
		<>
			<NewItemSpecifics
				category={category}
				subcategory={subcategory}
				types={types}
				handleReturn={handleSubmit}
			/>
		</>
	)
}
