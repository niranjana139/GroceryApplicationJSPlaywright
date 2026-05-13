import { test as base } from "@playwright/test";

const customtest = base.extend({
  testData: {
    name: "test Name",
    place: "muvattupuzha",
  },
});

export default customtest;
