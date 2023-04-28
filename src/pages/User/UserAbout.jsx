import React from "react";
import { 
  Button, 
  Typography, 
  Grid, 
  TextField, 
  Container, 
  Paper 
} from "@mui/material";

const UserAbout = () => {
  return (
    <>
          <Container componet="main" maxWidth="sm" sx={{ mb: 4 }}>
            <Grid xs={12} sm={12} lg={12}>
              <Paper elevation={3} sx={{ my: { xs: 3, md: 6 }, p: { xs: 2, md: 3 } }}>
                <Typography variant="h6" gutterBottom>
                  Technician's Information
                </Typography>
                <Grid container spacing={3}>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      required
                      id="name"
                      name="name"
                      label="Name"
                      InputProps={{
                        readOnly: true,
                      }}
                      fullWidth
                      autoComplete="given-name"
                      variant="standard"
                      defaultValue="Jaime V. Cabiao Jr."
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="email"
                      name="email"
                      label="Email"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      autoComplete="email"
                      variant="standard"
                      defaultValue="jcabiao18@email.com"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="cellphone"
                      name="cellphone"
                      label="Cellphone/Tel"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      autoComplete="cellphone"
                      variant="standard"
                      defaultValue="09778227108"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <TextField
                      required
                      id="brand"
                      name="brand"
                      label="Company"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      autoComplete="shipping address-level2"
                      variant="standard"
                      defaultValue="J V Cabiao Electronic Shop"
                    />
                  </Grid>
                  <Grid item xs={12} sm={12}>
                    <TextField
                      required
                      id="itemtype"
                      name="itemtype"
                      label="Company Address"
                      fullWidth
                      InputProps={{
                        readOnly: true,
                      }}
                      variant="standard"
                      defaultValue="240c Ilocos Sur St. Sto. Cristo Bagong Bantay Quezon City"
                    />
                  </Grid>
                  <Grid item xs={12} sm={6}>
                    <Typography variant="h6" gutterBottom>
                      Technology Details
                    </Typography>
                    <Grid >
                      <TextField sx={{ mt: 1 }}
                        required
                        name="issue"
                        label="Technology Use"
                        fullWidth
                        multiline
                        maxRows={4}
                        InputProps={{
                          readOnly: true,
                        }}
                        variant="outlined"
                        value="FrontEnd Material UI  ExpressJS                   BackEnd MongoDB(online) "
                      />
                      <TextField sx={{
                        mt: 3, width: { sm: 500, md: 500 },
                        "& .MuiInputBase-root": { height: 80 }
                        ,
                      }}
                        id="outlined-basic"
                        name="remarks"
                        label="Findings/Resolution"
                        variant="outlined"
                        multiline
                        maxRows={4}
                        value="WORK HARD REST IF U MUST BUT NEVER QUIT "
                        InputProps={{
                          readOnly: true,
                        }}
                      />
                    </Grid>
                  </Grid>
                </Grid>
                <Grid sx={{mt:3}}>
                  <Button sx={{mr:1, ml:28}} variant="contained" href="#">
                    update
                  </Button>
                  <Button sx={{mr:1}} variant="contained">
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
  );
};

export default UserAbout;
