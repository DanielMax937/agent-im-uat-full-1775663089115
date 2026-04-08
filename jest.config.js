"use strict";

module.exports = {
  collectCoverageFrom: ["lib/uat.js"],
  coverageDirectory: "coverage",
  coverageReporters: ["text", "json-summary"],
  testEnvironment: "node",
};
