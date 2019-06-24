import { authorsFormattedForDropdown } from "./selectors";

describe("author selectors", () => {
  describe("authorsFormattedForDropdown test", () => {
    it.only("should return authorsdata for dropdown", () => {
      const authors = [
        { id: "cory-house", firstName: "Cory", lastName: "House" },
        { id: "john-papa", firstName: "John", lastName: "Papa" }
      ];

      const expected = [
        { value: "cory-house", text: "Cory House" },
        { value: "john-papa", text: "John Papa" }
      ];

      expect(authorsFormattedForDropdown(authors)).toEqual(expected);
    });
  });
});
