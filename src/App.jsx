import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { MainPage } from "./components/MainPage";
import { SuccessPage } from "./components/SuccessPage";

const router = createBrowserRouter([
	{ path: "/", element: <MainPage /> },
	{ path: "/success", element: <SuccessPage /> },
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
