import React from 'react';
import { BrowserRouter as Router, Route} from "react-router-dom";
import PhoneGenerator from './components/PhoneGenerator';

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={PhoneGenerator} />
      </Router> 
    </div>
  );
}

export default App;
