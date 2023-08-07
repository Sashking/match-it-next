import Image from 'next/image'
import Link from 'next/link'
import CardTag from './CardTag'

export default function OutfitCard({ name, image, category, tag }) {
	return (
		<Link
			href={`https://example.org/${name}`}
			className="relative w-full rounded-lg border-2 border-black group select-none"
		>
			<div className="relative aspect-square w-full">
				<Image
					src={image}
					alt={name}
					layout="fill"
					className="rounded-t-lg object-cover group-hover:object-contain"
				/>

				<div className="absolute right-2 bottom-2 flex gap-3">
					<CardTag text={tag} />
				</div>

				<Image
					src={`/${category}.svg`}
					alt={category}
					width={40}
					height={40}
					className="absolute left-2 top-2 rounded-full p-2.5 bg-white"
				/>
			</div>

			<p className="border-t-2 border-black p-2 font-semibold">{name}</p>
		</Link>
	)
}
