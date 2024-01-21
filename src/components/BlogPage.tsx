import { Box, Text } from "theme-ui"
import Header from "./Header"
import Footer from "./Footer"
import { Inter } from "next/font/google"
import BlogList from "./BlogList";

const inter = Inter({ subsets: ["latin"] });

function BlogPage() {
	return <>

		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				minHeight: "100vh",
				alignItems: "center",
			}}
			className={inter.className}
		>
			<Header />

			<Box
				sx={{
					gap: "50px",
					padding: ["10px 5vw", "10px 5vw", "10px 10vw", "50px 20vw"],
					minHeight: '100vh',
					width: "100vw",
					backgroundColor: "#0d1223",
				}}
			>
				<Text
					as='h1'
					sx={{
						color: "#FFFFFF",
						display: "block",
						fontWeight: "700",
						fontSize: ["48px", "52px", "48px", "60px"],
						background: "#FFFFFF",
						backgroundClip: "text",
						letterSpacing: "0.02em",
						textFillColor: "transparent",
					}}
				>
					Blog
				</Text>
				<BlogList />
			</Box>
			<Footer />
		</Box>
	</>
}

export default BlogPage

