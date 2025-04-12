import React, { useState } from "react";
import "./App.css";

function App() {
  const [emailText, setEmailText] = useState("");
  const [result, setResult] = useState("");

  // OpenAI API key included for future use (currently unused)
  const openaiApiKey = "sk-xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";

  const phishingKeywords = [
    "verify your account",
    "update your information",
    "urgent action required",
    "click here",
    "reset your password",
    "your account is suspended",
    "billing issue",
    "payment failed",
    "restore account",
    "within 24 hours",
    "account termination",
    "suspended",
    "unauthorized access",
    "login attempt",
    "limited time",
    "confirm your payment",
    "re-activate",
    "security alert",
    "unusual activity",
    "bank account",
    "payment verification",
    "reactivate your account",
    "dear customer",
    "netflix billing department"
  ];

  const isPhishingEmail = (text) => {
    const lowerText = text.toLowerCase();
    return phishingKeywords.some((keyword) => lowerText.includes(keyword));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const phishing = isPhishingEmail(emailText);
    const message = phishing
      ? "⚠️ This email looks like a phishing attempt!"
      : "✅ This email appears to be safe.";
    setResult(message);
  };

  return (
    <div className="container">
      <h1 className="glow-text">PhishX</h1>
      <p className="subtitle">Analyze email content to detect phishing attempts</p>
      <form onSubmit={handleSubmit}>
        <textarea
          rows="10"
          placeholder="Paste email content here..."
          value={emailText}
          onChange={(e) => setEmailText(e.target.value)}
          required
        ></textarea>
        <button type="submit">Scan Email</button>
      </form>
      {result && (
        <div className={`result ${result.includes("⚠️") ? "phishing" : "normal"}`}>
          <p>{result}</p>
        </div>
      )}
    </div>
  );
}

export default App;
