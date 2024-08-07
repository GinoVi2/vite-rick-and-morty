<template>
  <v-container>
    <v-row>
      <v-col>
        <v-btn block @click="toggleTheme">toggle theme</v-btn>
      </v-col>
    </v-row>
    <v-row v-if="episodiosApi">
      <v-col cols="12">
        <v-card class="bg-info">
          <v-card-actions class="justify-space-around">
            <v-btn @click="prevEpi" variant="elevated" color="green">
              Anterior
            </v-btn>
            <v-btn @click="nextEpi" variant="elevated" color="green">
              Siguiente
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col v-for="episodio of episodiosApi.results" cols="4">
        <EpisodioItem :episodio="episodio" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { useTheme } from "vuetify";
import { ref, onMounted, nextTick } from "vue";
import EpisodioItem from "../components/Cards/EpisodiosItem.vue";
import axios from "axios";

const theme = useTheme();
const episodiosApi = ref(null);
function toggleTheme() {
  theme.global.name.value = theme.global.current.value.dark ? "light" : "dark";
}
async function getEpisodio() {
  const data = await axios.get(`https://rickandmortyapi.com/api/episode`);
  console.log(data);
  episodiosApi.value = data.data;
}

async function nextEpi() {
  if (episodiosApi.value.info.prev == null) {
    getEpisodio();
    return;
  }
  const data = await axios.get(`${episodiosApi.value.info.next}`);
  episodiosApi.value = data.data;
}

async function prevEpi() {
  if (episodiosApi.value.info.prev == null) {
    getEpisodio();
    return;
  }
  const data = await axios.get(`${episodiosApi.value.info.prev}`);
  episodiosApi.value = data.data;
}

onMounted(() => {
  getEpisodio();
});
</script>

<style scoped></style>
