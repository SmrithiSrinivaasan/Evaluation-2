var n1 = 0;
var n2 = -11;
var n3 = -4;

if (n1 > n2 && n2 > n3) 
{
  alert(n1 + ", " + n2 + " ," + n3);
} 
else if (n1 > n2 && n2 < n3) 
{
  if (n1 < n3) 
  {
    alert(n3 + ", " + n1 + ", " + n2);
  } 
  else 
  {
    alert(n1 + ", " + n3 + ", " + n2);
  }
} 
else if (n1 < n2 && n2 > n3) 
{
  if (n1 < n3) 
  {
    alert(n2 + ", " + n3 + ", " + n1);
  } 
  else
  {
    alert(n2 + ", " + n1 + ", " + n3);
  }
} 
else if (n1 < n2 && n2 < n3) 
{
  alert(n3 + ", " + n2 + ", " + n1);
}
