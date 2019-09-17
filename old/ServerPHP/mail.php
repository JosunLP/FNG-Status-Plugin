<!--File must be uploadet to your Server to execute the mail action-->

<?php
$empfaenger = "test@yourdomain.test";

if( isset($_REQUEST['submit']) )
{
  if( !empty($_REQUEST['betreff']) && !empty($_REQUEST['inhalt']) )
  {
    mail( $empfaenger, $_REQUEST['betreff'], $_REQUEST['inhalt'] );
  }
  else {
    echo "window.allert('Error #666 please try again')";
  }
}


?>
