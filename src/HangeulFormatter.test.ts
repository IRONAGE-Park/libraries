import HangeulFormatter from "./HangeulFormatter";

describe("Hangeul Formatter", () => {
  it("should transform english to hangeul", () => {
    const text = "ㅗㄷㅣㅣㅐ ㅈㅐㄱㅣㅇ";
    const macro = HangeulFormatter.englishToHangeul(text);
    expect(macro).toEqual("hello world");
  });
});
