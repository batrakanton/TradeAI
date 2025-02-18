from flask import render_template, Blueprint
from htmlmin import minify

page = Blueprint('page', __name__)
#Главная страница
@page.route('/', methods=['GET'])
def index():
    try:
        data = ''
        html_content = render_template('index.html', data=data)

        minified_html = minify(html_content, remove_comments=True, remove_empty_space=True)
        return minified_html 

    except Exception as e:
        print(e)
        return "Error: " + str(e)  # Возвращаем ошибку в ответе
     
 