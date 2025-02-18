from binance.client import Client
from binance.enums import *
from binance import ThreadedWebsocketManager
import json
import pandas as pd
import numpy as np
import time
from ta.momentum import RSIIndicator
from ta.trend import SMAIndicator, EMAIndicator, MACD
from ta.volatility import BollingerBands
import concurrent.futures
import pandas_ta as ta
from dotenv import load_dotenv
import os
import asyncio
import websockets
from function.function import connect_to_mysql, execute_query

import json

api_key = "F0IbicgZjhVAEpeSYFiwBdRDCN5TJ50MMjbocsfkzpZyeUflnNdEaHH8Qzpu5gOx"
api_secret = "RZBPw34L6uk9pTmSsdEp5fX6pIndLtgiCrTf4pHWrcyveL92nJAq3r7PP4W6RsYr"
client = Client(api_key, api_secret)

# Получение всех тикеров с Binance
def all_symbols(symbols):
    try:
        # Получаем все тикеры с Binance
        data = client.get_all_tickers()
        
        # Фильтруем данные по списку нужных валютных пар
        filtered_data = [ticker for ticker in data if ticker['symbol'] in symbols]
        
        # Преобразуем в JSON формат
        json_data = json.dumps(filtered_data, indent=4)
        return json_data
    except Exception as e:
        error_json = json.dumps({"error": str(e)}, indent=4)
        return error_json
    


