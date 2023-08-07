import './globals.css'
import { Inter } from 'next/font/google'
import Navbar from './components/Navbar'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
	title: 'MatchIt',
	description: 'Match your clothes with ease'
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={`${inter.className} container mx-auto`}>
				<Navbar />
				{children}
			</body>
		</html>
	)
}
