import {useEffect, useState} from 'react';
import axios from "axios";
import './App.css';

function App() {
  const [characters, setCharacters] = useState([]);
  const [nameQuery, setNameQuery] = useState('');
  const [statusQuery, setStatusQuery] = useState('');
  const [speciesQuery, setSpeciesQuery] = useState('');


  // useEffect(() => {
  //   const fetchEpisode = async () => {
  //     try {
  //     const {data} = await axios.get(`https://rickandmortyapi.com/api/episode/${episodeQuery}`)
  //     console.log(data.characters);
  //     // const episodeCharacters = data.characters;
  //     const id = data.characters.map((item) => {
  //     const charactersId = item.slice(42);
  //       return charactersId;
  //      });
  //      console.log(id);


  //      function sliceIntoChunks(arr, chunkSize) {
  //       const res = [];
  //       for (let i = 0; i < arr.length; i += chunkSize) {
  //           const chunk = arr.slice(i, i + chunkSize);
  //           res.push(chunk);
  //       }
  //       return res;
  //   }
  //     const tryId = sliceIntoChunks(id, 1);
  //     console.log(tryId);
  //     const {dataCharacters} = await axios.get(`https://rickandmortyapi.com/api/character/${tryId}`)
  //     // console.log(dataCharacters);
  //     setCharacters(dataCharacters);
  //     } catch(error) {
  //       console.error(error)
  //     }
  //   }
  //   fetchEpisode()
  // }, [episodeQuery]);

  useEffect (() => {
    const fetchStatus = async () => {
      try {
        const {data} = await axios.get (`https://rickandmortyapi.com/api/character/?name=${nameQuery}&status=${statusQuery}&species=${speciesQuery}`)
        setCharacters(data.results)
      } catch(error) {
        alert('Такого существа нет!')
      }
    }
    fetchStatus()
  }, [nameQuery, statusQuery, speciesQuery]);
  


  return (
    <div className="flex items-center flex-col">
      <h1 className='text-white text-center m-8 text-3xl'>Вселенная Рик и Морти</h1>
      <div className='flex items-center flex-col w-10/12'>
        <input 
        name='name'
        type='text'
        placeholder="Name" 
        value={nameQuery}
        className='h8 w-1/4 p-0  border-white border-solid rounded-md bg-slate-950 text-white pb-1 pl-2 placeholder:text-white focus: bg-slate-950'
        onChange={(e) => setNameQuery(e.target.value)}/>
        <div className='flex flex-row gap-x-12 w-1/4'>
          <select  className='h8 w-2/4 p-0 border-white border-solid rounded-md  bg-slate-950 text-white pb-1 pl-2  placeholder:text-white focus: bg-slate-950'
          id="status" name="status" value={statusQuery} onChange={(e) => setStatusQuery(e.target.value)}>
        <option value="alive">Жив</option>
        <option value="dead">Мертв</option>
        </select>
      <select id="species"  
      className='h8 w-2/4 p-0 border-white border-solid rounded-md  bg-slate-950 text-white pb-1 pl-2  placeholder:text-white focus: bg-slate-950' 
      name="species" value={speciesQuery} onChange={(e) => setSpeciesQuery(e.target.value)}>
        <option value="Human">Человек</option>
        <option value="Alien">Инопланетянин</option>
        <option value="Mythological Creature">Мифологические существа</option>
        <option value="Humanoid">Гуманоид</option>
        </select>
        </div>

      </div>
      <div className='flex flex-col items-center'>
        <h2 className='m-8 text-white text-center text-2xl'>Найдено</h2>
        <div className='flex flex-row justify-center flex-wrap gap-4 justify-around'>
            {characters.map(character => (
          <div className='flex flex-col items-center '>
            <img className='h-full w-full' src={character.image} alt={character.name}></img>
            <div className='flex flex-col items-start'>
            <p className='m-0 p-0 text-white text-xl'><span className='text-2xl text-red-700'>Name:</span> {character.name}</p>
            <p className='m-0 p-0 text-white text-xl'><span className='text-2xl text-red-700'>Species:</span> {character.species}</p>  
            </div>
          </div>
        ))} 
        </div>

      </div>
    </div>
  );
}

export default App;
