import { keyframes } from "@emotion/react";
import { Kanit, Roboto } from "next/font/google";
import React from "react";
import { BsArrowRight, BsRocketTakeoff } from "react-icons/bs";
import { Box, Button, Flex, Image, Link, Text } from "theme-ui";

const kanit = Kanit({ weight: "700", subsets: ["latin"] });
const roboto = Roboto({ weight: "500", subsets: ["latin"] });

const wave = keyframes({
	from: { transform: "translateY(0)" },
	to: { transform: "translateY(-5px)" },
});

const fadeIn = keyframes({ from: { opacity: 0 }, to: { opacity: 1 } });
function Features() {
	const features = [
		{
			title: "Revolutionizing Distribution, Providing Opportunities",
			subTitle: "",
			text: "Launch your digital asset campaigns, then distribute digital and media assets to multiple marketplaces and streaming platforms. Maximize monetization and exposure for your brand or bodies of work.",
			image: "/images/mvp-screenshot-3.png",
		},
		{
			title: "Stream Content and Exchange Digital Assets",
			subTitle: "",
			text: "Your fans, collectors and backers can watch content and exchange NFTs from the same platforms they stream from. Increased user participation and inclusion opportunities equal more engagement across mediums.",
			image: "/images/mvp-screenshot-2.png",
		},
		{
			title: "Secure Payments and Transparent Analytics",
			subTitle: "",
			text: "Fixing decades of payment, funding, distribution, ownership, licensing and rights management issues. On-chain analytics and payment clarity for all owners and users. ",
			image: "/images/mvp-screenshot-1.png",
		},
		{
			title: "Your Content and IP, Your Way",
			subTitle: "",
			text: "Send your followers, audiences, collectors and fans directly to your showcase page where you can offer everything from full IP ownership to merch to licensing opportunities. ",
			image: "/images/mvp-screenshot-4.png",
		},
	];

	return (
		<Box sx={{ width: "100vw", backgroundColor: "#131321" }}>
			<Box
				sx={{
					padding: "30px 120px 60px 120px",
					display: "flex",
					flexDirection: "column",
					justifyContent: "center",
					gap: "40px",
					animation: `${fadeIn} 2s `,
				}}
			>
				{features.map((feature, i) => (
					<Box
						key={feature.title}
						sx={{
							display: "flex",
							flexDirection: [
								"column",
								"column",
								"column",
								i % 2 === 0 ? "row" : "row-reverse",
							],
							gap: "50px",
							alignItems: "center",
							justifyContent: "center",
						}}
					>
						<Box
							sx={{
								display: "flex",
								flexDirection: "column",
								gap: "20px",
								width: ["90vw", "90vw", "90vw", "60%"],
								flex: 1,
								background: "rgba(120, 150, 230, 0.1)",
								boxShadow: "rgba(0, 0, 0, 0.1) 0px 4px 12px",
								borderRadius: "16px",
								padding: "20px",
								animation: `${wave} 2s ease-in-out infinite alternate`,
								backdropFilter: "blur(5px)",
							}}
						>
							<Text
								sx={{
									fontSize: ["28px", "28px", "28px", "40px"],
									fontWeight: "600",
									background: "linear-gradient(200deg,#2C499B,#3b61d0,#ca605c)",
									lineHeight: '40px',
									backgroundClip: "text",
									letterSpacing: "0.02em",
									textFillColor: "transparent",
								}}
								className={kanit.className}
							>
								{feature.title}
							</Text>
							<Text
								sx={{
									color: "rgba(240,240,240,1)",
									fontWeight: "500",
									fontSize: "22px",
									letterSpacing: "0.02em",
									lineHeight: "2rem",
								}}
							>
								{feature.subTitle}
							</Text>
							<Text
								sx={{
									color: "rgba(240,240,240,1)",
									fontWeight: "500",
									fontSize: "20px",
									letterSpacing: "0.05em",
									lineHeight: "1.6rem",
									width: ["fit-content", "fit-content", "fit-content", "fit-content"],
									wordBreak: "break-word",
								}}
								className={roboto.className}
							>
								{feature.text}
							</Text>
						</Box>
						<Box
							sx={{
								display: "flex",
								flexDirection: "row",
								justifyContent: "center",
								alignItems: "center",
								height: ["200px", "250px", "250px", "350px"],
								//   animation: `${wave} 1s ease-in-out infinite alternate`,
							}}
						>
							<img
								src={feature.image}
								style={{ height: "100%" }}
								alt="feature"
							/>
						</Box>
					</Box>
				))}

				<Flex
					sx={{
						width: '100%',
						justifyContent: 'center'
					}}
				>
					<Link href="https://app.ample.stream/launch-your-project" target="blank">
						<Button
							sx={{
								display: "flex",
								alignItems: "center",
								gap: "10px",
								padding: '20px',
								background:
									"linear-gradient(135deg, hsla(0, 96%, 69%, 1) 0%, hsla(225, 84%, 64%, 1) 100%)",
								borderRadius: "16px",
								fontSize: ["18px", "18px", "18px", "20px"],
								cursor: "pointer",
								":hover": {
									backgroundColor: "#7310E0",
								},
								zIndex: 3,
							}}
						>
							Launch with us
							<BsRocketTakeoff />
						</Button>
					</Link>
				</Flex>
			</Box>
		</Box>
	);
}

export default Features;
