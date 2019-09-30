alert("Welkom bij XenVival, laten we snel beginnen!");
var userName = prompt("Wat is je naam?");
alert("welkom " + userName);
alert("Als je bij een van de eindes van de game komt, begint de game niet opnieuw tenzij je de pagina refreshed.\n\nOp deze manier kun je het hele verhaal dat op het scherm verschijnt nogmaals doorlezen voordat je opnieuw begint.")
var userAge = prompt("Wat is je leeftijd? Je moet minimaal 12 jaar oud zijn.");
if(userAge >= 12){

	alert("Je bent gestrand op Xen, je bent met een onderzoeksteam naar xen gegaan vanuit de BLACK MESA RESEARCH FACILITY. Xen is een andere dimensie, ook wel de grenswereld genoemd. Doordat je d.m.v. teleportatie naar verschillende plekken kunt gaan (op aarde en binnen xen zelf). Tijdens je onderzoeksmissie, ging er iets vreselijk fout. Onbekende wezens kwamen de onderzoeksbasis binnen, een soort krabben, die zich aan iemands hoofd vastklemmen en zo aan mind control doen, kwamen op onbekende wijze binnen. Iedereen van je team (behalve jij) heeft een krab op zijn hoofd zitten, jij vlucht weg. Er is nog een basis, op een ander zwevend eiland een heel eind verderop. Er is daar nog een teleporter, je weet echter niet wat je aan kunt treffen en bereidt je voor op het ergste, 1 ding is zeker, het is levensgevaarlijk en overleven is het belangrijkste. Tijdens je weg naar buiten vond je een koevoet.");
	document.write("Je bent gestrand op Xen, je bent met een onderzoeksteam naar xen gegaan vanuit de BLACK MESA RESEARCH FACILITY. Xen is een ander dimensie, ook wel de grenswereld genoemd. Doordat je d.m.v. teleportatie naar verschillende plekken kunt gaan (op aarde en binnen xen zelf). Tijdens je onderzoeksmissie, ging er iets vreselijk fout. Onbekende wezens kwamen de onderzoeksbasis binnen, een soort krabben, die zich aan iemands hoofd vastklemmen en zo aan mind control doen, kwamen op onbekende wijze binnen. Iedereen van je team (behalve jij) heeft een krab op zijn hoofd zitten, jij vlucht weg. Er is nog een basis, op een ander zwevend eiland een heel eind verderop. Er is daar nog een teleporter, je weet echter niet wat je aan kunt treffen en bereidt je voor op het ergste, 1 ding is zeker, het is levensgevaarlijk en overleven is het belangrijkste. Tijdens je weg naar buiten vond je een koevoet.");

	var answer = prompt("Je bent gevlucht uit de onderzoeksbasis op xen, je komt aan op een open plek; je ziet allemaal zwevende eilanden om je heen, je merkt echt dat je in een andere dimensie bent. Je ziet ook dat je twee kanten op kunt: Aan de linkerkant zie je een grot, en aan de rechterkant een soort pad dat om de buitenkant van het eiland gaat.\nKies 1 voor de grot links en 2 voor het pad rechts.");
	document.write("<br><br>Je bent gevlucht uit de onderzoeksbasis op xen, je komt aan op een open plek; je ziet allemaal zwevende eilanden om je heen, je merkt echt dat je in een andere dimensie bent. Je ziet ook dat je twee kanten op kunt: Aan de linkerkant zie je een grot, en aan de rechterkant een soort pad dat om de buitenkant van het eiland gaat.")
	if(answer == 1){
		alert("Je gaat de grot in.");
		document.write("<br><br>Je bent de grot ingegaan, je loopt dieper de grot in en je komt wat apperatuur tegen, die wordt gebruikt om de speciale kristallen (ze zijn van negatieve massa en worden vaak meegenomen naar de research facility.) uit te hakken. Ook liggen er explosieven bij een geblokkeerd pad, je kunt naar een niet geblokkeerd pad gaan. Maar daar is een bord neergezet waarop staat: DO NOT ENTER, LOSS OF LIFE IS LIKELY. je kunt dat pad nemen, maar je kunt ook de explosieven gebruiken om de stenen die de andere doorgang blokkeren op te blazen.");
		answer = prompt("Je bent de grot ingegaan, je loopt dieper de grot in en je komt wat apperatuur tegen, die wordt gebruikt om speciale kristallen (ze zijn van negatieve massa en worden vaak meegenomen naar de research facility) uit te hakken. Ook liggen er explosieven bij een geblokkeerd pad, je kunt naar een niet geblokkeerd pad gaan. Maar daar is een bord neergezet waarop staat: DO NOT ENTER, LOSS OF LIFE IS LIKELY. je kunt dat pad nemen, maar je kunt ook de explosieven gebruiken om de stenen die de andere doorgang blokkeren op te blazen.\nKies 1 voor het pad met het waarschuwingsbord of 2 voor het geblokkeerde pad, die je kunt opblazen met explosieven.");
		if(answer == 2){
			document.write("<br><br>Je hebt de explosieven gebruikt om de stenen op het geblokkeerde pad op te blazen, tijdens de explosie trilt de gehele grot, hierdoor komt er ineens een soort reusachtige spin het andere pad af rennen. Jij ziet en hoort dit gebeuren dus je rent onmiddelijk weg.")
			alert("Je hebt de explosieven gebruikt om de stenen op het geblokkeerde pad op te blazen, tijdens de explosie trilt de gehele grot, hierdoor komt er ineens een soort reusachtige spin het andere pad af rennen. Jij ziet en hoort dit gebeuren dus je rent onmiddelijk weg.");
			document.write(" Je rent weg voor de spin, je zie een smalle doorgang en je gaat erin. De spin probeerd door de doorgang te beuken, het duurt niet lang voordat de spin er doorheen is. niet ver voor je zie je een aantal van die krabben en je herinnert je welke naam ze die krabben hadden gegeven: 'hoofdkrabben'. daarachter is een soort halve brug als je precies goed zal springen haal je de sprong wel naar het andere eiland, niet ver naast je ligt een apparaat dat je om je rug kunt binden. je kijkt er naar en weet dat dit een 'sprongmodule' is. Daarmee kun je verder springen. Ook ligt er nog een wapen naast een lijk in een HEV-pak, maar je hebt niet veel tijd.");
			answer = prompt("Je rent weg voor de spin, je zie een smalle doorgang en je gaat erin. De spin probeerd door de doorgang te beuken, het duurt niet lang voordat de spin er doorheen is. niet ver voor je zie je een aantal van die krabben en je herinnert je welke naam ze die krabben hadden gegeven: 'hoofdkrabben'. daarachter is een soort halve brug als je precies goed zal springen haal je de sprong wel naar het andere eiland, niet ver naast je ligt een apparaat dat je om je rug kunt binden. je kijkt er naar en weet dat dit een 'sprongmodule' is. Daarmee kun je verder springen. Ook ligt er nog een wapen naast een lijk in een HEV-pak, maar je hebt niet veel tijd. Kies 1 om te springen zonder sprongmodule, 2 voor springen met sprongmodule");
			if(answer == 2){
				document.write("<br><br>je bind de sprongmodule om je rug, het wapen ligt er nog altijd. Wil je hem nog meenemen?");
				answer = prompt("je bind de sprongmodule om je rug, het wapen ligt er nog altijd. Wil je hem nog meenemen? Typ 1 voor 'ja' of 2 voor 'nee'");
				if(answer == 1){
					alert("Je pakt het wapen op, het blijkt een shotgun te zijn waar nog 17 kogels in zitten. Je gaat nu naar het begin van de brug en op het moment dat je springt, komt de spin door de doorgang achter je en hij heeft je niet kunnen pakken.");
					document.write(" Je pakt het wapen op, het blijkt een shotgun te zijn waar nog 17 kogels in zitten. Je gaat nu naar het begin van de brug en op het moment dat je springt, komt de spin door de doorgang achter je en hij heeft je niet kunnen pakken.");
					alert("Je komt op het andere eiland aan, in de verte zie je de basis al. De basis ziet er bewoond uit aangezien de lockdown procedure actief is, je moet er zo snel mogelijk heen maar voor dat dat kan zijn er nog wat krabben, maar ook houndeyes.");
					document.write(" Je komt op het andere eiland aan, in de verte zie je de basis al. De basis ziet er bewoond uit aangezien de lockdown procedure actief is, je moet er zo snel mogelijk heen maar voor dat dat kan zijn er nog wat krabben, maar ook houndeyes.");
					alert("Gelukkig heb je de shotgun gepakt, je loopt richting de aliens, je schiet op de houndeyes met je shotgun en maakt de hoofdkrabben (headcrabs) dood met je koevoet.");
					document.write(" Gelukkig heb je de shotgun gepakt, je loopt richting de aliens, je schiet op de houndeyes met je shotgun en maakt de hoofdkrabben (headcrabs) dood met je koevoet.");
					answer = prompt("Nu sta je voor de basis, de deur is geblokkeerd, verderop staan wat explosieve planten. Één van deze planten is uit de grond gehaald een staat op een verrijdbare tafel. Een stukje verder is nog een doorgang naar een grot, misschien kun je daar nog een andere doorgang naar de basis vinden. Kies 1 om de geblokkeerde deur op te blazen of 2 voor de grot om te kijken of er een andere doorgang is.");
					document.write("<br><br>nu sta je voor de basis, de deur is geblokkeerd, verderop staan wat explosieve planten. Één van deze planten is uit de grond gehaald een staat op een verrijdbare tafel. Een stukje verder is nog een doorgang naar een grot, misschien kun je daar nog een andere doorgang naar de basis vinden.");
					if(answer == 2){
						alert("Je loopt nu de grot in en daar zit inderdaad een andere deur, deze is echter niet geblokkeerd dus je kunt zo naar binnen door middel van de luchtsluis.\nJe gaat naar binnen en ziet dat ze daar bezig zijn met evacueren, iemand heeft je gezien en helpt je naar de teleporter.\n je stapt de teleporter in en je wordt weer geteleporteerd naar de Black Mesa Research Facility.");
						document.write(" je loopt nu de grot in en daar zit inderdaad een andere deur, deze is echter niet geblokkeerd dus je kunt zo naar binnen door middel van de luchtsluis.\nJe gaat naar binnen en ziet dat ze daar bezig zijn met evacueren, iemand heeft je gezien en helpt je naar de teleporter.\n je stapt de teleporter in en je wordt weer geteleporteerd naar de Black Mesa Research Facility.");
						alert(userName + ", je hebt het 'veilige einde' behaald.");
					}
					else if(answer == 1){
						alert("Je gaat naar de plant, je probeerd te tafel te verrijden. De plant rolt van de tafel af waardoor die gelijk ontploft, waardoor je gedood werd en je levenloze lichaam ligt voor de basis.\nMensen in de basis hebben dit gehoord en nemen je lichaam mee naar de research facility waar je onderzocht gaat worden");
						document.write(" Je gaat naar de plant, je probeerd te tafel te verrijden. De plant rolt van de tafel af waardoor die gelijk ontploft, waardoor je gedood werd en je levenloze lichaam ligt voor de basis.\nMensen in de basis hebben dit gehoord en nemen je lichaam mee naar de research facility waar je onderzocht gaat worden");
						alert(userName + ", je bent dood!");
					}
					else{
						alert(" Je hebt niets ingevult!! De mensen die in de basis waren zijn nu allang geëvacueerd, nu zal je verhongeren en sterven");
						document.write(" De mensen die in de basis waren zijn nu allang geëvacueerd, nu zal je verhongeren en sterven.");
						alert(userName + ", je bent verhongerd doordat je niets hebt ingevult.");
					}
				}
				else if(answer == 2){
					alert("Je hebt gekozen om het wapen niet mee te nemen, je gaat naar het begin van de brug en je springt naar de overkant.\nOp dat moment komt de spin door de doorgang achter je gerend, je bent op tijd gesprongen.");
					document.write("Je hebt gekozen om het wapen niet mee te nemen, je gaat naar het begin van de brug en je springt naar de overkant.\nOp dat moment komt de spin door de doorgang achter je gerend, je bent op tijd gesprongen.");
					alert("Je komt op het andere eiland aan, in de verte zie je de basis al. Maar je ziet ook een aantal hoofdkrabben (headcrabs) en wat houndeyes, je loopt er opaf maar je vergeet dat je geen wapen hebt.\nDe houndeyes gebruiken hun schokgolven om je te doden, je bent gedood door de houndeyes en proberen je nu op te eten.");
					document.write(" Je komt op het andere eiland aan, in de verte zie je de basis al. Maar je ziet ook een aantal hoofdkrabben (headcrabs) en wat houndeyes, je loopt er opaf maar je vergeet dat je geen wapen hebt. De houndeyes gebruiken hun schokgolven om je te doden, je bent gedood door de houndeyes en proberen je nu op te eten.");
				}
				else{
					alert("Je hebt niets ingevult!! De spin komt door de doorgang gerend en hij steekt je dood.");
					document.write(" De spin komt door de doorgang gerend en hij steekt je dood.");
					alert(userName + ", je bent dood doordat je niets invulde");
				}
			}
			else if(answer == 1){
				answer = prompt("Je bindt de sprongmodule niet om je rug, het wapen ligt er nog altijd wil je hem nog meenemen? Kies 1 voor 'ja' en 2 voor 'nee'.");
				document.write("<br><br>Je bindt de sprongmodule niet om je rug.");
				if(answer == 1){
					alert("Je pakt het wapen op en je gaat naar het begin van de brug, je neemt een aanloop en je springt.\nJe springt wel mis en je valt zo de eindeloze ruimte in, aangezien de ruimte buiten xen een 'atmosfeer' heeft ga je niet dood door een zuurstoftekort. Maar je gaat wel dood door verhongering.");
					document.write(" Je pakt het wapen op en je gaat naar het begin van de brug, je neemt een aanloop en je springt. Je springt wel mis en je valt zo de eindeloze ruimte in, aangezien de ruimte buiten xen een 'atmosfeer' heeft ga je niet dood door een zuurstoftekort. Maar je gaat wel dood door verhongering.");
					alert(userName + ", je bent dood!");
				}
				else if(answer == 2){
					alert("Je pakt het wapen niet op en je gaat naar het begin van de brug, je neemt een aanloop en je springt.\nJe springt wel mis en je valt zo de eindeloze ruimte in, aangezien de ruimte buiten xen een 'atmosfeer' heeft ga je niet dood door een zuurstoftekort. Maar je gaat wel dood door verhongering.");
					document.write(" Je pakt het wapen niet op en je gaat naar het begin van de brug, je neemt een aanloop en je springt. Je springt wel mis en je valt zo de eindeloze ruimte in, aangezien de ruimte buiten xen een 'atmosfeer' heeft ga je niet dood door een zuurstoftekort. Maar je gaat wel dood door verhongering.");
					alert(userName + ", je bent dood!");
				}
				else{
					alert("Je hebt niets ingevult!! De spin komt door de doorgang gerend en steekt je dood.");
					document.write(" De spin komt door de doorgang gerend en steekt je dood.");
					alert(userName + ", je bent dood doordat je niets hebt ingevult.");
				}
			}
			else{
				alert("Je hebt niet ingevult!!, De spin komt door de doorgang gerend en steekt je dood.");
				document.write(" De spin komt door de doorgang gerend en steekt je dood.");
				alert(userName + ", je bent dood doordat je niets invulde.");
			}
		}
		else if(answer == 1){
			alert("Je gaat naar het pad met het bord, je gaat de doorgang in en je treft daar een een soort reusachtige spin aan.\nJe denkt dat ie slaapt dus je loopt er langs en op dat moment komt de spin achter je aan, je hebt het niet door en de spin neemt een aanloop en rent zo over je heen. Je breekt je rug, waardoor je met veel pijn sterft.");
			document.write("<br><br>Je gaat naar het pad met het bord, je gaat de doorgang in en je treft daar een een soort reusachtige spin aan. Je denkt dat ie slaapt dus je loopt er langs en op dat moment komt de spin achter je aan, je hebt het niet door en de spin neemt een aanloop en rent zo over je heen. Je breekt je rug, waardoor je met veel pijn sterft.");
			alert(userName + ", je bent dood!");
		}
		else{
			alert("Je hebt niets ingevult!! Een soort reusachtige spin komt van het pad met het bord gelopen en voor je het wist stak de spin je dood.");
			document.write(" Een soort reusachtige spin komt van het pad met het bord gelopen en voor je het wist stak de spin je dood.");
			alert(userName + ", je bent dood!");
		}
	}
	else if(answer == 2){
		alert("Je neemt het pad rechts.");
		document.write("<br><br>Je neemt het pad en uiteindelijk kom je boven op het eiland, er zijn ook enkele gaten te zien waarin ecosystemen met verschillende flora en fauna zijn gevestigd.");
		answer = prompt("Er staat ook apperatuur van Black Mesa, zo staat er een lier die vastzit aan een stuk steen, als je de lier activeerd komt het stuk steen naar je toe.\nMisschien liggen er nog spullen die je later nog kunt gebruiken, je kunt ook gewoon verdergaan en één van de gaten met ecosystemen betreden.\nkies 1 om eerst de spullen van het stuk steen te pakken of 2 om gelijk door te gaan naar de ecosystemen.");
		document.write(" Er staat ook apperatuur van Black Mesa, zo staat er een lier die vastzit aan een stuk steen, als je de lier activeerd komt het stuk steen naar je toe. Misschien liggen er nog spullen die je later nog kunt gebruiken, je kunt ook gewoon verdergaan en één van de gaten met ecosystemen betreden.");
		if(answer == 1){
			alert("Je activeerd de lier en de lier trekt het stuk steen naar je toe, toevallig ligt er nog een ladder bij de apperatuur.\nJe zet de ladder tegen het gesteente aan en klimt op de steen.");
			document.write(" Je activeerd de lier en de lier trekt het stuk steen naar je toe, toevallig ligt er nog een ladder bij de apperatuur. Je zet de ladder tegen het gesteente aan en klimt op de steen.");
			answer = prompt("Je staat nu op de steen, en je treft een lijk in een HEV-pak aan. Op zijn rug zit nog een sprongmodule, je vraagt je af waarom je geen sprongmodule bij je hebt en waarom degene die de module heeft dood is.\nWil je de sprongmodule pakken? Kies 1 voor 'ja' en 2 voor 'nee'");
			document.write(" Je staat nu op de steen, en je treft een lijk in een HEV-pak aan. Op zijn rug zit nog een sprongmodule, je vraagt je af waarom je geen sprongmodule bij je hebt en waarom degene die de module heeft dood is.");
			if(answer == 1){
				alert("Je hebt de sprongmodule om je rug gebonden, en je gaat de ladder weer af. Eenmaal beneden loop je richting de gaten met de ecosystemen");
				document.write(" Je hebt de sprongmodule om je rug gebonden, en je gaat de ladder weer af. Eenmaal beneden loop je richting de gaten met de ecosystemen");
				answer = prompt("Voor het eerste gat staat een tafel, er staat een laptop op, en 2 kistjes, de ene zit op slot en in de andere ligt een wapen.\nHet is een pistool, verder liggen er magazijnen op de tafel waar nog zeker 60 kogels in zitten. Wil je het pistool meenemen? Kies 1 voor 'ja' en 2 voor 'nee'.");
				if(answer == 1){
					alert("Je neemt het pistool en de magazijnen mee.");
					document.write(" Je neemt het pistool en de magazijnen mee.");
					answer = prompt("Je ziet vier gaten met ecosystemen voor je: in het eerste gat zit water, je ziet er grote beesten in zwemmen, de sprong naar de overkant is zelfs te ver voor de sprongmodule. Maar je kunt het alsnog proberen.\n\n Het tweede gat ziet er relatief veilig uit, er zijn alleen wat hoofdkrabben (headcrabs) en een aantal planten die er gevaarlijk uitzien.\n\nJe ziet één plant die uit een soort van 'naald' bestaat die dwars door je heen zou kunnen steken, er liep daar een beest, maar die werd doodgeprikt door de plant.\n\nHet derde gat ziet er wel erg gevaarlijk uit, er zijn veel van die dodelijke planten. Maar ook hoofdkrabben (headcrabs), houndeyes, bullsquids en barnacles. Het zou een groot risico zijn om daar in te gaan.\n\nIn het laatste gat zie je helemaal geen fauna, wel heel wat planten. Dit gat ziet er het veiligst uit, het is te verwachten dat je daar levend doorheen komt. Kies 1 voor het eerste gat, 2 voor het tweede gat, 3 voor het derde gat en 4 voor het laatste gat.");
					document.write("<br><br>Je ziet vier gaten met ecosystemen voor je: in het eerste gat zit water, je ziet er grote beesten in zwemmen, de sprong naar de overkant is zelfs te ver voor de sprongmodule. Maar je kunt het alsnog proberen. Het tweede gat ziet er relatief veilig uit, er zijn alleen wat hoofdkrabben (headcrabs) en een aantal planten die er gevaarlijk uitzien. Je ziet één plant die uit een soort van 'naald' bestaat die dwars door je heen zou kunnen steken, er liep daar een beest, maar die werd doodgeprikt door de plant. Het derde gat ziet er wel erg gevaarlijk uit, er zijn veel van die dodelijke planten. Maar ook hoofdkrabben (headcrabs), houndeyes, bullsquids en barnacles. Het zou een groot risico zijn om daar in te gaan. In het laatste gat zie je helemaal geen fauna, wel heel wat planten. Dit gat ziet er het veiligst uit, het is te verwachten dat je daar levend doorheen komt.");
					if(answer == 1){
						alert("Je springt in het water, je hebt bijna de overkant bereikt. Maar je wordt opgegeten door de beesten die in het water zwemmen, je bent nu dood.");
						document.write("<br><br>Je springt in het water, je hebt bijna de overkant bereikt. Maar je wordt opgegeten door de beesten die in het water zwemmen, je bent nu dood.");
						alert(userName + ", je bent dood!");
					}
					else if(answer == 2){
						alert("Je springt het tweede gat in, je hoeft gelukkig niet langs de dodelijke plant. Er zijn alleen enkele hoofdkrabben (headcrabs), je kunt ze makkelijk aan met je koevoet.");
						document.write("<br><br>Je springt het tweede gat in, je hoeft gelukkig niet langs de dodelijke plant. Er zijn alleen enkele hoofdkrabben (headcrabs), je kunt ze makkelijk aan met je koevoet.");
						alert("Je hebt de headcrabs gedood en je kunt nu verder. Er is een doorgang die leidt tot enkele zwevende stenen, door middel van de sprongmodule kun je van steen naar steen springen om zo het andere eiland te bereiken.\n\nNu heb je het andere eiland bereikt en in een grot in de verte zie je de ingang van de basis al. In de grot ligt een laagje water, waarboven een paar barnacles hangen.");
						document.write(" Je hebt de headcrabs gedood en je kunt nu verder. Er is een doorgang die leidt tot enkele zwevende stenen, door middel van de sprongmodule kun je van steen naar steen springen om zo het andere eiland te bereiken. Nu heb je het andere eiland bereikt en in een grot in de verte zie je de ingang van de basis al. In de grot ligt een laagje water, waarboven een paar barnacles hangen.");
						answer = prompt("Wil je de barnacles doodschieten? 1 voor 'ja' en 2 voor 'nee'.");
						if(answer == 1){
							alert("Je hebt de barnacles doodgeschoten, je kunt nu verder naar de luchtsluis. Je gaat de luchtsluis in en je komt de basis binnen, daar is de evacuatie begonnen nadat het contact met de basis waar jij nu vandaan komt was verbroken.\n\niemand ziet je binnenkomen en helpt je naar de teleporter om terug te gaan naar Black Mesa.");
							document.write(" Je hebt de barnacles doodgeschoten, je kunt nu verder naar de luchtsluis. Je gaat de luchtsluis in en je komt de basis binnen, daar is de evacuatie begonnen nadat het contact met de basis waar jij nu vandaan komt was verbroken. Iemand ziet je binnenkomen en helpt je naar de teleporter om terug te gaan naar Black Mesa.");
							alert(userName + ", Je hebt het 'dodelijke einde' behaald!")
						}
						else if(answer == 2){
							alert("Je schiet de barnacles niet dood, je denkt dat je de ingang wel kunt bereiken. Je loopt richting de ingang en voordat je de ingang kunt bereiken eet één van de barnacles je op.\n\nHet enige wat er van je overblijft zijn een paar botten en je schedel, want de barnacle verteerd geen botten.");
							document.write(" Je schiet de barnacles niet dood, je denkt dat je de ingang wel kunt bereiken. Je loopt richting de ingang en voordat je de ingang kunt bereiken eet één van de barnacles je op. Het enige wat er van je overblijft zijn een paar botten en je schedel, want de barnacle verteerd geen botten.");
							alert(userName + ", je bent dood!")
						}
						else{
							alert("Je hebt niets ingevult!! Je bent nu doodgegaan door verhongering.");
							document.write("Je bent nu doodgegaan door verhongering.");
						}
					}
					else if(answer == 3){
						alert("Je springt het derde gat in, je had niet door dat er een dodelijke plant stond en je komt recht voor de plant. Voordat je het wist stak de plant door je lichaam heen, je ziet je leven voor je ogen voorbijgaan waarna je dood bent.");
						document.write("<br><br>Je springt het derde gat in, je had niet door dat er een dodelijke plant stond en je komt recht voor de plant. Voordat je het wist stak de plant door je lichaam heen, je ziet je leven voor je ogen voorbijgaan waarna je dood bent.");
						alert(userName + ", je bent dood!");
					}
					else if(answer == 4){
						alert("Je bent het vierde gat ingesprongen, het lijkt veilig. Maar schijn bedriegt, er komt een reusachtige spin op je af en hij steekt je dood.");
						document.write("<br><br>Je bent het vierde gat ingesprongen, het lijkt veilig. Maar schijn bedriegt, er komt een reusachtige spin op je af en hij steekt je dood.");
						alert(userName + "je bent dood!");
					}
					else{
						alert("Je staat maar voor je uit te staren en uiteindelijk val je dood neer door uitdroging.");
						document.write("<br><br>Je staat maar voor je uit te staren en uiteindelijk val je dood neer door uitdroging.");
						alert("Je hebt niets ingevult!! Hierdoor ben je nu dood.");
						alert(userName + ", je bent dood!");
					}	
				}
				else if(answer == 2){
					alert("Je hebt ervoor gekozen om het pistool niet mee te nemen. Voor je, op het kale oppervlak komt een houndeye met een rode kleur aangerend. Jij hebt geen wapen, de houndeye komt dichterbij en ontploft. Jij ging hierdoor dood.");
					document.write("<br><br>Je hebt ervoor gekozen om het pistool niet mee te nemen. Voor je, op het kale oppervlak komt een houndeye met een rode kleur aangerend. Jij hebt geen wapen, de houndeye komt dichterbij en ontploft. Jij ging hierdoor dood.");
					alert(userName + ", je bent dood!");
				}
				else{
					alert("Je blijft even rusten, ineens krijg je een stekel in je rug. De stekel heeft je ruggenmerg geraakt, waardoor je onmiddelijk bent verlamd. Je ligt daar alleen maar en je bloedt langzaam dood.");
					document.write("<br><br>Je blijft even rusten, ineens krijg je een stekel in je rug. De stekel heeft je ruggenmerg geraakt, waardoor je onmiddelijk bent verlamd. Je ligt daar alleen maar en je bloedt langzaam dood.");
					alert(userName + ", je bent dood doordat je niets invulde.");
				}	
			}
			else if(answer == 2){
				alert("Je bindt de sprongmodule niet om je rug, op het moment dat je de ladder of wilt gaan gaat de lier stuk. De steen gaat weer verder van het eiland vandaan, jij staat op de ladder die er tussenuit valt, je zweeft nu in de eindeloze ruimte waar je zal sterven aan uitdroging en/of verhongering.");
				document.write(" Je bindt de sprongmodule niet om je rug, op het moment dat je de ladder of wilt gaan gaat de lier stuk. De steen gaat weer verder van het eiland vandaan, jij staat op de ladder die er tussenuit valt, je zweeft nu in de eindeloze ruimte waar je zal sterven aan uitdroging en/of verhongering.");
				alert(userName + ",je bent dood!");
			}
			else{
				alert("Je blijft uitrusten, de lier gaat intussen kapot. De sprongmodule valt daardoor en jij kunt nu nergens meer heen. Je zal nu sterven aan verhongering en/of uitdroging.");
				document.write(" Je blijft uitrusten, de lier gaat intussen kapot. De sprongmodule valt daardoor en jij kunt nu nergens meer heen. Je zal nu sterven aan verhongering en/of uitdroging.");
				alert(userName + ",je bent dood doordat je niets had ingevult.");
			}
		}
		else if(answer == 2){
			alert("Je kiest ervoor om gelijk door te lopen naar de gaten, je struikelt en je valt je helm stuk. Je gooit je helm maar weg aangezien je er niets meer aan hebt, een headcrab komt van achter en klemt zich vast aan je hoofd. Hij heeft je nu onder controle, maar zelf ben je dood.");
			document.write(" Je kiest ervoor om gelijk door te lopen naar de gaten, je struikelt en je valt je helm stuk. Je gooit je helm maar weg aangezien je er niets meer aan hebt, een headcrab komt van achter en klemt zich vast aan je hoofd. Hij heeft je nu onder controle, maar zelf ben je dood.");
			alert(userName + ", je bent dood!");
		}
		else{
			alert("Je doet niets, je bent in shock. dagenlang sta je daar totdat je dood omvalt van slaaptekort en uitdroging.");
			document.write(" Je doet niets, je bent in shock. dagenlang sta je daar totdat je dood omvalt van slaaptekort en uitdroging.");
			alert(userName + " ,je bent dood doordat je niets invulde.");
		}
	}
	else{
		alert("Je blijft wachten bij de paden, je vergeet echter dat er een noodsituatie in de basis was. Je oude teamgenoten (nu onder controle van headcrabs) komen naar buiten en ze slaan je dood.");
		document.write("<br><br>Je blijft wachten bij de paden, je vergeet echter dat er een noodsituatie in de basis was. Je oude teamgenoten (nu onder controle van headcrabs) komen naar buiten en ze slaan je dood.");
		alert(userName + ", Je bent dood!");
	}
}
else{
	alert("Sorry, " + userName + ". Je bent nog te jong om dit spel te spelen.")
}