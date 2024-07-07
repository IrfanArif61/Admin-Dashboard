export const formUserInputs = [
  {
    id: 1,
    label: "Service",
    type: "text",
    name: "service",
    placeholder: "service",
  },
  {
    id: 2,
    label: "Category",
    type: "text",
    name: "category",
    placeholder: "category",
  },
  {
    id: 3,
    label: "Rating",
    type: "text",
    name: "rating",
    placeholder: "rating",
  },
  {
    id: 4,
    label: "Description",
    type: "text",
    name: "description",
    placeholder: "description",
  },
  
];

// // App.jsx
// import React, { useState } from "react";
// import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import Home from "./pages/home/Home";
// import Login from "./pages/login/Login";
// import List from "./pages/list/List";
// import Single from "./pages/single/Single";
// import New from "./pages/new/New";

// function App() {
//   const [users, setUsers] = useState(userRows); // Store the user data

//   // Function to add a new user to the user data
//   const addUser = (newUser) => {
//     // Generate a new ID (you may want to use a more robust method)
//     const newId = Math.max(...users.map((user) => user.id)) + 1;
//     const userWithId = { id: newId, ...newUser };

//     // Update the user data with the new user
//     setUsers([...users, userWithId]);
//   };

//   return (
//     <div className="App">
//       <Router>
//         <Routes>
//           <Route path="/" element={<Home />} />
//           <Route path="login" element={<Login />} />
//           <Route path="users" element={<List addUser={addUser} users={users} />} />
//           <Route path="users/new" element={<New addUser={addUser} />} />
//           <Route path="products" element={<List addUser={addUser} users={users} />} />
//         </Routes>
//       </Router>
//     </div>
//   );
// }

// export default App;
