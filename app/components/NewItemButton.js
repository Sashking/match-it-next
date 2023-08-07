import Link from 'next/link'
import UilPlus from '@iconscout/react-unicons/icons/uil-plus'

export default function NewItemButton() {
	return (
		<Link href="/wardrobe/new" className="border-2 border-black/50 rounded-lg border-dashed hover:bg-black/10 flex items-center justify-center">
			<UilPlus size="24" />
		</Link>
	)
}
