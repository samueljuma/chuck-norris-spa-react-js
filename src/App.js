import { 
  Route, 
  BrowserRouter as Router, 
  Switch } from "react-router-dom";
import Display from "./Components/Display";
import Footer from "./Components/Footer";
import Header from "./Components/Header";


function App() {
  return (
    <div className='relative pb-10 min-h-screen items-center'>
        <Router>

          <Header/>
          <div className='p-3'>
              <Switch>
                <Route path="/jokes=:category">
                  <Display/>
                </Route>
              </Switch>
          </div>
          <Footer/>
        </Router>
    </div>
  );
}

export default App;
