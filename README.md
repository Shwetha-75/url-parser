# 🔗 URL Shortener Microservice

This is a simple **URL Shortener Microservice** built using **Node.js** and **Express**. It accepts a long URL and returns a shortened numeric ID. When you access the shortened URL, it redirects to the original one.

> This is a project from [freeCodeCamp - Back End Development and APIs Certification](https://www.freecodecamp.org/learn/back-end-development-and-apis/back-end-development-and-apis-projects/url-shortener-microservice).

---

## 📦 Tech Stack

- **Backend**: Node.js + Express
- **URL Validation**: `validator` + built-in `URL` + DNS lookup
- **In-Memory Storage**: No database used — data is stored temporarily in memory

---

## 🚀 Live Demo

(Deploy this app on platforms like Render to get a live link.)

---

## ✨ Features

- ✅ Validate URL format and existence
- 🔢 Return a unique short ID for each valid URL
- 🔁 Redirect shortened URL to original
- ❌ Return error for invalid URLs

---

## 📮 API Endpoints

### `POST /api/shorturl`

Submit a URL to shorten.

**Request Body:**

```json
{
  "url": "https://url-parser-5gkp.onrender.com/"
}
