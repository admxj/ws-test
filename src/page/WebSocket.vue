<template>
  <div class="container">
    <div class="row row-offcanvas row-offcanvas-right main-contain">
      <div class="col-xs-12 col-sm-9">
        <h2></h2>
        <div style="">
          <div>
            <input type='text' value='ws://123.207.167.163:9010/ajaxchattest' class="form-control"
                   style='width:390px;display:inline' id='wsaddr'/>
            <div class="btn-group" role="group" aria-label="...">
              <button type="button" class="btn btn-default" @click='addsocket'>连接</button>
              <button type="button" class="btn btn-default" @click='closesocket'>断开</button>
              <button type="button" class="btn btn-default" onclick='$("#wsaddr").val("")'>清空</button>
              <button type="button" class="btn btn-default"
                      onclick='$("#wsaddr").val("ws://localhost:9010/ajaxchattest")'>示例
              </button>
            </div>
            <div style='margin-top:10px;margin-button:10px'>
            <pre>本工具主要是为了测试服务端websocket功能是否完善可用而开发，主要是利用html5 的websocket去连接服务端的websocket,因此，
            无论你是内网还是外网都可使用!服务端只是实现了接受和发送，这里只是测试而已！</pre>
            </div>
          </div>
          <div class="row">
            <div id="output" style="border:1px solid #ccc;height:365px;overflow: auto;margin-left:15px"></div>
            <div class="col-lg-6">

              <div class="input-group" style=''>
                <input type="text" id='message' class="form-control" style='width:810px' placeholder="待发信息"
                       @keydown="en(event);">
                <span class="input-group-btn">
        <button class="btn btn-default" type="button" @click="doSend();">发送</button>
      </span>
              </div>
            </div>
          </div>
        </div>

      </div>
      <div class="col-xs-6 col-sm-3 sidebar-offcanvas" id="sidebar">
        <div class="list-group" id='ajaxside'>
          <a href="/tool/gp" class="list-group-item">在线POST和GET</a>
          <a href="/tool/duibi" style='color:red' class="list-group-item sideclass">两列对比出不同的行</a>
          <a href="/tool/post" class="list-group-item">新版在线POST和GET</a>
          <a href="/tool/chattest" class="list-group-item sideclass">在线websocket测试工具</a>
          <a href="/tool/testing" class="list-group-item sideclass">API接口压力测试</a>
          <a href="/tool/md" class="list-group-item sideclass">markdown在线编辑</a>
          <a href="/tool/ff" class="list-group-item sideclass">sql\html\xml美化</a>
        </div>
      </div>

    </div>
  </div>

</template>

<script setup>

function formatDate(now) {
  var year = now.getFullYear();
  var month = now.getMonth() + 1;
  var date = now.getDate();
  var hour = now.getHours();
  var minute = now.getMinutes();
  var second = now.getSeconds();
  return year + "-" + (month = month < 10 ? ("0" + month) : month) + "-" + (date = date < 10 ? ("0" + date) : date) + " " + (hour = hour < 10 ? ("0" + hour) : hour) + ":" + (minute = minute < 10 ? ("0" + minute) : minute) + ":" + (second = second < 10 ? ("0" + second) : second);
}

var output;
var websocket;

function init() {
  output = document.getElementById("output");
  testWebSocket();
}


function addsocket(event) {
  var wsaddr = $("#wsaddr").val();
  if (wsaddr == '') {
    alert("请填写websocket的地址");
    return false;
  }
  StartWebSocket(wsaddr);
}

function closesocket(event) {
  websocket.close();
}

function StartWebSocket(wsUri) {
  websocket = new WebSocket(wsUri);
  websocket.onopen = function (evt) {
    onOpen(evt)
  };
  websocket.onclose = function (evt) {
    onClose(evt)
  };
  websocket.onmessage = function (evt) {
    onMessage(evt)
  };
  websocket.onerror = function (evt) {
    onError(evt)
  };
}

function onOpen(evt) {
  writeToScreen("<span style='color:red'>连接成功，现在你可以发送信息啦！！！</span>");
}

function onClose(evt) {
  writeToScreen("<span style='color:red'>websocket连接已断开!!!</span>");
  websocket.close();
}

function onMessage(evt) {
  writeToScreen('<span style="color:blue">服务端回应&nbsp;' + formatDate(new Date()) + '</span><br/><span class="bubble">' + evt.data + '</span>');
}

function onError(evt) {
  writeToScreen('<span style="color: red;">发生错误:</span> ' + evt.data);
}

function doSend() {
  var message = $("#message").val();
  if (message == '') {
    alert("请先填写发送信息");
    $("#message").focus();
    return false;
  }
  if (typeof websocket === "undefined") {
    alert("websocket还没有连接，或者连接失败，请检测");
    return false;
  }
  if (websocket.readyState == 3) {
    alert("websocket已经关闭，请重新连接");
    return false;
  }
  console.log(websocket);
  $("#message").val('');
  writeToScreen('<span style="color:green">你发送的信息&nbsp;' + formatDate(new Date()) + '</span><br/>' + message);
  websocket.send(message);
}

function writeToScreen(message) {
  var div = "<div class='newmessage'>" + message + "</div>";
  var d = $("#output");
  var d = d[0];
  var doScroll = d.scrollTop == d.scrollHeight - d.clientHeight;
  $("#output").append(div);
  if (doScroll) {
    d.scrollTop = d.scrollHeight - d.clientHeight;
  }
}

function en(event) {
  var evt = evt ? evt : (window.event ? window.event : null);
  if (evt.keyCode == 13) {
    doSend()
  }
}

</script>

<style scoped>
.newmessage {
  width: 100%;
}

.bubble {
  background-color: lightgreen;
  position: relative;
  max-width: 240px;
  word-wrap: break-word;
  text-align: left;
  margin-left: 16px;
  margin-right: 16px;

  border-radius: 9px;
}

.bubble:after {
  position: absolute;
  border: 4.8px solid transparent;
  content: " ";
  top: 20px;
}
</style>