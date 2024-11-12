<template>
  <div class="overflow-y-auto">
    <div
      class="bg-white border-b border-gray-300 p-4 flex items-center justify-between"
    >
      <!-- Breadcrumb Navigation -->
      <div class="flex space-x-4 text-blue-600">
        <button
          @click="activeTab = 'Saved Cards'"
          :class="{
            'font-semibold text-blue-700 border-b-2 border-blue-700':
              activeTab === 'Saved Cards',
          }"
          class="pb-2"
        >
          Saved Cards
        </button>
        <button
          @click="activeTab = 'CD Cards'"
          :class="{
            'font-semibold text-blue-700 border-b-2 border-blue-700':
              activeTab === 'CD Cards',
          }"
          class="pb-2"
        >
          CD Cards
        </button>
      </div>
      <!-- Tabs and Add Card Button -->
      <div
        v-if="activeTab === 'Saved Cards'"
        class="flex items-center space-x-6"
      >
        <!-- Tabs -->

        <!-- Add Card Button -->
        <button
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          @click="showAddCardModal = !showAddCardModal"
        >
          + Add Card
        </button>
      </div>
    </div>
    <div v-if="activeTab === 'Saved Cards'" class="w-full bg-white">
      <!-- <SideBar /> -->

      <div class="p-4 grid grid-cols-12">
        <div class="flex p-4 col-span-5">
          <CardDetails :card="selectedCard" :transactions="transactions" />
        </div>
        <div class="col-span-7 flex w-full">
          <div class="w-full">
            <h3 class="mt-4 w-full text-lg font-semibold">Credit Cards</h3>
            <div class="flex">
              <CardItem :cards="creditCards" />
            </div>
            <h3 class="mt-4 text-lg font-semibold">Debit Cards</h3>
            <div class="flex">
              <CardItem :cards="debitCards" />
            </div>
          </div>
        </div>
      </div>

      <div
        v-if="showAddCardModal"
        class="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
      >
        <div
          class="bg-white w-full max-w-lg mx-auto p-6 rounded shadow-lg relative"
        >
          <!-- Close Button -->
          <div class="flex justify-between items-center border-b pb-4 mb-4">
            <h3 class="text-xl font-semibold">Add New Card</h3>
            <i
              @click="showAddCardModal = false"
              class="fa-solid fa-x text-black cursor-pointer"
            ></i>
          </div>

          <!-- Form -->
          <form @submit.prevent="handleSubmit" class="space-y-4">
            <!-- Name -->
            <div>
              <label for="name" class="block text-sm font-medium mb-1"
                >Name <span class="text-red-500">*</span></label
              >
              <input
                id="name"
                v-model="cardForm.name"
                :class="{ 'border-red-500': errors.name }"
                class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 w-full"
                type="text"
                placeholder="John Doe"
              />
              <span class="text-xs text-red-500" v-if="errors.name">{{
                errors.name
              }}</span>
            </div>

            <!-- Bank Name -->
            <div>
              <label for="bankName" class="block text-sm font-medium mb-1"
                >Bank Name <span class="text-red-500">*</span></label
              >
              <input
                id="bankName"
                v-model="cardForm.bankName"
                :class="{ 'border-red-500': errors.bankName }"
                class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 w-full"
                type="text"
                placeholder="HDFC Bank"
              />
              <span class="text-xs text-red-500" v-if="errors.bankName">{{
                errors.bankName
              }}</span>
            </div>

            <!-- Card Type -->
            <div>
              <label for="cardType" class="block text-sm font-medium mb-1"
                >Card Type <span class="text-red-500">*</span></label
              >
              <select
                id="cardType"
                v-model="cardForm.cardType"
                :class="{ 'border-red-500': errors.cardType }"
                class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 w-full"
              >
                <option disabled value="">Select Card Type</option>
                <option value="Credit">Credit</option>
                <option value="Debit">Debit</option>
              </select>
              <span class="text-xs text-red-500" v-if="errors.cardType">{{
                errors.cardType
              }}</span>
            </div>

            <!-- Card Number -->
            <div>
              <label for="cardNumber" class="block text-sm font-medium mb-1"
                >Card Number <span class="text-red-500">*</span></label
              >
              <input
                id="cardNumber"
                v-model="cardForm.cardNumber"
                :class="{ 'border-red-500': errors.cardNumber }"
                class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 w-full"
                type="text"
                placeholder="1234 1234 1234 1234"
              />
              <span class="text-xs text-red-500" v-if="errors.cardNumber">{{
                errors.cardNumber
              }}</span>
            </div>

            <!-- Valid Till and CVV -->
            <div class="flex space-x-4">
              <div class="flex-1">
                <label for="validTill" class="block text-sm font-medium mb-1"
                  >Valid Till (MM/YYYY)
                  <span class="text-red-500">*</span></label
                >
                <input
                  id="validTill"
                  v-model="cardForm.validTill"
                  :class="{ 'border-red-500': errors.validTill }"
                  class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 w-full"
                  type="text"
                  placeholder="MM/YY"
                />
                <span class="text-xs text-red-500" v-if="errors.validTill">{{
                  errors.validTill
                }}</span>
              </div>

              <div class="flex-1">
                <label for="cvv" class="block text-sm font-medium mb-1"
                  >CVV <span class="text-red-500">*</span></label
                >
                <input
                  id="cvv"
                  v-model="cardForm.cvv"
                  :class="{ 'border-red-500': errors.cvv }"
                  class="text-sm text-gray-800 bg-white border rounded leading-5 py-2 px-3 w-full"
                  type="password"
                  placeholder="CVC"
                />
                <span class="text-xs text-red-500" v-if="errors.cvv">{{
                  errors.cvv
                }}</span>
              </div>
            </div>

            <!-- Set Card as Default -->
            <div class="flex items-center">
              <input
                type="checkbox"
                v-model="cardForm.setDefault"
                id="setDefault"
                class="mr-2"
              />
              <label for="setDefault" class="text-sm font-medium"
                >Set as Default</label
              >
            </div>

            <!-- Add to GPay -->
            <div class="flex items-center">
              <input
                type="checkbox"
                v-model="cardForm.addToGPay"
                id="addToGPay"
                class="mr-2"
              />
              <label for="addToGPay" class="text-sm font-medium"
                >Add to GPay</label
              >
            </div>

            <!-- Submit Button -->
            <div class="mt-4">
              <button
                type="submit"
                class="w-full py-2 bg-indigo-500 text-white rounded shadow hover:bg-indigo-600"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import CardDetails from "./CardDetails.vue";
