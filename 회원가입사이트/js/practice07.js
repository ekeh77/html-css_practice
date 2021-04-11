/* 전역변수들 */
var chkLoginId = [];
var chkLoginPass = [];
var account = [];
var accountNum = 0;
var chkLogin = 0;

/* 계정생성 객체 */

var makeAccount = function(getid, getpass, getname, gettel, getemail){

	this.idData = getid
	this.PassData = getpass
	this.NameData = getname
	this.telData = gettel
	this.EmailData = getemail

}

/* 가입버튼 클릭 시 */

var joinConfirm = function(){

	var idData = getId("joinIdInput");
	var passData = getId("joinPassInput");
	var nameData = getId("joinNameInput");
	var telData = getName("JoinTelInput");
	var emailData = getId("joinMailInput");
	var telfinish = "";
	

	for (var i = 0; i<telData.length; i++)
	{
		telfinish += telData[i].value;
	}
	
	

	account[accountNum] = new makeAccount(idData.value,passData.value,nameData.value,telfinish,emailData.value);
	
	var strHTML = "";

	for (var j=0; j<account.length; j++)
	{
		strHTML += "<div>";
		strHTML += "<span> ID : " + account[j].idData + "</span>";
		strHTML += "<span> Password : " + account[j].PassData + "</span>";
		strHTML += "<span> Name : " + account[j].NameData + "</span>";
		strHTML += "<span> Tel : " + account[j].telData + "</span>";
		strHTML += "<span> Email : " + account[j].EmailData + "</span>";
		strHTML += "</div>";
	}
	

	var database = getId("inputData");
	database.innerHTML = strHTML;

	chkLoginId[chkLogin] = account[accountNum].idData;
	chkLoginPass[chkLogin] = account[accountNum].PassData;

	chkLogin += 1
	accountNum += 1

	alert("축하합니다 저희 사이트에 가입되셨습니다요 로그인해주세요");
	
};

/* HTML id 가져오기 */

var getId = function(giveMeId){

	return document.getElementById(giveMeId);

};

/* HTML name 가져오기 */

var getName = function(name){

	return document.getElementsByName(name);

};

/* 로그인 버튼을 눌렀을 때 */

var loginSite = function(){
	var loginId = getId("loginIdInput");
	var loginPass = getId("loginPassInput");
	var mainPage = getId("mainPage");
	var passNum = 0;

	for (var i = 0; i<account.length; i++)
	{	
		if (loginId.value == account[i].idData && loginPass.value == account[i].PassData)
		{
			passNum += 1;
		}
	}

	if(passNum == 1){

		alert("일치합니다 사이트에 로그인합니다");

		var strHTML ="";
			strHTML += "<div id='mainPageTitle'>";
			strHTML += "<span>Welcom My Poketmon Page</span>";
			strHTML += "</div>";

			for (var i=0; i<PoketmonDogam.length; i++)
			{
				strHTML += "<div id='mainPageShow'>";
				strHTML += "<div id='poketmonImg'>";
				strHTML += "<span id='poketmontext'>" + PoketmonDogam[i].Name + "</span>";
				strHTML += "<img src='" + PoketmonDogam[i].imgUrl + "'/>";
				strHTML += "</div>";
				strHTML += "</div>";
			}
			
			mainPage.innerHTML = strHTML;
	}
	else{

		alert("아이디 또는 비밀번호가 틀렸습니다 다시입력해주세요");

		var strHTML ="";

		mainPage.innerHTML = strHTML;
	}
}

/* 포켓몬제작 객체 */

var makePoketmon =function(poketmonName, imgUrl){

	this.Name = poketmonName;
	this.imgUrl = imgUrl;

}

/* 포켓몬도감 */

var PoketmonDogam = [];
PoketmonDogam [0] = new makePoketmon("울머기","./img/ulmogi.png");
PoketmonDogam [1] = new makePoketmon("메타몽","./img/metamong.png");
PoketmonDogam [2] = new makePoketmon("나옹","./img/nayon.png");

var onlyNum = function(obj){
	for (var i=0; i<10; i++)
	{
		obj
	}
	
	console.log(findNum);
}