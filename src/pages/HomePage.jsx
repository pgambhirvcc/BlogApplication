import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import BlogCard from "../components/BlogCard";
import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebaseConfig";

export const HomePage = () => {
  const [blogsData, setBlogsData] = useState([]);

  const getBlogsData = async () => {
    const collectionRef = collection(db, "blogs");
    const dataFromFirebase = await getDocs(collectionRef);

    const extractedData = dataFromFirebase.docs.map((doc) => {
      return {
        ...doc.data(),
        id: doc.id
      }
    })

    setBlogsData(extractedData);
  }

  useEffect(() => {
    getBlogsData();
  }, [])

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
