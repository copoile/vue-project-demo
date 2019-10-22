<template>
  <div class="container">
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <img :src="item.cover"/>
        <span>{{ item.title }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          title: '冠军之志 瑞兹',
          cover: require('../../assets/images/image_011.jpg')
        },
        {
          title: '地狱火2019',
          cover: require('../../assets/images/image_012.jpg')
        },
        {
          title: '星之守护者2019',
          cover: require('../../assets/images/image_013.jpg')
        },
        {
          title: '源计划2019',
          cover: require('../../assets/images/image_014.jpg')
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  ul {
    margin: 0 auto;
    padding: 0;
    margin-top: 60px;
    height: 117px;
    width: 1000px;
    background: #EEEEEE;
    li {
      list-style: none;
      float: left;
      width: 185px;
      height: 117px;
      overflow: hidden;
      position: relative;
      margin-left: 10px;
      img {
        width: 100%;
        transition: transform 0.3s;
      }
      &:hover {
        img {
          transform: scale(1.1,1.1);
        }
      }
      span {
        position: absolute;
        left: 0;
        bottom: 0;
        width: 100%;
        height: 30px;
        line-height: 30px;
        font-size: 14px;
        text-align: center;
        color: #cdbe91;
        background: url(../../assets/images/image_005.png) repeat;
      }
    }
  }
}
</style>
