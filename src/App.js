import { Routes, Route } from "react-router-dom";
import Paypassword from "./component/pay/Paypassword";
import IndexMain from "./component/mainIndex/IndexMain";
import LoginMain from "./component/mainIndex/LoginMain";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexMain />} />
      <Route path="/login" element={<LoginMain />} />
      <Route path="/pay/Paypassword" element={<Paypassword />} />
    </Routes>
  );
}

export default App;
