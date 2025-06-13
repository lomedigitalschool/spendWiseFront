import { defineConfig } from 'windicss/helpers'

export default defineConfig({
  theme: {
    extend: {
      colors: {
        // Ajoute ici ta palette SpendWise par exemple
        'primary': '#4f46e5',     // Indigo 600
        'app-bg': '#ffffff',      // Blanc
        'solde-bg': '#3730a3',    // Indigo 800
        'text-color': '#000000',  // Noir
        'depense-text': '#9b2c2c', // Rose 800
        'depense-bg': '#fecaca',   // Rose 200
        'revenu-text': '#166534',  // Vert 800
        'revenu-bg': '#bbf7d0',    // Vert 200
      },
    },
  },
})
