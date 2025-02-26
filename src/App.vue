<script setup></script>

<template>
  <div style="width: 100%">
    <nav class="navbar navbar-fixed-top navbar-inverse" style='background-color:#2f3b53;'>
      <div class="container" style='width:100%'>
        <div class="navbar-header">
          <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
            <span class="sr-only">Toggle navigation</span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
            <span class="icon-bar"></span>
          </button>
          <a class="navbar-brand" href="/">PostJson</a>
        </div>
        <div id="navbar" class="collapse navbar-collapse">
          <ul class="nav navbar-nav">
            <li class="active"><a href="/">Home</a></li>
            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">测试工具 <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="/tool/gp">在线post请求</a></li>
                <li><a href="/tool/post">新版在线post请求</a></li>
                <li><a href="/tool/testing">接口压力测试</a></li>
                <li><a href="/tool/port">端口检测</a></li>
                <li><a href="/tool/chattest">在线websocket测试工具</a></li>
              </ul>
            </li>

            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">JSON相关 <span class="caret"></span></a>
              <ul class="dropdown-menu">

                <li><a href="/tool/json">JSON格式化和还原</a></li>

                <li><a href="/tool/jsonedit">json编辑</a></li>

                <li><a href="/tool/jurl">json转url参数</a></li>

              </ul>
            </li>

            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">加密,解码,转换 <span class="caret"></span></a>
              <ul class="dropdown-menu">

                <li><a href="/tool/ud">urlencode与urldecode转换</a></li>

                <li><a href="/tool/ud">base64_encode与base64_decode转换</a></li>

                <li><a href="/tool/ud">md5加密</a></li>

                <li><a href="/tool/ud">sha1,sha256,sha512</a></li>

              </ul>
            </li>

            <li class="dropdown">
              <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">其他工具 <span class="caret"></span></a>
              <ul class="dropdown-menu">
                <li><a href="/tool/duibi">两列对比出差异</a></li>
                <li>
                  <router-link to="/tool/unix">
                    时间戳转换
                  </router-link>
                </li>
                <li><a href="/tool/rd">随机字符串或密码生成</a></li>
                <li><a href="/tool/nslook">在线nslook</a></li>
                <li><a href="/tool/bimg">在线图片base64编码</a></li>
                <li><a href="/tool/imgtob">base64信息转图片</a></li>
                <li><a href="/tool/imgtob">base64信息转图片</a></li>
                <li><a href="/tool/ff">在线格式化sql,html,json</a></li>
                <li><a href="/tool/md">在线markdown</a></li>
                <li><a href="/tool/hzp">汉字转拼音</a></li>
              </ul>
            </li>

          </ul>
          <div style="float:right">

          </div>
        </div>

      </div>

    </nav>

    <main>
      <RouterView />
    </main>
  </div>
</template>

<style scoped>
.navbar-brand,.navbar-nav>li>a{
  color:#fdfdfd!important;
}
.navbar-nav>li>a:hover{
  color:#ff8839!important;
}
.mydisul li{
  line-height:30px;
  margin-top:10px
}

.payup {
  display: none;
  position: fixed;
  top: 0px;
  left: 0px;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.6);
  z-index: 6666
}

.postpay {
  position: relative;
  float: right;
}

.postpay button {
  color: yellow;
  width: 68px;
  height: 50px;
  word-wrap: break-word;
  background-color: hsl(340, 100%, 75%);
  box-shadow: inset rgba(255, 254, 255, 0.6) 0 0.3em .3em, inset rgba(0, 0, 0, 0.15) 0 -0.1em .3em, hsl(340, 70%, 50%) 0 .1em 3px, hsl(340, 80%, 40%) 0 .3em 1px, rgba(0, 0, 0, 0.2) 0 .5em 5px;
  border: none;
  padding-right: 1.2em;
  padding-left: 0.8em;
  border-radius: 3em 1em / 5em 1em;
}

.payupimg {
  width: 680px;
  height: 390px;
  margin: 0 auto;
  position: relative;
  top: 256px;
  z-index: 9999;
  background: white;
}

.payup img {
  float: left;
  width: 280px;
  height: 280px;
  margin:30px 30px 30px 30px;
}

.imgtext {
  width: 330px;
  display: inline-block;
  text-align: center;
  font-size: 20px;
  font-weight: blod;
}
</style>
