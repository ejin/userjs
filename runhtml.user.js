//javascript:var myScript= document.createElement("script");myScript.type = "text/javascript";myScript.src="https://cdn.rawgit.com/ejin/userjs/master/runhtml.user.js";document.body.appendChild(myScript);

document.body.innerHTML=unescape("%3Ctitle%3E%u7F51%u9875%u4EE3%u7801%u6D4B%u8BD5%u9875%3C/title%3E%0A%3Cstyle%3E%0A.gocode%7Bwidth%3A100%25%3Bheight%3A400px%3Bbackground-color%3A%20%23FCFCFC%3Bborder%3A1px%20%23009ACE%20solid%3Bfont%3A12px%20tahoma%3Bline-height%3A18px%3B%7D%0A.input-code%7Bfont-size%3A9pt%3Bbackground%3A%23ECF3FC%3Bborder-top%3A1px%20solid%20%23fff%3Bborder-right%3A1px%20solid%20%23aaa%3Bborder-bottom%3A1px%20solid%20%23ccc%3Bborder-left%3A1px%20solid%20%23fff%3B%7D%0A%3C/style%3E%0A%3C/head%3E%0A%3Cbody%3E%0A%3Ccenter%3E%0A%3Cform%20target%3D%22_blank%22%20method%3D%27POST%27%3E%0A%3Ctextarea%20class%3D%22gocode%22%20id%3D%22runcode1%22%20name%3D%22code%22%3E%3C/textarea%3E%3Cbr%20/%3E%0A%3Cinput%20type%3D%22button%22%20class%3D%22input-code%22%20value%3D%22%u8FD0%u884C%u4EE3%u7801%22%20onclick%3D%22runcode%28%27runcode1%27%29%22%3E%0A%3Cinput%20type%3D%22button%22%20class%3D%22input-code%22%20value%3D%22%u63D2%u5165%u7ED3%u6784%22%20onclick%3D%22htmlcode%28%27runcode1%27%29%22%3E%0A%3Cspan%20class%3D%22code-tishi%22%3E%u63D0%u793A%uFF1A%u60A8%u53EF%u4EE5%u5148%u4FEE%u6539%u90E8%u5206%u4EE3%u7801%u518D%u8FD0%u884C%3C/span%3E%0A%0A%3C/form%3E%0A%3C/center%3E")

function runcode(cod1)  {
	 cod=document.getElementById(cod1)
	  var code=cod.value;
	  if (code!=""){
		  var newwin=window.open('','','');  
		  newwin.opener = null 
		  newwin.document.write(code);  
		  newwin.document.close();
	}
}
function htmlcode(obj) {
	document.getElementById(obj).value="<html><head>\n\n</head><body>\n\n"+document.getElementById(obj).value+"\n\n</body></html>";
	}
