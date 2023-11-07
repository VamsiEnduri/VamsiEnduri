import { Routes, Route } from "react-router-dom";
import Layout from "./containers/layout/Layout";
import SidebarRoutes from "./containers/routes/SidebarRoutes";
import "./App.css";
import Login from "./components/login/Login";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route element={<Layout />}>
          {SidebarRoutes.map((links, i) => {
            const Component = links.Component !== undefined && links.Component;
            return <Route path={links.path} key={i} element={<Component />} />;
          })}
        </Route>
      </Routes>
    </>
  );
}

export default App;
