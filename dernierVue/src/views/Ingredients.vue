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
export default {
name: "Ingredients",
  computed : {
    ingre () {
      for (var el in this.$store.state.recettes){
        if (this.$store.state.recettes[el].id == this.$route.params.id){
          return this.$store.state.recettes[el].ingredients.split("; ")
        }
      }
      return 1
    }
  }
}
</script>

<style scoped>
</style>