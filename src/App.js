import { Routes, Route } from "react-router-dom";
import Paypassword from "./component/pay/Paypassword";
import IndexMain from "./component/mainIndex/IndexMain";
import Payresult from "./component/pay/Payresult";

function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexMain />} />
      <Route path="/pay/Paypassword" element={<Paypassword />} />
      <Route path="/pay/Payresult" element={<Payresult />} />
    </Routes>
  );
}

export default App;
