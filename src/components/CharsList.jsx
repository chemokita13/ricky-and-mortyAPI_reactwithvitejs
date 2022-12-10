import { useState, useEffect } from "react";
import Char from "./char";

function CharsList() {
    const [chars, setChars] = useState({});

    useEffect(() => {
        async function getAPIdata() {
            // Get API data
            const res = await fetch(
                "https://rickandmortyapi.com/api/character/?page=1"
            );
            const data = await res.json();
            ///await setCharsAPI(data.results); // I don't know why but doesn't works without await
            setChars([...data.results]);
            console.log("data from API: ", typeof data.results, data.results);
            console.log("data from API stored: ", typeof chars);
        }

        getAPIdata();
    }, []);

    return (
        <div>
            {chars[1] && // if chars exits
                chars.map((char) => {
                    return <Char character={char} key={char.id} />;
                })}
        </div>
    );
}

export default CharsList;
