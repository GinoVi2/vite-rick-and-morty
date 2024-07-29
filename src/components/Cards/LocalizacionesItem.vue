<script setup>
defineProps({ localizacion: Object });
</script>

<template>
  <v-row>
    <v-col>
      <v-card color="black">
        <v-card-title> Esta en la localizacion : </v-card-title>

        <v-card-subtitle class="text">
          {{ localizacion.name }}
        </v-card-subtitle>
        <v-card-text>
          <p>{{ localizacion.type }} - {{ localizacion.dimension }}</p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>

<style></style>
