import Dashboard from "../Dashboard/Dashboard";
import Users from "../users/Users";
import Survey from "../Survey/Survey";
import Questions from "../Questions/Questions";
import Locations from "../Locations/Locations";
import Voters from "../Voters/Voters";

const SidebarRoutes = [
  {
    title: "Dashboard",
    path: "/dashboard",
    Component: Dashboard,
  },
  {
    title: "Users",
    path: "/users",
    Component: Users,
  },
  {
    title: "Survey",
    path: "/survey",
    Component: Survey,
  },
  {
    title: "Questions",
    path: "/questions",
    Component: Questions,
  },
  {
    title: "Locations",
    path: "/locations",
    Component: Locations,
  },
  {
    title: "Voters",
    path: "/voters",
    Component: Voters,
  },
];

export default SidebarRoutes;
