import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import TextField from '@mui/material/TextField';
import { 
  Grid, 
  Paper, 
  Button,  
  Container, 
  Typography, 
} from "@mui/material";

const UserCreate = () => {
  const [user, setUser] = useState({
    name: "",
    cellphone: 0,
    email: "",
    brand: "",
    itemtype: "",
    issue: "",
    remarks:"",
    status1:"Pending",
    password: "password",
    id: 0,
  });

  const navigate = useNavigate();
  const { token } = useAuth();

  const handleChanged = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const controller = new AbortController();
    let url = `${process.env.REACT_APP_API_URL}/users`;
    // let url = `http://127.0.0.1:5000/api/users`;
    const requestOptions = {
      signal: controller.signal,
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({
        name: user.name,
        cellphone: user.cellphone,
        email: user.email,
        brand: user.brand,
        itemtype: user.itemtype,
        issue: user.issue,
        remarks: user.remarks,
        status1: user.status1,
        password: user.password,
      }),
    };
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => {
        navigate(`/`);
      });

    return () => {
      controller.abort();
    };
  };
  return (
    <>
      <Container componet="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Grid xs={12} sm={12} lg={12}>
          <Paper elevation={3} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <form onSubmit={handleSubmit}>
              <Typography variant="h6" gutterBottom>
                Customer's Details
              </Typography>
              <Grid container spacing={3}>
                <Grid item xs={12} sm={12}>
                  <TextField
                    required
                    name="name"
                    label="Name"
                    type="text"
                    fullWidth
                    autoComplete="given-name"
                    variant="standard"
                    onChange={handleChanged}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    name="email"
                    label="Email"
                    fullWidth
                    autoComplete="email"
                    variant="standard"
                    onChange={handleChanged}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    name="cellphone"
                    label="Cellphone/Tel"
                    fullWidth
                    variant="standard"
                    onChange={handleChanged}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    name="brand"
                    label="Brand"
                    fullWidth
                    variant="standard"
                    onChange={handleChanged}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    name="itemtype"
                    label="Item Type (LCD, SMART TV, LED TV)"
                    fullWidth
                    variant="standard"
                    onChange={handleChanged}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6" gutterBottom sx={{mt:5}}>
                    Issue/Problem
                  </Typography>
                  <Grid >
                    <TextField sx={{
                      width: { sm: 500, md: 500 },
                      "& .MuiInputBase-root": { height: 80 },
                    }}
                      label="issue sighted by customer"
                      variant="outlined"
                      required
                      name="issue"
                      fullWidth
                      onChange={handleChanged}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid sx={{mt:5, mb:2}}>
                  <Button sx={{mr:1, ml:42}}  variant="contained" type="submit" value="Save">
                    Save
                  </Button>
                  <Button variant="contained" href={`/`}>
                    Cancel
                  </Button>
                </Grid>
            </form>
          </Paper>
        </Grid>
      </Container>
    </>
  );
};
export default UserCreate;
