<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1> Partie vueJS</h1>
    <h3>Fait avec Bootstrap-vue</h3>
    <ul>
      <li>Permet d'afficher la liste des cours présents dans l'API</li>
      <li>Affiche les 5 dernieres recettes ajoutées dans une liste</li>
      <li>Permet de n'afficher que les éléments d'une certaine catégorie</li>
      <li>Affiche une page de chargement le temps que l'API renvoie une réponse</li>
    </ul>
    <h3>Todo list</h3>
    <ul>
      <li class="done">Utilisation de plusieurs composants</li>
      <li class="done">Utilisation de vue cli pour le projet</li>
      <li class="done">Utilisation du routeur</li>
      <li class="done">Une partie du site utilisera l'API Symfony pour afficher de manière dynamique des données</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Home',
  components: {

  }
}
</script>

<style>
.done{
  color: green;
}
</style>