import { Link, useLocation } from "react-router-dom";

import bracket from "../bracket-icon.png";

function App() {
    const location = useLocation();
    return (
        <div className="footer container-fluid font-size-18 text-center">
            <img className="bracket-icon" src={bracket} alt="Bracket Icon"></img> by{" "}
            <a href="https://hoffmanjoshua.dev">Joshua Hoffman</a>.
            <div>
                <Link to={location.pathname === "/archive" ? "/" : "/archive"}>
                    {location.pathname === "/archive" ? "Home" : "Archive"}
                </Link>
                .
            </div>
        </div>
    );
}

export default App;
