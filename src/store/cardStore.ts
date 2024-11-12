import { defineStore } from 'pinia';
import { ref, computed } from 'vue';

interface Card {
  id: string;
  name: string;
  bankName: string;
  cardType: 'Credit' | 'Debit';
  cardNumber: string;
  validTill: string;
  cvv: string;
  setDefault: boolean;
  addToGPay: boolean;
  isLocked:boolean;
  isArchived:boolean;
  showFullNumber: boolean;
}

export const useCardStore = defineStore('cardStore', () => {
  const cards = ref<Card[]>([]);

  // Computed to filter cards based on type
  const creditCards = computed(() => cards.value.filter(card => card.cardType === 'Credit'));
  const debitCards = computed(() => cards.value.filter(card => card.cardType === 'Debit'));

  // Add a new card
  const addCard = (newCard: any) => {
    cards.value.push(newCard);
  };
  const updateLockStatus = (cardId: string) => {
    const card = cards.value.find(card => card.id === cardId);
    if (card) {
      card.isLocked = !card.isLocked;
    }
  };
  // Helper function to set a default card for a specific type
  const setDefaultCard = (cardId: string) => {
    
    const card = cards.value.find(card => card.id === cardId);
    if (card) {
      card.setDefault = !card.setDefault;
    }
  };

  // Generate a unique ID for each card
  const generateId = (): string => Math.random().toString(36).substr(2, 9);

  return {
    cards,
    creditCards,
    debitCards,
    addCard,
    updateLockStatus
  };
});
