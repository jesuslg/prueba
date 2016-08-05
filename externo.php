<?php 

// class externo {

	// function __construct()
	// {
	// 	// header("Content-type: application/xml");
	// }
	
 // function datos() {
		 	$page = file_get_contents('https://crm.zoho.com/crm/private/xml/Leads/getRecords?authtoken=4f86a4c7e8f1b2505ff9ba5ae58f3c53&scope=crmapi');
		 	$xml = simplexml_load_string($page, "SimpleXMLElement", LIBXML_NOCDATA);
			$json = json_encode($xml);
			$array = json_decode($json,TRUE);
			echo $json;
			// return $json;
	// }


// }