$(function() {
	$.ajax({url:"listCategory1",type:'post',
		
		contentType:'application/json;charset=utf-8',
		success:function(result) {
			if(result = "1") {
				alert("成功");
				window.location.href="listCategory1.html";
			}
		}
	});
});


function submit() {
	var User = {};
	if($('#username').val() == "") {
		$('#name').css("display","inline")
		return ;
	}
	if($('#password').val() == "") {
		$('#pass').css("display","inline")
		return ;
	}
	User.username = $('#username').val();
	User.password = $('#password').val();
	
	$.cookie("username", User.username);
	$.cookie("password", User.password);
	var json = [{'username':User.username,'password':User.password},{'username':'bbb','password':'bbb'}];
	sessionStorage.setItem("username", User.username);
	sessionStorage.setItem("password", User.password);
//	"http://localhost:8080/ssm/" +
	$.ajax({url:"listCategory",type:'post',
		data:JSON.stringify(json),
		contentType:'application/json;charset=utf-8',
		success:function(result) {
			if(result = "1") {
				alert("成功");
				window.location.href="listCategory1.html";
			}
		}
	});
}