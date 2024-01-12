import React from "react";
import Article from "./Article";

function ArticleList(props) {
    const { articles } = props
    return (
        <main>
            {articles.map((article, index) => (
                <Article 
                    key={index}
                    title={article.title}
                    date={article.date}
                    preview={article.preview}
                />
            ))}
        </main>
    );
}

export default ArticleList;

/*
Child of App.

Should return:
    a <main> element with the following components inside:
    an array of Article components (one component for each of the posts passed down as props to ArticleList)
    make sure to assign a unique key attribute to each Article
*/