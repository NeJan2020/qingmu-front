<template>
  <div id="PersonalCenter">
    <el-container>
      <el-header>
        <!-- logo -->
        <div class="block">
          <el-image>
            <div slot="error" class="image-slot">
              <i class="el-icon-picture-outline"></i>
            </div>
          </el-image>
        </div>
        <el-tabs type="border-card">
          <el-tab-pane label="首页">首页</el-tab-pane>
          <el-tab-pane label="账户设置">账户设置</el-tab-pane>
        </el-tabs>
      </el-header>
      <el-container>
        <el-aside width="300px">Aside</el-aside>
        <el-container>
          <el-main>Main</el-main>

          <el-footer>Footer</el-footer>
        </el-container>
      </el-container>
    </el-container>
  </div>
</template>

<script>
</script>

<style>
.el-header,
.el-footer {
  background-color: #b3c0d1;
  color: #333;
  text-align: center;
  line-height: 60px;
}

.el-aside {
  background-color: #d3dce6;
  color: #333;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>