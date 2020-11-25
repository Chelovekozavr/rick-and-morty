import React, { useState, useEffect } from 'react';

import { getEpisodes } from '../api/RickAndMortyApi';
import '../styles/episodes.scss';


export const Episodes = () => {
  const [episodes, setEpisodes] = useState([]);
  const [query, setQuery] = useState('');
/*
  useEffect(() => {
    getEpisodes()
      .then(result => console.log(result))
  }, []);*/

  useEffect(() => {
    getEpisodes()
      .then(result => setEpisodes(result.filter(item => item.name.toLowerCase().includes(query.toLowerCase()))))
  }, []);


/*
  useEffect(() => {
    setEpisodes(episodes.filter(episode => episode.toLowerCase().includes(query.toLowerCase())));
  }, []);*/
/*
  const handleChange = (event) => {
    setSelectedPostId();
    getPosts(event.target.value)
      .then(result => setPosts(result));

      console.log(event)
      console.log('this is query:' + query)

      setEpisodes(getEpisodes()
      .then(result => result.filter(item => item.name.toLowerCase().includes(event.toLowerCase())))
      )
  };*/

  const x = (event) => {
    setQuery(event);
  }

  return (
    <>
      <div className="episodes">
        <input
          type="text"
          id="search-query"
          className="episodes__input"
          placeholder="Type episode name"
          onChange={(event) => {
            x(event.target.value)
          }}
        />
        <table className="episodes-table">
          <thead className="episodes-table__head">
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Episode number</th>
              <th>Release date</th>
            </tr>
          </thead>
          <tbody>
            {episodes.map(({ name, episode, id, air_date }) => (
              <tr
                key={id}
                className="episodes-table__episode"
              >
                <td>{id}</td>
                <td>{name}</td>
                <td>{episode}</td>
                <td>{air_date}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pages-container">
          <span>
            1
          </span>
          <span>
            2
          </span>
        </div>
      </div>
    </>
  );
};
