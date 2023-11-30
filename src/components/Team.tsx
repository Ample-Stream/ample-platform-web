import React from "react";
import { Box, Image, Text } from "theme-ui";

function Team() {
	const teamMembers = [
		{
			position: "CEO, PM & BD",
			name: "Kenny Johns",
			description:
				"Senior Producer/Editor for major networks including Nat Geo, Discovery, MTV/Viacom. Built broadcast SOPs, delivered award-winning commercials plus 100’s of network content pieces.  Serial entrepreneur with 16+ years of biz dev, project management, sales, and marketing experience. Selected as one of DC's Top 100 Innovators.",
			image: "/images/team/kenny.png",
		},
		{
			position: "SMART COTNRACT DEV & GROWTH",
			name: "Rog Servin",
			description:
				"Blockchain dev + consultant for Yuya, Adidas, Kueski Pay, Hedgie, NFTreats, and Genopets. Previous Co-founder of NFT collections Space Skulls and Wavy Valley. Former digital strategist who helped clients amass millions of views and subscribers. Clients include Neshudo, Oso Trava and Mad Cripto.",
			image: "/images/team/rog.png",
		},
		{
			position: "FULL STACK DEV",
			name: "Manuel Rivera",
			description:
				"Full stack dev and previous co-founder of Acá en Tequila and Pidencio. Previously responsible for IT and network systems management for startups and enterprise clients. Mechatronics engineer turned full stack dev with a passion for all things web3 and real world applications.",
			image: "/images/team/manuel.png",
		},
		{
			position: "HOUSE COUNSEL",
			name: "Josh Hale",
			description:
				"Crypto, NFT, DAO Lawyer, Advisor and Keynote Speaker. Experience with high-tech, telecom, intellectual property, and international law. 16+ years with Fortune 500 companies, blockchain startups and businesses. Serves as DC based Crypto Chair.",
			image: "/images/team/josh.png",
		}
	];
	return (
		<Box
			sx={{
				display: "flex",
				flexDirection: "column",
				alignItems: "center",
				justifyContent: "center",
				gap: "40px",
				width: '100%',
				padding: ["30px 20px", "30px 20px", "30px 20px", "30px 50px"],
				backgroundColor: "#0d1223",
			}}
		>
			<Text
				sx={{
					letterSpacing: "0.5rem",
					fontSize: "18px",
					fontWeight: "600",
					color: "#FFFFFF",
					marginTop: "30px",
				}}
			>
				OUR TEAM
			</Text>
			<Box
				sx={{
					display: "flex",
					flexDirection: "row",
					flexWrap: "wrap",
					justifyContent: "center",
					alignItems: "center",
					gap: "20px",
				}}
			>
				{teamMembers.map((member, i) => (
					<Box
						key={`member-${member.name}`}
						sx={{
							backgroundColor: "#131330",
							borderRadius: "16px",
							padding: "20px",
							display: "flex",
							flexDirection: "column",
							alignItems: "center",
							maxWidth: "300px",
							height: "550px",
							gap: "30px",
						}}
					>
						<img
							src={member.image}
							style={{
								borderRadius: "16px",
								width: "200px",
								// height: "190px",
								background:
									"linear-gradient(135deg, hsla(0, 96%, 69%, 0.2) 0%, hsla(225, 84%, 64%, 0.2) 100%)",
							}}
						/>
						<Box sx={{ display: "flex", flexDirection: "column", gap: "10px" }}>
							<Text
								sx={{ color: "#FFFFFF", fontWeight: "400", fontSize: "14px" }}
							>
								{member.position}
							</Text>
							<Text
								sx={{
									color: "#FFFFFF",
									fontWeight: "700",
									fontSize: "24px",
									letterSpacing: "0.05em",
								}}
							>
								{member.name}
							</Text>
							<Text
								sx={{ color: "#FFFFFF", fontWeight: "400", fontSize: "16px" }}
							>
								{member.description}
							</Text>
						</Box>
					</Box>
				))}
			</Box>
		</Box>
	);
}

export default Team;
