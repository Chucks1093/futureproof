import "./App.css";
import LandingPage from "./LandingPage";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
	{
		path: "/",
		element: <LandingPage />,
	},
]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
