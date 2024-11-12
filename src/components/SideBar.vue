<template>
  <aside class="w-64 min-h-screen bg-blue-900 text-white flex flex-col" :class="{ hidden: !isOpen }">
    <!-- Logo and Company Tagline -->
    <div class="p-6 flex flex-col items-center">
      <img src="/path/to/logo.png" alt="Logo" class="w-12 h-12 mb-2" />
      <h2 class="text-lg font-semibold tracking-wide">GIRIRAJ DIGITAL</h2>
      <p class="text-xs text-gray-300 text-center mt-1 leading-tight">
        Software & Web Development<br>
        Company - Umbraco Gold Partner
      </p>
    </div>

    <!-- Navigation Links -->
    <nav class="flex-grow px-4">
      <ul class="space-y-2">
        <li
          v-for="item in menuItems"
          :key="item.name"
          :class="{
            'bg-blue-700': selected === item.name,
            'hover:bg-blue-700': selected !== item.name,
          }"
          @click="$emit('select-section', item.name)"
          class="flex items-center space-x-3 py-2 px-3 rounded cursor-pointer"
        >
          <i :class="item.icon + ' text-gray-300'"></i>
          <span>{{ item.label }}</span>
        </li>
      </ul>
    </nav>

    <!-- Logout Button -->
    <button class="flex items-center px-4 py-2 hover:bg-blue-700 w-full text-left mb-4">
      <i class="fas fa-sign-out-alt mr-3 text-gray-300"></i>
      <span>Logout</span>
    </button>
  </aside>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

// Define props without assigning to a variable
defineProps({
  selected: {
    type: String,
    default: 'Cards'
  },
  isOpen: {
    type: Boolean,
    default: true
  }
});

// Sidebar menu items
const menuItems = [
  { name: 'Home', label: 'Home', icon: 'fas fa-home' },
  { name: 'Cards', label: 'Cards', icon: 'fas fa-credit-card' },
  { name: 'Transactions', label: 'Transactions', icon: 'fas fa-list-alt' },
  { name: 'Settings', label: 'Settings', icon: 'fas fa-cog' }
];
</script>
