<template>
  <div class="Recette">
    <b-nav align="center">
      <b-nav-item><router-link v-if="el !== 1" :to="{name: 'Recette', params: {id: this.$route.params.id, md: 'a'}}">Infos</router-link> </b-nav-item>
      <b-nav-item><router-link v-if="el !== 1" :to="{name: 'Recette', params: {id: this.$route.params.id, md: 'i'}}">Ingrédients</router-link> </b-nav-item>
      <b-nav-item><router-link v-if="el !== 1" :to="{name: 'Recette', params: {id: this.$route.params.id, md: 'e'}}">Étapes</router-link> </b-nav-item>
      <b-nav-item><router-link v-if="el !== 1" :to="{name: 'Recette', params: {id: this.$route.params.id, md: 't'}}">Ingrédient et etapes</router-link></b-nav-item>
    </b-nav>
    <hr>
    <div v-if="loading === false">
      <h1> {{recette.nom}}</h1>

      <div class="container" v-if="this.$route.params.md == 'a'">
        <p> {{ recette.description}}</p>
        <h3> {{tempsCal}}</h3>
        <h3> Recette par: {{tradUser}}</h3>
        <hr>
        <div class="text-center">
          <b-img :src="imageUrl(recette.image)" fluid alt="Responsive image"></b-img>
        </div>
      </div>
      <div v-else-if="this.$route.params.md == 'i'">
        <Ingredients > </Ingredients>
      </div>
      <div v-else-if="this.$route.params.md == 'e'">
        <Etapes> </Etapes>
      </div>
      <div v-else-if="this.$route.params.md == 't'">
        <b-container class="">
          <b-row>
            <b-col><Etapes></Etapes></b-col>
            <b-col><Ingredients></Ingredients></b-col>
          </b-row>
        </b-container>
      </div>
    </div>
    <div v-else>
      <h1 class="text-info">Récupération des données de l'api</h1>
      <b-spinner type="grow" label="Loading" variant="primary"></b-spinner>
    </div>
  </div>
</template>

<script>
import '@/store/index'
import Ingredients from "@/views/Ingredients";
import Etapes from "@/components/Etapes";
import axios from "axios";
export default {
  name: "Recette",
  data () {
    return {
      recettes: [],
      users: [],
      errored : false,
      loading : true,
      autheur: null
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
    axios
        .get("http://cuisine.localhost:8000/api/users")
        .then((response) => {
          this.users = response.data['hydra:member']
          //console.log(this.users)
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
  },
  computed: {
    recette () {
      for (var el in this.recettes){
        if (this.recettes[el].id == this.$route.params.id){
          return this.recettes[el]
        }
      }
      return 1
    },
    tempsCal (){
      if (this.recette.temps < 60){
        return "Faisable en "+this.recette.temps+" minutes"
      } else {
        var tempsIt = this.recette.temps
        var h = 0;
        while (tempsIt >= 60){
          tempsIt -= 60
          h++
        }
        if (tempsIt!= 0){
          return "Faisable en "+ h + " heures et "+ tempsIt+ "minutes";
        } else {
          return "Faisable en "+ h + " heures"
        }
      }
    },
    tradUser(){
      for (let us in this.users){
        //console.log(this.users[us].id)
        if (this.recette.autheur === '/api/users/'+this.users[us].id){
          return this.users[us].alias
        }
      }
      return this.recette.autheur
    }
  },
  components: {
    Ingredients,
    Etapes
  },
  props: {
    type: String,
  },
  methods: {
    imageUrl(p) {
      // permet de placer les images dans le dossier assets
      // et que cela fonctionne qu’elle que soit la route...
      // -[a-z0-9]{22}
      try {
        // console.log(p.replace(/-[a-z0-9]{22}/g, ""))
        return require('@/assets/' + p.replace(/-[a-z0-9]{22}/g, ""))
      } catch (e) {
        console.error(e)
        return require('@/assets/' + 'default.jpg')
      }

    },
  }
}
</script>

<style scoped>

</style>