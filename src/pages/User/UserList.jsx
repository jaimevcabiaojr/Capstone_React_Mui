import React, { useEffect, useState } from "react";
import { useAuth } from "../../contexts/AuthContext";
import {
  Box,
  Card,
  createTheme,
  CardActionArea,
  Grid,
  ThemeProvider,
  Typography,
  TextField,
} from "@mui/material";

import PhoneIcon from '@mui/icons-material/Phone';
import EmailSharpIcon from '@mui/icons-material/EmailSharp';
import PersonIcon from '@mui/icons-material/Person';
import LiveTvSharpIcon from '@mui/icons-material/LiveTvSharp';

const theme = createTheme({
  components: {
    MuiTypography: {
      variants: [
        {
          props: {
            variant: "body2",
          },
          style: {
            fontSize: 11,
          },
        },
        {
          props: {
            variant: "body3",
          },
          style: {
            fontSize: 9,
          },
        },
      ],
    },
  },
});

const UserList = () => {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);
  const { token } = useAuth();

  useEffect(() => {
    const controller = new AbortController();

    let url = "http://127.0.0.1:5000/api/users";

    const requestOptions = {
      signal: controller.signal,
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
    };

    setLoading(true);
    fetch(url, requestOptions)
      .then((response) => response.json())
      .then((json) => {
        setUsers(json);
        setLoading(false);
      });

    return () => {
      controller.abort();
    };
  }, []);

  const [text, setText] = useState("");

  return (
    <>
      {loading ? (<h3>Loading..</h3>) : (

        <>
          {users.map((e) => (

            <Grid item xs={12} sm={6} md={4} lg={3}>

              <ThemeProvider theme={theme}>
              
                <Card elevation={4} className="paper" href={`/user/${e._id}`} >
              
                  <CardActionArea href={`/user/${e._id}`} >
                    <img src={e.brand} alt="" className="img" />
                    <Box sx={{ display: "flex", paddingX: 1 }}>
                      <LiveTvSharpIcon style={{ width: 20 }} />
                      <Typography variant="h6" component="h2" marginTop={0} marginLeft={0.5}>
                        {e.brand}
                      </Typography>
                      <Box sx={{ mr: 1, maxWidth: 90, position: "absolute" }}>
                        <TextField sx={{
                          left: 150,
                        }}
                          size="small"
                          label="Status"
                          value={e.status1}
                          InputProps={{ readOnly: true }}
                        />
                      </Box>
                    </Box >

                    <Box sx={{ display: "flex", paddingX: 1 }}>
                      <Typography variant="body2" component="p" marginLeft={0.5} marginTop={1}>
                        {e.itemtype}
                      </Typography>
                    </Box>

                    <Box sx={{ paddingX: 1, mt: 3 }}>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <PersonIcon style={{ width: 15 }} />
                        <Typography variant="subtitle1" component="h2" marginLeft={0.5}>
                          {e.name}
                        </Typography>
                      </Box>
                      <Box
                        sx={{
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <PhoneIcon style={{ width: 12.5 }} />
                        <Typography variant="body2" component="p" marginLeft={0.5}>
                          {e.cellphone}
                        </Typography>
                      </Box>

                      <Box
                        sx={{
                          mb: 1,
                          display: "flex",
                          alignItems: "center",
                        }}
                      >
                        <EmailSharpIcon style={{ width: 12.5 }} />
                        <Typography variant="body2" component="p" marginLeft={0.5}>
                          {e.email}
                        </Typography>
                      </Box>
                    </Box>
                  </CardActionArea>
                </Card>
              </ThemeProvider>
            </Grid>
          ))}
        </>
      )}
    </>
  );
};


export default UserList;
