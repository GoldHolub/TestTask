let inputString;

function giveArrayWithDots() {
  const resultElement = document.getElementById("result");
  resultElement.innerHTML = "Your result is: " + insertDots(inputString);
}

function userInput(input) {
  inputString = input.value;
}

function insertDots(inputString) {
  if (inputString.length <= 1) {
    return [inputString];
  }

  let result = [inputString.charAt(0)];
  for (let i = 1; i < inputString.length; i++) {
    let currentChar = inputString.charAt(i);
    const currentResult = [];
    for (let j = 0; j < result.length; j++) {
      currentResult.push(result[j] + currentChar);
      currentResult.push(result[j] + "." + currentChar);
    }
    result = currentResult;
  }
  return result.slice(1).join(", ");
}