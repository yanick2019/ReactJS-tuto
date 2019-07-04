from flask import Flask , Response , request
from flask_cors import CORS
import json

app = Flask(__name__)
CORS(app)

@app.route('/')
def index():
    return 'hello' 


@app.route('/message',methods=['POST'])
def message():
    return  Response(json.dumps(request.json),mimetype='application/json',status=200)  
    
'''    
通过用户发来的信息request.json  返回通过json.dumps处理过的数据
'''

if __name__ == '__main__':
    app.run(debug=True)