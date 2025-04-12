import openai
import os
from fastapi import FastAPI, Request
from fastapi.responses import JSONResponse
from dotenv import load_dotenv

# Load environment variables from .env file
load_dotenv()

# Set OpenAI API Key securely from environment variable
openai.api_key = os.getenv("OPENAI_API_KEY")

app = FastAPI()

# Phishing detection function
def is_phishing(email_text: str) -> str:
    prompt = f"""
    Given the following email content, determine if it is a phishing attempt or not.
    You should look for typical signs of phishing, such as:
    - Suspicious links
    - Requests for personal information
    - Sense of urgency or pressure
    - Poor grammar or spelling
    Respond with either "Phishing" or "Not Phishing" and justify your answer.

    Email Content:
    {email_text}
    """

    try:
        # OpenAI call to detect phishing
        response = openai.ChatCompletion.create(
            model="gpt-3.5-turbo",
            messages=[{"role": "user", "content": prompt}]
        )
        result = response['choices'][0]['message']['content']
        return result.strip()  # Clean up the response

    except openai.error.AuthenticationError:
        return "Authentication failed. Please check your API key."
    except Exception as e:
        return f"An error occurred: {str(e)}"

@app.post("/analyze")
async def analyze_email(request: Request):
    data = await request.json()
    email_text = data.get("email", "")

    if not email_text:
        return JSONResponse(status_code=400, content={"error": "Email content is required."})

    # Pass the email to the phishing detection function
    detection_result = is_phishing(email_text)

    return {"result": detection_result}
