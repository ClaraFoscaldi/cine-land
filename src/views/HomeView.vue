<script>
import { useFavoritesStore } from '@/stores/favorites';
import MoviesList from '@/components/MoviesList.vue'
import MainCarousel from '@/components/MainCarousel.vue';
export default {
  components: {
    MoviesList,
    MainCarousel
  },
  data(){
    return {
      favoritesStore: null
    }
  },
  created(){
    this.favoritesStore = useFavoritesStore()
  }
}
</script>

<template>
  <main class="container">

    <MainCarousel />

    <p class="p-contador"><i class="fa fa-heart"></i> Pelis Favoritas: {{ favoritesStore.total }}</p>

    <MoviesList />
  </main>
</template>
