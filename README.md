# 🚀 NASA API - Picture of the Day 
A JavaScript application that uses NASA's Astronomy Picture of the Day API to retrieve and display a picture on user-selected date.
<img width="1752" height="1017" alt="Screenshot 2026-11-19 at 12 32 58 AM" src="https://github.com/user-attachments/assets/aedf1f3b-787f-4561-91b9-88a99ee53c76" />

## Features
- Search NASA's Astronomy Picture of the Day by date
- Display the image, title, and explanation
- Support image and video responses
- Use a galaxy background for a space-inspired interface

## Tech Stack 
- HTML
- CSS
- JavaScript 
- Fetch API
- NASA APOD API

## How It Works
1. The user selects a date.
2. JavaScript captures the input using querySelector().
3. The Fetch API sends a request to NASA's APOD endpoint.
4. The response is processed using JavaScript Promises (.then() and .catch()).
5. DOM manipulation dynamically displays the returned title, image or video, and explanation.

## Getting Started
1. Clone the repository:
```
git clone https://github.com/CarlyJovon/nasa-api.git
```
2. Navigate into the project:
```
cd nasa-api
```
3. Open `index.html` in your browser.
