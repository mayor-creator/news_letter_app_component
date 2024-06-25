import { createBrowserRouter, RouterProvider } from "react-router-dom";

import { MainPage } from "./components/MainPage";
import { SuccessPage } from "./components/SuccessPage";
import { EmailContextProvider } from "./components/EmailContext";

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<EmailContextProvider>
				{" "}
				<MainPage />
			</EmailContextProvider>
		),
	},
	{
		path: "/success",
		element: (
			<EmailContextProvider>
				{" "}
				<SuccessPage />{" "}
			</EmailContextProvider>
		),
	},
]);

function App() {
	return (
		<>
			<RouterProvider router={router} />
		</>
	);
}

export default App;
