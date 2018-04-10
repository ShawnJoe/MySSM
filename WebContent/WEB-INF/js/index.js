$(function() {
	
	$.ajax({url:"keepLogin",type:'post',
		contentType:'application/json;charset=utf-8',
		success:function(result) {
			if(result == "2") {
				$('#rightLogin').css("display","block");
				$('#rightLogined').css("display","none");
				return ;
			}
			$('#rightLogin').css("display","none");
			$('#loginUser').text(result);
			$('#rightLogined').css("display","block");
		}
	});
	if($('#rightLogin').css("display") != "none"){
		if($.cookie("username") != null) {
			$('#username').val($.cookie("username"));
		}
		if($.cookie("password") != null) {
			$('#password').val($.cookie("password"));
		}
	}
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
	
//	$.cookie("username", User.username);
//	$.cookie("password", User.password);
	var json = {'username':User.username,'password':User.password};
	sessionStorage.setItem("username", User.username);
	sessionStorage.setItem("password", User.password);
//	"http://localhost:8080/ssm/" +
	$.ajax({url:"login",type:'post',
		data:JSON.stringify(json),
		contentType:'application/json;charset=utf-8',
		success:function(result) {
			if(result == "1") {
				alert("登录成功");
				$('#rightLogin').css("display","none");
				$('#loginUser').text(User.username);
				$('#rightLogined').css("display","block");
			} else if (result == "2") {
				alert("登录失败");
			}
		}
	});
}
function logout() {
	var json = {"username":$('#loginUser').text()}
	$.ajax({url:"logout",type:'post',
		data:JSON.stringify(json),
		contentType:'application/json;charset=utf-8',
		success:function(result) {
			if(result = "1") {
				alert("注销成功");
				$('#rightLogin').css("display","block");
				$('#loginUser').text("");
				$('#rightLogined').css("display","none");
			}
		}
	});
	
}