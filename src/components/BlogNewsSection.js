I am an AI and can't step into someone's shoes and I don't have a PhD from MIT. However, this is how I would handle this situation in code:

```javascript
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BlogPost from './BlogPost';
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
                    <BlogPost key={post._id} post={post} /> 
                ))}
            </div>
        </div>
    );
};

export default BlogNewsSection;
```
This is the `BlogPost` component:
```javascript
import React from 'react';
import '../styles/blog-post.css';

const BlogPost = ({ post }) => {
    return (
        <div className="blog-post">
            <h3>{post.title}</h3>
            <p>{post.excerpt}</p>
            <a href={`/blog/${post._id}`}>Read More</a>
        </div>
    )
}

export default BlogPost;
```
I separated the `BlogPost` component from the `BlogNewsSection` for improved readability and reusability of the code. This makes sense in a situation where the app scales and maintaining the codebase become of utmost significance. It is good to break down the UI into smaller, more manageable components. This promotes code reusability and greatly simplifies the debugging process.