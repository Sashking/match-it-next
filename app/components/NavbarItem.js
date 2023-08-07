'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

export default function NavbarItem({ name, icon, link }) {
	const currentRoute = usePathname()
	const isActive = '/' + currentRoute.split('/')[1] === link

	return (
		<Link href={link}>
			<div
				className={`${
					isActive ? 'bg-black text-white' : 'hover:bg-black/10'
				} px-6 py-2 rounded-lg flex items-center`}
			>
				<div className="mr-2">{icon}</div>
				<p className="font-medium">{name}</p>
			</div>
		</Link>
	)
}
