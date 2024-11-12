<template>
  <div class="carousel-container w-full pt-1">
    <div v-if="props.cards.length > 0" class="flex justify-center pb-2">
      <label
        class="items-center px-3 py-1.5 bg-[#c2e2ee] rounded-md text-blue-900 cursor-pointer hover:bg-blue-200"
      >
        <input type="checkbox" class="hidden" v-model="showFullNumber" />

        <i
          :class="
            showFullNumber ? 'fas fa-solid fa-eye ' : 'fas fa-light fa-eye'
          "
        ></i>

        <span class="pl-3">Show Card Number</span>
      </label>
    </div>

    <div
      v-for="(card, index) in props.cards"
      :key="card.id"
      v-show="currentIndex === index"
      class="w-full grid grid-cols-12 text-white transition-opacity duration-500 ease-in-out"
    >
      <div
        :class="
          card.isLocked || card.isArchived ? 'bg-[#6a94a5]' : 'bg-[#0c3f62]'
        "
        class="w-[90%] h-48 col-span-7 rounded-lg p-4 relative text-white shadow-lg flex flex-col justify-between"
      >
        <div class="flex space-x-2">
          <i v-if="card.isLocked" class="fas fa-lock"></i>
          <i v-if="card.isArchived" class="fas fa-archive"></i>
          <i v-if="card.setDefault" class="fas fa-check-circle"></i>

          <i v-if="card.addToGPay" class="fab fa-google-pay"></i>
        </div>
        <!-- Bank Logo -->
        <div class="absolute top-4 right-4">
          {{ card.bankName }}
        </div>

        <!-- Cardholder Name -->
        <div class="mt-4">
          <p class="text-xl font-semibold">{{ card.name }}</p>
        </div>

        <!-- Card Number -->
        <div class="mt-2">
          <p class="text-lg tracking-widest">
            {{
              showFullNumber
                ? card.cardNumber
                : "**** **** **** " + card.cardNumber.slice(-4)
            }}
          </p>
        </div>

        <!-- Valid Till and CVV -->
        <div class="flex justify-between items-center mt-4">
          <div>
            <p class="text-sm">
              Valid Till :
              <span class="font-semibold"> {{ card.validTill }}</span>
            </p>
          </div>
          <div>
            <p class="text-sm">
              CVV :
              <span class="font-semibold">{{
                showFullNumber ? card.cvv : "***"
              }}</span>
            </p>
          </div>
        </div>
      </div>

      <div class="col-span-5 bg-[#c2e2ee] rounded-sm">
        <div class="mt-6 grid grid-cols-2 gap-4 text-center">
          <!-- Lock Card -->
          <div class="flex flex-col items-center justify-center">
            <button
              @click="toggleLock(card)"
              :class="card.isLocked ? 'bg-[#0c3f62]' : 'bg-[#0fa1db]'"
              class="flex flex-col justify-center items-center w-10 h-10 text-white rounded-full p-3"
            >
              <i :class="card.isLocked ? 'fas fa-unlock' : 'fas fa-lock'"></i>
            </button>
            <span class="text-xs pt-2 text-blue-900">
              {{ card.isLocked ? "Unlock Card" : "Lock Card" }}
            </span>
          </div>

          <!-- Archive Card -->
          <div class="flex flex-col items-center justify-center">
            <button
              @click="toggleArchive(card)"
              :class="card.isArchived ? 'bg-[#0c3f62]' : 'bg-[#0fa1db]'"
              class="flex flex-col items-center text-white w-10 h-10 justify-center rounded-full p-3"
            >
              <i class="fas fa-archive"></i>
            </button>
            <span class="text-xs text-blue-900 pt-2">
              {{ card.isArchived ? "Unarchive" : "Archive" }}
            </span>
          </div>

          <!-- Set as Default -->
          <div class="flex flex-col items-center justify-center">
            <button
              @click="setAsDefault(card)"
              :class="card.setDefault ? 'bg-[#0c3f62]' : 'bg-[#0fa1db]'"
              class="flex flex-col items-center text-white w-10 h-10 justify-center rounded-full p-3"
            >
              <i class="fas fa-check-circle"></i>
            </button>
            <span class="text-xs pt-2 text-blue-900">Set As Default</span>
          </div>

          <!-- Add to GPay -->
          <div class="flex flex-col items-center justify-center">
            <button
              @click="toggleGPay(card)"
              :class="card.addToGPay ? 'bg-[#0c3f62]' : 'bg-[#0fa1db]'"
              class="flex flex-col items-center text-white w-10 h-10 justify-center rounded-full p-3"
            >
              <i class="fab fa-google-pay"></i>
            </button>
            <span class="text-xs pt-2 text-blue-900">Add to GPay</span>
          </div>
        </div>
      </div>

      <!-- Action Buttons -->
    </div>

    <!-- Carousel Indicators -->
    <div class="flex justify-center mt-4 space-x-2">
      <span
        v-for="(card, index) in props.cards"
        :key="index"
        @click="currentIndex = index"
        :class="{
          'bg-blue-600': currentIndex === index,
          'bg-gray-400': currentIndex !== index,
        }"
        class="w-2 h-2 rounded-full cursor-pointer"
      ></span>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useCardStore } from "../store/cardStore";
const cardStore = useCardStore();
console.log(cardStore);
const showFullNumber = ref(false);
const props = defineProps({
  cards: Array,
});

const currentIndex = ref(0);

// const startAutoScroll = () => {
//   setInterval(() => {
//     currentIndex.value = (currentIndex.value + 1) % props.cards.length;
//   }, 3000); // Change card every 3 seconds
// };

const toggleLock = (card) => {
  card.isLocked = !card.isLocked;
};

const toggleArchive = (card) => {
  card.isArchived = !card.isArchived;
};

const setAsDefault = (card) => {
  card.setDefault = !card.setDefault;
};

const toggleGPay = (card) => {
  card.addToGPay = !card.addToGPay;
};

onMounted(() => {
  // startAutoScroll();
});
</script>

<style scoped>
.carousel-container {
  width: 100%;
}
</style>
