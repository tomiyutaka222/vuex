<template>
  <div class="home">
    <h1>vuexヘルパー</h1>
    <p>このページではvuexについて学んだことをspaとして表示します。<br>
    vuexインスタンスや概要、vuexヘルパーについて学び、それを実践しました。<br>
    四連休最終日までにはこれまで学んだことを活かしてオリジナルのspaを作成し、<br>
    GitHubにアップロードします。</p>
    <p>{{ message }}</p>
    <h1>商品数</h1>
    <h1> {{ cartItemsCount }}</h1>
    <h1>カウンター</h1>
    <h1>{{ counter }}</h1>
    <button @click="increment">一秒遅れで+10</button>
  </div>
</template>

<script>
import {mapState} from 'vuex'
// @ is an alias to /src
export default {
  name: 'Home',
  components: {

    },
  
  computed: {
    ...mapState({
      massage: 'message',
      counter: 'counter',
      cartItems: 'cartItems'
    }),
     cartItemsCount(){
      return this.$store.getters.cartItemsCount;
     }
  },
  methods:{
    increment(){
      this.$store.dispatch('increment', 10);
    }
  }
}
</script>
