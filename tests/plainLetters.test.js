import { describe, expect, it } from "vitest";

import { plainLetters } from "@/lib/text/plainLetters";

describe("plainLetters", () => {
  it("turns LinkedIn bold letters and digits back into plain text", () => {
    expect(plainLetters("𝟳 𝗮𝗻𝘀. 𝗗𝗲𝘀 𝗺𝗶𝗹𝗹𝗶𝗲𝗿𝘀")).toBe("7 ans. Des milliers");
  });

  it("recomposes accents written as combining marks", () => {
    expect(plainLetters("𝐥𝐞 𝐛𝐨𝐧 𝐫𝐞́𝐬𝐞𝐚𝐮")).toBe("le bon réseau");
  });

  it("leaves ordinary text, emoji and Arabic alone", () => {
    const text = "🚀 Joyeux Aïd … عيدكم مبارك";
    expect(plainLetters(text)).toBe(text);
  });
});
