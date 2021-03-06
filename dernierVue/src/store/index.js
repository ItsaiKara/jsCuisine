import Vue from 'vue'
import Vuex from 'vuex'
import Axios from 'axios'

Axios()
Vue.use(Vuex)

import recette from "../../public/recette.json"
import users from "../../public/users.json"

export default new Vuex.Store({
  state: {
    recettes : recette,
    users: users,
    /*recettes: [
      {
        "id": 282,
        "nom": "Recette0",
        "description": "Description0",
        "etapes": "Acheter tomates; Laver tomates/moza; Couper tomates/moza; Dresser",
        "temps": 0,
        "autheur": "/api/users/87",
        "image": "default.png",
        "date": "2021-04-28T00:00:00+02:00",
        "ingredients": "lorem ipsum; ddsfffdsgfdsqsdfdhfdsfdg; fdghffdsfjhgdsfhgdsfref; hgfdfsfdghqdsgfhrezfgdretfdg",
        "categorie": "/api/categories/46"
      },
      {
        "id": 283,
        "nom": "Recette1",
        "description": "Description1",
        "etapes": "Acheter tomates; Laver tomates/moza; Couper tomates/moza; Dresser",
        "temps": 10,
        "autheur": "/api/users/87",
        "image": "default.png",
        "date": "2021-04-28T00:00:00+02:00",
        "ingredients": "lorem ipsum; ddsfffdsgfdsqsdfdhfdsfdg; fdghffdsfjhgdsfhgdsfref; hgfdfsfdghqdsgfhrezfgdretfdg",
        "categorie": "/api/categories/46"
      },
      {
        "id": 284,
        "nom": "Recette2",
        "description": "Description2",
        "etapes": "Acheter tomates; Laver tomates/moza; Couper tomates/moza; Dresser",
        "temps": 20,
        "autheur": "/api/users/87",
        "image": "default.png",
        "date": "2021-04-28T00:00:00+02:00",
        "ingredients": "lorem ipsum; ddsfffdsgfdsqsdfdhfdsfdg; fdghffdsfjhgdsfhgdsfref; hgfdfsfdghqdsgfhrezfgdretfdg",
        "categorie": "/api/categories/46"
      },
      {
        "id": 285,
        "nom": "Recette3",
        "description": "Description3",
        "etapes": "Acheter tomates; Laver tomates/moza; Couper tomates/moza; Dresser",
        "temps": 30,
        "autheur": "/api/users/87",
        "image": "default.png",
        "date": "2021-04-28T00:00:00+02:00",
        "ingredients": "lorem ipsum; ddsfffdsgfdsqsdfdhfdsfdg; fdghffdsfjhgdsfhgdsfref; hgfdfsfdghqdsgfhrezfgdretfdg",
        "categorie": "/api/categories/46"
      },
      {
        "id": 286,
        "nom": "Recette4",
        "description": "Description4",
        "etapes": "Acheter tomates; Laver tomates/moza; Couper tomates/moza; Dresser",
        "temps": 40,
        "autheur": "/api/users/87",
        "image": "default.png",
        "date": "2021-04-28T00:00:00+02:00",
        "ingredients": "lorem ipsum; ddsfffdsgfdsqsdfdhfdsfdg; fdghffdsfjhgdsfhgdsfref; hgfdfsfdghqdsgfhrezfgdretfdg",
        "categorie": "/api/categories/46"
      },
      {
        "id": 287,
        "nom": "Recette5",
        "description": "Description5",
        "etapes": "Acheter tomates; Laver tomates/moza; Couper tomates/moza; Dresser",
        "temps": 50,
        "autheur": "/api/users/87",
        "image": "default.png",
        "date": "2021-04-28T00:00:00+02:00",
        "ingredients": "lorem ipsum; ddsfffdsgfdsqsdfdhfdsfdg; fdghffdsfjhgdsfhgdsfref; hgfdfsfdghqdsgfhrezfgdretfdg",
        "categorie": "/api/categories/46"
      },
      {
        "id": 288,
        "nom": "Recette6",
        "description": "Description6",
        "etapes": "Acheter tomates; Laver tomates/moza; Couper tomates/moza; Dresser",
        "temps": 60,
        "autheur": "/api/users/87",
        "image": "default.png",
        "date": "2021-04-28T00:00:00+02:00",
        "ingredients": "lorem ipsum; ddsfffdsgfdsqsdfdhfdsfdg; fdghffdsfjhgdsfhgdsfref; hgfdfsfdghqdsgfhrezfgdretfdg",
        "categorie": "/api/categories/46"
      },
      {
        "id": 289,
        "nom": "Recette7",
        "description": "Description7",
        "etapes": "Acheter tomates; Laver tomates/moza; Couper tomates/moza; Dresser",
        "temps": 70,
        "autheur": "/api/users/87",
        "image": "default.png",
        "date": "2021-04-28T00:00:00+02:00",
        "ingredients": "lorem ipsum; ddsfffdsgfdsqsdfdhfdsfdg; fdghffdsfjhgdsfhgdsfref; hgfdfsfdghqdsgfhrezfgdretfdg",
        "categorie": "/api/categories/48"
      },
      {
        "id": 290,
        "nom": "Recette8",
        "description": "Description8",
        "etapes": "Acheter tomates; Laver tomates/moza; Couper tomates/moza; Dresser",
        "temps": 80,
        "autheur": "/api/users/87",
        "image": "default.png",
        "date": "2021-04-28T00:00:00+02:00",
        "ingredients": "lorem ipsum; ddsfffdsgfdsqsdfdhfdsfdg; fdghffdsfjhgdsfhgdsfref; hgfdfsfdghqdsgfhrezfgdretfdg",
        "categorie": "/api/categories/48"
      },
      {
        "id": 291,
        "nom": "Recette9",
        "description": "Description9",
        "etapes": "Acheter tomates; Laver tomates/moza; Couper tomates/moza; Dresser",
        "temps": 90,
        "autheur": "/api/users/87",
        "image": "default.png",
        "date": "2021-04-28T00:00:00+02:00",
        "ingredients": "lorem ipsum; ddsfffdsgfdsqsdfdhfdsfdg; fdghffdsfjhgdsfhgdsfref; hgfdfsfdghqdsgfhrezfgdretfdg",
        "categorie": "/api/categories/48"
      },
      {
        "id": 292,
        "nom": "Recette10",
        "description": "Description10",
        "etapes": "Acheter tomates; Laver tomates/moza; Couper tomates/moza; Dresser",
        "temps": 100,
        "autheur": "/api/users/86",
        "image": "default.png",
        "date": "2021-04-28T00:00:00+02:00",
        "ingredients": "lorem ipsum; ddsfffdsgfdsqsdfdhfdsfdg; fdghffdsfjhgdsfhgdsfref; hgfdfsfdghqdsgfhrezfgdretfdg",
        "categorie": "/api/categories/48"
      },
      {
        "id": 293,
        "nom": "Recette11",
        "description": "Description11",
        "etapes": "Acheter tomates; Laver tomates/moza; Couper tomates/moza; Dresser",
        "temps": 110,
        "autheur": "/api/users/86",
        "image": "default.png",
        "date": "2021-04-28T00:00:00+02:00",
        "ingredients": "lorem ipsum; ddsfffdsgfdsqsdfdhfdsfdg; fdghffdsfjhgdsfhgdsfref; hgfdfsfdghqdsgfhrezfgdretfdg",
        "categorie": "/api/categories/48"
      },
      {
        "id": 294,
        "nom": "Recette12",
        "description": "Description12",
        "etapes": "Acheter tomates; Laver tomates/moza; Couper tomates/moza; Dresser",
        "temps": 120,
        "autheur": "/api/users/86",
        "image": "default.png",
        "date": "2021-04-28T00:00:00+02:00",
        "ingredients": "lorem ipsum; ddsfffdsgfdsqsdfdhfdsfdg; fdghffdsfjhgdsfhgdsfref; hgfdfsfdghqdsgfhrezfgdretfdg",
        "categorie": "/api/categories/48"
      },
      {
        "id": 295,
        "nom": "Recette13",
        "description": "Description13",
        "etapes": "Acheter tomates; Laver tomates/moza; Couper tomates/moza; Dresser",
        "temps": 130,
        "autheur": "/api/users/86",
        "image": "default.png",
        "date": "2021-04-28T00:00:00+02:00",
        "ingredients": "lorem ipsum; ddsfffdsgfdsqsdfdhfdsfdg; fdghffdsfjhgdsfhgdsfref; hgfdfsfdghqdsgfhrezfgdretfdg",
        "categorie": "/api/categories/48"
      },
      {
        "id": 296,
        "nom": "Recette14",
        "description": "Description14",
        "etapes": "Acheter tomates; Laver tomates/moza; Couper tomates/moza; Dresser",
        "temps": 140,
        "autheur": "/api/users/86",
        "image": "default.png",
        "date": "2021-04-28T00:00:00+02:00",
        "ingredients": "lorem ipsum; ddsfffdsgfdsqsdfdhfdsfdg; fdghffdsfjhgdsfhgdsfref; hgfdfsfdghqdsgfhrezfgdretfdg",
        "categorie": "/api/categories/47"
      },
      {
        "id": 297,
        "nom": "Recette15",
        "description": "Description15",
        "etapes": "Acheter tomates; Laver tomates/moza; Couper tomates/moza; Dresser",
        "temps": 150,
        "autheur": "/api/users/86",
        "image": "default.png",
        "date": "2021-04-28T00:00:00+02:00",
        "ingredients": "lorem ipsum; ddsfffdsgfdsqsdfdhfdsfdg; fdghffdsfjhgdsfhgdsfref; hgfdfsfdghqdsgfhrezfgdretfdg",
        "categorie": "/api/categories/47"
      },
      {
        "id": 298,
        "nom": "Recette16",
        "description": "Description16",
        "etapes": "Acheter tomates; Laver tomates/moza; Couper tomates/moza; Dresser",
        "temps": 160,
        "autheur": "/api/users/86",
        "image": "default.png",
        "date": "2021-04-28T00:00:00+02:00",
        "ingredients": "lorem ipsum; ddsfffdsgfdsqsdfdhfdsfdg; fdghffdsfjhgdsfhgdsfref; hgfdfsfdghqdsgfhrezfgdretfdg",
        "categorie": "/api/categories/47"
      },
      {
        "id": 299,
        "nom": "Recette17",
        "description": "Description17",
        "etapes": "Acheter tomates; Laver tomates/moza; Couper tomates/moza; Dresser",
        "temps": 170,
        "autheur": "/api/users/86",
        "image": "default.png",
        "date": "2021-04-28T00:00:00+02:00",
        "ingredients": "lorem ipsum; ddsfffdsgfdsqsdfdhfdsfdg; fdghffdsfjhgdsfhgdsfref; hgfdfsfdghqdsgfhrezfgdretfdg",
        "categorie": "/api/categories/47"
      },
      {
        "id": 300,
        "nom": "Recette18",
        "description": "Description18",
        "etapes": "Acheter tomates; Laver tomates/moza; Couper tomates/moza; Dresser",
        "temps": 180,
        "autheur": "/api/users/86",
        "image": "default.png",
        "date": "2021-04-28T00:00:00+02:00",
        "ingredients": "lorem ipsum; ddsfffdsgfdsqsdfdhfdsfdg; fdghffdsfjhgdsfhgdsfref; hgfdfsfdghqdsgfhrezfgdretfdg",
        "categorie": "/api/categories/47"
      },
      {
        "id": 301,
        "nom": "Recette19",
        "description": "Description19",
        "etapes": "Acheter tomates; Laver tomates/moza; Couper tomates/moza; Dresser",
        "temps": 190,
        "autheur": "/api/users/86",
        "image": "default.png",
        "date": "2021-04-28T00:00:00+02:00",
        "ingredients": "lorem ipsum; ddsfffdsgfdsqsdfdhfdsfdg; fdghffdsfjhgdsfhgdsfref; hgfdfsfdghqdsgfhrezfgdretfdg",
        "categorie": "/api/categories/47"
      }
    ],*/
    test : "ok"
  },
  mutations: {
  },
  getters: {
  },
  modules: {
  },
  actions: {
    getRecettes: (state =>state.recettes),
    gt: ( state => {
      state.test
    }),

  }
})
