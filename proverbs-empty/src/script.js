var data =
[
	["Jobb adni", "mint kapni."],
	["Bámul", "mint borjú az új kapura."],
	["Hallgat", "mint a süket disznó a búzában."],
	["Többet ésszel", "mint erővel."],
	["Jobb félni", "mint megijedni."],
	["Nagyobb a füstje", "mint a lángja."],
	["Úgy hazudik", "mint a vízfolyás."],
	["A hazugot hamarabb utolérik", "mint a sánta kutyát."],
	["Úgy megy", "mint a karikacsapás."],
	["Jobb későn", "mint soha."],
	["Többe kerül a leves", "mint a hús."],
	["Kerülgeti", "mint macska a forró kását."],
	["Úgy játszik vele", "mint macska az egérrel."],
	["Olyan messze van tőle", "mint Makó Jeruzsálemtől."],
	["Úgy él", "mint Marci Hevesen."],
	["Úgy ismerik", "mint a rossz pénzt."],
	["Eltűnt", "mint szürke szamár a ködben."],
	["Úgy vigyáz rá", "mint a szeme fényére."],
	["Szegény vagyok", "mint a templom egere."],
	["Annyit ért hozzá", "mint tyúk az ábécéhez."],
	["Jobb ma egy veréb", "mint holnap egy túzok."],
	["Úgy elveri", "mint szódás a lovát."],
	["Csak él", "mint hal a vízben."],
	["Örül neki", "mint majom a farkának."],
	["Ritka", "mint a fehér holló."],
	["Vak vagy", "mint a bányaló."],
	["Olyan sötét vagy", "mint az éjszaka."],
	["Úgy vág az esze", "mint a borotva!"],
	["Olyan világos", "mint a vakablak."],
];

var bx, ax = Math.floor(Math.random() * data.length);
do{
	ax = Math.floor(Math.random() * data.length);
}
while(ax == bx);

var before = data[bx][0];
var after = data[ax][1];
var text = before +", "+ after;
var p = document.querySelector("#main p")
p.innerHTML = text;
console.log(p);