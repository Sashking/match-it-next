'use client'

import { useState } from 'react'
import { Listbox } from '@headlessui/react'
import UilDirection from '@iconscout/react-unicons/icons/uil-direction'
import UilPlus from '@iconscout/react-unicons/icons/uil-plus'

export default function NewItemSpecifics({ category, subcategory, types }) {
	const [selectedType, setSelectedType] = useState(null)
	const [selectedColor, setSelectedColor] = useState(null)

	const colors = [
		{
			name: 'Black',
			hex: '262729'
		},
		{
			name: 'Blue',
			hex: '526c9c'
		},
		{
			name: 'Gray',
			hex: '555555'
		},
		{
			name: 'Khaki',
			hex: 'bd9065'
		},
		{
			name: 'Beige',
			hex: 'c4b2a2'
		},
		{
			name: 'Olive',
			hex: '42482e'
		},
		{
			name: 'White',
			hex: 'e8eaec'
		},
		{
			name: 'Burgundy',
			hex: '753f49'
		}
	]

	const handleSubmit = (e) => {
		e.preventDefault()

		console.log({
			name: `${selectedColor.name} ${selectedType.name}`,
			image: '',
			inWardrobe: true,
			price: 0,
			category,
			subcategory,
			type: selectedType.name,
			color: selectedColor.name,
			styles: []
		})
	}

	return (
		<>
			<div className="flex flex-col gap-2 relative">
				<h1 className="bg-black text-white flex justify-center p-5 rounded-lg font-semibold mb-2">
					{`${category} > ${subcategory}`}
				</h1>

				{types && types.length > 1 && (
					<Listbox value={selectedType} onChange={setSelectedType}>
						<Listbox.Button className="flex items-center justify-between border-2 border-black rounded-lg">
							<p className="px-8 py-4">
								{selectedType
									? selectedType.name
									: '--Select type--'}
							</p>
							<div className="mr-4">
								<UilDirection />
							</div>
						</Listbox.Button>
						<Listbox.Options className="border-2 border-black rounded-lg">
							{types.map((type, index) => (
								<Listbox.Option
									key={index}
									value={type}
									className="px-6 py-3 hover:bg-black/10"
								>
									{type.name}
								</Listbox.Option>
							))}
						</Listbox.Options>
					</Listbox>
				)}

				<Listbox value={selectedColor} onChange={setSelectedColor}>
					<Listbox.Button className="flex items-center justify-between border-2 border-black rounded-lg">
						<p className="px-8 py-4 flex items-center gap-3">
							{selectedColor ? (
								<>
									<div
										className="w-6 h-6 rounded-full"
										style={{
											backgroundColor: `#${selectedColor.hex}`
										}}
									></div>
									{selectedColor.name}
								</>
							) : (
								'--Select color--'
							)}
						</p>
						<div className="mr-4">
							<UilDirection />
						</div>
					</Listbox.Button>
					<Listbox.Options className="border-2 border-black rounded-lg">
						{colors.map((color, index) => (
							<Listbox.Option
								key={index}
								value={color}
								className="px-6 py-3 hover:bg-black/10 flex items-center gap-4"
							>
								<div
									className="w-6 h-6 rounded-full"
									style={{ backgroundColor: `#${color.hex}` }}
								></div>
								{color.name}
							</Listbox.Option>
						))}
					</Listbox.Options>
				</Listbox>
			</div>

			<button
				className="container absolute bottom-8 left-1/2 transform -translate-x-1/2 flex w-full items-center justify-between bg-black text-white py-4 px-6 rounded-lg"
				onClick={handleSubmit}
				type="submit"
			>
				<p className="font-semibold">Add to Wardrobe</p>
				<UilPlus size={20} />
			</button>
		</>
	)
}
