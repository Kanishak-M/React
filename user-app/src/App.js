import Header from './components/Header';
import UserForm from './components/UserForm';
import UserList from './components/UserList';
import Nav from './components/Nav'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";

import './App.css';   
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

export default function App() {
  return (
    <Router>
        <Nav/>
        <Switch>
          <Route path="/about">
            <Header />
          </Route>
            <Route path="/users">
            <UserForm />
            <UserList/>
          </Route>
        </Switch>
    </Router>
  );
}


