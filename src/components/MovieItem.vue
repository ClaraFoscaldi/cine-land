<script>
import router from '@/router'
import { useFavoritesStore } from '@/stores/favorites'

export default {
  props: ['movie'],
  data() {
    return {
      favoriteStore: null
    }
  },
  methods: {
    showDetails(movieId){
      router.push({name: 'movie-details', params: {id: movieId}})
    }
  },
  created(){
    this.favoriteStore = useFavoritesStore();
  }
}
</script>
<template>
  <div class="d-flex flex-column justify-content-between h-100 shadow rounded">
    <h2 class="p-2">{{ movie.title }}</h2>
    <div v-on:click="showDetails(movie.id)" class="h-100">
      <img :src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path" alt="poster" class="h-100 w-100"/>
    </div>
    <div class="d-flex">
    <button v-on:click="favoriteStore.addMovie(movie.id)" class="favorito flex-fill">
      <i v-if="!favoriteStore.isFavorite(movie.id)" class="far fa-heart"></i>
      <i v-else class="fa fa-heart"></i>
    </button>
    </div>
  </div>
</template>
