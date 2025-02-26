<template>
  <div class="container">
    <div class="row row-offcanvas row-offcanvas-right main-contain">

      <div class="col-xs-12 col-sm-8" style="z-index: 9995">

        <h3>时间、时间戳转换</h3>
        <br/>
        <div style='font-size:14px'>
          <div>
            <div class="input-group" style='width:60%;float:left'>
              <span class="input-group-addon" id="basic-addon1">当前时间戳：</span>
              <input type="text" class="form-control" id="curr_time" aria-describedby="basic-addon1">
              <span class="input-group-addon" id="basic-addon1">北京时间：</span>
              <input type="text" class="form-control" id="curr_date_time" aria-describedby="basic-addon1"
                     style='width:160px'>
            </div>
            <div class="btn-group" role="group" aria-label="..." style='width:25%;float:left;margin-left:20px'>
              <button type="button" class="btn btn-primary codeurl" onclick='start();'>开始</button>
              <button type="button" class="btn btn-primary codeurl" onclick='cl();'>暂停</button>
            </div>
          </div>
          <br/>
          <div style='margin-top:50px;line-height:40px;clear:both'>
            <div style='font-size:10px;margin-left:10px'>时间戳-&gt;日期</div>
            <div class="input-group" style='width:38%;float:left'>
              <span class="input-group-addon" id="basic-addon1">时间戳：</span>
              <input type="text" class="form-control" id="otime" aria-describedby="basic-addon1">
            </div>
            <button type="button" class="btn btn-primary" id='changetime'
                    style='width:18%;float:left;margin-left:10px;margin-right:10px'>转 换
            </button>
            <div class="input-group" style='width:38%;float:left'>
              <span class="input-group-addon" id="basic-addon1">日期：</span>
              <input type="text" class="form-control" id="bei_time" aria-describedby="basic-addon1">
            </div>
          </div>
          <div style='margin-top:50px;line-height:40px;clear:both'>
            <div style='font-size:10px;margin-left:10px'>北京时间-&gt;时间戳</div>
            <div class="input-group" style='width:38%;float:left'>
              <span class="input-group-addon" id="basic-addon1">北京时间：</span>
              <input type="text" class="form-control" id="beic_time" aria-describedby="basic-addon1">
            </div>
            <button type="button" class="btn btn-primary" id='changetimec'
                    style='width:18%;float:left;margin-left:10px;margin-right:10px'>转 换
            </button>
            <div class="input-group" style='width:38%;float:left'>
              <span class="input-group-addon" id="basic-addon1">时间戳：</span>
              <input type="text" class="form-control" id="octime" aria-describedby="basic-addon1">
            </div>
          </div>
          <div style='margin-top:50px;line-height:40px;clear:both'>
            <div style='font-size:10px;margin-left:10px'>秒转天\时\分\秒</div>
            <div class="input-group" style='width:38%;float:left'>
              <span class="input-group-addon" id="basic-sec">秒：</span>
              <input type="text" class="form-control" id="beic_sec" value='102306'
                     aria-describedby="basic-addon1">
            </div>
            <button type="button" class="btn btn-primary" id='changedayhms'
                    style='width:18%;float:left;margin-left:10px;margin-right:10px'>转 换
            </button>
            <div class="input-group" style='width:38%;float:left'>
              <span class="input-group-addon" id="basic-dayhms">天时分秒：</span>
              <input type="text" class="form-control" id="dayhms" aria-describedby="basic-addon1">
            </div>
          </div>
          <div style='clear:both'></div>
          <div style='margin-top:30px' id='unixdesc'>
            <pre>时间戳是指格林威治时间1970年01月01日00时00分00秒(北京时间1970年01月01日08时00分00秒)起至现在的总秒数</pre>
            <table class="table table-bordered table-striped">
              <tbody>
              <tr>
                <td><b>时间转秒</b>&nbsp;</td>
                <td class="numbers"><b>Seconds</b></td>
              </tr>
              <tr>
                <td>1 hour</td>
                <td class="numbers">3600 seconds</td>
              </tr>
              <tr>
                <td>1 day</td>
                <td class="numbers">86400 seconds</td>
              </tr>
              <tr>
                <td>1 week</td>
                <td class="numbers">604800 seconds</td>
              </tr>
              <tr>
                <td>1 month (30.44 days)&nbsp;</td>
                <td class="numbers">2629743 seconds</td>
              </tr>
              <tr>
                <td>1 year (365.24 days)&nbsp;</td>
                <td class="numbers">&nbsp;31556926 seconds</td>
              </tr>
              </tbody>
            </table>
            <div>
              [快速导航]
              <div style='line-height:30px'>
                <div><a href='#maodian1'>各个语言获取当前时间</a></div>
                <div><a href='#maodian2'>各个语言日期转化成时间戳</a></div>
                <div><a href='#maodian3'>各个语言时间戳转化成日期</a></div>

              </div>
            </div>
            <table class="table table-bordered table-striped">
              <thead>
              <tr id='maodian1'>
                <td colspan='2' class='thunix'>各个语言获取当前时间</td>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>PHP</td>
                <td><code>time()</code></td>
              </tr>
              <tr>
                <td>Python</td>
                <td><code>import time; time.time()</code></td>
              </tr>
              <tr>
                <td>Ruby</td>
                <td><code>Time.now</code> (or <code>Time.new</code>). To display the epoch: <code>Time.now.to_i</code>
                </td>
              </tr>
              <tr>
                <td>Perl</td>
                <td><code>time</code></td>
              </tr>
              <tr>
                <td>Java</td>
                <td><code>long epoch = System.currentTimeMillis()/1000;</code></td>
              </tr>
              <tr>
                <td>C#</td>
                <td>
                  <code>var epoch = (DateTime.UtcNow - new DateTime(1970, 1, 1, 0, 0, 0,
                    DateTimeKind.Utc)).TotalSeconds;</code>
                </td>
              </tr>
              <tr>
                <td>Objective-C</td>
                <td><code>[[NSDate date] timeIntervalSince1970];</code> (returns double) or
                  <code>NSString *currentTimestamp = [NSString stringWithFormat:@"%f", [[NSDate date]
                    timeIntervalSince1970]];</code>
                </td>
              </tr>
              <tr>
                <td>C++11</td>
                <td>
                  <code>double now = std::chrono::duration_cast&lt;std::chrono::milliseconds&gt;(std::chrono::system_clock::now().time_since_epoch()).count();</code>
                </td>
              </tr>
              <tr>
                <td>VBScript/ASP</td>
                <td><code>DateDiff("s", "01/01/1970 00:00:00", Now())</code></td>
              </tr>
              <tr>
                <td>AutoIT</td>
                <td><code>_DateDiff('s', "1970/01/01 00:00:00", _NowCalc())</code></td>
              </tr>
              <tr>
                <td>Delphi</td>
                <td><code>Epoch := DateTimetoUnix(Now);</code> Tested in Delphi 2010.</td>
              </tr>
              <tr>
                <td>R</td>
                <td><code>as.numeric(Sys.time())</code></td>
              </tr>
              <tr>
                <td>Erlang/OTP</td>
                <td><code>erlang:system_time(seconds).</code> (version 18+), older versions:
                  <code>calendar:datetime_to_gregorian_seconds(calendar:universal_time())-719528*24*3600.</code>
                </td>
              </tr>
              <tr>
                <td>MySQL</td>
                <td><code>SELECT unix_timestamp(now())</code></td>
              </tr>
              <tr>
                <td>PostgreSQL</td>
                <td><code>SELECT extract(epoch FROM now());</code></td>
              </tr>
              <tr>
                <td>SQLite</td>
                <td><code>SELECT strftime('%s', 'now');</code></td>
              </tr>
              <tr>
                <td>Oracle PL/SQL</td>
                <td>
                  <code>SELECT (CAST(SYS_EXTRACT_UTC(SYSTIMESTAMP) AS DATE) -
                    TO_DATE('01/01/1970','DD/MM/YYYY')) * 24 * 60 * 60 FROM DUAL;</code>
                </td>
              </tr>
              <tr>
                <td>SQL Server</td>
                <td><code>SELECT DATEDIFF(s, '1970-01-01 00:00:00', GETUTCDATE())</code></td>
              </tr>
              <tr>
                <td>IBM Informix</td>
                <td><code>SELECT dbinfo('utc_current') FROM sysmaster:sysdual;</code></td>
              </tr>
              <tr>
                <td>JavaScript</td>
                <td><code>Math.round(new Date().getTime()/1000.0)</code> getTime() returns time in
                  milliseconds.
                </td>
              </tr>
              <tr>
                <td>Visual FoxPro</td>
                <td><code>DATETIME() - {^1970/01/01 00:00:00}</code> Warning: time zones not handled
                  correctly
                </td>
              </tr>
              <tr>
                <td>Go</td>
                <td><code>time.Now().Unix()</code></td>
              </tr>
              <tr>
                <td>Adobe ColdFusion</td>
                <td><code>&lt;cfset epochTime = left(getTickcount(), 10)&gt;</code></td>
              </tr>
              <tr>
                <td>Tcl/Tk</td>
                <td><code>clock seconds</code></td>
              </tr>
              <tr>
                <td>Unix/Linux Shell</td>
                <td><code>date +%s</code></td>
              </tr>
              <tr>
                <td>PowerShell</td>
                <td><code>[int][double]::Parse((Get-Date (get-date).touniversaltime() -UFormat %s))</code>
                </td>
              </tr>
              <tr>
                <td>Other OS's</td>
                <td>Command line: <code>perl -e "print time"</code> (If Perl is installed on your system)
                </td>
              </tr>
              </tbody>
            </table>
            <table class="table table-bordered table-striped">
              <thead>
              <tr id='maodian2'>
                <td colspan='2' class='thunix'>各个语言日期转化成时间戳</td>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>PHP</td>
                <td><code>date(<i>output format</i>, <i>epoch</i>);</code> Output format example: 'r' = RFC
                  2822 date
                </td>
              </tr>
              <tr>
                <td>Python</td>
                <td><code>import time; time.strftime("%a, %d %b %Y %H:%M:%S +0000",
                  time.localtime(<i>epoch</i>))</code>
                  Replace time.localtime with time.gmtime for GMT time. Or using datetime:
                  <code>import datetime; datetime.datetime.utcfromtimestamp(<i>epoch</i>).replace(tzinfo=datetime.timezone.utc)</code>
                </td>
              </tr>
              <tr>
                <td>Ruby</td>
                <td><code>Time.at(<i>epoch</i>)</code></td>
              </tr>
              <tr>
                <td>C#</td>
                <td><code>private string epoch2string(int epoch) {<br>
                  return new DateTime(1970, 1, 1, 0, 0, 0,
                  DateTimeKind.Utc).AddSeconds(epoch).ToShortDateString(); }</code></td>
              </tr>
              <tr>
                <td>Perl</td>
                <td>Use the</td>
              </tr>
              <tr>
                <td>Java</td>
                <td>
                  <code>String date = new java.text.SimpleDateFormat("MM/dd/yyyy HH:mm:ss").format(new
                    java.util.Date (<i>epoch</i>*1000));</code>
                </td>
              </tr>
              <tr>
                <td>VBScript/ASP</td>
                <td><code>DateAdd("s", <i>epoch</i>, "01/01/1970 00:00:00")</code></td>
              </tr>
              <tr>
                <td>AutoIT</td>
                <td><code>_DateAdd("s", $EpochSeconds , "1970/01/01 00:00:00")</code></td>
              </tr>
              <tr>
                <td title="Embarcadero Delphi">Delphi</td>
                <td><code>myString := DateTimeToStr(UnixToDateTime(Epoch));</code> Where Epoch is a signed
                  integer.
                </td>
              </tr>
              <tr>
                <td>Objective-C</td>
                <td><code>NSDate * myDate = [NSDate dateWithTimeIntervalSince1970:<i>epoch</i>];
                  NSLog(@"%@", date);</code>
                </td>
              </tr>
              <tr>
                <td>R</td>
                <td><code>as.POSIXct(epoch, origin="1970-01-01", tz="GMT")</code></td>
              </tr>
              <tr>
                <td>Adobe ColdFusion</td>
                <td><code>DateAdd("s",epoch,"1/1/1970");</code></td>
              </tr>
              <tr>
                <td>MySQL</td>
                <td><code>FROM_UNIXTIME(<i>epoch</i>, <i>optional output format</i>)</code> Default output
                  format is YYY-MM-DD
                  HH:MM:SS. If you need support for negative timestamps:
                  <code>DATE_FORMAT(DATE_ADD(FROM_UNIXTIME(0), interval -315619200
                    second),"%Y-%m-%d")</code> (replace
                  -315619200 with epoch)
                </td>
              </tr>
              <tr>
                <td>PostgreSQL</td>
                <td>PostgreSQL version 8.1 and higher: <code>SELECT to_timestamp(<i>epoch</i>);</code> Older
                  versions:
                  <code>SELECT TIMESTAMP WITH TIME ZONE 'epoch' + <i>epoch</i> * INTERVAL '1
                    second';</code>
                </td>
              </tr>
              <tr>
                <td>SQLite</td>
                <td><code>SELECT datetime(<i>epoch_to_convert</i>, 'unixepoch');</code> or local timezone:
                  <code>SELECT datetime(<i>epoch_to_convert</i>, 'unixepoch', 'localtime');</code>
                </td>
              </tr>
              <tr>
                <td>Oracle PL/SQL</td>
                <td><code>SELECT to_date('01-JAN-1970','dd-mon-yyyy')+(1526357743/60/60/24) from dual</code><br>Replace
                  1526357743 with epoch.
                </td>
              </tr>
              <tr>
                <td>SQL Server</td>
                <td><code>DATEADD(s, <i>epoch</i>, '1970-01-01 00:00:00')</code></td>
              </tr>
              <tr>
                <td>IBM Informix</td>
                <td><code>SELECT dbinfo('utc_to_datetime',<i>epoch</i>) FROM sysmaster:sysdual;</code></td>
              </tr>
              <tr>
                <td>Microsoft Excel / LibreOffice Calc</td>
                <td><code>=(A1 / 86400) + 25569</code> Format the result cell for date/time, the result will
                  be in GMT time
                  (A1 is the cell with the epoch number). For other time zones: =((A1 +/- time zone
                  adjustment) / 86400) +
                  25569.
                </td>
              </tr>
              <tr>
                <td>Crystal Reports</td>
                <td><code>DateAdd("s", {EpochTimeStampField}-14400, #1/1/1970 00:00:00#)</code> -14400 used
                  for Eastern
                  Standard Time.
                </td>
              </tr>
              <tr>
                <td>JavaScript</td>
                <td></td>
              </tr>
              <tr>
                <td>MATLAB</td>
                <td><code>datestr(719529+TimeInSeconds/86400,'dd-mmm-yyyy HH:MM:SS')</code></td>
              </tr>
              <tr>
                <td>IBM PureData System for Analytics</td>
                <td><code>select 996673954::int4::abstime::timestamp;</code></td>
              </tr>
              <tr>
                <td>Unix/Linux Shell</td>
                <td><code>date -d @1520000000</code> Replace 1520000000 with your epoch, needs recent
                  version of 'date'.
                  Replace '-d' with '-ud' for GMT/UTC time.
                </td>
              </tr>
              <tr>
                <td>Mac OS X</td>
                <td><code>date -j -r 1520000000</code></td>
              </tr>
              <tr>
                <td>PowerShell</td>
                <td><code>Function get-epochDate ($epochDate)
                  { [timezone]::CurrentTimeZone.ToLocalTime(([datetime]'1/1/1970').AddSeconds($epochDate))
                  }</code>, then use:
                  <code>get-epochDate 1520000000</code>. Works for Windows PowerShell v1 and v2
                </td>
              </tr>
              <tr>
                <td>Other OS's</td>
                <td>Command line: <code>perl -e "print scalar(localtime(<i>epoch</i>))"</code> (If Perl is
                  installed) Replace
                  'localtime' with 'gmtime' for GMT/UTC time.
                </td>
              </tr>
              </tbody>
            </table>

            <table class="table table-bordered table-striped">
              <thead>
              <tr id='maodian3'>
                <td colspan='2' class='thunix'>各个语言时间戳转化成日期</td>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td>PHP</td>
                <td><code>date(<i>output format</i>, <i>epoch</i>);</code> Output format example: 'r' = RFC
                  2822 date
                </td>
              </tr>
              <tr>
                <td>Python</td>
                <td><code>import time; time.strftime("%a, %d %b %Y %H:%M:%S +0000",
                  time.localtime(<i>epoch</i>))</code>
                  Replace time.localtime with time.gmtime for GMT time. Or using datetime:
                  <code>import datetime; datetime.datetime.utcfromtimestamp(<i>epoch</i>).replace(tzinfo=datetime.timezone.utc)</code>
                </td>
              </tr>
              <tr>
                <td>Ruby</td>
                <td><code>Time.at(<i>epoch</i>)</code></td>
              </tr>
              <tr>
                <td>C#</td>
                <td><code>private string epoch2string(int epoch) {<br>
                  return new DateTime(1970, 1, 1, 0, 0, 0,
                  DateTimeKind.Utc).AddSeconds(epoch).ToShortDateString(); }</code>
                </td>
              </tr>
              <tr>
                <td>Java</td>
                <td>
                  <code>String date = new java.text.SimpleDateFormat("MM/dd/yyyy HH:mm:ss").format(new
                    java.util.Date (<i>epoch</i>*1000));</code>
                </td>
              </tr>
              <tr>
                <td>VBScript/ASP</td>
                <td><code>DateAdd("s", <i>epoch</i>, "01/01/1970 00:00:00")</code></td>
              </tr>
              <tr>
                <td>AutoIT</td>
                <td><code>_DateAdd("s", $EpochSeconds , "1970/01/01 00:00:00")</code></td>
              </tr>
              <tr>
                <td title="Embarcadero Delphi">Delphi</td>
                <td><code>myString := DateTimeToStr(UnixToDateTime(Epoch));</code> Where Epoch is a signed
                  integer.
                </td>
              </tr>
              <tr>
                <td>Objective-C</td>
                <td><code>NSDate * myDate = [NSDate dateWithTimeIntervalSince1970:<i>epoch</i>];
                  NSLog(@"%@", date);</code>
                </td>
              </tr>
              <tr>
                <td>R</td>
                <td><code>as.POSIXct(epoch, origin="1970-01-01", tz="GMT")</code></td>
              </tr>
              <tr>
                <td>Adobe ColdFusion</td>
                <td><code>DateAdd("s",epoch,"1/1/1970");</code></td>
              </tr>
              <tr>
                <td>MySQL</td>
                <td><code>FROM_UNIXTIME(<i>epoch</i>, <i>optional output format</i>)</code> Default output
                  format is YYY-MM-DD
                  HH:MM:SS. If you need support for negative timestamps:
                  <code>DATE_FORMAT(DATE_ADD(FROM_UNIXTIME(0), interval -315619200
                    second),"%Y-%m-%d")</code> (replace
                  -315619200 with epoch)
                </td>
              </tr>
              <tr>
                <td>PostgreSQL</td>
                <td>PostgreSQL version 8.1 and higher: <code>SELECT to_timestamp(<i>epoch</i>);</code> Older
                  versions:
                  <code>SELECT TIMESTAMP WITH TIME ZONE 'epoch' + <i>epoch</i> * INTERVAL '1
                    second';</code>
                </td>
              </tr>
              <tr>
                <td>SQLite</td>
                <td><code>SELECT datetime(<i>epoch_to_convert</i>, 'unixepoch');</code> or local timezone:
                  <code>SELECT datetime(<i>epoch_to_convert</i>, 'unixepoch', 'localtime');</code>
                </td>
              </tr>
              <tr>
                <td>Oracle PL/SQL</td>
                <td><code>SELECT to_date('01-JAN-1970','dd-mon-yyyy')+(1526357743/60/60/24) from dual</code><br>Replace
                  1526357743 with epoch.
                </td>
              </tr>
              <tr>
                <td>SQL Server</td>
                <td><code>DATEADD(s, <i>epoch</i>, '1970-01-01 00:00:00')</code></td>
              </tr>
              <tr>
                <td>IBM Informix</td>
                <td><code>SELECT dbinfo('utc_to_datetime',<i>epoch</i>) FROM sysmaster:sysdual;</code></td>
              </tr>
              <tr>
                <td>Microsoft Excel / LibreOffice Calc</td>
                <td><code>=(A1 / 86400) + 25569</code> Format the result cell for date/time, the result will
                  be in GMT time
                  (A1 is the cell with the epoch number). For other time zones: =((A1 +/- time zone
                  adjustment) / 86400) +
                  25569.
                </td>
              </tr>
              <tr>
                <td>Crystal Reports</td>
                <td><code>DateAdd("s", {EpochTimeStampField}-14400, #1/1/1970 00:00:00#)</code> -14400 used
                  for Eastern
                  Standard Time.
                </td>
              </tr>
              <tr>
                <td>MATLAB</td>
                <td><code>datestr(719529+TimeInSeconds/86400,'dd-mmm-yyyy HH:MM:SS')</code></td>
              </tr>
              <tr>
                <td>IBM PureData System for Analytics</td>
                <td><code>select 996673954::int4::abstime::timestamp;</code></td>
              </tr>
              <tr>
                <td>Unix/Linux Shell</td>
                <td><code>date -d @1520000000</code> Replace 1520000000 with your epoch, needs recent
                  version of 'date'.
                  Replace '-d' with '-ud' for GMT/UTC time.
                </td>
              </tr>
              <tr>
                <td>Mac OS X</td>
                <td><code>date -j -r 1520000000</code></td>
              </tr>
              <tr>
                <td>PowerShell</td>
                <td><code>Function get-epochDate ($epochDate)
                  { [timezone]::CurrentTimeZone.ToLocalTime(([datetime]'1/1/1970').AddSeconds($epochDate))
                  }</code>, then
                  use: <code>get-epochDate 1520000000</code>. Works for Windows PowerShell v1 and v2
                </td>
              </tr>
              <tr>
                <td>Other OS's</td>
                <td>Command line: <code>perl -e "print scalar(localtime(<i>epoch</i>))"</code> (If Perl is
                  installed) Replace
                  'localtime' with 'gmtime' for GMT/UTC time.
                </td>
              </tr>
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </div>

  </div>
</template>

<script setup>
import {onMounted} from 'vue'

import moment from "moment";

onMounted(() => {
  $("#otime").val(parseInt(new Date().getTime() / 1000));
  $("#beic_time").val(formatDate(new Date()));
  $("#changetime").click(function () {
    var otime = $("#otime").val().trim();
    if (otime == "") {
      alert("时间戳不能为空");
      $("#otime").focus();
      return false;
    }
    console.log(otime)
    if (!parseInt(otime)) {
      alert("时间戳只能为数字");
      $("#otime").focus();
      return false;
    }
    let timestamp = parseInt(otime)

    timestamp = otime.length === 10 ? timestamp * 1000 : timestamp
    $("#bei_time").val(formatMillisecondsDate(new Date(timestamp)));
  });

  $("#changetimec").click(function () {
    var beic_time = $("#beic_time").val();
    if (beic_time == "") {
      alert("时间戳不能为空");
      $("#beic_time").focus();
      return false;
    }
    console.log(beic_time)
    $("#octime").val(transdate(beic_time));
  });
  $("#changedayhms").on("click", function () {
    dayhm();
  });
  $("#beic_sec").on("keyup", function () {
    dayhm();
  });
})


function dayhm() {
  var sec = $("#beic_sec").val();
  if (sec.length > 20 || sec.length < 1) {
    alert('长度必须大于1小于20');
    return false;
  }
  var dh = '';
  dh += parseInt(sec / 86400) + " 天";
  dh += parseInt((sec % 86400) / 3600) + " 时";
  dh += parseInt(((sec % 86400) % 3600) / 60) + " 分";
  dh += parseInt(((sec % 86400) % 3600) % 60) + " 秒";
  $("#dayhms").val(dh);
}

function formatDate(now) {
  return moment(now).format('YYYY-MM-DD hh:mm:ss')
}

function formatMillisecondsDate(now) {
  return moment(now).format('YYYY-MM-DD hh:mm:ss.SSS')
}


function transdate(endTime) {
  var date = new Date("2000-0-1");
  $month = endTime.substring(5, 7);
  $day = endTime.substring(8, 10);
  if ($month < 1 || $month > 12) {
    alert("日期月份不正确。");
    $("#beic_time").focus();
    return false;
  }
  if ($day < 1 || $day > 31) {
    alert("日期的日不正确。");
    $("#beic_time").focus();
    return false;
  }
  date.setFullYear(endTime.substring(0, 4));
  date.setMonth($month - 1);
  date.setDate($day);
  date.setHours(endTime.substring(11, 13));
  date.setMinutes(endTime.substring(14, 16));
  date.setSeconds(endTime.substring(17, 19));
  return Date.parse(date) / 1000;
}

var arr = new Array();
start();

function start() {
  var ii = setInterval(function () {
    var tt = new Date();
    $("#curr_time").val(parseInt(tt.getTime() / 1000));
    $("#curr_date_time").val(formatDate(tt));
    console.log(ii);
  }, 1000);
  arr.push(ii);
}

function cl() {
  while (i = arr.pop()) {
    clearInterval(i);
  }
  arr = new Array();
}
</script>

<style scoped>
.thunix {
  font-weight: 800;
  text-align: center;
  background-color: blanchedalmond;
  color: black;
  font-size: 20px;
}

#unixdesc code {
  background-color: transparent;
}

.leftul {
}

.leftulli {
  list-style: none;
  margin-top: 5px;
  border-bottom: 1px solid #ccc;
}

.siteleadul li {
  list-style: none;
  width: 200px;
  float: left;
  line-height: 25px
}
</style>