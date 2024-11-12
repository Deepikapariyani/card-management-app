<template>
  <div class="w-full">
    <!-- Card Details Expansion -->
    <div class="bg-gray-100 p-4 rounded-lg shadow-md w-full">
      <div class="flex items-center justify-between cursor-pointer">
        <div class="flex items-center space-x-2">
          <i class="fas fa-th text-blue-600"></i>
          <span class="text-blue-600 font-semibold">Card Details</span>
        </div>
        <div class="bg-blue-100 p-1 rounded-full">
          <i class="fas fa-chevron-down text-blue-600"></i>
        </div>
      </div>
    </div>

    <!-- Today's Transactions Expansion -->
    <div class="bg-gray-100 p-4 mt-4 rounded-lg shadow-md">
      <div
        class="flex items-center justify-between cursor-pointer"
        @click="toggleTransactions"
      >
        <div class="flex items-center space-x-2">
          <i class="fas fa-exchange-alt text-blue-600"></i>
          <span class="text-blue-600 font-semibold">Today's Transactions</span>
        </div>
        <div class="bg-blue-100 p-1 rounded-full">
          <i
            :class="
              isTransactionsExpanded
                ? 'fas fa-chevron-up text-blue-600'
                : 'fas fa-chevron-down text-blue-600'
            "
          ></i>
        </div>
      </div>
      <div v-if="isTransactionsExpanded" class="mt-4 space-y-4">
        <div
          v-for="transaction in transactions"
          :key="transaction.id"
          class="flex justify-between items-center border-b pb-2"
        >
          <div class="flex items-center space-x-3">
            <div
              class="bg-blue-100 w-8 h-8 rounded-full flex items-center justify-center"
            >
              <i class="fas fa-download text-blue-600"></i>
            </div>
            <div>
              <p class="font-semibold">{{ transaction.description }}</p>
              <p class="text-xs text-gray-500">{{ transaction.date }}</p>
              <p class="text-xs text-blue-600">{{ transaction.notes }}</p>
            </div>
          </div>
          <p
            :class="transaction.amount < 0 ? 'text-red-500' : 'text-green-500'"
          >
            {{ transaction.amount < 0 ? "-" : "+" }} ${{
              Math.abs(transaction.amount).toFixed(2)
            }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";

// Expand states for Card Details and Transactions sections
const isTransactionsExpanded = ref(true);

// Sample transactions data
const transactions = ref([
  {
    id: 1,
    description: "Ordered Food",
    date: "20th May 2022",
    amount: -150.5,
    notes: "Charges applied on credit card",
  },
  {
    id: 2,
    description: "Ticket Refund",
    date: "20th May 2022",
    amount: 50.0,
    notes: "Amount credited on debit card",
  },
  {
    id: 3,
    description: "Interest credited",
    date: "20th May 2022",
    amount: 5.5,
    notes: "Charges applied on credit card",
  },
  {
    id: 4,
    description: "Electricity bill paid",
    date: "20th May 2022",
    amount: -1050.5,
    notes: "Charges applied on credit card",
  },
]);

// Toggle functions

const toggleTransactions = () => {
  isTransactionsExpanded.value = !isTransactionsExpanded.value;
};
</script>

<style scoped>
/* Add any additional styling if needed */
</style>
