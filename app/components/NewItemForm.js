'use client'

import { useState } from 'react'
import NewItemFormCategory from './NewItemFormCategory'
import NewItemSpecificsPage from './NewItemSpecificsPage.js'

export default function NewItemForm() {
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
						},
						{
							name: 'Graphic t-shirts'
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
				},
				{
					name: 'Sweaters',
					types: [
						{
							name: 'Pullover'
						},
						{
							name: 'Cardigan'
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
          types: [
            {
              name: 'Skinny jeans'
            },
            {
              name: 'Straight jeans'
            },
            {
              name: 'Bootcut jeans'
            }
          ]
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
          types: [
            {
              name: 'Mini skirts'
            },
            {
              name: 'Midi skirts'
            },
            {
              name: 'Maxi skirts'
            }
          ]
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
            },
            {
              name: 'Leather jackets'
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
					name: 'Boots',
          types: [
            {
              name: 'Ankle boots'
            },
            {
              name: 'Knee-high boots'
            }
          ]
				},
				{
					name: 'Sandals',
          types: [
            {
              name: 'Flip-flops'
            },
            {
              name: 'Slides'
            }
          ]
				},
				{
					name: 'Heels',
          types: [
            {
              name: 'Pumps'
            },
            {
              name: 'Wedges'
            }
          ]
				},
				{
					name: 'Flats',
          types: [
            {
              name: 'Ballet flats'
            },
            {
              name: 'Loafers'
            }
          ]
				}
			]
		},
		{
			name: 'Accessories',
			subcategories: [
				{
					name: 'Hats & Caps',
          types: [
            {
              name: 'Baseball caps'
            },
            {
              name: 'Beanies'
            }
          ]
				},
				{
					name: 'Scarves'
				},
				{
					name: 'Gloves'
				},
				{
					name: 'Ties'
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
				<NewItemSpecificsPage category={selectedCategory} subcategory={selectedSubcategory} types={typeData} />
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
