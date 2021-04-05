<template>
  <div>
    <h1>{{ title }}</h1>
    <p>{{ count }}</p>
    <button @click="count++">추가</button>
    <Home></Home>
    <AppStatus></AppStatus>
  </div>
</template>

<script>
import Home from './Home';

export default {
  components: {
    Home
  },
  data(){
    return {
      title: '안녕하세요.',
      count: 1
    }
  }
};
</script>
