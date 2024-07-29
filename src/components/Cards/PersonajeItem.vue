<script setup>
defineProps({
  personaje: Object,
});
</script>

<template>
  <v-card color="black">
    <v-img cover height="200" :src="personaje.image"> </v-img>
    <v-card-title>
      {{ personaje.name }}
    </v-card-title>
    <v-card-text>
      <v-list class="bg-transparent">
        <v-list-item>
          <template v-slot:append>
            <v-badge dot :color="personaje.status == 'Alive' ? 'green' : 'red'">
              <v-icon>mdi-account</v-icon>
            </v-badge>
          </template>
          {{ personaje.status }}
        </v-list-item>
        <v-list-item>
          <template v-slot:append>
            <v-icon>mdi-account</v-icon>
          </template>
          {{ personaje.species }}
        </v-list-item>
        <v-list-item>
          <template v-slot:append>
            <v-icon>mdi-account</v-icon>
          </template>
          {{ personaje.gender }}
        </v-list-item>
        <v-list-item>
          <template v-slot:append>
            <v-icon>mdi-account</v-icon>
          </template>
          {{ personaje.type ? personaje.type : "Desconocido" }}
        </v-list-item>
        <v-list-item>
          <template v-slot:append>
            <v-icon>mdi-account</v-icon>
          </template>
          {{ personaje.origin.name }}
        </v-list-item>
      </v-list>
    </v-card-text>
  </v-card>
</template>

<style></style>
