import React from 'react';
import './App.css';
import Header from "./components/common/Header/Header";
import Footer from "./components/common/Footer/Footer";
import Technologies from "./components/Technologies/Technologies";

const App = () => {

    return (
        <div className="App">
            <Header title="HEADER"/>
            <Technologies/>
            <Footer title="IT'S YOUR FOOTER"/>
        </div>
    );
}

export default App;
