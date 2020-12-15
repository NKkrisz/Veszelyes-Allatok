import json
from flask import *
app = Flask(__name__,template_folder="./",static_folder="./",static_url_path="")

@app.route("/")
def index():
    with open("pages.json","r") as f:
        pages = json.loads(f.read())
        f.close()
    return render_template("index.html", pages=pages)

if __name__ == "__main__":
    app.run(host="localhost", port=8493, debug=True)