import React, { useState, useEffect } from 'react';
import axios from 'axios';

function App() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                // Simulate an error by modifying the API URL
                const response = await axios.get('https://jsonplaceholder.typicode.com/posts');
                if (response.status !== 200) {
                    throw new Error('Failed to fetch posts');
                }
                setPosts(response.data);
            } catch (error) {
                setError(error.message);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className="App">
            <header className="App-header" style={{ textAlign: 'center' }}>
                <h1>Blog Posts</h1>
            </header>
            <main>
                <div style={{ textAlign: 'center' }}>
                    {error ? (
                        <p>Error: {error}</p>
                    ) : (
                        <ul>
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


