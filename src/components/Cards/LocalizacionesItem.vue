<script setup>
defineProps({
  localizacion: Object,
});
</script>

<template>
  <v-row>
    <v-col>
      <v-card color="black">
        <v-sheet class="ma-2 pa-2"> Esta en la localzcaion </v-sheet>
        <v-card-subtitle class="text">
          {{ localizacion.name }}
        </v-card-subtitle>
        <v-card-text>
          <p>{{ localizacion.type }} - {{ localizacion.dimension }}</p>
          <p>Fue creado el : {{ localizacion.created }}</p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<style></style>
