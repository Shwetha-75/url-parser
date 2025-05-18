const form = document.getElementById('url-form');
const input = document.getElementById('url-input');
const resultDiv = document.getElementById('result');
const shortUrlInput = document.getElementById('short-url');
const copyBtn = document.getElementById('copy-btn');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', async (e) => {
  e.preventDefault();
  const url = input.value.trim();
  errorMessage.textContent = '';
  resultDiv.style.display = 'none';

  try {
    const response = await fetch('/api/shorturl', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ url }),
    });

    const data = await response.json();

    if (data.error) {
      errorMessage.textContent = data.error;
      return;
    }

    const fullShortUrl = `${window.location.origin}/api/shorturl/${data.short_url}`;
    shortUrlInput.value = fullShortUrl;
    resultDiv.style.display = 'block';
  } catch (err) {
    errorMessage.textContent = 'Something went wrong. Try again.';
  }
});

copyBtn.addEventListener('click', () => {
  shortUrlInput.select();
  document.execCommand('copy');
});
