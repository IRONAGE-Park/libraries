namespace HangeulFormatter {
  const combineHangeul: Record<string, string> = {
    ㄱ: "r",
    ㄴ: "s",
    ㄷ: "e",
    ㄹ: "f",
    ㅁ: "a",
    ㅂ: "q",
    ㅅ: "t",
    ㅇ: "d",
    ㅈ: "w",
    ㅊ: "c",
    ㅋ: "z",
    ㅌ: "x",
    ㅍ: "v",
    ㅎ: "g",
    ㅏ: "k",
    ㅑ: "i",
    ㅓ: "j",
    ㅕ: "u",
    ㅗ: "h",
    ㅛ: "y",
    ㅜ: "n",
    ㅠ: "b",
    ㅡ: "m",
    ㅣ: "l",
    ㅐ: "o",
    ㅔ: "p",
  };

  export function englishToHangeul(text: string): string {
    return text
      .split("")
      .map(char => {
        if (char in combineHangeul) {
          return combineHangeul[char];
        }
        return char;
      })
      .join("");
  }
}

export default HangeulFormatter;
