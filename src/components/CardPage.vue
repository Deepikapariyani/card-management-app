<template>
  <div class="flex h-screen overflow-hidden">
    <!-- Sidebar -->
    <Sidebar
      v-show="isSidebarOpen"
      :selected="selectedSection"
      :isOpen="isSidebarOpen"
      @select-section="handleSectionChange"
    />

    <!-- Main Content Area -->
    <div class="flex-1 flex flex-col">
      <!-- Top Navbar -->
      <TopNavbar @toggle-sidebar="isSidebarOpen = !isSidebarOpen" />

      <!-- Sticky Breadcrumb Navigation -->
      <div class="text-sm text-gray-600 bg-gray-100 p-2 sticky top-0 z-10">
        Home &gt; <span class="text-blue-600">{{ selectedSection }}</span>
      </div>

      <!-- Content Area -->
      <main class="flex-1 overflow-auto p-4 bg-gray-100">
        <div
          v-if="selectedSection === 'Cards'"
          class="flex flex-col min-h-full"
        >
          <!-- Tabs Navigation with Add Card Button (Scrollable Section) -->
          <div
            class="flex flex-col flex-1 bg-white shadow rounded-lg overflow-auto"
          >
            <TabsNavigation />
          </div>
        </div>

        <!-- Other sections based on selection -->
        <div v-else-if="selectedSection === 'Home'">
          <h1 class="text-2xl font-semibold mb-4">Home Section</h1>
        </div>
        <div v-else-if="selectedSection === 'Transactions'">
          <h1 class="text-2xl font-semibold mb-4">Transactions Section</h1>
        </div>
        <div v-else-if="selectedSection === 'Settings'">
          <h1 class="text-2xl font-semibold mb-4">Settings Section</h1>
        </div>
      </main>

      <!-- Footer -->
      <footer class="bg-blue-800 text-white text-center py-2 text-sm">
        © 2022 GIRIRAJ DIGITAL. All Rights Reserved.
      </footer>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import Sidebar from "./SideBar.vue";
import TopNavbar from "./TopNavBar.vue";

import TabsNavigation from "./TabsNavigation.vue";

// Sidebar open state
const isSidebarOpen = ref(true);

// Default selected section is "Cards"
const selectedSection = ref("Cards");

// Function to update the selected section from Sidebar
function handleSectionChange(section: string) {
  selectedSection.value = section;
}
// Show modal for adding new cards
</script>

<style scoped>
/* Add any component-specific styles here */
</style>
