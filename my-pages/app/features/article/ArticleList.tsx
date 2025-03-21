import React from "react";
import { Link, Outlet } from "react-router-dom";
import CopyRight from "~/component/Footer";

const ArticleList: React.FC = () => {
  // Example article data
  const articles = [
    { id: "1", title: "Understanding React", summary: "Learn the basics of React and how it works." },
    { id: "2", title: "Getting Started with TypeScript", summary: "A beginner's guide to TypeScript." },
    { id: "3", title: "Exploring React Router", summary: "Learn how to use React Router for navigation." },
  ];

  return (
    <>
      <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <h1>Article List</h1>
        <p>Browse through our collection of articles:</p>
        <ul>
          {articles.map((article) => (
            <li key={article.id} style={{ marginBottom: "10px" }}>
              <Link to={`/article/${article.id}`} style={{ textDecoration: "none", color: "blue" }}>
                <h2>{article.title}</h2>
                <p>{article.summary}</p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default ArticleList;