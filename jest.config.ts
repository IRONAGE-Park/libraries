import type { Config } from "jest";

const config: Config = {
  roots: ["<rootDir>/src"],
  resetMocks: true,
  transform: {
    "^.+\\.(js|jsx|mjs|cjs|ts|tsx)$": "ts-jest",
  },
  collectCoverageFrom: ["src/**/*.{js,jsx,ts,tsx}", "!src/**/*.d.ts"],
  testMatch: [
    "<rootDir>/src/**/__tests__/**/*.{js,jsx,ts,tsx}",
    "<rootDir>/src/**/*.{spec,test}.{js,jsx,ts,tsx}",
  ],
  transformIgnorePatterns: [
    "[/\\\\]node_modules[/\\\\].+\\.(js|jsx|mjs|cjs|ts|tsx)$",
  ],
  modulePaths: [],
  moduleFileExtensions: ["js", "ts", "json", "node"],
  watchPlugins: [
    "jest-watch-typeahead/filename",
    "jest-watch-typeahead/testname",
  ],
};

export default config;
