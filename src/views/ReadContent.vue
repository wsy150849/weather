<template>
  <div class="content">
    <p class="text-title" style="margin-top:0px;">{{this.content.hp_title}}</p>
    <hr class="sort-separate-line sort-separate-line15" />
    <p class="text-author">文／{{this.content.author[0].user_name}}</p>

    <div class="text-content" v-html="`${this.content.hp_content}`"></div>

    <p class="page-sparate-title">作者</p>
    <hr class="sort-separate-line" style="margin-top: 15px;" />
    <table class="page-table">
      <tbody>
        <tr>
          <td style="width: 50px;">
            <img
              class="one-image-exclude avater"
              :src="`${this.content.author[0].web_url}`"
              :alt="`${this.content.author[0].user_name}`"
            />
          </td>
          <td>
            <div class="page-title">
              {{this.content.author[0].user_name}}
              <span
                style="font-size: 10px"
              >&nbsp;{{this.content.author[0].wb_name}}</span>
            </div>
            <div class="page-summary" style>{{this.content.author[0].summary}}</div>
          </td>
          <td width="60px">
            <span class="onem-author-follow-btn">关注</span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
export default {
  data() {
    return {
      content: {
        hp_title: "",
        hp_content: "",
        author: [
          {
            user_id: "",
            user_name: "",
            wb_name: "",
            summary: "",
            web_url: ""
          }
        ]
      }
    };
  },
  methods: {
    getContent() {
      this.$axios
        .get(
          `http://v3.wufazhuce.com:8000/api/essay/${this.$route.query.id}?channel=wdj&source=summary&source_id=9245&version=4.0.2`
        )
        .then(res => {
          this.content.hp_content = res.data.data.hp_content;
          this.content.author = res.data.data.author;
          this.content.hp_title=res.data.data.hp_title
        });
    }
  },
  mounted() {
    this.getContent();
  }
};
</script>
<style lang="scss" scoped>
.onem-author-follow-btn {
  font-size: 12px;
  line-height: 18px;
  padding: 6px 0px 6px 0px;
  width: 44px;
  text-align: center;
  color: #808080;
  display: inline-block;
  border-radius: 2px;
  border: 1px solid rgba(128, 128, 128, 0.6);
  background-color: white;
}
.page-summary {
  color: #808080;
  font-size: 10px;
  vertical-align: top;
}
.page-title {
  line-height: 20px;
  font-size: 14px;
  vertical-align: top;
}
.page-sparate-title {
  font-size: 15px;
  margin-top: 60px;
  padding: 0 20px;
  margin-bottom: 0;
}
.sort-separate-line {
  border: 2px solid #000;
  margin: 7px 20px;
  width: 70px;
}
.page-table {
  margin: 0 20px;
  width: 100%;
}
.one-image-exclude {
  text-align: center;
  width: 100%;
  max-width: 100%;
  border-radius: 50%;
}
.content {
  text-align: justify;
  padding: 20px;
  .text-title {
    color: black;
    font-size: 1.375em;
    margin: 94px 20px 0 20px;
    font-weight: bold;
    line-height: 1.3;
  }
  .sort-separate-line {
    border: 2px solid #000;
    margin: 7px 20px;
    width: 70px;
  }
  .text-author {
    color: black;
    font-size: 13px;
    margin-top: 14px;
    padding: 0 20px;
  }
  .text-content {
    padding: 10px 20px;
    p {
      line-height: 26px;
      margin-top: 14px;
      color: #000;
      margin: 0 0 20px 0;
      font-size: 16px !important;
    }
  }
}
</style>