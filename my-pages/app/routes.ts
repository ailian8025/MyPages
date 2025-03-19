import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("features/home/Home.tsx"), // Home page
    route("article", "features/article/ArticleList.tsx"), // Article list page
    route("article/:id", "features/article/ArticleDetail.tsx"), // Specific article page
    route("login", "features/login/Login.tsx"), // Login page
] satisfies RouteConfig;
