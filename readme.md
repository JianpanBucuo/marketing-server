# 客户端渲染与服务端渲染的比较
目的： 如何让用户快点看到首屏页面

## Node服务的应用

## 客户端渲染与服务端渲染

### 渲染流程的差异

### 优势/劣势

#### 客户端渲染

##### 优势

##### 劣势

#### 服务端渲染

##### 优势

##### 劣势

## 通过白屏时间与首屏时间量化各项指标

### 白屏时间
用户从打开页面到页面第一个元素开始呈现为止所耗费的时间

### 首屏时间
用户从打开页面到首屏页面全部元素全部加载且渲染完成所耗费的时间

### 各项指标

分析页面中与时间相关的信息`Performance.timing`

属性 | 内容
|-|-|
| navigationStart | 从同一个浏览器的上一个页面卸载unload结束时的时间戳(精确到毫秒)(不需要同一域名) |
| unloadEventStart | unload事件开始执行时的时间戳。如果没有上一个页面，或者如果先前的页面或所需的重定向之一不是同一个来源，这个值会返回0 |
| unloadEventEnd | unload事件执行完的时间戳。如果没有上一个页面，或所需的重定向之一不是同一域名，这个值会返回0 |
| redirectStart | 第一个HTTP重定向开始时得时间戳。如果没有上一个页面，或所需的重定向之一不是同一域名，这个值会返回0  |
| redirectEnd | 最后一个HTTP重定向完成时的时间戳(HTTP响应的最后一个字节直接被接收到的时间)（如果没有上一个页面，或所需的重定向之一不是同一域名，这个值会返回0） |
| fetchStart | 浏览器准备好使用HTTP请求来获取(fetch)文档的时间戳。但是并不是在此时发送http请求，这个时间点会在检查任何应用缓存之前 |
| domainLookupStart | 域名查询开始的时间戳。如果使用了持续连接，或者这个信息存储到了缓存或者本地资源上，这个值将和`Performance.fetchStart`一致 |
| domainLookupEnd | 域名查询结束时的时间戳。如果使用了持续连接，或者这个信息存储到了缓存或者本地资源上，这个值将和`Performance.fetchStart`一致 |
| connectStart | 浏览器与服务器之间开始建立连接时的时间戳（TCP）。如果使用了持续连接，则返回值与`fetchStart`一致|
| connectEnd | 浏览器与服务器之间的成功建立连接时的时间戳（TCP）。如果使用了持续连接，则返回值与`fetchStart`一致 |
| secureConnectionStart | 浏览器与服务器开始安全连接的握手时的时间戳。如果当前网页不要求安全连接，则返回0 |
| requestStart | 浏览器向服务器发出HTTP请求时（或开始读取本地缓存时）的时间戳 |
| responseStart | 浏览器从服务器收到（或从本地缓存读取，或从本地资源读取）第一个字节时的时间戳 |
| responseEnd | 浏览器从服务器收到（或从本地缓存读取，或从本地资源读取）最后一个字节时的时间戳 |
| domLoading | 当前网页DOM结构开始解析时的时间戳 (Document.readyState属性变为loading，响应的readystatechange事件触发时) |
| domInteractive | 当前网页DOM结构结束解析，开始加载内嵌资源时的时间戳（Document.readyState属性变为interactive，响应的readystatechange事件触发时） |
| domContentLoadedEventStart | 当解析器发送DOMContentLoaded事件，即所有需要被执行的脚本已经被解析时的时间戳 |
| domContentLoadedEventEnd | 当所有需要立即执行的脚本已经被执行时的时间戳 |
| domComplete | 当文档解析完成，即Document.readyState变为complete且对应的readystatechang被触发时的时间戳 |
| loadEventStart | 该页面下load事件被发送时的时间戳。如果这个事件还未被发送，它的值将会是0 |
| loadEventEnd | load事件结束，即加载事件完成时的时间戳 |
|  |  |

`DONContentLoaded: 仅当DOM加载完成，不包括样式表，图片`
`onload: 页面上的所有dom，样式表，脚本，图片，flash已加载完成`


### 从输入url到页面的展示发生了什么

#### 步骤

1. DNS解析 
浏览器要查询域名对应的IP地址
2. 建立TLS连接 
3. 发送HTTP请求 客户端与服务端进行通信