# Richard Reaction Flask App

## Overview
This project is a fun Flask-based web application where users interact with "Richard" by giving him compliments. Depending on the sentiment of the compliment (positive, neutral, or negative), Richard reacts with animations and sounds. The app uses sentiment analysis to determine Richard's reactions. The CSS art for Richard's character was inspired by and credited to [this YouTube video](https://youtube.com/shorts/zMeKDWMTONA?si=HlYnSwg2oUptfi1k).

## Features
- CSS art-based character animations.
- Sentiment analysis using TextBlob and Vader SentimentIntensityAnalyzer.
- Plays audio feedback: a laugh sound for positive compliments and a cry sound for negative feedback.
- Interactive and responsive web interface.

## Installation and Setup

### Step 1: Create a Conda Environment
Create a new Conda environment for this project:
```bash
conda create -n flask python=3.10.12
conda activate flask
```

### Step 2: Install Requirements
Install the required Python packages using pip:
```bash
pip install -r requirements.txt
```

### Step 3: Run the Application
Run the Flask application:
```bash
python app.py
```
The application will start at `http://127.0.0.1:5000`. Open this URL in your web browser to interact with the app.

## Requirements
The following Python packages are required for this application:
- `Flask`
- `vaderSentiment`
- `textblob`
- `numpy`

The requirements are listed in the `requirements.txt` file.

## Credit
The CSS art for Richard was inspired by [this YouTube video](https://youtube.com/shorts/zMeKDWMTONA?si=HlYnSwg2oUptfi1k).


