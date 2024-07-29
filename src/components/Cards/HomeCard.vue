<template>
  <v-col>
    <v-card :class="bgColor" :text="text" :subtitle="subtitle" :title="title">
      <v-card-actions>
        <v-btn @click="$emit('open')" color="success" variant="elevated">
          Visualizar
        </v-btn>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
<script setup>
defineProps({
  title: String,
  subtitle: String,
  text: String,
  bgColor: String,
});

defineEmits(["open"]);
</script>

<style></style>
