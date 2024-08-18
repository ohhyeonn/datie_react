import DiaryDetail from './diary/pages/DiaryDetail';
import DiaryHome from './diary/pages/DiaryHome';
import { Routes, Route } from 'react-router-dom';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="/diary" element={<DiaryHome />} />
                <Route path="/diary/detail" element={<DiaryDetail />} />
            </Routes>
        </div>
    );
}

export default App;
