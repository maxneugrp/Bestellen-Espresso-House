import deWords from "./profanity/de.txt?raw";
import enWords from "./profanity/en.txt?raw";

const rawWords = `${deWords}\n${enWords}`;

const PROFANITY_WORDS = rawWords
  .split(/\r?\n/)
  .map((word) => word.trim())
  .filter(Boolean)
  .map((word) => word.toLowerCase());

function normalizeText(text) {
  return String(text || "")
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[\u0300-\u036f]/g, "")

    // Häufige Leetspeak-Ersetzungen
    .replace(/[@4]/g, "a")
    .replace(/[3]/g, "e")
    .replace(/[1!|]/g, "i")
    .replace(/[0]/g, "o")
    .replace(/[5$]/g, "s")
    .replace(/[7]/g, "t")
    .replace(/[8]/g, "b")
    .replace(/[2]/g, "z")

    // Sonderzeichen, Leerzeichen usw. entfernen
    .replace(/[^a-z]/g, "");
}

export function containsBlacklistedWord(text) {
  const normalizedText = normalizeText(text);

  if (!normalizedText) {
    return false;
  }

  return PROFANITY_WORDS.some((word) => {
    const normalizedWord = normalizeText(word);

    if (normalizedWord.length < 3) {
      return false;
    }

    return normalizedText.includes(normalizedWord);
  });
}