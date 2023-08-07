import Link from 'next/link'
import NavbarItem from './NavbarItem'
import * as Unicons from '@iconscout/react-unicons'

export default function Navbar() {
	const navItems = [
		{ name: 'Home', icon: <Unicons.UilEstate size={20} />, link: '/' },
		{
			name: 'Explore',
			icon: <Unicons.UilCompass size={20} />,
			link: '/explore'
		},
		{
			name: 'Wardrobe',
			icon: <Unicons.UilArchive size={20} />,
			link: '/wardrobe'
		}
	]

  // justify-between
	return (
		<nav className="px-10 flex items-center">
			<Link href={'/'}>
				<p className="font-bold text-3xl">m.i</p>
			</Link>
			<div className="flex my-4 mx-16 gap-6">
				{navItems.map((item, index) => (
					<NavbarItem
						key={index}
						name={item.name}
						icon={item.icon}
						link={item.link}
					/>
				))}
			</div>
		</nav>
	)
}
