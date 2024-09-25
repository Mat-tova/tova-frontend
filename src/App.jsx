import {Routes, Route} from 'react-router-dom';
import Login from './components/Login.jsx';
import MainPage from "./components/MainPage.jsx";
import StarredLiked from "./components/StarredLiked.jsx";
import Travel from "./components/Travel.jsx";
function App() {
    return (
        <div>
            <Routes>
                <Route exact path="/login" element={<Login/>}/>
                <Route exact path="/user-profile" element={<MainPage/>}/>
                <Route exact path="/liked" element={<StarredLiked/>}/>
                <Route exact path="/travel" element={<Travel/>}/>
            </Routes>
        </div>
    );
}

export default App;
