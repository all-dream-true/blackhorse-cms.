<template>
  <div class="page">
    <div id="slid" class="mui-slider">
      <div id="sliderSegmentedControl" class="mui-scroll-wrapper mui-slider-indicator mui-segmented-control mui-segmented-control-inverted">
        <div class="mui-scroll">
          <router-link class="mui-control-item-cms" to="/pics/0">
            全部
          </router-link>

          <router-link class="mui-control-item-cms" v-for="(v, i) in categoryList" :key="i" :to="'/pics/' + v.id">
            {{ v.title }}
          </router-link>
        </div>
      </div>
      <ul>
        <li v-for="(v, i) in picsList" :key="i" @click="$router.push( '/pics/detail/' + v.id )">
          <img v-lazy="v.img_url" alt="">

          <div class="info">
            <h4>{{ v.title }}</h4>
            {{ v.zhaiyao }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
// babel-loader在转换js代码的时候，会默认的帮js代码加上严格模式
// caller callee  arguments 这几个东西，在严格模式下无法使用

// 解决方案（没用！）: 只需要设置babel-loader 让其在转换代码的时候，不要加严格模式即可
// 使用一个babel的插件，这个插件可以用来去除严格模式 (插件已经失效)

// 解决方案2（推荐）: 只需要配置babel-loader 让其在转换的时候，忽略掉mui的代码即可！
//   babel-loader    exclude

import mui from "../../assets/mui/js/mui";

import axios from "axios";

export default {
  data() {
    return {
      categoryList: [],
      picsList: []
    }
  },
  created() {
    this.getPicsList();
    axios({
      url: "http://www.escook.cn:3000/api/getimgcategory"
    }).then( res => {
      if( res.data.status == 0 ) {
        this.categoryList = res.data.message;
      }
    })
  },
  methods: {
    getPicsList() {
      axios({
        url: "http://www.escook.cn:3000/api/getimages/" + this.$route.params.id
      }).then( res => {
        if( res.data.status == 0 ) {
          this.picsList = res.data.message;
        }
      })
    }
  },
  watch: {
    "route": function(nv, ov) {
      //只要路由一变化就执行一次获取图片的操作
      this.getPicsList();
    }
  },
  mounted() {
    mui('.mui-scroll-wrapper').scroll({
  	  deceleration: 0.0005 //flick 减速系数，系数越大，滚动速度越慢，滚动距离越小，默认值0.0006
    });
  }
};
</script>

</script>
<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 10px;
}

ul li {
  margin: 10px 0;
  box-shadow: 0 0 15px #999;
  position: relative;
  background-color: #ccc;
}

ul li img {
  width: 100%;
  display: block;
}

ul li .info {
  position: absolute;
  bottom: 0;
  color: #fff;
  font-size: 12px;
  background-color: rgba(0, 0, 0, 0.4);
  max-height: 84px;
}

ul li .info h4 {
  font-size: 13px;
}


.mui-segmented-control.mui-segmented-control-inverted .mui-control-item-cms {
    color: inherit;
    border: 0;
}

.mui-segmented-control.mui-scroll-wrapper .mui-control-item-cms {
    display: inline-block;
    width: auto;
    padding: 0 20px;
    border: 0;
}

.mui-segmented-control .mui-control-item-cms {
    line-height: 38px;
    display: table-cell;
    overflow: hidden;
    width: 1%;
    -webkit-transition: background-color .1s linear;
    transition: background-color .1s linear;
    text-align: center;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #007aff;
    border-color: #007aff;
    border-left: 1px solid #007aff;
}

.mui-segmented-control.mui-segmented-control-inverted .mui-control-item-cms.mui-active {
    color: #007aff;
}


img[lazy=loading] {
  width: 40px;
  height: 300px;
  margin: auto;
}
</style>


