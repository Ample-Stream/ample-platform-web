"use client";
import { ThemeProvider } from "theme-ui";
import { theme } from "@/themes/theme";
import BlogPage from "@/components/BlogPage";

export default function Home() {
	return (
		<ThemeProvider theme={theme}>
			<BlogPage />
		</ThemeProvider>
	);
}
