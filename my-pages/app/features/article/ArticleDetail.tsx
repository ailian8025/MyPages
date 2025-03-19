import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ArticleDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [article, setArticle] = useState<{ title: string; content: string } | null>(null);

  useEffect(() => {
    // Simulate an API call to fetch article details
    const fetchArticle = async () => {
      // Replace this with your actual API call
      const response = await new Promise<{ title: string; content: string }>((resolve) =>
        setTimeout(() => resolve({ title: `Article ${id}`, content: "This is the article content." }), 1000)
      );
      setArticle(response);
    };

    fetchArticle();
  }, [id]);

  if (!article) {
    return <p>Loading article details...</p>;
  }

  return (
    <div style={{ padding: "20px", fontFamily: "Arial, sans-serif" }}>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
    </div>
  );
};

export default ArticleDetail;