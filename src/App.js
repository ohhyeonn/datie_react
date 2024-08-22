import './App.css';
import { Routes, Route } from 'react-router-dom';
import CardApplicationComplete from './component/cardcompletion/CardApplicationComplete';
import SignUpComponent from './component/register_first/SignUpForm_first';
import SignUpForm from './component/register_second/SignUpForm';
import CardCreationForm from './component/cardselection_first/CardCreationForm';
import ProfileComparison from './component/cardselection_second/ProfileComparison';
import CardInfoInput from './component/cardselection_3/CardInfoInput';
import LoginPage from './component/Login/LoginPage';
import Paypassword from './component/pay/Paypassword';
import IndexMain from './component/mainIndex/IndexMain';
import Payresult from './component/pay/Payresult';

function App() {
    return (
        <Routes>
            <Route path="/verify" element={<SignUpComponent />} />
            <Route path="/signup" element={<SignUpForm />} />
            <Route path="/search_lover" element={<CardCreationForm />} />
            <Route path="/card_selection" element={<ProfileComparison />} />
            <Route path="/card_info" element={<CardInfoInput />} />
            <Route
                path="/card_complete"
                element={<CardApplicationComplete />}
            />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/" element={<IndexMain />} />
            <Route path="/pay/Paypassword" element={<Paypassword />} />
            <Route path="/pay/Payresult" element={<Payresult />} />
            {/* <Route path="/" element={<SignUpComponent />} /> */}
            {/* <Route path="/" element={<SignUpForm />} /> */}
            {/* <Route path="/" element={<CardCreationForm />} /> */}
            {/* <Route path="/" element={<ProfileComparison />} /> */}
            {/* <Route path="/" element={<CardInfoInput />} /> */}
            {/* <Route path="/" element={<CardApplicationComplete />} /> */}
            <Route path="/" element={<LoginPage />} />
        </Routes>
    );
}

export default App;
