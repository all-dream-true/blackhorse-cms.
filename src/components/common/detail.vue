<template>
  <div class="news-detail">
      <div class="news-title">
          <h4>{{ article.title }}</h4>
          <p class="news-info">
              <span>发表时间：{{ article.add_time | dateformat( "YYYY年MM月DD日 HH:mm:ss" )}}</span>
              <span class="mui-pull-right">点击：{{ article.click }}次</span>
          </p>
          <hr>
      </div>

      <slot name="pics"></slot>

      <div class="news-content" v-html="article.content">

      </div>
  </div>
</template>

<script>
import dateformat from "../../filter/dateformat";

export default {
    props: [ "article" ],
    filters: {
        dateformat
    }
}
</script>

<style>
.news-content img {
    width: 100%;
}
</style>


