var posts=["2024/09/04/BaseCTF/","2024/09/19/JWT漏洞利用/","2024/07/21/DASCTF/","2024/07/21/WKCTF/","2024/08/01/kali配置网络/","2024/09/04/moectf/","2024/07/21/weblogic漏洞复现/","2024/07/22/usb流量分析/","2024/09/10/信息收集/","2024/09/22/御网杯/","2024/07/26/命令执行/","2024/07/22/内存取证/","2024/07/23/文件包含/","2024/07/23/隐写一/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };