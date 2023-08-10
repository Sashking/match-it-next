import Image from "next/image";

export default function MatchingItemCard({ name, image }) {
    return (
		<div className="relative w-full rounded-lg border-2 border-black group select-none">
			<div className="relative aspect-square w-full">
				<Image
					src={image}
					alt={name}
					fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
					className="rounded-t-lg object-cover group-hover:object-contain"
				/>
			</div>

			<p className="border-t-2 border-black p-2 font-semibold">{name}</p>
		</div>
	)
}