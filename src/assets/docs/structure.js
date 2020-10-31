export default {
    name: "docs",
    title: "Docs",
    content: require("./index.md").default,
    children: [
        {
            "name": "orm",
            "title": "ORM",
            "content": require("./orm/index.md").default,
            "children": [
                {
                    "name": "start",
                    "title": "Start Page",
                    "content": require("./orm/start.md").default
                }
            ]
        }
    ]
}