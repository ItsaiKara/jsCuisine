<template>
<div class="etapes container-fluid text-justify">
  <ul class="list-group">
    <li class="list-group-item"> <strong>Liste des étapes a suivre</strong></li>
    <li class="list-group-item" v-for="(key, val) in etapes" :key="key">
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
export default {
  name: "etapes",
  computed : {
    etapes () {
      for (var el in this.$store.state.recettes){
        if (this.$store.state.recettes[el].id == this.$route.params.id){
          return this.$store.state.recettes[el].etapes.split("; ")
        }
      }
      return 1
    }
  }
}
</script>

<style scoped>

</style>