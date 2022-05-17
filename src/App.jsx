import {  Router, Routes, Route } from "solid-app-router";

import Test from "./pages/Test/Test";
import Home from "./pages/Home/Home";

import styles from "./App.module.css";

function App() {
    return (
        <Router>
            <div class={styles.app}>Always here</div>

            <a href="/test">Visit /test</a> <br/>
            <a href="/about">Visit /about</a> <br/>
            <a href="/">Visit /</a> <br/> <br/>

            <Routes>
                <Route path="/test" element={<Test />} />
                <Route path="/" element={<Home />} />
                <Route
                    path="/about"
                    element={<div>About page (without element)</div>}
                />
            </Routes>
        </Router>
    );
}

export default App;
