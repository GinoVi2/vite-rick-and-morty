<template>
  <v-container v-if="localizacionApi">
    <v-row>
      <v-col cols="12">
        <v-card class="bg-primary">
          <v-card-actions class="justify-space-around">
            <v-btn @click="prevLocalizacion" variant="elevated" color="red">
              Anterior
            </v-btn>
            <v-btn @click="nextLocalizacion" variant="elevated" color="red">
              Siguiente
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
      <v-col v-for="localizacion of localizacionApi.results" cols="12">
        <LocalizacionesItem :localizacion="localizacion" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script setup>
import { ref, onMounted, nextTick } from "vue";
import LocalizacionesItem from "../components/Cards/LocalizacionesItem.vue";
import axios from "axios";

const localizacionApi = ref(null);

async function getLocalizacion() {
  const data = await axios.get(`https://rickandmortyapi.com/api/location`);
  console.log(data);
  localizacionApi.value = data.data;
}
async function nextLocalizacion() {
  if (localizacionApi.value.info.next == null) {
    getLocalizacion();
    return;
  }

  const data = await axios.get(`${localizacionApi.value.info.next}`);
  localizacionApi.value = data.data;
}
async function prevLocalizacion() {
  if (localizacionApi.value.info.prev == null) {
    getLocalizacion();
    return;
  }

  const data = await axios.get(`${localizacionApi.value.info.prev}`);

  localizacionApi.value = data.data;
}
onMounted(() => {
  getLocalizacion();
});
</script>

<style scoped></style>
