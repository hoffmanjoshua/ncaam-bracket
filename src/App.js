import "./App.scss";
import { useState } from "react";

// Components
import R64 from "./components/R64.js";
import R32 from "./components/R32.js";
import S16 from "./components/S16.js";
import E8 from "./components/E8.js";
import F4 from "./components/F4.js";

import bracket from "./bracket-icon.png";

import data from "./2022-ncaam.json";

function App() {
    const [page, setPage] = useState("R64");

    function switchRound(pageVal) {
        setPage(pageVal);
    }

    function getPage() {
        switch (page) {
            case "R64":
                return <R64 data={data}></R64>;
            case "R32":
                return <R32 data={data}></R32>;
            case "S16":
                return <S16 data={data}></S16>;
            case "E8":
                return <E8 data={data}></E8>;
            case "F4":
                return <F4 data={data}></F4>;
            default:
                return <h2>Page Not Found</h2>;
        }
    }

    return (
        <div className="App container-fluid">
            <h1 className="font-weight-semi-bold">
                {data.info.name}&#39;s {data.info.year} {data.info.tournament.toUpperCase()} Bracket
            </h1>
            <div className="flex">
                <div class="btn-group m-auto" role="group" aria-label="Basic example">
                    <button
                        class={`btn ${page === "R64" ? "btn-primary" : ""}`}
                        type="button"
                        onClick={() => switchRound("R64")}
                    >
                        R64
                    </button>
                    <button
                        class={`btn ${page === "R32" ? "btn-primary" : ""}`}
                        type="button"
                        onClick={() => switchRound("R32")}
                    >
                        R32
                    </button>
                    <button
                        class={`btn ${page === "S16" ? "btn-primary" : ""}`}
                        type="button"
                        onClick={() => switchRound("S16")}
                    >
                        S16
                    </button>
                    <button
                        class={`btn ${page === "E8" ? "btn-primary" : ""}`}
                        type="button"
                        onClick={() => switchRound("E8")}
                    >
                        E8
                    </button>
                    <button
                        class={`btn ${page === "F4" ? "btn-primary" : ""}`}
                        type="button"
                        onClick={() => switchRound("F4")}
                    >
                        F4
                    </button>
                </div>
            </div>

            <div>{getPage()}</div>
            <div className="footer container-fluid font-size-18 text-center">
                <img className="bracket-icon" src={bracket} alt="Bracket Icon"></img> by{" "}
                <a href="https://hoffmanjoshua.dev">Joshua Hoffman</a>.
            </div>
        </div>
    );
}

export default App;
