<template>
  <header
    class="flex items-center justify-between bg-white shadow-md px-4 py-2"
  >
    <div class="flex">
      <button
        @click="$emit('toggle-sidebar')"
        class="text-blue-900 cursor-pointer"
      >
        <i class="fas fa-bars text-xl"></i>
      </button>

      <h2 class="pl-4 text-blue-600 text-lg font-semibold">Cards</h2>
    </div>

    <!-- Right: User Profile Icon with Dropdown Arrow -->
    <div class="flex items-center space-x-2 text-blue-600 cursor-pointer">
      <i class="fas fa-user-circle text-2xl"></i>
      <i class="fas fa-chevron-down"></i>
    </div>
  </header>
</template>

<script setup>
// Emits the `toggle-sidebar` event when the button is clicked
</script>
