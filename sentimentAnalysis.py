from vaderSentiment.vaderSentiment import SentimentIntensityAnalyzer
from textblob import TextBlob
import numpy as np

def sentimentAnalysis(sentence):
    # TextBlob Sentiment Analysis
    blob = TextBlob(sentence)
    textBlob_sentiment = blob.sentiment.polarity

    # Vader Sentiment Analysis
    vader = SentimentIntensityAnalyzer()
    vs = vader.polarity_scores(sentence)
    vader_sentiment = vs["compound"]

    # Averaging out both of the sentiment scores
    average_sentiment = np.mean([textBlob_sentiment, vader_sentiment])
    print(vs)  # Debugging: print sentiment scores

    if average_sentiment > 0:
        return "Positive"
    elif average_sentiment < 0:
        return "Negative"
    else:
        return "Neutral"

