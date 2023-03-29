/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",

    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      "google-caveat": ['"Caveat"', "cursive"],
    },

    extend: {
      colors: {
        lynx: "#fbb05a",
        jungle: "#69997c",
        paper: "#f9fbf1",
        sunset: "#fadeca",
      },
      typography: ({ theme }) => ({
        jungle: {
          css: {
            "--tw-prose-body": theme("colors.jungle"),
            "--tw-prose-headings": theme("colors.jungle"),
            "--tw-prose-lead": theme("colors.jungle"),
            "--tw-prose-links": theme("colors.jungle"),
            "--tw-prose-bold": theme("colors.jungle"),
            "--tw-prose-counters": theme("colors.jungle"),
            "--tw-prose-bullets": theme("colors.jungle"),
            "--tw-prose-hr": theme("colors.jungle"),
            "--tw-prose-quotes": theme("colors.jungle"),
            "--tw-prose-quote-borders": theme("colors.jungle"),
            "--tw-prose-captions": theme("colors.jungle"),
            "--tw-prose-code": theme("colors.jungle"),
            "--tw-prose-pre-code": theme("colors.jungle"),
            "--tw-prose-pre-bg": theme("colors.jungle"),
            "--tw-prose-th-borders": theme("colors.jungle"),
            "--tw-prose-td-borders": theme("colors.jungle"),
            "--tw-prose-invert-body": theme("colors.jungle"),
            "--tw-prose-invert-headings": theme("colors.white"),
            "--tw-prose-invert-lead": theme("colors.jungle"),
            "--tw-prose-invert-links": theme("colors.white"),
            "--tw-prose-invert-bold": theme("colors.white"),
            "--tw-prose-invert-counters": theme("colors.jungle"),
            "--tw-prose-invert-bullets": theme("colors.jungle"),
            "--tw-prose-invert-hr": theme("colors.jungle"),
            "--tw-prose-invert-quotes": theme("colors.jungle"),
            "--tw-prose-invert-quote-borders": theme("colors.jungle"),
            "--tw-prose-invert-captions": theme("colors.jungle"),
            "--tw-prose-invert-code": theme("colors.white"),
            "--tw-prose-invert-pre-code": theme("colors.jungle"),
            "--tw-prose-invert-pre-bg": "rgb(0 0 0 / 50%)",
            "--tw-prose-invert-th-borders": theme("colors.jungle"),
            "--tw-prose-invert-td-borders": theme("colors.jungle"),
          },
        },
      }),
    },
  },
  plugins: [require("@tailwindcss/typography"), require("daisyui")],

  // daisyUI config (optional)
  daisyui: {
    styled: true,
    themes: true,
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "ds-",
    // darkTheme: "dark",
    themes: [
      {
        mytheme: {
          primary: "#69997c",

          secondary: "#F000B8",

          accent: "#69997c",

          neutral: "#fbb05a",

          "base-100": "#f9fbf1",

          info: "#3ABFF8",

          success: "#36D399",

          warning: "#FBBD23",

          error: "#F87272",
        },
      },
    ],
  },
};
