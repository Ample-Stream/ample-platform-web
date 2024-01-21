import { IBlog } from "@/types/Blog"
import { useMemo } from "react"
import { Box, Grid, Card, Image, Text, Link } from "theme-ui"

interface IProps {
	blog: IBlog
}
function BlogCard({ blog }: IProps) {
	const startIndex = blog.content.indexOf('http')
	const endIndex = blog.content.indexOf('\"', startIndex)
	const imgSrc = blog.content.slice(startIndex, endIndex)

	return <Link href={`/blog/${blog.guid}`}>
		<Card sx={{ cursor: 'pointer' }}>
			<Grid columns='1fr 4fr'>
				<Box sx={{ height: '150px' }}>
					<Image sx={{ height: '100%', width: '100%', objectFit: 'cover' }} src={imgSrc} />
				</Box>
				<Box>
					<Box>
						<Text variant="h1">{blog.title}</Text>
					</Box>
					<Box>
						<Text>{new Date(blog.pubDate).toDateString()}</Text>
					</Box>
					<Box>
						<Text>By {blog.author}</Text>
					</Box>
				</Box>
			</Grid>
		</Card>
	</Link>

}

export default BlogCard
