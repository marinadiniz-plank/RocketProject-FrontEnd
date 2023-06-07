export default {
	preset: "ts-jest",
	clearMocks: true,
	coverageProvider: "v8",
	testMatch: ["**/__tests__/*.test.[jt]s?(x)"],
	moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
	collectCoverageFrom: ["src/components/*.tsx"],
	testEnvironment: "jest-environment-jsdom",
	transformIgnorePatterns: ["/node_modules/", "^.+\\.css$"],
	moduleNameMapper: {
		"\\.(css|less|scss|svg)$":
			"<rootDir>/src/components/__tests__/mocks/styleMock.ts",
	},
};
