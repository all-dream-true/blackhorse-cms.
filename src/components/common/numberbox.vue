<template>
    <div class="mui-numbox-cms">
        <button class="mui-btn mui-btn-numbox-minus-cms" type="button" @click="minus">-</button>
        <input class="mui-input-numbox-cms" type="number" v-model="num"/>
        <button class="mui-btn mui-btn-numbox-plus-cms" type="button" @click="plus">+</button>
    </div>
</template>

<script>
export default {
  data() {
    return {
      num: 0
    };
  },
  methods: {
    minus() {
      if (this.num >= this.min + this.step) {
        this.num -= this.step;
        this.$emit("input", this.num);
      }
    },
    plus() {
      if (this.num <= this.min + this.step) {
        this.num += this.step;
        this.$emit("input", this.num);
      }
    }
  },
  watch: {
    value: {
      handler(nv, ov) {
        this.num = nv;
        // console.log(nv);
      },
      immediate: true
    }
  },
  props: ["max", "min", "step", "value"]
};

// 如果要在一个组件上使用v-model指令
// 1. 这个组件必须通过props来接收一个value值
// 2. 在组件中数据发生变化的时候，需要手动触发input事件通知外面数据变化了
</script>

<style>

.mui-numbox-cms
{
    position: relative;

    display: inline-block;
    overflow: hidden;

    width: 120px;
    height: 35px;
    padding: 0 40px 0 40px;

    vertical-align: top;
    vertical-align: middle;

    border: solid 1px #bbb;
    border-radius: 3px;
    background-color: #efeff4;
}
.mui-numbox-cms [class*=numbox-btn], .mui-numbox-cms [class*=btn-numbox]
{
    font-size: 18px;
    font-weight: normal;
    line-height: 100%;

    position: absolute;
    top: 0;

    overflow: hidden;

    width: 40px;
    height: 100%;
    padding: 0;

    color: #555;
    border: none;
    border-radius: 0;
    background-color: #f9f9f9;
}
.mui-numbox-cms [class*=numbox-btn]:active, .mui-numbox-cms [class*=btn-numbox]:active
{
    background-color: #ccc;
}
.mui-numbox-cms [class*=numbox-btn][disabled], .mui-numbox-cms [class*=btn-numbox][disabled]
{
    color: #c0c0c0;
}
.mui-numbox-cms .mui-numbox-cms-btn-plus, .mui-numbox-cms .mui-btn-numbox-plus-cms
{
    right: 0;

    border-top-right-radius: 3px;
    border-bottom-right-radius: 3px;
}
.mui-numbox-cms .mui-numbox-cms-btn-minus, .mui-numbox-cms .mui-btn-numbox-minus-cms
{
    left: 0;

    border-top-left-radius: 3px;
    border-bottom-left-radius: 3px;
}
.mui-numbox-cms .mui-numbox-cms-input, .mui-numbox-cms .mui-input-numbox-cms
{
    display: inline-block;
    overflow: hidden;

    width: 100% !important;
    height: 100%;
    margin: 0;
    padding: 0 3px !important;

    text-align: center;
    text-overflow: ellipsis;
    word-break: normal;

    border: none !important;
    border-right: solid 1px #ccc !important;
    border-left: solid 1px #ccc !important;
    border-radius: 0 !important;
}

.mui-input-row .mui-numbox-cms
{
    float: right;

    margin: 2px 8px;
}

</style>


