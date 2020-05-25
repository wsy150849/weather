<template>
  <div class="search">
    <div class="search-city">
      <span class="el-icon-location search-cityid">{{this.$store.state.data.city}}</span>
    </div>
    <div class="search-inp">
      <input type="text" v-model="cityName" @keydown.enter="searchCity" class="search-text" placeholder="请输入查询的城市" />
      <button class="search-btn" @ @click="searchCity">查询</button>
    </div>
  </div>
</template>
<script>
export default {
    data() {
        return {
            btnBool:true,
            cityName:'',
            followCity:[]
        }
    },
    methods: {
        // changeBtnBool(){
        //     this.btnBool=!this.btnBool
        //     if(this.btnBool){
        //       this.followCity.filter(item=>{
        //         console.log(item)
        //         console.log(this.$store.state.data.city)
        //         return item!=this.$store.state.data.city
        //       })
        //       console.log(this.followCity)
        //     }else{
        //       this.followCity.push(this.$store.state.data.city)
        //       console.log(this.followCity)
        //     }
        // },
        searchCity(){
            this.$store.dispatch('getData',this.cityName)
            this.$store.dispatch('getSevenDate',this.cityName)
            this.cityName=''
        }
    },
};
</script>
<style lang="scss" scoped>
.search {
  width: 100%;
  height: 100px;
  background-color: #0f62c2;
  .search-city {
    height: 100%;
    float: left;
    padding: 0 20px;
    .search-cityid {
      display: inline-block;
      height: 100px;
      line-height: 100px;
      font-size: 24px;
      color: blanchedalmond;
      margin-right: 10px;
    }
    .search-cityBtn {
      height: 100px;
      line-height: 100px;
      color: blanchedalmond;
      cursor: pointer;
    }
    // .follow{
    //   width: 100%;
    //   height: auto;
    //   p{
    //     padding: 10px 0;
    //     color: #c8c8c8;
    //   }
    //   .follow-ul{
    //     width: 100%;
    //     height: auto;
    //     list-style: none;
    //     li{
    //       width: 100%;
    //       height: 40px;
    //       background-color: #fff;
    //     }
    //   }
    // }
  }
  .search-inp {
    height: 100%;
    float: right;
    padding: 0 20px;
    line-height: 100px;
    .search-text {
      width: 200px;
      height: 30px;
      border-radius: 15px;
      padding-left: 1rem;
      font-size: 18px;
      border: 0;
      outline: none;
      margin-right: 10px;
    }
    .search-btn {
      width: 50px;
      height: 30px;
      border-radius: 15px;
      outline: none;
      border: 0;
      background-image: linear-gradient(#0f62c2, #3a99db);
      color: blanchedalmond;
    }
  }
}
</style>