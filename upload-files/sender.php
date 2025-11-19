<?php
if(!empty($_FILES['file'])){
    $maxFileSize = 25 * 1024 * 1024;  // 25 MB en bytes

    if ($_FILES['file']['size'] > $maxFileSize) {
        echo 'Error: El archivo supera el tamaño máximo permitido de 25 MB.';
        exit;  // Detener la ejecución si el archivo es demasiado grande
    }
    
    $targetDir = 'uploads/';
    $filename = basename($_FILES['file']['name']);
    $targetFilePath = $targetDir.$filename;

    // Verificar si el archivo es PDF o imagen antes de cargarlo
    $fileType = strtolower(pathinfo($targetFilePath, PATHINFO_EXTENSION));

    // Aceptar solo archivos PDF e imágenes
    if ($fileType == 'pdf' || in_array($fileType, ['jpg', 'jpeg', 'png'])) {
        // Mover el archivo al directorio de destino
        if(move_uploaded_file($_FILES['file']['tmp_name'], $targetFilePath)){
            echo 'File uploaded successfully';
        } else {
            echo 'Error in uploading the file';
        }
    } else {
        echo 'Invalid file type';
    }
}
?>