<template>
  <v-container>
    <v-card color="Red">
      <v-row>
        <v-col cols="" md="12">
          <v-card
            color="pink"
            class="text-center text-caption"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi, ratione debitis quis est labore voluptatibus!"
            title="En esta pagina podra encontrar lo principal de Rick Y Morty"
          ></v-card>

          <div class="text-center text-caption">Create by Gino</div>
        </v-col>
        <v-col>
          <HomeCard
            bg-color="bg-red"
            title="Personajes"
            subtitle="Lista de personajes"
            text="Todos los personajes desde la temporada 1 a la 8"
            @open="$router.push('personajes')"
          />
        </v-col>
        <v-col>
          <HomeCard
            bg-color="bg-blue"
            title="Localizaciones"
            subtitle="Lista de localizaciones"
            text="Localizaciones de los personajes desde la temporada 1 a la 8"
            @open="$router.push('localizaciones')"
          />
        </v-col>
        <v-col>
          <HomeCard
            bg-color="bg-green"
            title="Episodios"
            subtitle="Lista de episodios"
            text="Todos los episodios desde la temporada 1 a la 8"
            @open="$router.push('episodios')"
          />
        </v-col>
      </v-row>
    </v-card>

    <v-row>
      <v-col cols="12">
        <v-card
          color="purple"
          class="text-center text-caption"
          append-icon="mdi-open-in-new"
          href="https://www.max.com/pe/es/shows/rick-and-morty/ab553cdc-e15d-4597-b65f-bec9201fd2dd"
          max-width="1240"
          prepend-icon="mdi-netflix"
          rel="noopener"
          target="_blank"
          title="Pagina de max"
        ></v-card>
      </v-col>
      <v-col cols="12">
        <v-card
          color="black"
          class="text-center text-caption"
          append-icon="mdi-open-in-new"
          href="https://www.max.com/pe/es/shows/rick-and-morty/ab553cdc-e15d-4597-b65f-bec9201fd2dhttps://www.netflix.com/in/title/80014749"
          max-width="1240"
          prepend-icon="mdi-netflix"
          rel="noopener"
          target="_blank"
          title="Pagina de Netflix"
        ></v-card>
      </v-col>
      <v-col cols="12">
        <v-card
          color="yellow"
          class="text-center text-caption"
          append-icon="mdi-open-in-new"
          href="https://www.youtube.com/watch?v=RNQPOsqapFk"
          max-width="1240"
          prepend-icon="mdi-youtube"
          rel="noopener"
          target="_blank"
          title="Trailer de Youtube"
        ></v-card>
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
