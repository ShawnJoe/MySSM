$(function() {
	if($.cookie("username") != null) {
		$('#username').val($.cookie("username"));
	}
	if($.cookie("password") != null) {
		$('#password').val($.cookie("password"));
	}
});


function submit() {
	var User = {};
	User.username = $('#username').val();
	User.password = $('#password').val();
	$.cookie("username", User.username);
	$.cookie("password", User.password);
	var json = [{'username':User.username,'password':User.password},{'username':'bbb','password':'bbb'}];
	
//	sessionStorage.setItem("username", User.username);
//	sessionStorage.setItem("password", User.password);
//	"http://localhost:8080/ssm/" +
	$.ajax({url:"listCategory",type:'post',
		data:JSON.stringify(json),
		contentType:'application/json;charset=utf-8',
		success:function(result) {
			for(var i = 0; i < result.length;i++) {
				alert(result[i].username);
			}
		}
	})
}