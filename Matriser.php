<html>
<?php
	printf("<script src='Matriser.js?%d'></script>", rand(1, 9999));
?>
<style>
p{ margin: 0px;}
</style>
<body id="body">
<p>Skapa Matris</p>
<br>
<input type="number" id="a" placeholder="matris y led">
<input type="number" id="b" placeholder="matris x led">
<button type="button" onclick="create_matris(event);"> Skapa matris!</button>
</body>
</html>