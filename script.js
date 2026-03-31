function filterSelection(c) {
  var x, i;
  x = document.getElementsByClassName("portfolio-item");
  if (c == "all") c = "";
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    if (x[i].className.indexOf(c) > -1) x[i].style.display = "block";
  }
}