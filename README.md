# MEAL-FINDER
function createNumberedSteps(text) {
  // Split the text into paragraphs
  const paragraphs = text.split('\r\n');

  // Add numbers to the beginning of each paragraph
  const numberedSteps = paragraphs.map((paragraph, index) => {
    return `${index + 1}. ${paragraph}`;
  });

  // Join the numbered steps back into a single string
  const numberedText = numberedSteps.join('\n\n');

  return numberedText;
}

// Example usage:
const originalText = ``;
const numberedText = createNumberedSteps(originalText);
console.log(numberedText);