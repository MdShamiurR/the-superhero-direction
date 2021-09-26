import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Header from './Components/Header/Header';
import AllUsers from './Components/AllUsers/AllUsers';


function App() {
  return (
    <div className="App">

      <Header />
      <AllUsers />

    </div>
  );
}

export default App;
