import React from "react";
import Navigation from "../Components/Navigation";
import Cards from "../Components/Cards";

const Main = () => {
    return (
        <main>
            <Navigation />
            <div className="title">
                <h1>NBA players</h1>
            </div>
            <Cards />
        </main>
    );
};

export default Main;
