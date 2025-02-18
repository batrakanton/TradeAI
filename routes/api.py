from flask import Blueprint, jsonify, request
from function.function import connect_to_mysql, execute_query
from function.binance import all_symbols
api = Blueprint('api', __name__)
import json

connection = connect_to_mysql()
#Главная страница
@api.route('/api', methods=['GET'])
def index():
    try:
        return jsonify({
            "status": "success",
        })
    except Exception as e:
        return jsonify({
            "status": "error",
            "message": str(e)
        })  
    
#Боты
@api.route('/api/bots', methods=['GET'])
def bots():
    try:
        # Проверяем реферер запроса
        # referrer = request.headers.get('Referer')
        # if not referrer or 'https://binance.ionit.online/' not in referrer:
        #     return jsonify({
        #         "status": "error", 
        #         "message": "Доступ запрещен. Разрешены запросы только с https://binance.ionit.online/"
        #     }), 403
        
        id = request.args.get('id') 
        if id:
            IdSQL = f" AND id = {id} "
        else:
            IdSQL = ""

        query = f"""
        SELECT 
            id,
            symbol,
            price_min,
            price_max,
            active
        FROM 
            bots 
        WHERE 
            active = 1 
            {IdSQL}
        ORDER BY 
            id DESC 
        LIMIT 
            100 
        """
        rows = execute_query(connection, query)
        
        bots_data = []
        for row in rows:
                    #
            symbols = all_symbols(row[1])
            symbols = json.loads(symbols)

            data = {
                "id": row[0],
                "symbol": row[1], 
                "price_min": row[2],
                "price_max": row[3],
                "active": row[4],
                "price": symbols[0]['price']
            }
            bots_data.append(data)
            
        return jsonify({
            "status": "success",
            "bots": bots_data
        })
    except Exception as e:
        return jsonify({
            "status": "error",
            "message": str(e)
        })  
