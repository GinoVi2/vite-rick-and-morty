<template>
  <v-container>
    <v-row>
      <v-col>
        <HomeCard
          bg-color="bg-red"
          title="Personajes"
          subtitle="Lista de personajes"
          text="Todos los personajes desde la temporada 1 a la 8"
          @open="$router.push('personajes')"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <HomeCard
          bg-color="bg-blue"
          title="Localizaciones"
          subtitle="Lista de localizaciones"
          text="Localizaciones de los personajes desde la temporada 1 a la 8"
          @open="$router.push('localizaciones')"
        />
      </v-col>
    </v-row>

    <v-row>
      <v-col>
        <HomeCard
          bg-color="bg-green"
          title="Episodios"
          subtitle="Lista de episodios"
          text="Todos los episodios desde la temporada 1 a la 8"
        />
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
import HomeCard from "../components/Cards/HomeCard.vue";

const openPage = () => {
  console.log("ABRIR");
};
</script>

<style></style>
