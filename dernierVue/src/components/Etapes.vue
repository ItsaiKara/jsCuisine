<template>
<div class="etapes container-fluid text-justify">
  <ul class="list-group">
    <li class="list-group-item"> <strong>Liste des étapes a suivre</strong></li>
    <li class="list-group-item" v-for="(key, val) in this.etape" :key="key">
      <label class="list-group-item">
        <input class="form-check-input me-1" type="checkbox" value="">
        {{ val+1 }}. {{key}}
      </label>
    </li>
  </ul>
  <div class="container">
  </div>
</div>
</template>

<script>
import '@/store'
import axios from "axios";
export default {
  name: "etapes",
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
  computed: {
    recette() {
      for (var el in this.recettes) {
        if (this.recettes[el].id == this.$route.params.id) {
          return this.recettes[el]
        }
      }
      return 1
    },
    etape () {
      for (var el in this.recettes){
        return this.recette.etapes.split("; ")
        /*
        if (this.recettes[el].id == this.$route.params.id){
          return this.recettes[el].ingredients.split("; ")
        }*/
      }
      return 1
    }
  },
}
</script>

<style scoped>

</style>