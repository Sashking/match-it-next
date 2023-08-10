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
      name: 'Styles',
      icon: <Unicons.UilStar size={20} />,
      link: '/styles'
    },
		{
			name: 'Wardrobe',
			icon: <Unicons.UilArchive size={20} />,
			link: '/wardrobe'
		}
	]

  // justify-between
	return (
		<nav className="flex items-center justify-between">
			<Link href={'/'}>
				<p className="font-bold text-3xl">m<span className='text-blue-500'>.</span>i</p>
			</Link>
			<div className="flex my-4 gap-3 md:gap-6">
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
