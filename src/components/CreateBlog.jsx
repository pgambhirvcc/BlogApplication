/* eslint-disable react/prop-types */
import { Box, Button, Dialog, DialogContent, DialogContentText, DialogTitle, MenuItem, Select, Snackbar, TextField } from "@mui/material";
import { addDoc, collection } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebaseConfig";
import { validateInput } from "../utils";

const categories = ["Tech", "News", "Fashion", "Sports", "Food"];
const userEmail = JSON.parse(localStorage.getItem("user"))?.user?.email;

const INPUT_DEFAULT = {
  title: "",
  description: "",
  image: "",
  category: "",
  author: userEmail
};

const CreateBlog = (props) => {
  const navigate = useNavigate();

  const [createBlogInfo, setCreateBlogInfo] = useState(INPUT_DEFAULT);
  const [formDisabled, setFormDisabled] = useState(true);
  const [openNotification, setOpenNotification] = useState(false);

  // if all the fields are having a value, then return false other wise return true.
  useEffect(() => {
    const isDisabled = validateInput([
      createBlogInfo.title,
      createBlogInfo.description,
      createBlogInfo.image,
      createBlogInfo.category,
    ]);
    setFormDisabled(isDisabled);
  }, [createBlogInfo]);

  const handleOnSubmit = async () => {
    try {
      const collectionRef = collection(db, "blogs");

      await addDoc(collectionRef, createBlogInfo);
      setCreateBlogInfo(INPUT_DEFAULT);
      setOpenNotification(true);
      // HACK
      setTimeout(() => {
        props.setIsDialogOpen(false);
        window.location.reload();
        navigate("/");
      }, 2000);
    } catch (error) {
      alert('Blog Published Flaied... Check Console :(');
      console.log(error);
    }
  };
  
  return (
    <Dialog open={props.isDialogOpen}>
      <DialogTitle>Create a blog</DialogTitle>
      <DialogContent>
        <DialogContentText>
          You can create a blog which will be visible to other users
        </DialogContentText>

        <Box display="flex" flexDirection="column" gap="20px">
          <TextField
            placeholder="Enter blog title"
            value={createBlogInfo.title}
            onChange={(e) =>
              setCreateBlogInfo({
                ...createBlogInfo,
                title: e.target.value,
              })
            }
          />

          <TextField
            multiline
            placeholder="Enter blog description"
            value={createBlogInfo.description}
            onChange={(e) =>
              setCreateBlogInfo({
                ...createBlogInfo,
                description: e.target.value,
              })
            }
          />

          <TextField
            placeholder="Enter blog image url"
            value={createBlogInfo.image}
            onChange={(e) =>
              setCreateBlogInfo({
                ...createBlogInfo,
                image: e.target.value,
              })
            }
          />

          <Select
            value={createBlogInfo.category}
            label="Select Category"
            labelId="Select Category"
            onChange={(e) =>
              setCreateBlogInfo({
                ...createBlogInfo,
                category: e.target.value,
              })
            }
          >
            {categories.map((category, index) => {
              return (
                <MenuItem key={index} value={category}>
                  {category}
                </MenuItem>
              );
            })}
          </Select>

          <Button
            disabled={formDisabled}
            variant="contained"
            onClick={handleOnSubmit}
          >
            Submit
          </Button>
        </Box>
      </DialogContent>

      <Snackbar
        open={openNotification}
        autoHideDuration={6000}
        message="Blog Created Succesfully"
      />
    </Dialog>
  );
};

export default CreateBlog;
