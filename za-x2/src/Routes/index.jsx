import { createBrowserRouter } from "react-router-dom";
import Hero from "../sections/Hero";
import App from "../App";
import Form from "../sections/Form";

const router = createBrowserRouter([
  {
    path: "/hero",
    element: <Hero />,
  },
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/form",
    element: <Form />,
  },
]);

export default router;
