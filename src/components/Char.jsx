import React from "react";

function Char({ character }) {
    // only 1 character component
    return (
        <div className="text-center text-slate-400 sm:m-10">
            <h2 className="text-2xl">{character.name}</h2>
            <img
                src={character.image}
                alt="Character photo"
                className="rounded-full my-5"
            />
            <h3 className="">{character.origin.name}</h3>
        </div>
    );
}

export default Char;
