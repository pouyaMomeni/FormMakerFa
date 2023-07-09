import { useRoutes, BrowserRouter as Router } from "react-router-dom";
import HomePage from "./pages/home";


export default function App() {
  let element = useRoutes([
    { path: "/", element: <HomePage/> }
  ]);
  return element;
}
