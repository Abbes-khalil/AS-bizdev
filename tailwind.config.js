export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#1D3D6D',
          50: '#EEF3F9',
          100: '#D5E0EF',
          200: '#A9C0DE',
          300: '#7B9DCB',
          400: '#4D7AB7',
          500: '#1D3D6D',
          600: '#17325A',
          700: '#112547',
          800: '#0B1933',
          900: '#060D1F'
        },
        orange: {
          DEFAULT: '#FF6A00',
          50: '#FFF1E5',
          100: '#FFD9B8',
          200: '#FFB87A',
          300: '#FF9547',
          400: '#FF8020',
          500: '#FF6A00',
          600: '#CC5500',
          700: '#994000',
          800: '#662B00',
          900: '#331500'
        },
        ink: '#2C2C2C',
        gray: {
          50: '#F9FAFB',
          100: '#F5F7FA',
          200: '#E5E7EB',
          300: '#D1D5DB',
          400: '#9CA3AF',
          500: '#6B7280',
          600: '#4B5563',
          700: '#2C2C2C',
          800: '#1F2937',
          900: '#111827'
        },
        surface: {
          DEFAULT: '#FFFFFF',
          alt: '#F5F7FA',
          dark: '#1D3D6D'
        }
      },
      fontFamily: {
        display: ['Poppins', 'Inter', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      letterSpacing: {
        tightest: '-0.04em',
        tighter: '-0.03em',
        tight: '-0.02em',
        wider: '0.05em',
        widest: '0.1em'
      },
      maxWidth: {
        container: '1280px',
        prose2: '60ch'
      },
      spacing: {
        92: '23rem'
      },
      borderRadius: {
        btn: '12px',
        card: '20px',
        badge: '999px'
      },
      boxShadow: {
        soft: '0 8px 30px rgba(0,0,0,0.08)',
        lift: '0 15px 40px rgba(0,0,0,0.12)',
        navy: '0 8px 24px rgba(29,61,109,0.18)',
        orange: '0 8px 24px rgba(255,106,0,0.32)'
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.4, 0, 0.2, 1)',
        emphasized: 'cubic-bezier(0.2, 0, 0, 1)'
      },
      keyframes: {
        'fade-up': {
          '0%': { opacity: 0, transform: 'translateY(16px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' }
        }
      },
      animation: {
        'fade-up': 'fade-up 0.6s cubic-bezier(0.2, 0, 0, 1) both'
      }
    }
  },
  plugins: []
};
