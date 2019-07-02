angular.
module('App').
component('phoneList', {  
  template:
  '<img src="IMG/logo.png">' +
  '<header >'+
  '<div id="menu">'+
  '<a href="home.html"><button class="submenu" id="home" ><font face="Helvetica"><b>Home</b></font></button></a>'+
  '<a href="article.html"><button class="submenu" id="article" ><font face="Helvetica"><b>Article</b></font></button></a>'+
  '<a href="video.html"><button class="submenu" id="video"><font face="Helvetica"><b>Video</b></font></button></a>'+
  '<a href="games.html"><button class="submenu" id="games"><font face="Helvetica"><b>Games</b></font></button></a>'+
  '<a href="about_us.html"><button class="submenu" id="about_us"><font face="Helvetica"><b>About Us</b></font></button></a>'+
  '<a href="TulisArtikel.html"><img src=IMG/write.png width="30px" height="30px" style=";margin-top:14px;cursor:pointer;margin-left:19%;"></a>'+
  '<div class="search-container">'+
  '<form action="/action_page.php">'+
  '<input type="text" placeholder="Search.." name="search">'+
  '<button type="submit"><i class="fa fa-search"></i></button>'+
  '</form>'+
  '</div>'+
  '<div id="mySidenav" class="sidenav">'+
  '<a href="javascript:void(0)" class="closebtn" onclick="closeNav()">&times;</a>'+
  '<center><img src="IMG/a8.jpg" width="70px" height="70px;">'+
  '<hr>'+
  '<h3  style="color:white;"><a style="color:white; margin-right:40px;" href="isi_akun.html">Indah</a></h3>'+
  '<p style="color:white;"><i class="fa fa-user-circle-o"></i>Akun</p>'+
  '<p style="color:white;"><i class="fas fa-sign-out-alt"></i>Log Out</p>'+
  '</center>'+
  '</div>'+
  '<div class="rigthnav" onclick="openNav()">'+
  '<p></p>'+
  '<p></p>'+
  '<p></p>'+
  '<p></p>'+
  '<div class="bar1"></div>'+
  '<div class="bar2"></div>'+
  '<div class="bar3"></div>'+
  '</div>'+
  '</div>'+
  '</header>'
});

