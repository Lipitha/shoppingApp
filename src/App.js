import Counter from "./component/Counter";
import TodoApp from "./component/TodoApp";
import "./styles.css";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import UserApp from "./component/UserApp";
import UserInformation from "./component/UserInformation";
import WeatherApp from "./component/WeatherApp";
import ShoppingApp from "./component/shoppingCart/ShoppingApp";

export default function App() {
  return (
    <div className="App">
      <Router>
        <ul>
          <li>
            <Link to="/">Counter</Link>
          </li>
          <li>
            <Link to="/todo-app">Todo App</Link>
          </li>
          <li>
            <Link to="/user-app">Contact App</Link>
          </li>
          <li>
            <Link to="/user-info">User Information</Link>
          </li>
          <li>
            <Link to="/weather-app">Weather App</Link>
          </li>
          <li>
            <Link to="/shopping-app">Shop</Link>
          </li>
        </ul>
        <Routes>
          <Route path="/" element={<Counter />} />
          <Route path="/todo-app" element={<TodoApp />} />
          <Route path="/user-app" element={<UserApp />} />
          <Route path="/user-info" element={<UserInformation />} />
          <Route path="/weather-app" element={<WeatherApp />} />
          <Route path="/shopping-app" element={<ShoppingApp />} />
        </Routes>
      </Router>
    </div>
  );
}
