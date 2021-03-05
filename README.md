# tilda-api-sadtest-v1

структура проекта

src/
    ./modules - модули описывают схему БД, роутинг, методы и тп для компонентов (сущностей) проекта
    ./sandbox - папка с исполняемыми скриптами для отладки функционала проекта
    ./services - сервисы для работы с базами данных, внешними апи и т.п.
    ./utils - утилиты которые помогают работать с данными, конверторы, логеры и т.п.


src/modules
    ./module
        ./index - экспортирует публичные методы модуля (router, methods)
        ./router - роуты модуля с назначением обработчков (handlers)
        ./handlers - обработчики роутов (router) с простой логикой вызывающие методы модулей или сервисов
        ./methods - методы модуля со сложной логикой
        ./model - модель БД определенная схемой
    ./dataLayer - слой для CRUD работы с базой данных на основе всех require('./module/model')
    ./appRouter - главный роутер основывающийся на всех {router} require('./module')
