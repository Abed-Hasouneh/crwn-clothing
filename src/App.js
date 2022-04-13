import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home/Home";
import Navigation from "./routes/navigation/Navigation";

const App = () => {
  return(
    <Routes>
      <Route element={<Navigation/>}>
        <Route path="/" element={<Home/>}/>
      </Route>
      
    </Routes>
  )
};

export default App;