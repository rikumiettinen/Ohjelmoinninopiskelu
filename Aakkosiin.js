function aakkosiin(teksti)
{
  var taulukkoteksti
  = Array.from(teksti);
  taulukkoteksti.sort();
  var text
  =taulukkoteksti.join('');
  console.log(text);
}
