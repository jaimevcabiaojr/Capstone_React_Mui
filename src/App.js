import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFound from "./components/NotFound";
import UserEdit from "./pages/User/UserEdit";
import UserList from "./pages/User/UserList";
import UserView from "./pages/User/UserView";
import UserCreate from "./pages/User/UserCreate";
import Login from "./pages/Login/Login";
import AuthProvider from "./contexts/AuthContext";
import Container from "@mui/material/Container";
import { Grid } from "@mui/material";
import NavbarMUI from "./components/AppBarDark";
import UserAbout from "./pages/User/UserAbout";
import AppFooter from "./components/AppFooter";
import AppTitle from "./components/AppTitle";
function App() {
  return (
    
    <Container sx={{ padding: 1, borderRadius: 1, color: 'white',backgroundColor: (theme) =>
    theme.palette.mode === 'light'
      ? theme.palette.grey[200]
      : theme.palette.grey[800],}}>
      
    <NavbarMUI/>
    <AppTitle></AppTitle>
    <Grid container spacing={4} marginTop={5}>
        
          <AuthProvider>
            <BrowserRouter>
              <Routes>
                <Route path="/" element={<UserList />}></Route>
                <Route path="/login" element={<Login />}></Route>
                <Route path="/user/:id" element={<UserView />}></Route>
                <Route path="/user/edit/:id" element={<UserEdit />}></Route>
                <Route path="/user/new" element={<UserCreate />}></Route>
                <Route path="*" element={<NotFound />}></Route>
                <Route path="/about" element={<UserAbout/>}></Route>
              </Routes>
            </BrowserRouter>
          </AuthProvider>
         
          </Grid>
          <AppFooter/>
          
    </Container>   
    
      );
}

export default App;
