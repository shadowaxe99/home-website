```javascript
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/blog.css';

const BlogNewsSection = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            const res = await axios.get('/api/blog');
            setPosts(res.data);
        };

        fetchPosts();
    }, []);

    return (
        <div id="blog" className="blog-section">
            <h2>Latest News</h2>
            <div className="blog-posts">
                {posts.map((post) => (
                    <div key={post._id} className="blog-post">
                        <h3>{post.title}</h3>
                        <p>{post.excerpt}</p>
                        <a href={`/blog/${post._id}`}>Read More</a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogNewsSection;
```