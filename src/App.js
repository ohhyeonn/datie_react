import RealHeader from "./component/RealHeader"
import Header from "./component/Header"
import Footer from "./component/Footer"

function App() {
  return (
    <div>
    <div className="App">
      <RealHeader/>
      <Header title={"서브 헤더"}/>
    </div>
    <div className="footer">
      <Footer/> 
    </div>
    </div>
  );
}

export default App;
