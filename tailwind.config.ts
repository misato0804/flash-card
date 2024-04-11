import type {Config} from "tailwindcss";

const {nextui} = require("@nextui-org/react");

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
        "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            fontWeight: {
                'hairline': 100,   // Custom extra light weight
                'thin': 200,
                'light': 300,
                'normal': 400,
                'medium': 500,
                'semibold': 600,
                'bold': 700,
                'extrabold': 800,
                'black': 900,
                'extra': 950      // Custom extra bold weight
            }
        },
    },
    darkMode: "class",
    plugins: [nextui({
        layout: {
            fontSize: {
                tiny: "0.75rem", // text-tiny
                small: "0.875rem", // text-small
                medium: "1rem", // text-medium
                large: "1.125rem", // text-large
            },

        },
        themes: {
            light: {
                colors: {
                    background: "#FDFDFD",
                    primary: {
                        DEFAULT: "#5590C7",
                    },
                    secondary: {
                        DEFAULT: "#FF6B6B",
                    },
                    content1: {
                        DEFAULT: "#97A97C"
                    },
                    content2: {
                        DEFAULT: "#3A3A3A"
                    }
                },
            },
            dark: {
                colors: {
                    background: "#121212",
                    primary: {
                        DEFAULT: "#E0E0E0",
                    },
                    secondary: {
                        DEFAULT: "#E57373",
                    },
                    content1: {
                        DEFAULT: "#789E8E"
                    },
                    content2: {
                        DEFAULT: "#436F8A",
                    }
                },
            },
        }
    })],
};
export default config;
