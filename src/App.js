import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home/Home";
import Navigation from "./routes/navigation/Navigation";
import Shop from "./routes/shop/Shop";
import Authentication from "./routes/authentication/Authentication";

const App = () => {
  return(
    <Routes>
      <Route element={<Navigation/>}>
        <Route index element={<Home/>}/>
        <Route path="shop" element={<Shop/>}/>
        <Route path="auth" element={<Authentication/>}/>
      </Route>
      
    </Routes>
  )
};

export default App;