/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                // Apple-inspired color palette
                gray: {
                    900: '#1d1d1f',
                    800: '#2d2d2f',
                    700: '#424245',
                    600: '#6e6e73',
                    500: '#86868b',
                    400: '#a1a1a6',
                    300: '#c7c7cc',
                    200: '#e8e8ed',
                    100: '#f5f5f7',
                },
                accent: {
                    blue: '#0071e3',
                    'blue-light': '#2997ff',
                    purple: '#bf5af2',
                    teal: '#5ac8fa',
                    green: '#30d158',
                },
            },
            fontFamily: {
                sans: ['-apple-system', 'BlinkMacSystemFont', 'SF Pro Display', 'Inter', 'Segoe UI', 'Roboto', 'sans-serif'],
                mono: ['SF Mono', 'Monaco', 'Cascadia Code', 'Courier New', 'monospace'],
            },
            fontSize: {
                'display-xl': ['96px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
                'display-lg': ['80px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
                'display-md': ['64px', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
                'display-sm': ['48px', { lineHeight: '1.2', letterSpacing: '-0.02em' }],
            },
            spacing: {
                '18': '4.5rem',
                '88': '22rem',
                '128': '32rem',
            },
            borderRadius: {
                '4xl': '2rem',
            },
            boxShadow: {
                'soft': '0 4px 24px rgba(0, 0, 0, 0.06)',
                'soft-lg': '0 12px 40px rgba(0, 0, 0, 0.12)',
                'accent': '0 8px 24px rgba(0, 113, 227, 0.2)',
            },
            animation: {
                'fade-up': 'fadeUp 0.6s ease-out',
                'scale-in': 'scaleIn 0.5s ease-out',
            },
            keyframes: {
                fadeUp: {
                    '0%': { opacity: '0', transform: 'translateY(40px)' },
                    '100%': { opacity: '1', transform: 'translateY(0)' },
                },
                scaleIn: {
                    '0%': { opacity: '0', transform: 'scale(0.95)' },
                    '100%': { opacity: '1', transform: 'scale(1)' },
                },
            },
        },
    },
    plugins: [],
}
