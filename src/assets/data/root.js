const root = {
        path: "/",
        directory: true,
        children: [
            {
                path: "/hobbies/",
                subpath: "hobbies/",
                directory: true,
                children:[
                    {
                        path: "/hobbies/reading/",
                        subpath: "reading/",
                        directory: true,
                        children:[
                            {
                                path: "/hobbies/reading/novels",
                                subpath: "novels",
                                directory: true
                            },
                            {
                                path: "/hobbies/reading/books",
                                subpath: "books",
                                directory: false
                            }
                        ]       
                    },
                    {
                        path: "/hobbies/gaming/",
                        subpath: "gaming/",
                        directory: false
                    }
                ]                
            },
            {
                path: "/languages/",
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
                        subpath: "javascript",
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

export default root;