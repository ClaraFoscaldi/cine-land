/**
 *
 * @param {string} genre
 * @returns array of movies
 */
function getMovies(genre = '') {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2ZkNWZkN2NkNzliOWIwZjE3OWNmMDAzZTgzMzUwOCIsIm5iZiI6MTcwODUyNDkyNS43ODQ5OTk4LCJzdWIiOiI2NWQ2MDU3ZGM4YTVhYzAxN2JlMjA0MzkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.nXV-bRXFDejRzCQlFS8hbUKw9s8Llhx0YOOme3Nvw34',
    },
  }

  return fetch(
    `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-mx&page=1&sort_by=popularity.desc&with_genres=${genre}`,
    options,
  )
    .then((res) => res.json())
    .then((res) => res.results)
    .catch((err) => console.error(err))
}

/**
 * 
 * @param {string} searchTerm 
 * @returns 
 */
function searchMovies(searchTerm = '') {
  const options = {
    method: 'GET',
    headers: {
      accept: 'application/json',
      Authorization:
        'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2ZkNWZkN2NkNzliOWIwZjE3OWNmMDAzZTgzMzUwOCIsIm5iZiI6MTcwODUyNDkyNS43ODQ5OTk4LCJzdWIiOiI2NWQ2MDU3ZGM4YTVhYzAxN2JlMjA0MzkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.nXV-bRXFDejRzCQlFS8hbUKw9s8Llhx0YOOme3Nvw34',
    },
  }

  let searchUrl = `https://api.themoviedb.org/3/search/movie?query=${searchTerm}&include_adult=false&language=es-MX&page=1`
  if (!searchTerm)
    searchUrl = `https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=es-mx&page=1&sort_by=popularity.desc`

  return fetch(searchUrl, options)
    .then((res) => res.json())
    .then((res) => res.results)
    .catch((err) => console.error(err))
}
/**
 * 
 * @param {string} id 
 */
function getMovie(id){
  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyN2ZkNWZkN2NkNzliOWIwZjE3OWNmMDAzZTgzMzUwOCIsIm5iZiI6MTcwODUyNDkyNS43ODQ5OTk4LCJzdWIiOiI2NWQ2MDU3ZGM4YTVhYzAxN2JlMjA0MzkiLCJzY29wZXMiOlsiYXBpX3JlYWQiXSwidmVyc2lvbiI6MX0.nXV-bRXFDejRzCQlFS8hbUKw9s8Llhx0YOOme3Nvw34",
    },
  };

  return fetch(
    `https://api.themoviedb.org/3/movie/${id}?language=es-mx`,
    options
  )
    .then((res) => res.json())
    .then((res) => { 
      return res; 
    })
    .catch((err) => console.error(err));
}


export { getMovies, searchMovies, getMovie }
