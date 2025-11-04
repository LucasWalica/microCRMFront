/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,ts}"],
  theme: {
    extend: {
      colors: {
        // 🌐 Base
        'bg': '#f9fafb',            // Fondo general (gris muy claro)
        'surface': '#ffffff',        // Superficies / tarjetas
        'border': '#e5e7eb',         // Bordes suaves
        'text': '#111827',           // Texto principal (gris casi negro)
        'text-muted': '#6b7280',     // Texto secundario

        // 💙 Primario: confianza y profesionalidad
        'primary': '#2563eb',        // Azul principal (corporativo)
        'primary-dark': '#1e40af',   // Hover o botones oscuros
        'primary-light': '#93c5fd',  // Version clara o fondos suaves

        // 💚 Éxito / acciones positivas
        'success': '#16a34a',
        'success-light': '#bbf7d0',

        // ⚠️ Advertencia
        'warning': '#f59e0b',
        'warning-light': '#fde68a',

        // ❌ Error
        'error': '#dc2626',
        'error-light': '#fecaca',

        // 💬 Información / estados neutros
        'info': '#3b82f6',
        'info-light': '#bfdbfe',

        // 💜 Acentos secundarios (opcional)
        'accent': '#6366f1',
        'accent-light': '#c7d2fe',
      },

      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },

      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
      },

      boxShadow: {
        'soft': '0 2px 8px rgba(0, 0, 0, 0.06)',
        'elevated': '0 4px 20px rgba(0, 0, 0, 0.08)',
      },
    },
  },
  plugins: [],
};

