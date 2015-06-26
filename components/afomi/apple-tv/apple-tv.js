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
      'rotation': function(rotationValue) {
        return [-Math.PI/2, 0, rotationValue]
      },
      'position-z': function(rootZ) {
        return rootZ;
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
              if(currentZ < -$state.get("contextSize")) {
                currentZ = $state.get("contextSize") / 1.5 + 100;
              }
              $state.set(['positionZ', i], currentZ - 1);
            }
            $famousNode.requestUpdateOnNextTick(id);
          }
        });
        $famousNode.requestUpdateOnNextTick(id);
      }
    },
    '.gallery-item': {
      'click': function($state) {
        $state.set('rotationValue', $state.get("rotationValue") - Math.PI / 2, {
          duration: 1000,
          curve: 'easeIn'
        }).thenSet('rotationValue', $state.get("rotationValue") - (Math.PI * 2), {
          duration: 2000,
          curve: 'easeOut'
        });

        $state.set('rootZ', -500, {
          duration: 1000,
          curve: 'easeOut'
        }).thenSet('rootZ', 0, {
          duration: 2000,
          curve: 'easeInOut'
        });
      }
    }
  },
  states: {
    contextSize: contextSize,
    positionZ: randomCoordinates(images),
    rootZ: 0,
    rotationValue: 0,
    srcs: images
  },
  tree: 'apple-tv.html'
}).config({
  includes: [
    'data.js'
  ]
});
