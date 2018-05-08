<template>
  <div id="app">
    <mt-header fixed  title="上海前端黑马19期">
      <mt-button icon="back" slot="left" v-if="$route.path!='/home'" @click="$router.go(-1)">返回</mt-button>
    </mt-header>

    <router-view></router-view>

    <nav class="mui-bar mui-bar-tab">
			<router-link id="defaultTab" class="mui-tab-item-cms" to="/home">
				<span class="mui-icon mui-icon-home"></span>
				<span class="mui-tab-label">首页</span>
			</router-link>
			<router-link class="mui-tab-item-cms" to="/member">
				<span class="mui-icon mui-icon-contact"></span>
				<span class="mui-tab-label">会员</span>
			</router-link>
			<router-link class="mui-tab-item-cms" to="/cart">
				<span class="mui-icon mui-icon-extra mui-icon-extra-cart"><span class="mui-badge">9</span></span>
				<span class="mui-tab-label">购物车</span>
			</router-link>
			<router-link class="mui-tab-item-cms" to="/search">
				<span class="mui-icon mui-icon-search"></span>
				<span class="mui-tab-label">搜索</span>
			</router-link>
		</nav>
  </div>
</template>

<script>
export default {
  name: "App"
};
</script>

<style>
* {
  margin: 0;
  padding: 0;
}

body{
	background-color: #fff;
}

.page{
	padding: 40px 0px 50px 0px;
}

.mint-header.is-fixed{
	z-index: 999;
}


.mui-bar-tab .mui-tab-item-cms.mui-active {
    color: #007aff;
}

.mui-bar-tab .mui-tab-item-cms {
    display: table-cell;
    overflow: hidden;
    width: 1%;
    height: 50px;
    text-align: center;
    vertical-align: middle;
    white-space: nowrap;
    text-overflow: ellipsis;
    color: #929292;
}

.mui-bar-tab .mui-tab-item-cms .mui-icon {
    top: 3px;
    width: 24px;
    height: 24px;
    padding-top: 0;
    padding-bottom: 0;
}

.mui-bar-tab .mui-tab-item-cms .mui-icon ~ .mui-tab-label {
    font-size: 11px;
    display: block;
    overflow: hidden;
    text-overflow: ellipsis;
}
</style>
