function osoitetiedot(etunimi, sukunimi, losoite, pnro, ptp, puh, email)
{
  this.etunimi = etunimi,
  this.sukunimi = sukunimi,
  this.lahiosoite = losoite,
  this.postinumero = pnro,
  this.postitoimipaikka = ptp,
  this.puhelinnumero = puh,
  this.sahkoposti = email
}
var Riku = new osoitetiedot("Riku", "Miettinen", "keskikatu 3", "04200", "Kerava", "0442288242", "riku.miettinen@edu.keuda.fi");
console.log(Riku.sukunimi);
