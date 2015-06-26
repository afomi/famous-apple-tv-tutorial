FamousFramework.scene('afomi:apple-tv', {
    behaviors: {
        '#surface': {
            'content': '<h1>Hello afomi:apple-tv!</h1>',
            'size': [200, 200],
            'style': {
                'background-color': 'red'
            }
        }
    },

    tree: '<node id="surface"></node>'
});
