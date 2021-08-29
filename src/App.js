import { 
  Route, 
  BrowserRouter as Router, 
  Switch } from "react-router-dom";
import Display from "./Components/Display";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faVolleyballBall } from '@fortawesome/free-solid-svg-icons'
import CategoriesView from "./Components/CategoriesView";
 


function App() {
  return (
    <div className='relative pb-10 min-h-screen'>
        <Router>
         <CategoriesView/>
          <div className='mt-20 fixed bg-white top-0 right-0 w-3/5 sm:w-4/5 h-full shadow p-3'>
            <div className="m-4 text-center uppercase text-blue-900 font-bold">
                <span className="text-xl p-4">
                    <FontAwesomeIcon
                        icon = {faVolleyballBall}
                    />
                </span>
                 It's Fun Time! Click on any Category in the Left to Get a Chuck-Norris Joke
            </div>
         </div>
          <div className='p-3'>
              <Switch>
                <Route path="/jokes=:category">
                  <Display/>
                </Route>
              </Switch>
          </div>
        </Router>
    </div>
  );
}

export default App;
