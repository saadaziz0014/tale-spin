import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Layout from "./Layout.jsx";
import { Provider } from "react-redux";
import { store } from "./store/store.js";
import Signup from "./pages/Signup.jsx";
import Signin from "./pages/Signin.jsx";
import AuthLayout from "./components/AuthLayout.jsx";

const route = createBrowserRouter([
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/signin",
    element: <Signin />,
  },
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "",
        element: (
          <AuthLayout>
            <App />
          </AuthLayout>
        ),
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <>
    <Provider store={store}>
      <RouterProvider router={route} />
    </Provider>
  </>
);
