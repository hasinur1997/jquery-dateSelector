# jquery-dateSelector
By using easily select the year

To use this plugin:
* call the jquery libray in your file
* then call this plugin in your same file
* activate the plugin



To active:

#HTML
<form> 
  <select id="year" name="year"> 
    <option>select year</option>
  </select>
</form>


#jquery
<script> 
  $('#year').dateSelector({
    startDate: '1980'
  });
</script>
