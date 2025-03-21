import { type RouteConfig, index, layout, route } from "@react-router/dev/routes";

/*
    main part
    - child part
    - child part
    other part
    - child part
    ...
*/
export default [
    index("features/home/Home.tsx"), // Home page
    layout("./component/Layout.tsx", [
        route("article", "features/article/ArticleList.tsx"), // Article list page
        route("article/:id", "features/article/ArticleDetail.tsx"), // Specific article page
      ]),
    route("login", "features/login/Login.tsx"), // Login page
] satisfies RouteConfig;
