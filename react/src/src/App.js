import logo from './logo.svg';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import routes from './routes';

function App() {
  return (
    <Router>{routes}</Router>
  );
}

export default App;
