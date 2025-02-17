from flask import Flask, render_template, jsonify, request, redirect, url_for
from flask_socketio import SocketIO
from routes.page import page
from routes.api import api

from routes.socket import register_socketio_handlers  # Импортируем обработчики Socket
from flask_cors import CORS

app = Flask(__name__) 
app.config['SECRET_KEY'] = 'Q0G5L-S45LX-KI634-FGLVB-78BMK'
CORS(app)

# Создаем объект SocketIO
socketio = SocketIO(app, cors_allowed_origins="*", async_mode='threading')


# Импортируем маршруты страниц
app.register_blueprint(page)

# Импортируем маршруты страниц
app.register_blueprint(api)

# Регистрируем обработчики сокетов
register_socketio_handlers(socketio)

if __name__ == "__main__":
    #socketio.run(app, debug=True, host="193.38.55.106", port=8080)
    socketio.run(app, debug=True, host="193.38.55.106", port=8080, allow_unsafe_werkzeug=True)