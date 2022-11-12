import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Dashboard from "./pages/dashboard";
import CreateEditTodo from "./pages/createEditTodo";
import ErrorPage from "./pages/errorPage";
import TodoList from "./pages/todoList";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Dashboard />,
    children: [
      {
        path: "/list",
        element: <TodoList />,
      },
      {
        path: "/create",
        element: <CreateEditTodo />,
      },
      {
        path: "/edit/:id",
        element: <CreateEditTodo />,
      },
    ],
    errorElement: <ErrorPage />,
  },
]);
ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
