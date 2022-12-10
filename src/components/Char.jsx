import React from "react";

function Char({ character }) {
    return (
        <div className="bg-black">
            <h2>
                {character.name}, {character.id}
            </h2>
            <img
                //key={character.id}
                src={character.image}
                alt="Character photo"
            />
        </div>
    );
}

export default Char;
