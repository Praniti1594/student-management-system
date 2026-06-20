import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import AddStudent from "./pages/AddStudent";
import Students from "./pages/Students";
import EditStudent from "./pages/EditStudent";
import Analytics from "./pages/Analytics";

function App() {
  return (
    <BrowserRouter>

      <Navbar />

      <Routes>

        <Route
          path="/"
          element={<Home />}
        />

        <Route
          path="/add-student"
          element={<AddStudent />}
        />

        <Route
          path="/students"
          element={<Students />}
        />

        <Route
  path="/edit-student/:id"
  element={<EditStudent />}
/>

<Route
  path="/analytics"
  element={<Analytics />}
/>

      </Routes>

    </BrowserRouter>
  );
}

export default App;