import { Tools } from "./src/entities/Tools";

interface ITools {
    id: number;
    title: string;
    link: string;
    description: string;
    tags: string[];
}

const tools = [
    {
        id: 17,
        title: "Notion",
        link: "https://notion.so",
        description:
            "All in one tool to organize teams and ideas. Write, plan, collaborate, and get organized. ",
        tags: [
            "organization",
            "planning",
            "collaboration",
            "writing",
            "calendar",
        ],
    },
    {
        id: 18,
        title: "json-server",
        link: "https://github.com/typicode/json-server",
        description:
            "Fake REST API based on a json schema. Useful for mocking and creating APIs for front-end devs to consume in coding challenges.",
        tags: ["api", "json", "schema", "node", "github", "rest"],
    },
    {
        id: 19,
        title: "fastify",
        link: "https://www.fastify.io/",
        description:
            "Extremely fast and simple, low-overhead web framework for NodeJS. Supports HTTP2.",
        tags: ["web", "framework", "node", "http2", "https", "localhost"],
    },
];

const newArray: ITools[] = [];

tools.map((tool, index) => {
    if (tool.tags.includes("node")) {
        newArray.unshift(tool);
        return newArray;
    }
    newArray.push(tool);
    return newArray;
});

console.log(newArray);
