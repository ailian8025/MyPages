import { Button } from "@mui/material";
import type { Route } from "./+types/material_ui";
import { useEffect, useState } from "react";
import Copyright from "~/component/copy_right";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Material UI Page" },
    { name: "description", content: "Explore Material UI with React Router." },
  ];
}

export default function MaterialUI() {

  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  if (!isClient) return null;

  return (
    <div>
      <Button variant="contained">Hello world</Button>
      <Copyright />
    </div>
  );
}