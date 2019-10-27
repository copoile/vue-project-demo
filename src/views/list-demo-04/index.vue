<template>
  <div class="container">
    <ul>
      <li v-for="(item,index) in list" :key="index">
        <img :src="item.img"/>
        <h3 class="title">{{ item.title }}</h3>
        <p class="desc">{{ item.desc }}</p>
        <p class="price">{{ item.price }}</p>
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
          title: 'Redmi 8',
          desc: '5000mAh超长续航',
          price: '799元起',
          img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d295c4fb500d163a7045dc715b47f808.jpg?thumb=1&w=200&h=200&f=webp&q=90'
        },
        {
          title: '小米9 Pro 5G',
          desc: '5G双卡全网通，骁龙855Plus',
          price: '3699元起',
          img: 'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ca9b4f81af709935556bef9aa21a90e8.jpg?thumb=1&w=200&h=200&f=webp&q=90'
        },
        {
          title: 'Redmi Note 8',
          desc: '千元4800万四摄',
          price: '999元起',
          img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c87947d104ee5833913e4c520108f16.jpg?thumb=1&w=200&h=200&f=webp&q=900'
        },
        {
          title: 'Redmi 8',
          desc: '5000mAh超长续航',
          price: '799元起',
          img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/d295c4fb500d163a7045dc715b47f808.jpg?thumb=1&w=200&h=200&f=webp&q=90'
        },
        {
          title: '小米9 Pro 5G',
          desc: '5G双卡全网通，骁龙855Plus',
          price: '3699元起',
          img: 'http://cdn.cnbj1.fds.api.mi-img.com/mi-mall/ca9b4f81af709935556bef9aa21a90e8.jpg?thumb=1&w=200&h=200&f=webp&q=90'
        },
        {
          title: 'Redmi Note 8',
          desc: '千元4800万四摄',
          price: '999元起',
          img: '//cdn.cnbj1.fds.api.mi-img.com/mi-mall/4c87947d104ee5833913e4c520108f16.jpg?thumb=1&w=200&h=200&f=webp&q=900'
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
.container{
  height: 100%;
  background: #F5F5F5;
  padding-top: 60px;
  ul {
    width: 80%;
    margin: 0 auto;
    li {
      list-style: none;
      width: 200px;
      height: 260px;
      background: white;
      margin: 0;
      padding: 0;
      margin-left: 14px;
      float: left;
      transition: box-shadow .5s,transform .5s;
      text-align: center;
      &:hover {
        box-shadow: 0 15px 30px rgba(0,0,0,.1);;
        transform: translateY(-2px);
        cursor: pointer;
      }
      img {
        width: 160px;
      }
      .title {
        font-size: 14px;
        font-weight: 400;
        color: #333;
        margin: 0;
      }
      .desc {
        margin: 0;
        margin-top: 2px;
        font-size: 12px;
        color: #b0b0b0;
        text-overflow: ellipsis;
        white-space: nowrap;
        overflow: hidden;
        height: 18px;
      }
      .price {
        color: #ff6700;
        font-size: 12px;
      }
    }
  }
}
</style>
