import LevelsPage from "./pages/LevelsPage/LevelsPage";
import { useRoutes, Outlet } from "react-router-dom";
import LevelPage from "./pages/LevelPage/LevelPage";
import LevelOne from "./components/LevelOne/LevelOne";

const Routes = () => {
  return useRoutes([
    { path: "/", element: <LevelsPage /> },
    {
      path: "/levels",
      element: <Outlet />,
      children: [
        {
          path: "1",
          element: (
            <LevelPage isStartAnimation={true} LevelComponent={<LevelOne />} />
          ),
        },
      ],
    },

    { path: "*", element: <h1>404 Not Found</h1> },
  ]);
};

export default Routes;
