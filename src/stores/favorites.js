import { ref, computed } from 'vue'
import { defineStore } from 'pinia'

export const useFavoritesStore = defineStore('favorites', () => {
  // crear la variable en el storage de pinia
  const movies = ref([])

  // preguntar si la variable existe en el localStorage
  const storage = localStorage.getItem('movies');
  if(storage){
    // si la variable existe en el localStorage entonces la 
    // guardamos en el storage de pinia
    movies.value = JSON.parse(storage);

  }


  const total = computed(() => movies.value.length)

  function addMovie(movie) {
    const index = movies.value.findIndex(x => x === movie);

    // encontrado
    if(index > -1){

      movies.value = [...movies.value.slice(0, index), ...movies.value.slice(index + 1)]

    } else {
      movies.value.push(movie);
    }

    // Sincronizar el arreglo 'movies' que está en pinia con el 
    // localStorage
    localStorage.setItem('movies', JSON.stringify(movies.value));

  }
  function isFavorite(movie){
    const index = movies.value.findIndex(x => x === movie);
    return index !== -1;
  }

  return { movies, addMovie, total, isFavorite }
})
