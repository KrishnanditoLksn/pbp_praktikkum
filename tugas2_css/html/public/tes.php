<!DOCTYPE html>
<html>
<head>
    <title>Page Title</title>
</head>
<body>
<?php
    if(isset($_POST["username"])){
        $username =  $_POST["username"];
        $password = hash('sha256', '$POST["password"]');
        $conn = mysqli_connect("localhost", "root", "","latihan");
        $query = mysqli_query($conn, "INSERT INTO users VALUES ('','$username','$password')");

    }
?>
<form action="" method="post">
    <label for="">Username </label>
    <input type="text" name="username">

    <br> <br>
    <label for="">Password </label>
    <input type="password" name="password">

    <br>
    <button type="submit"> login </button>

</form>

</body>
</html>


