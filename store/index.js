import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    message: 'カウンター',
    counter: 0,
    cartItems: ['肉','魚','野菜','ジュース']
  },
  mutations: {
    increment(state, payload){
      state.counter += payload;
    }
  },
  getters: {
    cartItemsCount(state) {
      return state.cartItems.length;
    }
  },
  actions: {
    increment(context, payload){
      setTimeout(() =>{
      context.commit('increment', payload);
    }, 1000)
  }
},
  modules: {
  }
})
