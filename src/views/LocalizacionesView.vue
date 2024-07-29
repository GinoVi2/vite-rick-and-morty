<template>
  <v-container>
    <v-row>
      <v-col v-for="localizacion of localizaciones" cols="12">
        <LocalizacionesItem :localizacion="localizacion" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref } from "vue";
import LocalizacionesItem from "../components/Cards/LocalizacionesItem.vue";

const localizaciones = ref([
  {
    id: 3,
    name: "Citadel of Ricks",
    type: "Space station",
    dimension: "unknown",
    residents: [
      "https://rickandmortyapi.com/api/character/8",
      "https://rickandmortyapi.com/api/character/14",
      // ...
    ],
    url: "https://rickandmortyapi.com/api/location/3",
    created: "2017-11-10T13:08:13.191Z",
  },
  {
    id: 21,
    name: "Testicle Monster Dimension",
    type: "Dimension",
    dimension: "Testicle Monster Dimension",
    residents: [
      "https://rickandmortyapi.com/api/character/7",
      "https://rickandmortyapi.com/api/character/436",
    ],
    url: "https://rickandmortyapi.com/api/location/21",
    created: "2017-11-18T19:41:01.605Z",
  },
  {
    id: 1,
    name: "Earth",
    type: "Planet",
    dimension: "Dimension C-137",
    residents: [
      "https://rickandmortyapi.com/api/character/1",
      "https://rickandmortyapi.com/api/character/2",
    ],
    url: "https://rickandmortyapi.com/api/location/1",
    created: "2017-11-10T12:42:04.162Z",
  },
]);
</script>

<style scoped></style>
