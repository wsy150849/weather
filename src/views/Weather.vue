<template>
  <div class="weather">
   <Search/>
   <WeatherMain/>
  </div>
</template>
<script>
import Search from '../components/weather/weather-search'
import WeatherMain from '../components/weather/weather-main'
export default {
  data() {
    return {
     
    };
  },
  components: {
    Search,
    WeatherMain
  },
  methods: {
    defauleData(){
      this.$store.dispatch('getData')
      this.$store.dispatch('getSevenDate')
    }
    
  },
  mounted() {
   this.defauleData()
  }
};
</script>
<style lang="scss" scoped>
.weather{
  width: 100%;
  height: auto;
}
</style>