import React, { useState } from "react";
import SelectInput from "../style/components/SelectInput.css";

const options = [
    "Atlanta Hawks",
    "Boston Celtics",
    "Brooklyn Nets",
    "Charlotte Hornets",
    "Chicago Bulls",
    "Cleveland Cavaliers",
    "Dallas Mavericks",
    "Denver Nuggets",
    "Detroit Pistons",
    "Golden State Warriors",
    "Houston Rockets",
    "Indiana Pacers",
    "LA Clippers",
    "Los Angeles Lakers",
    "Memphis Grizzlies",
    "Miami Heat",
    "Milwaukee Bucks",
    "Minnesota Timberwolves",
    "New Orleans Pelicans",
    "New York Knicks",
    "Oklahoma City Thunder",
    "Orlando Magic",
    "Philadelphia 76ers",
    "Phoenix Suns",
    "Portland Trail Blazers",
    "Sacramento Kings",
    "San Antonio Spurs",
    "Toronto Raptors",
    "Utah Jazz",
    "Washington Wizards",
];

const SelectTheInput = () => {
    const [filteredOptions, setFilteredOptions] = useState(options);
    const [showOptions, setShowOptions] = useState(false);
    const [searchText, setSearchText] = useState("");

    const handleInputChange = (event) => {
        const text = event.target.value;
        const filtered = options.filter((option) => option.toLowerCase().includes(text.toLowerCase()));
        setFilteredOptions(filtered);
        setSearchText(text);
        setShowOptions(true);
    };

    const handleOptionClick = (option) => {
        setSearchText(option);
        setShowOptions(false);
    };

    return (
        <div className="search-team">
            <input id="select-input" type="text" value={searchText} placeholder="Search a team" onChange={handleInputChange} />
            {showOptions && (
                <ul id="select-list">
                    {filteredOptions.map((option) => (
                        <li key={option} onClick={() => handleOptionClick(option)}>
                            {option}
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default SelectTheInput;
