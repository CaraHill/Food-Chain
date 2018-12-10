class Song {
  constructor() {
    this.critters = { 1: "fly",
                      2: "spider",
                      3: "bird",
                      4: "cat",
                      5: "dog",
                      6: "goat",
                      7: "cow",
                      8: "horse" }

    this.critterVerses = { 1: `I know an old lady who swallowed a fly.`,
                    2: `I know an old lady who swallowed a spider.
It wriggled and jiggled and tickled inside her.`,
                    3: `I know an old lady who swallowed a bird.
How absurd to swallow a bird!`,
                    4: `I know an old lady who swallowed a cat.
Imagine that, to swallow a cat!`,
                    5: `I know an old lady who swallowed a dog.
What a hog, to swallow a dog!`,
                    6: `I know an old lady who swallowed a goat.
Just opened her throat and swallowed a goat!`,
                    7: `I know an old lady who swallowed a cow.
I don't know how she swallowed a cow!`,
                    8: `I know an old lady who swallowed a horse.
She's dead, of course!
`   }
  }

  verses(number, secondNumber) {
    let song = "";
    let count = number;

    for (count; count <= secondNumber; count++) {
      song += this.verse(count);
      song += `\n`;
    }

    return song;
  }

  verse(number) {
    if (number === 8) return this.critterVerses[number];

    let song = "";

    song += this.critterVerses[number];

    if (number > 1) {
      song += `
${this.swallows(number)}
I don't know why she swallowed the fly. Perhaps she'll die.
`;  } else {
      song += `
I don't know why she swallowed the fly. Perhaps she'll die.
`;  }

    return song;
  }

  swallows(finalVerse) {
    let swallowVerses = "";
    let verseCount = finalVerse;

    for (let i = 0; i <= finalVerse; i++) {
      if (this.critters[verseCount] === "bird") {
        swallowVerses += this.spider();
        verseCount -= 1;
      } else if (this.critters[verseCount] === "fly") {
        swallowVerses += "";
      } else {
        swallowVerses += `She swallowed the ${this.critters[verseCount]} to catch the ${this.critters[verseCount -= 1]}.`;
      }

      if (verseCount >= 2) swallowVerses += `\n`;
    }

    return swallowVerses;
  }

  spider() {
    return `She swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.`;
  }
}

export default Song;
