const root = {
    "/": {
        directory: true,
        children: [
            {
                path: "/hobbies/",
                subpath: "hobbies/",
                directory: true,
                children:[
                    {
                        path: "/hobbies/reading",
                        subpath: "reading",
                        directory: false
                    },
                    {
                        path: "/hobbies/gaming",
                        subpath: "gaming",
                        directory: false
                    }
                ]                
            },
            {
                subpath: "languages/",
                directory: true,
                children:[
                    {
                        path: "/languages/c",
                        subpath: "c",
                        directory: false
                    },
                    {
                        path: "/languages/javascript",
                        subpath: "javascript    ",
                        directory: false
                    },
                    {
                        path: "/languages/python",
                        subpath: "python",
                        directory: false
                    }
                ]                
            }
        ]
    }
}

export default root;