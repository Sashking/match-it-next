'use client'

import { useState } from 'react'
import NewItemFormCategory from './NewItemFormCategory'
import NewItemSpecifics from './NewItemSpecifics.js'

export default function NewItemForm({ handleReturn }) {
	const categories = [
		{
			name: 'Tops',
			subcategories: [
				{
					name: 'T-Shirts',
					types: [
						{
							name: 'Short-sleeved'
						},
						{
							name: 'Long-sleeved'
						}
					]
				},
				{
					name: 'Shirts & Blouses',
					types: [
						{
							name: 'Button-down shirts'
						},
						{
							name: 'Dress shirts'
						},
						{
							name: 'Blouses'
						}
					]
				}
			]
		},
		{
			name: 'Bottoms',
			subcategories: [
				{
					name: 'Pants',
					types: [
						{
							name: 'Dress pants'
						},
						{
							name: 'Chinos'
						},
						{
							name: 'Trousers'
						}
          			]
				},
				{
					name: 'Jeans',
				},
				{
					name: 'Shorts',
					types: [
						{
							name: 'Denim shorts'
						},
						{
							name: 'Chino shorts'
						}
					]
				},
				{
					name: 'Skirts',
				}
			]
		},
		{
			name: 'Outerwear',
			subcategories: [
				{
					name: 'Jackets',
					types: [
						{
							name: 'Bomber jackets'
						},
						{
							name: 'Denim jackets'
						}
					]
				},
				{
					name: 'Coats',
					types: [
						{
							name: 'Trench coats'
						},
						{
							name: 'Peacoats'
						},
						{
							name: 'Parkas'
						}
					]
				},
				,
				{
					name: 'Sweaters',
					types: [
						{
							name: 'Pullover'
						},
						{
							name: 'Turtleneck'
						}
					]
				},
				{
					name: 'Hoodies & Sweatshirts',
					types: [
						{
							name: 'Zip-up'
						},
						{
							name: 'Pullover'
						}
					]
				},
				{
					name: 'Blazers'
				},
				{
					name: 'Vests'
				}
			]
		},
		{
			name: 'Footwear',
			subcategories: [
				{
					name: 'Sneakers',
					types: [
						{
							name: 'Casual sneakers'
						},
						{
							name: 'Athletic sneakers'
						}
					]
				},
				{
					name: 'Boots'
				},
				{
					name: 'Sandals'
				},
				{
					name: 'Heels'
				},
				{
					name: 'Flats'
				}
			]
		}
	]

	const [selectedCategoryIndex, setSelectedCategoryIndex] = useState(-1)
	const [specifics, setSpecifics] = useState(false)

  	const [selectedCategory, setSelectedCategory] = useState('')
  	const [selectedSubcategory, setSelectedSubcategory] = useState('')
  	const [typeData, setTypeData] = useState(null)

	const handleCategoryClick = (index) =>
		selectedCategoryIndex === index
			? setSelectedCategoryIndex(-1)
			: setSelectedCategoryIndex(index)

	const handleSubcategoryClick = (index) => {
		setSpecifics(true)
    	setSelectedCategory(categories[selectedCategoryIndex].name)
    	setSelectedSubcategory(categories[selectedCategoryIndex].subcategories[index].name)
    	setTypeData(categories[selectedCategoryIndex].subcategories[index].types)
	}

	return (
		<>
			{specifics ? (
				<NewItemSpecifics category={selectedCategory} subcategory={selectedSubcategory} types={typeData} handleReturn={handleReturn} />
			) : (
				<div className="flex flex-col gap-2">
					{categories.map(
						(category, index) =>
							(selectedCategoryIndex === -1 ||
								selectedCategoryIndex === index) && (
								<NewItemFormCategory
									key={index}
									category={category.name}
									subcategories={category.subcategories}
									isActive={selectedCategoryIndex === index}
									handleCategoryClick={handleCategoryClick}
									handleSubcategoryClick={
										handleSubcategoryClick
									}
									index={index}
								/>
							)
					)}
				</div>
			)}
		</>
	)
}
