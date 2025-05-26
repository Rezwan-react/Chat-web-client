/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            // boxShadow: {
            //     neumorphic: '6px 6px 12px #c5c5c5, -6px -6px 12px #ffffff',
            //   },
        },
        container: {
            center: true,
        },
        fontFamily: {
            'poppins': ["Poppins", 'sans-serif'],
        }
    },
    plugins: [],
}