# jquery-dateSelector
By using easily select the year

To use this plugin:
* call the jquery libray in your file
* then call this plugin in your same file
* activate the plugin



To active:

#HTML
<!DOCTYPE HTML>
<html lang="en-US">
<head>
	<meta charset="UTF-8">
	<title></title>
</head>
<body>
	<form action="" method="post"> 
		<select name="year" id="year"> 
			<option value="" id="myoptions">Select year</option>
		</select>
		
		<input type="submit" />
	</form>
  
	<script type="text/javascript" src="https://code.jquery.com/jquery-3.2.1.min.js"></script>
	
	<script type="text/javascript" src="jquery-date.js"></script>
	
	
</body>
</html>


#jquery
<script> 
  $('#year').dateSelector({
    startDate: '1980'
  });
</script>
