export default function CardTag({ text }) {
	return (
		<div className="bg-white border-2 border-black rounded-lg px-2 py-1">
			<p className="text-xs">
				{text}
			</p>
		</div>
	)
}
