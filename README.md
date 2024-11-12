# Card Management App

A Vue 3 application to manage credit and debit card information. This project provides a responsive UI for adding, editing, and managing card details, with features like marking a card as default, archiving, adding to GPay, and more. State management is handled by Pinia, with TypeScript support, and the UI is styled using Tailwind CSS.

## Table of Contents
- [Features](#features)
- [Installation](#installation)
- [Scripts](#scripts)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Dependencies](#dependencies)

## Features
- **Add New Card**: Dialog form for adding cards, including card number, expiration date, CVV, and other details.
- **Mark as Default**: Allows setting a card as the default, with restrictions to ensure only one default card per type.
- **GPay Integration**: Add selected cards to Google Pay.
- **Secure Card Display**: Toggle to show/hide the full card number.
- **Archiving and Card Management**: Archive or unarchive cards and manage active/inactive status.
- **Responsive Design**: Optimized for mobile and desktop.

## Installation
1. **Clone the repository**:
   git clone https://github.com/your-repo/card-management-app.git

2. Navigate into the project directory:
   cd card-management-app
3. Install dependencies:
   npm install
   
## Scripts
**Start the Development Server:**
npm run serve

## Usage
**Add a Card:** Click on the "Add Card" button to open the form. Enter card details such as name, bank, card number, and CVV.
**Set Default Card:** In the card settings, you can mark a card as default, restricted to one default card per type.
**Archive/Unarchive Card:** Use the archive option to keep rarely-used cards separate.
**Manage GPay:** Integrate a card with GPay from the card options.

## Dependencies
**Vue 3:** Framework for building the UI.
**Pinia:** State management.
**TypeScript:** Type-safe development.
**Tailwind CSS:** Utility-first CSS framework.
**uuid:** Generates unique IDs for cards.

## Development Notes
**Folder Structure:** Organize components based on usage and reusability.
**ESLint:** Follow the configured rules for code consistency.
**State Management:** Use Pinia stores defined in src/store to handle card data and app state.
