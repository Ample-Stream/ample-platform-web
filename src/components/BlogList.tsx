import { IBlog } from "@/types/Blog"
import { useEffect, useState } from "react"
import { Spinner } from "theme-ui"
import BlogCard from "./BlogCard"

const mediumRssUrl = 'https://api.rss2json.com/v1/api.json?rss_url=https://medium.com/feed/@AMPLE.STREAM'


function BlogList() {
	const [blogs, setBlogs] = useState<IBlog[]>([])
	const [loading, setLoading] = useState<boolean>(true)
	useEffect(() => {
		fetch(mediumRssUrl)
			.then(res => res.json())
			.then(res => {
				console.info({ res })
				setBlogs(res.items)
				setLoading(false)
			})
	}, [])
	if (loading) return <Spinner color="white" />
	return <>
		{blogs.map((blog, index) => (
			<BlogCard key={index} blog={blog} />
		))}
	</>
}

export default BlogList
