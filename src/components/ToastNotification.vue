<template>
  <div
    :class="`fixed bottom-4 right-4 p-4 text-white rounded ${
      type === 'success' ? 'bg-green-500' : 'bg-red-500'
    }`"
  >
    {{ message }}
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  props: {
    message: { type: String, required: true },
    type: { type: String as PropType<"success" | "error">, required: true },
  },
});
</script>
