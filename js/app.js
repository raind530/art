const { ref, onMounted, watch, computed, reactive } = Vue
const { useDeviceOrientation, useMouse } = VueUse

const app = Vue.createApp({
  setup(context) {

    const restart = (retry) => {
      game.value = 1
    }
    
    const roadimg = computed(() => {
          return game.value < 2? 'url(./assets/road.gif)' : 'url(./assets/road.jpg)'
        })
    return {
      roadimg,
    }
  }
}).mount('#app')
