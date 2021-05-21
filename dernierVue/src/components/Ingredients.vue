<template>
  <div class="Ingredients container-fluid text-left">
    <ul class="list-group">
      <li class="list-group-item"> <strong>Liste des ingédients</strong></li>
      <li class="list-group-item" v-for="str in ingre" :key="str">
        <label class="list-group-item">
          <input class="form-check-input me-1" type="checkbox" value="">
          {{ str }}
        </label>
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";

export default {
name: "Ingredients",
  data(){
    return {
      recettes : [],
    }
  },
  mounted () {
    axios
        .get("http://cuisine.localhost:8000/api/recettes")
        .then((response) => {
          this.recettes = response.data['hydra:member']
          //console.log(this.recettes)
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
  },
  computed : {
    recette() {
      for (var el in this.recettes) {
        if (this.recettes[el].id == this.$route.params.id) {
          return this.recettes[el]
        }
      }
      return 1
    },
    ingre () {
      for (var el in this.recettes){
        return this.recette.ingredients.split("; ")
      }
      return 1
    }
  }
}
</script>

<style scoped>
</style>