import { useState, useEffect } from "react";
import Char from "./char";

function LoadPageBtns({ page, setPage }) {
    return (
        <div className="flex justify-between items-center text-neutral-100 text-center">
            <button className="border-2 border-neutral-100 rounded-lg py-2 px-3">
                Back
            </button>
            <div className="bg-neutral-200 rounded-full text-neutral-700 aspect-square w-10 pt-1.5 font-bold">
                {page}
            </div>
            <button className="border-2 border-neutral-100 rounded-lg py-2 px-3">
                Next
            </button>
        </div>
    );
}

function CharsList() {
    const [chars, setChars] = useState({});
    const [pageToLoad, setPageToLoad] = useState(1);

    useEffect(() => {
        async function getAPIdata() {
            // Get API data
            const res = await fetch(
                `https://rickandmortyapi.com/api/character/?page=${pageToLoad}}`
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
            <LoadPageBtns page={pageToLoad} setPage={setPageToLoad} />
            <div className="my-1 p-10 gap-10 grid grid-cols-1 sm:grid-cols-3">
                {chars[1] && // if chars exits
                    chars.map((char) => {
                        return <Char character={char} key={char.id} />;
                    })}
            </div>
        </div>
    );
}

export default CharsList;
