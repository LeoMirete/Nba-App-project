import Navigation from "../Components/Navigation";
import Cards from "../Components/Cards";
import React, { useEffect, useState } from "react";
import "../style/components/Main.css";
import SelectInput from "../Components/SelectInput";

const Main = () => {
    const [originalPlayers, setOriginalPlayer] = useState([]);
    const [filteredPlayers, setFilteredPlayers] = useState([]);
    const [filteredPlayersWithGif, setFilteredPlayersWithGif] = useState([]);

    const [inputValue, setInputValue] = useState("");

    useEffect(() => {
        const getPlayerData = async () => {
            try {
                const response = await fetch(
                    "https://api.sportsdata.io/v3/nba/stats/json/PlayerSeasonStats/2023?key=3d62918f56044eeb8e2ada1cc412893e",
                    {
                        method: "GET",
                    }
                );
                const playerDatas = await response.json();

                setOriginalPlayer(playerDatas);
            } catch (error) {
                console.log(error);
            }
        };
        getPlayerData();
    }, []);

    useEffect(() => {
        if (originalPlayers === [] || inputValue === "") {
            return;
        }

        const filteredPlayersTemp = originalPlayers.filter((originalPlayer) => {
            const filteredPlayer = originalPlayer.Name.toLowerCase().includes(inputValue.toLowerCase());
            return filteredPlayer;
        });

        const slicedAndFilteredPlayersTemp = filteredPlayersTemp.slice(0, 12);
        setFilteredPlayers(slicedAndFilteredPlayersTemp);
        console.log(originalPlayers);
    }, [originalPlayers, inputValue]);

    useEffect(() => {
        const fetchGif = async (player) => {
            const responseGifPlayer = await fetch(
                `https://api.giphy.com/v1/gifs/search?api_key=YTxcu48Q9nfb2oa666nTb5U3KZNKbZq1&q=${player.Name}&limit=1&offset=0&rating=g&lang=en&fmt=json&fixed_width=200&fixed_height=200`
            );
            const gifPlayer = await responseGifPlayer.json();
            const urlGifPlayer = gifPlayer.data[0].images.fixed_height.url;
            return { ...player, gif: urlGifPlayer };
        };

        const fetchGifs = async () => {
            const promises = filteredPlayers.map((player) => fetchGif(player));
            const results = await Promise.all(promises);
            setFilteredPlayersWithGif(results);
        };

        fetchGifs();
    }, [filteredPlayers]);

    return (
        <main>
            <Navigation />
            <div className="search">
                <input
                    type="text"
                    id="searchPlayer"
                    className="input"
                    placeholder="search a player"
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <SelectInput />
            </div>
            <div className="cards">
                {filteredPlayersWithGif.map((player, index) => {
                    return <Cards key={index} player={player} />;
                })}
            </div>
        </main>
    );
};

export default Main;
