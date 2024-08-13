import { Routes, Route } from "react-router-dom";
import Paypassword from "./component/pay/Paypassword";

function App() {
  return (
    <Routes>
      <Route path="/pay/Paypassword" element={<Paypassword />} />
    </Routes>
  );
}

export default App;
