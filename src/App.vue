<!-- <template>
  <div id="app" class="min-h-screen bg-gray-100">
    <CardPage />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import CardPage from '@/components/CardPage.vue';

export default defineComponent({
  name: 'App',
  components: { CardPage }
});
</script>

<style>
/* Import Tailwind CSS for global styling */
@import 'tailwindcss/tailwind.css';

/* Additional global styles can be added here if needed */
</style> -->
<template>
  <div id="app">
    <CardPage />
  </div>
</template>

<script setup lang="ts">
import CardPage from "./components/CardPage.vue";
</script>

<style>
@import "tailwindcss/tailwind.css";
</style>
