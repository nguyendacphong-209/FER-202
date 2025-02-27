import React, { useState, useEffect } from "react";

const UserPosts = ({ userId }) => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                // Gọi API JSONPlaceholder để lấy danh sách bài viết
                const response = await fetch(
                    `https://jsonplaceholder.typicode.com/posts?userId=${userId}`
                );
                if (!response.ok) {
                    throw new Error("Lỗi khi lấy dữ liệu");
                }
                const data = await response.json(); // Chuyển dữ liệu thành JSON
                setPosts(data); // Cập nhật state posts với dữ liệu lấy được
            } catch (error) {
                console.error("Có lỗi xảy ra:", error);
            }
        };

        fetchData(); // Gọi hàm fetchData
    }, [userId]); // useEffect sẽ được gọi lại khi userId thay đổi

    // Bước 3: Render danh sách các bài viết
    return (
        <div>
            {posts.length > 0 ? (
                posts.map((post) => (
                    <div key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </div>
                ))
            ) : (
                <p>Đang tải dữ liệu...</p>
            )}
        </div>
    );
};

export default UserPosts;
