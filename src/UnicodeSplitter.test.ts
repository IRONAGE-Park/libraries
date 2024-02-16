import UnicodeSplitter from "./UnicodeSplitter";

describe("Unicode Splitter", () => {
  it("splitting that combination code in English", () => {
    const text = "Hello World";
    const macro = UnicodeSplitter.split(text);
    expect(macro).toEqual([
      "H",
      "e",
      "l",
      "l",
      "o",
      " ",
      "W",
      "o",
      "r",
      "l",
      "d",
    ]);
  });

  it("splitting that combination code in Korean", () => {
    const text = "안녕하세요";
    const macro = UnicodeSplitter.split(text);
    expect(macro).toEqual([
      "ㅇ",
      "ㅏ",
      "ㄴ",
      "ㄴ",
      "ㅕ",
      "ㅇ",
      "ㅎ",
      "ㅏ",
      "ㅅ",
      "ㅔ",
      "ㅇ",
      "ㅛ",
    ]);
  });

  it("splitting that combination code in Complex 1", () => {
    const text = "안녕하세요, Hello World";
    const macro = UnicodeSplitter.split(text);
    expect(macro).toEqual([
      "ㅇ",
      "ㅏ",
      "ㄴ",
      "ㄴ",
      "ㅕ",
      "ㅇ",
      "ㅎ",
      "ㅏ",
      "ㅅ",
      "ㅔ",
      "ㅇ",
      "ㅛ",
      ",",
      " ",
      "H",
      "e",
      "l",
      "l",
      "o",
      " ",
      "W",
      "o",
      "r",
      "l",
      "d",
    ]);
  });

  it("splitting that combination code in Complex 2", () => {
    const text = "맑탉않앉꿇헑, 안녕하세요, Hello World";
    const macro = UnicodeSplitter.split(text);
    expect(macro).toEqual([
      "ㅁ",
      "ㅏ",
      "ㄹ",
      "ㄱ",
      "ㅌ",
      "ㅏ",
      "ㄹ",
      "ㄱ",
      "ㅇ",
      "ㅏ",
      "ㄴ",
      "ㅎ",
      "ㅇ",
      "ㅏ",
      "ㄴ",
      "ㅈ",
      "ㄱ",
      "ㄱ",
      "ㅜ",
      "ㄹ",
      "ㅎ",
      "ㅎ",
      "ㅓ",
      "ㄹ",
      "ㄱ",
      ",",
      " ",
      "ㅇ",
      "ㅏ",
      "ㄴ",
      "ㄴ",
      "ㅕ",
      "ㅇ",
      "ㅎ",
      "ㅏ",
      "ㅅ",
      "ㅔ",
      "ㅇ",
      "ㅛ",
      ",",
      " ",
      "H",
      "e",
      "l",
      "l",
      "o",
      " ",
      "W",
      "o",
      "r",
      "l",
      "d",
    ]);
  });
});
