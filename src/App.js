import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import List from "./pages/list/List";
import Single from "./pages/single/Single";
import New from "./pages/new/New";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { formUserInputs } from "./formSource";
import AllUsers from "./pages/allusers/AllUsers";
import AllServices from "./pages/allServices/AllServices";
import Review from "./components/reviews/Review";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home title="Dashboard" />} />
          <Route path="login" element={<Login />} />
          {/* <Route path="logout" element={<Logout />} /> */}
          <Route
            path="allusers"
            element={<AllUsers title="Users Information" />}
          />
          <Route path="allservices">
            <Route index element={<AllServices title="Services" />} />
            <Route path="new" element={<New inputs={formUserInputs} />} />
            <Route path="reviews" element={<Review />} />
          </Route>

          <Route path="users">
            <Route index element={<List title="Appointments" />} />
            <Route path=":userId" element={<Single />} />

            {/* <Route path="reviews" element={<New inputs={formUserInputs} />} /> */}
          </Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
