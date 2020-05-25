<template>
  <div class="read">
    <!-- 文章 -->
    <div class="read-content l">
      <!-- 散文 -->
      <span class="title">
        <h2>一个阅读</h2>
      </span>
      <div class="essay">
        <ul>
          <li class="essay-item" v-for="(item,i) in this.$store.state.essay" :key="i" @click="pushRouter(item.item_id)">
            <div class="item-box">
              <div class="leftimg l">
                <img :src="`${item.img_url}`" />
              </div>
              <div class="rightnr l">
                <span class="essay-title">
                  <p>{{item.title}}</p>
                </span>
                <span class="essay-forward">{{item.forward}}</span>
                <p class="date">{{item.post_date}}</p>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <!-- 图片句子 -->
    <div class="img-contsnt r">
      <span class="title">
        <h2>一个图文</h2>
      </span>
      <ul>
        <li class="img-item" v-for="(item,i) in this.$store.state.imgRead" :key="i" @click="pushRouter(item.item_id)">
          <div class="picture-detail">
            <img
              class="item-picture-img"
              :src="`${item.img_url}`"
              alt="首页图"
            />
            <p class="text-author">
              <span class="picture-detail-issue-no l">{{item.volume}}</span>摄影 | {{item.pic_info?item.pic_info:'无名'}}
            </p>
            <p class="day">23</p>
            <p class="month">May. 2020</p>
            <div class="separate-line"></div>
            <p class="text-content">{{item.forward}}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  methods: {
    getReadData() {
      this.$store.dispatch("getReads");
      this.$store.dispatch("getImgdata");
    },
    pushRouter(index){
      this.$router.push({name:'content',query: {id:index}})
    }
  },
  mounted() {
    this.getReadData();
  }
};
</script>
<style lang="scss" scoped>
.l {
  float: left;
}
.r {
  float: right;
}
.read {
  width: 100%;
  height: auto;
  cursor: pointer;
  .read-content {
    width: 60%;
    height: auto;
    text-align: left;
    .title {
      display: block;
      padding: 5px 10px;
      border-bottom: 1px #ddd solid;
    }
    .essay {
      width: 100%;
      height: 100px;
      ul {
        width: 100%;
        height: 150px;
        padding: 10px 0;
        .essay-item {
          width: 100%;
          height: 100%;
          padding: 0 10px 10px;
          .item-box {
            width: 100%;
            height: 100%;
            // background-color: #ddd;
            background: rgba($color: #ddd, $alpha: 0.5);
          }
        }
      }
    }
  }
}
.leftimg {
  width: 30%;
  height: 100%;
  background-color: #fff;
  overflow: hidden;
  img {
    width: 100%;
    height: 100%;
    transition: all 0.6s;
  }
  img:hover {
    transform: scale(1.4);
    -webkit-transform: scale(1.4);
  }
}
.rightnr {
  width: 70%;
  height: 100%;
  padding: 5px 10px;
  .essay-title {
    display: block;
    p {
      display: block;
      padding: 8px 0;
      font-size: 30px;
      font-family: microsoft yahei;
      color: #000;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    p:hover {
      color: red;
      text-decoration: underline;
    }
  }
  .essay-forward {
    display: block;
    color: #777;
    font-family: microsoft yahei;
    line-height: 20px;
    // overflow: hidden;
    // text-overflow: ellipsis;
    // white-space: nowrap;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
    word-break: break-all;
    overflow: hidden;
  }
  p.date {
    text-align: right;
    color: #c1c1c1;
  }
}

.img-contsnt {
  width: 40%;
  height: auto;
  padding: 0 10px;
  // background-color: #ccc;
  .title {
    display: block;
    padding: 5px 10px;
    border-bottom: 1px #ddd solid;
  }
  ul {
    width: 100%;
    height: auto;
    padding: 0 10px;
    font-size: 10px;
    text-align: left;
    .img-item {
      width: 100%;
      height: 250px;
      padding: 0 5px;
      border-bottom: 1px solid #ccc;
      .picture-detail {
        width: 100%;
        height: 100%;
        padding: 5px 0;
        .item-picture-img {
          width: 100%;
          height: 50%;
        }
        .text-author {
          text-align: right;
          margin: 10px 0;
        }
        .day {
          text-align: center;
          margin-top: 10px;
          font-size: 24px;
          line-height: 24px;
          margin-bottom: 0px;
          font-family: Serif;
        }
        .month {
          text-align: center;
        }
        .text-content {
          padding: 0 10px;
          line-height: 20px;
          margin-top: 5px;
          display: -webkit-box;
          initial-letter: 2rem;
          -webkit-box-orient: vertical;
          -webkit-line-clamp: 2;
          word-break: break-all;
          overflow: hidden;
        }
      }
    }
  }
}
</style>