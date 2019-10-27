<template>
  <div class="container">
    <transition-group tag="ul" appear name="slide" enter-active="slide-enter-active" leave-active="slide-leave-active"
      enter-to="slide-enter" leave-to="slide-leave-to">
      <li v-for="(item,index) in list" :key="index"></li>
    </transition-group>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: []
    }
  },
  mounted () {
    this.loadData()
  },
  methods: {
    /**
       * @description 模拟数据加载
       */
    loadData () {
      setTimeout(
        async () => {
          // 第一个元素不需要延续新增
          this.list.push(1)
          for (var i = 0; i < 2; i++) {
            await this.add()
          }
        }, 300
      )
    },
    /**
       * @description 延时新增元素
       */
    add () {
      return new Promise(resolve => {
        setTimeout(() => {
          this.list.push(1)
          resolve()
        }, 80)
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  .container {
    overflow: hidden;
    width: 100%;
    height: 100%;
    .slide-enter-active,
    .slide-leave-active {
      transition: opacity 1.2s, transform 1.2s;
    }
    .slide-enter,
    .slide-leave-to {
      opacity: 0;
      transform: translateX(-50vw);
    }
    ul {
      width: 300px;
      margin: 0 auto;
      box-sizing: border-box;
      li {
        list-style: none;
        height: 200px;
        width: 300px;
        background: #00bfff;
        margin-top: 10px;
      }
    }
  }
</style>
