from flask import Flask,request,g
from Python.sever.FlyYang import yyApp
from Python.sever.FlyZzy import zzyApp
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

# register file
app.register_blueprint(yyApp)
app.register_blueprint(zzyApp)

@app.before_request
def before_request():
    param = request.args.get('paramToBack');
    g.paramToBack = eval(param);



if __name__ == '__main__':
    app.run(port=80, debug=True)