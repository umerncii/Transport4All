<?php 
   $user = 'root';
   $pass = '';
   $db = 'user';
   
   $conn = new mysqli('localhost', $user, $pass, $db) or die("Unable to connect");//Connection String to the local host.
   
   if (!$conn) { //if connection dies
	die("Connection failed: " . mysqli_connect_error()); //if connection fails this will be performed
   }
   
   $sql = "SELECT * FROM info"; //this is the query which will display everything that is stored in the database
	$result = $conn->query($sql);
	$msg="Thank you";
	//insert
	if(isset($_POST['submit']))
	{
		$msg="";
		$sql = "INSERT INTO info (fName,lName, phNo,email,message) //inserts data to table (info)
		VALUES ('".$_POST["fName"]."','".$_POST["lName"]."','".$_POST["phNo"]."','".$_POST["email"]."','".$_POST["message"]."')";
		$result = mysqli_query($conn,$sql);
		header('Location: index.html');
		
		
	
	}  else{
		$msg = "Message Sending Failed, try again";  // if message fails
	}	
	$conn->close();
	
?>
	
	
	