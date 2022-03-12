import "./App.scss";
import Bracket from "./components/Bracket.js";
import Archive from "./components/Archive.js";
import Footer from "./components/Footer.js";
import BracketPicker from "./components/BracketPicker.js";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App container-fluid">
                <Routes>
                    <Route index path="/" element={<BracketPicker/>} />
                    <Route path="/archive" element={<Archive />} />
                    <Route path="/m" element={<Bracket type="m"/>}>
                        <Route index element={<Bracket type="m"/>} />
                        <Route path=":year" element={<Bracket type="m"/>} />
                    </Route>
                    <Route path="/w" element={<Bracket type="w" />}>
                        <Route index element={<Bracket type="w"/>} />
                        <Route path=":year" element={<Bracket type="w"/>} />
                    </Route>
                    <Route path="*" element={<Navigate to="/" />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
