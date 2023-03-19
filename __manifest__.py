{
    'name': 'Online Tracking',
    'version': '16.0.1.0.0',
    'sequence': '-1',

    'depends': ['base', 'sale', 'website'],
    'data': [
        'data/website_menu.xml',
        'views/stock_picking_view.xml',
        'views/online_tracking_template.xml',
    ],
    'assets': {
        'web.assets_frontend': [
            'online_tracking/static/src/js/online_tracking.js'
        ]
    },
}
