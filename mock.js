return {
    "getMyInfo": {
        "motto": "Code, Create, Inspire",
        "img": "https://example.com/images/profile.jpg",
        "email": "admin@example.com",
        "name": "Admin User",
        "summary": "A passionate developer and blogger.",
        "skills": [
            { "name": "JavaScript", "detail": "Frontend development", "point": "Expert" },
            { "name": "Golang", "detail": "Backend development", "point": "Intermediate" },
            { "name": "MongoDB", "detail": "Database management", "point": "Advanced" }
        ],
        "certifications": [
            { "name": "Certified Kubernetes Administrator", "detail": "CKA Certification" },
            { "name": "AWS Certified Solutions Architect", "detail": "AWS Certification" }
        ]
    },
    "getArticleList": {
        "total": 3,
        "pageSize": 2,
        "pageNum": 1,
        "data": [
            {
                "title": "Introduction to MongoDB",
                "img": "https://example.com/images/mongodb.jpg",
                "abstract": "Learn the basics of MongoDB, a NoSQL database."
            },
            {
                "title": "Getting Started with React",
                "img": "https://example.com/images/react.jpg",
                "abstract": "A beginner's guide to building web applications with React."
            }
        ]
    },
    "getArticle": {
        "title": "Introduction to MongoDB",
        "img": "https://example.com/images/mongodb.jpg",
        "content": "MongoDB is a NoSQL database that stores data in JSON-like documents. It is highly scalable and flexible, making it a popular choice for modern applications."
    }

}