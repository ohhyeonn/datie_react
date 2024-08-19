import { Routes, Route } from "react-router-dom";
import Paypassword from "./component/pay/Paypassword";
import IndexMain from "./component/mainIndex/IndexMain";
import Payresult from "./component/pay/Payresult";
import AdminMember from "./component/admin/AdminMember";
import AdminStatistics from "./component/admin/AdminStatistics";
function App() {
  return (
    <Routes>
      <Route path="/" element={<IndexMain />} />
      <Route path="/pay/Paypassword" element={<Paypassword />} />
      <Route path="/pay/Payresult" element={<Payresult />} />
      <Route path="/admin/member" element={<AdminMember />} />
      <Route path="/admin" element={<AdminStatistics />} />
    </Routes>
  );
}

export default App;
