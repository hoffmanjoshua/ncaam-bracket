import "./App.scss";
import Bracket from "./components/Bracket.js";
import Archive from "./components/Archive.js";
import Footer from "./components/Footer.js";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

function App() {
    return (
        <BrowserRouter>
            <div className="App container-fluid">
                <Routes>
                    <Route index path="/" element={<Navigate to="/m" />} />
                    <Route path="/archive" element={<Archive />} />
                    <Route path="/m" element={<Bracket />}>
                        <Route index element={<Bracket />} />
                        <Route path=":year" element={<Bracket />} />
                    </Route>
                    <Route path="/w" element={<Bracket />}>
                        <Route index element={<Bracket />} />
                        <Route path=":year" element={<Bracket />} />
                    </Route>
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
