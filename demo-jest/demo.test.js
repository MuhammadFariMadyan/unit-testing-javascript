describe("Demo test with jest", () => {
    test("testing toBe", () => {
       expect(1 + 1).toBe(2);
       expect(true).toBe(true);
       expect({}).not.toBe({});
    });
});