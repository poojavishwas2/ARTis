<?php
if($_POST["message"]) {
    mail("arqam@ebaniadvertising.in", "Form to email message", $_POST["message"], "From: an@email.address");
}
?>