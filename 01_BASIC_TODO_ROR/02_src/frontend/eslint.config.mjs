import { defineConfig, globalIgnores } from "eslint/config";
import nextVitals from "eslint-config-next/core-web-vitals";
import nextTs from "eslint-config-next/typescript";
import customPlugin from "./eslint-plugin-custom.mjs";

const eslintConfig = defineConfig([
  ...nextVitals,
  ...nextTs,
  // Override default ignores of eslint-config-next.
  globalIgnores([
    // Default ignores of eslint-config-next:
    ".next/**",
    "out/**",
    "build/**",
    "next-env.d.ts",
  ]),
  // Custom rules
  {
    plugins: {
      custom: customPlugin,
    },
    rules: {
      // Enforce no any type
      "@typescript-eslint/no-explicit-any": "error",
      // Disallow API calls in client components
      "custom/no-client-api-calls": "error",
    },
  },
]);

export default eslintConfig;
