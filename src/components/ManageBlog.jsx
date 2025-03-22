/* eslint-disable react/prop-types */
import {
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  IconButton,
  MenuItem,
  Select,
  Snackbar,
  TextField,
} from "@mui/material";
import { addDoc, collection, doc, updateDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { db } from "../firebaseConfig";
import { validateInput } from "../utils";
import { categories } from "../constant";
import CloseIcon from "@mui/icons-material/Close";

const userEmail = JSON.parse(localStorage.getItem("user"))?.user?.email;

const INPUT_DEFAULT = {
  title: "",
  description: "",
  image: "",
  category: "",
  author: userEmail,
};

const ManageBlog = (props) => {
  const navigate = useNavigate();

  const defaultValue = props.blog ? props.blog : INPUT_DEFAULT;
  const [blogInfo, setBlogInfo] = useState(defaultValue);
  const [formDisabled, setFormDisabled] = useState(true);
  const [openNotification, setOpenNotification] = useState(false);
  const [notificationMessage, setNotificationMessage] = useState('');

  // if all the fields are having a value, then return false other wise return true.
  useEffect(() => {
    const isDisabled = validateInput([
      blogInfo.title,
      blogInfo.description,
      blogInfo.image,
      blogInfo.category,
    ]);
    setFormDisabled(isDisabled);
  }, [blogInfo]);

  const handleOnSubmit = () => {
    switch (props.operationType) {
      case "CREATE":
        handleOnCreate();
        break;
      case "EDIT":
        handleOnEdit();
        break;
      default:
        break;
    }
  };

  const handleOnCreate = async () => {
    try {
      const collectionRef = collection(db, "blogs");

      await addDoc(collectionRef, blogInfo);
      setBlogInfo(INPUT_DEFAULT);
      setOpenNotification(true);
      setNotificationMessage('Blog Published Successfully');
      // HACK
      setTimeout(() => {
        props.setIsDialogOpen(false);
        window.location.reload();
        navigate("/");
      }, 2000);
    } catch (error) {
      alert("Blog Published Flaied... Check Console :(");
      console.log(error);
    }
  };

  const handleOnEdit = async () => {
    try {
      const collectionRef = doc(db, "blogs", props.blog.id);
      await updateDoc(collectionRef, blogInfo);
      setBlogInfo(blogInfo);
      setOpenNotification(true);
      setNotificationMessage('Blog Updated Successfully');
      // HACK
      setTimeout(() => {
        props.setIsDialogOpen(false);
        window.location.reload();
        navigate("/");
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Dialog open={props.isDialogOpen}>
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <DialogTitle>Create a blog</DialogTitle>

        <IconButton
          onClick={() => props.setIsDialogOpen(false)}
          style={{ marginRight: "10px" }}
        >
          <CloseIcon />
        </IconButton>
      </Box>
      <DialogContent>
        <DialogContentText>
          You can create a blog which will be visible to other users
        </DialogContentText>

        <Box display="flex" flexDirection="column" gap="20px">
          <TextField
            placeholder="Enter blog title"
            value={blogInfo.title}
            onChange={(e) =>
              setBlogInfo({
                ...blogInfo,
                title: e.target.value,
              })
            }
          />

          <TextField
            multiline
            placeholder="Enter blog description"
            value={blogInfo.description}
            onChange={(e) =>
              setBlogInfo({
                ...blogInfo,
                description: e.target.value,
              })
            }
          />

          <TextField
            placeholder="Enter blog image url"
            value={blogInfo.image}
            onChange={(e) =>
              setBlogInfo({
                ...blogInfo,
                image: e.target.value,
              })
            }
          />

          <Select
            value={blogInfo.category}
            label="Select Category"
            labelId="Select Category"
            onChange={(e) =>
              setBlogInfo({
                ...blogInfo,
                category: e.target.value,
              })
            }
          >
            {categories.slice(1).map((category, index) => {
              return (
                <MenuItem key={index} value={category}>
                  {category}
                </MenuItem>
              );
            })}
          </Select>

          {props.operationType && (
            <Button
              disabled={formDisabled}
              variant="contained"
              onClick={handleOnSubmit}
            >
              Submit
            </Button>
          )}
        </Box>
      </DialogContent>

      <Snackbar
        open={openNotification}
        autoHideDuration={6000}
        message={notificationMessage}
      />
    </Dialog>
  );
};

export default ManageBlog;

// FIRST WAY
// CreateBlogComponent handOnSubmit --> Creates a new Blog

// CreateBlog is a smart component, it checks what kind of operation it is

// if it is add -> handleOnCreation
// if it ise edit -> handleOnEdit

// SECOND WAY
// The parent component calling the dialog box provides the handleOnSubmit
