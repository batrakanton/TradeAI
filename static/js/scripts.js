function log(data){
	console.log(data);
}

$(document).ready(function() {
    const id = '';

    // Функция для загрузки данных о ботах
    function loadBots() {
        $.ajax({
            url: '/api/bots', 
            method: 'GET',
            dataType: 'json',
            data: {
                id: id
            },
            success: function(response) {
                if(response.status === 'success') {
                    // Находим tbody таблицы BotsClient
                    const tbody = $('#BotsClient tbody');
                    tbody.empty(); // Очищаем таблицу перед добавлением новых данных
                    
                    // Перебираем полученные данные о ботах
                    response.bots.forEach((bot, index) => {
                        // Формируем строку таблицы для каждого бота
                        const row = `
                            <tr>
                                <td class="uk-text-center">
                                    ${index + 1}
                                </td> <!-- Порядковый номер -->
                                <td class="uk-text-center">
                                    <a id="open-modal-bot" href="#modal-bot-symbol" uk-toggle id-data="${bot.id}">${bot.symbol}</a>
                                </td> <!-- Торговая пара (например BTCUSDT) -->
                                <td class="uk-text-center" id="price-${bot.symbol}">${bot.price}</td> <!-- Текущая цена (обновляется через websocket) -->
                                <td class="uk-text-center">${bot.price_min}</td> <!-- Минимальная цена для торговли -->
                                <td class="uk-text-center">${bot.price_max}</td> <!-- Максимальная цена для торговли -->
                            </tr>
                        `;
                        tbody.append(row);
                    });
                } else {
                    UIkit.notification("Ошибка при загрузке данных о ботах", {status: 'danger', pos: 'top-right'});
                }
            },
            error: function(xhr, status, error) {
                UIkit.notification("Ошибка при выполнении запроса: " + error, {status: 'danger', pos: 'top-right'});
            }
        });
    }

    // Загружаем данные при загрузке страницы
    loadBots();

    // Обновляем данные каждые 5 секунд
    setInterval(loadBots, 5000);

    // Открытие модального окна для бота
    $(document).on('click', '#open-modal-bot', function() {
        const id = $(this).attr('id-data');
        $('#modal-bot-symbol-title').html(id);
        $.ajax({
            url: '/api/bots',
            method: 'GET',
            dataType: 'json',
            data: {
                id: id
            },
            success: function(response) {
                //console.log(response.bots);
                $('#modal-b-symbol').val(response.bots[0].symbol);
                $('#modal-b-min').val(response.bots[0].price_min);
                $('#modal-b-max').val(response.bots[0].price_max);
            },
            error: function(xhr, status, error) {
                UIkit.notification("Ошибка при выполнении запроса: " + error, {status: 'danger', pos: 'top-right'});
            }  
        });
    });




    
    /*
	
    const socket = io("wss://binance.ionit.online");

    //Подключение
    socket.on("connect", () => {
        try {
            //console.log("🔌 Подключено к WebSocket!");
            UIkit.notification("🔌 Подключено к серверу!", {status: 'info', pos: 'top-right'});
        } catch (e) {
            UIkit.notification(e.message, {status: 'danger', pos: 'top-right'});
        }
    });

    //Отключение
    socket.on("disconnect", () => {
        try {
            // console.log("");
            UIkit.notification("❌ Отключение от сервера!", {status: 'info', pos: 'top-right'});
        } catch (e) {
            UIkit.notification(e.message, {status: 'danger', pos: 'top-right'});
        }
    });

    socket.on("connect", () => {
        try {
            // console.log("✅ Запрос отправлен в WebSocket!");
            
            // Создаем пустой массив для валютных пар
            const currencyPair = [];

            // Ищем все элементы, у которых id начинается с "price-"
            document.querySelectorAll("[id^='price-']").forEach(element => {
                // Извлекаем символ валютной пары (удаляем "price-")
                const symbol = element.id.replace("price-", "");
                currencyPair.push(symbol);
            });

            socket.emit("get_data", { symbol: currencyPair });  // Отправляем данные на сервер
        } catch (e) {
            UIkit.notification(e.message, {status: 'danger', pos: 'top-right'});
        }
    });

    // Обработка обновлений по ценам в реальном времени
    socket.on('price_update', function(data) {
        try {
            // console.log('Обновление цены:', data.data);  // Выводим данные на консоль
            // Перебираем массив данных и обновляем соответствующие элементы на странице
            // console.log(data);
            data.data.forEach(item => {
                $("#price-" + item.symbol).html('$' + item.price);
                $("#buy-" + item.symbol).html('$' + item.buy);
                $("#sell-" + item.symbol).html('$' + item.sell);
            });
        } catch (e) {
            UIkit.notification(e.message, {status: 'danger', pos: 'top-right'});
        }
    });

    // Обработка Индикаторов
    socket.on('indicators_update', function(data) {
        try {
            console.log('Обновление цены:', data.data);  // Выводим данные на консоль
            // Перебираем массив данных и обновляем соответствующие элементы на странице
            data.data.forEach(item => {
                $("#rsi-" + item.symbol).html('' + item.rsi[0].RSI);
                $("#sma_short-" + item.symbol).html('' + item.rsi[0].SMA_short);
                $("#sma_long-" + item.symbol).html('' + item.rsi[0].SMA_long);
            });
        } catch (e) {
            UIkit.notification(e.message, {status: 'danger', pos: 'top-right'});
        }
    });
*/

});

