namespace UnicodeSplitter {
  const cho = "ㄱㄲㄴㄷㄸㄹㅁㅂㅃㅅㅆㅇㅈㅉㅊㅋㅌㅍㅎ" as const;
  const jung = "ㅏㅐㅑㅒㅓㅔㅕㅖㅗㅘㅙㅚㅛㅜㅝㅞㅟㅠㅡㅢㅣ" as const;
  const jong =
    " ㄱㄲㄳㄴㄵㄶㄷㄹㄺㄻㄼㄽㄾㄿㅀㅁㅂㅄㅅㅆㅇㅈㅊㅋㅌㅍㅎ" as const;
  const startCode = "가".charCodeAt(0);
  const endCode = "힣".charCodeAt(0);

  const combineCho: Record<string, string> = {
    ㄲ: "ㄱㄱ",
    ㄳ: "ㄱㅅ",
    ㄵ: "ㄴㅈ",
    ㄶ: "ㄴㅎ",
    ㄸ: "ㄷㄷ",
    ㄺ: "ㄹㄱ",
    ㄻ: "ㄹㅁ",
    ㄼ: "ㄹㅂ",
    ㄽ: "ㄹㅅ",
    ㄾ: "ㄹㅌ",
    ㄿ: "ㄹㅍ",
    ㅀ: "ㄹㅎ",
    ㅃ: "ㅂㅂ",
    ㅄ: "ㅂㅅ",
    ㅆ: "ㅅㅅ",
    ㅉ: "ㅈㅈ",
  };

  export function decomposeCombineCho(cho: string): string[] {
    if (cho in combineCho) {
      return combineCho[cho].split("");
    }
    return [cho];
  }

  export function decomposeHangeul(char: string): string[] {
    const code = char.charCodeAt(0);
    if (code < startCode || code > endCode) {
      return [char];
    }
    const diff = code - startCode;

    const choIndex = Math.floor(Math.floor(diff / jong.length) / jung.length);
    const jungIndex = Math.floor(diff / jong.length) % jung.length;
    const jongIndex = diff % jong.length;

    return [cho[choIndex], jung[jungIndex], jong[jongIndex]].filter(
      char => char !== " ",
    );
  }

  export function split(text: string): string[] {
    return Array.from(text)
      .map(decomposeHangeul)
      .flat()
      .map(decomposeCombineCho)
      .flat();
  }
}

export default UnicodeSplitter;
