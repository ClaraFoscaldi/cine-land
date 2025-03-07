<script>
export default {
  data() {
    return {
      searchTerm: '',
    }
  },
  methods: {
    searchMovie() {
      this.$emit('search', this.searchTerm)
      this.searchTerm = ''
    },
  },
  emits: ['search'],
}
</script>
<template>
  <div>
    
    <input
      class="form-control mr-sm-2"
      type="search"
      v-model="searchTerm"
      placeholder="Buscar por título"
      aria-label="Search"
      v-on:keyup.enter="searchMovie"
    />
    <button class="btn btn-outline-warning my-2 my-sm-0" type="button" v-on:click="searchMovie">
      Buscar
    </button>
  </div>
</template>
