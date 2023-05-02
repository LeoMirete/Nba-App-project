import React from "react";
import "../style/components/Cards.css";

const Cards = ({ player, index }) => {
    console.log(player.gif);
    return (
        <div className="card">
            <div className="header">
                <h3>{player.Name}</h3>
                <h4>{player.Position}</h4>
                <h4>{player.Team}</h4>
                <img src={player.gif} alt="Beeeal" />
            </div>
            <div className="stats">
                <p className="points">Points : {Math.round((player.Points / player.Games) * 10) / 10}</p>
                <p className="rebounds">Rebounds : {Math.round((player.Rebounds / player.Games) * 10) / 10}</p>
                <p className="assists">Assists : {Math.round((player.Assists / player.Games) * 10) / 10}</p>
                <p className="blocks">Blocks : {Math.round((player.BlockedShots / player.Games) * 10) / 10}</p>
                <p className="steals">Steals : {Math.round((player.Steals / player.Games) * 10) / 10}</p>
                <p className="turnover">Turnover : {Math.round((player.Turnovers / player.Games) * 10) / 10}</p>
                <p className="games">Games : {player.Games}</p>
                <p className="minutes">Minutes : {Math.round((player.Minutes / player.Games) * 10) / 10}</p>
            </div>
        </div>
    );
};

export default Cards;
