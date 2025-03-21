import { Container } from "@mui/material";
import React from "react";
import MainContent from "./MainContent";
import Latest from "./Latest";

const ArticleList: React.FC = () => {
  // Example article data
  const articles = [
    { id: "1", title: "Understanding React", summary: "Learn the basics of React and how it works." },
    { id: "2", title: "Getting Started with TypeScript", summary: "A beginner's guide to TypeScript." },
    { id: "3", title: "Exploring React Router", summary: "Learn how to use React Router for navigation." },
  ];

  return (
    <>
      <Container
        maxWidth="lg"
        component="main"
        sx={{ display: 'flex', flexDirection: 'column', my: 16}}
      >
        <MainContent />
        <Latest />
      </Container>
    </>
  );
};

export default ArticleList;