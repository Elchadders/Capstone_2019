
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
		$con = new PDO('mysql:host=localhost;dbname=healthii_db', $_SESSION [ 'dbUsername' ], $_SESSION [ 'dbPassword' ]);

		$sql="INSERT INTO monitor_data (name, age, id, sex)

		VALUES

		('$_POST[name]','$_POST[age]','$_POST[id]', '$_POST[sex]')";

		 

		if (!mysql_query($sql,$con))

		  {

		  die('Error: ' . mysql_error());

		  }

		echo "1 record added";

		 

		mysql_close($con)

		?>

		 

		 