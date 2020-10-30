<template>
  <div id="OrderSubmit">
    <div class="content1" id="content1">
      <div class="con1">
        <input type="checkbox" id="all" class="all" />
        <p>全选</p>
        <p>商品</p>
        <p>单价</p>
        <p>数量</p>
        <p>小计</p>
        <p>操作</p>
      </div>
      <div class="con2">
        <ul class="uls1">
          <input type="checkbox" class="jingdong" />
          <p class="uls1p2">京东自营</p>
        </ul>
        <ul class="uls1a">
          <p>满赠</p>
          <a href="#">活动商品满19，即可领取商品一件></a>
          <p>查看赠品</p>
          <a href="#">去凑单</a>
        </ul>
        <ul class="uls2" id="box">
          <input type="checkbox" class="all all1" v-model="select1" />
          <a href="#">
            <img src="img/aaa.jpg" alt="" />
            <p>
              OPPO R11全网通双卡双待 64G 32G<br />
              手机 玫瑰金色
            </p>
          </a>
          <p class="weight"><i id="weight">￥2000</i></p>
          <button class="min" @click="sub(1)">-</button>
          <input ref="add1" type="text" class="txt" v-model="num1" />
          <button class="add" @click="add(1)">+</button>
          <p class="xiaoji">
            <i id="xiaoji1">￥{{ add1 }}</i>
          </p>
          <p class="a666 b666">删除</p>
          <p class="a666">移到我的关注</p>
          <p class="a666">加到我的关注</p>
        </ul>
        <ul class="uls2" id="box2">
          <input type="checkbox" class="all all2" v-model="select2" />
          <a href="#">
            <img src="img/bbb.jpg" alt="" />
            <p>
              OPPO R11全网通双卡双待 64G 32G<br />
              手机 玫瑰金色
            </p>
          </a>
          <p class="weight"><i id="weight">￥3000</i></p>
          <button class="min" @click="sub(2)">-</button>
          <input ref="num1" type="text" class="txt" v-model="num2" />
          <button class="add" @click="add(2)">+</button>
          <p class="xiaoji">
            <i id="xiaoji1">￥{{ add2 }}</i>
          </p>
          <p class="a666 b666">删除</p>
          <p class="a666">移到我的关注</p>
          <p class="a666">加到我的关注</p>
        </ul>
        <div class="uls4">
          <div class="uls4L">
            <input type="checkbox" class="all" />
            <a href="#" class="delete">删除选中商品</a>
            <a href="#">移到我的关注</a>
            <a href="#">清除下柜商品</a>
          </div>
          <div class="uls4R">
            <div class="uls4a">
              <div class="uls4a1">
                <div class="aaa">
                  <p>已选择<i class="chose">0</i>件商品^</p>
                  <p>
                    总价：<span>￥</span><i>{{ num3 }}</i>
                  </p>
                </div>
                <p class="bbb">已节省：￥- 00.0</p>
              </div>
            </div>
            <div class="uls4b">
              <a href="gouwu.html" rel="external nofollow">去结算</a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="fixed">
      <p>京东商城</p>
      <span>您确认删除吗？</span>
      <button class="sure">确认</button>
      <button class="quxiao">取消</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      select1: false,
      select2: false,
      num1: 0,
      num2: 0,
      add1: 0,
      add2: 0,
    };
  },
  methods: {
    sub(index) {
      if (index == 1 && num1 > 0) num1--;
      else if (index == 2 && num2 > 0) num2--;
    },
    add(index) {
      if (index == 1) num1++;
      else if (index == 2) num2++;
    },
  },
  computed:{
      num3:function(){
        return 2000*this.num1*(this.select1?1:0)+3000*this.num2*(this.select2?1:0)
      }
  }
};
</script>

<style>
body,
div,
dl,
dt,
dd,
ul,
li,
h1,
h2,
h3,
h4,
h5,
h6,
code,
form,
input,
textarea,
p,
th,
td,
fieldset,
legend,
figure {
  margin: 0;
  padding: 0;
}
body {
  font-family: "微软雅黑", Arial;
}
ul,
ol {
  list-style: none;
}
a {
  text-decoration: none;
}
img {
  border: 0;
}

