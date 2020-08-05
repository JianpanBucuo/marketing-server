window.onload = function () {
    var timing = performance.timing;
    console.log(performance)
    // console.log('准备新页面时间耗时: ' + (timing.fetchStart - timing.navigationStart));
    // console.log('redirect 重定向耗时: ' + (timing.redirectEnd - timing.redirectStart));
    // console.log('node服务 耗时: ' + (timing.domainLookupStart - timing.fetchStart));
    // console.log('unload 前文档耗时: ' + (timing.unloadEventEnd - timing.unloadEventStart));
    // console.log('DNS 查询耗时: ' + (timing.domainLookupEnd - timing.domainLookupStart));
    // console.log('TCP连接耗时: ' + (timing.connectEnd - timing.connectStart));
    // console.log('request请求耗时: ' + (timing.responseEnd - timing.requestStart));
    // console.log('白屏时间: ' + (timing.responseStart - timing.navigationStart));
    // console.log('请求完毕至DOM加载: ' + (timing.domInteractive - timing.responseEnd));
    // console.log('解释dom树耗时: ' + (timing.domComplete - timing.domInteractive));
    // console.log('从开始至load总耗时: ' + (timing.loadEventEnd - timing.navigationStart));

    var table = {
        '准备新页面时间耗时': timing.fetchStart - timing.navigationStart,
        'redirect 重定向耗时': timing.redirectEnd - timing.redirectStart,
        'node服务 耗时': timing.domainLookupStart - timing.fetchStart
    }

    console.table(table);
}

