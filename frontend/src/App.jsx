import {
  BrowserRouter,
  Routes,
  Route,
  Outlet,
} from "react-router-dom";
import Home from "./components/Home/Home";
import Login from "./components/account/Login";
import Signup from "./components/account/Signup";
import AboutUs from "./components/aboutUs/AboutUs";
import Navbar from "./components/navbar/Navbar";
import JoinAsDriver from "./components/driver/JoinAsDriver";
import HireDriverForB2b from "./components/b2b/HireDriverForB2B";
import DriverCoins from "./components/driver_coins/DriverCoins";

function Dashboard() {
  return (
    <div>
      <Navbar />

      {/* This element will render either <DashboardMessages> when the URL is
          "/messages", <DashboardTasks> at "/tasks", or null if it is "/"
      */}
      <Outlet />
    </div>
  );
}

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {/* <Route path="/login" element={<TestLogin setIsUserAuth={setIsUserAuth} />} /> */}
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          {/* <Route path="/" element={<Home />} /> */}
            <Route  path="/business" element={<HireDriverForB2b />} />

          <Route element={<Dashboard />}>
            <Route index path="/" element={<Home />} />
            <Route  path="/about" element={<AboutUs />} />
            <Route  path="/driver-partner" element={< JoinAsDriver />} />
            <Route  path="/driver-coins" element={<DriverCoins />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
