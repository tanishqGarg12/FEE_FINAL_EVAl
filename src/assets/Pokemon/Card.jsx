import React from "react";

const Card = ({ pokemon, loading, infoPokemon }) => {
    return (
        <>
            {loading ? (
                <h1 className="text-center text-xl font-bold">Loading...</h1>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
                    {pokemon.map((item) => {
                        return (
                            <div
                                className="bg-white border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-200 p-4 cursor-pointer"
                                key={item.id}
                                onClick={() => infoPokemon(item)}
                            >
                                <h2 className="text-lg font-semibold text-center">{item.id}</h2>
                                <img
                                    src={item.sprites.front_default}
                                    alt={item.name}
                                    className="mx-auto mb-2 w-24 h-24"
                                />
                                <h2 className="text-center text-xl font-medium capitalize">{item.name}</h2>
                            </div>
                        );
                    })}
                </div>
            )}
        </>
    );
};

export default Card;