<?php 
    require_once '../../config/fungsi.php';

    $idposting = $_POST['idposting'];
    $username = $_POST['username'];

    // check db, sudah di like atau belum
    $query = mysqli_query($koneksi, "SELECT * FROM jempol_like WHERE idposting = $idposting AND username = '$username'");
    $liked = mysqli_num_rows($query);
    
    // apabila belum dilike insert otherwise delete
    if($liked == 0)
        mysqli_query($koneksi, "INSERT INTO jempol_like (idposting, username) VALUES ($idposting, '$username')");
    else
        mysqli_query($koneksi, "DELETE FROM jempol_like 
                                WHERE idposting = $idposting 
                                AND username = '$username'");