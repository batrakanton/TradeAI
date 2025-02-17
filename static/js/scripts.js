function log(data){
	console.log(data);
}

$(document).ready(function() {

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

