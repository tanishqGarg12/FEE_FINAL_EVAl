import React, { useState, useEffect } from "react";
import Card from "./Card";
import Pokeinfo from "./Pokeinfo";
import axios from "axios";

const Main = () => {
  const [pokeData, setPokeData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [url, setUrl] = useState("https://pokeapi.co/api/v2/pokemon/");
  const [nextUrl, setNextUrl] = useState();
  const [prevUrl, setPrevUrl] = useState();
  const [pokeDex, setPokeDex] = useState();
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedType, setSelectedType] = useState("");
  const [minAttack, setMinAttack] = useState(0);
  const [maxAttack, setMaxAttack] = useState(100);

  const pokeFun = async () => {
    setLoading(true);
    const res = await axios.get(url);
    setNextUrl(res.data.next);
    setPrevUrl(res.data.previous);
    getPokemon(res.data.results);
    setLoading(false);
  };

  const getPokemon = async (res) => {
    res.map(async (item) => {
      const result = await axios.get(item.url);
      setPokeData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
      setFilteredData((state) => {
        state = [...state, result.data];
        state.sort((a, b) => (a.id > b.id ? 1 : -1));
        return state;
      });
    });
  };

  const handleSearch = () => {
    const filtered = pokeData.filter((pokemon) =>
      pokemon.name.toLowerCase().startsWith(searchTerm.toLowerCase())
    );
    setFilteredData(filtered);
  };

  const handleTypeFilter = (type) => {
    setSelectedType(type);
    if (type) {
      const filtered = pokeData.filter((pokemon) =>
        pokemon.types.some((t) => t.type.name === type.toLowerCase())
      );
      setFilteredData(filtered);
    } else {
      setFilteredData(pokeData);
    }
  };

  const handleStatFilter = () => {
    const filtered = pokeData.filter(
      (pokemon) =>
        pokemon.stats[1].base_stat >= minAttack &&
        pokemon.stats[1].base_stat <= maxAttack
    );
    setFilteredData(filtered);
  };

  useEffect(() => {
    pokeFun();
  }, [url]);

  return (
    <div className="flex justify-between p-6 bg-gray-100">
      <div className="flex-1 mr-4">
        {/* Search Bar */}
        <div className="mb-4">
          <input
            type="text"
            placeholder="Search Pokémon by name"
            value={searchTerm}
            onChange={(e) => {
              setSearchTerm(e.target.value);
              handleSearch();
            }}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          />
        </div>

        {/* Filter by Type */}
        <div className="mb-4">
          <select
            onChange={(e) => handleTypeFilter(e.target.value)}
            className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
          >
            <option value="">All Types</option>
            <option value="fire">Fire</option>
            <option value="water">Water</option>
            <option value="grass">Grass</option>
            <option value="electric">Electric</option>
          </select>
        </div>

        {/* Filter by Attack Stat */}
        <div className="mb-4">
          <label className="block mb-2">Attack Stat:</label>
          <div className="flex space-x-2">
            <input
              type="number"
              value={minAttack}
              onChange={(e) => setMinAttack(e.target.value)}
              placeholder="Min Attack"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
            <input
              type="number"
              value={maxAttack}
              onChange={(e) => setMaxAttack(e.target.value)}
              placeholder="Max Attack"
              className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring focus:ring-blue-300"
            />
          </div>
          <button
            onClick={handleStatFilter}
            className="mt-2 w-full bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition duration-200"
          >
            Filter by Attack
          </button>
        </div>

        <Card
          pokemon={filteredData}
          loading={loading}
          infoPokemon={(poke) => setPokeDex(poke)}
        />

        <div className="flex space-x-2 mt-4">
          {prevUrl && (
            <button
              onClick={() => {
                setPokeData([]);
                setFilteredData([]);
                setUrl(prevUrl);
              }}
              className="bg-gray-300 text-black p-3 rounded-lg hover:bg-gray-400 transition duration-200"
            >
              Previous
            </button>
          )}

          {nextUrl && (
            <button
              onClick={() => {
                setPokeData([]);
                setFilteredData([]);
                setUrl(nextUrl);
              }}
              className="bg-gray-300 text-black p-3 rounded-lg hover:bg-gray-400 transition duration-200"
            >
              Next
            </button>
          )}
        </div>
      </div>

      <div className="flex-initial w-[300px]">
        <Pokeinfo data={pokeDex} />
      </div>
    </div>
  );
};

export default Main;