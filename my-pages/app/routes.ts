import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
    index("routes/home.tsx"),
    route("material_ui", "routes/material_ui.tsx")
] satisfies RouteConfig;
