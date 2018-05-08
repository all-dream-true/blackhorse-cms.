<template>
  <div class="page pic-detail">
    <detail :article="picInfo">

      <div slot="pics">
        <vue-preview :slides="thumbs"></vue-preview>
      </div>

    </detail>

    <comment :id="$route.params.id"></comment>
  </div>
</template>

<script>
import detail from "../common/detail";

import comment from "../common/comment";

import axios from "axios";
export default {
  data() {
    return {
      picInfo: [],
      thumbs: []
    }
  },
  created() {
    axios({
      url: "http://www.escook.cn:3000/api/getthumimages/"+ this.$route.params.id
    }).then( res => {
      if( res.data.status == 0 ) {
        //后台数据只有一个src属性
        //vue-preview插件需要6个参数
        res.data.message.forEach( v => {
          v.msrc = v.src;
          v.alt = 'pic';
          v.title = '缩略图';
          v.w = 600;
          v.h = 400
        });
        this.thumbs = res.data.message;
      }
    });
    axios({
      url: "http://www.escook.cn:3000/api/getimageInfo/" + this.$route.params.id
    }).then( res => {
      if(res.data.status == 0 ) {
        this.picInfo = res.data.message[0];
      }
    });
  },
  components: {
    detail,
    comment
  }
}
</script>

<style>
.pic-detail{
    padding-left: 5px;
    padding-right: 5px;
}

.my-gallery img{
  /* width: 20%; */
  width: 100%;
  margin: 1%;
  box-shadow: 0 0 3px 0px;
}

figure{
    display: inline-block;
    margin: 5px;
    width: 20%;
}
</style>


