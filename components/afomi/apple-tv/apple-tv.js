FamousFramework.component('afomi:apple-tv', {
  behaviors: {
    '#root': {
      'style': {
        'background-color': 'grey',
        'perspective': '1000px'
      }
    },
    '#rotator-node': {
      'size': [500,500],
      'align': [0.5, 0.5],
      'mount-point': [0.5, 0.5],
      'style': {
        'background-color': 'red'
      }
    },
    '.gallery-item': {
      'size': [100, 100],
      'style': {
        'background-color': 'blue'
      },
      '$repeat': function () {
        return [1, 2, 3, 4];
      },
      'position': function($index) {
        return [Math.random() * 500, Math.random() * 500];
      }
    }
  },
  events: {},
  states: {},
  tree: 'apple-tv.html'
});
