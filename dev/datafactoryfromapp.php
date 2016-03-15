<?php 
	
	$prefix = "http://sportsdf.datafactory.la/html/v3/";

	// $html = file_get_contents('http://sportsdf.datafactory.la/html/v3/page.html?channel=deportes.futbol.colombia&lang=es_LA&page=fixture');

	// $html = str_replace('src="htmlCenterApp.js"','src="'.$prefix.'htmlCenterApp.js"',$html);

	// $html = str_replace('src="htmlCenter/mc.htmlCenterRequire.min.js?bust=1457978158316"','src="'.$prefix.'htmlCenter/mc.htmlCenterRequire.min.js?bust=1457978158316',$html);

	// $html = str_replace('src="htmlCenter/assets/js/require.js"','src="'.$prefix.'src="htmlCenter/assets/js/require.js"',$html);

	// $html = str_replace('htmlCenter/mc.htmlCenterRequire.min.js?bust=1457978808331',$prefix.'htmlCenter/mc.htmlCenterRequire.min.js?bust=1457978808331',$html);

	// echo $html;


// you can add anoother curl options too
// see here - http://php.net/manual/en/function.curl-setopt.php
function get_dataa($url) {
  $ch = curl_init();
  $timeout = 5;
  curl_setopt($ch, CURLOPT_URL, $url);
  curl_setopt($ch, CURLOPT_USERAGENT, "Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0)");
  curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
  curl_setopt($ch, CURLOPT_SSL_VERIFYHOST,false);
  curl_setopt($ch, CURLOPT_SSL_VERIFYPEER,false);
  curl_setopt($ch, CURLOPT_MAXREDIRS, 10);
  curl_setopt($ch, CURLOPT_FOLLOWLOCATION, 1);
  curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, $timeout);
  $data = curl_exec($ch);
  curl_close($ch);
  return $data;
}

$variableee = get_dataa('http://sportsdf.datafactory.la/html/v3/page.html?channel=deportes.futbol.colombia&lang=es_LA&page=fixture');
echo $variableee;
?>
