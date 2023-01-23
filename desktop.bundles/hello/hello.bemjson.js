({
    block : 'page',
    title : 'hello',
    head : [
        {elem : 'css', url : 'hello.min.css'}
    ],
    scripts : [
        { elem : 'js', url : 'hello.min.js' }
    ],
    mods : { theme : 'body' },
    content : [
        {block : 'body-inner',
            content : [
                {
                    block : 'section',
                    content : [
                        {
                            block : 'top-header',
                            content : [
                                {
                                    elem: 'logo',
                                    content : 'Лого',
                                },
                                {
                                    elem : 'search-form',
                                    content : 'Строка поиска',
                                },
                                {
                                    elem : 'phone',
                                    content : 'Телефон',
                                }
                            ],
                        }
                    ]
                },
                {
                    block : 'section',
                    mix: [{block: 'menu-section'}],
                    content : [
                        {
                            block: 'menu',
                            content : ['Меню'],
                        }
                    ]
                },
                {
                    block : 'header',
                    content : 'Шапка',
                },
                {
                    block : 'section',
                    mix: [{block: 'content-section'}],
                    content : [
                        {
                            block: 'content',
                            content : [
                                {
                                    elem: 'news',
                                    content :['Категории и новости'],
                                },
                                {
                                    elem: 'content-info',
                                    content :['Содержимое страницы'],
                                },
                            ]
                        }
                    ]
                },
                {
                    block : 'footer',
                    content : 'Подвал',
                },
            ]
        }
    ]
})