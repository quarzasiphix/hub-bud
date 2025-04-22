const nextConfig = require("eslint-config-next/core-web-vitals");

module.exports = [
  { 
    files: ["**/*.{js,jsx,ts,tsx}"],
    // Use the Next.js recommended configuration
    ...nextConfig,
    // You can add custom rules or overrides here if needed
    // rules: {
    //   ...nextConfig.rules,
    //   'some-rule': 'warn'
    // }
    // Note: Since package.json uses "type": "module", we might need adjustments
    // if this CommonJS format causes issues. Consider using a dynamic import
    // or converting this file to ESM (.mjs) if necessary.
  },
  // Add other configurations if needed, e.g., for specific directories
  {
    ignores: [".next/**", "node_modules/**", "dist/**"]
  }
];
