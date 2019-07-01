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
  '<div class="search-container" align="right">'+
  '<form action="/action_page.php">'+
  '<input type="text" placeholder="Search.." name="search">'+
  '<button type="submit"><i class="fa fa-search"></i></button>'+
  '</form>'+
  '</div>'+
  '</div>'+
  '</header>'
});

