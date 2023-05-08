import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useAuth } from "../../contexts/AuthContext";
import {
  Button,
  Typography,
  Grid,
  TextField,
  Container,
  Paper
} from "@mui/material";

const UserView = () => {
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

  const { token } = useAuth();
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    let url = `https://capstone-mongo-ec71wp78a-jaimevcabiaojr.vercel.app/api/users/${id}`;
    // let url = `http://127.0.0.1:5000/api/users/${id}`;

    const controller = new AbortController();

    const requestOptions = {
      method: "GET",
      headers: {
        signal: controller.signal,
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    setLoading(true);

    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        setUser(json);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  const handleDelete = (e) => {
    if (window.confirm("Are you really sure you want to delete this record?")) {
      let url = `${process.env.REACT_APP_API_URL}/users`;

      const requestOptions = {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify({
          id: id
        }),
      };

      fetch(url, requestOptions)
        .then(() => {
          navigate("/");
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <>
      {loading ? (
        <h3>Loading...</h3>
      ) : (
        <>
          <Container componet="main" maxWidth="sm" sx={{ mb: 4 }}>
            <Grid xs={12} sm={12} lg={12}>
              <Paper elevation={3} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                <Typography variant="h6" gutterBottom>
                  Customer's Information
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      required
                      id="name"
                      name="name"
                      label="Name"
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      defaultValue={user.name}
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
                      defaultValue={user.email}
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
                      defaultValue={user.cellphone}
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
                      defaultValue={user.brand}
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
                      defaultValue={user.itemtype}
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
                        label="Issue/Problem"
                        fullWidth
                        variant="outlined"
                        value={user.issue}
                      />
                      <TextField sx={{
                        mt: 3, width: { sm: 500, md: 500 },
                        "& .MuiInputBase-root": { height: 80 }
                      }}
                        id="outlined-basic"
                        name="remarks"
                        label="Findings/Resolution"
                        variant="outlined"
                        value={user.remarks}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid sx={{ mt: 3 }}>
                  <Button sx={{ mr: 1, ml: 28 }} variant="contained" href={`/user/edit/${user._id}`}>
                    update
                  </Button>
                  <Button sx={{ mr: 1 }} variant="contained" onClick={handleDelete}>
                    Delete
                  </Button>
                  <Button variant="contained" href={`/`}>
                    Cancel
                  </Button>
                </Grid>
              </Paper>
            </Grid>
          </Container>
        </>
      )}
    </>
  );
};

export default UserView;
