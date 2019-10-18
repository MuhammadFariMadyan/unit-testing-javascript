describe("Demo test with jest", () => {
    test("testing toBe", () => {
       expect(1 + 1).toBe(2);
       expect(true).toBe(true);
       expect({}).not.toBe({});
    });

    test("testing toEqual", () => {
        const subject = { name: "Testing-toEqual Expect Jest"};
        const actual = {
            name: "Testing-toEqual Expect Jest"
        };
        expect(subject).toEqual(actual);
    });

    const listOfCharacterOnePiece = [
        {name: "Monkey D.Luffy"},
        {name: "Roronoa Zorro"},
        {name: "Portgas D.Ace"}
    ];
    const actualCharacter = [
        {name: "Monkey D.Luffy"},
        {name: "Roronoa Zorro"},
        {name: "Portgas D.Ace"}
    ];
    expect(listOfCharacterOnePiece).toEqual(actualCharacter);
});