<template>
  <div id="PersonalCenter">
    <el-container>
      <el-header id="header-back" direction="horizontal">
        <el-menu
          :default-active="activeIndex2"
          class="el-menu-demo"
          mode="horizontal"
          @select="handleSelect"
          background-color="#545c64"
          text-color="#fff"
          active-text-color="#ffd04b"
          id="header"
        >
        
          <el-menu-item index="1">首页</el-menu-item>
          <el-submenu index="2">
            <template slot="title">账户设置</template>
            <el-menu-item index="2-1">选项1</el-menu-item>
            <el-menu-item index="2-2">选项2</el-menu-item>
            <el-menu-item index="2-3">选项3</el-menu-item>
            <el-submenu index="2-4">
              <template slot="title">选项4</template>
              <el-menu-item index="2-4-1">选项1</el-menu-item>
              <el-menu-item index="2-4-2">选项2</el-menu-item>
              <el-menu-item index="2-4-3">选项3</el-menu-item>
            </el-submenu>
          </el-submenu>
          <el-menu-item index="3">消息中心</el-menu-item>
          <el-menu-item index="4"
            ><a href="https://www.ele.me" target="_blank"
              >订单管理</a
            ></el-menu-item
          >
          <el-menu-item style="float: right;padding-top:" index="4"
            >注销</el-menu-item
          >
        </el-menu>
      </el-header>
      <el-container>
        <el-aside width="300px">
          <div id="navbar-head">
            &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;全部功能
          </div>
          <el-row class="tac">
            <el-col :span="24">
              <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                @open="handleOpen"
                @close="handleClose"
                background-color="#545c64"
                text-color="#fff"
                active-text-color="#ffd04b"
              >
                <el-submenu index="1">
                  <template slot="title">
                    <i class="el-icon-location"></i>
                    <span>我的购物车</span>
                  </template>
                  <el-menu-item-group>
                    <template slot="title">分组一</template>
                    <el-menu-item index="1-1">选项1</el-menu-item>
                    <el-menu-item index="1-2">选项2</el-menu-item>
                  </el-menu-item-group>
                  <el-menu-item-group title="分组2">
                    <el-menu-item index="1-3">选项3</el-menu-item>
                  </el-menu-item-group>
                  <el-submenu index="1-4">
                    <template slot="title">选项4</template>
                    <el-menu-item index="1-4-1">选项1</el-menu-item>
                  </el-submenu>
                </el-submenu>
                <el-menu-item index="2">
                  <i class="el-icon-menu"></i>
                  <span slot="title">已买到的宝贝</span>
                </el-menu-item>
                <el-menu-item index="3">
                  <i class="el-icon-document"></i>
                  <span slot="title">购买过的店铺</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-setting"></i>
                  <span slot="title">我的发票</span>
                </el-menu-item>
                <el-menu-item index="4">
                  <i class="el-icon-setting"></i>
                  <span slot="title">我的发票</span>
                </el-menu-item>
              </el-menu>
            </el-col>
          </el-row></el-aside
        >
        <el-container>
          <el-main>
            <el-breadcrumb separator-class="el-icon-arrow-right">
              <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
              <el-breadcrumb-item>已买到的宝贝</el-breadcrumb-item>
              <el-breadcrumb-item>消费列表</el-breadcrumb-item>
              <el-breadcrumb-item>消费详情</el-breadcrumb-item>
            </el-breadcrumb>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>个人信息</span>
              </div>
              <div class="text item">
                <el-container>
                  <el-aside width="200px">
                    <div>
                      <el-image
                        style="width: 100px; height: 100px"
                        src="http://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                        fit="fill"
                      ></el-image>
                    </div>
                    <div>
                      <el-tag>用户名：User<br />网 龄：4 年 </el-tag>
                    </div>
                  </el-aside>
                  <el-main>
                    <div>
                      <el-button class="button-60px">我的收获地址</el-button>
                      <el-button class="button-60px">我的优惠信息</el-button>
                      <el-button class="button-60px">我的支付宝</el-button>
                    </div>
                    <br />
                    <div>
                      <el-table
                        :data="tableData"
                        border
                        style="width: 100%"
                        class="table"
                      >
                        <el-table-column prop="date" label="待付款">
                        </el-table-column>
                        <el-table-column prop="name" label="待发货">
                        </el-table-column>
                        <el-table-column prop="address" label="待收货">
                        </el-table-column>
                        <el-table-column prop="address" label="待评价">
                        </el-table-column>
                        <el-table-column prop="address" label="退款">
                        </el-table-column>
                      </el-table>
                    </div>
                  </el-main>
                </el-container>
              </div>

              <div class="text item"></div>
            </el-card>
            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>我的物流</span>
                <el-button style="float: right; padding: 3px 0" type="text"
                  >全部物流</el-button
                >
              </div>
              <div v-for="o in 4" :key="o" class="text item">
                <el-container>
                  <el-aside width="200px">
                    <div>
                      <el-image
                        style="width: 100px; height: 100px"
                        fit="fill"
                      ></el-image>
                    </div>
                    <div>
                      <el-tag>{{ "我购买的商品 " + o }}</el-tag>
                    </div>
                  </el-aside>
                  <el-main style="background-color: #ffffff">
                    <el-steps :active="o" finish-status="success">
                      <el-step title="已发货"></el-step>
                      <el-step title="运输中"></el-step>
                      <el-step title="正在配送"></el-step>
                      <el-step title="已收货"></el-step>
                    </el-steps>
                    <br />
                    <el-link disabled>收货地址：xxxxxxx路</el-link>
                    <el-tag style="float: right">确认收货</el-tag>
                  </el-main>
                </el-container>
              </div>
            </el-card>

            <el-card class="box-card">
              <div slot="header" class="clearfix">
                <span>猜你喜欢</span>
              </div>
              <el-carousel :interval="4000" type="card" height="200px">
                <el-carousel-item v-for="item in 6" :key="item">
                  <el-image
                    style="width: 600px; height: 200px"
                    src="http://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
                    fit="fill"
                  ></el-image>
                </el-carousel-item>
              </el-carousel>
            </el-card>
          </el-main>
          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeIndex: "1",
      activeIndex2: "1",
      tableData: [
        {
          date: "1",
          name: "3",
          address: "0",
        },
      ],
    };
  },
  methods: {
    handleOpen(key, keyPath) {
      console.log(key, keyPath);
    },
    handleClose(key, keyPath) {
      console.log(key, keyPath);
    },
    handleSelect(key, keyPath) {
      console.log(key, keyPath);
    },
  },
};
</script>

<style>
#PersonalCenter {
  background-color: #545c64;
}
.text {
  font-size: 14px;
}
.button-60px {
  height: 60px;
  padding-left: 100px;
  padding-right: 100px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}
.clearfix:after {
  clear: both;
}

.box-card {
  width: 100%;
  margin-top: 30px;
}

#header-back {
  background-color: #545c64;
}

#header {
  margin-left: 300px;
}

.el-header {
  background-color: #545c64;
  color: #333;
  text-align: center;
}

#navbar-head {
  line-height: 40px;
  background-color: #545c64;
  color: #e9eef3;
}

.el-aside {
  color: #333;
  text-align: left;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: left;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
</style>