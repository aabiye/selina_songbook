import { Route } from "react-router-dom";
import Songs from "./Songs"
import Contact from "./Contact";
import Home from "./Home";
import About from "./About";
import Login from "./Login";

const Routes = () => {
  return (
    <>
      <Route path="/" exact component={Home}></Route> 
      <Route path="/songs" component={Songs}></Route>
      <Route path="/about" exact component={About}></Route>
      <Route path="/login" exact component={Login}></Route>
       <Route path="/contact" component={Contact}></Route>
    </>
  );
};

export default Routes;
