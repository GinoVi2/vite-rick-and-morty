<template>
  <v-container v-if="charactersApi">
    <v-row>
      <v-col cols="12">
        <v-card class="bg-info">
          <v-card-actions class="justify-space-around">
            <v-btn @click="prevCharacters" variant="elevated" color="green">
              Anterior
            </v-btn>
            <v-btn @click="nextCharacters" variant="elevated" color="green">
              Siguiente
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col v-for="personaje of charactersApi.results" cols="4">
        <PersonajeItem :personaje="personaje" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import PersonajeItem from "../components/Cards/PersonajeItem.vue";
import axios from "axios";

const charactersApi = ref(null);

async function getCharacters() {
  const data = await axios.get(`https://rickandmortyapi.com/api/character`);
  charactersApi.value = data.data;
}

async function nextCharacters() {
  if (charactersApi.value.info.next == null) {
    getCharacters();
    return;
  }

  const data = await axios.get(`${charactersApi.value.info.next}`);
  charactersApi.value = data.data;
}

async function prevCharacters() {
  if (charactersApi.value.info.prev == null) return;

  const data = await axios.get(`${charactersApi.value.info.prev}`);

  charactersApi.value = data.data;
}

onMounted(() => {
  getCharacters();
});
</script>

<style scoped></style>
