import {Routes, Route} from 'react-router-dom';
import Login from './components/Login.jsx';
import UserProfile from "./components/UserProfile.jsx";

function App() {
    return (
        <div>
            <Routes>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/user-profile" element={<UserProfile/>}/>
            </Routes>
        </div>
    );
}

export default App;
