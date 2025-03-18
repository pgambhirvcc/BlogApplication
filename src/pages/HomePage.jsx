import React, { useState } from "react";
import Navbar from "../components/Navbar";
import { Box } from "@mui/material";
import BlogCard from "../components/BlogCard";

const BLOGS_DATA = [
  {
    id: 1,
    title: "Blog 1",
    description: "Blog 1 description",
    image:
      "https://images.unsplash.com/photo-1606490102015-697a49636e32?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    createdOn: "23 September, 2025",
    category: "Tech",
    author: "Prabh@gmail.com"
  },
  {
    id: 2,
    title: "Blog 2",
    description: "Blog 2 description",
    image:
      "https://images.unsplash.com/photo-1606490102015-697a49636e32?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    createdOn: "23 September, 2025",
    category: "Fashion",
    author: "Prabh@gmail.com"
  },
  {
    id: 3,
    title: "Blog 3",
    description: "Blog 3 description",
    image:
      "https://images.unsplash.com/photo-1606490102015-697a49636e32?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    createdOn: "23 September, 2025",
    category: "Sports",
    author: "Prabh@gmail.com"
  },
  {
    id: 4,
    title: "Blog 4",
    description: "Blog 4 description",
    image:
      "https://images.unsplash.com/photo-1606490102015-697a49636e32?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    createdOn: "23 September, 2025",
    category: "Sports",
    author: "Prabh@gmail.com"
  },
  {
    id: 5,
    title: "Blog 5",
    description: "Blog 5 description",
    image:
      "https://images.unsplash.com/photo-1606490102015-697a49636e32?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    createdOn: "23 September, 2025",
    category: "Tech",
    author: "Prabh@gmail.com"
  },
  {
    id: 6,
    title: "Blog 6",
    description: "Blog 6 description",
    image:
      "https://images.unsplash.com/photo-1606490102015-697a49636e32?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    createdOn: "23 September, 2025",
    category: "Tech",
    author: "Prabh@gmail.com"
  },
];

export const HomePage = () => {
  const [blogsData, setBlogsData] = useState(BLOGS_DATA);

  return (
    <Box
      marginTop="100px"
      display="grid"
      gridTemplateColumns="repeat(4, 1fr)"
      gap="20px"
    >
      {blogsData.map((blog, index) => {
        return <BlogCard key={index} data={blog} />;
      })}
    </Box>
  );
};
