export default function NewItemFormSubcategory({
	subcategory,
	handleSubcategoryClick,
	index
}) {
	return (
		<>
			<button
				className={`p-8 border-2 border-black rounded-lg font-semibold flex justify-center cursor-pointer hover:bg-black/10`}
				onClick={() => handleSubcategoryClick(index)}
			>
				{subcategory}
			</button>
		</>
	)
}
