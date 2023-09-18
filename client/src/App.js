import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Main from "./pages/Main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
  },
]);

const App = () => <RouterProvider router={router} />;

export default App;
