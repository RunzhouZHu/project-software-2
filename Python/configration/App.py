from flask import Flask,request,g
from Python.sever.Test import selfApp

app = Flask(__name__)

# register file
app.register_blueprint(selfApp)

@app.before_request
def before_request():
    param = request.args.get('paramToBack');
    g.paramToBack = eval(param);

# @app.route('/')
# def index():
#     return 'Hello, World!'


if __name__ == '__main__':
    app.run(port=80, debug=True)
