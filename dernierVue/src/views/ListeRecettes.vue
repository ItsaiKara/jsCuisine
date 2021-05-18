<template>
  <div>
    <h1>Liste des recettes: </h1>
    <b-button variant="outline-primary" v-for="cat in this.categories" :key="cat" v-on:click="trieCat"><router-link :to="{name: 'Recettes', params: {cat: cat.id}}">{{ cat.nom }}</router-link></b-button>
    <b-button variant="outline-primary" v-on:click="trieCat"><router-link :to="{name: 'Recettes'}">Tout voir</router-link></b-button>

    <!--<div>
      <b-form-input v-model="srcTxt" placeholder="Enter your name"></b-form-input>
      <div class="mt-2">Value: {{ srcTxt }}</div>
    </div>-->
    <table class="table table-striped" v-if="this.loading === false">
      <thead>
      <tr>
        <th scope="col">Nom</th>
        <th scope="col">Description</th>
        <th scope="col">Temps</th>
        <th scope="col">Apperçu</th>
        <th scope="col"></th>
      </tr>
      </thead>
      <tbody class="text-left" v-if="this.$route.params.cat == undefined">
        <tr v-for="el in this.recettes" :key="el" >
          <th scope="row">{{el.nom}}</th>
          <td>{{ el.description }}</td>
          <td>{{tempsCal(el.temps)}}</td>
          <td>
            <b-img thumbnail :src="imageUrl(el.image)" fluid alt="" height="30%" width="100%"></b-img>
          </td>
          <td><b-button variant="outline-primary" href="#"><router-link :to="{name: 'Recette', params: {id: el.id, md: 'a'}}">Détails</router-link></b-button></td>
        </tr>
      </tbody>
      <tbody class="text-left" v-else>
        <tr v-for="el in this.recCat" :key="el">
            <th scope="row">{{el.nom}} </th>
            <td>{{ el.description }}</td>
            <td>{{tempsCal(el.temps)}}</td>
            <td>
              <b-img thumbnail :src="imageUrl(el.image)" fluid alt="" height="30%" width="100%"></b-img>
            </td>
            <td><b-button variant="outline-primary" href="#"><router-link :to="{name: 'Recette', params: {id: el.id, md: 'a'}}">Détails</router-link></b-button></td>
        </tr>
      </tbody>
    </table>
    <div v-else>
      <h1 class="text-info">Récupération des données de l'api</h1>
      <b-spinner type="grow" label="Loading" variant="primary"></b-spinner>
    </div>

  </div>
</template>

<script>
import axios from 'axios'
//axios()
export default {
  name: "ListeRecettes",
  computed: {
  },
  data () {
    return {
      recettes: [],
      categories : [],
      recCat: [],
      errored : false,
      loading : true,
      srcArr : []
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
        .get("http://cuisine.localhost:8000/api/categories")
        .then((response) => {
          this.categories = response.data['hydra:member']
          //console.log(this.recettes)
        })
        .catch(error => {
          console.log(error)
          this.errored = true
        })
        .finally(() => this.loading = false)
    console.log(this.$route.params.cat + ' ' )
    this.trieCat()
  },
  watch: {
    srcTxt : function (){
    }
  },

  methods: {
    imageUrl(p) {
      // permet de placer les images dans le dossier assets
      // et que cela fonctionne qu’elle que soit la route...
      //console.log(p.replace(/-[a-z0-9]{22}/,""))
      try {
        return require('@/assets/' + p.replace(/-[a-z0-9]{22}/,""))
      } catch (e) {
        console.error(e)
        return require('@/assets/default.jpg')
      }
    },
    tempsCal(rec){
      if (rec < 60){
        return rec +" minutes"
      } else {
        var tempsIt = rec
        var h = 0;
        while (tempsIt >= 60){
          tempsIt -= 60
          h++
        }
        if (tempsIt!= 0){
          return h + " heures et "+ tempsIt+ "minutes";
        } else {
          return h + " heures"
        }
      }
    },
    trieCat(){
      console.log(this.$route.params.cat)
      this.recCat = []
      if (this.$route.params.cat != undefined){
        for (let el in this.recettes) {
          if (this.recettes[el].categorie === '/api/categories/' + this.$route.params.cat) {
            this.recCat.push(this.recettes[el])
          }
        }
      }
    }
    /*tradCat (id){
      for (var el in this.recettes){
        for (var al in this.categories){
          //console.log(this.recettes[el].autheur + " " + "/api/users/"+this.users[al].id)
          if (this.recettes[el].categorie == '/api/categories/'+this.categories[al].id){
            return this
          }
        }
      }
      return null
    }*/
  },
}
</script>

<style scoped>

</style>