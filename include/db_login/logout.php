<?php
	setcookie("STU", "", time() - 3600);
	setcookie("SNU", "", time() - 3600);
	setcookie("SUN", "", time() - 3600);
	setcookie("STASA", "", time() - 3600);
	setcookie("SUID", "", time() - 3600);
	setcookie("SSL", "", time() - 3600);
	unset($_COOKIE['STU']); 
    setcookie('STU', null, -1, '/'); 
	unset($_COOKIE['SUID']); 
    setcookie('SUID', null, -1, '/'); 
	unset($_COOKIE['SNU']); 
    setcookie('SNU', null, -1, '/'); 
	unset($_COOKIE['SUN']); 
    setcookie('SUN', null, -1, '/'); 
	unset($_COOKIE['SSL']); 
    setcookie('SSL', null, -1, '/'); 
	unset($_COOKIE['STUID']); 
    setcookie('STUID', null, -1, '/'); 
	unset($_COOKIE['STASA']); 
    setcookie('STASA', null, -1, '/'); 
	header('Location: ../../login.php'); 
?>