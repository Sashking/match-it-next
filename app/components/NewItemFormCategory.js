import NewItemFormSubcategory from './NewItemFormSubcategory'

export default function NewItemFormCategory({
	category,
	subcategories,
	isActive,
	handleCategoryClick,
  handleSubcategoryClick,
	index
}) {

	return (
		<>
			<button
				className={`${
					isActive ? 'bg-black text-white' : 'hover:bg-black/10'
				} p-5 border-2 border-black rounded-lg font-semibold flex justify-center cursor-pointer`}
				onClick={() => handleCategoryClick(index)}
			>
				{category}
			</button>

			{isActive && (
				<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2.5">
					{subcategories.map((subcategory, i) => (
						<NewItemFormSubcategory
							key={i}
							subcategory={subcategory.name}
							index={i}
							handleSubcategoryClick={handleSubcategoryClick}
						/>
					))}
				</div>
			)}
		</>
	)
}
