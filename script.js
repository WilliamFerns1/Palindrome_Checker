const textInput = document.getElementById("text-input");
const checkButton = document.getElementById("check-btn");
const resultContainer = document.getElementById("result");
const palindromeExampleContainer = document.getElementById("palindrome-examples-list-container");

const palindromeExamplesArray = ["eye", "_eye", "race car", "A man, a plan, a canal. Panama", "never odd or even", "My age is 0, 0 si ega ym."];

const formatTextInput = (text) => {
  // remove all non alphanumerical characters
  // only letters and numbers allowed
  const regex = /[A-Za-z0-9]/g;
  const formattedText = text
    .replace(" ", "")
    .match(regex)
  if (formattedText) {
    return formattedText.join("").toLowerCase();
  }

  alert("Please input a value");
}

const updateResultContainer = (resultText) => {
  resultContainer.style.display = "flex";
  resultContainer.textContent = resultText;
}

const isPalindromeFunction = (text) => {
  const reversedText = text.split("").reverse().join("");
  console.log(`Reversed text: ${reversedText}`);
  return reversedText === text;
}

const palindromeChecker = () => {
  const text = textInput.value;
  const formattedText = formatTextInput(text);
  console.log(formattedText);

  const isPalindrome = isPalindromeFunction(formattedText);
  console.log(`Is ${formattedText} a palindrome? ${isPalindrome}`);
  const resultText = `${text} is ${!isPalindrome ? "not" : ""} a palindrome`
  updateResultContainer(resultText);

}

const copyExampleTextToClipboard = (exampleText, exampleIndex) => {
  const clickedCopyButton = document.getElementById(`polindrome-example-${exampleIndex}`).querySelector("button");
  const clickedCopyButtonTextElement = clickedCopyButton.querySelector("p");
  
  clickedCopyButton.style.backgroundColor = "blue";
  clickedCopyButton.style.color = "#fff";

  clickedCopyButtonTextElement.textContent = "Copied";
  
  navigator.clipboard.writeText(exampleText);
  console.log(`Copied ${exampleText} to clipboard`);

  setTimeout(() => {
    clickedCopyButton.style.backgroundColor = "yellow";
    clickedCopyButton.style.color = "#000";

    clickedCopyButtonTextElement.textContent = "Copy";
  }, 3000)
}

const populatePalindromeExampleContainer = (examples) => {
  const palindromeExampleHTML = examples.map((example, index) => {
    return `
      <div key="${index}" id="polindrome-example-${index}" class="palindrome-example">
        <p>${example}</p>
        <button class="button-secondary button-small" onclick="copyExampleTextToClipboard('${example}', ${index})">
        <p>
          Copy
        </p>
        </button>
      </div>`
  });
  console.log(palindromeExampleHTML[0]);
  palindromeExampleContainer.innerHTML = palindromeExampleHTML.join("");
}

populatePalindromeExampleContainer(palindromeExamplesArray);

checkButton.addEventListener("click", palindromeChecker);


