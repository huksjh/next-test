import Layout from "../components/layout";

import { NOTION_DATABASE_ID, NOTION_DATABASE_SCREET } from "../config";

export default function Projects({ projects }) {
	console.log(projects);
	return (
		<Layout>
			<h1>프로젝트</h1>
		</Layout>
	);
}

export async function getStaticProps() {
	const options = {
		method: "POST",
		headers: {
			Accept: "application/json",
			"Notion-Version": "2022-02-22",
			"Content-Type": "application/json",
			Authorization: `Bearer ${NOTION_DATABASE_SCREET}`,
		},
		body: JSON.stringify({ page_size: 100 }),
	};

	const res = await fetch(
		`https://api.notion.com/v1/databases/${NOTION_DATABASE_ID}/query`,
		options
	);
	const projects = await res.json();

	return {
		props: { projects }, // will be passed to the page component as props
	};
}
