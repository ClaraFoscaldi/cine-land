<script>
import router from "@/router";
import { getMovie } from "@/services/moviesService";
export default {
  data() {
    return {
      movie: null,
    };
  },
  created() {
    const id = this.$route.params.id;

    getMovie(id).then((movie) => (this.movie = movie));
  },
  computed: {
    releaseYear() {
      if (this.movie) return this.movie.release_date.split("-")[0];
      return null;
    },
    rating(){
      if (this.movie) return parseFloat(Math.round(this.movie.vote_average + "e+2") + "e-2")
      return null;
    }
  },
};
</script>
<template>
  <div class="details">
    <section class="row">
      <section class="col">
    <h2>{{ movie.title }}</h2>
    <h3 class="fs-6">Año: {{ releaseYear }}</h3>
    <h3 class="fs-6">Puntuación: {{ rating }}</h3>
    <p>
      Géneros:
      <span v-for="genre in movie.genres" style="color: white"
        >{{ genre.name }} &nbsp;</span
      >
    </p>
  </section>
  <section class="col text-end">
    <button v-on:click="$router.push({name: 'home'})" class="btn btn-warning"><i class="fas fa-arrow-left"></i> Volver</button>
  </section>
  </section>
   
<div class="clearfix">
  <div class="row">
    <div class="col-6">

        <img
        v-bind:src="'https://image.tmdb.org/t/p/w500/' + movie.poster_path"
        v-bind:alt="movie.title"
        />
    </div>
  <div class="col-6" id="col-desc">
    <p class="col text-end">{{ movie?.overview }}</p>
  </div>
    </div>
</div>
<br>
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
