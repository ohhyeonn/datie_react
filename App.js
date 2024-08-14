import "./App.css";

//첫번째 페이지
import EmailInput from "./register_second/EmailInput";
import SignUpForm from "./register_second/SignUpForm";
//두번째 페이지
import SignUpForm_first from "./register_first/SignUpForm_first";
//카드생성 첫번째
import CardCreationForm from "./cardselection_first/CardCreationForm";
//카드생성 두번쨰
import ProfileComparison from "./cardselection_second/ProfileComparison";
//카드생성 세번째
import CardInfoInput from "./cardselection_3/CardInfoInput";
//카드생성 완료
import CardApplicationComplete from "./cardcompletion/CardApplicationComplete";
//로그인
import StyledLoginPage from "./Login/LoginPage";

function App() {
  return (
    <div className="App">
      <SignUpForm_first />
      {/* <SignUpForm /> */}
      {/* <CardCreationForm /> */}
      {/* <ProfileComparison /> */}
      {/* <CardInfoInput /> 카드생성 세번째 */}
      {/* <CardApplicationComplete /> 카드생성완료 */}
      {/* <StyledLoginPage /> 로그인 */}
    </div>
  );
}

export default App;
