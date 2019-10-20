<template>
  <div class="container">
    <div class="list-container">
      <div class="item" v-for="(item, index) in list" :key="index">
        <div class="img-swrapper">
          <img :src="item.cover" />
          <div class="item-mask">
            <div class="inner-container">
              <div class="inner-title">{{ item.name }}</div>
              <div class="p2">{{ item.describe }}</div>
              <div class="p2">
                <span v-if="!item.endDate">开启时间：{{ item.startDate }}</span>
                <span v-else>{{ item.startDate }} - {{ item.endDate }}</span>
              </div>
            </div>
          </div>
        </div>
        <div class="name">{{ item.name }}</div>
        <div class="tip">
          <span class="overtime">{{ item.end }}</span>
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
          startDate: '2019-10-19',
          endDate: null,
          describe: '希望各位玩家保持良好游戏行为，一起营造健康的游戏环境！',
          tag: null,
          cover: require('../../assets/images/image_001.jpg')
        },
        {
          name: '小小英雄第四系列',
          end: '长期活动',
          startDate: '2019-10-19',
          endDate: null,
          describe: '软软、小志、团子，向你报到！',
          tag: null,
          cover: require('../../assets/images/image_003.jpg')
        },
        {
          name: '西部魔影2019',
          end: '7天后结束',
          startDate: '2019-10-19',
          endDate: '2019-10-30',
          describe: '全新皮肤、炫彩礼包上架',
          tag: 'new',
          cover: require('../../assets/images/image_002.jpg')
        },
        {
          name: '每周限时优惠',
          end: '已结束',
          startDate: '2019-10-19',
          endDate: '2019-10-30',
          describe: '每周精选英雄/皮肤 5折销售！',
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
    background: #eeeeee;
    width: 80%;
    margin: 0 auto;
    margin-top: 60px;
    border: 1px #ddd solid;
    .item {
      width: 193px;
      height: 277.98px;
      background: #fefefe;
      margin-top: 20px;
      margin-bottom: 20px;
      display: inline-block;
      margin-left: 10px;
      transition: transform 0.3s;
      &:hover {
        transform: translateY(-10px);
        cursor: pointer;
        .name {
          color: #1da6ba;
        }

        .img-swrapper {
          .item-mask {
            opacity: 1;
          }
        }
      }
      .img-swrapper {
        width: 100%;
        height: 193px;
        position: relative;
        img {
          width: 100%;
          height: 100%;
        }
        .item-mask {
          position: absolute;
          width: 100%;
          height: 100%;
          top: 0;
          background: url(../../assets/images/image_005.png) repeat;
          opacity: 0;
          display: flex;
          align-items: center;
          .inner-container {
            width: 100%;
            text-align: center;
            padding: 0 10px;
            .inner-title {
              font-weight: 400;
              font-size: 16px;
              color: #cdbe91;
              margin-bottom: 2px;
            }
            .p2 {
              line-height: 1.5;
               font-size: 12px;
               color: #9d9c9c;
            }
          }
        }
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
        .overtime {
          color: #1da6ba;
        }
        .tag {
          color: #fefefe;
          float: right;
          margin-right: 10px;
          background: #cca45a;
          padding: 0 1px;
          padding-right: 2px;
          border-radius: 2px;
        }
      }
    }
  }
}
</style>
