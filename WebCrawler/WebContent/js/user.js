// The root URL for the RESTful services
var rootURL = "http://localhost:8080/WebCrawlerBackend/webcrawler/userService/";

$('#register').click(function() {
	location.href = "http://localhost:8080/WebCrawler/register.html";
});

$('#registerBtn').click(function() {
	if($('#username').val() == '' || $('#password').val() == '' || $('#email').val()=='')
	{
		alert('Please Enter Username/Password/Email');
		return;
	}
	register();
});

$('#login').click(function() {
	location.href = "http://localhost:8080/WebCrawler/index.html";
});

$('#loginBtn').click(function() {
	if($('#username').val() == '' || $('#password').val() == '')
	{
		alert('Please Enter Username/Password');
		return;
	}
	login();
});

function register() {
	var y = '';
	$.ajax({
		type: 'POST',
		contentType: 'application/json',
		url: rootURL+ "doRegister",
		dataType: "json",
		data: registerToJSON(),
		success: function(data, textStatus, jqXHR){
			alert('Registration successfull');
		},
		error: function(jqXHR, textStatus, errorThrown){
			alert('Registration error: ' + textStatus + errorThrown);
		}
	});
}

function login() {
	var y = '';
	$.ajax({
		type: 'POST',
		contentType: 'application/json',
		url: rootURL+ "doLogin",
		dataType: "text",
		data: loginToJSON(),
		success: function(data, textStatus, jqXHR){
			console.log(data + "----" + textStatus + "----" + jqXHR);
			var obj = JSON.parse(data);
			//console.log(obj.StatusCode);
			//console.log(obj.AuthKey);
			sessionStorage.setItem('auth-key',obj.AuthKey);
			//console.log('http://localhost:8080/WebCrawler/crawler.html');
			location.href = "http://localhost:8080/WebCrawler/crawler.html";
		},
		error: function(jqXHR, textStatus, errorThrown){
			console.log(jqXHR + "----" + textStatus + "----" + errorThrown)
			alert('Login error: ' + textStatus + errorThrown);
		}
	});
}

//Helper function to serialize all the form fields into a JSON string
function registerToJSON() {
	return JSON.stringify({
		"username": $('#username').val(), 
		"password": $('#password').val(),
		"email": $('#email').val()
		});
}

//Helper function to serialize all the form fields into a JSON string
function loginToJSON() {
	return JSON.stringify({
		"username": $('#username').val(), 
		"password": $('#password').val()
		});
}
