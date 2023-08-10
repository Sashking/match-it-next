import Image from 'next/image'
import Link from 'next/link'
import CardTag from './CardTag'

export default function OutfitCard({ name, image, category, tag }) {
	const categoryTagColors = {
		Tops: 'bg-blue-100 text-blue-900',
		Bottoms: 'bg-yellow-100 text-yellow-900',
		Outerwear: 'bg-red-100 text-red-900',
		Footwear: 'bg-green-100 text-green-900',
		Accessories: 'bg-purple-100 text-purple-900',
	}

	return (
		<Link
			href={`https://example.org/${name}`}
			className="relative w-full rounded-lg border-2 border-black group select-none"
		>
			<div className="relative aspect-square w-full">
				<Image
					src={image}
					alt={name}
					fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					className="rounded-t-lg object-cover group-hover:object-contain"
				/>

				<div className="absolute right-2 bottom-2 flex gap-3">
					<CardTag text={tag} />
				</div>

				<div className={`absolute left-2 top-2 rounded-lg px-3 py-1 text-xs ${categoryTagColors[category]}`}>
					{category}
				</div>
			</div>

			<p className="border-t-2 border-black p-2 font-semibold">{name}</p>
		</Link>
	)
}
