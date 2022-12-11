import { useState, useEffect } from "react";
import Char from "./char";

function LoadPageBtns({ page, setPage }) {
    const maxPage = 42;
    const minPage = 1;

    const handleClickButton = (how) => {
        if (how === "+") {
            if (page == maxPage) {
                // max page cant add +1; returns to first page
                setPage(minPage);
                return;
            }
            setPage(++page);
            return;
        }
        if (how === "-") {
            if (page == minPage) {
                // min page cant add -1; returns to last page
                setPage(maxPage);
                return;
            }
            setPage(--page);
            return;
        }
    };

    return (
        <div className="flex justify-between items-center text-neutral-100 text-center">
            <button
                className="border-2 border-neutral-100 rounded-lg py-2 px-3"
                onClick={() => handleClickButton("-")}
            >
                Back
            </button>
            <div className="bg-neutral-200 rounded-full text-neutral-700 aspect-square w-10 pt-1.5 font-bold">
                {page}
            </div>
            <button
                onClick={() => handleClickButton("+")}
                className="border-2 border-neutral-100 rounded-lg py-2 px-3"
            >
                Next
            </button>
        </div>
    );
}

function CharsList() {
    const [chars, setChars] = useState({}); // array of chars to show gave by the API
    const [pageToLoad, setPageToLoad] = useState(1); // page to load

    useEffect(() => {
        async function getAPIdata() {
            // Get API data
            const res = await fetch(
                `https://rickandmortyapi.com/api/character/?page=${pageToLoad}`
            );
            const data = await res.json();
            setChars([...data.results]); // I dont know why but if is: 'setChars(data.results)' not works
        }

        getAPIdata();
    }, [pageToLoad]);

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
