import React from "react";

const Pokeinfo = ({ data }) => {
    return (
        <>
            {!data ? (
                <h1 className="text-center text-xl font-bold">Select a Pokémon</h1>
            ) : (
                <div className="p-4 bg-white rounded-lg shadow-md">
                    <h1 className="text-2xl font-bold text-center capitalize">{data.name}</h1>
                    <img
                        src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${data.id}.svg`}
                        alt={data.name}
                        className="mx-auto mb-4 w-32 h-32"
                    />
                    <div className="mb-4">
                        <h2 className="text-lg font-semibold">Abilities:</h2>
                        <div className="grid grid-cols-2 gap-2">
                            {data.abilities.map((poke) => (
                                <div
                                    key={poke.ability.name}
                                    className="bg-blue-100 p-2 rounded-md shadow-sm text-center"
                                >
                                    <h3 className="text-sm">{poke.ability.name}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                    <div>
                        <h2 className="text-lg font-semibold">Base Stats:</h2>
                        <div className="space-y-1">
                            {data.stats.map((poke) => (
                                <h3 key={poke.stat.name} className="text-sm">
                                    {poke.stat.name}: {poke.base_stat}
                                </h3>
                            ))}
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default Pokeinfo;