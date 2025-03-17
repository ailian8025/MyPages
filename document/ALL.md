## TODO
- v0.1 version local run
    - ✅page design 
    - ✅api design
    - ✅db design
    - ~~✅use case~~
    - ✅preapare mock data 
    - ✅error code
    - code the frontend part
        - react framework
        - feature design


## API design
> for v0.1 version only design the get API, it will contain the POST api in the future.

| API Name       | Parameters                                      | Response                                                                                       |
|----------------|------------------------------------------------|-----------------------------------------------------------------------------------------------|
| getMyInfo      | `{}`                                           | `{ "motto": "", "img": "", "email":"", "name": "", "summary": "", "skills": [{ "name": "", "detail": "", "point": "" }], "certifications": [{ "name": "", "detail": "" }] }` |
| getArticleList | `{ "pageSize": integer (optional), "pageNum": integer (optional), "category": string(optional), "tag": string (optional) }` | `{ "total": "", "pageSize": "", "pageNum": "", "data": [{ "title": "", "img": "", "abstract": "" }] }` |
| getArticle     | `{ "articleId": integer }`                     | `{ "title": "", "img": "", "content": "" }`                                                   |




## Error Code
| Code   | ErrorMsg  | Reason |
|---------|-------------|---------|
| MP_ERR_401 | ArticleId is not exist | Request with an unexist articleId |



## 技術スタックの選定

| Areas   | Name        | Version | Detail |
|---------|-------------|---------|--------|
| Front   | React       | x       | x      |
| Front   | MaterialUI  | x       | x      |
| Backend | golang      |         | x      |
| DB | MongoDB      | x        | x      |
| Cache | Redis      | x        | x      |



## 💡Tips
- (win + .) will show the emoji symbols for input butify your document.