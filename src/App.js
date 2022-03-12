import "./App.scss";
import { useState } from "react";
import Bracket from "./components/Bracket.js";
import Archive from "./components/Archive.js";
import Footer from "./components/Footer.js"
import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";

function App() {
	
    return (
        <BrowserRouter>
            <div className="App container-fluid">
                <Routes>
                    <Route path="/" element={<Bracket />}>
												<Route index element={<Bracket />} />
                        <Route path=":year" element={<Bracket />} />
                    </Route>
										<Route path="archive" element={<Archive />} />
                </Routes>
                <Footer />
            </div>
        </BrowserRouter>
    );
}

export default App;
