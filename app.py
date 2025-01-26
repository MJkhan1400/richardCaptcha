from flask import Flask, render_template, request, jsonify
from sentimentAnalysis import sentimentAnalysis

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/analyze", methods=["POST"])
def analyze():
    data = request.get_json()
    text = data.get("text", "")
    if text:
        sentiment = sentimentAnalysis(text)
        return jsonify({"sentiment": sentiment})
    return jsonify({"error": "No text provided"}), 400

if __name__ == "__main__":
    app.run(debug=True)