/* content1 */
.content1 {
  width: 100%;
}
.con1 {
  width: 952px;
  height: 36px;
  margin: 0 auto;
  background: #f3f3f3;
}
.con1 input {
  float: left;
  margin-top: 10px;
}
.con1 p {
  float: left;
  font-size: 12px;
  line-height: 36px;
}
.con1 p:nth-child(3) {
  margin-left: 60px;
}
.con1 p:nth-child(4) {
  margin-left: 300px;
}
.con1 p:nth-child(5) {
  margin-left: 93px;
}
.con1 p:nth-child(6) {
  margin-left: 93px;
}
.con1 p:nth-child(7) {
  margin-left: 93px;
}
.con1 p:nth-child(8) {
  margin-left: 93px;
}
.con2 {
  width: 952px;
  height: 364px;
  margin: 0 auto;
  margin-top: 15px;
}
.con2 ul:first-child {
  width: 100%;
  height: 36px;
  border-bottom: 1px solid #ececec;
}
.uls1 input,
.uls1 p,
.uls1 img {
  float: left;
  margin-top: 10px;
}
.uls1 {
  background: white;
}
.uls1 p {
  font-size: 12px;
}
.all {
  margin-right: 10px;
  margin-left: 20px;
}
.uls1p1 {
  margin-right: 20px;
  font-weight: 600;
}
.jingdong {
  margin-left: 20px;
}
.uls1a {
  width: 100%;
  height: 37px;
  border-top: 2px solid #aaaaaa;
}
.uls1a p,
.uls1a a {
  float: left;
}
.uls1a p:nth-child(1) {
  font-size: 14px;
  width: 35px;
  height: 20px;
  border: 1px solid #f5993c;
  text-align: center;
  line-height: 20px;
  color: #ff9933;
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 5px;
}
.uls1a a:nth-child(2) {
  font-size: 12px;
  margin-top: 10px;
  margin-right: 20px;
  color: #999999;
}
.uls1a p:nth-child(3) {
  width: 60px;
  height: 20px;
  background: red;
  text-align: center;
  line-height: 20px;
  color: white;
  font-size: 14px;
  margin-top: 5px;
}
.uls1a a:nth-child(4) {
  font-size: 12px;
  margin-top: 10px;
  margin-left: 10px;
  color: #666666;
}
.uls1p2 {
  margin-left: 10px;
  color: white;
  width: 55px;
  height: 17px;
  background: #e4393b;
  text-align: center;
}
.uls2 {
  width: 100%;
  height: 98px;
  border-bottom: 1px dashed #ececec;
  background: white;
}
.uls2 input,
.uls2 a,
.uls2 img,
.uls2 li,
.weight,
button {
  float: left;
}
.uls2 a img {
  width: 60px;
  border: 1px solid #ececec;
  margin-top: 17px;
}
.uls2 p,
.uls2 span {
  font-size: 12px;
}
.uls2 a p {
  font-size: 12px;
  color: #666666;
  margin-top: 16px;
  float: left;
  margin-left: 10px;
}
.uls2 input {
  margin-top: 40px;
}
.uls2 li span {
  display: block;
}
.uls2 .txt {
  width: 32px;
  height: 19px;
  border: 1px solid #cccccc;
  border-left: none;
  border-right: none;
  outline: none;
  text-indent: 10px;
  margin-top: 20px;
  font-weight: 600;
  font-size: 12px;
}
.weight {
  margin-left: 150px;
  margin-top: 19px;
}
.uls2 li {
  margin-top: 19px;
  margin-left: 66px;
  margin-right: 37px;
}
.uls2 button {
  width: 20px;
  height: 21px;
  border: none;
  border: 1px solid #cccccc;
  background: white;
  margin-top: 20px;
  outline: none;
  cursor: pointer;
}
.uls2 li p {
  color: #999999;
  text-decoration: line-through;
}
.uls2 a .laji {
  width: 18px;
  float: left;
  margin-left: 60px;
  margin-top: 20px;
}
.xiaoji {
  float: left;
  margin-left: 47px;
  margin-top: 20px;
  margin-right: 80px;
}
.content1 i {
  font-style: normal;
}
.uls3 {
  width: 100%;
  height: 36px;
  border-bottom: 1px dashed #cccccc;
  background: white;
}
.heji {
  float: right;
  margin-right: 20px;
}
.heji p,
.heji span {
  float: left;
  font-size: 12px;
  line-height: 36px;
}
.heji span {
  color: #999999;
}
.heji p:nth-child(2),
.heji p:nth-child(4) {
  margin-right: 44px;
}
.uls4 {
  width: 100%;
  height: 60px;
  border-top: 1px solid #cccccc;
  border-bottom: 1px solid #cccccc;
  margin-top: 15px;
  background: white;
}
.uls4L {
  float: left;
  margin-left: 10px;
}
.uls4R {
  float: right;
}
.uls4L p {
  float: left;
  line-height: 60px;
  font-size: 12px;
  color: #999999;
  margin-right: 10px;
}
.uls4L input {
  float: left;
  margin-top: 25px;
  margin-right: 10px;
}
.uls4L a {
  font-size: 12px;
  color: #999999;
  line-height: 60px;
}
.uls4L a:first-child {
  margin-right: 5px;
}
.uls4a,
.uls4b {
  float: left;
}
.uls4a1 p {
  float: left;
  font-size: 12px;
}
.uls4a2 p,
.uls4a2 span {
  float: left;
  font-size: 12px;
  margin-top: 10px;
}
.uls4a {
  margin-right: 20px;
}
.aaa p {
  font-size: 12px;
  color: #999999;
}
.aaa p:first-child {
  margin-right: 20px;
  margin-top: 20px;
}
.aaa p:last-child {
  margin-top: 20px;
}
.aaa span,
.aaa i {
  color: red;
  font-weight: 600;
}
.bbb {
  float: left;
  color: #999999;
}
.shopnum {
  color: #ff9933;
  font-weight: 600;
}
.uls4b a {
  width: 70px;
  height: 61px;
  display: block;
  background: red;
  font-size: 14px;
  color: white;
  font-weight: 600;
  text-align: center;
  line-height: 60px;
}
.weight {
  margin-right: 60px;
}
.a666 {
  cursor: pointer;
}
.fixed {
  position: fixed;
  width: 400px;
  height: 200px;
  background: white;
  z-index: 200;
  top: 40%;
  left: 30%;
  border: 1px solid red;
  display: none;
}
.fixed p {
  width: 380px;
  height: 30px;
  background: red;
  font-size: 12px;
  color: white;
  line-height: 30px;
  padding-left: 20px;
}
.fixed span {
  display: block;
  color: #666666;
  margin-top: 20px;
  text-align: center;
}
.fixed button:nth-child(3) {
  margin-left: 140px;
}
.fixed button {
  margin-right: 20px;
  border: none;
  width: 50px;
  height: 30px;
  margin-top: 50px;
  border: 1px solid red;
  color: red;
  background: white;
}
</style>