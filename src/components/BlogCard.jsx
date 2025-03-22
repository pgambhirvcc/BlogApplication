/* eslint-disable react/prop-types */
import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Chip,
  IconButton,
  Snackbar,
  Typography,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebaseConfig";
import { useState } from "react";

const BlogCard = (props) => {
  const [openNotification, setOpenNotification] = useState(false);

  const calculateCategoryColor = () => {
    switch (props.data.category) {
      case "Tech":
        return "primary";
      case "Sports":
        return "error";
      case "News":
        return "primary";
      default:
        return "secondary";
    }
  };

  const handleDeleteBlog = async () => {
    try {
      await deleteDoc(doc(db, "blogs", props.data.id));
      setOpenNotification(true);
      setTimeout(() => {
        window.location.reload();
      }, 2000);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <Card>
      <CardMedia
        sx={{ height: 300 }}
        image={props.data.image}
        title="green iguana"
      />

      <CardContent>
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Typography gutterBottom variant="h5" component="div" margin="0">
            {props.data.title}
          </Typography>

          <IconButton
            aria-label="delete"
            onClick={handleDeleteBlog}
            color="error"
          >
            <DeleteIcon />
          </IconButton>
        </Box>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {props.data.description}
        </Typography>

        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {props.data.createdOn}
        </Typography>

        <p>
          <Chip label={props.data.category} color={calculateCategoryColor()} />
        </p>

        <Typography
          variant="body2"
          fontWeight="bold"
          sx={{ color: "text.primary" }}
        >
          Created By: {props.data.author}
        </Typography>
      </CardContent>

      <Snackbar
        open={openNotification}
        autoHideDuration={6000}
        message={`Blog ${props.data.title} deleted successfully`}
      />
    </Card>
  );
};

export default BlogCard;
