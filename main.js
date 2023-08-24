x=[];
function submit() {
    var y=[];
    for (var j = 1; j <= 4; j++) {
    var name = document.getElementById("name_of_the_student_"+j).value;
x.push(name); }
var z = x.length;
 for(var k=0; k<z;k++) 
 {
    y.push("<h4>NAME - "+x[k]+"</h4>");
   }
   document.getElementById("display_name_with_commas").innerHTML = y; 
 var a = y.join(" ");
 document.getElementById("display_name_without_commas").innerHTML = a ;
 document.getElementById("submit_button").style.display="none";
 document.getElementById("sort").style.display="inline-block"; }

 function s() {
  x.sort()
  var d = [];
  var z = x.length;
 for(var k=0; k<z;k++) 
 {
    d.push("<h4>NAME - "+x[k]+"</h4>");
   }
   document.getElementById("display_name_with_commas").innerHTML = d; 
 var a = y.join(" ");
 document.getElementById("display_name_without_commas").innerHTML = a ;


 }