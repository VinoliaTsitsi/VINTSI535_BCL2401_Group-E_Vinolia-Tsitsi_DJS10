// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from "react";
import './index.css';

// Separate the fetching logic into its own function
async function fetchPostsFromAPI() {
  try {
    const res = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!res.ok) {
      throw new Error('Error 404');
    }
    return res.json();
  } catch (err) {
    // Catch any errors that occur during fetching and return an error message
    return { error: 'Data fetching failed' };
  }
}

export default function BlogPosts() {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  // Use useEffect to fetch posts when the component mounts
  useEffect(() => {
    fetchPostsFromAPI().then((data) => {
      if (data.error) {
        setError(data.error);
      } else {
        setPosts(data);
      }
    });
  }, []);

  // Create a separate function to render the post elements
  function renderPostElements() {
    return posts.map((post, index) => (
      <div className="post" key={post.id}>
        <h2 className="post-title">{`${index + 1}. ${post.title}`}</h2>
        <p className="post-body">{post.body}</p>
      </div>
    ));
  }

  return (
    <>
      {
        error 
        ? <div className="error-message"> {error} </div>
        : 
        <div className="posts-container">
          <h1>Posts</h1>
          {renderPostElements()}
        </div>
      }
    </>
  );
}


