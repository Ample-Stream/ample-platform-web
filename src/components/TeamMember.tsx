import { ITeamMember } from "@/types/TeamMebers"
import { Box, Card, Image, Text } from "theme-ui"

interface IProps {
	member: ITeamMember,
	compact?: boolean
}
const TeamMember: React.FC<IProps> = ({ member, compact }) => {

	return (
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
			<img src={member.image} style={{
				borderRadius: "16px", width: "200px",
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
	)

}

export default TeamMember
