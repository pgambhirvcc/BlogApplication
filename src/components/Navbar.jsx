import {
  AppBar,
  Box,
  Button,
  Toolbar,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import ManageBlog from "./ManageBlog";
import { signOut } from "firebase/auth";
import { auth } from "../firebaseConfig";

const Navbar = () => {
  const navigate = useNavigate();

  const [isDialogOpen, setIsDialogOpen] = useState(false);

  const navigateToHome = () => {
    navigate("/");
  };

  const openDialogBox = () => {
    setIsDialogOpen(true);
  };

  const handleSignout = async () => {
    await signOut(auth);
    localStorage.removeItem("user");
    navigate("/login");
  }

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

            <Box display="flex" gap="8px">
              <Button
                className="create-blog-button"
                variant="contained"
                onClick={openDialogBox}
              >
                Create Blog +
              </Button>
              <Button variant="contained" color="error" onClick={handleSignout}>
                Signout
              </Button>
            </Box>
            <ManageBlog operationType="CREATE" isDialogOpen={isDialogOpen} setIsDialogOpen={setIsDialogOpen} />

          </Box>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Navbar;
