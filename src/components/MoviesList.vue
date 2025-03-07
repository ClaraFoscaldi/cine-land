<script>
import MovieItem from './MovieItem.vue'
import SearchMovies from './SearchMovies.vue'
import { getMovies, searchMovies } from '@/services/moviesService'
export default {
  data() {
    return {
      movies: [],
    }
  },
  components: {
    MovieItem,
    SearchMovies,
  },
  created() {
    console.log('fetching movies')
    this.fetchMovies()
  },
  methods: {
    fetchMovies() {
      getMovies().then((movies) => (this.movies = movies))
    },
    findMovies(searchTerm) {
      searchMovies(searchTerm).then((movies) => (this.movies = movies))
    },
  },
}
</script>
<template>
  <section class="container"> 
    <SearchMovies v-on:search="findMovies" />

    <div class="row g-2">
      <div v-for="movie in movies" :key="movie.id" class="col col-md-6 col-lg-4">
        <MovieItem :movie="movie" />
      </div>
    </div>
  </section>
</template>
