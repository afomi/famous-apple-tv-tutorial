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
        return [-Math.PI/2.1, 0, rotationValue]
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
  events: {
    '$lifecycle': {
      'post-load': function($state, $famousNode) {
        var id = $famousNode.addComponent({
          onUpdate: function(time) {
            for(var i = 0; i < $state.get("srcs").length; i++) {
              var currentZ = $state.get(['positionZ', i]);
              $state.set(['positionZ', i], currentZ - 1);
            }
            $famousNode.requestUpdateOnNextTick(id);
          }
        });
        $famousNode.requestUpdateOnNextTick(id);
      }
    }
  },
  states: {
    rotationValue: 0,
    srcs: images,
    contextSize: contextSize,
    positionZ: randomCoordinates(images)
  },
  tree: 'apple-tv.html'
}).config({
  includes: [
    'data.js'
  ]
});
