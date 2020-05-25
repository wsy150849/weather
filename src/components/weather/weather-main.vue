<template>
  <div class="n-container">
    <div class="c-left">
      <div class="row1-wrapper">
        <div class="r1-num">
          <span
            class="num"
          >{{this.judgeDate()>18 ? this.$store.state.data.tem_night:this.$store.state.data.tem_day}}°</span>
        </div>
        <div class="r1-img">
          <img
            class="icon"
            :src="`${this.$store.state.weatherImg[this.$store.state.data.wea_img]}`"
            alt
          />
          <p class="text">{{this.$store.state.data.wea}}</p>
        </div>
      </div>
      <div class="row2">
        <p class="date">{{this.getday()}} {{this.week[this.judgeWeek()]}}</p>
        <p class="wind">
          <i class="el-icon-wind-power"></i>
          {{this.$store.state.data.win}} {{this.$store.state.data.win_speed}} {{this.$store.state.data.win_meter}}
        </p>
        <p class="livindex">
          <i class="el-icon-ship"></i>
          空气指数 :{{this.$store.state.data.air}}
          <span
            class="liv-img"
            :class="this.judgeAir(classAir)"
          >{{this.judgeAir(air)}}</span>
        </p>
      </div>
      <div class="row3">
        <p class="text">中国天气通{{this.$store.state.data.update_time}}发布</p>
        <span class="el-icon-sunrise day">早上温度：{{this.$store.state.data.tem_day}}°</span>
        <span class="el-icon-moon-night night">晚上温度：{{this.$store.state.data.tem_night}}°</span>
      </div>
    </div>
    <div class="c-right">
      <ul class="right-ul">
        <li
          class="right-item"
          :class="'active'+index"
          v-for="(item,index) in this.$store.state.sevenData"
          :key="index"
        >
          <p class="date">{{setTime(index)}}</p>
          <p class="text">{{setWeek(item.date)}}</p>
          <img class="icon" :src="`${getSevenImg(item.wea_img)}`" alt />
          <p class="des">{{item.wea}}</p>
          <p class="wind">{{item.win}} {{item.win_speed}}</p>
        </li>
      </ul>
      <!-- 生活事宜 -->
      <div class="life-index">
        <p class="life-index-title">今日生活指数</p>
        <ul class="life-index-ul">
          <li class="life-item">
            <div class="life-item1">
              <div class="life-item-icon">
                <span class="life-icon1"></span>
                <p class="life-item-title">穿衣</p>
              </div>
              <div class="life-item-txet box1">
                <span>{{this.$store.state.suggestion.drsg.txt}}</span>
              </div>
            </div>
          </li>
          <li class="life-item">
            <div class="life-item1">
              <div class="life-item-icon">
                <span class="life-icon2"></span>
                <p class="life-item-title">雨伞</p>
              </div>
              <div class="life-item-txet box2">
                <span>{{this.$store.state.suggestion.comf.txt}}</span>
              </div>
            </div>
          </li>
          <li class="life-item">
            <div class="life-item1">
              <div class="life-item-icon">
                <span class="life-icon3"></span>
                <p class="life-item-title">运动</p>
              </div>
              <div class="life-item-txet box3">
                <span>{{this.$store.state.suggestion.sport.txt}}</span>
              </div>
            </div>
          </li>
          <li class="life-item">
            <div class="life-item1">
              <div class="life-item-icon">
                <span class="life-icon4"></span>
                <p class="life-item-title">感冒</p>
              </div>
              <div class="life-item-txet box4">
                <span>{{this.$store.state.suggestion.flu.txt}}</span>
              </div>
            </div>
          </li>
          <li class="life-item">
            <div class="life-item1">
              <div class="life-item-icon">
                <span class="life-icon5"></span>
                <p class="life-item-title">洗车</p>
              </div>
              <div class="life-item-txet box5">
                <span>{{this.$store.state.suggestion.cw.txt}}</span>
              </div>
            </div>
          </li>
          <li class="life-item">
            <div class="life-item1">
              <div class="life-item-icon">
                <span class="life-icon6"></span>
                <p class="life-item-title">紫外线</p>
              </div>
              <div class="life-item-txet box6">
                <span>{{this.$store.state.suggestion.uv.txt}}</span>
              </div>
            </div>
          </li>
          <li class="life-item">
            <div class="life-item1">
              <div class="life-item-icon">
                <span class="life-icon7"></span>
                <p class="life-item-title">舒适度</p>
              </div>
              <div class="life-item-txet box7">
                <span>{{this.$store.state.suggestion.air.txt}}</span>
              </div>
            </div>
          </li>
          <li class="life-item">
            <div class="life-item1">
              <div class="life-item-icon">
                <span class="life-icon8"></span>
                <p class="life-item-title">出行</p>
              </div>
              <div class="life-item-txet box8">
                <span>{{this.$store.state.suggestion.trav.txt}}</span>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!--  -->
  </div>
