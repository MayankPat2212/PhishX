# PhishX
A Web application which allows the user to check whether an email is a phishing email or not.


#Requirements:
Frontend (React App) Dependencies:

    react: JavaScript library for building user interfaces.

    react-dom: Used for rendering React components in the DOM.

    tailwindcss (optional for styling): Utility-first CSS framework for styling the app.

    postcss (optional for styling): CSS tool for transforming CSS with plugins (needed for Tailwind).

    autoprefixer (optional for styling): PostCSS plugin to add vendor prefixes for compatibility.

    openai (optional for future use): SDK for interacting with OpenAI’s API.

    dotenv (optional for managing environment variables): Helps manage environment variables like API keys.

    axios (optional for API requests): Promise-based HTTP client for making requests (e.g., for interacting with a backend).

    react-router-dom (optional for routing): If you plan to add multiple pages or routes.
Backend Dependencies:

    fastapi: Framework for building APIs (used if you decide to build a Python backend).

    uvicorn: ASGI server for running FastAPI applications.


#How to use:

1.Start the web app

2.Paste the email you think is a phishing email and click/tap on Scan email

3.You will get the result almost immediately

The application uses OpenAi's Api key to detect the input email
