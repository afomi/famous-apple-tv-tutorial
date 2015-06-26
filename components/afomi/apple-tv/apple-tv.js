FamousFramework.component('afomi:apple-tv', {
  behaviors: {
    '#root': {
      'style': {
        'perspective': '1000px'
      }
    },
    '#rotator-node': {
      'size': function(contextSize) {
        return [contextSize, contextSize];
      },
      'align': [0.5, 0.5],
      'mount-point': [0.5, 0.5],
      'origin': [0.5, 0.5],
      'style': {
        'background-color': 'red'
      },
      'rotation': function(rotationValue) {
        return [-Math.PI/2.3, 0, rotationValue]
      }
    },
    '.gallery-item': {
      'size': [100, 100],
      'style': {
        'background-color': 'blue',
        'border': '2px solid black'
      },
      'content': function($index, srcs) {
        return `<img src="${ srcs[$index] }" style="height: 100px; width: 100px;" />`
      },
      '$repeat': function (srcs) {
        return srcs;
      },
      'position-x': function($index, contextSize) {
        return Math.random() * contextSize;
      },
      'position-y': function($index, contextSize) {
        return Math.random() * contextSize;
      },
      'position-z': function($index, positionZ) {
        return positionZ[$index];
      },
      'rotation': [Math.PI/2, 0, 0]
    }
  },
  events: {},
  states: {
    rotationValue: 0,
    srcs: images,
    contextSize: 500,
    positionZ: []
  },
  tree: 'apple-tv.html'
}).config({
  includes: [
    'data.js'
  ]
});
