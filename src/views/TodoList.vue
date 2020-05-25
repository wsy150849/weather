<template>
  <div class="todolist">
    <header>
      <form action="javascript:postaction()" id="form">
        <label for="title">ToDoList</label>
        <input
          type="text"
          id="title"
          name="title"
          placeholder="添加ToDo"
          v-model="text"
          @keydown.enter="getToDoList"
        />
      </form>
    </header>
    <section>
      <h2 onclick="save()">
        正在进行
        <span id="todocount">{{this.index}}</span>
      </h2>
      <ul id="todolist" class="demo-box">
        <li v-show="!item.bool" draggable="true" v-for="(item,i) in this.todolist" :key="i">
          <input type="checkbox" :checked="item.bool" @change="toggle($event,item.index)" />
          <p id="p-1" onclick="edit(1)">{{item.text}}</p>
          <a class="el-icon-delete" @click="removeTodo(item.index)" href="javascript:remove(1)"></a>
        </li>
      </ul>
      <h2>
        已经完成
        <span id="donecount">{{this.index2}}</span>
      </h2>
      <ul id="donelist">
        <li v-show="item.bool" draggable="true" v-for="(item,i) in this.todolist" :key="i">
          <input type="checkbox" :checked="item.bool" @change="toggle($event,item.index)" />
          <p id="p-1" onclick="edit(1)">{{item.text}}</p>
          <a class="el-icon-delete" @click="removeTodo2(item.index)" href="javascript:remove(1)"></a>
        </li>
      </ul>
    </section>
    <footer>
      todolist
      <a href="javascript:clear();">clear</a>
    </footer>
  </div>
</template>
<script>
export default {
  data() {
    return {
      todolist: [],
      text: "",
      index: 0,
      //   okList: [],
      index2: 0
    };
  },
  methods: {
    getToDoList() {
      if (this.text) {
        this.todolist.push({
          index: this.index++,
          text: this.text,
          bool: false
        });
        console.log(this.todolist);
        this.text = "";
      } else {
        this.$message({
          type: "info",
          message: "文本框不能为空"
        });
      }
    },
    removeTodo(index) {
      this.todolist = this.todolist.filter(todo => todo.index !== index);
      this.index--;
    },
    removeTodo2(index) {
      this.todolist = this.todolist.filter(todo => todo.index !== index);
      this.index2--;
    },
    toggle(e, i) {
      console.log(e.target.checked, i);
      let bool = e.target.checked;
      if (bool) {
        this.index2++;
        this.index--;
      } else {
        this.index++;
        this.index2--;
      }
      this.todolist = this.todolist.map(todo => {
        if (todo.index === i) {
          return { ...todo, bool };
        }
        return todo;
      });
    },
    getOklist() {
      this.todolist = this.$store.state.todolist;
      this.index=this.$store.state.index
      this.index2=this.$store.state.index2
    //   console.log(this.todolist)
    }
  },
  beforeRouteLeave(to, from, next) {
    this.$store.commit("settodolist", this.todolist,this.index,this.index2);
    this.$store.commit("setIndex", this.index);
    this.$store.commit("setIndex2", this.index2);
    next();
  },
  mounted() {
      this.getOklist()
  },
};
</script>
<style lang="scss" scoped>
.todolist {
  width: 100%;
  height: auto;
  background-image: linear-gradient(#0f62c2, #3a99db);
  header {
    height: 50px;
    background: #333;
    background: rgba(47, 86, 194, 0.98);
    #form {
      width: 100%;
      height: 100%;
      display: block;
      margin-top: 0em;
      label {
        float: left;
        width: 100px;
        line-height: 50px;
        color: #ddd;
        font-size: 24px;
        margin-left: 20px;
        cursor: pointer;
        font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
      }
      input {
        float: right;
        width: 60%;
        height: 24px;
        margin-top: 12px;
        margin-right: 20px;
        text-indent: 10px;
        border-radius: 5px;
        box-shadow: 0 1px 0 rgba(255, 255, 255, 0.24),
          0 1px 6px rgba(0, 0, 0, 0.45) inset;
        border: none;
      }
    }
  }
  section {
    width: 600px;
    padding: 0 10px;
    margin: 0 auto;
    // margin-top: 30px;
    h2 {
      position: relative;
      display: block;
      font-size: 1.5em;
      margin-block-start: 0.83em;
      margin-block-end: 0.83em;
      margin-inline-start: 0px;
      margin-inline-end: 0px;
      font-weight: bold;
      text-align: left;
      span {
        position: absolute;
        top: 2px;
        right: 5px;
        display: inline-block;
        padding: 0 5px;
        height: 20px;
        border-radius: 20px;
        background: #e6e6fa;
        line-height: 22px;
        text-align: center;
        color: #666;
        font-size: 14px;
      }
    }
    ul {
      padding: 0;
      list-style: none;
      display: block;
      //   list-style-type: decimal;
      //   margin-block-start: 1em;
      //   margin-block-end: 1em;
      //   margin-inline-start: 0px;
      //   margin-inline-end: 0px;
      //   padding-inline-start: 40px;
      li {
        height: 32px;
        line-height: 32px;
        background: #fff;
        position: relative;
        margin-bottom: 10px;
        padding: 0 45px;
        border-radius: 3px;
        border-left: 5px solid #629a9c;
        box-shadow: 0 1px 2px rgba(0, 0, 0, 0.07);
        text-align: left;
        input[type="checkbox" i] {
          position: absolute;
          top: 4px;
          left: 10px;
          width: 22px;
          height: 22px;
          cursor: pointer;
        }
        p {
          display: block;
          margin-block-start: 1em;
          margin-block-end: 1em;
          margin-inline-start: 0px;
          margin-inline-end: 0px;
        }
        a {
          position: absolute;
          top: 2px;
          right: 5px;
          display: inline-block;
          //   width: 14px;
          //   height: 12px;
          border-radius: 14px;
          border: 6px double #fff;
          background: #ccc;
          line-height: 14px;
          text-align: center;
          color: #fff;
          font-weight: bold;
          font-size: 14px;
          cursor: pointer;
        }
      }
    }
  }
}
</style>