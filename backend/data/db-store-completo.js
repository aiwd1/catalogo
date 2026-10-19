const db = [
    {
        id: 1,
        name: "Mouse Opale Air 5",
        descrizione: "Il Mouse Opale Air 5 nasce per chi vuole precisione assoluta a ogni movimento del polso. La modalità multi-dispositivo consente di passare da PC a tablet con un pulsante, mentre la connessione wireless a bassa latenza garantisce una risposta istantanea, paragonabile a quella di un cavo. Inoltre, i piedini in PTFE puro assicurano uno scorrimento silenzioso e privo di attrito. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 30.99,
        image: "https://picsum.photos/seed/1/600/400"
    },
    {
        id: 2,
        name: "Tastiera Pulsar Core Titanio",
        descrizione: "La Tastiera Pulsar Core Titanio è pensata per chi scrive molto e non vuole scendere a compromessi sul comfort. Il poggiapolsi magnetico in similpelle sostiene i polsi nelle sessioni più lunghe, mentre il telaio in alluminio spazzolato elimina flessioni e vibrazioni durante la digitazione. Inoltre, gli switch meccanici hot-swap si sostituiscono senza saldature, per personalizzare il feeling di ogni tasto. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 88.99,
        image: "https://picsum.photos/seed/2/600/400"
    },
    {
        id: 3,
        name: "Monitor Vortex One Lavanda",
        descrizione: "Il Monitor Vortex One Lavanda è progettato per chi pretende colori fedeli e una fluidità impeccabile. Il tempo di risposta di 1 ms elimina scie e sfocature nelle scene più veloci, mentre le cornici ultrasottili su tre lati lo rendono perfetto per configurazioni multi-monitor. Inoltre, il supporto ergonomico regolabile in altezza, inclinazione e rotazione si adatta a ogni postura. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 271.49,
        image: "https://picsum.photos/seed/3/600/400"
    },
    {
        id: 4,
        name: "Cuffie Vortex Core 9",
        descrizione: "Le Cuffie Vortex Core 9 ti avvolgono in un suono pieno, dettagliato e ricco di sfumature. La struttura pieghevole e la custodia rigida le rendono perfette in viaggio, mentre la connessione Bluetooth 5.3 multipoint le collega a due dispositivi contemporaneamente. Inoltre, la modalità trasparenza permette di sentire l'ambiente circostante senza toglierle. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 144.99,
        image: "https://picsum.photos/seed/4/600/400"
    },
    {
        id: 5,
        name: "Webcam Polaris Core Verde Salvia",
        descrizione: "La Webcam Polaris Core Verde Salvia ti fa apparire al meglio in ogni videochiamata, riunione o diretta. Il copriobiettivo integrato garantisce privacy totale quando non la usi, mentre la clip universale si fissa saldamente a monitor, portatili e treppiedi. Inoltre, i due microfoni stereo con riduzione del rumore catturano la voce in modo chiaro. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 110.99,
        image: "https://picsum.photos/seed/5/600/400"
    },
    {
        id: 6,
        name: "Stampante Prisma Max Rosso Corsa",
        descrizione: "La Stampante Prisma Max Rosso Corsa unisce costi di stampa contenuti a prestazioni di livello professionale. Il display touch a colori rende intuitiva ogni operazione, mentre stampa fino a 15 pagine al minuto con testi nitidi e neri profondi. Inoltre, la stampa fronte/retro automatica riduce il consumo di carta. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 422.99,
        image: "https://picsum.photos/seed/6/600/400"
    },
    {
        id: 7,
        name: "Router Ossidiana Plus Blu Oceano",
        descrizione: "Il Router Ossidiana Plus Blu Oceano è il cuore di una rete domestica moderna, sicura e senza rallentamenti. Lo standard Wi-Fi 6E raggiunge velocità combinate fino a 3 Gbps, mentre gestisce senza fatica oltre 64 dispositivi connessi contemporaneamente. Inoltre, la crittografia WPA3 e il firewall integrato proteggono la rete dalle intrusioni. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 134.99,
        image: "https://picsum.photos/seed/7/600/400"
    },
    {
        id: 8,
        name: "Supporto Laptop Vortex Core 7",
        descrizione: "Il Supporto Laptop Vortex Core 7 è l'accessorio ergonomico che trasforma il modo di lavorare. I gommini in silicone proteggono il portatile da graffi e scivolamenti, mentre si ripiega in pochi secondi e sta comodamente in uno zaino. Inoltre, la base stabile non oscilla nemmeno durante la digitazione più intensa. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 46.9,
        image: "https://picsum.photos/seed/8/600/400"
    },
    {
        id: 9,
        name: "Microfono Aquila Ultra Bianco Artico",
        descrizione: "Il Microfono Aquila Ultra Bianco Artico rende ogni parola limpida, calda e piena di carattere. La registrazione a 24 bit/96 kHz garantisce una qualità audio professionale, mentre il controllo del guadagno integrato permette regolazioni rapide al volo. Inoltre, il supporto antivibrazione e il filtro anti-pop sono inclusi nella confezione. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 242.99,
        image: "https://picsum.photos/seed/9/600/400"
    },
    {
        id: 10,
        name: "Controller Solaris Ultra Sabbia",
        descrizione: "Il Controller Solaris Ultra Sabbia rende ogni sessione di gioco più coinvolgente e reattiva. I grilletti con corsa regolabile si adattano a sparatutto e giochi di guida, mentre è compatibile con PC, smartphone e le principali console. Inoltre, l'impugnatura gommata antiscivolo resta salda anche nelle partite più intense. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 186.99,
        image: "https://picsum.photos/seed/10/600/400"
    },
    {
        id: 11,
        name: "Lampada Monitor Cobra Max 4",
        descrizione: "La Lampada Monitor Cobra Max 4 rende più piacevoli e meno faticose le sessioni di lavoro serali. La retroilluminazione RGB posteriore crea un'atmosfera rilassante, mentre il fascio luminoso asimmetrico illumina la scrivania senza abbagliare. Inoltre, l'alimentazione USB-C elimina la necessità di prese aggiuntive. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 113.99,
        image: "https://picsum.photos/seed/11/600/400"
    },
    {
        id: 12,
        name: "Casse Solaris Lite 9",
        descrizione: "Le Casse Solaris Lite 9 trasformano la scrivania in un piccolo studio d'ascolto. Gli ingressi Bluetooth, ottico e AUX permettono di collegare qualsiasi sorgente, mentre i woofer in fibra di carta garantiscono bassi caldi e ben controllati. Inoltre, l'illuminazione RGB sincronizzata con la musica crea atmosfera. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 84.49,
        image: "https://picsum.photos/seed/12/600/400"
    },
    {
        id: 13,
        name: "Hub USB Ossidiana Core Verde Salvia",
        descrizione: "L'Hub USB Ossidiana Core Verde Salvia trasforma qualsiasi portatile in una vera postazione desktop. Offre 11 porte, tra cui USB-A, USB-C, HDMI e lettore di schede SD, mentre è plug-and-play e compatibile con Windows, macOS e Linux. Inoltre, la ricarica passthrough fino a 100 W alimenta il portatile mentre lavori. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 44.99,
        image: "https://picsum.photos/seed/13/600/400"
    },
    {
        id: 14,
        name: "SSD Esterno Pantera Studio Grafite",
        descrizione: "L'SSD Esterno Pantera Studio Grafite è il modo più rapido per ampliare lo spazio di archiviazione. Il software di backup automatico incluso rende semplice proteggere i file, mentre la scocca resistente a urti e cadute protegge i dati anche in viaggio. Inoltre, la connessione USB-C è compatibile con PC, Mac, tablet e console. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 213.9,
        image: "https://picsum.photos/seed/14/600/400"
    },
    {
        id: 15,
        name: "Tappetino Vetta Core 3",
        descrizione: "Il Tappetino Vetta Core 3 dà ordine e stile a tutta la postazione di lavoro. Lo spessore di 3 mm offre il giusto sostegno al polso, mentre i bordi cuciti impediscono lo sfilacciamento nel tempo. Inoltre, il formato esteso da 80x30 cm ospita comodamente mouse e tastiera. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 25.9,
        image: "https://picsum.photos/seed/15/600/400"
    },
    {
        id: 16,
        name: "SSD Esterno Spectra Lite 2",
        descrizione: "L'SSD Esterno Spectra Lite 2 è pensato per fotografi, videomaker e professionisti in movimento. La capacità di 4 TB offre spazio per migliaia di foto, video e progetti, mentre la connessione USB-C è compatibile con PC, Mac, tablet e console. Inoltre, la scocca resistente a urti e cadute protegge i dati anche in viaggio. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 56.49,
        image: "https://picsum.photos/seed/16/600/400"
    },
    {
        id: 17,
        name: "Casse Sirio Pro 7",
        descrizione: "Le Casse Sirio Pro 7 riempiono la stanza con un suono potente e sorprendentemente definito. I controlli di bassi e acuti permettono di adattare il suono all'ambiente, mentre gli ingressi Bluetooth, ottico e AUX permettono di collegare qualsiasi sorgente. Inoltre, i tweeter in seta restituiscono alti morbidi e mai affaticanti. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 201.49,
        image: "https://picsum.photos/seed/17/600/400"
    },
    {
        id: 18,
        name: "Webcam Vetta Max Grafite",
        descrizione: "La Webcam Vetta Max Grafite ti fa apparire al meglio in ogni videochiamata, riunione o diretta. Funziona in modalità plug-and-play senza driver con tutte le principali piattaforme di videochiamata, mentre la correzione automatica della luce compensa ambienti troppo bui o controluce. Inoltre, il campo visivo di 78° inquadra comodamente anche più persone. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 183.9,
        image: "https://picsum.photos/seed/18/600/400"
    },
    {
        id: 19,
        name: "Cuffie Helix Plus 1",
        descrizione: "Le Cuffie Helix Plus 1 portano l'esperienza d'ascolto a un livello superiore, ovunque tu sia. La modalità trasparenza permette di sentire l'ambiente circostante senza toglierle, mentre la cancellazione attiva del rumore riduce il brusio di uffici, treni e aerei. Inoltre, il microfono con riduzione del rumore rende chiarissime chiamate e videoconferenze. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 172.99,
        image: "https://picsum.photos/seed/19/600/400"
    },
    {
        id: 20,
        name: "Controller Brezza Evo Sabbia",
        descrizione: "Il Controller Brezza Evo Sabbia unisce un'impugnatura comoda a una precisione chirurgica. È compatibile con PC, smartphone e le principali console, mentre l'impugnatura gommata antiscivolo resta salda anche nelle partite più intense. Inoltre, la batteria garantisce fino a 80 ore di gioco senza interruzioni. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 107.99,
        image: "https://picsum.photos/seed/20/600/400"
    },
    {
        id: 21,
        name: "Supporto Laptop Polaris Ultra Grafite",
        descrizione: "Il Supporto Laptop Polaris Ultra Grafite unisce eleganza minimalista e solidità a tutta prova. I gommini in silicone proteggono il portatile da graffi e scivolamenti, mentre l'altezza e l'inclinazione sono regolabili su più livelli. Inoltre, il design aperto favorisce la circolazione dell'aria e riduce le temperature. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 78.49,
        image: "https://picsum.photos/seed/21/600/400"
    },
    {
        id: 22,
        name: "Lampada Monitor Opale Core Sabbia",
        descrizione: "La Lampada Monitor Opale Core Sabbia rende più piacevoli e meno faticose le sessioni di lavoro serali. Il controller wireless a rotella permette regolazioni immediate, mentre il fascio luminoso asimmetrico illumina la scrivania senza abbagliare. Inoltre, la temperatura colore è regolabile da 2700 K a 6500 K. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 57.99,
        image: "https://picsum.photos/seed/22/600/400"
    },
    {
        id: 23,
        name: "Monitor Atlas Lite Grafite",
        descrizione: "Il Monitor Atlas Lite Grafite ridefinisce la postazione con cornici sottilissime e un pannello di alto livello. Il supporto HDR esalta contrasti e luminosità nei contenuti compatibili, mentre la copertura del 100% dello spazio colore sRGB lo rende adatto a fotoritocco e grafica. Inoltre, il supporto ergonomico regolabile in altezza, inclinazione e rotazione si adatta a ogni postura. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Ideale sia per l'ufficio sia per il setup di casa. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 195.99,
        image: "https://picsum.photos/seed/23/600/400"
    },
    {
        id: 24,
        name: "Microfono Neon Ultra Nero Notte",
        descrizione: "Il Microfono Neon Ultra Nero Notte è pensato per podcaster, streamer e musicisti che cercano un suono pulito. L'uscita cuffie a latenza zero consente di monitorare la propria voce in tempo reale, mentre si collega in USB-C senza bisogno di interfacce audio esterne. Inoltre, la capsula a condensatore cattura la voce con dettaglio e naturalezza. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 204.99,
        image: "https://picsum.photos/seed/24/600/400"
    },
    {
        id: 25,
        name: "Stampante Scoglio Air 7",
        descrizione: "La Stampante Scoglio Air 7 semplifica la gestione dei documenti di tutta la famiglia o del piccolo ufficio. Il sistema a serbatoi ricaricabili abbatte drasticamente il costo per pagina, mentre la modalità silenziosa consente di stampare anche di notte senza disturbare. Inoltre, stampa fino a 22 pagine al minuto con testi nitidi e neri profondi. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 112.49,
        image: "https://picsum.photos/seed/25/600/400"
    },
    {
        id: 26,
        name: "Hub USB Vega Ultra Rosso Corsa",
        descrizione: "L'Hub USB Vega Ultra Rosso Corsa trasforma qualsiasi portatile in una vera postazione desktop. La porta Ethernet gigabit assicura una connessione cablata stabile, mentre la ricarica passthrough fino a 100 W alimenta il portatile mentre lavori. Inoltre, offre 5 porte, tra cui USB-A, USB-C, HDMI e lettore di schede SD. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 105.9,
        image: "https://picsum.photos/seed/26/600/400"
    },
    {
        id: 27,
        name: "Mouse Iride Elite 9",
        descrizione: "Il Mouse Iride Elite 9 è il compagno ideale per lunghe sessioni di lavoro e di gioco. La rotella in metallo con scorrimento a frizione variabile rende rapidissima la navigazione di documenti lunghi, mentre i piedini in PTFE puro assicurano uno scorrimento silenzioso e privo di attrito. Inoltre, gli switch ottici sono certificati per oltre 80 milioni di clic. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 147.99,
        image: "https://picsum.photos/seed/27/600/400"
    },
    {
        id: 28,
        name: "Router Helix Studio 1",
        descrizione: "Il Router Helix Studio 1 porta una connessione veloce e stabile in ogni angolo della casa. La crittografia WPA3 e il firewall integrato proteggono la rete dalle intrusioni, mentre gestisce senza fatica oltre 128 dispositivi connessi contemporaneamente. Inoltre, lo standard Wi-Fi 6 raggiunge velocità combinate fino a 19 Gbps. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 220.9,
        image: "https://picsum.photos/seed/28/600/400"
    },
    {
        id: 29,
        name: "Lampada Monitor Vortex Evo Blu Oceano",
        descrizione: "La Lampada Monitor Vortex Evo Blu Oceano libera spazio sulla scrivania portando la luce proprio dove serve. La luminosità si adatta automaticamente alla luce dell'ambiente, mentre l'alimentazione USB-C elimina la necessità di prese aggiuntive. Inoltre, si aggancia a monitor piatti e curvi senza viti né adesivi. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 68.9,
        image: "https://picsum.photos/seed/29/600/400"
    },
    {
        id: 30,
        name: "Tappetino Cristallo One Sabbia",
        descrizione: "Il Tappetino Cristallo One Sabbia protegge la scrivania e migliora lo scorrimento del mouse. I bordi cuciti impediscono lo sfilacciamento nel tempo, mentre lo spessore di 5 mm offre il giusto sostegno al polso. Inoltre, la superficie in microtessuto è ottimizzata per sensori ottici e laser. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 19.99,
        image: "https://picsum.photos/seed/30/600/400"
    },
    {
        id: 31,
        name: "Cuffie Ferro Studio Grafite",
        descrizione: "Le Cuffie Ferro Studio Grafite portano l'esperienza d'ascolto a un livello superiore, ovunque tu sia. La modalità a bassa latenza sincronizza perfettamente audio e video nei giochi, mentre la cancellazione attiva del rumore riduce il brusio di uffici, treni e aerei. Inoltre, la modalità trasparenza permette di sentire l'ambiente circostante senza toglierle. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 235.99,
        image: "https://picsum.photos/seed/31/600/400"
    },
    {
        id: 32,
        name: "Tastiera Vega Elite 2",
        descrizione: "La Tastiera Vega Elite 2 è pensata per chi scrive molto e non vuole scendere a compromessi sul comfort. Gli switch meccanici hot-swap si sostituiscono senza saldature, per personalizzare il feeling di ogni tasto, mentre la batteria da 4000 mAh garantisce settimane di utilizzo senza ricarica. Inoltre, il layout italiano completo include tastierino numerico e tasti multimediali dedicati. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 213.99,
        image: "https://picsum.photos/seed/32/600/400"
    },
    {
        id: 33,
        name: "Webcam Zenith Max Rosso Corsa",
        descrizione: "La Webcam Zenith Max Rosso Corsa è la soluzione semplice e immediata per chi lavora o studia da remoto. L'autofocus rapido mantiene il volto sempre a fuoco anche quando ti muovi, mentre funziona in modalità plug-and-play senza driver con tutte le principali piattaforme di videochiamata. Inoltre, la correzione automatica della luce compensa ambienti troppo bui o controluce. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 182.99,
        image: "https://picsum.photos/seed/33/600/400"
    },
    {
        id: 34,
        name: "Controller Eco Air 6",
        descrizione: "Il Controller Eco Air 6 rende ogni sessione di gioco più coinvolgente e reattiva. L'impugnatura gommata antiscivolo resta salda anche nelle partite più intense, mentre la vibrazione a doppio motore restituisce ogni impatto e ogni esplosione. Inoltre, le palette posteriori rimappabili permettono comandi rapidissimi. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 53.49,
        image: "https://picsum.photos/seed/34/600/400"
    },
    {
        id: 35,
        name: "Casse Graffio Ultra Titanio",
        descrizione: "Le Casse Graffio Ultra Titanio sono la scelta ideale per musica, film e videogiochi. La potenza complessiva di 40 W assicura un volume pieno senza distorsioni, mentre le casse in legno MDF riducono le risonanze indesiderate. Inoltre, l'illuminazione RGB sincronizzata con la musica crea atmosfera. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 245.9,
        image: "https://picsum.photos/seed/35/600/400"
    },
    {
        id: 36,
        name: "Router Shadow Ultra Rosso Corsa",
        descrizione: "Il Router Shadow Ultra Rosso Corsa porta una connessione veloce e stabile in ogni angolo della casa. Il parental control integrato permette di gestire orari e contenuti per ogni membro della famiglia, mentre le antenne ad alto guadagno con beamforming indirizzano il segnale verso i dispositivi. Inoltre, la tecnologia mesh consente di estendere la copertura aggiungendo altri nodi. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 381.99,
        image: "https://picsum.photos/seed/36/600/400"
    },
    {
        id: 37,
        name: "Cuffie Iride Evo Grafite",
        descrizione: "Le Cuffie Iride Evo Grafite ti avvolgono in un suono pieno, dettagliato e ricco di sfumature. La modalità a bassa latenza sincronizza perfettamente audio e video nei giochi, mentre il microfono con riduzione del rumore rende chiarissime chiamate e videoconferenze. Inoltre, la batteria assicura fino a 80 ore di ascolto, con ricarica rapida in pochi minuti. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 171.99,
        image: "https://picsum.photos/seed/37/600/400"
    },
    {
        id: 38,
        name: "SSD Esterno Altair Prime Titanio",
        descrizione: "L'SSD Esterno Altair Prime Titanio mette al sicuro i tuoi file e li porta ovunque alla massima velocità. La crittografia hardware AES a 256 bit protegge i dati sensibili, mentre la scocca resistente a urti e cadute protegge i dati anche in viaggio. Inoltre, la certificazione IP65 lo difende da polvere e schizzi d'acqua. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 233.99,
        image: "https://picsum.photos/seed/38/600/400"
    },
    {
        id: 39,
        name: "Tappetino Aurora Ultra Verde Salvia",
        descrizione: "Il Tappetino Aurora Ultra Verde Salvia protegge la scrivania e migliora lo scorrimento del mouse. Il formato esteso da 120x60 cm ospita comodamente mouse e tastiera, mentre i bordi cuciti impediscono lo sfilacciamento nel tempo. Inoltre, si lava facilmente e torna come nuovo in pochi minuti. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 47.99,
        image: "https://picsum.photos/seed/39/600/400"
    },
    {
        id: 40,
        name: "Monitor Spectra Ultra Titanio",
        descrizione: "Il Monitor Spectra Ultra Titanio apre una finestra nitida e brillante su tutto ciò che crei e guardi. Il pannello IPS da 34 pollici con risoluzione QHD restituisce dettagli nitidissimi, mentre la frequenza di aggiornamento di 75 Hz rende ogni movimento incredibilmente fluido. Inoltre, il tempo di risposta di 1 ms elimina scie e sfocature nelle scene più veloci. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 749.99,
        image: "https://picsum.photos/seed/40/600/400"
    },
    {
        id: 41,
        name: "Hub USB Vega Ultra Nero Notte",
        descrizione: "L'Hub USB Vega Ultra Nero Notte moltiplica le porte del tuo portatile con un solo, compatto accessorio. È plug-and-play e compatibile con Windows, macOS e Linux, mentre offre 9 porte, tra cui USB-A, USB-C, HDMI e lettore di schede SD. Inoltre, il trasferimento dati a 10 Gbps rende rapidissime le copie di file. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 107.49,
        image: "https://picsum.photos/seed/41/600/400"
    },
    {
        id: 42,
        name: "Tastiera Stratos Ultra 5",
        descrizione: "La Tastiera Stratos Ultra 5 regala una sensazione di digitazione solida, precisa e appagante. Gli switch meccanici hot-swap si sostituiscono senza saldature, per personalizzare il feeling di ogni tasto, mentre la retroilluminazione RGB per singolo tasto offre oltre 30 effetti configurabili. Inoltre, il layout italiano completo include tastierino numerico e tasti multimediali dedicati. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 174.99,
        image: "https://picsum.photos/seed/42/600/400"
    },
    {
        id: 43,
        name: "Stampante Cometa Pro 1",
        descrizione: "La Stampante Cometa Pro 1 porta in casa e in ufficio stampe nitide, veloci e affidabili. Il sistema a serbatoi ricaricabili abbatte drasticamente il costo per pagina, mentre lo scanner piano ad alta risoluzione digitalizza documenti e fotografie in pochi secondi. Inoltre, il display touch a colori rende intuitiva ogni operazione. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 313.49,
        image: "https://picsum.photos/seed/43/600/400"
    },
    {
        id: 44,
        name: "Lampada Monitor Drago Air 7",
        descrizione: "La Lampada Monitor Drago Air 7 rende più piacevoli e meno faticose le sessioni di lavoro serali. Si aggancia a monitor piatti e curvi senza viti né adesivi, mentre l'alimentazione USB-C elimina la necessità di prese aggiuntive. Inoltre, il fascio luminoso asimmetrico illumina la scrivania senza abbagliare. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Ideale sia per l'ufficio sia per il setup di casa. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 37.49,
        image: "https://picsum.photos/seed/44/600/400"
    },
    {
        id: 45,
        name: "Supporto Laptop Silenzio One 9",
        descrizione: "Il Supporto Laptop Silenzio One 9 è l'accessorio ergonomico che trasforma il modo di lavorare. Il design aperto favorisce la circolazione dell'aria e riduce le temperature, mentre la struttura in alluminio sostiene portatili fino a 27 pollici. Inoltre, la base stabile non oscilla nemmeno durante la digitazione più intensa. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 33.99,
        image: "https://picsum.photos/seed/45/600/400"
    },
    {
        id: 46,
        name: "Mouse Pulsar Evo 2",
        descrizione: "Il Mouse Pulsar Evo 2 è il compagno ideale per lunghe sessioni di lavoro e di gioco. I piedini in PTFE puro assicurano uno scorrimento silenzioso e privo di attrito, mentre gli switch ottici sono certificati per oltre 70 milioni di clic. Inoltre, la rotella in metallo con scorrimento a frizione variabile rende rapidissima la navigazione di documenti lunghi. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 56.9,
        image: "https://picsum.photos/seed/46/600/400"
    },
    {
        id: 47,
        name: "Tappetino Titan Plus Bianco Artico",
        descrizione: "Il Tappetino Titan Plus Bianco Artico protegge la scrivania e migliora lo scorrimento del mouse. Lo spessore di 3 mm offre il giusto sostegno al polso, mentre i bordi cuciti impediscono lo sfilacciamento nel tempo. Inoltre, la superficie in microtessuto è ottimizzata per sensori ottici e laser. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 27.49,
        image: "https://picsum.photos/seed/47/600/400"
    },
    {
        id: 48,
        name: "Webcam Condor Pro Lavanda",
        descrizione: "La Webcam Condor Pro Lavanda ti fa apparire al meglio in ogni videochiamata, riunione o diretta. Il sensore in risoluzione 4K cattura ogni dettaglio con colori naturali, mentre funziona in modalità plug-and-play senza driver con tutte le principali piattaforme di videochiamata. Inoltre, la correzione automatica della luce compensa ambienti troppo bui o controluce. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 121.9,
        image: "https://picsum.photos/seed/48/600/400"
    },
    {
        id: 49,
        name: "Cuffie Astra One 8",
        descrizione: "Le Cuffie Astra One 8 uniscono comfort da indossare tutto il giorno e una resa acustica sorprendente. I driver dinamici da 45 mm offrono bassi profondi e alti cristallini, mentre la modalità trasparenza permette di sentire l'ambiente circostante senza toglierle. Inoltre, il microfono con riduzione del rumore rende chiarissime chiamate e videoconferenze. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 82.99,
        image: "https://picsum.photos/seed/49/600/400"
    },
    {
        id: 50,
        name: "Casse Brezza Plus 7",
        descrizione: "Le Casse Brezza Plus 7 trasformano la scrivania in un piccolo studio d'ascolto. L'illuminazione RGB sincronizzata con la musica crea atmosfera, mentre la potenza complessiva di 20 W assicura un volume pieno senza distorsioni. Inoltre, i controlli di bassi e acuti permettono di adattare il suono all'ambiente. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 135.49,
        image: "https://picsum.photos/seed/50/600/400"
    },
    {
        id: 51,
        name: "Monitor Meridiano Plus Grafite",
        descrizione: "Il Monitor Meridiano Plus Grafite offre una qualità d'immagine che fa la differenza tanto nel lavoro quanto nel gioco. La tecnologia flicker-free e il filtro per la luce blu riducono l'affaticamento visivo, mentre il pannello IPS da 34 pollici con risoluzione Full HD restituisce dettagli nitidissimi. Inoltre, la frequenza di aggiornamento di 144 Hz rende ogni movimento incredibilmente fluido. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 347.49,
        image: "https://picsum.photos/seed/51/600/400"
    },
    {
        id: 52,
        name: "Microfono Neon Max Rosso Corsa",
        descrizione: "Il Microfono Neon Max Rosso Corsa è pensato per podcaster, streamer e musicisti che cercano un suono pulito. Il controllo del guadagno integrato permette regolazioni rapide al volo, mentre il supporto antivibrazione e il filtro anti-pop sono inclusi nella confezione. Inoltre, la capsula a condensatore cattura la voce con dettaglio e naturalezza. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 206.49,
        image: "https://picsum.photos/seed/52/600/400"
    },
    {
        id: 53,
        name: "Hub USB Phantom Ultra 1",
        descrizione: "L'Hub USB Phantom Ultra 1 mette ordine tra cavi e periferiche in un attimo. Il trasferimento dati a 10 Gbps rende rapidissime le copie di file, mentre è plug-and-play e compatibile con Windows, macOS e Linux. Inoltre, la porta Ethernet gigabit assicura una connessione cablata stabile. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 107.99,
        image: "https://picsum.photos/seed/53/600/400"
    },
    {
        id: 54,
        name: "Tastiera Sirio Elite 7",
        descrizione: "La Tastiera Sirio Elite 7 porta sulla scrivania la qualità costruttiva delle tastiere da collezione. Gli switch meccanici hot-swap si sostituiscono senza saldature, per personalizzare il feeling di ogni tasto, mentre la batteria da 4000 mAh garantisce settimane di utilizzo senza ricarica. Inoltre, la retroilluminazione RGB per singolo tasto offre oltre 24 effetti configurabili. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 192.49,
        image: "https://picsum.photos/seed/54/600/400"
    },
    {
        id: 55,
        name: "Controller Luna One Sabbia",
        descrizione: "Il Controller Luna One Sabbia unisce un'impugnatura comoda a una precisione chirurgica. La vibrazione a doppio motore restituisce ogni impatto e ogni esplosione, mentre è compatibile con PC, smartphone e le principali console. Inoltre, la batteria garantisce fino a 30 ore di gioco senza interruzioni. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 32.49,
        image: "https://picsum.photos/seed/55/600/400"
    },
    {
        id: 56,
        name: "SSD Esterno Nebula Air Grafite",
        descrizione: "L'SSD Esterno Nebula Air Grafite è il modo più rapido per ampliare lo spazio di archiviazione. La scocca resistente a urti e cadute protegge i dati anche in viaggio, mentre la capacità di 4 TB offre spazio per migliaia di foto, video e progetti. Inoltre, la connessione USB-C è compatibile con PC, Mac, tablet e console. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 78.99,
        image: "https://picsum.photos/seed/56/600/400"
    },
    {
        id: 57,
        name: "Router Cobalto Air 7",
        descrizione: "Il Router Cobalto Air 7 è il cuore di una rete domestica moderna, sicura e senza rallentamenti. Il parental control integrato permette di gestire orari e contenuti per ogni membro della famiglia, mentre gestisce senza fatica oltre 128 dispositivi connessi contemporaneamente. Inoltre, lo standard Wi-Fi 6E raggiunge velocità combinate fino a 5,4 Gbps. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 75.49,
        image: "https://picsum.photos/seed/57/600/400"
    },
    {
        id: 58,
        name: "Supporto Laptop Sirio Lite 9",
        descrizione: "Il Supporto Laptop Sirio Lite 9 porta lo schermo del portatile all'altezza degli occhi, salvando schiena e collo. L'altezza e l'inclinazione sono regolabili su più livelli, mentre la base stabile non oscilla nemmeno durante la digitazione più intensa. Inoltre, la struttura in alluminio sostiene portatili fino a 24 pollici. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 29.9,
        image: "https://picsum.photos/seed/58/600/400"
    },
    {
        id: 59,
        name: "Mouse Stratos Plus Verde Salvia",
        descrizione: "Il Mouse Stratos Plus Verde Salvia unisce una forma ergonomica studiata a lungo a un sensore di nuova generazione. Gli switch ottici sono certificati per oltre 70 milioni di clic, mentre il sensore ottico da 12000 DPI traccia ogni spostamento senza scatti anche sulle superfici più difficili. Inoltre, la modalità multi-dispositivo consente di passare da PC a tablet con un pulsante. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 65.99,
        image: "https://picsum.photos/seed/59/600/400"
    },
    {
        id: 60,
        name: "Lampada Monitor Zefiro Lite Grigio Siderale",
        descrizione: "La Lampada Monitor Zefiro Lite Grigio Siderale è il tocco di luce che mancava alla tua postazione. La luminosità si adatta automaticamente alla luce dell'ambiente, mentre l'alimentazione USB-C elimina la necessità di prese aggiuntive. Inoltre, il controller wireless a rotella permette regolazioni immediate. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 28.99,
        image: "https://picsum.photos/seed/60/600/400"
    },
    {
        id: 61,
        name: "Cuffie Fenice Pro Sabbia",
        descrizione: "Le Cuffie Fenice Pro Sabbia portano l'esperienza d'ascolto a un livello superiore, ovunque tu sia. La struttura pieghevole e la custodia rigida le rendono perfette in viaggio, mentre il microfono con riduzione del rumore rende chiarissime chiamate e videoconferenze. Inoltre, la modalità a bassa latenza sincronizza perfettamente audio e video nei giochi. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 208.49,
        image: "https://picsum.photos/seed/61/600/400"
    },
    {
        id: 62,
        name: "Webcam Tuono Prime Lavanda",
        descrizione: "La Webcam Tuono Prime Lavanda ti fa apparire al meglio in ogni videochiamata, riunione o diretta. La correzione automatica della luce compensa ambienti troppo bui o controluce, mentre i due microfoni stereo con riduzione del rumore catturano la voce in modo chiaro. Inoltre, funziona in modalità plug-and-play senza driver con tutte le principali piattaforme di videochiamata. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 149.49,
        image: "https://picsum.photos/seed/62/600/400"
    },
    {
        id: 63,
        name: "Microfono Tempesta Prime 7",
        descrizione: "Il Microfono Tempesta Prime 7 dà alla tua voce la presenza e la chiarezza di uno studio di registrazione. La capsula a condensatore cattura la voce con dettaglio e naturalezza, mentre il controllo del guadagno integrato permette regolazioni rapide al volo. Inoltre, il pattern cardioide isola la voce dai rumori ambientali. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 192.99,
        image: "https://picsum.photos/seed/63/600/400"
    },
    {
        id: 64,
        name: "Stampante Carbonio Max 5",
        descrizione: "La Stampante Carbonio Max 5 semplifica la gestione dei documenti di tutta la famiglia o del piccolo ufficio. Stampa fino a 33 pagine al minuto con testi nitidi e neri profondi, mentre il vassoio da 150 fogli limita le interruzioni per il caricamento della carta. Inoltre, la stampa fronte/retro automatica riduce il consumo di carta. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 437.99,
        image: "https://picsum.photos/seed/64/600/400"
    },
    {
        id: 65,
        name: "Tappetino Riflesso Lite 5",
        descrizione: "Il Tappetino Riflesso Lite 5 dà ordine e stile a tutta la postazione di lavoro. Si lava facilmente e torna come nuovo in pochi minuti, mentre il trattamento idrorepellente protegge da schizzi e macchie. Inoltre, lo spessore di 5 mm offre il giusto sostegno al polso. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 16.99,
        image: "https://picsum.photos/seed/65/600/400"
    },
    {
        id: 66,
        name: "Casse Levante One 5",
        descrizione: "Le Casse Levante One 5 riempiono la stanza con un suono potente e sorprendentemente definito. I controlli di bassi e acuti permettono di adattare il suono all'ambiente, mentre le casse in legno MDF riducono le risonanze indesiderate. Inoltre, gli ingressi Bluetooth, ottico e AUX permettono di collegare qualsiasi sorgente. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 86.99,
        image: "https://picsum.photos/seed/66/600/400"
    },
    {
        id: 67,
        name: "Hub USB Cassiopea Studio Grafite",
        descrizione: "L'Hub USB Cassiopea Studio Grafite mette ordine tra cavi e periferiche in un attimo. L'uscita HDMI supporta monitor esterni fino a 4K a 60 Hz, mentre il trasferimento dati a 10 Gbps rende rapidissime le copie di file. Inoltre, la scocca in alluminio dissipa il calore anche sotto carico. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 88.9,
        image: "https://picsum.photos/seed/67/600/400"
    },
    {
        id: 68,
        name: "Monitor Ferro Ultra Grafite",
        descrizione: "Il Monitor Ferro Ultra Grafite ridefinisce la postazione con cornici sottilissime e un pannello di alto livello. La frequenza di aggiornamento di 240 Hz rende ogni movimento incredibilmente fluido, mentre le cornici ultrasottili su tre lati lo rendono perfetto per configurazioni multi-monitor. Inoltre, il supporto HDR esalta contrasti e luminosità nei contenuti compatibili. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 899.99,
        image: "https://picsum.photos/seed/68/600/400"
    },
    {
        id: 69,
        name: "Controller Zenith Elite Grafite",
        descrizione: "Il Controller Zenith Elite Grafite rende ogni sessione di gioco più coinvolgente e reattiva. Gli stick con sensori a effetto Hall eliminano il fastidioso drift nel tempo, mentre la vibrazione a doppio motore restituisce ogni impatto e ogni esplosione. Inoltre, i grilletti con corsa regolabile si adattano a sparatutto e giochi di guida. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 160.49,
        image: "https://picsum.photos/seed/69/600/400"
    },
    {
        id: 70,
        name: "SSD Esterno Scoglio Air Titanio",
        descrizione: "L'SSD Esterno Scoglio Air Titanio è pensato per fotografi, videomaker e professionisti in movimento. Il software di backup automatico incluso rende semplice proteggere i file, mentre la crittografia hardware AES a 256 bit protegge i dati sensibili. Inoltre, la connessione USB-C è compatibile con PC, Mac, tablet e console. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 50.99,
        image: "https://picsum.photos/seed/70/600/400"
    },
    {
        id: 71,
        name: "Microfono Quasar Prime 8",
        descrizione: "Il Microfono Quasar Prime 8 è pensato per podcaster, streamer e musicisti che cercano un suono pulito. L'uscita cuffie a latenza zero consente di monitorare la propria voce in tempo reale, mentre il pulsante mute touch con indicatore LED evita imbarazzi durante le dirette. Inoltre, si collega in USB-C senza bisogno di interfacce audio esterne. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 154.49,
        image: "https://picsum.photos/seed/71/600/400"
    },
    {
        id: 72,
        name: "Mouse Meridiano Prime Verde Salvia",
        descrizione: "Il Mouse Meridiano Prime Verde Salvia trasforma ogni clic in un gesto rapido, fluido e naturale. I piedini in PTFE puro assicurano uno scorrimento silenzioso e privo di attrito, mentre la modalità multi-dispositivo consente di passare da PC a tablet con un pulsante. Inoltre, i pulsanti laterali programmabili permettono di richiamare scorciatoie e macro con un solo tocco. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 84.99,
        image: "https://picsum.photos/seed/72/600/400"
    },
    {
        id: 73,
        name: "Stampante Meridiano Evo Bianco Artico",
        descrizione: "La Stampante Meridiano Evo Bianco Artico è la multifunzione pensata per chi vuole semplicità senza rinunciare alla qualità. Lo scanner piano ad alta risoluzione digitalizza documenti e fotografie in pochi secondi, mentre la modalità silenziosa consente di stampare anche di notte senza disturbare. Inoltre, la connessione Wi-Fi e l'app dedicata permettono di stampare direttamente dallo smartphone. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 269.99,
        image: "https://picsum.photos/seed/73/600/400"
    },
    {
        id: 74,
        name: "Supporto Laptop Fulmine Studio Grigio Siderale",
        descrizione: "Il Supporto Laptop Fulmine Studio Grigio Siderale porta lo schermo del portatile all'altezza degli occhi, salvando schiena e collo. Si ripiega in pochi secondi e sta comodamente in uno zaino, mentre l'altezza e l'inclinazione sono regolabili su più livelli. Inoltre, i gommini in silicone proteggono il portatile da graffi e scivolamenti. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 65.99,
        image: "https://picsum.photos/seed/74/600/400"
    },
    {
        id: 75,
        name: "Tastiera Graffio Elite 7",
        descrizione: "La Tastiera Graffio Elite 7 combina un design essenziale a una risposta dei tasti sorprendentemente reattiva. La batteria da 5000 mAh garantisce settimane di utilizzo senza ricarica, mentre il telaio in alluminio spazzolato elimina flessioni e vibrazioni durante la digitazione. Inoltre, il poggiapolsi magnetico in similpelle sostiene i polsi nelle sessioni più lunghe. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 192.99,
        image: "https://picsum.photos/seed/75/600/400"
    },
    {
        id: 76,
        name: "Tappetino Drago Max 2",
        descrizione: "Il Tappetino Drago Max 2 dà ordine e stile a tutta la postazione di lavoro. La superficie in microtessuto è ottimizzata per sensori ottici e laser, mentre il formato esteso da 120x60 cm ospita comodamente mouse e tastiera. Inoltre, la base in gomma naturale antiscivolo lo mantiene fermo in ogni situazione. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 48.49,
        image: "https://picsum.photos/seed/76/600/400"
    },
    {
        id: 77,
        name: "Webcam Pulsar One 6",
        descrizione: "La Webcam Pulsar One 6 trasforma lo smart working con immagini nitide e un audio limpido. Il sensore in risoluzione 2K cattura ogni dettaglio con colori naturali, mentre l'autofocus rapido mantiene il volto sempre a fuoco anche quando ti muovi. Inoltre, funziona in modalità plug-and-play senza driver con tutte le principali piattaforme di videochiamata. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 52.9,
        image: "https://picsum.photos/seed/77/600/400"
    },
    {
        id: 78,
        name: "Controller Scirocco Elite 3",
        descrizione: "Il Controller Scirocco Elite 3 è progettato per competere ai massimi livelli e vincere. L'impugnatura gommata antiscivolo resta salda anche nelle partite più intense, mentre le palette posteriori rimappabili permettono comandi rapidissimi. Inoltre, i grilletti con corsa regolabile si adattano a sparatutto e giochi di guida. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 175.99,
        image: "https://picsum.photos/seed/78/600/400"
    },
    {
        id: 79,
        name: "Router Orione Max Titanio",
        descrizione: "Il Router Orione Max Titanio è pensato per famiglie connesse, gamer e professionisti in smart working. L'app di configurazione guida l'installazione in pochi minuti, mentre la tecnologia mesh consente di estendere la copertura aggiungendo altri nodi. Inoltre, la priorità QoS dà la precedenza a gaming e videochiamate. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 326.99,
        image: "https://picsum.photos/seed/79/600/400"
    },
    {
        id: 80,
        name: "SSD Esterno Opale Lite Rosso Corsa",
        descrizione: "L'SSD Esterno Opale Lite Rosso Corsa mette al sicuro i tuoi file e li porta ovunque alla massima velocità. Le velocità di lettura fino a 1050 MB/s azzerano i tempi di attesa, mentre la scocca resistente a urti e cadute protegge i dati anche in viaggio. Inoltre, la certificazione IP65 lo difende da polvere e schizzi d'acqua. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 62.9,
        image: "https://picsum.photos/seed/80/600/400"
    },
    {
        id: 81,
        name: "Lampada Monitor Graffio Evo 1",
        descrizione: "La Lampada Monitor Graffio Evo 1 è il tocco di luce che mancava alla tua postazione. Si aggancia a monitor piatti e curvi senza viti né adesivi, mentre la luminosità si adatta automaticamente alla luce dell'ambiente. Inoltre, la temperatura colore è regolabile da 2700 K a 6500 K. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 54.9,
        image: "https://picsum.photos/seed/81/600/400"
    },
    {
        id: 82,
        name: "Monitor Plasma Elite Grigio Siderale",
        descrizione: "Il Monitor Plasma Elite Grigio Siderale offre una qualità d'immagine che fa la differenza tanto nel lavoro quanto nel gioco. La frequenza di aggiornamento di 240 Hz rende ogni movimento incredibilmente fluido, mentre il supporto ergonomico regolabile in altezza, inclinazione e rotazione si adatta a ogni postura. Inoltre, il pannello IPS da 32 pollici con risoluzione WQHD restituisce dettagli nitidissimi. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 744.9,
        image: "https://picsum.photos/seed/82/600/400"
    },
    {
        id: 83,
        name: "Cuffie Aurora Lite Nero Notte",
        descrizione: "Le Cuffie Aurora Lite Nero Notte portano l'esperienza d'ascolto a un livello superiore, ovunque tu sia. La connessione Bluetooth 5.3 multipoint le collega a due dispositivi contemporaneamente, mentre i cuscinetti in memory foam rivestiti in tessuto traspirante non affaticano le orecchie. Inoltre, la struttura pieghevole e la custodia rigida le rendono perfette in viaggio. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 97.99,
        image: "https://picsum.photos/seed/83/600/400"
    },
    {
        id: 84,
        name: "Hub USB Carbonio Prime Grafite",
        descrizione: "L'Hub USB Carbonio Prime Grafite trasforma qualsiasi portatile in una vera postazione desktop. La scocca in alluminio dissipa il calore anche sotto carico, mentre la ricarica passthrough fino a 100 W alimenta il portatile mentre lavori. Inoltre, offre 9 porte, tra cui USB-A, USB-C, HDMI e lettore di schede SD. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 81.99,
        image: "https://picsum.photos/seed/84/600/400"
    },
    {
        id: 85,
        name: "Tastiera Pantera Core 3",
        descrizione: "La Tastiera Pantera Core 3 porta sulla scrivania la qualità costruttiva delle tastiere da collezione. La retroilluminazione RGB per singolo tasto offre oltre 24 effetti configurabili, mentre i keycap in PBT double-shot resistono all'usura e non diventano lucidi con il tempo. Inoltre, la batteria da 4000 mAh garantisce settimane di utilizzo senza ricarica. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 102.9,
        image: "https://picsum.photos/seed/85/600/400"
    },
    {
        id: 86,
        name: "Mouse Aurora Evo 9",
        descrizione: "Il Mouse Aurora Evo 9 unisce una forma ergonomica studiata a lungo a un sensore di nuova generazione. Il peso ridotto a soli 63 grammi riduce l'affaticamento della mano, mentre la rotella in metallo con scorrimento a frizione variabile rende rapidissima la navigazione di documenti lunghi. Inoltre, il sensore ottico da 12000 DPI traccia ogni spostamento senza scatti anche sulle superfici più difficili. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 62.49,
        image: "https://picsum.photos/seed/86/600/400"
    },
    {
        id: 87,
        name: "Casse Aquila Pro 2",
        descrizione: "Le Casse Aquila Pro 2 riempiono la stanza con un suono potente e sorprendentemente definito. Gli ingressi Bluetooth, ottico e AUX permettono di collegare qualsiasi sorgente, mentre i woofer in fibra di carta garantiscono bassi caldi e ben controllati. Inoltre, i controlli di bassi e acuti permettono di adattare il suono all'ambiente. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 220.9,
        image: "https://picsum.photos/seed/87/600/400"
    },
    {
        id: 88,
        name: "Stampante Aurora Core 2",
        descrizione: "La Stampante Aurora Core 2 semplifica la gestione dei documenti di tutta la famiglia o del piccolo ufficio. Il vassoio da 250 fogli limita le interruzioni per il caricamento della carta, mentre lo scanner piano ad alta risoluzione digitalizza documenti e fotografie in pochi secondi. Inoltre, le stampe fotografiche a colori hanno toni vividi e sfumature morbide. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 193.99,
        image: "https://picsum.photos/seed/88/600/400"
    },
    {
        id: 89,
        name: "Supporto Laptop Ossidiana Core 8",
        descrizione: "Il Supporto Laptop Ossidiana Core 8 porta lo schermo del portatile all'altezza degli occhi, salvando schiena e collo. Si ripiega in pochi secondi e sta comodamente in uno zaino, mentre l'altezza e l'inclinazione sono regolabili su più livelli. Inoltre, i gommini in silicone proteggono il portatile da graffi e scivolamenti. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 42.99,
        image: "https://picsum.photos/seed/89/600/400"
    },
    {
        id: 90,
        name: "Microfono Carbonio Studio 5",
        descrizione: "Il Microfono Carbonio Studio 5 rende ogni parola limpida, calda e piena di carattere. L'uscita cuffie a latenza zero consente di monitorare la propria voce in tempo reale, mentre la registrazione a 24 bit/48 kHz garantisce una qualità audio professionale. Inoltre, il supporto antivibrazione e il filtro anti-pop sono inclusi nella confezione. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 155.99,
        image: "https://picsum.photos/seed/90/600/400"
    },
    {
        id: 91,
        name: "Webcam Brezza Prime 4",
        descrizione: "La Webcam Brezza Prime 4 è la soluzione semplice e immediata per chi lavora o studia da remoto. Funziona in modalità plug-and-play senza driver con tutte le principali piattaforme di videochiamata, mentre i due microfoni stereo con riduzione del rumore catturano la voce in modo chiaro. Inoltre, il copriobiettivo integrato garantisce privacy totale quando non la usi. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 138.49,
        image: "https://picsum.photos/seed/91/600/400"
    },
    {
        id: 92,
        name: "Tastiera Eco Pro 1",
        descrizione: "La Tastiera Eco Pro 1 porta sulla scrivania la qualità costruttiva delle tastiere da collezione. La batteria da 5000 mAh garantisce settimane di utilizzo senza ricarica, mentre il layout italiano completo include tastierino numerico e tasti multimediali dedicati. Inoltre, lo strato di smorzamento interno in silicone attenua il rumore di battitura. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 165.99,
        image: "https://picsum.photos/seed/92/600/400"
    },
    {
        id: 93,
        name: "Router Grifone Studio Grafite",
        descrizione: "Il Router Grifone Studio Grafite porta una connessione veloce e stabile in ogni angolo della casa. Gestisce senza fatica oltre 200 dispositivi connessi contemporaneamente, mentre l'app di configurazione guida l'installazione in pochi minuti. Inoltre, la crittografia WPA3 e il firewall integrato proteggono la rete dalle intrusioni. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 289.9,
        image: "https://picsum.photos/seed/93/600/400"
    },
    {
        id: 94,
        name: "Stampante Zenith Ultra 1",
        descrizione: "La Stampante Zenith Ultra 1 è la multifunzione pensata per chi vuole semplicità senza rinunciare alla qualità. Il sistema a serbatoi ricaricabili abbatte drasticamente il costo per pagina, mentre la connessione Wi-Fi e l'app dedicata permettono di stampare direttamente dallo smartphone. Inoltre, stampa fino a 22 pagine al minuto con testi nitidi e neri profondi. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 402.99,
        image: "https://picsum.photos/seed/94/600/400"
    },
    {
        id: 95,
        name: "Mouse Phantom Air 2",
        descrizione: "Il Mouse Phantom Air 2 è il compagno ideale per lunghe sessioni di lavoro e di gioco. I pulsanti laterali programmabili permettono di richiamare scorciatoie e macro con un solo tocco, mentre la batteria ricaricabile via USB-C offre fino a 80 ore di autonomia con una singola carica. Inoltre, la connessione wireless a bassa latenza garantisce una risposta istantanea, paragonabile a quella di un cavo. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 12.99,
        image: "https://picsum.photos/seed/95/600/400"
    },
    {
        id: 96,
        name: "Controller Tuono Ultra 8",
        descrizione: "Il Controller Tuono Ultra 8 rende ogni sessione di gioco più coinvolgente e reattiva. Gli stick con sensori a effetto Hall eliminano il fastidioso drift nel tempo, mentre l'impugnatura gommata antiscivolo resta salda anche nelle partite più intense. Inoltre, è compatibile con PC, smartphone e le principali console. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 164.9,
        image: "https://picsum.photos/seed/96/600/400"
    },
    {
        id: 97,
        name: "Supporto Laptop Kraken Studio 4",
        descrizione: "Il Supporto Laptop Kraken Studio 4 unisce eleganza minimalista e solidità a tutta prova. Il design aperto favorisce la circolazione dell'aria e riduce le temperature, mentre la base stabile non oscilla nemmeno durante la digitazione più intensa. Inoltre, la struttura in alluminio sostiene portatili fino a 34 pollici. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 67.99,
        image: "https://picsum.photos/seed/97/600/400"
    },
    {
        id: 98,
        name: "Microfono Grifone Evo Blu Oceano",
        descrizione: "Il Microfono Grifone Evo Blu Oceano porta qualità broadcast in qualsiasi stanza della casa. Il controllo del guadagno integrato permette regolazioni rapide al volo, mentre il supporto antivibrazione e il filtro anti-pop sono inclusi nella confezione. Inoltre, l'uscita cuffie a latenza zero consente di monitorare la propria voce in tempo reale. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 122.99,
        image: "https://picsum.photos/seed/98/600/400"
    },
    {
        id: 99,
        name: "Monitor Riflesso Studio Nero Notte",
        descrizione: "Il Monitor Riflesso Studio Nero Notte apre una finestra nitida e brillante su tutto ciò che crei e guardi. La frequenza di aggiornamento di 240 Hz rende ogni movimento incredibilmente fluido, mentre il pannello IPS da 27 pollici con risoluzione 4K UHD restituisce dettagli nitidissimi. Inoltre, le cornici ultrasottili su tre lati lo rendono perfetto per configurazioni multi-monitor. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 630.9,
        image: "https://picsum.photos/seed/99/600/400"
    },
    {
        id: 100,
        name: "Router Orione Lite 2",
        descrizione: "Il Router Orione Lite 2 porta una connessione veloce e stabile in ogni angolo della casa. Gestisce senza fatica oltre 200 dispositivi connessi contemporaneamente, mentre la porta WAN da 2,5 Gbps sfrutta al massimo le connessioni in fibra ottica. Inoltre, la priorità QoS dà la precedenza a gaming e videochiamate. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 59.9,
        image: "https://picsum.photos/seed/100/600/400"
    }
];

export default db;
