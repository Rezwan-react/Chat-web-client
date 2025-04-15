/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                'barnd': '#B88E2F',
                'primary': '#333333',
                'secondary': '#666666'
            }
        },
        container: {
            center: true,
            padding: {
                DEFAULT: '54px',
            }
        },
        fontFamily: {
            'poppins': ["Poppins", 'sans-serif'],
        }
    },
    plugins: [],
}