import CardItem from "./CardItem.vue";
import { computed } from "vue";
import { useCardStore } from "../store/cardStore";
const cardStore = useCardStore();

const activeTab = ref("Saved Cards");
const cardForm = ref({
  name: "",
  bankName: "",
  cardType: "",
  cardNumber: "",
  validTill: "",
  cvv: "",
  setDefault: false,
  addToGPay: false,
  isLocked: false,
  isArchived: false,
  showFullNumber: false,
});

const errors = ref({
  name: "",
  bankName: "",
  cardType: "",
  cardNumber: "",
  validTill: "",
  cvv: "",
});

const validateForm = () => {
  errors.value = {
    name:
      cardForm.value.name.length > 35
        ? "Max 35 characters"
        : cardForm.value.name
        ? ""
        : "Required",
    bankName: cardForm.value.bankName ? "" : "Required",
    cardType: cardForm.value.cardType ? "" : "Required",
    cardNumber: /^\d{16}$/.test(cardForm.value.cardNumber)
      ? ""
      : "Must be a valid 16-digit card number",
    validTill: /^(0[1-9]|1[0-2])\/\d{4}$/.test(cardForm.value.validTill)
      ? ""
      : "Required in MM/YYYY format",
    cvv: cardForm.value.cvv ? "" : "Required",
  };
  return !Object.values(errors.value).some((error) => error);
};

const validateDefaultCard = () => {
  if (
    cardForm.value.setDefault &&
    cardStore.cards.some(
      (card) => card.cardType === cardForm.value.cardType && card.setDefault
    )
  ) {
    alert("The selected card type already has a default card.");
    return false;
  }
  return true;
};

const handleSubmit = () => {
  if (!validateForm()) return;
  if (!validateDefaultCard()) return;

  const newCard = {
    ...cardForm.value,
    id: Math.random().toString(36).substr(2, 9),
  };
  cardStore.addCard(newCard);
  resetForm();
  showAddCardModal.value = false;
};

const resetForm = () => {
  cardForm.value = {
    name: "",
    bankName: "",
    cardType: "Credit",
    cardNumber: "",
    validTill: "",
    cvv: "",
    setDefault: false,
    addToGPay: false,
    isLocked: false,
    isArchived: false,
    showFullNumber: false,
  };
};

// Default selected section is "Cards"

// Show modal for adding new cards
const showAddCardModal = ref(false);

// Sample data for credit and debit cards
const selectedCard = ref({
  id: 1,
  name: "John Watson",
  bankName: "HDFC Bank",
  number: "1234567890123456",
  expiry: "12/24",
  cvv: "934",
});

const transactions = ref([
  { id: 1, description: "Ordered Food", date: "20th May 2022", amount: -150.5 },
  { id: 2, description: "Ticket Refund", date: "20th May 2022", amount: 50.0 },
  {
    id: 3,
    description: "Interest credited",
    date: "20th May 2022",
    amount: 55.5,
  },
  {
    id: 4,
    description: "Electricity bill paid",
    date: "20th May 2022",
    amount: -650.0,
  },
]);

const creditCards = computed(() => {
  return cardStore.cards.filter((card) => card.cardType === "Credit");
});
const debitCards = computed(() => {
  return cardStore.cards.filter((card) => card.cardType === "Debit");
});
</script>
<style>
.dialog-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
}

.dialog-content {
  background: #fff;
  padding: 20px;
  border-radius: 8px;
  max-width: 400px;
  width: 100%;
}
.error {
  border-color: red;
}
.error_text {
  color: red;
  font-size: 12px;
}
</style>
