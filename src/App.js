import "./App.css";
import { Routes, Route } from "react-router-dom";
import CardApplicationComplete from "./component/cardcompletion/CardApplicationComplete";
import SignUpComponent from "./component/register_first/SignUpForm_first";
import SignUpForm from "./component/register_second/SignUpForm";
import CardCreationForm from "./component/cardselection_first/CardCreationForm";
import ProfileComparison from "./component/cardselection_second/ProfileComparison";
import CardInfoInput from "./component/cardselection_3/CardInfoInput";
import LoginPage from "./component/Login/LoginPage";
function App() {
  return (
    <Routes>
      <Route path="/verify" element={<SignUpComponent />} />
      <Route path="/signup" element={<SignUpForm />} />
      <Route path="/search_lover" element={<CardCreationForm />} />
      <Route path="/card_selection" element={<ProfileComparison />} />
      <Route path="/card_info" element={<CardInfoInput />} />
      <Route path="/card_complete" element={<CardApplicationComplete />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}

export default App;
