var tabB = new Array(46);
/*bronie*/ tabB[0]= "CELNA: Strzelając z tej broni, łatwo trafić w cel. W takiej sytuacji zyskujesz premię +10 do Testu trafienia."; 
/*bronie*/ tabB[1]= "DEKONCENTRUJĄCA: Ze względu na swoją niebezpieczną naturę broń Dekoncentrująca może zmuszać wroga do cofania się. Zwykle działa podobnie jak bicz. Zamiast zadawać Obrażenia, udany atak bronią Dekoncentrującą może zmusić przeciwnika do cofnięcia się o 1 metr na każdy PS, o który wygrywasz Test Przeciwstawny."; 
/*bronie*/ tabB[2]= "DRUZGOCZĄCA: Pewne bronie są po prostu ogromne albo zadają straszliwe obrażenia ze względu na swoją masę lub formę. Po udanym trafieniu dodaj do wszelkich Obrażeń zadanych przez broń Druzgoczącą wynik na kostce jedności w rzucie na atak. Broń Tępa nigdy nie może być także Druzgoczącą (cecha Tępa jest nadrzędna).";
/*bronie*/ tabB[3]= "ŁAMACZ MIECZY: Pewne rodzaje broni przeznaczone są do unieruchamiania innych, a czasem nawet są w stanie je złamać. Jeśli uzyskasz Trafienie Krytyczne, broniąc się przed atakiem broni siecznej, możesz ją unieruchomić, zamiast korzystać z efektów Trafienia Krytycznego. Jeśli się na to zdecydujesz, wykonaj Test Przeciwstawny Siły, dodając swój PS z poprzedniego Testu Walki Wręcz. Jeśli Test się uda, twój przeciwnik upuszcza ostrze, które zostaje wyrwane mu z dłoni. Jeśli uzyskasz Zdumiewający Sukces, nie tylko rozbrajasz przeciwnika, ale siła twojego manewru powoduje także złamanie ostrza jego broni, o ile nie ma ona Zalety Niełamliwa. Jeśli Test się nie uda, twój przeciwnik uwalnia ostrze i może walczyć normalnie.";
/*bronie*/ tabB[4]= 'NADZIEWAJĄCA: Broń Nadziewająca może zabić jednym czystym ciosem. Zadaje ona Trafienie Krytyczne przy dowolnej wartości rzutu podzielnej przez 10 (np. 10, 20, 30 itd.), a także przy dubletach (tj. 11, 22, 33), jeśli wynik rzutu był równy lub niższy od poziomu odpowiedniego Testu w walce. Jeśli cecha Nadziewająca charakteryzuje użytą broń dystansową, oznacza to, że amunicja głęboko utkwiła w ciele trafionej ofiary. Usunięcie takich strzał lub bełtów wymaga udanego Wymagającego (+0) Testu Leczenia. Wyjęcie pocisków z broni prochowej wymaga już zabiegu chirurgicznego (patrz Talent Chirurgia w Rozdziale 4: Umiejętności i Zdolności). Postać nie może wyleczyć jednej ze swoich Ran za każdy';
/*bronie*/ tabB[5]= "NIEŁAMLIWA: Broń jest wyjątkowo dobrze wykonana lub do jej konstrukcji użyto szczególnie mocnego materiału. W większości okoliczności ta broń nie złamie się, nie ulegnie korozji ani nie stępi się.";
/*bronie*/ tabB[6]= "OGŁUSZAJĄCA: Broń Ogłuszająca szczególnie dobrze nadaje się do sprowadzania wrogów do parteru. Jeśli trafisz w głowę bronią Ogłuszającą, wykonaj Test Przeciwstawny Siły przeciw Odporności trafionego przeciwnika. Jeśli wygrasz Test, cel dostaje Stan Oszołomienie.";
/*bronie*/ tabB[7]= "PARUJĄCA: Broń Parująca przeznaczona jest do parowania ataków. Jeśli posługujesz się taką bronią, dostajesz premię +1 PS do każdego Testu Broni Białej, gdy parujesz atak.";
/*bronie*/ tabB[8]= "PISTOLET: Można używać tej broni do atakowania w walce w zwarciu.";
/*bronie*/ tabB[9]= "PLĄCZĄCA: Broń Plącząca ma zazwyczaj długie łańcuchy z obciążnikami na końcach, przez co bardzo trudno skutecznie bronić się przed nią parowaniem. Testy Broni Białej przeciwko atakowi broni Plączącej obciążone są karą -1 PS, ponieważ parowane ciosy owijają się wokół ostrzy lub górnych krawędzi tarcz.";
/*bronie*/ tabB[10]= "PRECYZYJNA: Tą bronią łatwo trafić w cel. Zyskujesz premię +1 PS do każdego udanego Testu podczas ataku tą bronią.";
/*bronie*/ tabB[11]= "PROCHOWA: Huk wystrzałów, po którym następują kłęby dymu i zamieszanie, może być przerażający. Jeśli jesteś celem broni prochowej, musisz wykonać udany Przeciętny (+20) Test Opanowania, inaczej otrzymujesz Stan Panika, nawet jeśli strzał spudłuje.";
/*bronie*/ tabB[12]= "PRZEBIJAJĄCA: Aby ustalić Obrażenia zadane na skutek trafienia bronią Przebijającą, można wykorzystać wynik rzutu kostką jedności albo PS, cokolwiek jest wyższe. Na przykład, jeśli wyrzucisz 34 w Teście ataku, a wynik celu wynosił 52, możesz użyć PS, który w tym przypadku jest równy 2, albo wyniku rzutu jedności, czyli 4. Broń Tępa nigdy nie może być także Przebijającą (cecha Tępa jest nadrzędna).";
/*bronie*/ tabB[13]= "PRZEKŁUWAJĄCA: Ta broń niezwykle skutecznie przebija się przez pancerz. Punkty Pancerza z warstw niemetalowych są ignorowane. W przypadku wszystkich pozostałych pancerzy pomijany jest ich pierwszy PP.";
/*bronie*/ tabB[14]= "RĄBIĄCA: Broń rąbiąca ma ciężkie ostrze, które z przerażającą łatwością przecina pancerze. Jeśli trafisz przeciwnika, uszkadzasz trafiony fragment pancerza lub tarczy za 1 punkt. Jednocześnie normalnie ranisz cel.";
/*bronie*/ tabB[15]= "SZYBKA: Szybka broń uderza z taką prędkością, że parowanie ciosu w zasadzie nie wchodzi w grę. Przeciwnik zostaje przebity, zanim zdoła zareagować. Bohater posługujący się Szybką bronią może zdecydować się na atak poza normalną sekwencją Inicjatywy, atakując pierwszy, ostatni lub w innej, wybranej przez siebie kolejności. Co więcej, wszystkie Testy obrony Bronią Białą przeciwko Szybkiej broni obciążone są karą -10, jeśli przeciwnik korzysta z broni nieposiadającej Zalety Szybka. Inne Umiejętności wykorzystane w obronie działają normalnie. Para przeciwników z Szybką bronią walczy w kolejności Inicjatywy (względem siebie nawzajem), jak normalnie. Szybka broń nigdy nie może być także Powolną (cecha Powolna jest nadrzędna).";
/*bronie*/ tabB[16]= "TARCZA: Jeśli używasz tej broni do sparowania ataku, odpowiada to posiadaniu tylu Punktów Pancerza, ile wynosi (wartość) na wszystkich Miejscach Trafień na twoim ciele. Jeśli twoja broń ma Zaletę Tarcza o wartości 2 lub wyższej (czyli Tarcza 2 lub Tarcza 3), możesz także wykonać Test Przeciwstawny przeciwko nadlatującym pociskom w twoim polu widzenia.";
/*bronie*/ tabB[17]= "UNIERUCHAMIAJĄCA: Twoja broń okręca się wokół przeciwników, unieruchamiając ich. Każdy przeciwnik trafiony taką bronią dostaje Stan Pochwycony z Siłą o wartości równej twojej Cesze Siła. Unieruchamiając przeciwnika, nie możesz używać tej broni, by próbować trafić go w inny sposób. Możesz zakończyć Unieruchomienie w dowolnym momencie.";
/*bronie*/ tabB[18]= "WIELOSTRZAŁ: Broń może oddać tyle strzałów, ile wynosi (wartość), i automatycznie przeładowuje się po każdym z nich. Gdy zostaną one wszystkie wykorzystane lub skończą się pociski, musisz całkowicie przeładować broń, stosując zwykłe zasady.";
/*bronie*/ tabB[19]= "WYBUCHOWY: Wszystkie postacie w promieniu tylu metrów, ile wynosi (wartość), od trafionego celu odnoszą obrażenia równe PS + Obrażenia danej broni Wybuchowej i otrzymują wszelkie Stany przez nią wywołane.";
/*bronie*/ tabB[20]= "CIĘŻKA: Używanie tej broni jest męczące lub trudno ją opanować. Możesz korzystać z Zalet broni Druzgocząca i Przebijająca tylko w Turze, w której wykonujesz Szarżę.";
/*bronie*/ tabB[21]= "NIEBEZPIECZNA: Zdarza się broń, która niemal równie często może wyrządzić krzywdę posługującej się nią osobie, jak jej przeciwnikowi. Dowolny nieudany Test, w którym wypadła 9 na kości dziesiątek lub jedności, uznawany jest za Rzut Pechowy (więcej o Rzutach Pechowych w Rozdziale 5: Zasady).";
/*bronie*/ tabB[22]= "NIEPRECYZYJNA: Opanowanie broni Nieprecyzyjnej nastręcza trudności z powodu jej nieporęczności lub trudnego celowania. Wykonując atak taką bronią, otrzymujesz karę -1 PS. Broń Nieprecyzyjna nigdy nie może być także Precyzyjną (cecha Nieprecyzyjna jest nadrzędna).";
/*bronie*/ tabB[23]= "POWOLNA: Powolna broń jest nieporęczna i ciężka, przez co trudno używać jej prawidłowo. Bohaterowie używający Powolnej broni zawsze atakują ostatni w Rundzie, niezależnie od kolejności Inicjatywy. Co więcej, przeciwnicy zyskują premię +1 PS do każdego Testu obrony przed takim atakiem.";
/*bronie*/ tabB[24]= "PRZEŁADOWANIE: Przeładowanie tej broni jest powolne. Przeładowanie broni obarczonej tą Wadą wymaga wykonania Wydłużonego Testu Broni Zasięgowej w odpowiedniej Kategorii broni i uzyskania tylu PS, ile wynosi (wartość). Jeśli coś zakłóci przeładowanie, trzeba je podjąć od początku.";
/*bronie*/ tabB[25]= "TĘPA: Pewne rodzaje broni nie nadają się zbytnio do przebijania pancerzy. W przypadku obrony przed bronią Tępą wszystkie PP są podwajane. Co więcej, nie obowiązuje w jej przypadku zasada zadawania minimum 1 Rany po udanym trafieniu (obrażenia mogą być zredukowane do 0).";
/*pancerze*/ tabB[26]= "GIĘTKI: Giętki pancerz możesz nosić pod warstwą innego pancerza (nieposiadającego tej Zalety). W takim przypadku uzyskujesz korzyści obu pancerzy.";
/*pancerze*/ tabB[27]= "NIEPRZEBIJALNY: Taki pancerz jest wyjątkowo odporny, co sprawia, że większość ataków nie jest w stanie go przebić. Wszystkie Rany Krytyczne wynikłe na skutek nieparzystego wyniku rzutu na trafienie (na przykład 11 lub 33) są ignorowane.";
/*pancerze*/ tabB[28]= "CZĘŚCIOWY: Pancerz nie okrywa całego Miejsca Trafienia. Przeciwnik, który uzyska parzysty wynik rzutu na trafienie albo wyrzuci Trafienie Krytyczne, ignoruje PP Częściowego pancerza.";
/*pancerze*/ tabB[29]= "WRAŻLIWE PUNKTY: Pancerz ma niewielkie miejsca, w które może wślizgnąć się ostrze, jeśli przeciwnik ma wystarczające umiejętności lub dość szczęścia. Jeśli wróg posługuje się bronią Nadziewającą i uzyska Trafienie Krytyczne, wszystkie PP tego pancerza są ignorowane.";
/*narkotyki*/ tabB[30]= "CZARNY LOTOS: Ta śmiercionośna roślina rośnie w dżunglach Krain Południowych i wykorzystywana jest do zatruwania ostrzy. Ofiary, które odniosą co najmniej 1 obrażenie od ostrza pokrytego sokiem tej rośliny, natychmiast otrzymują 2 Stany Zatrucie. Przed działaniem chroni udany Trudny (–10) Test Odporności.";
/*narkotyki*/ tabB[31]= "DZIWNOKORZEŃ: Jeden z najpowszechniejszych narkotyków ulicznych w Imperium. Żuty dziwnokorzeń wywołuje euforię i przyjemne halucynacje. Niektórzy sugerują, że mogą być one powiązane z Wiatrami Magii. Narkotyk zapewnia premię +10 do Testów Odporności i Siły Woli, ale także karę -10 do Testów Zwinności, Inicjatywy i Inteligencji. Czas trwania: Aktywne podczas przeżuwania plus dodatkowe 1k10x10 minut.";
/*narkotyki*/ tabB[32]= "GRZYBKI SZALONEGO KAPELUSZNIKA: Te halucynogenne grzyby jedzone są przed bitwą przez goblińskich fanatyków. Wywołują furię berserkera, zapewniającą +10 do Siły, +4 do Żywotności i Talent Szał Bojowy. Po ustąpieniu efektów konsument grzybków traci 1k10 Żywotności. Istoty inne niż zielonoskórzy muszą także przejść udany Wymagający (+0) Test Odporności, inaczej nabawiają się Mniejszej Infekcji. Czas trwania: Aktywne podczas przeżuwania plus dodatkowe 2k10 minut. ";
/*narkotyki*/ tabB[33]= "KORZEŃ MANDRAGORY: Ten silnie uzależniający halucynogen wyrasta pod szubienicami. Jego żucie uspokaja wzburzony umysł. Użytkownicy muszą co Rundę przechodzić Test Siły Woli, który określi, czy wykonują Akcję, czy Ruch (wybierz jedno); co więcej, Szybkość jest zmniejszona o połowę. Jednakże Testy Opanowania dostają premię +20. Czas trwania: Aktywne podczas przeżuwania plus dodatkowe 1k10x10 minut.";
/*narkotyki*/ tabB[34]= "KSIĘŻYCOWY KWIAT: Ten środek uspokajający to suszony mech, który rośnie wyłącznie na liściach w lesie Laurelorn. Elfy wykorzystują księżycowy kwiat do leczenia Czarnej Dżumy. Członkowie tej rasy otrzymują premię +30 do każdego Testu opierania się tej chorobie. Poza tym środek nie wywołuje u nich żadnych innych efektów. Inni mogą wdychać opary gotującego się mchu i jeśli nie uda im się Bardzo Trudny (–30) Test Siły Woli, otrzymują Stan Utrata przytomności; jeśli Test jest udany, otrzymują premię +20 do Testów Opanowania i zyskują Stan Wyczerpanie. Najdrożsi lekarze stosują księżycowy kwiat jako środek znieczulający. Czas trwania: 1k10+5 godzin.";
/*narkotyki*/ tabB[35]= "PLUJA: Ten niezwykle silny halucynogen, pozyskiwany z kameleopijawek znajdowanych na bagniskach Imperium, sprowadza wizję czegoś głęboko pożądanego, jak utraconego kochanka, zmarłego przyjaciela lub zaginionego dziecka. Narkotyk zwany jest na ulicy plują i cieszy się popularnością wśród tych, którzy poddali się rozpaczy. Po jego użyciu trzeba przejść udany Bardzo Trudny (–30) Test Odporności, inaczej użytkownik zatraca się w niezwykle przekonującej fantazji, której treść zależy od MG. Czas trwania: 1k10 minut.";
/*narkotyki*/ tabB[36]= "ROZKOSZ RANALDA: Ten silnie uzależniający stymulant to syntetyczny związek chemiczny wyrabiany z siarki, rtęci i innych pierwiastków. Wdychanie proszku zapewnia premię +1 do Szybkości i +10 do Walki Wręcz, Siły, Wytrzymałości i Zwinności. Trwa to przez 3 godziny, po upływie których użytkownik otrzymuje karę -2 do Szybkości i -20 do WW, S, Wt i Zw. Czas trwania: 1 dzień.";
/*narkotyki*/ tabB[37]= "SERCOBÓJ: Łącząc jady amfisbeny (rzadkiego dwugłowego węża) i dżaberucha, otrzymuje się bezwonną, bezbarwną truciznę. Po spożyciu ta zabójcza mikstura wywołuje 4 Stany Zatrucie. Przed działaniem chroni udany Trudny (–10) Test Odporności.";
/*ZIOŁA I MIKSTURY*/ tabB[38]= "ELIKSIR ŻYWOTNOŚCI: Wypicie tego eliksiru natychmiast usuwa wszelkie Stany Wyczerpanie.";
/*ZIOŁA I MIKSTURY*/ tabB[39]= "FAKSTORYL: Nacieranie rany okładami przygotowanymi z tego ziołowego koagulantu usuwa wszelkie Stany Krwawienie bez Testu Leczenia. Dawkowanie: 1 dawka na Ranę Krytyczną.";
/*ZIOŁA I MIKSTURY*/ tabB[40]= "KATAPLAZM LECZNICZY: Ten okład leczniczy o paskudnym zapachu wykonany jest ze zwierzęcego łajna i uryny, połączonych z pewną liczbą pospolitych ziół, takich jak sigmafoil, tarabet i waleriana. Rana Krytyczna obłożona kataplazmem leczniczym nie jest zagrożona Mniejszą Infekcją.";
/*ZIOŁA I MIKSTURY*/ tabB[41]= "MIKSTURA LECZENIA: Jeśli bohater ma więcej niż 0 Żywotności, natychmiast leczy tyle jej punktów, ile wynosi jego Bonus z Wytrzymałość. Dawkowanie: 1 dawka na spotkanie.";
/*ZIOŁA I MIKSTURY*/ tabB[42]= "NOCNY CIEŃ: Spożycie tego zioła powoduje, że ofiara zapada w głęboki sen po 2-3 godzinach, o ile nie przejdzie udanego Testu Odporności. Sen wywołany przez nocny cień trwa 1k10+4 godziny. Dawkowanie: 1 dawka na osobę.";
/*ZIOŁA I MIKSTURY*/ tabB[43]= "SALWORT: Zmiażdżoną gałązkę tego zioła należy podłożyć pod nos pacjenta, który dzięki temu pozbywa się 1 Stanu Oszołomienie. Dawkowanie: 1 dawka na potyczkę.";
/*ZIOŁA I MIKSTURY*/ tabB[44]= "TONIK NA TRAWIENIE: Zapewnia +20 do Testów na wyleczenie takich dolegliwości żołądkowych, jak Smrodliwe Wiatry czy Czerwonka (patrz Choroby na stronie 186).";
/*ZIOŁA I MIKSTURY*/ tabB[45]= "ZIEMNY KORZEŃ: To zioło konsumowane jest w celu uśmierzenia efektów ropniaków powodowanych przez Czarną Zarazę (chociaż pozostają spore obrzęki). Co więcej, zapewnia to +10 do wszystkich Testów związanych z chorobą. Dawkowanie: 1 dawka dziennie.";

