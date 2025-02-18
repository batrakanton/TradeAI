import mysql.connector
from mysql.connector import Error

def connect_to_mysql():
    try:
        connection = mysql.connector.connect(
            host="crmstroy.mysql.tools",        # Адрес сервера (можно заменить на IP-адрес или домен)
            database="crmstroy_binance",  # Название базы данных
            user="crmstroy_binance",      # Ваше имя пользователя MySQL
            password="n^56Ezs8;J",  # Ваш пароль MySQL
            autocommit=True
        )
        if connection.is_connected():
            print("✅ Успешное подключение к MySQL")
            return connection
    except mysql.connector.Error as e:
        print(f"❌ Ошибка подключения к MySQL: {e}")
        return None

def execute_query(connection, query):
    if connection is None:
        print("❌ Ошибка: соединение с MySQL не установлено.")
        return []
    try:
        cursor = connection.cursor()
        cursor.execute(query)
        result = cursor.fetchall()
        cursor.close()
        return result
    except Exception as e:
        print(f"❌ Ошибка при выполнении запроса: {e}")
        return []