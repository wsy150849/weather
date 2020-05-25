import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    cityName: '',
    data: {},
    sevenData: {},
    suggestion: {
      air: {},
      comf: {},
      cw: {},
      drsg: {},
      flu: {},
      sport: {},
      trav: {},
      uv: {}
    },
    todolist: [],
    index: 0,
    index2: 0,
    weatherImg: {
      xue: 'https://tianqi2.sogoucdn.com/pc/static/img/w36/xiaoxue.png',
      lei: 'https://tianqi3.sogoucdn.com/pc/static/img/w36/leizhenyu.png',
      shachen: 'https://tianqi2.sogoucdn.com/pc/static/img/w36/shachenbao.png',
      wu: 'https://tianqi2.sogoucdn.com/pc/static/img/w36/wu.png',
      bingbao: 'https://tianqi2.sogoucdn.com/pc/static/img/w36/daxue.png',
      yun: 'https://tianqi2.sogoucdn.com/pc/static/img/w36/duoyun.png',
      yu: 'https://tianqi3.sogoucdn.com/pc/static/img/w36/dayu.png',
      yin: 'https://tianqi3.sogoucdn.com/pc/static/img/w36/yin.png',
      qing: 'https://tianqi2.sogoucdn.com/pc/static/img/w36/qing.png'
    },
    essay: {},
    serial: {},
    question: {},
    imgRead:[]
  },
  getters: {

  },
  mutations: {
    setData(state, item) {
      state.data = item
      // console.log(state.data)
    },
    setSevenData(state, item) {
      state.sevenData = item
      // console.log(state.sevenData)
    },
    setSuggestion(state, item) {
      state.suggestion = {
        air: item.air,
        comf: item.comf,
        cw: item.cw,
        drsg: item.drsg,
        flu: item.flu,
        sport: item.sport,
        trav: item.trav,
        uv: item.uv
      }
      // console.log(state.suggestion)
    },
    settodolist(state, item) {
      state.todolist = item
      // console.log(state.todolist)
    },
    setIndex(state, item) {
      state.index = item
    },
    setIndex2(state, item) {
      state.index2 = item
    },
    setReads(state, item) {
      state.essay = item.essay ? item.essay : item;
      state.serial = item.serial ? item.serial : '';
      state.question = item.question ? item.question : '';
    },
    setImgRead(state,item){
      state.imgRead=item
    }
  },
  actions: {
    getData({ commit, dispatch }, index) {
      if (index) {
        axios.get(`https://www.tianqiapi.com/free/day?appid=53714127&appsecret=Eiiw4u44&city=${index}`).then(res => {
          // console.log(res.data)
          commit('setData', res.data)
          dispatch('getMatters', res.date.city)
        })
      } else {
        axios.get('https://www.tianqiapi.com/free/day?appid=53714127&appsecret=Eiiw4u44').then(res => {
          // console.log(res.data)
          commit('setData', res.data)
          dispatch('getMatters', res.data.city)
        })
      }
    },
    getSevenDate({ commit }, index) {
      // https://www.tianqiapi.com/free/week?appid=53714127&appsecret=Eiiw4u44
      if (index) {
        axios.get(`https://www.tianqiapi.com/free/week?appid=53714127&appsecret=Eiiw4u44&city=${index}`).then(res => {
          // console.log(res.data)
          commit('setSevenData', res.data.data)
        })
      } else {
        axios.get('https://www.tianqiapi.com/free/week?appid=53714127&appsecret=Eiiw4u44').then(res => {
          // console.log(res.data)
          commit('setSevenData', res.data.data)
        })
      }
    },
    //获取天气各项事宜
    getMatters({ commit }, index) {
      // console.log(index)
      //https://bird.ioliu.cn/weather?city=%E6%B0%B8%E5%B7%9E
      axios.get(`https://bird.ioliu.cn/weather?city=${index}`).then(res => {
        // console.log(res.data.suggestion)
        commit("setSuggestion", res.data.suggestion)
      })
    },
    //获取文章
    getReads({ commit }) {
      axios
        .get(
          "http://v3.wufazhuce.com:8000/api/channel/reading/more/0?channel=wdj&version=4.0.2"
        )
        .then(res => {
          // console.log(res.data.data);
          commit("setReads", res.data.data)
        });
    },
    //获取图片
    getImgdata({ commit }) {
      axios.get("http://v3.wufazhuce.com:8000/api/onelist/idlist/?channel=wdj&version=4.0.2").then(res => {
        // console.log(res.data.data[0])
        let i=res.data.data[0]
        axios.get(`http://v3.wufazhuce.com:8000/api/onelist/${i}/0?channel=wdj&version=4.0.2`).then(res => {
          // console.log(res.data.data.content_list)
          commit('setImgRead',res.data.data.content_list)
        })
      })
    }
  },
  modules: {
  }
})