</template>
<script>
export default {
  data() {
    return {
      air: ["优", "良", "差"],
      classAir: ["good", "fine", "difference"],
      week: [
        "星期天",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六"
      ]
      // sevenData:{}
    };
  },
  computed: {
    // setTime(i){
    //   let date=this.$store.state.sevenData[i].date.split('-')
    //   return date[1]+"-"+date[2]
    // }
  },
  methods: {
    judgeAir(index) {
      if (this.$store.state.data.air < 50) {
        return index[0];
      } else if (this.$store.state.data.air < 100) {
        return index[1];
      } else {
        return index[2];
      }
    },
    //判断早晚时间
    judgeDate() {
      var date = new Date();
      // console.log(date.getHours())
      return date.getHours();
    },
    //判断今天星期几
    judgeWeek() {
      var date = new Date();
      return date.getDay();
    },
    //获取今天的日期
    getday() {
      var date = new Date().toLocaleDateString();
      date = date.split("/").join("-");
      return date;
    },
    //对七天的日期进行设置
    setTime(i) {
      let date = this.$store.state.sevenData[i].date.split("-");
      return date[1] + "-" + date[2];
    },
    //对七天的星期进行设置
    setWeek(i) {
      var weekDay = [
        "星期天",
        "星期一",
        "星期二",
        "星期三",
        "星期四",
        "星期五",
        "星期六"
      ];
      var myDate = new Date(Date.parse(i.toString()));
      // console.log(weekDay[myDate.getDay()]);
      //获取今天的时间
      var date = new Date().toLocaleDateString();
      date = date.split("/");
      date[1] = "0" + date[1].toString();
      date = date.join("-");
      if (i == date) {
        return "今天";
      } else {
        return weekDay[myDate.getDay()];
      }
    },
    //获取七天天气图片
    getSevenImg(i) {
      return this.$store.state.weatherImg[i];
    }
  },
  mounted() {
    this.getday();
  }
};
</script>
<style lang="scss" scoped>
.n-container {
  width: 100%;
  height: 550px;
  background: url("https://tianqi3.sogoucdn.com/pc/static/img/qing.png")
    no-repeat -1000px;
  padding-top: 50px;
  .c-left {
    width: 25%;
    height: 452px;
    float: left;
    .row1-wrapper {
      width: 100%;
      // margin-top: 48px;
      text-align: center;
      overflow: hidden;
      padding-left: 20px;
      .r1-num {
        width: 40%;
        line-height: 80px;
        float: left;
        .num {
          font-size: 90px;
          color: rgb(252, 252, 252);
        }
      }
      .r1-img {
        float: right;
        padding: 0 10px;
        .icon {
          width: 48px;
          height: 48px;
          margin-bottom: 10px;
        }
        .text {
          font-size: 16px;
          color: white;
        }
      }
    }
    .row2 {
      margin-top: 65px;
      color: white;

      .date {
        margin-bottom: 25px;
        font-size: 20px;
      }
      .wind {
        i {
          padding-right: 10px;
        }
        margin-bottom: 23px;
        font-size: 20px;
      }
      .livindex {
        font-size: 20px;
        line-height: 24px;
        i {
          padding-right: 10px;
        }
        .liv-img {
          font-size: 12px;
          width: 50px;
          height: 24px;
          float: right;
          border-radius: 3px;
        }
        .good {
          background-color: #1fd71c;
        }
        .fine {
          background-color: #f2c300;
        }
        .difference {
          background-color: #fe8800;
        }
      }
    }
    .row3 {
      margin-top: 30px;
      font-size: 14px;
      color: white;
      span {
        display: inline-block;
        width: auto;
        height: 20px;
        margin: 0 20px;
      }
      .day {
      }
      .night {
      }
    }
  }
  .c-right {
    width: 75%;
    height: auto;
    float: right;
    .right-ul {
      width: 100%;
      height: auto;
      overflow: hidden;
      margin-bottom: 10px;
      .right-item {
        float: left;
        margin-left: 2px;
        width: 14%;
        height: 200px;
        background: rgba(255, 255, 255, 0.1);
        text-align: center;
        color: white;
        padding: 5px;
        .date {
          margin-top: 19px;
        }
        .text {
          margin-top: 6px;
        }
        .icon {
          width: 36px;
          height: 36px;
          margin-top: 20px;
        }
        .des {
          margin-top: 17px;
        }
        .wind {
          margin-top: 10px;
        }
      }
    }
    .life-index {
      width: 100%;
      height: auto;
      overflow: hidden;
      .life-index-title {
        font-size: 16px;
        color: #262626;
        padding: 10px 0 10px 20px;
        text-align: left;
        border-top: 1px solid #dadaad;
      }
      .life-index-ul {
        width: 100%;
        height: auto;
        overflow: hidden;
        padding-left: 5px;
        li {
          float: left;
          margin-left: 2px;
          width: 12%;
          height: 200px;
          text-align: center;
          color: #fff;
          .life-item1,
          .life-item2,
          .life-item3,
          .life-item4,
          .life-item5,
          .life-item6,
          .life-item7,
          .life-item8
           {
            width: 100%;
            height: 400px;
            background: rgba(255, 255, 255, 0.1);
            transition: all 0.5s linear;
            .life-item-icon {
              width: 100%;
              height: 200px;
              text-align: center;
              span {
                display: inline-block;
                width: 60px;
                height: 60px;
                margin: 40px 0;
              }
              .life-life-item-title {
                margin: 20px 0;
              }
            }
            .life-item-txet {
              width: 100%;
              height: 200px;
              padding: 10px 0 0;
            }
            .box1{
              background-color: #F59FA3;
            }
            .box2{
              background-color: #B39DD1;
            }
            .box3{
              background-color:#85C3F2;
            }
            .box4{
              background-color: #96A9D6;
            }
            .box5{
              background-color: #BFD48A;
            }
            .box6{
              background-color:#FAC489;
            }
            .box7{
              background-color: #FACC70;
            }
            .box8{
              background-color:#6BC2C2;
            }
          }
        }
      }
    }
  }
}
.active0:hover,
.active1:hover,
.active2:hover,
.active3:hover,
.active4:hover,
.active5:hover,
.active6:hover {
  opacity: 0.5;
}
.life-icon1 {
  background: url("https://tianqi2.sogoucdn.com/pc/static/img/livicon.png")
    no-repeat;
}
.life-icon2 {
   background: url("https://tianqi2.sogoucdn.com/pc/static/img/livicon.png")
    no-repeat -65px 0;
}
.life-icon3 {
  background: url("https://tianqi2.sogoucdn.com/pc/static/img/livicon.png")
    no-repeat 0 -65px;
}
.life-icon4 {
  background: url("https://tianqi2.sogoucdn.com/pc/static/img/livicon.png")
    no-repeat -65px -65px;
}
.life-icon5 {
  background: url("https://tianqi2.sogoucdn.com/pc/static/img/livicon.png")
    no-repeat 0 -130px;
}
.life-icon6 {
  background: url("https://tianqi2.sogoucdn.com/pc/static/img/livicon.png")
    no-repeat -65px -130px;
}
.life-icon7 {
  background: url("https://tianqi2.sogoucdn.com/pc/static/img/livicon.png")
    no-repeat 0 -195px;
}
.life-icon8 {
  background: url("https://tianqi2.sogoucdn.com/pc/static/img/livicon.png")
    no-repeat -65px -195px;
}
.life-item1:hover {
  transform: translateY(-200px);
}
</style>