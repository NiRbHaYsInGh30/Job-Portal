import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/Theme-provider";

import "./App.css";
import AppLayout from "./layout/AppLayout";
import Landing from "./pages/Landing";
import JobListing from "./pages/JobListing";
import Job from "./pages/Job";
import PostJob from "./pages/PostJob";
import SaveJob from "./pages/SaveJob";
import MyJobs from "./pages/MyJobs";
import About from "./pages/About";
import ProtectedRoutes from "./components/ProtectedRoutes";
import Onboarding from "./pages/Onboarding";

const router = createBrowserRouter([
  {
    element: <AppLayout />,
    children: [
      {
        path: "/",
        element: <Landing />,
      },
      {
        path: "/onboarding",
        element: (
          <ProtectedRoutes>
            <Onboarding/>
          </ProtectedRoutes>
        ),
      },
      {
        path: "/jobs",

        element: (
          <ProtectedRoutes>
            <JobListing />,
          </ProtectedRoutes>
        ),
      },
      {
        path: "/job/:id",
        element: (
          <ProtectedRoutes>
            <Job />,
          </ProtectedRoutes>
        ),
      },
      {
        path: "/post-job",
        element: (
          <ProtectedRoutes>
            <PostJob />,
          </ProtectedRoutes>
        ),
      },
      {
        path: "/saved-job",
        element: (
          <ProtectedRoutes>
            <SaveJob />,
          </ProtectedRoutes>
        ),
      },
      {
        path: "/my-job",
        element: (
          <ProtectedRoutes>
            <MyJobs />,
          </ProtectedRoutes>
        ),
      },
      {
        path: "/about",
        element: <About />,
      },
    ],
  },
]);

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <RouterProvider router={router} />;{/* <Button>Import</Button> */}
    </ThemeProvider>
  );
}

export default App;
