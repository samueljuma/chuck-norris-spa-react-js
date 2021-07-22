import { 
  Route, 
  BrowserRouter as Router, 
  Switch } from "react-router-dom";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";


function App() {
  return (
    <div className='relative pb-10 min-h-screen'>
        <Router>
          <Header/>
          <div className='p-3'>
              <Switch>
                <Route exact path="/">
                  <Home/>
                </Route>
              </Switch>
          </div>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
