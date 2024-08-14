import { Routes, Route } from "react-router-dom";
import Paypassword from "./component/pay/Paypassword";
import Payresult from "./component/pay/Payresult";
import IndexMain from "./component/mainIndex/IndexMain";
function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/pay/Paypassword" element={<Paypassword />} />
        <Route path="/pay/Payresult" element={<Payresult />} />
        <Route path="/indexMain" element={<IndexMain />} />
      </Routes>
    </div>
  );
}

export default App;
