//import React from 'react';
import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [posts, setPosts] = useState([]);
    const [error] = useState(null);
    useEffect(() => {
      const fetchPosts = async () => {
          try {
              const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
              if (response.status !== 200) {
                  throw new Error('Error 404');
              }
              setPosts(response.data);
          } catch (error) {
              throw new Error('Data fetching failed');
          }
      };
  
      fetchPosts();
  }, []);
  

    return (
        <div className="App">
            <header className="App-header" style={{ textAlign: 'center' }}  >
                <h1>Blog Posts</h1>
            </header>
            <main>
                <div>
                    {error ? (
                        <p>Error: {error}</p>
                    ) : (
                        <ul style={{ textAlign: 'center' }}>
                            {posts.map(post => (
                                <li key={post.id}>
                                    <h3>{post.title}</h3>
                                    <p>{post.body}</p>
                                </li>
                            ))}
                        </ul>
                    )}
                </div>
            </main>
        </div>
    );
}

export default App;


