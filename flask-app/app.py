from flask import Flask
from blueprints.index.view import index_blueprint

application = Flask(__name__)
application.register_blueprint(index_blueprint, url_prefix='/index')

if __name__ == '__main__':
    application.run(debug=True)