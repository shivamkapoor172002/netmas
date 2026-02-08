/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        whitesmoke: {
          "100": "#f3f7f9",
          "200": "#f2f2f2",
        },
        dimgray: {
          "100": "#515c69",
          "200": "#4f4f4f",
        },
        white: "#fff",
        black: "#000",
        gray: {
          "100": "#1f2833",
          "200": "#102946",
          "300": "#252424",
          "400": "#191919",
          "500": "rgba(0, 0, 0, 0.43)",
        },
        darkslategray: {
          "100": "#464646",
          "200": "#33475b",
          "300": "#09324d",
        },
        lightblue: "#b4def1",
        lightsteelblue: "#b5c0cd",
        gainsboro: {
          "100": "#e1e1e1",
          "200": "#d9d9d9",
        },
        slategray: "#6e7983",
        steelblue: {
          "100": "#557295",
          "200": "#0092d1",
        },
        lightgray: {
          "100": "#d1d7de",
          "200": "#d0d7de",
        },
      },
      spacing: {},
      fontFamily: {
        'hannari': ['HannariFont', 'sans-serif'],
        'roboto': ['Roboto', 'sans-serif'],
        'orbitron': ['Orbitron', 'sans-serif'],
        'noto-sans-jp': ['Noto Sans JP', 'sans-serif'],
        'font-awesome-5-free': ['Font Awesome 5 Free', 'sans-serif'],
      },
      borderRadius: {
        "12xs": "1px",
        "86xl": "105px",
        lg: "18px",
        "13xl": "32px",
      },
      backgroundImage: {
        'custom-bg': "url('./assets/images/istockphoto-147706848-612x612.jpg')",
        'new-bg': "url('./assets/images/coaxial.jpg')",
        'phone-bg':"url('./assets/images/3d-render1.jpg')",
        'coaxial-bg':"url('./assets/images/coaxial1.jpg')",
        'india-bg':"('./assets/images/india-map.png')",
        'w-bg': "('./assets/images/bgw.gif')"
      },
    },
    fontSize: {
      "lg-5": "18.5px",
      "5xl-2": "24.2px",
      "39xl-9": "58.9px",
      "5xl": "24px",
      mini: "15px",
      sm: "14px",
      xs: "12px",
      "39xl-1": "58.1px",
      smi: "13px",
      "4xl-3": "23.3px",
      "32xl-2": "51.2px",
      base: "16px",
      lg: "18px",
      mid: "17px",
      "77xl": "96px",
      inherit: "inherit",
    },
    screens: {
      mq975: {
        raw: "screen and (max-width: 975px)",
      },
      mq700: {
        raw: "screen and (max-width: 700px)",
      },
      mq450: {
        raw: "screen and (max-width: 450px)",
      },
      sm: { max: '575.98px'},       // Small devices (sm)
      md: { max: '767.98px'},       // Medium devices (md)
      lg: { max: '991.98px', min: '768px'},       // Large devices (lg)
      xl: { max: '1199.98px', min: '992px'},     // Extra large devices (xl)
      '2xl': { min: '1200px' },    // Extra extra large devices (2xl)
    },
  },
  corePlugins: {
    preflight: false,
  },
};