var tabA = new Array(251);

tabA[0]="Broń Ręczna&nbsp&nbsp&nbsp&nbsp&nbsp&nbspcena: 1zk&nbsp&nbsp&nbsp&nbspobr: +BS+4";/*bronie*/
tabA[1]="Sztylet&nbsp&nbsp&nbsp&nbsp&nbsp&nbspcena: 16s&nbsp&nbsp&nbsp&nbspobr: +BS+2";/*bronie*/
tabA[2]="Nóż&nbsp&nbsp&nbsp&nbsp cena: 8s&nbsp&nbsp obr: +BS+1";/*Tępy*/
tabA[3]="Tarcza (puklerz)&nbsp&nbsp&nbsp&nbsp cena: 18s 2p&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp obr: +BS+1";/*Tarcza 1, Parująca, Tępa*/
tabA[4]="Tarcza&nbsp&nbsp&nbsp&nbsp cena: 2zk&nbsp&nbsp&nbsp&nbsp obr:+BS+2";/*Tarcza 2, Parująca, Tępa*/
tabA[5]="Tarcza (duża)&nbsp&nbsp&nbsp&nbsp cena: 3zk&nbsp&nbsp&nbsp&nbsp obr:+BS+3";/*Tarcza 3, Parująca, Tępa*/
tabA[6]="Młot kawaleryjski&nbsp&nbsp&nbsp&nbsp cena: 3zk&nbsp&nbsp&nbsp&nbsp obr:+BS+5";/*Ogłuszający*/
tabA[7]="Kopia&nbsp&nbsp&nbsp&nbsp cena: 1zk&nbsp&nbsp&nbsp&nbsp&nbsp&nbspobr:+BS+6*";/*Druzgocząca, Nadziewająca*/
tabA[8]="Floret&nbsp&nbsp&nbsp&nbsp cena: 5zk&nbsp&nbsp&nbsp&nbsp obr:+BS+3";/*Nadziewający, Szybki, Precyzyjny, Tępy*/
tabA[9]="Rapier&nbsp&nbsp&nbsp&nbsp cena: 5zk&nbsp&nbsp&nbsp&nbsp obr:+BS+4";/*Nadziewający, Szybki*/
tabA[10]="Kastet&nbsp&nbsp&nbsp&nbsp cena: 2s 6p&nbsp&nbsp&nbsp&nbspobr:+BS+2";/*bronie*/
tabA[11]="Cep bojowy&nbsp&nbsp&nbsp&nbsp cena: 10s&nbsp&nbsp&nbsp&nbspobr:+BS+3";/*Dekoncentrujący, Nieprecyzyjny, Plączący*/
tabA[12]="Korbacz&nbsp&nbsp&nbsp&nbsp cena:&nbsp&nbsp2zk&nbsp&nbsp&nbsp&nbsp obr:+BS+5";/*Dekoncentrujący, Plączący*/
tabA[13]="Kiścień&nbsp&nbsp&nbsp&nbsp cena: 3zk&nbsp&nbsp&nbsp&nbsp obr:+BS+6";/*Ciężki, Dekoncentrujący, Druzgoczący, Plączący*/
tabA[14]="Lewak&nbsp&nbsp&nbsp&nbsp cena: 1zk&nbsp&nbsp&nbsp&nbsp obr:+BS+2";/*Parujący*/
tabA[15]="Łamacz mieczy&nbsp&nbsp&nbsp&nbsp cena: 1zk 2s 6p obr:+BS+3";/*Łamacz mieczy, Parujący*/
tabA[16]="Halabarda&nbsp&nbsp&nbsp&nbsp cena: 2zk&nbsp&nbsp&nbsp&nbsp obr:+BS+4";/*Nadziewająca, Parująca, Rąbiąca*/
tabA[17]="Włócznia&nbsp&nbsp&nbsp&nbsp cena: 15s&nbsp&nbsp&nbsp&nbsp&nbsp&nbspobr:+BS+4";/*Nadziewająca*/
tabA[18]="Pika&nbsp&nbsp&nbsp&nbsp cena: 18s&nbsp&nbsp&nbsp&nbsp obr:+BS+4";/*Nadziewająca*/
tabA[19]="Kostur&nbsp&nbsp&nbsp&nbsp cena: 3s&nbsp&nbsp&nbsp&nbsp&nbsp&nbspobr:+BS+4";/*Ogłuszający, Parujący*/
tabA[20]="Półtorak&nbsp&nbsp&nbsp&nbsp cena: 8zk&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp obr:+BS+5";/*Parujący, Przebijający*/
tabA[21]="Wielki topór&nbsp&nbsp&nbsp&nbsp cena: 4zk&nbsp&nbsp&nbsp&nbsp&nbsp&nbspobr:+BS+6";/*Ciężki, Druzgoczący, Rąbiący*/
tabA[22]="Nadziak&nbsp&nbsp&nbsp&nbsp cena: 9s&nbsp&nbsp&nbsp&nbsp obr:+BS+5";/*Nadziewający, Powolny, Przebijający*/
tabA[23]="Młot bojowy&nbsp&nbsp&nbsp&nbsp cena: 3zk&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbspobr:+BS+6";/*Ogłuszający, Powolny, Przebijający*/
tabA[24]="Miecz dwuręczny&nbsp&nbsp&nbsp&nbsp cena: 10zk&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp obr:+BS+5";/*Przebijający, Rąbiący*/
tabA[25]="Garłacz&nbsp&nbsp&nbsp&nbsp cena: 2zk&nbsp&nbsp&nbsp&nbsp obr:+8";/*Niebezpieczny, Przeładowanie 2, Wybuchowy 3*/
tabA[26]="Muszkiet hochlandzki&nbsp&nbsp&nbsp&nbsp cena: 100zk&nbsp&nbsp&nbsp&nbsp&nbsp&nbspobr:+9";/*Celny, Precyzyjny, Przeładowanie 4*/
tabA[27]="Krótki pistolet&nbsp&nbsp&nbsp&nbsp cena: 4zk&nbsp&nbsp&nbsp&nbsp&nbsp&nbspobr:+9";/*Niebezpieczny, Przeładowanie 3*/
tabA[28]="Pistolet&nbsp&nbsp&nbsp&nbsp cena: 8zk&nbsp&nbsp&nbsp&nbsp obr:+8";/*Pistolet, Przeładowanie 1*/
tabA[29]="Łuk elfi&nbsp&nbsp&nbsp&nbsp cena: 10zk&nbsp&nbsp&nbsp&nbsp&nbsp&nbspobr:+BS+4";/*Przebijający, Precyzyjny*/
tabA[30]="Łuk długi&nbsp&nbsp&nbsp&nbsp cena: 5zk&nbsp&nbsp&nbsp&nbsp&nbsp&nbspobr:+BS+4";/*Przebijający*/
tabA[31]="Łuk&nbsp&nbsp&nbsp&nbsp cena: 4zk&nbsp&nbsp&nbsp&nbsp obr:+BS+3";/*bronie*/
tabA[32]="Krótki łuk&nbsp&nbsp&nbsp&nbsp cena: 3zk&nbsp&nbsp&nbsp&nbsp&nbsp&nbspobr:+BS+2";/*bronie*/
tabA[33]="Kusza pistoletowa&nbsp&nbsp&nbsp&nbsp cena: 6zk&nbsp&nbsp&nbsp&nbsp&nbsp&nbspobr:+7";/*Pistolet*/
tabA[34]="Ciężka kusza&nbsp&nbsp&nbsp&nbsp cena: 7zk&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp obr:+9";/*Przebijająca, Przeładowanie 2*/
tabA[35]="Kusza&nbsp&nbsp&nbsp&nbsp cena: 5zk&nbsp&nbsp&nbsp&nbsp&nbsp&nbspobr:+9";/*Przeładowanie 1*/
tabA[36]="Krótki pistolet samopowtarzalny&nbsp&nbsp&nbsp&nbsp cena: 10zk&nbsp&nbsp obr:+9";/*Niebezpieczny, Przeładowanie 5, Wielostrzał 4*/
tabA[37]="istolet samopowtarzalny&nbsp&nbsp&nbsp&nbsp cena: 15zk&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp obr:+8";/*Niebezpieczny, Pistolet, Przeładowanie 4, Wielostrzał 4*/
tabA[38]="Arkan&nbsp&nbsp&nbsp&nbsp cena: 6s";/*Unieruchamiający*/
tabA[39]="Bicz&nbsp&nbsp&nbsp&nbsp cena: 5s&nbsp&nbsp&nbsp&nbsp obr:+B+2";/*Unieruchamiający*/
tabA[40]="Bomba&nbsp&nbsp&nbsp&nbsp cena: 3zk&nbsp&nbsp&nbsp&nbsp&nbsp&nbspobr:+12";/*Druzgocząca, Niebezpieczna, Wybuchowa 5*/
tabA[41]="Ładunek zapalający&nbsp&nbsp&nbsp&nbsp cena: 1zk&nbsp&nbsp&nbsp&nbsp obr: specjalna";/*Niebezpieczny, Wybuchowy 4*/
tabA[42]="Proca&nbsp&nbsp&nbsp&nbsp cena: 1s&nbsp&nbsp&nbsp&nbsp&nbsp&nbspobr:+6";/*bronie*/
tabA[43]="Proca drzewcowa&nbsp&nbsp&nbsp&nbsp cena: 4s&nbsp&nbsp&nbsp&nbsp obr:+7";/*bronie*/
tabA[44]="Bolas&nbsp&nbsp&nbsp&nbsp cena: 10s&nbsp&nbsp&nbsp&nbsp&nbsp&nbspobr:+BS";/*Unieruchamiające*/
tabA[45]="Strzałka&nbsp&nbsp&nbsp&nbsp cena: 2s&nbsp&nbsp&nbsp&nbsp&nbsp&nbspobr:+BS+1";/*Nadziewająca*/
tabA[46]="Oszczep&nbsp&nbsp&nbsp&nbsp cena: 10s 6p&nbsp&nbsp&nbsp&nbsp obr:+BS+3";/*Nadziewający*/
tabA[47]="Topór do rzucania&nbsp&nbsp&nbsp&nbsp cena: 1zk&nbsp&nbsp&nbsp&nbsp&nbsp&nbspobr:+BS+3";/*Rąbiący*/
tabA[48]="Nóż do rzucania&nbsp&nbsp&nbsp&nbsp cena: 18s&nbsp&nbsp&nbsp&nbsp&nbsp&nbspobr:+BS+2";/*bronie*/
tabA[49]="Mały śrut i proch (12)&nbsp&nbsp&nbsp&nbsp cena: 3s 3p";/*Wybuchowy +1*/
tabA[50]="Pocisk i proch (12)&nbsp&nbsp&nbsp&nbsp cena: 3s 3p&nbsp&nbsp&nbsp&nbsp obr:+1";/*Nadziewający, Przekłuwający*/
tabA[51]="Improwizowany śrut i proch (1)&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp cena: 3p";/*bronie*/
tabA[52]="Strzała (12)&nbsp&nbsp&nbsp&nbsp cena: 5s";/*Nadziewająca*/
tabA[53]="Strzała elfia (1)&nbsp&nbsp&nbsp&nbsp cena: 6s&nbsp&nbsp&nbsp&nbsp obr:+1";/*Celna, Nadziewająca, Przekłuwająca*/
tabA[54]="Bełt (12)&nbsp&nbsp&nbsp&nbsp cena: 5s";/*Nadziewająca*/
tabA[55]="Pocisk ołowiany (12)&nbsp&nbsp&nbsp&nbsp cena: 4p";/*Ogłuszający*/
tabA[56]="Pocisk kamienny (12)&nbsp&nbsp&nbsp&nbsp cena: 2p";/*Ogłuszający*/
tabA[57]="Skórzana kurta&nbsp&nbsp&nbsp&nbsp cena: 12s&nbsp&nbsp&nbsp&nbsp&nbsp&nbspPP: 1 Ramiona, korpus&nbsp&nbsp";/*zbroje*/
tabA[58]="Skórzany kaftan&nbsp&nbsp&nbsp&nbsp cena: 10s&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp PP: 1 Korpus";/*bronie*/
tabA[59]="Skórzane nogawice&nbsp&nbsp&nbsp&nbsp cena: 14s &nbsp&nbsp&nbsp&nbsp&nbsp&nbsp PP: 1 Nogi";/*bronie*/
tabA[60]="Skórzany hełm&nbsp&nbsp&nbsp&nbsp cena: 8s&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp PP: 1&nbsp&nbspGłowa";/*Częściowy*/
tabA[61]="Kolet&nbsp&nbsp&nbsp&nbsp cena: 18s&nbsp&nbsp&nbsp&nbsp&nbsp&nbspPP: 2 Korpus";/*Wrażliwe punkty*/
tabA[62]="Nogawice kolcze&nbsp&nbsp&nbsp&nbsp cena: 2zk&nbsp&nbsp&nbsp&nbsp PP: 2 Nogi";/*Giętkie*/
tabA[63]="Kolczuga&nbsp&nbsp&nbsp&nbsp cena: 3zk&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp PP: 2 Korpus, ramiona";/*Giętkie*/
tabA[64]="Czepiec kolczy&nbsp&nbsp&nbsp&nbsp cena: 1zk&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp PP: 2 Głowa";/*Częściowy, Giętki -10 percepcja*/
tabA[65]="Kaftan kolczy&nbsp&nbsp&nbsp&nbsp cena: 2zk&nbsp&nbsp&nbsp&nbsp&nbsp&nbspPP: 2 Korpus";/*Giętki*/
tabA[66]="Napierśnik&nbsp&nbsp&nbsp&nbsp cena: 10zk&nbsp&nbsp&nbsp&nbsp&nbsp&nbspPP: 2 Korpus";/*Nieprzebijalny, Wrażliwe punkty*/
tabA[67]="Hełm otwarty&nbsp&nbsp&nbsp&nbsp cena: 2zk&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp PP: 2 Głowa";/*Częściowy -10 percepcji*/
tabA[68]="Naramienniki&nbsp&nbsp&nbsp&nbsp cena: 8zk&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp PP: 2 Ramiona";/*Nieprzebijalne, Wrażliwe punkty*/
tabA[69]="Nagolenniki płytowe&nbsp&nbsp&nbsp&nbsp cena: 10zk&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp PP: 2 Nogi";/*Nieprzebijalne, Wrażliwe punkty -10 do Skradania*/
tabA[70]="Hełm&nbsp&nbsp&nbsp&nbsp cena: 3zk&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp PP: 2 Głowa";/*Nieprzebijalny, Wrażliwe punkty -20 do Percepcji*/
tabA[71]="Beczka&nbsp&nbsp&nbsp&nbsp cena: 8s";/*bronie*/
tabA[72]="Butelka&nbsp&nbsp&nbsp&nbsp cena: 5s";/*bronie*/
tabA[73]="Beczułka&nbsp&nbsp&nbsp&nbsp cena: 3s";/*bronie*/
tabA[74]="Bukłak&nbsp&nbsp&nbsp&nbsp cena: 1s 8p";/*bronie*/
tabA[75]="Duży worek&nbsp&nbsp&nbsp&nbsp cena: 1s 6p";/*bronie*/
tabA[76]="Dzban&nbsp&nbsp&nbsp&nbsp cena: 3s 2p";/*bronie*/
tabA[77]="Kufel cynowy&nbsp&nbsp&nbsp&nbsp cena: 4s";/*bronie*/
tabA[78]="Plecak&nbsp&nbsp&nbsp&nbsp cena: 4s 10p";/*bronie*/
tabA[79]="Sakiewka&nbsp&nbsp&nbsp&nbsp cena: 4p";/*bronie*/
tabA[80]="Juki&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp cena: 18s";/*bronie*/
tabA[81]="Torba na ramię&nbsp&nbsp&nbsp&nbsp cena: 1s";/*bronie*/
tabA[82]="Tuba na zwoje&nbsp&nbsp&nbsp&nbsp cena: 16s";/*bronie*/
tabA[83]="Worek&nbsp&nbsp&nbsp&nbsp cena: 1s";/*bronie*/
tabA[84]="Amulet&nbsp&nbsp&nbsp&nbsp cena: 2p";/*bronie*/
tabA[85]="Berło&nbsp&nbsp&nbsp&nbsp cena: 8zk";
tabA[86]="Biżuteria&nbsp&nbsp&nbsp&nbsp cena: Różna ";
tabA[87]="Buty&nbsp&nbsp&nbsp&nbsp cena: 5s";
tabA[88]="Kapelusz&nbsp&nbsp&nbsp&nbsp cena: 4s";
tabA[89]="Kaptur lub maska&nbsp&nbsp&nbsp&nbsp cena: 5s";
tabA[90]="Kostium&nbsp&nbsp&nbsp&nbsp cena: 1zk";
tabA[91]="Laska&nbsp&nbsp&nbsp&nbsp cena: 3zk";
tabA[92]="Mundur&nbsp&nbsp&nbsp&nbsp cena: 1zk 2s";
tabA[93]="Opończa&nbsp&nbsp&nbsp&nbsp cena: 18s";
tabA[94]="Perfumy&nbsp&nbsp&nbsp&nbsp cena: 10s";
tabA[95]="Płaszcz&nbsp&nbsp&nbsp&nbsp cena: 10s";
tabA[96]="Puder do twarzy&nbsp&nbsp&nbsp&nbsp cena: 10s";
tabA[97]="Rękawiczki&nbsp&nbsp&nbsp&nbsp cena: 4s";
tabA[98]="Strój dworski&nbsp&nbsp&nbsp&nbsp cena: 12zk";
tabA[99]="Sygnet&nbsp&nbsp&nbsp&nbsp cena: 5zk";
tabA[100]="Symbol religijny&nbsp&nbsp&nbsp&nbsp cena: 6s 8p";
tabA[101]="Szata&nbsp&nbsp&nbsp&nbsp cena: 2zk";
tabA[102]="Tatuaż&nbsp&nbsp&nbsp&nbsp cena: 4+s";
tabA[103]="Ubranie&nbsp&nbsp&nbsp&nbsp cena: 6s";
tabA[104]="Wysokie buty&nbsp&nbsp&nbsp&nbsp cena: 5s";
tabA[105]="Zapinki (6)&nbsp&nbsp&nbsp&nbsp cena: 10s";
tabA[106]="Beczułka piwa&nbsp&nbsp&nbsp&nbsp cena: 3s";
tabA[107]="Butelka wina&nbsp&nbsp&nbsp&nbsp cena: 10p";
tabA[108]="Ciepły posiłek w gospodzie&nbsp&nbsp&nbsp&nbsp cena: 1s";
tabA[109]="Jedzenie na zimno na 1 dzień&nbsp&nbsp&nbsp&nbsp cena: 10p";
tabA[110]="Kielich wina lub mocnego trunku&nbsp&nbsp&nbsp&nbsp cena: 1p";
tabA[111]="Pół litra piwa&nbsp&nbsp&nbsp&nbsp cena: 3p";
tabA[112]="Pół litra przesławnego Piwa Bugmana&nbsp&nbsp&nbsp&nbsp cena: 9p";
tabA[113]="Pół litra mocnego trunku&nbsp&nbsp&nbsp&nbsp cena: 2s";
tabA[114]="Prowiant na 1 dzień&nbsp&nbsp&nbsp&nbsp cena: 2s";
tabA[115]="Prywatny pokój na 1 noc&nbsp&nbsp&nbsp&nbsp cena: 10s";
tabA[116]="Stajnia na 1 noc&nbsp&nbsp&nbsp&nbsp cena: 10p";
tabA[117]="Wspólna izba na 1 noc&nbsp&nbsp&nbsp&nbsp cena: 10p";
tabA[118]="Bosak&nbsp&nbsp&nbsp&nbsp cena: 5s";
tabA[119]="Dłuto&nbsp&nbsp&nbsp&nbsp cena: 4s 2p";
tabA[120]="Drąg (3 metry)&nbsp&nbsp&nbsp&nbsp cena: 8s";
tabA[121]="Grabie&nbsp&nbsp&nbsp&nbsp cena: 4s 6p";
tabA[122]="Grawerowana pieczęć&nbsp&nbsp&nbsp&nbsp cena: 5zk";
tabA[123]="Grzebień&nbsp&nbsp&nbsp&nbsp cena: 10p";
tabA[124]="Gwoździe (12)&nbsp&nbsp&nbsp&nbsp cena: 2p";
tabA[125]="Haczyki na ryby (12)&nbsp&nbsp&nbsp&nbsp cena: 1s";
tabA[126]="Kajdany&nbsp&nbsp&nbsp&nbsp cena: 18s";
tabA[127]="Kilof&nbsp&nbsp&nbsp&nbsp cena: 18s";
tabA[128]="Klucz&nbsp&nbsp&nbsp&nbsp cena: 1s";
tabA[129]="Kołek&nbsp&nbsp&nbsp&nbsp cena: 1s";
tabA[130]="Kule&nbsp&nbsp&nbsp&nbsp cena: 3s";
tabA[131]="Liczydło&nbsp&nbsp&nbsp&nbsp cena: 3s 4p";
tabA[132]="Lusterko ręczne&nbsp&nbsp&nbsp&nbsp cena: 1zk 1s 6p";
tabA[133]="Łom&nbsp&nbsp&nbsp&nbsp cena: 2s 6p";
tabA[134]="Miotła&nbsp&nbsp&nbsp&nbsp cena: 10p";
tabA[135]="Młotek&nbsp&nbsp&nbsp&nbsp cena: 3s";
tabA[136]="Młotek sędziego&nbsp&nbsp&nbsp&nbsp cena: 1zk";
tabA[137]="Mop&nbsp&nbsp&nbsp&nbsp cena: 1s";
tabA[138]="Motyka&nbsp&nbsp&nbsp&nbsp cena: 4s";
tabA[139]="Moździerz z tłuczkiem&nbsp&nbsp&nbsp&nbsp cena: 14s";
tabA[140]="Narzędzie do czyszczenia uszu&nbsp&nbsp&nbsp&nbsp cena: 2s";
tabA[141]="Nóż&nbsp&nbsp&nbsp&nbsp cena: 8s";
tabA[142]="Pędzel do malowania&nbsp&nbsp&nbsp&nbsp cena: 4s";
tabA[143]="Piła&nbsp&nbsp&nbsp&nbsp cena: 6s";
tabA[144]="Pinceta&nbsp&nbsp&nbsp&nbsp cena: 1s";
tabA[145]="Pióro do pisania&nbsp&nbsp&nbsp&nbsp cena: 3s";
tabA[146]="Sidła na zwierzęta&nbsp&nbsp&nbsp&nbsp cena: 2s 6p";
tabA[147]="Sierp&nbsp&nbsp&nbsp&nbsp cena: 1k";
tabA[148]="Soczewki do czytania&nbsp&nbsp&nbsp&nbsp cena: 3zk";
tabA[149]="Stalowe szczypce&nbsp&nbsp&nbsp&nbsp cena: 16s";
tabA[150]="Szczotka do podłogi&nbsp&nbsp&nbsp&nbsp cena: 1s 6p";
tabA[151]="Szpadel&nbsp&nbsp&nbsp&nbsp cena: 8s";
tabA[152]="Teleskop&nbsp&nbsp&nbsp&nbsp cena: 5zk";
tabA[153]="Wiadro&nbsp&nbsp&nbsp&nbsp cena: 2s 6p";
tabA[154]="Wytrychy&nbsp&nbsp&nbsp&nbsp cena: 15";
tabA[155]="Zestaw na zatrucia&nbsp&nbsp&nbsp&nbsp cena: 3zk";
tabA[156]="Zestaw do charakteryzacji&nbsp&nbsp&nbsp&nbsp cena: 6s 6p";
tabA[157]="Zestaw do pisania&nbsp&nbsp&nbsp&nbsp cena: 2zk";
tabA[158]="Arkusz pergaminu&nbsp&nbsp&nbsp&nbsp cena: 1s";
tabA[159]="Broszura&nbsp&nbsp&nbsp&nbsp cena: 1s";
tabA[160]="Dokument prawny&nbsp&nbsp&nbsp&nbsp cena: 3s";
tabA[161]="Księga, aptekarstwo&nbsp&nbsp&nbsp&nbsp cena: 8zk";
tabA[162]="Księga, inżynieria&nbsp&nbsp&nbsp&nbsp cena: 3zk";
tabA[163]="Księga, magia&nbsp&nbsp&nbsp&nbsp cena: 20zk";
tabA[164]="Księga, medycyna&nbsp&nbsp&nbsp&nbsp cena: 15zk";
tabA[165]="Księga, kryptografia&nbsp&nbsp&nbsp&nbsp cena: 8zk";
tabA[166]="Księga, prawo&nbsp&nbsp&nbsp&nbsp cena: 15zk";
tabA[167]="Księga, religia&nbsp&nbsp&nbsp&nbsp cena: 1zk";
tabA[168]="Księga, sztuka&nbsp&nbsp&nbsp&nbsp cena: 5zk";
tabA[169]="Mapa&nbsp&nbsp&nbsp&nbsp cena: 3zk";
tabA[170]="Narzędzia Pracy&nbsp&nbsp&nbsp&nbsp cena: 3zk";
tabA[171]="Warsztat&nbsp&nbsp&nbsp&nbsp cena: 80zk";
tabA[172]="Barka rzeczna&nbsp&nbsp&nbsp&nbsp cena: 225zk";
tabA[173]="Furmanka&nbsp&nbsp&nbsp&nbsp cena: 20zk";
tabA[174]="Gołąb pocztowy&nbsp&nbsp&nbsp&nbsp cena: 3s";
tabA[175]="Koń pociągowy&nbsp&nbsp&nbsp&nbsp cena: 4zk";
tabA[176]="Koń wierzchowy&nbsp&nbsp&nbsp&nbsp cena: 15zk";
tabA[177]="Łódka dłubanka&nbsp&nbsp&nbsp&nbsp cena: 2zk";
tabA[178]="Kucyk&nbsp&nbsp&nbsp&nbsp cena: 10zk";
tabA[179]="Kurczak&nbsp&nbsp&nbsp&nbsp cena: 5p";
tabA[180]="Lekki koń bojowy&nbsp&nbsp&nbsp&nbsp cena: 70zk";
tabA[181]="Łódź wiosłowa&nbsp&nbsp&nbsp&nbsp cena: 6zk";
tabA[182]="Małpa&nbsp&nbsp&nbsp&nbsp cena: 10zk";
tabA[183]="Muł&nbsp&nbsp&nbsp&nbsp cena: 5zk";
tabA[184]="Obroża i smycz dla psa&nbsp&nbsp&nbsp&nbsp cena: 1s 7p";
tabA[185]="Pies myśliwski&nbsp&nbsp&nbsp&nbsp cena: 2zk";
tabA[186]="Powóz&nbsp&nbsp&nbsp&nbsp cena: 150zk";
tabA[187]="Robaki (6)&nbsp&nbsp&nbsp&nbsp cena: 1p";
tabA[188]="Rumak&nbsp&nbsp&nbsp&nbsp cena: 230zk";
tabA[189]="Uprząż z siodłem&nbsp&nbsp&nbsp&nbsp cena: 6zk";
tabA[190]="Wóz&nbsp&nbsp&nbsp&nbsp cena: 75zk";
tabA[191]="Czarny lotos&nbsp&nbsp&nbsp&nbsp cena: 20zk";/*xxaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa*/
tabA[192]="Dziwnokorzeń&nbsp&nbsp&nbsp&nbsp cena: 4s";
tabA[193]="Grzybki Szalonego Kapelusznika&nbsp&nbsp&nbsp&nbsp cena: 5zk";
tabA[194]="Korzeń mandragory&nbsp&nbsp&nbsp&nbsp cena: 1zk";
tabA[195]="Księżycowy kwiat&nbsp&nbsp&nbsp&nbsp cena: 5zk";
tabA[196]="Pluja&nbsp&nbsp&nbsp&nbsp cena: 1zk 5s";
tabA[197]="Rozkosz Ranalda&nbsp&nbsp&nbsp&nbsp cena: 18s";
tabA[198]="Sercobój&nbsp&nbsp&nbsp&nbsp cena: 40zk";
tabA[199]="Eliksir żywotności&nbsp&nbsp&nbsp&nbsp cena: 18s";
tabA[200]="Fakstoryl&nbsp&nbsp&nbsp&nbsp cena: 15s";
tabA[201]="Kataplazm leczniczy&nbsp&nbsp&nbsp&nbsp cena: 12s";
tabA[202]="Mikstura lecznicza&nbsp&nbsp&nbsp&nbsp cena: 10s";
tabA[203]="Nocny cień&nbsp&nbsp&nbsp&nbsp cena: 3zk";
tabA[204]="Salwort&nbsp&nbsp&nbsp&nbsp cena: 12s";
tabA[205]="Tonik na trawienie&nbsp&nbsp&nbsp&nbsp cena: 3s";
tabA[206]="Ziemny korzeń&nbsp&nbsp&nbsp&nbsp cena: 5zk";/*iiiiaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa*/ 
tabA[207]="Cud inżynierii&nbsp&nbsp&nbsp&nbsp cena: 20zk";
tabA[208]="Drewniane zęby&nbsp&nbsp&nbsp&nbsp cena: 10s";
tabA[209]="Hak&nbsp&nbsp&nbsp&nbsp cena: 3s 4p";
tabA[210]="Opaska na oko&nbsp&nbsp&nbsp&nbsp cena: 6p";
tabA[211]="Sztuczna noga&nbsp&nbsp&nbsp&nbsp cena: 16s";
tabA[212]="Sztuczne oko&nbsp&nbsp&nbsp&nbsp cena: 1zk";
tabA[213]="Złoty nos&nbsp&nbsp&nbsp&nbsp cena: 18s";
tabA[214]="Afisz&nbsp&nbsp&nbsp&nbsp cena: 1s";
tabA[215]="Bandaż&nbsp&nbsp&nbsp&nbsp cena: 4p";
tabA[216]="Fajka i tytoń&nbsp&nbsp&nbsp&nbsp cena: 3s 4p";
tabA[217]="Instrument&nbsp&nbsp&nbsp&nbsp cena: 4zk";
tabA[218]="Koc&nbsp&nbsp&nbsp&nbsp cena: 8p";
tabA[219]="Kociołek do gotowania&nbsp&nbsp&nbsp&nbsp cena: 8s";
tabA[220]="Kości do gry&nbsp&nbsp&nbsp&nbsp cena: 10p";
tabA[221]="Kotwiczka&nbsp&nbsp&nbsp&nbsp cena: 1zk 10s";
tabA[222]="Kreda&nbsp&nbsp&nbsp&nbsp cena: 10p";
tabA[223]="Kubek&nbsp&nbsp&nbsp&nbsp cena: 8p";
tabA[224]="Lampa oliwna&nbsp&nbsp&nbsp&nbsp cena: 2s";
tabA[225]="Lampa sztormowa&nbsp&nbsp&nbsp&nbsp cena: 1zk";
tabA[226]="Latarnia&nbsp&nbsp&nbsp&nbsp cena: 12s";
tabA[227]="Lalka&nbsp&nbsp&nbsp&nbsp cena: 2s";
tabA[228]="Lampa Davricha&nbsp&nbsp&nbsp&nbsp cena: 2zk";
tabA[229]="Lina, 10 metrów&nbsp&nbsp&nbsp&nbsp cena: 8s 4p";
tabA[230]="Miska&nbsp&nbsp&nbsp&nbsp cena: 1s";
tabA[231]="Namiot&nbsp&nbsp&nbsp&nbsp cena: 12s";
tabA[232]="Pałka&nbsp&nbsp&nbsp&nbsp cena: 1s";
tabA[233]="Patelnia&nbsp&nbsp&nbsp&nbsp cena: 7s 6p";
tabA[234]="Piłka&nbsp&nbsp&nbsp&nbsp cena: 5p";
tabA[235]="Płócienna plandeka&nbsp&nbsp&nbsp&nbsp cena: 8s";
tabA[236]="Pudełko na hubkę i krzesiwo&nbsp&nbsp&nbsp&nbsp cena: 4s 2p";
tabA[237]="Szmaty&nbsp&nbsp&nbsp&nbsp cena: 1p";
tabA[238]="Sztućce&nbsp&nbsp&nbsp&nbsp cena: 3s 6p";
tabA[239]="Świece (tuzin)&nbsp&nbsp&nbsp&nbsp cena: 1s";
tabA[240]="Talerz&nbsp&nbsp&nbsp&nbsp cena: 1s";
tabA[241]="Talia kart&nbsp&nbsp&nbsp&nbsp cena: 1s";
tabA[242]="Węgiel do rysowania&nbsp&nbsp&nbsp&nbsp cena: 10p";
tabA[243]="Zapałka&nbsp&nbsp&nbsp&nbsp cena: 1p";
tabA[244]="Zwijane posłanie&nbsp&nbsp&nbsp&nbsp cena: 6s";
tabA[245]="Miejscowy zwiadowca&nbsp&nbsp&nbsp&nbsp cena dniówki: 15p";
tabA[246]="Doświadczony najemnik&nbsp&nbsp&nbsp&nbsp cena dniówki: 9s";
tabA[247]="Prawnik&nbsp&nbsp&nbsp&nbsp cena dniówki: 9s";
tabA[248]="Tragarz&nbsp&nbsp&nbsp&nbsp cena dniówki: 3s";
tabA[249]="Skryba&nbsp&nbsp&nbsp&nbsp cena dniówki: 6s";
tabA[250]="Doktor&nbsp&nbsp&nbsp&nbsp cena dniówki: 15s";

