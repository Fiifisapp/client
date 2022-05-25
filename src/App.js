import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LandingPage from "./components/LandingPage/LandingPage";
import Authen from "./components/Authen/Authen";
import Dashboard from "./components/Dashboard/Dashboard";
import Adminboard from "./components/Adminboard/Adminboard";
import Documents from "./components/Documents/Documents";
import Users from "./components/Users/Users";
import Checker from "./components/Checker/Checker";
import PDFUpload from "./components/PDFUpload/PDFUpload";
import TextUpload from "./components/TextUpload/TextUpload";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/authen" element={<Authen />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="documents" element={<Documents />} />
          <Route path="pdf-upload" element={<PDFUpload />} />
          <Route path="text-upload" element={<TextUpload />} />
          <Route path="checker" element={<Checker />} />
        </Route>
        <Route path="/Adminboard" element={<Adminboard />}>
          <Route path="documents" element={<Documents />} />
          <Route path="pdf-upload" element={<PDFUpload />} />
          <Route path="text-upload" element={<TextUpload />} />
          <Route path="users" element={<Users />} />
          <Route path="checker" element={<Checker />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
