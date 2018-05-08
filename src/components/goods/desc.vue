<template>
  <div class="page details">
    <detail :article="goodsInfo"></detail>
  </div>
</template>

<script>
import detail from "../common/detail";

import axios from "axios";

export default {
  data() {
    return {
      goodsInfo: []
    }
  },
  created() {
    axios({
      url: "http://www.escook.cn:3000/api/goods/getdesc/" + this.$route.params.id
    }).then( res => {
      if( res.data.status == 0 ) {
        this.goodsInfo = res.data.message[0];
      }
    })
  },
  components: {
    detail
  }
}
</script>

<style>
.details {
  padding-left: 10px;
  padding-right: 10px;
}
</style>


