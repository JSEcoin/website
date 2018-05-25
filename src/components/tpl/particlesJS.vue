<template>
  <div id='particles-js'></div>
</template>

<script>
require('particles.js');

export default {
  name: 'ParticlesJS',

  mounted () {
    this.$nextTick(() => {
      this.initParticlesJS();
    });
  },

  methods: {
    initParticlesJS () {
      /* eslint-disable */
      particlesJS('particles-js', {
        'particles': {
          'number': {
            'value': 10,
            'density': {
              'enable': true,
              'value_area': 800
            }
          },
          'color': {
            'value': '#53b4ff'
          },
          'shape': {
            'type': 'circle',
            'stroke': {
              'width': 0,
              'color': '#000000'
            },
            'polygon': {
              'nb_sides': 3
            },
            'image': {
              'src': 'img/github.svg',
              'width': 100,
              'height': 100
            }
          },
          'opacity': {
            'value': 0.5,
            'random': false,
            'anim': {
              'enable': false,
              'speed': 1,
              'opacity_min': 0.1,
              'sync': false
            } 
          },
          'size': {
            'value': 6,
            'random': true,
            'anim': {
              'enable': false,
              'speed': 80,
              'size_min': 0.4,
              'sync': false
            }
          },
          'line_linked': {
            'enable': true,
            'distance': 300,
            'color': '#53b4ff',
            'opacity': 0.4,
            'width': 2
          },
          'move': {
            'enable': true,
            'speed': 16,
            'direction': 'none',
            'random': true,
            'straight': true,
            'out_mode': 'bounce',
            'bounce': true,
            'attract': {
              'enable': true,
              'rotateX': 3000,
              'rotateY': 3000
            }
          }
        },
        'interactivity': {
          'detect_on': 'canvas',
          'events': {
            'onhover': {
              'enable': false,
              'mode': 'repulse'
            },
            'onclick': {
              'enable': true,
              'mode': 'push'
            },
            'resize': true
          },
          'modes': {
            'grab': {
              'distance': 800,
              'line_linked': {
                'opacity': 1
              }
            },
            'bubble': {
              'distance': 800,
              'size': 80,
              'duration': 2,
              'opacity': 0.8,
              'speed': 3
            },
            'repulse': {
              'distance': 400,
              'duration': 0.4
            },
            'push': {
              'particles_nb': 4
            },
            'remove': {
              'particles_nb': 2
            }
          }
        },
        'retina_detect': true
      })
    }
  }
}
</script>

<style>
/* Your styles */
</style>