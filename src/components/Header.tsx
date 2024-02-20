import React from "react";
import { Box, Image, Text } from "theme-ui";
import Link from "next/link";
import NavDrawer from "./NavDrawer";


function Header() {
	return (
		<Box
			sx={{
				width: "100%",
				height: "4rem",
				padding: "10px 30px",
				backgroundColor: "#2c2359",
				display: "flex",
				flexDirection: "row",
				alignItems: "center",
				justifyContent: "space-between",
				boxShadow: "0px -20px 1000px 5px blue ",
				borderBottom: "1px solid #2c2359",
				zIndex: 2,
			}}
		>
			{/* Logo */}
			<Link href="/">
				<Box
					sx={{
						display: "flex",
						justifyContent: "center",
						alignItems: "center",
						cursor: "pointer",
					}}
				>
					<Image src="/images/logo.png" sx={{ height: "2rem" }} />
				</Box>
			</Link>

			{/* links  */}
			<NavDrawer />
		</Box>
	);
}

export default Header;
