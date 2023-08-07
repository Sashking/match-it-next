import Image from 'next/image'
import Link from 'next/link'
import CardTag from './CardTag'

export default function OutfitCard({ id, image, name, price, inWardrobe }) {
	return (
		<Link
			href={`/explore/${id}`}
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
					<CardTag text={`${inWardrobe} item${inWardrobe > 1 ? 's' : ''} in wardrobe`} />
          <CardTag text={`${price} Kč`} />
				</div>
			</div>

			<p className="border-t-2 border-black p-2 font-semibold">{name}</p>
		</Link>
	)
}
