module.exports = {
  env: {
    browser: true,
    es2021: true,
  },
  extends: [
    "eslint:recommended",
    "plugin:react/recommended",
    "plugin:prettier/recommended",
  ],
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["react", "prettier"],
  rules: {
    "react/prop-types": "off", // Desactiva la validación de tipos de propiedades en componentes React
    "prettier/prettier": "error", // Muestra errores para las reglas de Prettier
  },
  settings: {
    react: {
      version: "detect",
    },
  },
};
