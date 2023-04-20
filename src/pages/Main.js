import Navigation from "../Components/Navigation";
import Cards from "../Components/Cards";
import React, { useEffect, useState } from "react";
import "../style/components/Main.css";

const Main = () => {
    const [playerDataSliced, setPlayerDataSliced] = useState([]);
    const [loading, setLoading] = useState(true);
    const [value, setValue] = useState("");

    useEffect(() => {
        const getPlayerData = async () => {
            try {
                const response = await fetch(
                    "https://api.sportsdata.io/v3/nba/stats/json/PlayerSeasonStats/2023?key=3d62918f56044eeb8e2ada1cc412893e",
                    {
                        method: "GET",
                    }
                );
                const data = await response.json();
                const dataSliceTemp = data.slice(0, 20);
                setPlayerDataSliced(dataSliceTemp);
                console.log("playerDataSliced-----", dataSliceTemp);
                const playersNames = dataSliceTemp.map((player) => {
                    return player.Name;
                });
                playersNames.forEach(async (playerName, index) => {
                    const responseGifPlayer = await fetch(
                        `https://api.giphy.com/v1/gifs/search?api_key=YTxcu48Q9nfb2oa666nTb5U3KZNKbZq1&q=${playerName}&limit=1&offset=0&rating=g&lang=en&fmt=json&fixed_width=200&fixed_height=200`
                    );
                    const gifPlayer = await responseGifPlayer.json();
                    const urlGifPlayer = gifPlayer.data[0].images.fixed_height.url;
                    dataSliceTemp[index].gif = urlGifPlayer;
                    if (index === playersNames.length - 1) {
                        setPlayerDataSliced(dataSliceTemp);
                        setLoading(false);
                    }
                });
            } catch (error) {
                console.error(error);
            }
        };
        getPlayerData();
    }, []);

    if (loading) {
        return;
    }
    return (
        <main>
            <Navigation />
            <div className="search">
                <input
                    type="text"
                    id="searchPlayer"
                    className="input"
                    placeholder="search a player"
                    onChange={(e) => setValue(e.target.value)}
                />
            </div>
            <div className="cards">
                {playerDataSliced.map((player, index) => {
                    return <Cards key={index} player={player} />;
                })}
            </div>
        </main>
    );
};

export default Main;
