from flask import Blueprint, jsonify    

api = Blueprint('api', __name__)
#Главная страница
@api.route('/api', methods=['GET'])
def index():
    try:
        # Тестовые данные для API
        data = [
            {
                "symbol": "BTCUSDT",
                "price": "41250.00",
                "rsi": "45.32", 
                "sma_short": "41245.50",
                "sma_long": "41100.25",
                "bollinger": "41300.00"
            },
            {
                "symbol": "ETHUSDT", 
                "price": "2250.50",
                "rsi": "52.15",
                "sma_short": "2248.75", 
                "sma_long": "2230.00",
                "bollinger": "2260.00"
            }
        ]
        
        return jsonify({
            "status": "success",
            "data": data
        })
    except Exception as e:
        return jsonify({
            "status": "error",
            "message": str(e)
        })  
