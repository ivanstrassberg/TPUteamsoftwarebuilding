Клонить с main

Перед работой самостоятельно скачать: golang, postgres, react\
connStr := "_user=postgres port=5433_ _dbname=foodMarket_ _password=root_ sslmode=disable"\
в файле storage.go найти строку выше, и поменять данные на свои кроме последнего параметра. \
// store.SeedWithData("/Users/ivansilin/Documents/coding/golang/foodShop/rewritten/draft.txt")
найти строку выше в main.go и раскоментить на первый запуск. После первого запуска закомментить обратно.
Таблица будет заполена \
Возможно будет необходимо в директории /rewritten выполнить: \
go get .\
go mod tidy\
Запуск бэка для инициализации БД и общей работы производить командой в **отдельном терминале**: \
go run ./\
Сервер фронта запустить в **другом** **терминале**:\
npm start\
Вуаля, все должно работать. \

Для начала, зарегистрируйтесь, затем войдите в систему.\
Система поддерживает следующие домейны: \
  	"gmail.com" \
	"yahoo.com"\
	"outlook.com"\
	"hotmail.com"\
	"live.com"\
	"aol.com"\
	"icloud.com"\
	"mail.ru"\
	"tpu.ru"\
	"inbox.ru"\
В рамках тестирования токен авторизации действует **60 минут**.\

Если успею, сделаю контейнеризацию, чтобы избежать геморроя с установкой на свою машину, но гарантий не даю.\