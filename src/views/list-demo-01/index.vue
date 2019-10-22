<template>
  <div class="container">
    <div class="list-container">
      <div class="item" v-for="(item,index) in list" :key="index">
        <div class="img-wrap">
          <img :src="item.cover"/>
        </div>
        <div class="name">{{ item.name }}</div>
        <div class="tip">
          <span class="ended">{{ item.end }}</span>
          <span class="tag" v-if="item.tag">{{ item.tag }}</span>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data () {
    return {
      list: [
        {
          name: '英雄联盟信誉分查询',
          end: '长期活动',
          tag: null,
          cover: require('../../assets/images/image_001.jpg')
        },
        {
          name: '小小英雄第四系列',
          end: '长期活动',
          tag: null,
          cover: require('../../assets/images/image_003.jpg')
        },
        {
          name: '西部魔影2019',
          end: '7天后结束',
          tag: 'new',
          cover: require('../../assets/images/image_002.jpg')
        },
        {
          name: '每周限时优惠',
          end: '已结束',
          tag: null,
          cover: require('../../assets/images/image_004.jpg')
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
  font-size: 14px;
  .list-container {
    background: #EEEEEE;
    width: 80%;
    margin: 0 auto;
    margin-top: 60px;
    border: 1px #ddd solid;
    .item {
      width: 193px;
      height: 277.98px;
      background: #FEFEFE;
      margin-top: 20px;
      margin-bottom: 20px;
      display: inline-block;
      margin-left: 10px;
      transition: transform .4s;
      &:hover {
        transform: translateY(-10px);
        cursor: pointer;
        .name {
          color: #1DA6BA;
        }
      }
      .img-wrap {
        width: 100%;
      }
      .name {
        margin-top: 2px;
        padding-left: 10px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
      }
      .tip {
        padding-left: 10px;
        margin-top: 20px;
        .ended {
          color: #1DA6BA;
        }
        .tag {
          color: #FEFEFE;
          float: right;
          margin-right: 10px;
          background: #CCA45A;
          padding: 2px;
          border-radius: 5px;
        }
      }
    }
  }
}
</style>
