import React, { useEffect, useState } from "react";
import { Box, MenuItem, Select } from "@mui/material";
import BlogCard from "../components/BlogCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { categories } from "../constant";

export const HomePage = () => {
  const [blogsData, setBlogsData] = useState([]);
  const [filteredBlogs, setFilteredBlogs] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const getBlogsData = async () => {
    const collectionRef = collection(db, "blogs");
    const dataFromFirebase = await getDocs(collectionRef);

    const extractedData = dataFromFirebase.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id,
      };
    });

    setBlogsData(extractedData);
    setFilteredBlogs(extractedData);
  };

  

  const filterBlogs = (filteredCategory) => {

    if (filteredCategory === "All") {
      setFilteredBlogs(blogsData);
      return;
    }

    const filteredData = blogsData.filter((blog) => {
      return blog.category === filteredCategory;
    })

    setFilteredBlogs(filteredData);
  }

  useEffect(() => {
    getBlogsData();
  }, []);

  return (
    <Box display="flex" flexDirection="column" marginTop="100px">
      <Box display="flex" justifyContent="flex-end" margin="20px">
        <Select
          style={{ width: "200px" }}
          value={selectedCategory}
          label="Select Category"
          labelId="Select Category"
          onChange={(e) => {
            setSelectedCategory(e.target.value)
            filterBlogs(e.target.value);
          }}
        >
          {categories.map((category, index) => {
            return (
              <MenuItem key={index} value={category}>
                {category}
              </MenuItem>
            );
          })}
        </Select>
      </Box>

      <Box
        display="grid"
        gridTemplateColumns="repeat(4, 1fr)"
        gap="20px"
      >
        {filteredBlogs.map((blog, index) => {
          return <BlogCard key={index} data={blog} />;
        })}
      </Box>
    </Box>
  );
};
