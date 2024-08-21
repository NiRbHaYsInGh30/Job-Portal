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
        element: <Landing />,
      },
      {
        path: "/jobs",
        element: <JobListing />,
      },    
      {
        path: "/job/:id",
        element: <Job />,
      },
      {
        path: "/post-job",
        element: <PostJob />,
      },
      {
        path: "/saved-job",
        element: <SaveJob />,
      },
      {
        path: "/my-job",
        element: <MyJobs />,
      },
      {
        path: "/about",
        element: <About/>
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
