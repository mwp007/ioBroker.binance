/*global systemDictionary:true */
'use strict';

systemDictionary = {
    'adapter-title': {
        'en': 'Binance API Adapter',
        'de': 'Binance API adapter',
        "ru": "Binance API адаптер",
        "pt": "Adaptador API Binance",
        "nl": "Binance API adapter",
        "fr": "Adaptateur d'API Binance",
        "it": "Adattatore API Binance",
        "es": "Adaptador API Binance",
        "pl": "Adapter API Binance",
        "zh-cn": "Binance API适配器"
    },
    'adapter-description': {
        "en": "The adapter downloads prices of currencies in the configured update interval. If you configure an API Key and the corresponding secret, it will pull account balances as well. You may create an API Key on binance.com - i suggest to restrict it to \"read-only",
        "de": "Der Adapter lädt Währungspreise im konfigurierten Aktualisierungsintervall herunter. Wenn Sie einen API-Schlüssel und das entsprechende Geheimnis konfigurieren, werden auch Kontensalden abgerufen. Sie können einen API-Schlüssel auf binance.com erstellen. Ich empfehle, ihn auf \"schreibgeschützt\" zu beschränken",
        "ru": "Адаптер загружает цены валют в заданном интервале обновления. Если вы настроите ключ API и соответствующий секретный ключ, он также потянет остатки на счетах. Вы можете создать ключ API на binance.com - я предлагаю ограничить его только для чтения",
        "pt": "O adaptador baixa os preços das moedas no intervalo de atualização configurado. Se você configurar uma chave de API e o segredo correspondente, também obterá saldos da conta. Você pode criar uma chave de API no binance.com - sugiro restringi-la a \"somente leitura\"",
        "nl": "De adapter downloadt prijzen van valuta's in het geconfigureerde update-interval. Als u een API-sleutel en het bijbehorende geheim configureert, worden ook de rekeningsaldi opgehaald. U kunt op binance.com een API-sleutel maken. Ik raad u aan deze te beperken tot 'alleen-lezen'",
        "fr": "L'adaptateur télécharge les prix des devises dans l'intervalle de mise à jour configuré. Si vous configurez une clé API et le secret correspondant, elle tirera également les soldes des comptes. Vous pouvez créer une clé API sur binance.com - je suggère de la limiter à \"lecture seule\"",
        "it": "L'adattatore scarica i prezzi delle valute nell'intervallo di aggiornamento configurato. Se si configura una chiave API e il segreto corrispondente, verranno estratti anche i saldi degli account. È possibile creare una chiave API su binance.com - suggerisco di limitarla a \"sola lettura",
        "es": "El adaptador descarga los precios de las monedas en el intervalo de actualización configurado. Si configura una clave API y el secreto correspondiente, también extraerá los saldos de las cuentas. Puede crear una clave API en binance.com; sugiero restringirla a \"solo lectura\"",
        "pl": "Adapter pobiera ceny walut w skonfigurowanym interwale aktualizacji. Jeśli skonfigurujesz klucz API i odpowiedni klucz tajny, spowoduje to również wyciągnięcie sald kont. Możesz utworzyć Klucz API na binance.com - sugeruję ograniczenie go do „tylko do odczytu",
        "zh-cn": "适配器以配置的更新间隔下载货币价格。如果您配置了API密钥和相应的机密，它也会提取帐户余额。您可以在binance.com上创建一个API密钥-我建议将其限制为“只读”"
    },
    'update-interval': {
        "en": "Update Interval",
        "de": "Updateintervall",
        "ru": "Интервал обновления",
        "pt": "Intervalo de atualização",
        "nl": "Bijwerkingsonderbreking",
        "fr": "Intervalle de mise à jour",
        "it": "Intervallo di aggiornamento",
        "es": "Intervalo de actualización",
        "pl": "Interwał aktualizacji",
        "zh-cn": "更新间隔"
    },
    'allPrices': {
        "en": "Fetch ALL prices (Price only, but of every currency pair)",
        "de": "ALLE Preise laden (nur den Preis, dafür aber von jedem Währungspaar)",
        "ru": "Получить ВСЕ цены (только цены, но для каждой валютной пары)",
        "pt": "Buscar TODOS os preços (apenas preço, mas em cada par de moedas)",
        "nl": "ALLE prijzen ophalen (alleen prijs, maar van elk valutapaar)",
        "fr": "Récupérez TOUS les prix (prix uniquement, mais pour chaque paire de devises)",
        "it": "Ottieni TUTTI i prezzi (solo prezzo, ma di ogni coppia di valute)",
        "es": "Obtenga TODOS los precios (solo precio, pero de cada par de divisas)",
        "pl": "Pobierz WSZYSTKIE ceny (tylko cena, ale dla każdej pary walut)",
        "zh-cn": "获取所有价格（仅价格，但每个货币对价格）"
    },
    'symbols': {
        "en": "Comma separated list of symbols (currency pairs supported by binance like BTCUSDT)",
        "de": "Durch Kommas getrennte Liste von Symbolen (von Binance unterstützte Währungspaare wie z.B. BTCUSDT)",
        "ru": "Разделенный запятыми список символов (валютные пары, поддерживаемые бинансом, например BTCUSDT)",
        "pt": "Lista de símbolos separados por vírgula (pares de moedas suportados por binance como BTCUSDT)",
        "nl": "Door komma's gescheiden lijst met symbolen (valutaparen ondersteund door binance zoals BTCUSDT)",
        "fr": "Liste de symboles séparés par des virgules (paires de devises prises en charge par binance comme BTCUSDT)",
        "it": "Elenco di simboli separato da virgole (coppie di valute supportate da binance come BTCUSDT)",
        "es": "Lista de símbolos separados por comas (pares de divisas compatibles con binance como BTCUSDT)",
        "pl": "Lista symboli oddzielona przecinkami (pary walut obsługiwane przez binancję, np. BTCUSDT)",
        "zh-cn": "逗号分隔的符号列表（BTCUSDT等币安支持的货币对）"
    },
    'apiKey': {
        "en": "API Key",
        "de": "API Schlüssel",
        "ru": "Ключ API",
        "pt": "Chave API",
        "nl": "API sleutel",
        "fr": "clé API",
        "it": "Chiave API",
        "es": "Clave API",
        "pl": "Klucz API",
        "zh-cn": "API密钥"
    },
    'apiKeySecret': {
        "en": "API Key secret",
        "de": "API Schlüssel Geheimnis",
        "ru": "Секретный ключ API",
        "pt": "Segredo da chave da API",
        "nl": "API-sleutelgeheim",
        "fr": "Secret de clé API",
        "it": "Segreto chiave API",
        "es": "Secreto clave de API",
        "pl": "Klucz tajny API",
        "zh-cn": "API密钥机密"
    }
};
