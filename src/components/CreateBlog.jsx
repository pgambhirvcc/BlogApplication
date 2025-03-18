import { Box, Button, Dialog, DialogContent, DialogContentText, DialogTitle, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const categories = ["Tech", "News", "Fashion", "Sports", "Food"];

const CreateBlog = (props) => {

  const navigate = useNavigate();

  const [createBlogInfo, setCreateBlogInfo] = useState({
    title: "",
    description: "",
    image: "",
    category: "",
  });

  const handleOnSubmit = () => {
    console.log(createBlogInfo);
    props.setIsDialogOpen(false);
    navigate("/");
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

          <Button variant="contained" onClick={handleOnSubmit}>
            Submit
          </Button>
        </Box>
      </DialogContent>
    </Dialog>
  );
};

export default CreateBlog;
