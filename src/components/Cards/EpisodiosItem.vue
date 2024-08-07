<script setup>
defineProps({
  episodio: Object,
});
</script>

<template>
  <v-row>
    <v-col>
      <v-card color="black">
        <v-sheet class="ma-2 pa-2">
          El capitulo se llama {{ episodio.name }}</v-sheet
        >
        <v-card-subtitle class="text">
          {{ episodio.episode }}
        </v-card-subtitle>
        <v-card-text>
          <p>{{ episodio.air_date }}</p>
        </v-card-text>
      </v-card>
    </v-col>
  </v-row>
</template>
<v-card>

</v-card>
<style></style>
