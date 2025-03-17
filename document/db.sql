/*
| API Name       | Parameters                                      | Response                                                                                       |
|----------------|------------------------------------------------|-----------------------------------------------------------------------------------------------|
| getMyInfo      | `{}`                                           | `{ "motto": "", "img": "", "name": "", "summary": "", "skills": [{ "name": "", "detail": "", "point": "" }], "certifications": [{ "name": "", "detail": "" }] }` |
| getArticleList | `{ "pageSize": integer (optional), "pageNum": integer (optional), "category": string(optional), "tag": string (optional) }` | `{ "total": "", "pageSize": "", "pageNum": "", "data": [{ "title": "", "img": "", "abstract": "" }] }` |
| getArticle     | `{ "articleId": integer }`                     | `{ "title": "", "img": "", "content": "" }`    
*/

/* use docker to start a MongoDB instance

 docker run --name mongodb -d -p 27017:27017 mongo

*/

-- Switch to the blog database
use blog;

-- Create Users collection
db.Users.insertMany([
    { 
        motto: "motto", 
        name: "admin", 
        email: "admin@example.com", 
        imgId: "img_id",
        summary: "summary",
        skills: [
            { name: "skill_name", detail: "skill_detail", point: "skill_point" }
        ],
        certifications: [
            { name: "certification_name", detail: "certification_detail" }
        ],
        createdAt: new Date(),
        updatedAt: new Date()
    }
]);

-- Create Article collection
db.Article.insertMany([
    { 
        userId: "unique_user_id",
        title: "First Post",
        abstract: "This is the first post.",
        content: "This is the first post.",
        categories: ["General"], 
        tags: ["First"],
        imgId: "img_id",
        createdAt: new Date(), 
        updatedAt: new Date() 
    }
]);

/* about the GridFS imgId
    // Simulate image upload to GridFS
    const image = {
        filename: "admin_image.jpg", // Image filename
        data: fs.readFileSync(path.join(__dirname, "images", "admin_image.jpg")) // Read the image file
    };

    // Upload image to GridFS
    const bucket = new mongoose.mongo.GridFSBucket(conn.db, { bucketName: 'images' });
    const uploadStream = bucket.openUploadStream(image.filename);
    
    uploadStream.write(image.data);
    uploadStream.end();

    // Wait until the image upload is finished and get the imgId
    const imgId = uploadStream.id; // Get the imgId for the image
*/
