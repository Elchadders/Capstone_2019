<?php
	session_start();
	//establish database connection requirements
		//establish database connection requirements
		$_SESSION [ 'dbHost' ] = 'localhost';
		$_SESSION [ 'dbUsername' ] = 'root';
		$_SESSION [ 'dbPassword' ] = '';
		$_SESSION [ 'dbName' ] = 'healthii_db';
		
	//establish processes
		//establish database connection
		//connection to the database
		$connection = new PDO('mysql:host=localhost;dbname=healthii_db', $_SESSION [ 'dbUsername' ], $_SESSION [ 'dbPassword' ]);
		$result = $connection->query ( "select * from monitor_data" );
		
		if (!$result) {
			echo "\nPDO::errorInfo():\n";
			print_r($dbh->errorInfo());
		}


		
		while($row = $result->fetch(PDO::FETCH_ASSOC))
		{
			$output[] = array(
			"personId" => $row['id'],
			"personStatus" => $row['status'],
			"personLocation" => $row['location'],
			"assignedEmtId" => $row['assigned_emt_id']
			);
		}
		header('Content-Type: application/json');
		echo json_encode($output);
?>

