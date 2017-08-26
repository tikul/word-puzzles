module.exports = {
  AnagramDifficulties: [
    {name: "Easy", description: "4 to 5 letter words", group: 0},
    {name: "Medium", description: "6 to 7 letter words", group: 1},
    {name: "Hard", description: "8 to 9 letter words", group: 2},
    {name: "Insane", description: "10 letters or more", group: 3}
  ],
  GameModeDescriptions : {
    "home": 
      {
        title : "Word Puzzles",
        desc : "A collection of word-related puzzles to keep you busy."
      },
    "anagram":
      {
        title : "Anagram Game",
        desc : "Rearrange the letters to form dictionary words."
      },
    "cipher": 
      {
        title : "Solving Ciphers",
        desc : "Each letter in the sentence is mapped to a (potentially) different letter. Crack the cipher to uncover the original sentence."
      }
  },
  TileColors : ["tile-red", "tile-blue-green", "tile-blue", "tile-purple", "tile-pink", "tile-orange", "tile-green"],
};