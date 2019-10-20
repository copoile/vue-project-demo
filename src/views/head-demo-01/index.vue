<template>
  <div class="container">
      <div class="head" :class="{'head_hover':active!=''}">
        <div class="head_t" @mouseleave="mouseleave">
          <div class="head_inner">
            <ul>
              <li v-for="(item,index) in items" :key="index"  @mouseenter="mouseover(index)" >
                <a href="#" :style="activeIndex==index?active:''">
                  {{ item.name }}
                  <span :style="activeIndex==index?active:''">HOME</span>
                </a>
                <span class="line" :class="{'active-line':active!=''&&activeIndex==index}" @mouseenter="mouseover(index)">-</span>
              </li>
            </ul>
          </div>
        </div>
        <div class="head_b" :style="show">
          <div class="head_inner" @mouseleave="mouseleave">
            <ul v-for="(item,index) in items" :key="index" @mouseenter="mouseover(index)">
              <li v-for="(item2,index2) in items[index].list" :key="index2">
                <a href="#">{{ item2.name }}</a>
              </li>
            </ul>
          </div>
        </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      active: 'color:#ec4828',
      show: '',
      activeIndex: -1,
      items: [
        {
          name: '官网首页',
          list: [
            {
              name: '世界观',
              path: '/'
            },
            {
              name: '周边商城',
              path: '/'
            },
            {
              name: '道聚城',
              path: '/'
            }
          ]
        },
        {
          name: '游戏资料',
          list: [
            {
              name: '新闻公告',
              path: '/'
            },
            {
              name: '版本专题',
              path: '/'
            },
            {
              name: '职业攻略',
              path: '/'
            },
            {
              name: '壁纸时装',
              path: '/'
            },
            {
              name: '视频中心',
              path: '/'
            }
          ]
        },
        {
          name: '活动',
          list: [
            {
              name: '官方活动',
              path: '/'
            },
            {
              name: '合作活动',
              path: '/'
            },
            {
              name: '媒体活动',
              path: '/'
            },
            {
              name: '网吧特权',
              path: '/'
            },
            {
              name: '玩家共创',
              path: '/'
            }
          ]
        },
        {
          name: '赛事',
          list: [
            {
              name: 'F1天王赛',
              path: '/'
            },
            {
              name: '职业联赛',
              path: '/'
            },
            {
              name: '职业第一人',
              path: '/'
            },
            {
              name: 'DPL赛事',
              path: '/'
            }
          ]
        },
        {
          name: '用户服务',
          list: [
            {
              name: '充值',
              path: '/'
            },
            {
              name: '兑换CDKEY',
              path: '/'
            },
            {
              name: '角色恢复',
              path: '/'
            },
            {
              name: '圣耀服务',
              path: '/'
            }
          ]
        },
        {
          name: '游戏安全',
          list: [
            {
              name: '安全任务',
              path: '/'
            },
            {
              name: '处罚申诉',
              path: '/'
            },
            {
              name: '视频举报',
              path: '/'
            },
            {
              name: '被盗找回',
              path: '/'
            },
            {
              name: '信用星级',
              path: '/'
            }
          ]
        },
        {
          name: '玩家社区',
          list: [
            {
              name: '微博',
              path: '/'
            },
            {
              name: '问答',
              path: '/'
            },
            {
              name: 'DNF助手',
              path: '/'
            },
            {
              name: '微信',
              path: '/'
            }
          ]
        }
      ]
    }
  },
  methods: {
    mouseover (index) {
      this.show = 'display:block'
      this.activeIndex = index
    },
    mouseleave () {
      this.show = ''
      this.activeIndex = -1
    }
  }
}
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 100%;
  background: url(../../assets/images/image_007.jpeg);
  background-color: #fff;
  background-position: center 0;
  background-repeat: no-repeat;
  ul {
    margin: 0;
    padding: 0;
  }
  li {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  a {
    display: inline-block;
    margin: 0 auto;
    color: white;
    font-size: 17px;
    text-decoration: none;
    text-align: center;
  }
  .head {
    height: 372px;
    position: relative;
    background: url(../../assets/images/image_008.png);
    background-position: center 0px;
    background-repeat: repeat;
    .head_inner {
      width: 1440px;
      margin: 0 auto;
      color: white;
    }
    .head_t {
      position: absolute;
      left: 0;
      width: 100%;
      height: 88px;
      z-index: 2;
      top: 20px;
      background: url(../../assets/images/image_006.png) no-repeat;
      background-position: center 85px;
        ul {
          overflow: hidden;
          width: 1000px;
          margin-left: 263px;
          li {
            width: 137px;
            height: 88px;
            text-align: center;
            cursor: pointer;
            display: flex;
            align-items: center;
            float: left;
            overflow: hidden;
            position: relative;
            transform: perspective(1px) translateZ(0);
            .line {
              display: none;
            }
            .active-line {
              display: block;
              position: absolute;
              width: 100%;
              height: 5px;
              color: #ec4828;
              bottom: 0;
              background: #ec4828;
            }
            span {
              display: block;
              color: #777777;
              font-size: 12px;
              text-align: center;
              transform: scale(.7);
            }
            &:hover {
              a,span {
                color: #ec4828;
              }
            }
          }
        }
    }
    .head_b {
      width: 100%;
      display: none;
      position: absolute;
      top: 105px;
      height: 185px;
      width: 100%;
      .head_inner {
        ul:first-child {
          margin-left: 263px;
        }
      }
      ul {
        li:first-child {
          margin-top: 10px;
        }
        width: 137px;
        text-align: center;
        float: left;
        min-height: 185px;
        li {
          line-height: 30px;
          &:hover {
            a {
              color: #ec4828;
            }
          }
          a {
            font-size: 14px;
          }
        }
      }
    }
  }
  .head_hover{
    background: url(../../assets/images/image_009.png);
    background-position: center -43px;
    background-repeat: no-repeat;
  }
}
</style>
