import { useState } from 'react'
import { BsMedium, BsTwitter, BsList } from 'react-icons/bs'
import { SiDiscord } from 'react-icons/si'
import Drawer from 'react-modern-drawer'
import { Box, Link, Text } from 'theme-ui'
import { Inter } from "next/font/google";
import useWindowDimensions from '@/hooks/useWindowDimensions'

const inter = Inter({ subsets: ["latin"] });

function NavDrawer() {
	const { width } = useWindowDimensions()
	const [isOpen, setIsOpen] = useState(false)

	const toggleDrawer = () => {
		setIsOpen((prevState) => !prevState)
	}

	if (width && width >= 640) return <Content />

	return <Box>
		<BsList
			size={25}
			onClick={toggleDrawer}>
			Open drawer
		</BsList>

		<Drawer
			style={{
				backgroundColor: "#2c2359",
			}}
			lockBackgroundScroll={true}
			open={isOpen}
			onClose={toggleDrawer}
			size={'70vw'}
			direction='right'
		>
			<Content />
		</Drawer>
	</Box>
}

function Content() {
	return (
		<Box
			sx={{
				display: "flex",
				// flexDirection: "column",
				flexDirection: ['column-reverse', 'row', 'row', 'row'],
				alignItems: "center",
				justifyContent: 'center',
				height: '100%',
				gap: ["20px", "20px", "20px", "30px"],
				fontSize: "14px",
			}}
			className={inter.className}
		>
			<Link href="https://medium.com/@AMPLE.STREAM">
				<BsMedium
					style={{
						color: "#FFFFFF",
						fontSize: "1.5rem",
						cursor: "pointer",
					}}
				/>
			</Link>
			<Link href="https://twitter.com/AmpleProtocol">
				<BsTwitter
					style={{
						color: "#FFFFFF",
						fontSize: "1.5rem",
						cursor: "pointer",
					}}
				/>
			</Link>
			<Link href="https://discord.gg/8yUwnapFmd">
				<SiDiscord
					style={{
						color: "#FFFFFF",
						fontSize: "1.5rem",
						cursor: "pointer",
					}}
				/>
			</Link>
			<Link href="https://ample-platform.gitbook.io/ample-whitepaper">
				<Text
					sx={{
						// color: "rgba(240,240,240,1)",
						fontWeight: "700",
						fontSize: "16px",
						letterSpacing: "0.04em",
						lineHeight: "2rem",
					}}
				>
					Whitepaper
				</Text>
			</Link>
			<Link
				href="https://ample.docsend.com/view/ddfv59hrnw3fgnby"
				target="blank"
			>
				<Text
					sx={{
						// color: "rgba(240,240,240,1)",
						fontWeight: "700",
						fontSize: "16px",
						letterSpacing: "0.04em",
						lineHeight: "2rem",
					}}
				>
					Pitch Deck
				</Text>
			</Link>
		</Box>
	)
}

export default NavDrawer
