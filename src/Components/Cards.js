import React, { useEffect } from "react";
import axios from "axios";

const Cards = () => {
    useEffect(() => {
        axios.get("https://www.balldontlie.io/api/v1/players").then((res) => console.log(res));
    });
    return <div></div>;
};

export default Cards;
