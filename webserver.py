from flask import *
app = Flask(__name__,template_folder="./",static_folder="./",static_url_path="")

@app.route("/")
def index():
    return render_template("index.html")

if __name__ == "__main__":
    app.run(host="localhost", port=8493, debug=True)