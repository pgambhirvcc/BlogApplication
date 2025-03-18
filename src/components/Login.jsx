import {
  Box,
  Button,
  Card,
  CardContent,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import LoginIcon from "@mui/icons-material/Login";
import { useNavigate } from "react-router-dom";
import { validateInput } from "../utils";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebaseConfig";

export const Login = () => {
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
  });

  const [formDisabled, setFormDisabled] = useState(true);

  const navigate = useNavigate();

  const handleLogin = async () => {
   
      try {
       const user =  await signInWithEmailAndPassword(auth, loginData.email, loginData.password);
        if (user) {
         alert('Logged in Succesfully');
         localStorage.setItem('user', JSON.stringify(user));
         navigate('/');
        }
      } catch (error) {
        alert(error.message);
         console.log(error.message, 'error');
      }
  };

  // if all the fields are having a value, then return false other wise return true.
  useEffect(() => {
    const isDisabled = validateInput([
      loginData.email,
      loginData.password,
    ]);
    setFormDisabled(isDisabled);
  }, [loginData]);

  return (
    <Card className="auth-card">
      <CardContent>
        <Box display="flex" flexDirection="column" gap="12px">
          <Typography variant="h3">Login Here!</Typography>

          <TextField
            id="Email"
            label="Email"
            type="email"
            variant="outlined"
            value={loginData.email}
            onChange={(e) =>
              setLoginData({ ...loginData, email: e.target.value })
            }
          />
          <TextField
            id="Password"
            label="Password"
            type="password"
            variant="outlined"
            value={loginData.password}
            onChange={(e) =>
              setLoginData({ ...loginData, password: e.target.value })
            }
          />

          <Button
            variant="contained"
            color="primary"
            onClick={handleLogin}
            disabled={formDisabled}
          >
            <LoginIcon />
            Login
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};
