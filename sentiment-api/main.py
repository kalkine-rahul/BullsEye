# sentiment-api/main.py
from fastapi import FastAPI, Request
from fastapi.middleware.cors import CORSMiddleware
from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
from pydantic import BaseModel

class TextInput(BaseModel):
    text: str

app = FastAPI()
analyzer = SentimentIntensityAnalyzer()

# Allow requests from your Next.js app
app.add_middleware(
    CORSMiddleware,
    allow_origins=["http://localhost:3000"],
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.post("/analyze")
def analyze_sentiment(input: TextInput):
    print("Received input:", input.text)  # 🔍 Debug print
    analyzer = SentimentIntensityAnalyzer()
    scores = analyzer.polarity_scores(input.text)
    return {"sentiment": scores}

