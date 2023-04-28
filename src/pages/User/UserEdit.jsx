import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import {
  Button,
  Typography,
  Grid,
  TextField,
  FormControlLabel,
  Container,
  Paper,
  FormControl,
  Radio,
  RadioGroup,
  FormLabel
} from "@mui/material";

const UserEdit = () => {
  const { id } = useParams();
  const [user, setUser] = useState({
    name: "",
    cellphone: 0,
    email: "",
    brand: "",
    itemtype: "",
    issue: "",
    remarks: "",
    status1: "Pending",
    id: 0,

  });
  const navigate = useNavigate();
  const { token } = useAuth();

  useEffect(() => {
    let url = `http://127.0.0.1:5000/api/users/${id}`;

    const controller = new AbortController();

    const requestOptions = {
      method: "GET",
      headers: {
        signal: controller.signal,
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((json) => setUser(json));

    return () => {
      controller.abort();
    };
  }, []);

  const handleChanged = (e) => {
    setUser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let url = `http://127.0.0.1:5000/api/users`;

    const requestOptions = {
      method: "PUT",
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
        id: id
      }),
    };

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((data) => navigate(`/user/${id}`))
      .catch((error) => console.log(error));
  };

  return (
    <>
      <Container componet="main" maxWidth="sm" sx={{ mb: 4 }}>
        <Grid xs={12} sm={12} lg={12}>
          <Paper elevation={3} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
            <Typography variant="h6" gutterBottom>
              Customer's Information
            </Typography>
            <form onSubmit={handleSubmit}>
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
                    value={user.name}
                    onChange={handleChanged}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="email"
                    name="email"
                    label="Email"
                    fullWidth
                    autoComplete="email"
                    variant="standard"
                    value={user.email}
                    onChange={handleChanged}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="cellphone"
                    name="cellphone"
                    label="Cellphone/Tel"
                    fullWidth
                    autoComplete="cellphone"
                    variant="standard"
                    value={user.cellphone}
                    onChange={handleChanged}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="brand"
                    name="brand"
                    label="Brand"
                    fullWidth
                    autoComplete="shipping address-level2"
                    variant="standard"
                    value={user.brand}
                    onChange={handleChanged}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    required
                    id="itemtype"
                    name="itemtype"
                    label="Item Type (LCD, SMART TV, LED TV)"
                    fullWidth
                    variant="standard"
                    value={user.itemtype}
                    onChange={handleChanged}
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Typography variant="h6" gutterBottom>
                    Troubleshooting Details
                  </Typography>
                  <Grid >
                    <TextField sx={{ mt: 1 }}
                      required
                      name="issue"
                      type="text"
                      label="Issue/Problem"
                      fullWidth
                      variant="outlined"
                      value={user.issue}
                      onChange={handleChanged}
                    />
                    <TextField sx={{
                      mt: 3, width: { sm: 500, md: 500 },
                      "& .MuiInputBase-root": { height: 80 }
                    }}
                      id="outlined-basic"
                      label="Findings/Resolution"
                      variant="outlined"
                      name="remarks"
                      value={user.remarks}
                      onChange={handleChanged}
                    />
                  </Grid>
                </Grid>
              </Grid>
              <Grid sx={{ mt: 4 }}>
                <FormControl>
                  <FormLabel id="demo-controlled-radio-buttons-group">Resolution</FormLabel>
                  <RadioGroup
                    row
                    aria-labelledby="demo-controlled-radio-buttons-group"
                    name="status1"
                    value={user.status1}
                    onChange={handleChanged}
                    defaultValue="Pending"
                  >
                    <FormControlLabel value="Pending" control={<Radio />} label="Pending" />
                    <FormControlLabel value="Resolve" control={<Radio />} label="Resolve" />
                    <FormControlLabel value="Claimed" control={<Radio />} label="Claimed" />
                  </RadioGroup>
                </FormControl>
              </Grid>
              <Grid sx={{ mt: 3 }}>
                <Button sx={{ mr: 1, ml: 41 }} variant="contained" type="submit" value="Updates" >
                  Save
                </Button>
                <Button sx={{ mr: 1 }} variant="contained" href={`/user/${user._id}`}>
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

export default UserEdit;
