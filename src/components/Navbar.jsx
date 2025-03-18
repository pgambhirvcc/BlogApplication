import {
  AppBar,
  Box,
  Button,
  Dialog,
  DialogContent,
  DialogContentText,
  DialogTitle,
  MenuItem,
  Select,
  TextField,
  Toolbar,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CreateBlog from "./CreateBlog";

const Navbar = () => {
  const navigate = useNavigate();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const navigateToHome = () => {
    navigate("/");
  };

  const openDialogBox = () => {
    setIsDialogOpen(true);
  };

  return (
    <div>
      <AppBar component="nav">
        <Toolbar>
          <Box display="flex" justifyContent="space-between" width="100%">
            <Button
              className="navButton"
              variant="outlined"
              onClick={navigateToHome}
            >
              Home
            </Button>

            <Button
              className="create-blog-button"
              variant="contained"
              onClick={openDialogBox}
            >
              Create Blog +
            </Button>

            <CreateBlog isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />

          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
