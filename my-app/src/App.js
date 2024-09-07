import Challanges from "./components/Challanges";
import HomePage from "./components/HomePage";
import "./App.css";
import ExploreChallangesPage from "./components/ExploreChallangesPage";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ParticipatePage from "./components/ParticipatePage";
import Editdetails from "./components/Editdetails";
import EditdetailsForm from "./components/EditdetailsForm";

function App() {
  return (
    <div className="App">
      <Router>
        {/* <HomePage /> */}
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route
            path="/participate/:challangeName"
            element={<ParticipatePage />}         />
          <Route path="/edit" element={<Editdetails />}></Route>
          <Route path="/editdetails" element={<EditdetailsForm/>}></Route>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
