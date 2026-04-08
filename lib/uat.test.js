"use strict";

const { isUatReady } = require("./uat");

describe("uat", () => {
  test("isUatReady returns true", () => {
    expect(isUatReady()).toBe(true);
  });
});
