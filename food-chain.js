class Song {
  constructor() {
    this.verses = { 1: "fly",
                    2: "spider",
                    3: "bird",
                    4: "cat",
                    5: "dog",
                    6: "goat",
                    7: "cow",
                    8: "horse" }

    this.secondaryVerses = { "spider": `It wriggled and jiggled and tickled inside her.`,
                             "bird": `How absurd to swallow a bird!`,
                             "cat": `Imagine that, to swallow a cat!`,
                             "dog": `What a hog, to swallow a dog!`,
                             "goat": `Just opened her throat and swallowed a goat!`,
                             "cow": `I don't know how she swallowed a cow!`,
                             "horse": `She's dead, of course!` }
  }

  verse(number) {
    let creature = this.verses[number];
    if (number > 1) {
      return `I know an old lady who swallowed a ${creature}.
${this.secondaryVerses[creature]}
${this.swallows(number)}
I don't know why she swallowed the fly. Perhaps she'll die.
`; } else {
  return `I know an old lady who swallowed a ${creature}.
I don't know why she swallowed the fly. Perhaps she'll die.
`; }
  }

  swallows(number) {
    let swallowVerses = "";
    for (let i = 0; i < number; i++) {
      if (this.verses[number] === "bird") {
        swallowVerses += this.spider();
        number -= 1;
      } else {
        swallowVerses += `She swallowed the ${this.verses[number]} to catch the ${this.verses[number -= 1]}.`;
      }

      if (number >= 2) swallowVerses += `\n`;
    }
    console.log(swallowVerses)
    return swallowVerses;
  }

  spider() {
    return `She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.`;
  }
}

export default Song;
