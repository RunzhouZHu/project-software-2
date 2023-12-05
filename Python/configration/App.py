from flask import Flask,request
from Python.sever.Test import myServer

app = Flask(__name__)

# register file
app.register_blueprint(myServer)

@app.before_request
def before_request():
    param_value = request.args.get('param_name')

@app.route('/')
def index():
    return 'Hello, World!'


if __name__ == '__main__':
    app.run(port=80, debug=True)
