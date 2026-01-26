/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
function fullJustify(words, maxWidth) {
  const res = [];
  let i = 0;

  while (i < words.length) {
    // Pack line words greedily
    let j = i;
    let wordsLen = 0; // sum of word lengths only

    while (j < words.length) {
      const nextLen = wordsLen + words[j].length;
      const gaps = j - i; // gaps if we include words[j]
      if (nextLen + gaps > maxWidth) break;
      wordsLen = nextLen;
      j++;
    }

    const count = j - i;                 // number of words in line
    const isLastLine = (j === words.length);
    const spaces = maxWidth - wordsLen;  // total spaces to distribute

    // Build the line
    if (count === 1 || isLastLine) {
      // Left-justify: one space between words, pad right
      let line = words[i];
      for (let k = i + 1; k < j; k++) line += " " + words[k];
      line += " ".repeat(maxWidth - line.length);
      res.push(line);
    } else {
      // Fully justify: distribute spaces across gaps
      const gaps = count - 1;
      const base = Math.floor(spaces / gaps);
      let extra = spaces % gaps;

      let line = "";
      for (let k = i; k < j; k++) {
        line += words[k];
        if (k < j - 1) {
          line += " ".repeat(base + (extra > 0 ? 1 : 0));
          if (extra > 0) extra--;
        }
      }
      res.push(line);
    }

    i = j;
  }

  return res;
}
