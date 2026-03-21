import js from "@eslint/js";
import globals from "globals";
import pluginReact from "eslint-plugin-react";
import { defineConfig } from "eslint/config";

export default defineConfig([
  {
    files: ["**/*.{js,mjs,cjs,jsx}"],
    plugins: {
      js,
      react: pluginReact
    },
    settings: {
      react: {
        version: "16"
      }
    },
    rules: {
      "semi": ["error", "always"],
      "no-extra-semi": "error",
      ...pluginReact.configs.flat.recommended.rules,
    },
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node
      },
      parserOptions: {
        ecmaFeatures: {
          jsx: true
        }
      }
    }
  }
]);