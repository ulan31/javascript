var tableOpen = "<table>";
var tableClose = "</table>";
var tr = "<tr>";
var trClose = "</tr>";
var td = "<td>";
var tdClose = "</td>";
document.write(tableOpen);
for(var i=0; i<8; i++)
{
	document.write(tr);
	for(var j=0; j<8; j++)
	{
		document.write(td);
		document.write(tdClose);
	}
	document.write(trClose);
}
document.write(tableClose);
//document.write(tableOpen+tr+td+tdClose+trClose+tableClose);