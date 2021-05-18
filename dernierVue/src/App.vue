<template>
  <div id="app">

    <link rel="stylesheet" href="public/css/style.css">
    <link href="https://fonts.googleapis.com/css?family=DM+Sans:300,400,700&display=swap" rel="stylesheet">
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/3.4.1/css/bootstrap.min.css">
    <div>
      <b-navbar type="dark" variant="dark">
        <b-navbar-nav>
          <b-nav-item href="#"><router-link :to="{name: 'Home'}">Accueil</router-link></b-nav-item>
          <b-nav-item href="#"><router-link :to="{name: 'Recettes'}">Recettes</router-link></b-nav-item>

          <!-- Navbar dropdowns -->
          <b-nav-item-dropdown text="Site symfony" left>
            <b-dropdown-item href="http://cuisine.localhost:8000/">Accueil</b-dropdown-item>
            <b-dropdown-item href="http://cuisine.localhost:8000/recettes">Recettes</b-dropdown-item>
          </b-nav-item-dropdown>
        </b-navbar-nav>
      </b-navbar>
    </div>

    <!--<div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <router-link to="/entree">entree</router-link> |
      <router-link to="/plat">plat</router-link> |
      <router-link to="/dessert">dessert</router-link> |
      <router-link :to="{name: 'Ingredients', params: {id: 12}}">Ingredients</router-link> |
      <router-link :to="{name: 'Etape', params: {id: 12}}">Etapes</router-link> |
    </div>-->
    <div v-if="this.$route.name === 'Recette' || this.$route.name === 'Recettes'">
      <h1 style="display: inline-block"> Les derniers ajouts:</h1>
      <h3 style="display: inline-block; margin-left: 0.2em;" v-for="el in recettes" :key=el>
        <router-link v-if="el !== 1" :to="{name: 'Recette', params: {id: el.id, md: 'a'}} ">{{ el.nom }}</router-link> |
      </h3>
    </div>
    <hr>
    <Recette v-if="this.$route.name === 'Recette'"></Recette>
    <ListeRecettes v-else-if="this.$route.name === 'Recettes'"></ListeRecettes>
    <div v-if="this.$route.name === 'Home'">
      <Home></Home>

    </div>

  </div>
</template>

<script>
import Recette from "@/components/Recette";
import axios from "axios";
import ListeRecettes from "@/views/ListeRecettes";
import Home from "@/views/Home";
export default {
  name: "app",
  components: {Home, ListeRecettes, Recette},
  data () {
    return {
      recettesList: []
    }
  },
  computed: {
    recettes(){
      var arr = this.recettesList
      var res = []
      var j = 0
      for (var i = 0; i < arr.length; i++){
        if (i >= arr.length-5){
          res[j] = arr[i]
          j++
        }
      }
      return res
    }
  },
  mounted () {
    axios
        .get("http://cuisine.localhost:8000/api/recettes")
        .then((response) => {
          this.recettesList = response.data['hydra:member']
          //console.log(this.recettes)
        })
        .catch(error => {
          console.log(error)
          //this.errored = true
        })
        .finally(/*() => this.loading = false*/)
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
