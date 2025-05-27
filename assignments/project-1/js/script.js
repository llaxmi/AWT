// Event listener for form submission
document
  .getElementById("quoteForm")
  .addEventListener("submit", async (event) => {
    event.preventDefault();

    // Get form data and convert to object
    const formData = new FormData(event.target);
    const data = Object.fromEntries(formData.entries());
    const messageDiv = document.getElementById("responseMessage");
    messageDiv.style.display = "block";
    messageDiv.textContent = "Submitting...";

    try {
      // Send POST request to server
      const response = await fetch("http://localhost:3000/quotes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();

      // Handling successful submission
      if (response.ok) {
        messageDiv.className = "success";
        const quoteData = result.data;

        const quotesContainer = document.getElementById("quotes");
        quotesContainer.innerHTML = "";
        quotesContainer.appendChild(makeCard(quoteData));

        messageDiv.textContent =
          result.message || "Quote submitted successfully!";
        setTimeout(() => {
          messageDiv.style.display = "none";
        }, 3000);
        event.target.reset();
      } else {
        messageDiv.className = "error";
        messageDiv.textContent = result.error || "Something went wrong.";
      }
    } catch (err) {
      // Handle network or other errors
      messageDiv.className = "error";
      messageDiv.textContent = "Network error. Try again.";
    }
  });

// Function to fetch and display all quotes
async function getQuotes() {
  try {
    const response = await fetch("http://localhost:3000/quotes");
    const data = await response.json();

    const quotesContainer = document.getElementById("quotes");
    quotesContainer.innerHTML = "";
    //createdAt did not work
    data.forEach((quote) => {
      quotesContainer.appendChild(makeCard(quote));
    });
  } catch (err) {
    const quotesContainer = document.getElementById("quotes");
    quotesContainer.innerHTML =
      '<div class="error-message">Failed to load quotes</div>';
  }
}

const makeCard = (quote) => {
  const quoteCard = document.createElement("div");
  quoteCard.className = "quote-card";

  const authorHeader = document.createElement("h3");
  authorHeader.className = "quote-author";
  authorHeader.textContent = quote.author;

  const quoteText = document.createElement("p");
  quoteText.className = "quote-text";
  quoteText.textContent = quote.quote;

  quoteCard.appendChild(authorHeader);
  quoteCard.appendChild(quoteText);
  return quoteCard;
};