function ara(){
    var $rows = $('#pop tr');
    $('#input').keyup(function() {
            
            var val = '^(?=.*\\b' + $.trim($(this).val()).split(/\s+/).join('\\b)(?=.*\\b') + ').*$',
                reg = RegExp(val, 'i'),
                text;
            
            $rows.show().filter(function() {
                text = $(this).text().replace(/\s+/g, ' ');
                return !reg.test(text);
            }).hide();
        });
    };

function gora()
{
	var value = $("input[name=oc]:checked").val();
	document.getElementById("rock").innerHTML = tabA[value];
	if(value==2){document.getElementById("rock").innerHTML = tabA[value]; + '</br>' + tabB[25]}
		else if(value==3){document.getElementById("rock").innerHTML = tabA[value] + '</br>1&nbsp' + tabB[16] + "<br>" + tabB[7]+"<br>"+tabB[25]}
		else if(value==4){document.getElementById("rock").innerHTML = tabA[value] + '</br>2&nbsp' + tabB[16] +"<br>"+tabB[7]+"<br>"+tabB[25]}
		else if(value==5){document.getElementById("rock").innerHTML = tabA[value] + '</br>3&nbsp' + tabB[16] +"<br>"+tabB[7]+"<br>"+tabB[25]}
		else if(value==6){document.getElementById("rock").innerHTML = tabA[value] + '</br>' + tabB[6]}
		else if(value==7){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[2] +"<br>"+tabB[4]}
		else if(value==8){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[10] +"<br>"+tabB[4]+"<br>"+tabB[15]+"<br>"+tabB[25]}
		else if(value==9){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[15] +"<br>"+tabB[4]}
		else if(value==11){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[22] +"<br>"+tabB[1]+"<br>"+tabB[9]}
		else if(value==12){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[9] +"<br>"+tabB[1]}
		else if(value==13){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[20] +"<br>"+tabB[1]+"<br>"+tabB[9]+"<br>"+tabB[2]}
		else if(value==14){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[7]}
		else if(value==15){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[3] +"<br>"+tabB[7]}
		else if(value==16){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[14] +"<br>"+tabB[7]+"<br>"+tabB[4]}
		else if(value==17){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[4] }
		else if(value==18){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[4] }
		else if(value==19){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[6] +"<br>"+tabB[7]}
		else if(value==20){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[12] +"<br>"+tabB[7]}
		else if(value==21){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[20] +"<br>"+tabB[2]+"<br>"+tabB[14]}
		else if(value==22){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[23] +"<br>"+tabB[12]+"<br>"+tabB[4]}
		else if(value==23){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[23] +"<br>"+tabB[12]+"<br>"+tabB[6]}
		else if(value==24){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[12] +"<br>"+tabB[14]}
		else if(value==25){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[21] +"<br>"+"2&nbsp"+tabB[24]+"<br> 3&nbsp"+tabB[19]}
		else if(value==26){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[0] +"<br>"+tabB[10]+"<br> 4&nbsp"+tabB[24]}
		else if(value==27){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[21]+"<br> 3&nbsp"+tabB[24]}
		else if(value==28){document.getElementById("rock").innerHTML = tabA[value] +'</br> 1&nbsp' + tabB[24] +"<br>"+tabB[8]}
		else if(value==29){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[10] +"<br>"+tabB[12]}
		else if(value==30){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[12]}
		else if(value==31){document.getElementById("rock").innerHTML = tabA[value] +'</br>'}
		else if(value==32){document.getElementById("rock").innerHTML = tabA[value] +'</br>'}
		else if(value==33){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[8]}
		else if(value==34){document.getElementById("rock").innerHTML = tabA[value] +'</br>2&nbsp' + tabB[24] +"<br>"+tabB[12]}
		else if(value==35){document.getElementById("rock").innerHTML = tabA[value] +'</br>1&nbsp' + tabB[24]}
		else if(value==36){document.getElementById("rock").innerHTML = tabA[value] +'</br>5&nbsp' + tabB[24] +"<br>4&nbsp"+tabB[18]+"<br>"+tabB[21]}
		else if(value==37){document.getElementById("rock").innerHTML = tabA[value] +'</br>4&nbsp' + tabB[24] +"<br>2&nbsp"+tabB[18]+"<br>"+tabB[21]+"<br>"+tabB[8]}
		else if(value==38){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[17]}
		else if(value==39){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[17]}
		else if(value==40){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[21] +"<br>5&nbsp"+tabB[19]+"<br>"+tabB[2]}
		else if(value==41){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[21] +"<br>4&nbsp"+tabB[19]}
		else if(value==42){document.getElementById("rock").innerHTML = tabA[value] +'</br>'}
		else if(value==43){document.getElementById("rock").innerHTML = tabA[value] +'</br>'}
		else if(value==44){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[17]}
		else if(value==45){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[4]}
		else if(value==46){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[4]}
		else if(value==47){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[14]}
		else if(value==48){document.getElementById("rock").innerHTML = tabA[value] +'</br>'}
		else if(value==49){document.getElementById("rock").innerHTML = tabA[value] +'</br>+1&nbsp' + tabB[19]}
		else if(value==50){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[4] +"<br>"+tabB[13]}
		else if(value==51){document.getElementById("rock").innerHTML = tabA[value] +'</br>'}
		else if(value==52){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[4]}
		else if(value==53){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[4] +"<br>"+tabB[13]+"<br>"+tabB[0]}
		else if(value==54){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[4]}
		else if(value==55){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[6]}
		else if(value==56){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[6]}
		else if(value==57){document.getElementById("rock").innerHTML = tabA[value] +'</br>'}
		else if(value==58){document.getElementById("rock").innerHTML = tabA[value] +'</br>'}
		else if(value==59){document.getElementById("rock").innerHTML = tabA[value] +'</br>'}
		else if(value==60){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[28]}
		else if(value==61){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[29]}
		else if(value==62){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[26]}
		else if(value==63){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[26]}
		else if(value==64){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[26] +"<br>"+tabB[28]+"<br>-10 PERCEPCJI"}
		else if(value==65){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[26]}
		else if(value==66){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[27] +"<br>"+tabB[29]}
		else if(value==67){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[28] +"<br>-10 PERCEPCJI"}
		else if(value==68){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[29] +"<br>"+tabB[27]}
		else if(value==69){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[29] +"<br>"+tabB[27]+"<br>-10 SKRADANIE"}
		else if(value==70){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[29] +"<br>"+tabB[27]+"<br>-20 PERCEPCJI"}
		else if(value==191){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[30]}
		else if(value==192){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[31]}
		else if(value==193){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[32]}
		else if(value==194){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[33]}
		else if(value==195){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[34]}
		else if(value==196){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[35]}
		else if(value==197){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[36]}
		else if(value==198){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[37]}
		else if(value==199){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[38]}
		else if(value==200){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[39]}
		else if(value==201){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[40]}
		else if(value==202){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[41]}
		else if(value==203){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[42]}
		else if(value==204){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[43]}
		else if(value==205){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[44]}
		else if(value==206){document.getElementById("rock").innerHTML = tabA[value] +'</br>' + tabB[45]}
				
};

function pop()
{
for (k = 0; k < 251; k++)
{
    document.getElementById("pop").innerHTML = document.getElementById("pop").innerHTML + '<tr><td class="xD"><label>' + tabA[k] + '<input type="radio" name="oc" onclick="gora()" class="znak" value="' + k + '"></label></br> </td></tr>';
}
}

