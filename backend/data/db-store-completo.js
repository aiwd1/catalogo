const db = [
    {
        id: 1,
        name: "Mouse Opale Air 5",
        descrizione: "Il Mouse Opale Air 5 nasce per chi vuole precisione assoluta a ogni movimento del polso. La modalità multi-dispositivo consente di passare da PC a tablet con un pulsante, mentre la connessione wireless a bassa latenza garantisce una risposta istantanea, paragonabile a quella di un cavo. Inoltre, i piedini in PTFE puro assicurano uno scorrimento silenzioso e privo di attrito. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 30.99
    },
    {
        id: 2,
        name: "Tastiera Pulsar Core Titanio",
        descrizione: "La Tastiera Pulsar Core Titanio è pensata per chi scrive molto e non vuole scendere a compromessi sul comfort. Il poggiapolsi magnetico in similpelle sostiene i polsi nelle sessioni più lunghe, mentre il telaio in alluminio spazzolato elimina flessioni e vibrazioni durante la digitazione. Inoltre, gli switch meccanici hot-swap si sostituiscono senza saldature, per personalizzare il feeling di ogni tasto. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 88.99
    },
    {
        id: 3,
        name: "Monitor Vortex One Lavanda",
        descrizione: "Il Monitor Vortex One Lavanda è progettato per chi pretende colori fedeli e una fluidità impeccabile. Il tempo di risposta di 1 ms elimina scie e sfocature nelle scene più veloci, mentre le cornici ultrasottili su tre lati lo rendono perfetto per configurazioni multi-monitor. Inoltre, il supporto ergonomico regolabile in altezza, inclinazione e rotazione si adatta a ogni postura. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 271.49
    },
    {
        id: 4,
        name: "Cuffie Vortex Core 9",
        descrizione: "Le Cuffie Vortex Core 9 ti avvolgono in un suono pieno, dettagliato e ricco di sfumature. La struttura pieghevole e la custodia rigida le rendono perfette in viaggio, mentre la connessione Bluetooth 5.3 multipoint le collega a due dispositivi contemporaneamente. Inoltre, la modalità trasparenza permette di sentire l'ambiente circostante senza toglierle. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 144.99
    },
    {
        id: 5,
        name: "Webcam Polaris Core Verde Salvia",
        descrizione: "La Webcam Polaris Core Verde Salvia ti fa apparire al meglio in ogni videochiamata, riunione o diretta. Il copriobiettivo integrato garantisce privacy totale quando non la usi, mentre la clip universale si fissa saldamente a monitor, portatili e treppiedi. Inoltre, i due microfoni stereo con riduzione del rumore catturano la voce in modo chiaro. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 110.99
    },
    {
        id: 6,
        name: "Stampante Prisma Max Rosso Corsa",
        descrizione: "La Stampante Prisma Max Rosso Corsa unisce costi di stampa contenuti a prestazioni di livello professionale. Il display touch a colori rende intuitiva ogni operazione, mentre stampa fino a 15 pagine al minuto con testi nitidi e neri profondi. Inoltre, la stampa fronte/retro automatica riduce il consumo di carta. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 422.99
    },
    {
        id: 7,
        name: "Router Ossidiana Plus Blu Oceano",
        descrizione: "Il Router Ossidiana Plus Blu Oceano è il cuore di una rete domestica moderna, sicura e senza rallentamenti. Lo standard Wi-Fi 6E raggiunge velocità combinate fino a 3 Gbps, mentre gestisce senza fatica oltre 64 dispositivi connessi contemporaneamente. Inoltre, la crittografia WPA3 e il firewall integrato proteggono la rete dalle intrusioni. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 134.99
    },
    {
        id: 8,
        name: "Supporto Laptop Vortex Core 7",
        descrizione: "Il Supporto Laptop Vortex Core 7 è l'accessorio ergonomico che trasforma il modo di lavorare. I gommini in silicone proteggono il portatile da graffi e scivolamenti, mentre si ripiega in pochi secondi e sta comodamente in uno zaino. Inoltre, la base stabile non oscilla nemmeno durante la digitazione più intensa. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 46.9
    },
    {
        id: 9,
        name: "Microfono Aquila Ultra Bianco Artico",
        descrizione: "Il Microfono Aquila Ultra Bianco Artico rende ogni parola limpida, calda e piena di carattere. La registrazione a 24 bit/96 kHz garantisce una qualità audio professionale, mentre il controllo del guadagno integrato permette regolazioni rapide al volo. Inoltre, il supporto antivibrazione e il filtro anti-pop sono inclusi nella confezione. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 242.99
    },
    {
        id: 10,
        name: "Mouse Glaciale Max 4",
        descrizione: "Il Mouse Glaciale Max 4 è il compagno ideale per lunghe sessioni di lavoro e di gioco. Il peso ridotto a soli 58 grammi riduce l'affaticamento della mano, mentre gli switch ottici sono certificati per oltre 90 milioni di clic. Inoltre, la rotella in metallo con scorrimento a frizione variabile rende rapidissima la navigazione di documenti lunghi. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 126.99
    },
    {
        id: 11,
        name: "Stampante Solaris Plus Sabbia",
        descrizione: "La Stampante Solaris Plus Sabbia è la multifunzione pensata per chi vuole semplicità senza rinunciare alla qualità. Lo scanner piano ad alta risoluzione digitalizza documenti e fotografie in pochi secondi, mentre la stampa fronte/retro automatica riduce il consumo di carta. Inoltre, il display touch a colori rende intuitiva ogni operazione. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 173.9
    },
    {
        id: 12,
        name: "Controller Solaris Ultra Sabbia",
        descrizione: "Il Controller Solaris Ultra Sabbia rende ogni sessione di gioco più coinvolgente e reattiva. I grilletti con corsa regolabile si adattano a sparatutto e giochi di guida, mentre è compatibile con PC, smartphone e le principali console. Inoltre, l'impugnatura gommata antiscivolo resta salda anche nelle partite più intense. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 186.99
    },
    {
        id: 13,
        name: "Supporto Laptop Cobalto Pro 4",
        descrizione: "Il Supporto Laptop Cobalto Pro 4 è l'accessorio ergonomico che trasforma il modo di lavorare. L'altezza e l'inclinazione sono regolabili su più livelli, mentre si ripiega in pochi secondi e sta comodamente in uno zaino. Inoltre, i gommini in silicone proteggono il portatile da graffi e scivolamenti. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 56.9
    },
    {
        id: 14,
        name: "Lampada Monitor Cobra Max 4",
        descrizione: "La Lampada Monitor Cobra Max 4 rende più piacevoli e meno faticose le sessioni di lavoro serali. La retroilluminazione RGB posteriore crea un'atmosfera rilassante, mentre il fascio luminoso asimmetrico illumina la scrivania senza abbagliare. Inoltre, l'alimentazione USB-C elimina la necessità di prese aggiuntive. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 113.99
    },
    {
        id: 15,
        name: "Webcam Onda Studio 3",
        descrizione: "La Webcam Onda Studio 3 trasforma lo smart working con immagini nitide e un audio limpido. I due microfoni stereo con riduzione del rumore catturano la voce in modo chiaro, mentre la registrazione a 60 fps rende fluidi anche streaming e tutorial. Inoltre, l'autofocus rapido mantiene il volto sempre a fuoco anche quando ti muovi. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 114.9
    },
    {
        id: 16,
        name: "Casse Solaris Lite 9",
        descrizione: "Le Casse Solaris Lite 9 trasformano la scrivania in un piccolo studio d'ascolto. Gli ingressi Bluetooth, ottico e AUX permettono di collegare qualsiasi sorgente, mentre i woofer in fibra di carta garantiscono bassi caldi e ben controllati. Inoltre, l'illuminazione RGB sincronizzata con la musica crea atmosfera. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 84.49
    },
    {
        id: 17,
        name: "Hub USB Ossidiana Core Verde Salvia",
        descrizione: "L'Hub USB Ossidiana Core Verde Salvia trasforma qualsiasi portatile in una vera postazione desktop. Offre 11 porte, tra cui USB-A, USB-C, HDMI e lettore di schede SD, mentre è plug-and-play e compatibile con Windows, macOS e Linux. Inoltre, la ricarica passthrough fino a 100 W alimenta il portatile mentre lavori. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 44.99
    },
    {
        id: 18,
        name: "Webcam Shadow One 3",
        descrizione: "La Webcam Shadow One 3 ti fa apparire al meglio in ogni videochiamata, riunione o diretta. Il campo visivo di 95° inquadra comodamente anche più persone, mentre l'autofocus rapido mantiene il volto sempre a fuoco anche quando ti muovi. Inoltre, i due microfoni stereo con riduzione del rumore catturano la voce in modo chiaro. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 37.99
    },
    {
        id: 19,
        name: "SSD Esterno Pantera Studio Grafite",
        descrizione: "L'SSD Esterno Pantera Studio Grafite è il modo più rapido per ampliare lo spazio di archiviazione. Il software di backup automatico incluso rende semplice proteggere i file, mentre la scocca resistente a urti e cadute protegge i dati anche in viaggio. Inoltre, la connessione USB-C è compatibile con PC, Mac, tablet e console. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 213.9
    },
    {
        id: 20,
        name: "SSD Esterno Tempesta Prime 3",
        descrizione: "L'SSD Esterno Tempesta Prime 3 unisce dimensioni tascabili a prestazioni da disco interno. Le velocità di lettura fino a 1050 MB/s azzerano i tempi di attesa, mentre la certificazione IP65 lo difende da polvere e schizzi d'acqua. Inoltre, la connessione USB-C è compatibile con PC, Mac, tablet e console. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 224.99
    },
    {
        id: 21,
        name: "Hub USB Sirio Evo Blu Oceano",
        descrizione: "L'Hub USB Sirio Evo Blu Oceano mette ordine tra cavi e periferiche in un attimo. È plug-and-play e compatibile con Windows, macOS e Linux, mentre offre 7 porte, tra cui USB-A, USB-C, HDMI e lettore di schede SD. Inoltre, la scocca in alluminio dissipa il calore anche sotto carico. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 50.49
    },
    {
        id: 22,
        name: "Microfono Onice Evo Sabbia",
        descrizione: "Il Microfono Onice Evo Sabbia porta qualità broadcast in qualsiasi stanza della casa. Il pattern cardioide isola la voce dai rumori ambientali, mentre il pulsante mute touch con indicatore LED evita imbarazzi durante le dirette. Inoltre, si collega in USB-C senza bisogno di interfacce audio esterne. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 107.99
    },
    {
        id: 23,
        name: "Monitor Eco Studio Rosso Corsa",
        descrizione: "Il Monitor Eco Studio Rosso Corsa offre una qualità d'immagine che fa la differenza tanto nel lavoro quanto nel gioco. La copertura del 120% dello spazio colore sRGB lo rende adatto a fotoritocco e grafica, mentre la porta USB-C con alimentazione fino a 65 W collega e ricarica il portatile con un solo cavo. Inoltre, il pannello IPS da 24 pollici con risoluzione WQHD restituisce dettagli nitidissimi. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 702.99
    },
    {
        id: 24,
        name: "Router Onice Ultra Grafite",
        descrizione: "Il Router Onice Ultra Grafite elimina le zone morte e i cali di segnale una volta per tutte. Il parental control integrato permette di gestire orari e contenuti per ogni membro della famiglia, mentre gestisce senza fatica oltre 200 dispositivi connessi contemporaneamente. Inoltre, l'app di configurazione guida l'installazione in pochi minuti. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 398.99
    },
    {
        id: 25,
        name: "SSD Esterno Eco One 6",
        descrizione: "L'SSD Esterno Eco One 6 è pensato per fotografi, videomaker e professionisti in movimento. Le velocità di lettura fino a 2800 MB/s azzerano i tempi di attesa, mentre la crittografia hardware AES a 256 bit protegge i dati sensibili. Inoltre, la capacità di 2 TB offre spazio per migliaia di foto, video e progetti. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 105.49
    },
    {
        id: 26,
        name: "Casse Drago Prime Nero Notte",
        descrizione: "Le Casse Drago Prime Nero Notte uniscono un design raffinato a una resa sonora di alto livello. Il telecomando incluso consente di gestire il volume dal divano, mentre le casse in legno MDF riducono le risonanze indesiderate. Inoltre, la potenza complessiva di 40 W assicura un volume pieno senza distorsioni. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 176.49
    },
    {
        id: 27,
        name: "Mouse Vertex Lite Sabbia",
        descrizione: "Il Mouse Vertex Lite Sabbia è il compagno ideale per lunghe sessioni di lavoro e di gioco. La batteria ricaricabile via USB-C offre fino a 40 ore di autonomia con una singola carica, mentre il peso ridotto a soli 72 grammi riduce l'affaticamento della mano. Inoltre, il sensore ottico da 12000 DPI traccia ogni spostamento senza scatti anche sulle superfici più difficili. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 31.99
    },
    {
        id: 28,
        name: "Mouse Drago Prime Nero Notte",
        descrizione: "Il Mouse Drago Prime Nero Notte unisce una forma ergonomica studiata a lungo a un sensore di nuova generazione. Il sensore ottico da 26000 DPI traccia ogni spostamento senza scatti anche sulle superfici più difficili, mentre i pulsanti laterali programmabili permettono di richiamare scorciatoie e macro con un solo tocco. Inoltre, i piedini in PTFE puro assicurano uno scorrimento silenzioso e privo di attrito. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 96.99
    },
    {
        id: 29,
        name: "SSD Esterno Eco Lite 1",
        descrizione: "L'SSD Esterno Eco Lite 1 mette al sicuro i tuoi file e li porta ovunque alla massima velocità. Le velocità di lettura fino a 1050 MB/s azzerano i tempi di attesa, mentre il software di backup automatico incluso rende semplice proteggere i file. Inoltre, la certificazione IP65 lo difende da polvere e schizzi d'acqua. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 72.9
    },
    {
        id: 30,
        name: "Router Carbonio Air 4",
        descrizione: "Il Router Carbonio Air 4 porta una connessione veloce e stabile in ogni angolo della casa. Le antenne ad alto guadagno con beamforming indirizzano il segnale verso i dispositivi, mentre la porta WAN da 2,5 Gbps sfrutta al massimo le connessioni in fibra ottica. Inoltre, la crittografia WPA3 e il firewall integrato proteggono la rete dalle intrusioni. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 60.99
    },
    {
        id: 31,
        name: "Tastiera Cassiopea Plus Lavanda",
        descrizione: "La Tastiera Cassiopea Plus Lavanda regala una sensazione di digitazione solida, precisa e appagante. La connessione tri-mode (Bluetooth, 2,4 GHz e cavo) si adatta a qualsiasi postazione, mentre il telaio in alluminio spazzolato elimina flessioni e vibrazioni durante la digitazione. Inoltre, il layout italiano completo include tastierino numerico e tasti multimediali dedicati. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 89.49
    },
    {
        id: 32,
        name: "Tappetino Vetta Core 3",
        descrizione: "Il Tappetino Vetta Core 3 dà ordine e stile a tutta la postazione di lavoro. Lo spessore di 3 mm offre il giusto sostegno al polso, mentre i bordi cuciti impediscono lo sfilacciamento nel tempo. Inoltre, il formato esteso da 80x30 cm ospita comodamente mouse e tastiera. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 25.9
    },
    {
        id: 33,
        name: "SSD Esterno Meridiano Lite 4",
        descrizione: "L'SSD Esterno Meridiano Lite 4 unisce dimensioni tascabili a prestazioni da disco interno. La connessione USB-C è compatibile con PC, Mac, tablet e console, mentre il software di backup automatico incluso rende semplice proteggere i file. Inoltre, la scocca resistente a urti e cadute protegge i dati anche in viaggio. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 81.9
    },
    {
        id: 34,
        name: "SSD Esterno Solaris Ultra 2",
        descrizione: "L'SSD Esterno Solaris Ultra 2 unisce dimensioni tascabili a prestazioni da disco interno. La capacità di 1 TB offre spazio per migliaia di foto, video e progetti, mentre la connessione USB-C è compatibile con PC, Mac, tablet e console. Inoltre, le velocità di lettura fino a 2800 MB/s azzerano i tempi di attesa. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 268.49
    },
    {
        id: 35,
        name: "Cuffie Pulsar Core 2",
        descrizione: "Le Cuffie Pulsar Core 2 uniscono comfort da indossare tutto il giorno e una resa acustica sorprendente. Il microfono con riduzione del rumore rende chiarissime chiamate e videoconferenze, mentre la modalità a bassa latenza sincronizza perfettamente audio e video nei giochi. Inoltre, la connessione Bluetooth 5.3 multipoint le collega a due dispositivi contemporaneamente. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 115.99
    },
    {
        id: 36,
        name: "SSD Esterno Vertex Lite 4",
        descrizione: "L'SSD Esterno Vertex Lite 4 è pensato per fotografi, videomaker e professionisti in movimento. La connessione USB-C è compatibile con PC, Mac, tablet e console, mentre il software di backup automatico incluso rende semplice proteggere i file. Inoltre, la certificazione IP65 lo difende da polvere e schizzi d'acqua. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 52.49
    },
    {
        id: 37,
        name: "Microfono Luna Lite Titanio",
        descrizione: "Il Microfono Luna Lite Titanio è pensato per podcaster, streamer e musicisti che cercano un suono pulito. Il pattern cardioide isola la voce dai rumori ambientali, mentre il pulsante mute touch con indicatore LED evita imbarazzi durante le dirette. Inoltre, l'uscita cuffie a latenza zero consente di monitorare la propria voce in tempo reale. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 49.99
    },
    {
        id: 38,
        name: "Microfono Zenith Max 6",
        descrizione: "Il Microfono Zenith Max 6 porta qualità broadcast in qualsiasi stanza della casa. Si collega in USB-C senza bisogno di interfacce audio esterne, mentre la registrazione a 24 bit/48 kHz garantisce una qualità audio professionale. Inoltre, il controllo del guadagno integrato permette regolazioni rapide al volo. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 205.49
    },
    {
        id: 39,
        name: "Controller Pulsar Lite Grigio Siderale",
        descrizione: "Il Controller Pulsar Lite Grigio Siderale unisce un'impugnatura comoda a una precisione chirurgica. L'impugnatura gommata antiscivolo resta salda anche nelle partite più intense, mentre le palette posteriori rimappabili permettono comandi rapidissimi. Inoltre, gli stick con sensori a effetto Hall eliminano il fastidioso drift nel tempo. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 39.99
    },
    {
        id: 40,
        name: "Lampada Monitor Mistral Ultra 9",
        descrizione: "La Lampada Monitor Mistral Ultra 9 libera spazio sulla scrivania portando la luce proprio dove serve. La luminosità si adatta automaticamente alla luce dell'ambiente, mentre la retroilluminazione RGB posteriore crea un'atmosfera rilassante. Inoltre, la temperatura colore è regolabile da 2700 K a 6500 K. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 103.99
    },
    {
        id: 41,
        name: "Router Cobra Air Rosso Corsa",
        descrizione: "Il Router Cobra Air Rosso Corsa è il cuore di una rete domestica moderna, sicura e senza rallentamenti. Lo standard Wi-Fi 7 raggiunge velocità combinate fino a 3 Gbps, mentre la tecnologia mesh consente di estendere la copertura aggiungendo altri nodi. Inoltre, l'app di configurazione guida l'installazione in pochi minuti. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 48.99
    },
    {
        id: 42,
        name: "Stampante Helix Pro Verde Salvia",
        descrizione: "La Stampante Helix Pro Verde Salvia è la multifunzione pensata per chi vuole semplicità senza rinunciare alla qualità. La stampa fronte/retro automatica riduce il consumo di carta, mentre lo scanner piano ad alta risoluzione digitalizza documenti e fotografie in pochi secondi. Inoltre, le stampe fotografiche a colori hanno toni vividi e sfumature morbide. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 386.9
    },
    {
        id: 43,
        name: "Controller Stratos Air Titanio",
        descrizione: "Il Controller Stratos Air Titanio unisce un'impugnatura comoda a una precisione chirurgica. I grilletti con corsa regolabile si adattano a sparatutto e giochi di guida, mentre la batteria garantisce fino a 40 ore di gioco senza interruzioni. Inoltre, la vibrazione a doppio motore restituisce ogni impatto e ogni esplosione. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 69.99
    },
    {
        id: 44,
        name: "Cuffie Nova Lite 6",
        descrizione: "Le Cuffie Nova Lite 6 sono pensate per isolarti dal mondo e lasciarti solo con la tua musica. La modalità trasparenza permette di sentire l'ambiente circostante senza toglierle, mentre i cuscinetti in memory foam rivestiti in tessuto traspirante non affaticano le orecchie. Inoltre, la modalità a bassa latenza sincronizza perfettamente audio e video nei giochi. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 48.99
    },
    {
        id: 45,
        name: "SSD Esterno Carbonio Plus 6",
        descrizione: "L'SSD Esterno Carbonio Plus 6 è pensato per fotografi, videomaker e professionisti in movimento. La scocca resistente a urti e cadute protegge i dati anche in viaggio, mentre le velocità di lettura fino a 2000 MB/s azzerano i tempi di attesa. Inoltre, la capacità di 1 TB offre spazio per migliaia di foto, video e progetti. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 151.99
    },
    {
        id: 46,
        name: "Lampada Monitor Fenice Ultra 9",
        descrizione: "La Lampada Monitor Fenice Ultra 9 illumina la scrivania in modo uniforme senza creare riflessi sullo schermo. Si aggancia a monitor piatti e curvi senza viti né adesivi, mentre il fascio luminoso asimmetrico illumina la scrivania senza abbagliare. Inoltre, la temperatura colore è regolabile da 2700 K a 6500 K. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 102.99
    },
    {
        id: 47,
        name: "SSD Esterno Spectra Lite 2",
        descrizione: "L'SSD Esterno Spectra Lite 2 è pensato per fotografi, videomaker e professionisti in movimento. La capacità di 4 TB offre spazio per migliaia di foto, video e progetti, mentre la connessione USB-C è compatibile con PC, Mac, tablet e console. Inoltre, la scocca resistente a urti e cadute protegge i dati anche in viaggio. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 56.49
    },
    {
        id: 48,
        name: "Monitor Stratos Air Bianco Artico",
        descrizione: "Il Monitor Stratos Air Bianco Artico offre una qualità d'immagine che fa la differenza tanto nel lavoro quanto nel gioco. Il supporto ergonomico regolabile in altezza, inclinazione e rotazione si adatta a ogni postura, mentre il pannello IPS da 34 pollici con risoluzione QHD restituisce dettagli nitidissimi. Inoltre, il supporto HDR esalta contrasti e luminosità nei contenuti compatibili. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 232.99
    },
    {
        id: 49,
        name: "Supporto Laptop Glaciale Air 7",
        descrizione: "Il Supporto Laptop Glaciale Air 7 unisce eleganza minimalista e solidità a tutta prova. La base stabile non oscilla nemmeno durante la digitazione più intensa, mentre il design aperto favorisce la circolazione dell'aria e riduce le temperature. Inoltre, l'altezza e l'inclinazione sono regolabili su più livelli. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Ideale sia per l'ufficio sia per il setup di casa. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 29.99
    },
    {
        id: 50,
        name: "Tappetino Fulmine Prime 3",
        descrizione: "Il Tappetino Fulmine Prime 3 è il dettaglio che fa la differenza tra un buon setup e uno eccellente. La superficie in microtessuto è ottimizzata per sensori ottici e laser, mentre lo spessore di 4 mm offre il giusto sostegno al polso. Inoltre, il formato esteso da 90x40 cm ospita comodamente mouse e tastiera. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 40.9
    },
    {
        id: 51,
        name: "Casse Meridiano Max 6",
        descrizione: "Le Casse Meridiano Max 6 riempiono la stanza con un suono potente e sorprendentemente definito. Il telecomando incluso consente di gestire il volume dal divano, mentre la potenza complessiva di 60 W assicura un volume pieno senza distorsioni. Inoltre, l'illuminazione RGB sincronizzata con la musica crea atmosfera. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 240.99
    },
    {
        id: 52,
        name: "SSD Esterno Aquila Evo 5",
        descrizione: "L'SSD Esterno Aquila Evo 5 mette al sicuro i tuoi file e li porta ovunque alla massima velocità. La scocca resistente a urti e cadute protegge i dati anche in viaggio, mentre il software di backup automatico incluso rende semplice proteggere i file. Inoltre, la capacità di 2 TB offre spazio per migliaia di foto, video e progetti. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 131.9
    },
    {
        id: 53,
        name: "Webcam Nimbus Elite 6",
        descrizione: "La Webcam Nimbus Elite 6 trasforma lo smart working con immagini nitide e un audio limpido. La registrazione a 60 fps rende fluidi anche streaming e tutorial, mentre l'autofocus rapido mantiene il volto sempre a fuoco anche quando ti muovi. Inoltre, il copriobiettivo integrato garantisce privacy totale quando non la usi. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 180.99
    },
    {
        id: 54,
        name: "Lampada Monitor Eco Lite 3",
        descrizione: "La Lampada Monitor Eco Lite 3 rende più piacevoli e meno faticose le sessioni di lavoro serali. L'alimentazione USB-C elimina la necessità di prese aggiuntive, mentre la temperatura colore è regolabile da 2700 K a 6500 K. Inoltre, si aggancia a monitor piatti e curvi senza viti né adesivi. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Ideale sia per l'ufficio sia per il setup di casa. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 31.99
    },
    {
        id: 55,
        name: "Cuffie Nimbus One 1",
        descrizione: "Le Cuffie Nimbus One 1 portano l'esperienza d'ascolto a un livello superiore, ovunque tu sia. La batteria assicura fino a 60 ore di ascolto, con ricarica rapida in pochi minuti, mentre la cancellazione attiva del rumore riduce il brusio di uffici, treni e aerei. Inoltre, i cuscinetti in memory foam rivestiti in tessuto traspirante non affaticano le orecchie. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 88.49
    },
    {
        id: 56,
        name: "Controller Atlas Studio 3",
        descrizione: "Il Controller Atlas Studio 3 unisce un'impugnatura comoda a una precisione chirurgica. Le palette posteriori rimappabili permettono comandi rapidissimi, mentre i grilletti con corsa regolabile si adattano a sparatutto e giochi di guida. Inoltre, la vibrazione a doppio motore restituisce ogni impatto e ogni esplosione. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 128.9
    },
    {
        id: 57,
        name: "Supporto Laptop Prisma Studio Titanio",
        descrizione: "Il Supporto Laptop Prisma Studio Titanio migliora la postura e il raffreddamento del tuo portatile. L'altezza e l'inclinazione sono regolabili su più livelli, mentre i gommini in silicone proteggono il portatile da graffi e scivolamenti. Inoltre, si ripiega in pochi secondi e sta comodamente in uno zaino. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 66.99
    },
    {
        id: 58,
        name: "Hub USB Nimbus Pro 7",
        descrizione: "L'Hub USB Nimbus Pro 7 è la soluzione definitiva alla carenza di porte dei laptop moderni. Offre 5 porte, tra cui USB-A, USB-C, HDMI e lettore di schede SD, mentre la porta Ethernet gigabit assicura una connessione cablata stabile. Inoltre, la scocca in alluminio dissipa il calore anche sotto carico. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 78.9
    },
    {
        id: 59,
        name: "Supporto Laptop Mistral Plus Grafite",
        descrizione: "Il Supporto Laptop Mistral Plus Grafite porta lo schermo del portatile all'altezza degli occhi, salvando schiena e collo. I gommini in silicone proteggono il portatile da graffi e scivolamenti, mentre la base stabile non oscilla nemmeno durante la digitazione più intensa. Inoltre, il design aperto favorisce la circolazione dell'aria e riduce le temperature. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 53.9
    },
    {
        id: 60,
        name: "Microfono Phantom Studio Lavanda",
        descrizione: "Il Microfono Phantom Studio Lavanda rende ogni parola limpida, calda e piena di carattere. Il supporto antivibrazione e il filtro anti-pop sono inclusi nella confezione, mentre il controllo del guadagno integrato permette regolazioni rapide al volo. Inoltre, la capsula a condensatore cattura la voce con dettaglio e naturalezza. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 172.99
    },
    {
        id: 61,
        name: "Casse Polaris Prime Bianco Artico",
        descrizione: "Le Casse Polaris Prime Bianco Artico uniscono un design raffinato a una resa sonora di alto livello. I woofer in fibra di carta garantiscono bassi caldi e ben controllati, mentre i controlli di bassi e acuti permettono di adattare il suono all'ambiente. Inoltre, gli ingressi Bluetooth, ottico e AUX permettono di collegare qualsiasi sorgente. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 207.9
    },
    {
        id: 62,
        name: "Hub USB Solaris Max 7",
        descrizione: "L'Hub USB Solaris Max 7 trasforma qualsiasi portatile in una vera postazione desktop. La porta Ethernet gigabit assicura una connessione cablata stabile, mentre offre 11 porte, tra cui USB-A, USB-C, HDMI e lettore di schede SD. Inoltre, il trasferimento dati a 10 Gbps rende rapidissime le copie di file. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 107.99
    },
    {
        id: 63,
        name: "Supporto Laptop Grifone Elite Sabbia",
        descrizione: "Il Supporto Laptop Grifone Elite Sabbia unisce eleganza minimalista e solidità a tutta prova. Si ripiega in pochi secondi e sta comodamente in uno zaino, mentre l'altezza e l'inclinazione sono regolabili su più livelli. Inoltre, la base stabile non oscilla nemmeno durante la digitazione più intensa. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 81.9
    },
    {
        id: 64,
        name: "Casse Saetta Core 8",
        descrizione: "Le Casse Saetta Core 8 uniscono un design raffinato a una resa sonora di alto livello. Il telecomando incluso consente di gestire il volume dal divano, mentre i tweeter in seta restituiscono alti morbidi e mai affaticanti. Inoltre, le casse in legno MDF riducono le risonanze indesiderate. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 107.99
    },
    {
        id: 65,
        name: "Lampada Monitor Levante Core 9",
        descrizione: "La Lampada Monitor Levante Core 9 illumina la scrivania in modo uniforme senza creare riflessi sullo schermo. Si aggancia a monitor piatti e curvi senza viti né adesivi, mentre il controller wireless a rotella permette regolazioni immediate. Inoltre, il fascio luminoso asimmetrico illumina la scrivania senza abbagliare. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 52.99
    },
    {
        id: 66,
        name: "Webcam Polaris Studio Blu Oceano",
        descrizione: "La Webcam Polaris Studio Blu Oceano ti fa apparire al meglio in ogni videochiamata, riunione o diretta. La correzione automatica della luce compensa ambienti troppo bui o controluce, mentre il campo visivo di 78° inquadra comodamente anche più persone. Inoltre, la clip universale si fissa saldamente a monitor, portatili e treppiedi. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 139.99
    },
    {
        id: 67,
        name: "Webcam Iride Elite 5",
        descrizione: "La Webcam Iride Elite 5 trasforma lo smart working con immagini nitide e un audio limpido. La clip universale si fissa saldamente a monitor, portatili e treppiedi, mentre il campo visivo di 90° inquadra comodamente anche più persone. Inoltre, la correzione automatica della luce compensa ambienti troppo bui o controluce. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 165.49
    },
    {
        id: 68,
        name: "Casse Zenith Pro 1",
        descrizione: "Le Casse Zenith Pro 1 uniscono un design raffinato a una resa sonora di alto livello. I tweeter in seta restituiscono alti morbidi e mai affaticanti, mentre gli ingressi Bluetooth, ottico e AUX permettono di collegare qualsiasi sorgente. Inoltre, i controlli di bassi e acuti permettono di adattare il suono all'ambiente. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 167.99
    },
    {
        id: 69,
        name: "Casse Vortex Ultra 8",
        descrizione: "Le Casse Vortex Ultra 8 sono la scelta ideale per musica, film e videogiochi. Gli ingressi Bluetooth, ottico e AUX permettono di collegare qualsiasi sorgente, mentre l'illuminazione RGB sincronizzata con la musica crea atmosfera. Inoltre, il telecomando incluso consente di gestire il volume dal divano. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 243.49
    },
    {
        id: 70,
        name: "Monitor Atlas Studio 9",
        descrizione: "Il Monitor Atlas Studio 9 ridefinisce la postazione con cornici sottilissime e un pannello di alto livello. La frequenza di aggiornamento di 144 Hz rende ogni movimento incredibilmente fluido, mentre il supporto HDR esalta contrasti e luminosità nei contenuti compatibili. Inoltre, la tecnologia flicker-free e il filtro per la luce blu riducono l'affaticamento visivo. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 613.49
    },
    {
        id: 71,
        name: "Controller Zefiro Ultra Bianco Artico",
        descrizione: "Il Controller Zefiro Ultra Bianco Artico mette nelle tue mani il controllo totale di ogni partita. L'impugnatura gommata antiscivolo resta salda anche nelle partite più intense, mentre è compatibile con PC, smartphone e le principali console. Inoltre, la vibrazione a doppio motore restituisce ogni impatto e ogni esplosione. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 171.9
    },
    {
        id: 72,
        name: "Cuffie Shadow Max 5",
        descrizione: "Le Cuffie Shadow Max 5 uniscono comfort da indossare tutto il giorno e una resa acustica sorprendente. I driver dinamici da 40 mm offrono bassi profondi e alti cristallini, mentre la modalità a bassa latenza sincronizza perfettamente audio e video nei giochi. Inoltre, il microfono con riduzione del rumore rende chiarissime chiamate e videoconferenze. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 321.9
    },
    {
        id: 73,
        name: "Webcam Zenith Evo 8",
        descrizione: "La Webcam Zenith Evo 8 è la soluzione semplice e immediata per chi lavora o studia da remoto. La clip universale si fissa saldamente a monitor, portatili e treppiedi, mentre il copriobiettivo integrato garantisce privacy totale quando non la usi. Inoltre, i due microfoni stereo con riduzione del rumore catturano la voce in modo chiaro. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 97.9
    },
    {
        id: 74,
        name: "Casse Iride Prime 7",
        descrizione: "Le Casse Iride Prime 7 uniscono un design raffinato a una resa sonora di alto livello. La potenza complessiva di 20 W assicura un volume pieno senza distorsioni, mentre l'illuminazione RGB sincronizzata con la musica crea atmosfera. Inoltre, il telecomando incluso consente di gestire il volume dal divano. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 231.49
    },
    {
        id: 75,
        name: "Casse Sirio Pro 7",
        descrizione: "Le Casse Sirio Pro 7 riempiono la stanza con un suono potente e sorprendentemente definito. I controlli di bassi e acuti permettono di adattare il suono all'ambiente, mentre gli ingressi Bluetooth, ottico e AUX permettono di collegare qualsiasi sorgente. Inoltre, i tweeter in seta restituiscono alti morbidi e mai affaticanti. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 201.49
    },
    {
        id: 76,
        name: "Webcam Cobra Elite Sabbia",
        descrizione: "La Webcam Cobra Elite Sabbia ti fa apparire al meglio in ogni videochiamata, riunione o diretta. I due microfoni stereo con riduzione del rumore catturano la voce in modo chiaro, mentre l'autofocus rapido mantiene il volto sempre a fuoco anche quando ti muovi. Inoltre, il copriobiettivo integrato garantisce privacy totale quando non la usi. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 197.49
    },
    {
        id: 77,
        name: "Tastiera Scoglio Plus 7",
        descrizione: "La Tastiera Scoglio Plus 7 è pensata per chi scrive molto e non vuole scendere a compromessi sul comfort. Il layout italiano completo include tastierino numerico e tasti multimediali dedicati, mentre la connessione tri-mode (Bluetooth, 2,4 GHz e cavo) si adatta a qualsiasi postazione. Inoltre, i keycap in PBT double-shot resistono all'usura e non diventano lucidi con il tempo. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 71.9
    },
    {
        id: 78,
        name: "Tappetino Zefiro Core Verde Salvia",
        descrizione: "Il Tappetino Zefiro Core Verde Salvia è il dettaglio che fa la differenza tra un buon setup e uno eccellente. La superficie in microtessuto è ottimizzata per sensori ottici e laser, mentre lo spessore di 5 mm offre il giusto sostegno al polso. Inoltre, il trattamento idrorepellente protegge da schizzi e macchie. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 34.49
    },
    {
        id: 79,
        name: "Tastiera Solaris Max 4",
        descrizione: "La Tastiera Solaris Max 4 combina un design essenziale a una risposta dei tasti sorprendentemente reattiva. I keycap in PBT double-shot resistono all'usura e non diventano lucidi con il tempo, mentre il poggiapolsi magnetico in similpelle sostiene i polsi nelle sessioni più lunghe. Inoltre, la retroilluminazione RGB per singolo tasto offre oltre 30 effetti configurabili. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 207.99
    },
    {
        id: 80,
        name: "Tappetino Dolomia Max 9",
        descrizione: "Il Tappetino Dolomia Max 9 dà ordine e stile a tutta la postazione di lavoro. Si lava facilmente e torna come nuovo in pochi minuti, mentre la base in gomma naturale antiscivolo lo mantiene fermo in ogni situazione. Inoltre, lo spessore di 3 mm offre il giusto sostegno al polso. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 55.99
    },
    {
        id: 81,
        name: "Tastiera Onice One 1",
        descrizione: "La Tastiera Onice One 1 porta sulla scrivania la qualità costruttiva delle tastiere da collezione. I keycap in PBT double-shot resistono all'usura e non diventano lucidi con il tempo, mentre la retroilluminazione RGB per singolo tasto offre oltre 30 effetti configurabili. Inoltre, il layout italiano completo include tastierino numerico e tasti multimediali dedicati. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 59.9
    },
    {
        id: 82,
        name: "Lampada Monitor Astra Studio Verde Salvia",
        descrizione: "La Lampada Monitor Astra Studio Verde Salvia illumina la scrivania in modo uniforme senza creare riflessi sullo schermo. Si aggancia a monitor piatti e curvi senza viti né adesivi, mentre il controller wireless a rotella permette regolazioni immediate. Inoltre, la temperatura colore è regolabile da 2700 K a 6500 K. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 90.9
    },
    {
        id: 83,
        name: "Webcam Polaris Ultra Grafite",
        descrizione: "La Webcam Polaris Ultra Grafite è la soluzione semplice e immediata per chi lavora o studia da remoto. I due microfoni stereo con riduzione del rumore catturano la voce in modo chiaro, mentre il campo visivo di 78° inquadra comodamente anche più persone. Inoltre, funziona in modalità plug-and-play senza driver con tutte le principali piattaforme di videochiamata. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 158.99
    },
    {
        id: 84,
        name: "Webcam Vetta Max Grafite",
        descrizione: "La Webcam Vetta Max Grafite ti fa apparire al meglio in ogni videochiamata, riunione o diretta. Funziona in modalità plug-and-play senza driver con tutte le principali piattaforme di videochiamata, mentre la correzione automatica della luce compensa ambienti troppo bui o controluce. Inoltre, il campo visivo di 78° inquadra comodamente anche più persone. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 183.9
    },
    {
        id: 85,
        name: "Controller Falco Core Blu Oceano",
        descrizione: "Il Controller Falco Core Blu Oceano mette nelle tue mani il controllo totale di ogni partita. È compatibile con PC, smartphone e le principali console, mentre l'impugnatura gommata antiscivolo resta salda anche nelle partite più intense. Inoltre, le palette posteriori rimappabili permettono comandi rapidissimi. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 108.9
    },
    {
        id: 86,
        name: "Controller Astra Core Lavanda",
        descrizione: "Il Controller Astra Core Lavanda unisce un'impugnatura comoda a una precisione chirurgica. È compatibile con PC, smartphone e le principali console, mentre i grilletti con corsa regolabile si adattano a sparatutto e giochi di guida. Inoltre, le palette posteriori rimappabili permettono comandi rapidissimi. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 95.49
    },
    {
        id: 87,
        name: "Hub USB Shadow Lite Blu Oceano",
        descrizione: "L'Hub USB Shadow Lite Blu Oceano trasforma qualsiasi portatile in una vera postazione desktop. Offre 7 porte, tra cui USB-A, USB-C, HDMI e lettore di schede SD, mentre è plug-and-play e compatibile con Windows, macOS e Linux. Inoltre, il trasferimento dati a 10 Gbps rende rapidissime le copie di file. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Ideale sia per l'ufficio sia per il setup di casa. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 29.9
    },
    {
        id: 88,
        name: "Stampante Plasma Pro 5",
        descrizione: "La Stampante Plasma Pro 5 è la multifunzione pensata per chi vuole semplicità senza rinunciare alla qualità. La connessione Wi-Fi e l'app dedicata permettono di stampare direttamente dallo smartphone, mentre il display touch a colori rende intuitiva ogni operazione. Inoltre, il vassoio da 100 fogli limita le interruzioni per il caricamento della carta. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 294.9
    },
    {
        id: 89,
        name: "Supporto Laptop Onda Lite 6",
        descrizione: "Il Supporto Laptop Onda Lite 6 unisce eleganza minimalista e solidità a tutta prova. L'altezza e l'inclinazione sono regolabili su più livelli, mentre il design aperto favorisce la circolazione dell'aria e riduce le temperature. Inoltre, la struttura in alluminio sostiene portatili fino a 27 pollici. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 36.99
    },
    {
        id: 90,
        name: "Cuffie Plasma Air 1",
        descrizione: "Le Cuffie Plasma Air 1 sono pensate per isolarti dal mondo e lasciarti solo con la tua musica. La connessione Bluetooth 5.3 multipoint le collega a due dispositivi contemporaneamente, mentre i cuscinetti in memory foam rivestiti in tessuto traspirante non affaticano le orecchie. Inoltre, la cancellazione attiva del rumore riduce il brusio di uffici, treni e aerei. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Ideale sia per l'ufficio sia per il setup di casa. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 77.49
    },
    {
        id: 91,
        name: "Microfono Maestrale Studio Sabbia",
        descrizione: "Il Microfono Maestrale Studio Sabbia è pensato per podcaster, streamer e musicisti che cercano un suono pulito. La registrazione a 24 bit/48 kHz garantisce una qualità audio professionale, mentre il pattern cardioide isola la voce dai rumori ambientali. Inoltre, l'uscita cuffie a latenza zero consente di monitorare la propria voce in tempo reale. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 158.49
    },
    {
        id: 92,
        name: "Cuffie Helix Plus 1",
        descrizione: "Le Cuffie Helix Plus 1 portano l'esperienza d'ascolto a un livello superiore, ovunque tu sia. La modalità trasparenza permette di sentire l'ambiente circostante senza toglierle, mentre la cancellazione attiva del rumore riduce il brusio di uffici, treni e aerei. Inoltre, il microfono con riduzione del rumore rende chiarissime chiamate e videoconferenze. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 172.99
    },
    {
        id: 93,
        name: "Casse Cristallo Pro Grafite",
        descrizione: "Le Casse Cristallo Pro Grafite uniscono un design raffinato a una resa sonora di alto livello. I controlli di bassi e acuti permettono di adattare il suono all'ambiente, mentre i woofer in fibra di carta garantiscono bassi caldi e ben controllati. Inoltre, le casse in legno MDF riducono le risonanze indesiderate. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 180.99
    },
    {
        id: 94,
        name: "Cuffie Onda Evo Lavanda",
        descrizione: "Le Cuffie Onda Evo Lavanda ti avvolgono in un suono pieno, dettagliato e ricco di sfumature. La connessione Bluetooth 5.3 multipoint le collega a due dispositivi contemporaneamente, mentre la struttura pieghevole e la custodia rigida le rendono perfette in viaggio. Inoltre, la modalità a bassa latenza sincronizza perfettamente audio e video nei giochi. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 122.99
    },
    {
        id: 95,
        name: "Router Plasma Pro 6",
        descrizione: "Il Router Plasma Pro 6 è pensato per famiglie connesse, gamer e professionisti in smart working. La priorità QoS dà la precedenza a gaming e videochiamate, mentre il parental control integrato permette di gestire orari e contenuti per ogni membro della famiglia. Inoltre, la crittografia WPA3 e il firewall integrato proteggono la rete dalle intrusioni. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 229.49
    },
    {
        id: 96,
        name: "Stampante Nova Evo 6",
        descrizione: "La Stampante Nova Evo 6 semplifica la gestione dei documenti di tutta la famiglia o del piccolo ufficio. Il sistema a serbatoi ricaricabili abbatte drasticamente il costo per pagina, mentre il display touch a colori rende intuitiva ogni operazione. Inoltre, la modalità silenziosa consente di stampare anche di notte senza disturbare. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 194.9
    },
    {
        id: 97,
        name: "SSD Esterno Saetta Max Blu Oceano",
        descrizione: "L'SSD Esterno Saetta Max Blu Oceano è pensato per fotografi, videomaker e professionisti in movimento. La crittografia hardware AES a 256 bit protegge i dati sensibili, mentre la scocca resistente a urti e cadute protegge i dati anche in viaggio. Inoltre, la capacità di 4 TB offre spazio per migliaia di foto, video e progetti. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 312.49
    },
    {
        id: 98,
        name: "Casse Brezza Ultra Grigio Siderale",
        descrizione: "Le Casse Brezza Ultra Grigio Siderale riempiono la stanza con un suono potente e sorprendentemente definito. Gli ingressi Bluetooth, ottico e AUX permettono di collegare qualsiasi sorgente, mentre il telecomando incluso consente di gestire il volume dal divano. Inoltre, le casse in legno MDF riducono le risonanze indesiderate. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 283.49
    },
    {
        id: 99,
        name: "Stampante Nimbus Pro Bianco Artico",
        descrizione: "La Stampante Nimbus Pro Bianco Artico è la multifunzione pensata per chi vuole semplicità senza rinunciare alla qualità. La stampa fronte/retro automatica riduce il consumo di carta, mentre stampa fino a 15 pagine al minuto con testi nitidi e neri profondi. Inoltre, il sistema a serbatoi ricaricabili abbatte drasticamente il costo per pagina. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 336.99
    },
    {
        id: 100,
        name: "Hub USB Levante Elite 6",
        descrizione: "L'Hub USB Levante Elite 6 è la soluzione definitiva alla carenza di porte dei laptop moderni. La porta Ethernet gigabit assicura una connessione cablata stabile, mentre offre 5 porte, tra cui USB-A, USB-C, HDMI e lettore di schede SD. Inoltre, è plug-and-play e compatibile con Windows, macOS e Linux. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 113.99
    },
    {
        id: 101,
        name: "Webcam Drago Evo Grigio Siderale",
        descrizione: "La Webcam Drago Evo Grigio Siderale ti fa apparire al meglio in ogni videochiamata, riunione o diretta. Funziona in modalità plug-and-play senza driver con tutte le principali piattaforme di videochiamata, mentre il campo visivo di 95° inquadra comodamente anche più persone. Inoltre, il sensore in risoluzione 4K cattura ogni dettaglio con colori naturali. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 92.99
    },
    {
        id: 102,
        name: "Cuffie Ferro Air Titanio",
        descrizione: "Le Cuffie Ferro Air Titanio sono pensate per isolarti dal mondo e lasciarti solo con la tua musica. La connessione Bluetooth 5.3 multipoint le collega a due dispositivi contemporaneamente, mentre la modalità a bassa latenza sincronizza perfettamente audio e video nei giochi. Inoltre, i cuscinetti in memory foam rivestiti in tessuto traspirante non affaticano le orecchie. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 34.9
    },
    {
        id: 103,
        name: "Router Solaris Air 2",
        descrizione: "Il Router Solaris Air 2 elimina le zone morte e i cali di segnale una volta per tutte. La crittografia WPA3 e il firewall integrato proteggono la rete dalle intrusioni, mentre la porta WAN da 2,5 Gbps sfrutta al massimo le connessioni in fibra ottica. Inoltre, il parental control integrato permette di gestire orari e contenuti per ogni membro della famiglia. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 71.99
    },
    {
        id: 104,
        name: "Router Nebula Core 3",
        descrizione: "Il Router Nebula Core 3 è il cuore di una rete domestica moderna, sicura e senza rallentamenti. La tecnologia mesh consente di estendere la copertura aggiungendo altri nodi, mentre la priorità QoS dà la precedenza a gaming e videochiamate. Inoltre, l'app di configurazione guida l'installazione in pochi minuti. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 181.49
    },
    {
        id: 105,
        name: "Router Solaris Pro 3",
        descrizione: "Il Router Solaris Pro 3 è il cuore di una rete domestica moderna, sicura e senza rallentamenti. Il parental control integrato permette di gestire orari e contenuti per ogni membro della famiglia, mentre lo standard Wi-Fi 6E raggiunge velocità combinate fino a 5,4 Gbps. Inoltre, gestisce senza fatica oltre 64 dispositivi connessi contemporaneamente. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 295.9
    },
    {
        id: 106,
        name: "Monitor Vertex One Grigio Siderale",
        descrizione: "Il Monitor Vertex One Grigio Siderale offre una qualità d'immagine che fa la differenza tanto nel lavoro quanto nel gioco. La tecnologia flicker-free e il filtro per la luce blu riducono l'affaticamento visivo, mentre il supporto ergonomico regolabile in altezza, inclinazione e rotazione si adatta a ogni postura. Inoltre, la frequenza di aggiornamento di 165 Hz rende ogni movimento incredibilmente fluido. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 310.9
    },
    {
        id: 107,
        name: "Monitor Prisma Ultra Rosso Corsa",
        descrizione: "Il Monitor Prisma Ultra Rosso Corsa ridefinisce la postazione con cornici sottilissime e un pannello di alto livello. La porta USB-C con alimentazione fino a 65 W collega e ricarica il portatile con un solo cavo, mentre il supporto ergonomico regolabile in altezza, inclinazione e rotazione si adatta a ogni postura. Inoltre, il pannello IPS da 24 pollici con risoluzione QHD restituisce dettagli nitidissimi. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 798.99
    },
    {
        id: 108,
        name: "Controller Eco Core Lavanda",
        descrizione: "Il Controller Eco Core Lavanda unisce un'impugnatura comoda a una precisione chirurgica. Le palette posteriori rimappabili permettono comandi rapidissimi, mentre è compatibile con PC, smartphone e le principali console. Inoltre, la batteria garantisce fino a 70 ore di gioco senza interruzioni. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 96.99
    },
    {
        id: 109,
        name: "Controller Brezza Evo Sabbia",
        descrizione: "Il Controller Brezza Evo Sabbia unisce un'impugnatura comoda a una precisione chirurgica. È compatibile con PC, smartphone e le principali console, mentre l'impugnatura gommata antiscivolo resta salda anche nelle partite più intense. Inoltre, la batteria garantisce fino a 80 ore di gioco senza interruzioni. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 107.99
    },
    {
        id: 110,
        name: "Stampante Ossidiana Evo Verde Salvia",
        descrizione: "La Stampante Ossidiana Evo Verde Salvia è la multifunzione pensata per chi vuole semplicità senza rinunciare alla qualità. Il sistema a serbatoi ricaricabili abbatte drasticamente il costo per pagina, mentre la modalità silenziosa consente di stampare anche di notte senza disturbare. Inoltre, la stampa fronte/retro automatica riduce il consumo di carta. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 237.9
    },
    {
        id: 111,
        name: "Tappetino Plasma Elite 6",
        descrizione: "Il Tappetino Plasma Elite 6 protegge la scrivania e migliora lo scorrimento del mouse. I bordi cuciti impediscono lo sfilacciamento nel tempo, mentre si lava facilmente e torna come nuovo in pochi minuti. Inoltre, la base in gomma naturale antiscivolo lo mantiene fermo in ogni situazione. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 55.99
    },
    {
        id: 112,
        name: "Hub USB Polaris Ultra 6",
        descrizione: "L'Hub USB Polaris Ultra 6 mette ordine tra cavi e periferiche in un attimo. La ricarica passthrough fino a 100 W alimenta il portatile mentre lavori, mentre offre 5 porte, tra cui USB-A, USB-C, HDMI e lettore di schede SD. Inoltre, la scocca in alluminio dissipa il calore anche sotto carico. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 107.49
    },
    {
        id: 113,
        name: "Supporto Laptop Polaris Ultra Grafite",
        descrizione: "Il Supporto Laptop Polaris Ultra Grafite unisce eleganza minimalista e solidità a tutta prova. I gommini in silicone proteggono il portatile da graffi e scivolamenti, mentre l'altezza e l'inclinazione sono regolabili su più livelli. Inoltre, il design aperto favorisce la circolazione dell'aria e riduce le temperature. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 78.49
    },
    {
        id: 114,
        name: "Stampante Ferro Prime Rosso Corsa",
        descrizione: "La Stampante Ferro Prime Rosso Corsa semplifica la gestione dei documenti di tutta la famiglia o del piccolo ufficio. Il sistema a serbatoi ricaricabili abbatte drasticamente il costo per pagina, mentre la connessione Wi-Fi e l'app dedicata permettono di stampare direttamente dallo smartphone. Inoltre, lo scanner piano ad alta risoluzione digitalizza documenti e fotografie in pochi secondi. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 288.99
    },
    {
        id: 115,
        name: "Lampada Monitor Ossidiana One 4",
        descrizione: "La Lampada Monitor Ossidiana One 4 è il tocco di luce che mancava alla tua postazione. La retroilluminazione RGB posteriore crea un'atmosfera rilassante, mentre la luminosità si adatta automaticamente alla luce dell'ambiente. Inoltre, il controller wireless a rotella permette regolazioni immediate. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 37.99
    },
    {
        id: 116,
        name: "Lampada Monitor Opale Core Sabbia",
        descrizione: "La Lampada Monitor Opale Core Sabbia rende più piacevoli e meno faticose le sessioni di lavoro serali. Il controller wireless a rotella permette regolazioni immediate, mentre il fascio luminoso asimmetrico illumina la scrivania senza abbagliare. Inoltre, la temperatura colore è regolabile da 2700 K a 6500 K. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 57.99
    },
    {
        id: 117,
        name: "Casse Nova One 5",
        descrizione: "Le Casse Nova One 5 riempiono la stanza con un suono potente e sorprendentemente definito. L'illuminazione RGB sincronizzata con la musica crea atmosfera, mentre i woofer in fibra di carta garantiscono bassi caldi e ben controllati. Inoltre, gli ingressi Bluetooth, ottico e AUX permettono di collegare qualsiasi sorgente. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 56.99
    },
    {
        id: 118,
        name: "Lampada Monitor Phantom Air Sabbia",
        descrizione: "La Lampada Monitor Phantom Air Sabbia rende più piacevoli e meno faticose le sessioni di lavoro serali. La temperatura colore è regolabile da 2700 K a 6500 K, mentre il controller wireless a rotella permette regolazioni immediate. Inoltre, il fascio luminoso asimmetrico illumina la scrivania senza abbagliare. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 35.99
    },
    {
        id: 119,
        name: "Monitor Meridiano Air 5",
        descrizione: "Il Monitor Meridiano Air 5 offre una qualità d'immagine che fa la differenza tanto nel lavoro quanto nel gioco. Il pannello IPS da 32 pollici con risoluzione Full HD restituisce dettagli nitidissimi, mentre la frequenza di aggiornamento di 144 Hz rende ogni movimento incredibilmente fluido. Inoltre, la tecnologia flicker-free e il filtro per la luce blu riducono l'affaticamento visivo. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 192.99
    },
    {
        id: 120,
        name: "Mouse Zefiro Studio Blu Oceano",
        descrizione: "Il Mouse Zefiro Studio Blu Oceano è il compagno ideale per lunghe sessioni di lavoro e di gioco. La rotella in metallo con scorrimento a frizione variabile rende rapidissima la navigazione di documenti lunghi, mentre i pulsanti laterali programmabili permettono di richiamare scorciatoie e macro con un solo tocco. Inoltre, gli switch ottici sono certificati per oltre 70 milioni di clic. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 112.99
    },
    {
        id: 121,
        name: "Stampante Fulmine Air Grafite",
        descrizione: "La Stampante Fulmine Air Grafite semplifica la gestione dei documenti di tutta la famiglia o del piccolo ufficio. La stampa fronte/retro automatica riduce il consumo di carta, mentre le stampe fotografiche a colori hanno toni vividi e sfumature morbide. Inoltre, stampa fino a 33 pagine al minuto con testi nitidi e neri profondi. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 139.49
    },
    {
        id: 122,
        name: "Monitor Lince Max 7",
        descrizione: "Il Monitor Lince Max 7 è progettato per chi pretende colori fedeli e una fluidità impeccabile. Le cornici ultrasottili su tre lati lo rendono perfetto per configurazioni multi-monitor, mentre la tecnologia flicker-free e il filtro per la luce blu riducono l'affaticamento visivo. Inoltre, il supporto HDR esalta contrasti e luminosità nei contenuti compatibili. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 878.9
    },
    {
        id: 123,
        name: "Lampada Monitor Falco Max Blu Oceano",
        descrizione: "La Lampada Monitor Falco Max Blu Oceano rende più piacevoli e meno faticose le sessioni di lavoro serali. La temperatura colore è regolabile da 2700 K a 6500 K, mentre si aggancia a monitor piatti e curvi senza viti né adesivi. Inoltre, il fascio luminoso asimmetrico illumina la scrivania senza abbagliare. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 115.9
    },
    {
        id: 124,
        name: "Controller Saetta Air 9",
        descrizione: "Il Controller Saetta Air 9 mette nelle tue mani il controllo totale di ogni partita. La batteria garantisce fino a 70 ore di gioco senza interruzioni, mentre è compatibile con PC, smartphone e le principali console. Inoltre, le palette posteriori rimappabili permettono comandi rapidissimi. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Ideale sia per l'ufficio sia per il setup di casa. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 35.9
    },
    {
        id: 125,
        name: "Mouse Drago Pro Bianco Artico",
        descrizione: "Il Mouse Drago Pro Bianco Artico unisce una forma ergonomica studiata a lungo a un sensore di nuova generazione. I piedini in PTFE puro assicurano uno scorrimento silenzioso e privo di attrito, mentre la modalità multi-dispositivo consente di passare da PC a tablet con un pulsante. Inoltre, il peso ridotto a soli 49 grammi riduce l'affaticamento della mano. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 92.99
    },
    {
        id: 126,
        name: "Microfono Nebula One Rosso Corsa",
        descrizione: "Il Microfono Nebula One Rosso Corsa rende ogni parola limpida, calda e piena di carattere. La capsula a condensatore cattura la voce con dettaglio e naturalezza, mentre si collega in USB-C senza bisogno di interfacce audio esterne. Inoltre, la registrazione a 24 bit/96 kHz garantisce una qualità audio professionale. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 48.99
    },
    {
        id: 127,
        name: "Monitor Atlas Lite Grafite",
        descrizione: "Il Monitor Atlas Lite Grafite ridefinisce la postazione con cornici sottilissime e un pannello di alto livello. Il supporto HDR esalta contrasti e luminosità nei contenuti compatibili, mentre la copertura del 100% dello spazio colore sRGB lo rende adatto a fotoritocco e grafica. Inoltre, il supporto ergonomico regolabile in altezza, inclinazione e rotazione si adatta a ogni postura. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Ideale sia per l'ufficio sia per il setup di casa. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 195.99
    },
    {
        id: 128,
        name: "Monitor Eco Ultra Titanio",
        descrizione: "Il Monitor Eco Ultra Titanio è progettato per chi pretende colori fedeli e una fluidità impeccabile. La tecnologia flicker-free e il filtro per la luce blu riducono l'affaticamento visivo, mentre la frequenza di aggiornamento di 144 Hz rende ogni movimento incredibilmente fluido. Inoltre, le cornici ultrasottili su tre lati lo rendono perfetto per configurazioni multi-monitor. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 723.49
    },
    {
        id: 129,
        name: "Microfono Neon Ultra Nero Notte",
        descrizione: "Il Microfono Neon Ultra Nero Notte è pensato per podcaster, streamer e musicisti che cercano un suono pulito. L'uscita cuffie a latenza zero consente di monitorare la propria voce in tempo reale, mentre si collega in USB-C senza bisogno di interfacce audio esterne. Inoltre, la capsula a condensatore cattura la voce con dettaglio e naturalezza. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 204.99
    },
    {
        id: 130,
        name: "Casse Orione Core 4",
        descrizione: "Le Casse Orione Core 4 trasformano la scrivania in un piccolo studio d'ascolto. I woofer in fibra di carta garantiscono bassi caldi e ben controllati, mentre gli ingressi Bluetooth, ottico e AUX permettono di collegare qualsiasi sorgente. Inoltre, la potenza complessiva di 100 W assicura un volume pieno senza distorsioni. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 107.99
    },
    {
        id: 131,
        name: "Supporto Laptop Kraken Prime 5",
        descrizione: "Il Supporto Laptop Kraken Prime 5 porta lo schermo del portatile all'altezza degli occhi, salvando schiena e collo. I gommini in silicone proteggono il portatile da graffi e scivolamenti, mentre il design aperto favorisce la circolazione dell'aria e riduce le temperature. Inoltre, la base stabile non oscilla nemmeno durante la digitazione più intensa. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 62.49
    },
    {
        id: 132,
        name: "Lampada Monitor Solaris Core 5",
        descrizione: "La Lampada Monitor Solaris Core 5 rende più piacevoli e meno faticose le sessioni di lavoro serali. La luminosità si adatta automaticamente alla luce dell'ambiente, mentre l'alimentazione USB-C elimina la necessità di prese aggiuntive. Inoltre, si aggancia a monitor piatti e curvi senza viti né adesivi. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 66.99
    },
    {
        id: 133,
        name: "Webcam Zenith Ultra 9",
        descrizione: "La Webcam Zenith Ultra 9 porta una qualità d'immagine professionale sulla tua scrivania. Funziona in modalità plug-and-play senza driver con tutte le principali piattaforme di videochiamata, mentre l'autofocus rapido mantiene il volto sempre a fuoco anche quando ti muovi. Inoltre, il copriobiettivo integrato garantisce privacy totale quando non la usi. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 165.49
    },
    {
        id: 134,
        name: "Lampada Monitor Pantera Max 4",
        descrizione: "La Lampada Monitor Pantera Max 4 illumina la scrivania in modo uniforme senza creare riflessi sullo schermo. L'alimentazione USB-C elimina la necessità di prese aggiuntive, mentre la luminosità si adatta automaticamente alla luce dell'ambiente. Inoltre, la temperatura colore è regolabile da 2700 K a 6500 K. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 117.99
    },
    {
        id: 135,
        name: "Tastiera Altair Elite 8",
        descrizione: "La Tastiera Altair Elite 8 regala una sensazione di digitazione solida, precisa e appagante. Il poggiapolsi magnetico in similpelle sostiene i polsi nelle sessioni più lunghe, mentre la connessione tri-mode (Bluetooth, 2,4 GHz e cavo) si adatta a qualsiasi postazione. Inoltre, il layout italiano completo include tastierino numerico e tasti multimediali dedicati. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 182.99
    },
    {
        id: 136,
        name: "Lampada Monitor Neon Pro Sabbia",
        descrizione: "La Lampada Monitor Neon Pro Sabbia libera spazio sulla scrivania portando la luce proprio dove serve. La temperatura colore è regolabile da 2700 K a 6500 K, mentre si aggancia a monitor piatti e curvi senza viti né adesivi. Inoltre, la luminosità si adatta automaticamente alla luce dell'ambiente. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 72.49
    },
    {
        id: 137,
        name: "Hub USB Cobalto Studio 1",
        descrizione: "L'Hub USB Cobalto Studio 1 trasforma qualsiasi portatile in una vera postazione desktop. L'uscita HDMI supporta monitor esterni fino a 4K a 60 Hz, mentre offre 11 porte, tra cui USB-A, USB-C, HDMI e lettore di schede SD. Inoltre, la porta Ethernet gigabit assicura una connessione cablata stabile. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 78.49
    },
    {
        id: 138,
        name: "Controller Graffio Plus Nero Notte",
        descrizione: "Il Controller Graffio Plus Nero Notte mette nelle tue mani il controllo totale di ogni partita. I grilletti con corsa regolabile si adattano a sparatutto e giochi di guida, mentre le palette posteriori rimappabili permettono comandi rapidissimi. Inoltre, gli stick con sensori a effetto Hall eliminano il fastidioso drift nel tempo. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 75.99
    },
    {
        id: 139,
        name: "Tastiera Aquila Core 4",
        descrizione: "La Tastiera Aquila Core 4 combina un design essenziale a una risposta dei tasti sorprendentemente reattiva. Il poggiapolsi magnetico in similpelle sostiene i polsi nelle sessioni più lunghe, mentre il layout italiano completo include tastierino numerico e tasti multimediali dedicati. Inoltre, lo strato di smorzamento interno in silicone attenua il rumore di battitura. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 103.99
    },
    {
        id: 140,
        name: "Stampante Scoglio Air 7",
        descrizione: "La Stampante Scoglio Air 7 semplifica la gestione dei documenti di tutta la famiglia o del piccolo ufficio. Il sistema a serbatoi ricaricabili abbatte drasticamente il costo per pagina, mentre la modalità silenziosa consente di stampare anche di notte senza disturbare. Inoltre, stampa fino a 22 pagine al minuto con testi nitidi e neri profondi. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 112.49
    },
    {
        id: 141,
        name: "Lampada Monitor Vortex Air Titanio",
        descrizione: "La Lampada Monitor Vortex Air Titanio è il tocco di luce che mancava alla tua postazione. Il fascio luminoso asimmetrico illumina la scrivania senza abbagliare, mentre si aggancia a monitor piatti e curvi senza viti né adesivi. Inoltre, la luminosità si adatta automaticamente alla luce dell'ambiente. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 42.99
    },
    {
        id: 142,
        name: "Hub USB Vega Ultra Rosso Corsa",
        descrizione: "L'Hub USB Vega Ultra Rosso Corsa trasforma qualsiasi portatile in una vera postazione desktop. La porta Ethernet gigabit assicura una connessione cablata stabile, mentre la ricarica passthrough fino a 100 W alimenta il portatile mentre lavori. Inoltre, offre 5 porte, tra cui USB-A, USB-C, HDMI e lettore di schede SD. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 105.9
    },
    {
        id: 143,
        name: "SSD Esterno Ossidiana Plus 4",
        descrizione: "L'SSD Esterno Ossidiana Plus 4 è il modo più rapido per ampliare lo spazio di archiviazione. Il software di backup automatico incluso rende semplice proteggere i file, mentre la crittografia hardware AES a 256 bit protegge i dati sensibili. Inoltre, la capacità di 1 TB offre spazio per migliaia di foto, video e progetti. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 175.99
    },
    {
        id: 144,
        name: "Mouse Onda Plus 1",
        descrizione: "Il Mouse Onda Plus 1 nasce per chi vuole precisione assoluta a ogni movimento del polso. Gli switch ottici sono certificati per oltre 70 milioni di clic, mentre il peso ridotto a soli 58 grammi riduce l'affaticamento della mano. Inoltre, la batteria ricaricabile via USB-C offre fino a 30 ore di autonomia con una singola carica. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 78.9
    },
    {
        id: 145,
        name: "Router Titan Studio 1",
        descrizione: "Il Router Titan Studio 1 elimina le zone morte e i cali di segnale una volta per tutte. L'app di configurazione guida l'installazione in pochi minuti, mentre le antenne ad alto guadagno con beamforming indirizzano il segnale verso i dispositivi. Inoltre, la priorità QoS dà la precedenza a gaming e videochiamate. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 237.49
    },
    {
        id: 146,
        name: "Hub USB Sirio Studio 7",
        descrizione: "L'Hub USB Sirio Studio 7 è la soluzione definitiva alla carenza di porte dei laptop moderni. Offre 7 porte, tra cui USB-A, USB-C, HDMI e lettore di schede SD, mentre la ricarica passthrough fino a 100 W alimenta il portatile mentre lavori. Inoltre, la scocca in alluminio dissipa il calore anche sotto carico. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 82.99
    },
    {
        id: 147,
        name: "Mouse Iride Elite 9",
        descrizione: "Il Mouse Iride Elite 9 è il compagno ideale per lunghe sessioni di lavoro e di gioco. La rotella in metallo con scorrimento a frizione variabile rende rapidissima la navigazione di documenti lunghi, mentre i piedini in PTFE puro assicurano uno scorrimento silenzioso e privo di attrito. Inoltre, gli switch ottici sono certificati per oltre 80 milioni di clic. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 147.99
    },
    {
        id: 148,
        name: "Monitor Solaris One Nero Notte",
        descrizione: "Il Monitor Solaris One Nero Notte offre una qualità d'immagine che fa la differenza tanto nel lavoro quanto nel gioco. Il supporto HDR esalta contrasti e luminosità nei contenuti compatibili, mentre la porta USB-C con alimentazione fino a 65 W collega e ricarica il portatile con un solo cavo. Inoltre, il pannello IPS da 34 pollici con risoluzione QHD restituisce dettagli nitidissimi. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 307.99
    },
    {
        id: 149,
        name: "Webcam Cobalto Core Grafite",
        descrizione: "La Webcam Cobalto Core Grafite trasforma lo smart working con immagini nitide e un audio limpido. La clip universale si fissa saldamente a monitor, portatili e treppiedi, mentre funziona in modalità plug-and-play senza driver con tutte le principali piattaforme di videochiamata. Inoltre, i due microfoni stereo con riduzione del rumore catturano la voce in modo chiaro. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 100.9
    },
    {
        id: 150,
        name: "Hub USB Solaris Evo 3",
        descrizione: "L'Hub USB Solaris Evo 3 è la soluzione definitiva alla carenza di porte dei laptop moderni. La porta Ethernet gigabit assicura una connessione cablata stabile, mentre l'uscita HDMI supporta monitor esterni fino a 4K a 60 Hz. Inoltre, la scocca in alluminio dissipa il calore anche sotto carico. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 56.49
    },
    {
        id: 151,
        name: "Router Helix Studio 1",
        descrizione: "Il Router Helix Studio 1 porta una connessione veloce e stabile in ogni angolo della casa. La crittografia WPA3 e il firewall integrato proteggono la rete dalle intrusioni, mentre gestisce senza fatica oltre 128 dispositivi connessi contemporaneamente. Inoltre, lo standard Wi-Fi 6 raggiunge velocità combinate fino a 19 Gbps. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 220.9
    },
    {
        id: 152,
        name: "Microfono Aurora Air 2",
        descrizione: "Il Microfono Aurora Air 2 porta qualità broadcast in qualsiasi stanza della casa. Il pulsante mute touch con indicatore LED evita imbarazzi durante le dirette, mentre la capsula a condensatore cattura la voce con dettaglio e naturalezza. Inoltre, l'uscita cuffie a latenza zero consente di monitorare la propria voce in tempo reale. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Ideale sia per l'ufficio sia per il setup di casa. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 42.9
    },
    {
        id: 153,
        name: "Supporto Laptop Andromeda Core 7",
        descrizione: "Il Supporto Laptop Andromeda Core 7 unisce eleganza minimalista e solidità a tutta prova. La base stabile non oscilla nemmeno durante la digitazione più intensa, mentre l'altezza e l'inclinazione sono regolabili su più livelli. Inoltre, la struttura in alluminio sostiene portatili fino a 34 pollici. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 39.9
    },
    {
        id: 154,
        name: "Lampada Monitor Vortex Evo Blu Oceano",
        descrizione: "La Lampada Monitor Vortex Evo Blu Oceano libera spazio sulla scrivania portando la luce proprio dove serve. La luminosità si adatta automaticamente alla luce dell'ambiente, mentre l'alimentazione USB-C elimina la necessità di prese aggiuntive. Inoltre, si aggancia a monitor piatti e curvi senza viti né adesivi. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 68.9
    },
    {
        id: 155,
        name: "Casse Orione Evo 9",
        descrizione: "Le Casse Orione Evo 9 sono la scelta ideale per musica, film e videogiochi. Gli ingressi Bluetooth, ottico e AUX permettono di collegare qualsiasi sorgente, mentre le casse in legno MDF riducono le risonanze indesiderate. Inoltre, i controlli di bassi e acuti permettono di adattare il suono all'ambiente. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 109.49
    },
    {
        id: 156,
        name: "SSD Esterno Cassiopea Ultra Verde Salvia",
        descrizione: "L'SSD Esterno Cassiopea Ultra Verde Salvia è il modo più rapido per ampliare lo spazio di archiviazione. La scocca resistente a urti e cadute protegge i dati anche in viaggio, mentre la certificazione IP65 lo difende da polvere e schizzi d'acqua. Inoltre, la capacità di 1 TB offre spazio per migliaia di foto, video e progetti. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 261.99
    },
    {
        id: 157,
        name: "Stampante Onda Lite 8",
        descrizione: "La Stampante Onda Lite 8 unisce costi di stampa contenuti a prestazioni di livello professionale. Le stampe fotografiche a colori hanno toni vividi e sfumature morbide, mentre la connessione Wi-Fi e l'app dedicata permettono di stampare direttamente dallo smartphone. Inoltre, la modalità silenziosa consente di stampare anche di notte senza disturbare. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 130.99
    },
    {
        id: 158,
        name: "Tastiera Stratos Max 3",
        descrizione: "La Tastiera Stratos Max 3 combina un design essenziale a una risposta dei tasti sorprendentemente reattiva. La connessione tri-mode (Bluetooth, 2,4 GHz e cavo) si adatta a qualsiasi postazione, mentre il layout italiano completo include tastierino numerico e tasti multimediali dedicati. Inoltre, i keycap in PBT double-shot resistono all'usura e non diventano lucidi con il tempo. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 200.99
    },
    {
        id: 159,
        name: "Router Pulsar Lite Blu Oceano",
        descrizione: "Il Router Pulsar Lite Blu Oceano porta una connessione veloce e stabile in ogni angolo della casa. Il parental control integrato permette di gestire orari e contenuti per ogni membro della famiglia, mentre gestisce senza fatica oltre 200 dispositivi connessi contemporaneamente. Inoltre, la priorità QoS dà la precedenza a gaming e videochiamate. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 102.9
    },
    {
        id: 160,
        name: "Hub USB Cristallo Ultra Bianco Artico",
        descrizione: "L'Hub USB Cristallo Ultra Bianco Artico moltiplica le porte del tuo portatile con un solo, compatto accessorio. È plug-and-play e compatibile con Windows, macOS e Linux, mentre la scocca in alluminio dissipa il calore anche sotto carico. Inoltre, la porta Ethernet gigabit assicura una connessione cablata stabile. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 102.9
    },
    {
        id: 161,
        name: "Cuffie Shadow Prime 5",
        descrizione: "Le Cuffie Shadow Prime 5 uniscono comfort da indossare tutto il giorno e una resa acustica sorprendente. Il microfono con riduzione del rumore rende chiarissime chiamate e videoconferenze, mentre la cancellazione attiva del rumore riduce il brusio di uffici, treni e aerei. Inoltre, la struttura pieghevole e la custodia rigida le rendono perfette in viaggio. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 226.99
    },
    {
        id: 162,
        name: "Tappetino Fenice Prime Verde Salvia",
        descrizione: "Il Tappetino Fenice Prime Verde Salvia protegge la scrivania e migliora lo scorrimento del mouse. Il trattamento idrorepellente protegge da schizzi e macchie, mentre la superficie in microtessuto è ottimizzata per sensori ottici e laser. Inoltre, si lava facilmente e torna come nuovo in pochi minuti. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 35.9
    },
    {
        id: 163,
        name: "Casse Pantera Studio 2",
        descrizione: "Le Casse Pantera Studio 2 uniscono un design raffinato a una resa sonora di alto livello. Il telecomando incluso consente di gestire il volume dal divano, mentre i tweeter in seta restituiscono alti morbidi e mai affaticanti. Inoltre, i controlli di bassi e acuti permettono di adattare il suono all'ambiente. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 221.9
    },
    {
        id: 164,
        name: "Tappetino Luna Studio Grafite",
        descrizione: "Il Tappetino Luna Studio Grafite offre la superficie perfetta per movimenti precisi e controllati. Il trattamento idrorepellente protegge da schizzi e macchie, mentre si lava facilmente e torna come nuovo in pochi minuti. Inoltre, la superficie in microtessuto è ottimizzata per sensori ottici e laser. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 39.99
    },
    {
        id: 165,
        name: "Tappetino Opale Plus Grafite",
        descrizione: "Il Tappetino Opale Plus Grafite dà ordine e stile a tutta la postazione di lavoro. I bordi cuciti impediscono lo sfilacciamento nel tempo, mentre la base in gomma naturale antiscivolo lo mantiene fermo in ogni situazione. Inoltre, si lava facilmente e torna come nuovo in pochi minuti. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 30.9
    },
    {
        id: 166,
        name: "Mouse Prisma Pro 4",
        descrizione: "Il Mouse Prisma Pro 4 è il compagno ideale per lunghe sessioni di lavoro e di gioco. Gli switch ottici sono certificati per oltre 70 milioni di clic, mentre i piedini in PTFE puro assicurano uno scorrimento silenzioso e privo di attrito. Inoltre, la modalità multi-dispositivo consente di passare da PC a tablet con un pulsante. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 105.49
    },
    {
        id: 167,
        name: "Hub USB Kraken Air Bianco Artico",
        descrizione: "L'Hub USB Kraken Air Bianco Artico trasforma qualsiasi portatile in una vera postazione desktop. Il trasferimento dati a 10 Gbps rende rapidissime le copie di file, mentre la porta Ethernet gigabit assicura una connessione cablata stabile. Inoltre, offre 5 porte, tra cui USB-A, USB-C, HDMI e lettore di schede SD. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 24.99
    },
    {
        id: 168,
        name: "Mouse Glaciale Core 1",
        descrizione: "Il Mouse Glaciale Core 1 nasce per chi vuole precisione assoluta a ogni movimento del polso. La connessione wireless a bassa latenza garantisce una risposta istantanea, paragonabile a quella di un cavo, mentre gli switch ottici sono certificati per oltre 80 milioni di clic. Inoltre, il sensore ottico da 16000 DPI traccia ogni spostamento senza scatti anche sulle superfici più difficili. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 55.9
    },
    {
        id: 169,
        name: "Mouse Atlas Ultra 4",
        descrizione: "Il Mouse Atlas Ultra 4 unisce una forma ergonomica studiata a lungo a un sensore di nuova generazione. La batteria ricaricabile via USB-C offre fino a 40 ore di autonomia con una singola carica, mentre i pulsanti laterali programmabili permettono di richiamare scorciatoie e macro con un solo tocco. Inoltre, la rotella in metallo con scorrimento a frizione variabile rende rapidissima la navigazione di documenti lunghi. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 122.99
    },
    {
        id: 170,
        name: "SSD Esterno Onda Studio Verde Salvia",
        descrizione: "L'SSD Esterno Onda Studio Verde Salvia è pensato per fotografi, videomaker e professionisti in movimento. La capacità di 1 TB offre spazio per migliaia di foto, video e progetti, mentre le velocità di lettura fino a 2000 MB/s azzerano i tempi di attesa. Inoltre, la certificazione IP65 lo difende da polvere e schizzi d'acqua. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 232.49
    },
    {
        id: 171,
        name: "Monitor Nova Air Bianco Artico",
        descrizione: "Il Monitor Nova Air Bianco Artico ridefinisce la postazione con cornici sottilissime e un pannello di alto livello. Il supporto HDR esalta contrasti e luminosità nei contenuti compatibili, mentre il supporto ergonomico regolabile in altezza, inclinazione e rotazione si adatta a ogni postura. Inoltre, la frequenza di aggiornamento di 165 Hz rende ogni movimento incredibilmente fluido. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 292.49
    },
    {
        id: 172,
        name: "Monitor Brezza Core 5",
        descrizione: "Il Monitor Brezza Core 5 ridefinisce la postazione con cornici sottilissime e un pannello di alto livello. Il supporto HDR esalta contrasti e luminosità nei contenuti compatibili, mentre la frequenza di aggiornamento di 240 Hz rende ogni movimento incredibilmente fluido. Inoltre, il supporto ergonomico regolabile in altezza, inclinazione e rotazione si adatta a ogni postura. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 460.99
    },
    {
        id: 173,
        name: "Cuffie Brezza Plus Blu Oceano",
        descrizione: "Le Cuffie Brezza Plus Blu Oceano portano l'esperienza d'ascolto a un livello superiore, ovunque tu sia. La modalità trasparenza permette di sentire l'ambiente circostante senza toglierle, mentre il microfono con riduzione del rumore rende chiarissime chiamate e videoconferenze. Inoltre, la batteria assicura fino a 30 ore di ascolto, con ricarica rapida in pochi minuti. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 178.9
    },
    {
        id: 174,
        name: "Router Zenith Core Blu Oceano",
        descrizione: "Il Router Zenith Core Blu Oceano porta una connessione veloce e stabile in ogni angolo della casa. La priorità QoS dà la precedenza a gaming e videochiamate, mentre la tecnologia mesh consente di estendere la copertura aggiungendo altri nodi. Inoltre, la crittografia WPA3 e il firewall integrato proteggono la rete dalle intrusioni. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 145.9
    },
    {
        id: 175,
        name: "Cuffie Nimbus Elite 4",
        descrizione: "Le Cuffie Nimbus Elite 4 uniscono comfort da indossare tutto il giorno e una resa acustica sorprendente. La batteria assicura fino a 30 ore di ascolto, con ricarica rapida in pochi minuti, mentre la cancellazione attiva del rumore riduce il brusio di uffici, treni e aerei. Inoltre, la modalità trasparenza permette di sentire l'ambiente circostante senza toglierle. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 311.99
    },
    {
        id: 176,
        name: "Webcam Prisma Elite 8",
        descrizione: "La Webcam Prisma Elite 8 ti fa apparire al meglio in ogni videochiamata, riunione o diretta. La registrazione a 60 fps rende fluidi anche streaming e tutorial, mentre l'autofocus rapido mantiene il volto sempre a fuoco anche quando ti muovi. Inoltre, il campo visivo di 90° inquadra comodamente anche più persone. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 162.9
    },
    {
        id: 177,
        name: "Monitor Nova Pro 7",
        descrizione: "Il Monitor Nova Pro 7 ridefinisce la postazione con cornici sottilissime e un pannello di alto livello. Il tempo di risposta di 1 ms elimina scie e sfocature nelle scene più veloci, mentre il supporto ergonomico regolabile in altezza, inclinazione e rotazione si adatta a ogni postura. Inoltre, la copertura del 120% dello spazio colore sRGB lo rende adatto a fotoritocco e grafica. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 514.99
    },
    {
        id: 178,
        name: "Controller Astra Pro 9",
        descrizione: "Il Controller Astra Pro 9 è progettato per competere ai massimi livelli e vincere. Le palette posteriori rimappabili permettono comandi rapidissimi, mentre è compatibile con PC, smartphone e le principali console. Inoltre, l'impugnatura gommata antiscivolo resta salda anche nelle partite più intense. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 154.49
    },
    {
        id: 179,
        name: "Monitor Tuono One Nero Notte",
        descrizione: "Il Monitor Tuono One Nero Notte è progettato per chi pretende colori fedeli e una fluidità impeccabile. Il supporto ergonomico regolabile in altezza, inclinazione e rotazione si adatta a ogni postura, mentre la copertura del 99% dello spazio colore sRGB lo rende adatto a fotoritocco e grafica. Inoltre, il supporto HDR esalta contrasti e luminosità nei contenuti compatibili. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 237.99
    },
    {
        id: 180,
        name: "Tappetino Cristallo One Sabbia",
        descrizione: "Il Tappetino Cristallo One Sabbia protegge la scrivania e migliora lo scorrimento del mouse. I bordi cuciti impediscono lo sfilacciamento nel tempo, mentre lo spessore di 5 mm offre il giusto sostegno al polso. Inoltre, la superficie in microtessuto è ottimizzata per sensori ottici e laser. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 19.99
    },
    {
        id: 181,
        name: "Webcam Iride Plus Titanio",
        descrizione: "La Webcam Iride Plus Titanio trasforma lo smart working con immagini nitide e un audio limpido. I due microfoni stereo con riduzione del rumore catturano la voce in modo chiaro, mentre il campo visivo di 90° inquadra comodamente anche più persone. Inoltre, il copriobiettivo integrato garantisce privacy totale quando non la usi. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 77.99
    },
    {
        id: 182,
        name: "Tappetino Eco Pro Rosso Corsa",
        descrizione: "Il Tappetino Eco Pro Rosso Corsa è il dettaglio che fa la differenza tra un buon setup e uno eccellente. La base in gomma naturale antiscivolo lo mantiene fermo in ogni situazione, mentre si lava facilmente e torna come nuovo in pochi minuti. Inoltre, lo spessore di 4 mm offre il giusto sostegno al polso. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 41.9
    },
    {
        id: 183,
        name: "Controller Nebula Lite Bianco Artico",
        descrizione: "Il Controller Nebula Lite Bianco Artico mette nelle tue mani il controllo totale di ogni partita. La vibrazione a doppio motore restituisce ogni impatto e ogni esplosione, mentre gli stick con sensori a effetto Hall eliminano il fastidioso drift nel tempo. Inoltre, è compatibile con PC, smartphone e le principali console. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 43.99
    },
    {
        id: 184,
        name: "Stampante Neon Air Sabbia",
        descrizione: "La Stampante Neon Air Sabbia è la multifunzione pensata per chi vuole semplicità senza rinunciare alla qualità. Lo scanner piano ad alta risoluzione digitalizza documenti e fotografie in pochi secondi, mentre la modalità silenziosa consente di stampare anche di notte senza disturbare. Inoltre, il sistema a serbatoi ricaricabili abbatte drasticamente il costo per pagina. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 80.49
    },
    {
        id: 185,
        name: "Supporto Laptop Scirocco Evo 1",
        descrizione: "Il Supporto Laptop Scirocco Evo 1 è l'accessorio ergonomico che trasforma il modo di lavorare. La base stabile non oscilla nemmeno durante la digitazione più intensa, mentre l'altezza e l'inclinazione sono regolabili su più livelli. Inoltre, la struttura in alluminio sostiene portatili fino a 34 pollici. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 50.99
    },
    {
        id: 186,
        name: "Tappetino Condor Elite Lavanda",
        descrizione: "Il Tappetino Condor Elite Lavanda è il dettaglio che fa la differenza tra un buon setup e uno eccellente. Il formato esteso da 120x60 cm ospita comodamente mouse e tastiera, mentre si lava facilmente e torna come nuovo in pochi minuti. Inoltre, la superficie in microtessuto è ottimizzata per sensori ottici e laser. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 52.99
    },
    {
        id: 187,
        name: "Webcam Vertex Studio Rosso Corsa",
        descrizione: "La Webcam Vertex Studio Rosso Corsa è la soluzione semplice e immediata per chi lavora o studia da remoto. La clip universale si fissa saldamente a monitor, portatili e treppiedi, mentre la registrazione a 60 fps rende fluidi anche streaming e tutorial. Inoltre, il copriobiettivo integrato garantisce privacy totale quando non la usi. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 154.99
    },
    {
        id: 188,
        name: "Webcam Nebula Lite Blu Oceano",
        descrizione: "La Webcam Nebula Lite Blu Oceano ti fa apparire al meglio in ogni videochiamata, riunione o diretta. Il campo visivo di 90° inquadra comodamente anche più persone, mentre l'autofocus rapido mantiene il volto sempre a fuoco anche quando ti muovi. Inoltre, la clip universale si fissa saldamente a monitor, portatili e treppiedi. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 61.99
    },
    {
        id: 189,
        name: "Cuffie Ferro Studio Grafite",
        descrizione: "Le Cuffie Ferro Studio Grafite portano l'esperienza d'ascolto a un livello superiore, ovunque tu sia. La modalità a bassa latenza sincronizza perfettamente audio e video nei giochi, mentre la cancellazione attiva del rumore riduce il brusio di uffici, treni e aerei. Inoltre, la modalità trasparenza permette di sentire l'ambiente circostante senza toglierle. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 235.99
    },
    {
        id: 190,
        name: "Cuffie Lince Studio Grigio Siderale",
        descrizione: "Le Cuffie Lince Studio Grigio Siderale portano l'esperienza d'ascolto a un livello superiore, ovunque tu sia. La cancellazione attiva del rumore riduce il brusio di uffici, treni e aerei, mentre la batteria assicura fino a 70 ore di ascolto, con ricarica rapida in pochi minuti. Inoltre, i cuscinetti in memory foam rivestiti in tessuto traspirante non affaticano le orecchie. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 195.99
    },
    {
        id: 191,
        name: "Mouse Mistral Plus 5",
        descrizione: "Il Mouse Mistral Plus 5 è il compagno ideale per lunghe sessioni di lavoro e di gioco. La batteria ricaricabile via USB-C offre fino a 80 ore di autonomia con una singola carica, mentre i piedini in PTFE puro assicurano uno scorrimento silenzioso e privo di attrito. Inoltre, la modalità multi-dispositivo consente di passare da PC a tablet con un pulsante. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 53.99
    },
    {
        id: 192,
        name: "Controller Spectra Prime 2",
        descrizione: "Il Controller Spectra Prime 2 mette nelle tue mani il controllo totale di ogni partita. Le palette posteriori rimappabili permettono comandi rapidissimi, mentre la vibrazione a doppio motore restituisce ogni impatto e ogni esplosione. Inoltre, la batteria garantisce fino a 70 ore di gioco senza interruzioni. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 124.99
    },
    {
        id: 193,
        name: "Tastiera Phantom One Blu Oceano",
        descrizione: "La Tastiera Phantom One Blu Oceano porta sulla scrivania la qualità costruttiva delle tastiere da collezione. La connessione tri-mode (Bluetooth, 2,4 GHz e cavo) si adatta a qualsiasi postazione, mentre il telaio in alluminio spazzolato elimina flessioni e vibrazioni durante la digitazione. Inoltre, gli switch meccanici hot-swap si sostituiscono senza saldature, per personalizzare il feeling di ogni tasto. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 24.49
    },
    {
        id: 194,
        name: "Stampante Silenzio Air Nero Notte",
        descrizione: "La Stampante Silenzio Air Nero Notte semplifica la gestione dei documenti di tutta la famiglia o del piccolo ufficio. La modalità silenziosa consente di stampare anche di notte senza disturbare, mentre il vassoio da 150 fogli limita le interruzioni per il caricamento della carta. Inoltre, la stampa fronte/retro automatica riduce il consumo di carta. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 60.99
    },
    {
        id: 195,
        name: "SSD Esterno Solaris Lite 4",
        descrizione: "L'SSD Esterno Solaris Lite 4 è il modo più rapido per ampliare lo spazio di archiviazione. La capacità di 1 TB offre spazio per migliaia di foto, video e progetti, mentre la scocca resistente a urti e cadute protegge i dati anche in viaggio. Inoltre, la certificazione IP65 lo difende da polvere e schizzi d'acqua. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 79.99
    },
    {
        id: 196,
        name: "Tappetino Pulsar Ultra 6",
        descrizione: "Il Tappetino Pulsar Ultra 6 offre la superficie perfetta per movimenti precisi e controllati. La base in gomma naturale antiscivolo lo mantiene fermo in ogni situazione, mentre si lava facilmente e torna come nuovo in pochi minuti. Inoltre, la superficie in microtessuto è ottimizzata per sensori ottici e laser. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 47.9
    },
    {
        id: 197,
        name: "Cuffie Condor Evo Grafite",
        descrizione: "Le Cuffie Condor Evo Grafite ti avvolgono in un suono pieno, dettagliato e ricco di sfumature. Il microfono con riduzione del rumore rende chiarissime chiamate e videoconferenze, mentre i cuscinetti in memory foam rivestiti in tessuto traspirante non affaticano le orecchie. Inoltre, la connessione Bluetooth 5.3 multipoint le collega a due dispositivi contemporaneamente. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 115.99
    },
    {
        id: 198,
        name: "Tastiera Cristallo Plus Sabbia",
        descrizione: "La Tastiera Cristallo Plus Sabbia è pensata per chi scrive molto e non vuole scendere a compromessi sul comfort. Il telaio in alluminio spazzolato elimina flessioni e vibrazioni durante la digitazione, mentre i keycap in PBT double-shot resistono all'usura e non diventano lucidi con il tempo. Inoltre, la connessione tri-mode (Bluetooth, 2,4 GHz e cavo) si adatta a qualsiasi postazione. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 101.99
    },
    {
        id: 199,
        name: "Controller Spectra Ultra Titanio",
        descrizione: "Il Controller Spectra Ultra Titanio unisce un'impugnatura comoda a una precisione chirurgica. Le palette posteriori rimappabili permettono comandi rapidissimi, mentre la vibrazione a doppio motore restituisce ogni impatto e ogni esplosione. Inoltre, è compatibile con PC, smartphone e le principali console. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 157.49
    },
    {
        id: 200,
        name: "Router Astra Air 8",
        descrizione: "Il Router Astra Air 8 elimina le zone morte e i cali di segnale una volta per tutte. Gestisce senza fatica oltre 64 dispositivi connessi contemporaneamente, mentre la porta WAN da 2,5 Gbps sfrutta al massimo le connessioni in fibra ottica. Inoltre, la priorità QoS dà la precedenza a gaming e videochiamate. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 121.49
    },
    {
        id: 201,
        name: "Lampada Monitor Polaris Evo Titanio",
        descrizione: "La Lampada Monitor Polaris Evo Titanio è il tocco di luce che mancava alla tua postazione. Il fascio luminoso asimmetrico illumina la scrivania senza abbagliare, mentre la retroilluminazione RGB posteriore crea un'atmosfera rilassante. Inoltre, il controller wireless a rotella permette regolazioni immediate. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 67.49
    },
    {
        id: 202,
        name: "SSD Esterno Riflesso Core 3",
        descrizione: "L'SSD Esterno Riflesso Core 3 mette al sicuro i tuoi file e li porta ovunque alla massima velocità. La capacità di 2 TB offre spazio per migliaia di foto, video e progetti, mentre la connessione USB-C è compatibile con PC, Mac, tablet e console. Inoltre, le velocità di lettura fino a 1050 MB/s azzerano i tempi di attesa. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 169.9
    },
    {
        id: 203,
        name: "Lampada Monitor Vetta Pro Titanio",
        descrizione: "La Lampada Monitor Vetta Pro Titanio è il tocco di luce che mancava alla tua postazione. La retroilluminazione RGB posteriore crea un'atmosfera rilassante, mentre il controller wireless a rotella permette regolazioni immediate. Inoltre, la luminosità si adatta automaticamente alla luce dell'ambiente. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 78.9
    },
    {
        id: 204,
        name: "Tastiera Vega Elite 2",
        descrizione: "La Tastiera Vega Elite 2 è pensata per chi scrive molto e non vuole scendere a compromessi sul comfort. Gli switch meccanici hot-swap si sostituiscono senza saldature, per personalizzare il feeling di ogni tasto, mentre la batteria da 4000 mAh garantisce settimane di utilizzo senza ricarica. Inoltre, il layout italiano completo include tastierino numerico e tasti multimediali dedicati. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 213.99
    },
    {
        id: 205,
        name: "Tastiera Tuono Prime 5",
        descrizione: "La Tastiera Tuono Prime 5 regala una sensazione di digitazione solida, precisa e appagante. La connessione tri-mode (Bluetooth, 2,4 GHz e cavo) si adatta a qualsiasi postazione, mentre i keycap in PBT double-shot resistono all'usura e non diventano lucidi con il tempo. Inoltre, il poggiapolsi magnetico in similpelle sostiene i polsi nelle sessioni più lunghe. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 140.99
    },
    {
        id: 206,
        name: "Tappetino Pulsar Prime Grigio Siderale",
        descrizione: "Il Tappetino Pulsar Prime Grigio Siderale offre la superficie perfetta per movimenti precisi e controllati. I bordi cuciti impediscono lo sfilacciamento nel tempo, mentre la superficie in microtessuto è ottimizzata per sensori ottici e laser. Inoltre, il formato esteso da 90x40 cm ospita comodamente mouse e tastiera. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 42.99
    },
    {
        id: 207,
        name: "Casse Fulmine Ultra 7",
        descrizione: "Le Casse Fulmine Ultra 7 riempiono la stanza con un suono potente e sorprendentemente definito. I tweeter in seta restituiscono alti morbidi e mai affaticanti, mentre i woofer in fibra di carta garantiscono bassi caldi e ben controllati. Inoltre, i controlli di bassi e acuti permettono di adattare il suono all'ambiente. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 260.99
    },
    {
        id: 208,
        name: "Tastiera Nebula Prime 6",
        descrizione: "La Tastiera Nebula Prime 6 è pensata per chi scrive molto e non vuole scendere a compromessi sul comfort. Il telaio in alluminio spazzolato elimina flessioni e vibrazioni durante la digitazione, mentre la batteria da 5000 mAh garantisce settimane di utilizzo senza ricarica. Inoltre, la retroilluminazione RGB per singolo tasto offre oltre 30 effetti configurabili. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 125.99
    },
    {
        id: 209,
        name: "Stampante Astra Plus Rosso Corsa",
        descrizione: "La Stampante Astra Plus Rosso Corsa semplifica la gestione dei documenti di tutta la famiglia o del piccolo ufficio. Lo scanner piano ad alta risoluzione digitalizza documenti e fotografie in pochi secondi, mentre il sistema a serbatoi ricaricabili abbatte drasticamente il costo per pagina. Inoltre, il vassoio da 100 fogli limita le interruzioni per il caricamento della carta. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 177.49
    },
    {
        id: 210,
        name: "Router Solaris Lite Titanio",
        descrizione: "Il Router Solaris Lite Titanio elimina le zone morte e i cali di segnale una volta per tutte. La priorità QoS dà la precedenza a gaming e videochiamate, mentre il parental control integrato permette di gestire orari e contenuti per ogni membro della famiglia. Inoltre, le antenne ad alto guadagno con beamforming indirizzano il segnale verso i dispositivi. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Ideale sia per l'ufficio sia per il setup di casa. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 112.99
    },
    {
        id: 211,
        name: "Tastiera Pantera Max Nero Notte",
        descrizione: "La Tastiera Pantera Max Nero Notte è pensata per chi scrive molto e non vuole scendere a compromessi sul comfort. Lo strato di smorzamento interno in silicone attenua il rumore di battitura, mentre il layout italiano completo include tastierino numerico e tasti multimediali dedicati. Inoltre, la batteria da 4000 mAh garantisce settimane di utilizzo senza ricarica. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 216.99
    },
    {
        id: 212,
        name: "Router Helix Lite Lavanda",
        descrizione: "Il Router Helix Lite Lavanda è pensato per famiglie connesse, gamer e professionisti in smart working. La priorità QoS dà la precedenza a gaming e videochiamate, mentre gestisce senza fatica oltre 128 dispositivi connessi contemporaneamente. Inoltre, il parental control integrato permette di gestire orari e contenuti per ogni membro della famiglia. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Ideale sia per l'ufficio sia per il setup di casa. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 95.49
    },
    {
        id: 213,
        name: "Controller Eclipse Max Sabbia",
        descrizione: "Il Controller Eclipse Max Sabbia è progettato per competere ai massimi livelli e vincere. I grilletti con corsa regolabile si adattano a sparatutto e giochi di guida, mentre gli stick con sensori a effetto Hall eliminano il fastidioso drift nel tempo. Inoltre, la batteria garantisce fino a 40 ore di gioco senza interruzioni. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 186.99
    },
    {
        id: 214,
        name: "Lampada Monitor Silenzio One Verde Salvia",
        descrizione: "La Lampada Monitor Silenzio One Verde Salvia illumina la scrivania in modo uniforme senza creare riflessi sullo schermo. L'alimentazione USB-C elimina la necessità di prese aggiuntive, mentre la temperatura colore è regolabile da 2700 K a 6500 K. Inoltre, la retroilluminazione RGB posteriore crea un'atmosfera rilassante. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 37.9
    },
    {
        id: 215,
        name: "Router Pantera Lite 8",
        descrizione: "Il Router Pantera Lite 8 elimina le zone morte e i cali di segnale una volta per tutte. Il parental control integrato permette di gestire orari e contenuti per ogni membro della famiglia, mentre l'app di configurazione guida l'installazione in pochi minuti. Inoltre, le antenne ad alto guadagno con beamforming indirizzano il segnale verso i dispositivi. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 108.99
    },
    {
        id: 216,
        name: "Webcam Scirocco Lite 8",
        descrizione: "La Webcam Scirocco Lite 8 trasforma lo smart working con immagini nitide e un audio limpido. La correzione automatica della luce compensa ambienti troppo bui o controluce, mentre funziona in modalità plug-and-play senza driver con tutte le principali piattaforme di videochiamata. Inoltre, i due microfoni stereo con riduzione del rumore catturano la voce in modo chiaro. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 59.9
    },
    {
        id: 217,
        name: "Mouse Zefiro Evo Titanio",
        descrizione: "Il Mouse Zefiro Evo Titanio unisce una forma ergonomica studiata a lungo a un sensore di nuova generazione. Il sensore ottico da 26000 DPI traccia ogni spostamento senza scatti anche sulle superfici più difficili, mentre i pulsanti laterali programmabili permettono di richiamare scorciatoie e macro con un solo tocco. Inoltre, il peso ridotto a soli 63 grammi riduce l'affaticamento della mano. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 54.9
    },
    {
        id: 218,
        name: "Monitor Sirio Pro Verde Salvia",
        descrizione: "Il Monitor Sirio Pro Verde Salvia offre una qualità d'immagine che fa la differenza tanto nel lavoro quanto nel gioco. Il tempo di risposta di 1 ms elimina scie e sfocature nelle scene più veloci, mentre le cornici ultrasottili su tre lati lo rendono perfetto per configurazioni multi-monitor. Inoltre, la tecnologia flicker-free e il filtro per la luce blu riducono l'affaticamento visivo. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 648.49
    },
    {
        id: 219,
        name: "Tastiera Meridiano Evo Titanio",
        descrizione: "La Tastiera Meridiano Evo Titanio combina un design essenziale a una risposta dei tasti sorprendentemente reattiva. La batteria da 5000 mAh garantisce settimane di utilizzo senza ricarica, mentre gli switch meccanici hot-swap si sostituiscono senza saldature, per personalizzare il feeling di ogni tasto. Inoltre, i keycap in PBT double-shot resistono all'usura e non diventano lucidi con il tempo. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 112.99
    },
    {
        id: 220,
        name: "Microfono Ferro Evo Sabbia",
        descrizione: "Il Microfono Ferro Evo Sabbia porta qualità broadcast in qualsiasi stanza della casa. Il supporto antivibrazione e il filtro anti-pop sono inclusi nella confezione, mentre il pulsante mute touch con indicatore LED evita imbarazzi durante le dirette. Inoltre, si collega in USB-C senza bisogno di interfacce audio esterne. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 98.99
    },
    {
        id: 221,
        name: "Webcam Zenith Max Rosso Corsa",
        descrizione: "La Webcam Zenith Max Rosso Corsa è la soluzione semplice e immediata per chi lavora o studia da remoto. L'autofocus rapido mantiene il volto sempre a fuoco anche quando ti muovi, mentre funziona in modalità plug-and-play senza driver con tutte le principali piattaforme di videochiamata. Inoltre, la correzione automatica della luce compensa ambienti troppo bui o controluce. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 182.99
    },
    {
        id: 222,
        name: "Stampante Luna Pro 5",
        descrizione: "La Stampante Luna Pro 5 porta in casa e in ufficio stampe nitide, veloci e affidabili. La stampa fronte/retro automatica riduce il consumo di carta, mentre il sistema a serbatoi ricaricabili abbatte drasticamente il costo per pagina. Inoltre, il vassoio da 250 fogli limita le interruzioni per il caricamento della carta. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 280.9
    },
    {
        id: 223,
        name: "Router Aurora Ultra 8",
        descrizione: "Il Router Aurora Ultra 8 è pensato per famiglie connesse, gamer e professionisti in smart working. Le antenne ad alto guadagno con beamforming indirizzano il segnale verso i dispositivi, mentre la priorità QoS dà la precedenza a gaming e videochiamate. Inoltre, il parental control integrato permette di gestire orari e contenuti per ogni membro della famiglia. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 388.99
    },
    {
        id: 224,
        name: "Tastiera Pulsar One Nero Notte",
        descrizione: "La Tastiera Pulsar One Nero Notte combina un design essenziale a una risposta dei tasti sorprendentemente reattiva. I keycap in PBT double-shot resistono all'usura e non diventano lucidi con il tempo, mentre il layout italiano completo include tastierino numerico e tasti multimediali dedicati. Inoltre, gli switch meccanici hot-swap si sostituiscono senza saldature, per personalizzare il feeling di ogni tasto. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 64.49
    },
    {
        id: 225,
        name: "Router Tempesta Air Rosso Corsa",
        descrizione: "Il Router Tempesta Air Rosso Corsa è il cuore di una rete domestica moderna, sicura e senza rallentamenti. Le antenne ad alto guadagno con beamforming indirizzano il segnale verso i dispositivi, mentre l'app di configurazione guida l'installazione in pochi minuti. Inoltre, gestisce senza fatica oltre 128 dispositivi connessi contemporaneamente. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 60.9
    },
    {
        id: 226,
        name: "Tappetino Pantera Core 7",
        descrizione: "Il Tappetino Pantera Core 7 protegge la scrivania e migliora lo scorrimento del mouse. Si lava facilmente e torna come nuovo in pochi minuti, mentre la base in gomma naturale antiscivolo lo mantiene fermo in ogni situazione. Inoltre, i bordi cuciti impediscono lo sfilacciamento nel tempo. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 31.99
    },
    {
        id: 227,
        name: "Hub USB Cristallo Lite Grafite",
        descrizione: "L'Hub USB Cristallo Lite Grafite moltiplica le porte del tuo portatile con un solo, compatto accessorio. L'uscita HDMI supporta monitor esterni fino a 4K a 60 Hz, mentre è plug-and-play e compatibile con Windows, macOS e Linux. Inoltre, la ricarica passthrough fino a 100 W alimenta il portatile mentre lavori. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 22.99
    },
    {
        id: 228,
        name: "Controller Spectra Ultra 5",
        descrizione: "Il Controller Spectra Ultra 5 mette nelle tue mani il controllo totale di ogni partita. Gli stick con sensori a effetto Hall eliminano il fastidioso drift nel tempo, mentre la vibrazione a doppio motore restituisce ogni impatto e ogni esplosione. Inoltre, la batteria garantisce fino a 70 ore di gioco senza interruzioni. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 160.99
    },
    {
        id: 229,
        name: "Cuffie Onice Pro Grigio Siderale",
        descrizione: "Le Cuffie Onice Pro Grigio Siderale sono pensate per isolarti dal mondo e lasciarti solo con la tua musica. I driver dinamici da 45 mm offrono bassi profondi e alti cristallini, mentre la modalità trasparenza permette di sentire l'ambiente circostante senza toglierle. Inoltre, il microfono con riduzione del rumore rende chiarissime chiamate e videoconferenze. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 195.49
    },
    {
        id: 230,
        name: "Controller Eco Air 6",
        descrizione: "Il Controller Eco Air 6 rende ogni sessione di gioco più coinvolgente e reattiva. L'impugnatura gommata antiscivolo resta salda anche nelle partite più intense, mentre la vibrazione a doppio motore restituisce ogni impatto e ogni esplosione. Inoltre, le palette posteriori rimappabili permettono comandi rapidissimi. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 53.49
    },
    {
        id: 231,
        name: "Stampante Tempesta Evo 1",
        descrizione: "La Stampante Tempesta Evo 1 unisce costi di stampa contenuti a prestazioni di livello professionale. Lo scanner piano ad alta risoluzione digitalizza documenti e fotografie in pochi secondi, mentre la stampa fronte/retro automatica riduce il consumo di carta. Inoltre, la modalità silenziosa consente di stampare anche di notte senza disturbare. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 181.49
    },
    {
        id: 232,
        name: "Cuffie Zefiro Evo Titanio",
        descrizione: "Le Cuffie Zefiro Evo Titanio portano l'esperienza d'ascolto a un livello superiore, ovunque tu sia. La modalità a bassa latenza sincronizza perfettamente audio e video nei giochi, mentre la batteria assicura fino a 80 ore di ascolto, con ricarica rapida in pochi minuti. Inoltre, la connessione Bluetooth 5.3 multipoint le collega a due dispositivi contemporaneamente. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 125.99
    },
    {
        id: 233,
        name: "Casse Graffio Ultra Titanio",
        descrizione: "Le Casse Graffio Ultra Titanio sono la scelta ideale per musica, film e videogiochi. La potenza complessiva di 40 W assicura un volume pieno senza distorsioni, mentre le casse in legno MDF riducono le risonanze indesiderate. Inoltre, l'illuminazione RGB sincronizzata con la musica crea atmosfera. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 245.9
    },
    {
        id: 234,
        name: "Webcam Altair Air 4",
        descrizione: "La Webcam Altair Air 4 ti fa apparire al meglio in ogni videochiamata, riunione o diretta. I due microfoni stereo con riduzione del rumore catturano la voce in modo chiaro, mentre il campo visivo di 78° inquadra comodamente anche più persone. Inoltre, funziona in modalità plug-and-play senza driver con tutte le principali piattaforme di videochiamata. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 45.99
    },
    {
        id: 235,
        name: "Tastiera Helix One Titanio",
        descrizione: "La Tastiera Helix One Titanio è pensata per chi scrive molto e non vuole scendere a compromessi sul comfort. La batteria da 5000 mAh garantisce settimane di utilizzo senza ricarica, mentre il telaio in alluminio spazzolato elimina flessioni e vibrazioni durante la digitazione. Inoltre, gli switch meccanici hot-swap si sostituiscono senza saldature, per personalizzare il feeling di ogni tasto. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 30.9
    },
    {
        id: 236,
        name: "Webcam Zefiro One 5",
        descrizione: "La Webcam Zefiro One 5 è la soluzione semplice e immediata per chi lavora o studia da remoto. Il sensore in risoluzione 2K cattura ogni dettaglio con colori naturali, mentre la registrazione a 60 fps rende fluidi anche streaming e tutorial. Inoltre, funziona in modalità plug-and-play senza driver con tutte le principali piattaforme di videochiamata. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 29.99
    },
    {
        id: 237,
        name: "Hub USB Polaris Core 4",
        descrizione: "L'Hub USB Polaris Core 4 mette ordine tra cavi e periferiche in un attimo. Il trasferimento dati a 10 Gbps rende rapidissime le copie di file, mentre la porta Ethernet gigabit assicura una connessione cablata stabile. Inoltre, offre 7 porte, tra cui USB-A, USB-C, HDMI e lettore di schede SD. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 71.49
    },
    {
        id: 238,
        name: "Tappetino Tempesta Plus 6",
        descrizione: "Il Tappetino Tempesta Plus 6 protegge la scrivania e migliora lo scorrimento del mouse. Il trattamento idrorepellente protegge da schizzi e macchie, mentre il formato esteso da 90x40 cm ospita comodamente mouse e tastiera. Inoltre, la base in gomma naturale antiscivolo lo mantiene fermo in ogni situazione. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 31.9
    },
    {
        id: 239,
        name: "Router Shadow Ultra Rosso Corsa",
        descrizione: "Il Router Shadow Ultra Rosso Corsa porta una connessione veloce e stabile in ogni angolo della casa. Il parental control integrato permette di gestire orari e contenuti per ogni membro della famiglia, mentre le antenne ad alto guadagno con beamforming indirizzano il segnale verso i dispositivi. Inoltre, la tecnologia mesh consente di estendere la copertura aggiungendo altri nodi. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 381.99
    },
    {
        id: 240,
        name: "Lampada Monitor Fenice Prime Titanio",
        descrizione: "La Lampada Monitor Fenice Prime Titanio illumina la scrivania in modo uniforme senza creare riflessi sullo schermo. Si aggancia a monitor piatti e curvi senza viti né adesivi, mentre il controller wireless a rotella permette regolazioni immediate. Inoltre, l'alimentazione USB-C elimina la necessità di prese aggiuntive. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 92.9
    },
    {
        id: 241,
        name: "Casse Drago Ultra 2",
        descrizione: "Le Casse Drago Ultra 2 uniscono un design raffinato a una resa sonora di alto livello. Le casse in legno MDF riducono le risonanze indesiderate, mentre i tweeter in seta restituiscono alti morbidi e mai affaticanti. Inoltre, i controlli di bassi e acuti permettono di adattare il suono all'ambiente. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 246.9
    },
    {
        id: 242,
        name: "SSD Esterno Silenzio Evo 6",
        descrizione: "L'SSD Esterno Silenzio Evo 6 è il modo più rapido per ampliare lo spazio di archiviazione. La capacità di 4 TB offre spazio per migliaia di foto, video e progetti, mentre la crittografia hardware AES a 256 bit protegge i dati sensibili. Inoltre, la connessione USB-C è compatibile con PC, Mac, tablet e console. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 166.49
    },
    {
        id: 243,
        name: "Cuffie Luna One Titanio",
        descrizione: "Le Cuffie Luna One Titanio sono pensate per isolarti dal mondo e lasciarti solo con la tua musica. La cancellazione attiva del rumore riduce il brusio di uffici, treni e aerei, mentre il microfono con riduzione del rumore rende chiarissime chiamate e videoconferenze. Inoltre, i driver dinamici da 45 mm offrono bassi profondi e alti cristallini. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 39.9
    },
    {
        id: 244,
        name: "Controller Saetta Core Sabbia",
        descrizione: "Il Controller Saetta Core Sabbia unisce un'impugnatura comoda a una precisione chirurgica. È compatibile con PC, smartphone e le principali console, mentre i grilletti con corsa regolabile si adattano a sparatutto e giochi di guida. Inoltre, l'impugnatura gommata antiscivolo resta salda anche nelle partite più intense. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 101.49
    },
    {
        id: 245,
        name: "Webcam Riflesso Studio 6",
        descrizione: "La Webcam Riflesso Studio 6 è la soluzione semplice e immediata per chi lavora o studia da remoto. La registrazione a 60 fps rende fluidi anche streaming e tutorial, mentre il campo visivo di 95° inquadra comodamente anche più persone. Inoltre, la clip universale si fissa saldamente a monitor, portatili e treppiedi. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 121.9
    },
    {
        id: 246,
        name: "Tastiera Pantera Lite Lavanda",
        descrizione: "La Tastiera Pantera Lite Lavanda regala una sensazione di digitazione solida, precisa e appagante. Il poggiapolsi magnetico in similpelle sostiene i polsi nelle sessioni più lunghe, mentre gli switch meccanici hot-swap si sostituiscono senza saldature, per personalizzare il feeling di ogni tasto. Inoltre, il layout italiano completo include tastierino numerico e tasti multimediali dedicati. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 43.49
    },
    {
        id: 247,
        name: "Casse Vega Pro 2",
        descrizione: "Le Casse Vega Pro 2 uniscono un design raffinato a una resa sonora di alto livello. I woofer in fibra di carta garantiscono bassi caldi e ben controllati, mentre i tweeter in seta restituiscono alti morbidi e mai affaticanti. Inoltre, la potenza complessiva di 60 W assicura un volume pieno senza distorsioni. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 203.99
    },
    {
        id: 248,
        name: "Tappetino Falco Evo Titanio",
        descrizione: "Il Tappetino Falco Evo Titanio è il dettaglio che fa la differenza tra un buon setup e uno eccellente. Il formato esteso da 90x40 cm ospita comodamente mouse e tastiera, mentre i bordi cuciti impediscono lo sfilacciamento nel tempo. Inoltre, lo spessore di 4 mm offre il giusto sostegno al polso. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 32.99
    },
    {
        id: 249,
        name: "Tastiera Prisma Elite 9",
        descrizione: "La Tastiera Prisma Elite 9 regala una sensazione di digitazione solida, precisa e appagante. La retroilluminazione RGB per singolo tasto offre oltre 30 effetti configurabili, mentre il telaio in alluminio spazzolato elimina flessioni e vibrazioni durante la digitazione. Inoltre, la connessione tri-mode (Bluetooth, 2,4 GHz e cavo) si adatta a qualsiasi postazione. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 190.99
    },
    {
        id: 250,
        name: "Stampante Eco Core Blu Oceano",
        descrizione: "La Stampante Eco Core Blu Oceano porta in casa e in ufficio stampe nitide, veloci e affidabili. La stampa fronte/retro automatica riduce il consumo di carta, mentre la modalità silenziosa consente di stampare anche di notte senza disturbare. Inoltre, la connessione Wi-Fi e l'app dedicata permettono di stampare direttamente dallo smartphone. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 238.49
    },
    {
        id: 251,
        name: "Stampante Lince Elite 6",
        descrizione: "La Stampante Lince Elite 6 unisce costi di stampa contenuti a prestazioni di livello professionale. Le stampe fotografiche a colori hanno toni vividi e sfumature morbide, mentre stampa fino a 22 pagine al minuto con testi nitidi e neri profondi. Inoltre, il vassoio da 250 fogli limita le interruzioni per il caricamento della carta. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 444.49
    },
    {
        id: 252,
        name: "Webcam Glaciale Air Blu Oceano",
        descrizione: "La Webcam Glaciale Air Blu Oceano porta una qualità d'immagine professionale sulla tua scrivania. La registrazione a 60 fps rende fluidi anche streaming e tutorial, mentre funziona in modalità plug-and-play senza driver con tutte le principali piattaforme di videochiamata. Inoltre, i due microfoni stereo con riduzione del rumore catturano la voce in modo chiaro. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 35.9
    },
    {
        id: 253,
        name: "Cuffie Iride Evo Grafite",
        descrizione: "Le Cuffie Iride Evo Grafite ti avvolgono in un suono pieno, dettagliato e ricco di sfumature. La modalità a bassa latenza sincronizza perfettamente audio e video nei giochi, mentre il microfono con riduzione del rumore rende chiarissime chiamate e videoconferenze. Inoltre, la batteria assicura fino a 80 ore di ascolto, con ricarica rapida in pochi minuti. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 171.99
    },
    {
        id: 254,
        name: "Tappetino Nebula Plus Titanio",
        descrizione: "Il Tappetino Nebula Plus Titanio è il dettaglio che fa la differenza tra un buon setup e uno eccellente. La base in gomma naturale antiscivolo lo mantiene fermo in ogni situazione, mentre lo spessore di 4 mm offre il giusto sostegno al polso. Inoltre, la superficie in microtessuto è ottimizzata per sensori ottici e laser. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 29.99
    },
    {
        id: 255,
        name: "SSD Esterno Altair Prime Titanio",
        descrizione: "L'SSD Esterno Altair Prime Titanio mette al sicuro i tuoi file e li porta ovunque alla massima velocità. La crittografia hardware AES a 256 bit protegge i dati sensibili, mentre la scocca resistente a urti e cadute protegge i dati anche in viaggio. Inoltre, la certificazione IP65 lo difende da polvere e schizzi d'acqua. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 233.99
    },
    {
        id: 256,
        name: "Supporto Laptop Onice Lite Titanio",
        descrizione: "Il Supporto Laptop Onice Lite Titanio porta lo schermo del portatile all'altezza degli occhi, salvando schiena e collo. La struttura in alluminio sostiene portatili fino a 27 pollici, mentre si ripiega in pochi secondi e sta comodamente in uno zaino. Inoltre, l'altezza e l'inclinazione sono regolabili su più livelli. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 33.49
    },
    {
        id: 257,
        name: "Tappetino Aurora Ultra Verde Salvia",
        descrizione: "Il Tappetino Aurora Ultra Verde Salvia protegge la scrivania e migliora lo scorrimento del mouse. Il formato esteso da 120x60 cm ospita comodamente mouse e tastiera, mentre i bordi cuciti impediscono lo sfilacciamento nel tempo. Inoltre, si lava facilmente e torna come nuovo in pochi minuti. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 47.99
    },
    {
        id: 258,
        name: "Tastiera Titan Ultra Lavanda",
        descrizione: "La Tastiera Titan Ultra Lavanda regala una sensazione di digitazione solida, precisa e appagante. La batteria da 5000 mAh garantisce settimane di utilizzo senza ricarica, mentre i keycap in PBT double-shot resistono all'usura e non diventano lucidi con il tempo. Inoltre, il poggiapolsi magnetico in similpelle sostiene i polsi nelle sessioni più lunghe. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 209.49
    },
    {
        id: 259,
        name: "Hub USB Mistral One 4",
        descrizione: "L'Hub USB Mistral One 4 moltiplica le porte del tuo portatile con un solo, compatto accessorio. La scocca in alluminio dissipa il calore anche sotto carico, mentre offre 11 porte, tra cui USB-A, USB-C, HDMI e lettore di schede SD. Inoltre, la porta Ethernet gigabit assicura una connessione cablata stabile. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 22.99
    },
    {
        id: 260,
        name: "SSD Esterno Silenzio Studio 2",
        descrizione: "L'SSD Esterno Silenzio Studio 2 è il modo più rapido per ampliare lo spazio di archiviazione. Il software di backup automatico incluso rende semplice proteggere i file, mentre la certificazione IP65 lo difende da polvere e schizzi d'acqua. Inoltre, la crittografia hardware AES a 256 bit protegge i dati sensibili. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 258.99
    },
    {
        id: 261,
        name: "Hub USB Fulmine Lite 6",
        descrizione: "L'Hub USB Fulmine Lite 6 moltiplica le porte del tuo portatile con un solo, compatto accessorio. La ricarica passthrough fino a 100 W alimenta il portatile mentre lavori, mentre l'uscita HDMI supporta monitor esterni fino a 4K a 60 Hz. Inoltre, la porta Ethernet gigabit assicura una connessione cablata stabile. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 28.49
    },
    {
        id: 262,
        name: "Monitor Spectra Ultra Titanio",
        descrizione: "Il Monitor Spectra Ultra Titanio apre una finestra nitida e brillante su tutto ciò che crei e guardi. Il pannello IPS da 34 pollici con risoluzione QHD restituisce dettagli nitidissimi, mentre la frequenza di aggiornamento di 75 Hz rende ogni movimento incredibilmente fluido. Inoltre, il tempo di risposta di 1 ms elimina scie e sfocature nelle scene più veloci. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 749.99
    },
    {
        id: 263,
        name: "Hub USB Vega Ultra Nero Notte",
        descrizione: "L'Hub USB Vega Ultra Nero Notte moltiplica le porte del tuo portatile con un solo, compatto accessorio. È plug-and-play e compatibile con Windows, macOS e Linux, mentre offre 9 porte, tra cui USB-A, USB-C, HDMI e lettore di schede SD. Inoltre, il trasferimento dati a 10 Gbps rende rapidissime le copie di file. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 107.49
    },
    {
        id: 264,
        name: "Hub USB Cometa Evo Rosso Corsa",
        descrizione: "L'Hub USB Cometa Evo Rosso Corsa trasforma qualsiasi portatile in una vera postazione desktop. Offre 11 porte, tra cui USB-A, USB-C, HDMI e lettore di schede SD, mentre la scocca in alluminio dissipa il calore anche sotto carico. Inoltre, la ricarica passthrough fino a 100 W alimenta il portatile mentre lavori. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 71.9
    },
    {
        id: 265,
        name: "Monitor Kraken Air Blu Oceano",
        descrizione: "Il Monitor Kraken Air Blu Oceano è progettato per chi pretende colori fedeli e una fluidità impeccabile. La porta USB-C con alimentazione fino a 65 W collega e ricarica il portatile con un solo cavo, mentre il supporto HDR esalta contrasti e luminosità nei contenuti compatibili. Inoltre, la tecnologia flicker-free e il filtro per la luce blu riducono l'affaticamento visivo. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 231.9
    },
    {
        id: 266,
        name: "Tappetino Ossidiana Prime Rosso Corsa",
        descrizione: "Il Tappetino Ossidiana Prime Rosso Corsa è il dettaglio che fa la differenza tra un buon setup e uno eccellente. La superficie in microtessuto è ottimizzata per sensori ottici e laser, mentre i bordi cuciti impediscono lo sfilacciamento nel tempo. Inoltre, il formato esteso da 120x60 cm ospita comodamente mouse e tastiera. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 42.99
    },
    {
        id: 267,
        name: "Webcam Levante Elite Bianco Artico",
        descrizione: "La Webcam Levante Elite Bianco Artico trasforma lo smart working con immagini nitide e un audio limpido. Il copriobiettivo integrato garantisce privacy totale quando non la usi, mentre il sensore in risoluzione 4K cattura ogni dettaglio con colori naturali. Inoltre, funziona in modalità plug-and-play senza driver con tutte le principali piattaforme di videochiamata. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 178.49
    },
    {
        id: 268,
        name: "Router Fulmine Evo Verde Salvia",
        descrizione: "Il Router Fulmine Evo Verde Salvia è il cuore di una rete domestica moderna, sicura e senza rallentamenti. Le antenne ad alto guadagno con beamforming indirizzano il segnale verso i dispositivi, mentre gestisce senza fatica oltre 200 dispositivi connessi contemporaneamente. Inoltre, la crittografia WPA3 e il firewall integrato proteggono la rete dalle intrusioni. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 136.49
    },
    {
        id: 269,
        name: "Cuffie Zenith Elite Verde Salvia",
        descrizione: "Le Cuffie Zenith Elite Verde Salvia sono pensate per isolarti dal mondo e lasciarti solo con la tua musica. Il microfono con riduzione del rumore rende chiarissime chiamate e videoconferenze, mentre la modalità a bassa latenza sincronizza perfettamente audio e video nei giochi. Inoltre, i cuscinetti in memory foam rivestiti in tessuto traspirante non affaticano le orecchie. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 305.9
    },
    {
        id: 270,
        name: "Hub USB Scirocco Studio Verde Salvia",
        descrizione: "L'Hub USB Scirocco Studio Verde Salvia trasforma qualsiasi portatile in una vera postazione desktop. Il trasferimento dati a 10 Gbps rende rapidissime le copie di file, mentre offre 11 porte, tra cui USB-A, USB-C, HDMI e lettore di schede SD. Inoltre, l'uscita HDMI supporta monitor esterni fino a 4K a 60 Hz. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 88.99
    },
    {
        id: 271,
        name: "Mouse Andromeda Air Blu Oceano",
        descrizione: "Il Mouse Andromeda Air Blu Oceano unisce una forma ergonomica studiata a lungo a un sensore di nuova generazione. La batteria ricaricabile via USB-C offre fino a 60 ore di autonomia con una singola carica, mentre il peso ridotto a soli 49 grammi riduce l'affaticamento della mano. Inoltre, la rotella in metallo con scorrimento a frizione variabile rende rapidissima la navigazione di documenti lunghi. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Ideale sia per l'ufficio sia per il setup di casa. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 18.49
    },
    {
        id: 272,
        name: "Controller Meridiano Lite Verde Salvia",
        descrizione: "Il Controller Meridiano Lite Verde Salvia mette nelle tue mani il controllo totale di ogni partita. L'impugnatura gommata antiscivolo resta salda anche nelle partite più intense, mentre i grilletti con corsa regolabile si adattano a sparatutto e giochi di guida. Inoltre, è compatibile con PC, smartphone e le principali console. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 61.99
    },
    {
        id: 273,
        name: "Supporto Laptop Dolomia Pro 9",
        descrizione: "Il Supporto Laptop Dolomia Pro 9 porta lo schermo del portatile all'altezza degli occhi, salvando schiena e collo. I gommini in silicone proteggono il portatile da graffi e scivolamenti, mentre l'altezza e l'inclinazione sono regolabili su più livelli. Inoltre, si ripiega in pochi secondi e sta comodamente in uno zaino. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 64.9
    },
    {
        id: 274,
        name: "Casse Riflesso Ultra 2",
        descrizione: "Le Casse Riflesso Ultra 2 uniscono un design raffinato a una resa sonora di alto livello. Le casse in legno MDF riducono le risonanze indesiderate, mentre i woofer in fibra di carta garantiscono bassi caldi e ben controllati. Inoltre, gli ingressi Bluetooth, ottico e AUX permettono di collegare qualsiasi sorgente. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 253.9
    },
    {
        id: 275,
        name: "Monitor Spectra Studio Titanio",
        descrizione: "Il Monitor Spectra Studio Titanio offre una qualità d'immagine che fa la differenza tanto nel lavoro quanto nel gioco. La tecnologia flicker-free e il filtro per la luce blu riducono l'affaticamento visivo, mentre la copertura del 120% dello spazio colore sRGB lo rende adatto a fotoritocco e grafica. Inoltre, il tempo di risposta di 1 ms elimina scie e sfocature nelle scene più veloci. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 601.9
    },
    {
        id: 276,
        name: "Supporto Laptop Condor Studio Blu Oceano",
        descrizione: "Il Supporto Laptop Condor Studio Blu Oceano unisce eleganza minimalista e solidità a tutta prova. L'altezza e l'inclinazione sono regolabili su più livelli, mentre il design aperto favorisce la circolazione dell'aria e riduce le temperature. Inoltre, i gommini in silicone proteggono il portatile da graffi e scivolamenti. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 71.99
    },
    {
        id: 277,
        name: "Tastiera Stratos Elite Nero Notte",
        descrizione: "La Tastiera Stratos Elite Nero Notte è pensata per chi scrive molto e non vuole scendere a compromessi sul comfort. Il poggiapolsi magnetico in similpelle sostiene i polsi nelle sessioni più lunghe, mentre la batteria da 2000 mAh garantisce settimane di utilizzo senza ricarica. Inoltre, gli switch meccanici hot-swap si sostituiscono senza saldature, per personalizzare il feeling di ogni tasto. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 176.49
    },
    {
        id: 278,
        name: "Lampada Monitor Vulcano One Verde Salvia",
        descrizione: "La Lampada Monitor Vulcano One Verde Salvia è il tocco di luce che mancava alla tua postazione. Si aggancia a monitor piatti e curvi senza viti né adesivi, mentre l'alimentazione USB-C elimina la necessità di prese aggiuntive. Inoltre, la luminosità si adatta automaticamente alla luce dell'ambiente. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Ideale sia per l'ufficio sia per il setup di casa. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 48.9
    },
    {
        id: 279,
        name: "Controller Nova Prime Rosso Corsa",
        descrizione: "Il Controller Nova Prime Rosso Corsa rende ogni sessione di gioco più coinvolgente e reattiva. La batteria garantisce fino a 70 ore di gioco senza interruzioni, mentre è compatibile con PC, smartphone e le principali console. Inoltre, l'impugnatura gommata antiscivolo resta salda anche nelle partite più intense. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 152.9
    },
    {
        id: 280,
        name: "Tappetino Cassiopea Max 3",
        descrizione: "Il Tappetino Cassiopea Max 3 protegge la scrivania e migliora lo scorrimento del mouse. I bordi cuciti impediscono lo sfilacciamento nel tempo, mentre la superficie in microtessuto è ottimizzata per sensori ottici e laser. Inoltre, il formato esteso da 80x30 cm ospita comodamente mouse e tastiera. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 48.9
    },
    {
        id: 281,
        name: "Tastiera Stratos Ultra 5",
        descrizione: "La Tastiera Stratos Ultra 5 regala una sensazione di digitazione solida, precisa e appagante. Gli switch meccanici hot-swap si sostituiscono senza saldature, per personalizzare il feeling di ogni tasto, mentre la retroilluminazione RGB per singolo tasto offre oltre 30 effetti configurabili. Inoltre, il layout italiano completo include tastierino numerico e tasti multimediali dedicati. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 174.99
    },
    {
        id: 282,
        name: "Stampante Cometa Pro 1",
        descrizione: "La Stampante Cometa Pro 1 porta in casa e in ufficio stampe nitide, veloci e affidabili. Il sistema a serbatoi ricaricabili abbatte drasticamente il costo per pagina, mentre lo scanner piano ad alta risoluzione digitalizza documenti e fotografie in pochi secondi. Inoltre, il display touch a colori rende intuitiva ogni operazione. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 313.49
    },
    {
        id: 283,
        name: "Router Condor Studio 9",
        descrizione: "Il Router Condor Studio 9 porta una connessione veloce e stabile in ogni angolo della casa. Le antenne ad alto guadagno con beamforming indirizzano il segnale verso i dispositivi, mentre il parental control integrato permette di gestire orari e contenuti per ogni membro della famiglia. Inoltre, la crittografia WPA3 e il firewall integrato proteggono la rete dalle intrusioni. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 271.49
    },
    {
        id: 284,
        name: "Casse Cometa Core 7",
        descrizione: "Le Casse Cometa Core 7 sono la scelta ideale per musica, film e videogiochi. I controlli di bassi e acuti permettono di adattare il suono all'ambiente, mentre i tweeter in seta restituiscono alti morbidi e mai affaticanti. Inoltre, i woofer in fibra di carta garantiscono bassi caldi e ben controllati. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 103.99
    },
    {
        id: 285,
        name: "Supporto Laptop Cobalto Evo 6",
        descrizione: "Il Supporto Laptop Cobalto Evo 6 è l'accessorio ergonomico che trasforma il modo di lavorare. I gommini in silicone proteggono il portatile da graffi e scivolamenti, mentre si ripiega in pochi secondi e sta comodamente in uno zaino. Inoltre, l'altezza e l'inclinazione sono regolabili su più livelli. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 39.99
    },
    {
        id: 286,
        name: "Casse Sirio Prime Nero Notte",
        descrizione: "Le Casse Sirio Prime Nero Notte riempiono la stanza con un suono potente e sorprendentemente definito. Le casse in legno MDF riducono le risonanze indesiderate, mentre la potenza complessiva di 40 W assicura un volume pieno senza distorsioni. Inoltre, gli ingressi Bluetooth, ottico e AUX permettono di collegare qualsiasi sorgente. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 177.49
    },
    {
        id: 287,
        name: "Lampada Monitor Spectra Pro Grigio Siderale",
        descrizione: "La Lampada Monitor Spectra Pro Grigio Siderale illumina la scrivania in modo uniforme senza creare riflessi sullo schermo. Il fascio luminoso asimmetrico illumina la scrivania senza abbagliare, mentre la temperatura colore è regolabile da 2700 K a 6500 K. Inoltre, si aggancia a monitor piatti e curvi senza viti né adesivi. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 73.99
    },
    {
        id: 288,
        name: "Webcam Plasma Core 9",
        descrizione: "La Webcam Plasma Core 9 ti fa apparire al meglio in ogni videochiamata, riunione o diretta. I due microfoni stereo con riduzione del rumore catturano la voce in modo chiaro, mentre l'autofocus rapido mantiene il volto sempre a fuoco anche quando ti muovi. Inoltre, il sensore in risoluzione Full HD 1080p cattura ogni dettaglio con colori naturali. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 97.99
    },
    {
        id: 289,
        name: "SSD Esterno Lince Prime Blu Oceano",
        descrizione: "L'SSD Esterno Lince Prime Blu Oceano è il modo più rapido per ampliare lo spazio di archiviazione. La scocca resistente a urti e cadute protegge i dati anche in viaggio, mentre le velocità di lettura fino a 1050 MB/s azzerano i tempi di attesa. Inoltre, la certificazione IP65 lo difende da polvere e schizzi d'acqua. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 254.49
    },
    {
        id: 290,
        name: "Webcam Atlas Pro Grafite",
        descrizione: "La Webcam Atlas Pro Grafite è la soluzione semplice e immediata per chi lavora o studia da remoto. La correzione automatica della luce compensa ambienti troppo bui o controluce, mentre la registrazione a 60 fps rende fluidi anche streaming e tutorial. Inoltre, i due microfoni stereo con riduzione del rumore catturano la voce in modo chiaro. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 144.99
    },
    {
        id: 291,
        name: "Router Astra Plus 6",
        descrizione: "Il Router Astra Plus 6 è il cuore di una rete domestica moderna, sicura e senza rallentamenti. Il parental control integrato permette di gestire orari e contenuti per ogni membro della famiglia, mentre la tecnologia mesh consente di estendere la copertura aggiungendo altri nodi. Inoltre, lo standard Wi-Fi 6 raggiunge velocità combinate fino a 3 Gbps. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 187.99
    },
    {
        id: 292,
        name: "Tappetino Lince Pro 4",
        descrizione: "Il Tappetino Lince Pro 4 protegge la scrivania e migliora lo scorrimento del mouse. La base in gomma naturale antiscivolo lo mantiene fermo in ogni situazione, mentre si lava facilmente e torna come nuovo in pochi minuti. Inoltre, lo spessore di 3 mm offre il giusto sostegno al polso. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 38.9
    },
    {
        id: 293,
        name: "Cuffie Graffio One Bianco Artico",
        descrizione: "Le Cuffie Graffio One Bianco Artico portano l'esperienza d'ascolto a un livello superiore, ovunque tu sia. Il microfono con riduzione del rumore rende chiarissime chiamate e videoconferenze, mentre la modalità a bassa latenza sincronizza perfettamente audio e video nei giochi. Inoltre, la connessione Bluetooth 5.3 multipoint le collega a due dispositivi contemporaneamente. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 53.99
    },
    {
        id: 294,
        name: "Casse Graffio Core Grigio Siderale",
        descrizione: "Le Casse Graffio Core Grigio Siderale riempiono la stanza con un suono potente e sorprendentemente definito. Gli ingressi Bluetooth, ottico e AUX permettono di collegare qualsiasi sorgente, mentre i controlli di bassi e acuti permettono di adattare il suono all'ambiente. Inoltre, i tweeter in seta restituiscono alti morbidi e mai affaticanti. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 119.9
    },
    {
        id: 295,
        name: "Lampada Monitor Drago Air 7",
        descrizione: "La Lampada Monitor Drago Air 7 rende più piacevoli e meno faticose le sessioni di lavoro serali. Si aggancia a monitor piatti e curvi senza viti né adesivi, mentre l'alimentazione USB-C elimina la necessità di prese aggiuntive. Inoltre, il fascio luminoso asimmetrico illumina la scrivania senza abbagliare. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Ideale sia per l'ufficio sia per il setup di casa. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 37.49
    },
    {
        id: 296,
        name: "Supporto Laptop Silenzio One 9",
        descrizione: "Il Supporto Laptop Silenzio One 9 è l'accessorio ergonomico che trasforma il modo di lavorare. Il design aperto favorisce la circolazione dell'aria e riduce le temperature, mentre la struttura in alluminio sostiene portatili fino a 27 pollici. Inoltre, la base stabile non oscilla nemmeno durante la digitazione più intensa. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 33.99
    },
    {
        id: 297,
        name: "Router Levante One Blu Oceano",
        descrizione: "Il Router Levante One Blu Oceano elimina le zone morte e i cali di segnale una volta per tutte. La porta WAN da 2,5 Gbps sfrutta al massimo le connessioni in fibra ottica, mentre la tecnologia mesh consente di estendere la copertura aggiungendo altri nodi. Inoltre, lo standard Wi-Fi 6 raggiunge velocità combinate fino a 3 Gbps. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 52.49
    },
    {
        id: 298,
        name: "Supporto Laptop Lince Evo 7",
        descrizione: "Il Supporto Laptop Lince Evo 7 è l'accessorio ergonomico che trasforma il modo di lavorare. La struttura in alluminio sostiene portatili fino a 27 pollici, mentre il design aperto favorisce la circolazione dell'aria e riduce le temperature. Inoltre, i gommini in silicone proteggono il portatile da graffi e scivolamenti. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 43.9
    },
    {
        id: 299,
        name: "Hub USB Aquila Prime 9",
        descrizione: "L'Hub USB Aquila Prime 9 mette ordine tra cavi e periferiche in un attimo. Il trasferimento dati a 10 Gbps rende rapidissime le copie di file, mentre la ricarica passthrough fino a 100 W alimenta il portatile mentre lavori. Inoltre, la porta Ethernet gigabit assicura una connessione cablata stabile. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 96.9
    },
    {
        id: 300,
        name: "Mouse Iride Prime 6",
        descrizione: "Il Mouse Iride Prime 6 è il compagno ideale per lunghe sessioni di lavoro e di gioco. La rotella in metallo con scorrimento a frizione variabile rende rapidissima la navigazione di documenti lunghi, mentre la batteria ricaricabile via USB-C offre fino a 40 ore di autonomia con una singola carica. Inoltre, gli switch ottici sono certificati per oltre 90 milioni di clic. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 95.99
    },
    {
        id: 301,
        name: "Router Cobalto Evo Sabbia",
        descrizione: "Il Router Cobalto Evo Sabbia elimina le zone morte e i cali di segnale una volta per tutte. La tecnologia mesh consente di estendere la copertura aggiungendo altri nodi, mentre la priorità QoS dà la precedenza a gaming e videochiamate. Inoltre, gestisce senza fatica oltre 64 dispositivi connessi contemporaneamente. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 149.99
    },
    {
        id: 302,
        name: "Stampante Fenice Elite Grigio Siderale",
        descrizione: "La Stampante Fenice Elite Grigio Siderale unisce costi di stampa contenuti a prestazioni di livello professionale. La stampa fronte/retro automatica riduce il consumo di carta, mentre lo scanner piano ad alta risoluzione digitalizza documenti e fotografie in pochi secondi. Inoltre, la modalità silenziosa consente di stampare anche di notte senza disturbare. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 433.9
    },
    {
        id: 303,
        name: "Controller Scirocco Prime Rosso Corsa",
        descrizione: "Il Controller Scirocco Prime Rosso Corsa rende ogni sessione di gioco più coinvolgente e reattiva. È compatibile con PC, smartphone e le principali console, mentre i grilletti con corsa regolabile si adattano a sparatutto e giochi di guida. Inoltre, la vibrazione a doppio motore restituisce ogni impatto e ogni esplosione. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 147.99
    },
    {
        id: 304,
        name: "Cuffie Eco Elite Titanio",
        descrizione: "Le Cuffie Eco Elite Titanio uniscono comfort da indossare tutto il giorno e una resa acustica sorprendente. La cancellazione attiva del rumore riduce il brusio di uffici, treni e aerei, mentre la modalità trasparenza permette di sentire l'ambiente circostante senza toglierle. Inoltre, i driver dinamici da 45 mm offrono bassi profondi e alti cristallini. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 343.99
    },
    {
        id: 305,
        name: "Webcam Phantom Elite Titanio",
        descrizione: "La Webcam Phantom Elite Titanio porta una qualità d'immagine professionale sulla tua scrivania. La correzione automatica della luce compensa ambienti troppo bui o controluce, mentre la registrazione a 60 fps rende fluidi anche streaming e tutorial. Inoltre, l'autofocus rapido mantiene il volto sempre a fuoco anche quando ti muovi. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 192.49
    },
    {
        id: 306,
        name: "Microfono Brezza Ultra Rosso Corsa",
        descrizione: "Il Microfono Brezza Ultra Rosso Corsa dà alla tua voce la presenza e la chiarezza di uno studio di registrazione. Il pattern cardioide isola la voce dai rumori ambientali, mentre si collega in USB-C senza bisogno di interfacce audio esterne. Inoltre, il controllo del guadagno integrato permette regolazioni rapide al volo. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 229.9
    },
    {
        id: 307,
        name: "Mouse Pulsar Evo 2",
        descrizione: "Il Mouse Pulsar Evo 2 è il compagno ideale per lunghe sessioni di lavoro e di gioco. I piedini in PTFE puro assicurano uno scorrimento silenzioso e privo di attrito, mentre gli switch ottici sono certificati per oltre 70 milioni di clic. Inoltre, la rotella in metallo con scorrimento a frizione variabile rende rapidissima la navigazione di documenti lunghi. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 56.9
    },
    {
        id: 308,
        name: "Cuffie Phantom Plus Titanio",
        descrizione: "Le Cuffie Phantom Plus Titanio uniscono comfort da indossare tutto il giorno e una resa acustica sorprendente. La batteria assicura fino a 80 ore di ascolto, con ricarica rapida in pochi minuti, mentre i cuscinetti in memory foam rivestiti in tessuto traspirante non affaticano le orecchie. Inoltre, la modalità trasparenza permette di sentire l'ambiente circostante senza toglierle. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 109.99
    },
    {
        id: 309,
        name: "Microfono Glaciale Evo Blu Oceano",
        descrizione: "Il Microfono Glaciale Evo Blu Oceano dà alla tua voce la presenza e la chiarezza di uno studio di registrazione. La registrazione a 24 bit/192 kHz garantisce una qualità audio professionale, mentre la capsula a condensatore cattura la voce con dettaglio e naturalezza. Inoltre, il pattern cardioide isola la voce dai rumori ambientali. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 121.99
    },
    {
        id: 310,
        name: "Tappetino Fulmine Ultra 6",
        descrizione: "Il Tappetino Fulmine Ultra 6 protegge la scrivania e migliora lo scorrimento del mouse. Il trattamento idrorepellente protegge da schizzi e macchie, mentre la base in gomma naturale antiscivolo lo mantiene fermo in ogni situazione. Inoltre, la superficie in microtessuto è ottimizzata per sensori ottici e laser. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 57.99
    },
    {
        id: 311,
        name: "Lampada Monitor Quasar Max Rosso Corsa",
        descrizione: "La Lampada Monitor Quasar Max Rosso Corsa illumina la scrivania in modo uniforme senza creare riflessi sullo schermo. Si aggancia a monitor piatti e curvi senza viti né adesivi, mentre la temperatura colore è regolabile da 2700 K a 6500 K. Inoltre, il fascio luminoso asimmetrico illumina la scrivania senza abbagliare. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 113.99
    },
    {
        id: 312,
        name: "Lampada Monitor Stratos Lite 2",
        descrizione: "La Lampada Monitor Stratos Lite 2 illumina la scrivania in modo uniforme senza creare riflessi sullo schermo. Il fascio luminoso asimmetrico illumina la scrivania senza abbagliare, mentre la retroilluminazione RGB posteriore crea un'atmosfera rilassante. Inoltre, il controller wireless a rotella permette regolazioni immediate. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 28.49
    },
    {
        id: 313,
        name: "Router Titan Elite Lavanda",
        descrizione: "Il Router Titan Elite Lavanda porta una connessione veloce e stabile in ogni angolo della casa. Le antenne ad alto guadagno con beamforming indirizzano il segnale verso i dispositivi, mentre la tecnologia mesh consente di estendere la copertura aggiungendo altri nodi. Inoltre, la porta WAN da 2,5 Gbps sfrutta al massimo le connessioni in fibra ottica. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 338.9
    },
    {
        id: 314,
        name: "Tastiera Opale Plus 9",
        descrizione: "La Tastiera Opale Plus 9 porta sulla scrivania la qualità costruttiva delle tastiere da collezione. Il layout italiano completo include tastierino numerico e tasti multimediali dedicati, mentre i keycap in PBT double-shot resistono all'usura e non diventano lucidi con il tempo. Inoltre, la retroilluminazione RGB per singolo tasto offre oltre 24 effetti configurabili. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 74.9
    },
    {
        id: 315,
        name: "Router Cobra Lite Grigio Siderale",
        descrizione: "Il Router Cobra Lite Grigio Siderale porta una connessione veloce e stabile in ogni angolo della casa. Gestisce senza fatica oltre 64 dispositivi connessi contemporaneamente, mentre lo standard Wi-Fi 6 raggiunge velocità combinate fino a 3 Gbps. Inoltre, la priorità QoS dà la precedenza a gaming e videochiamate. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 52.9
    },
    {
        id: 316,
        name: "Tappetino Altair Ultra Titanio",
        descrizione: "Il Tappetino Altair Ultra Titanio è il dettaglio che fa la differenza tra un buon setup e uno eccellente. I bordi cuciti impediscono lo sfilacciamento nel tempo, mentre il formato esteso da 90x40 cm ospita comodamente mouse e tastiera. Inoltre, il trattamento idrorepellente protegge da schizzi e macchie. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 52.49
    },
    {
        id: 317,
        name: "Controller Orione Max Rosso Corsa",
        descrizione: "Il Controller Orione Max Rosso Corsa mette nelle tue mani il controllo totale di ogni partita. L'impugnatura gommata antiscivolo resta salda anche nelle partite più intense, mentre la batteria garantisce fino a 30 ore di gioco senza interruzioni. Inoltre, la vibrazione a doppio motore restituisce ogni impatto e ogni esplosione. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 169.99
    },
    {
        id: 318,
        name: "Tastiera Cometa One 2",
        descrizione: "La Tastiera Cometa One 2 combina un design essenziale a una risposta dei tasti sorprendentemente reattiva. La retroilluminazione RGB per singolo tasto offre oltre 18 effetti configurabili, mentre la connessione tri-mode (Bluetooth, 2,4 GHz e cavo) si adatta a qualsiasi postazione. Inoltre, il telaio in alluminio spazzolato elimina flessioni e vibrazioni durante la digitazione. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 56.99
    },
    {
        id: 319,
        name: "Casse Vortex Elite Lavanda",
        descrizione: "Le Casse Vortex Elite Lavanda uniscono un design raffinato a una resa sonora di alto livello. I tweeter in seta restituiscono alti morbidi e mai affaticanti, mentre il telecomando incluso consente di gestire il volume dal divano. Inoltre, i woofer in fibra di carta garantiscono bassi caldi e ben controllati. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 287.9
    },
    {
        id: 320,
        name: "Hub USB Dolomia One Grafite",
        descrizione: "L'Hub USB Dolomia One Grafite mette ordine tra cavi e periferiche in un attimo. La scocca in alluminio dissipa il calore anche sotto carico, mentre è plug-and-play e compatibile con Windows, macOS e Linux. Inoltre, offre 9 porte, tra cui USB-A, USB-C, HDMI e lettore di schede SD. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 34.99
    },
    {
        id: 321,
        name: "Supporto Laptop Mistral Prime Lavanda",
        descrizione: "Il Supporto Laptop Mistral Prime Lavanda migliora la postura e il raffreddamento del tuo portatile. L'altezza e l'inclinazione sono regolabili su più livelli, mentre i gommini in silicone proteggono il portatile da graffi e scivolamenti. Inoltre, la struttura in alluminio sostiene portatili fino a 34 pollici. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 57.9
    },
    {
        id: 322,
        name: "Tastiera Levante Elite Verde Salvia",
        descrizione: "La Tastiera Levante Elite Verde Salvia porta sulla scrivania la qualità costruttiva delle tastiere da collezione. Il layout italiano completo include tastierino numerico e tasti multimediali dedicati, mentre i keycap in PBT double-shot resistono all'usura e non diventano lucidi con il tempo. Inoltre, il telaio in alluminio spazzolato elimina flessioni e vibrazioni durante la digitazione. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 194.99
    },
    {
        id: 323,
        name: "Tappetino Nimbus Studio 3",
        descrizione: "Il Tappetino Nimbus Studio 3 offre la superficie perfetta per movimenti precisi e controllati. Il trattamento idrorepellente protegge da schizzi e macchie, mentre il formato esteso da 120x60 cm ospita comodamente mouse e tastiera. Inoltre, i bordi cuciti impediscono lo sfilacciamento nel tempo. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 47.9
    },
    {
        id: 324,
        name: "Tappetino Polaris Lite Lavanda",
        descrizione: "Il Tappetino Polaris Lite Lavanda è il dettaglio che fa la differenza tra un buon setup e uno eccellente. I bordi cuciti impediscono lo sfilacciamento nel tempo, mentre la base in gomma naturale antiscivolo lo mantiene fermo in ogni situazione. Inoltre, lo spessore di 5 mm offre il giusto sostegno al polso. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 17.99
    },
    {
        id: 325,
        name: "Cuffie Tuono One 9",
        descrizione: "Le Cuffie Tuono One 9 portano l'esperienza d'ascolto a un livello superiore, ovunque tu sia. I driver dinamici da 50 mm offrono bassi profondi e alti cristallini, mentre i cuscinetti in memory foam rivestiti in tessuto traspirante non affaticano le orecchie. Inoltre, la struttura pieghevole e la custodia rigida le rendono perfette in viaggio. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 90.9
    },
    {
        id: 326,
        name: "Stampante Nova Plus Blu Oceano",
        descrizione: "La Stampante Nova Plus Blu Oceano è la multifunzione pensata per chi vuole semplicità senza rinunciare alla qualità. La connessione Wi-Fi e l'app dedicata permettono di stampare direttamente dallo smartphone, mentre le stampe fotografiche a colori hanno toni vividi e sfumature morbide. Inoltre, stampa fino a 22 pagine al minuto con testi nitidi e neri profondi. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 244.49
    },
    {
        id: 327,
        name: "Tastiera Astra Ultra 8",
        descrizione: "La Tastiera Astra Ultra 8 regala una sensazione di digitazione solida, precisa e appagante. Gli switch meccanici hot-swap si sostituiscono senza saldature, per personalizzare il feeling di ogni tasto, mentre la connessione tri-mode (Bluetooth, 2,4 GHz e cavo) si adatta a qualsiasi postazione. Inoltre, la batteria da 5000 mAh garantisce settimane di utilizzo senza ricarica. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 199.49
    },
    {
        id: 328,
        name: "Tastiera Eco Lite Lavanda",
        descrizione: "La Tastiera Eco Lite Lavanda è pensata per chi scrive molto e non vuole scendere a compromessi sul comfort. La batteria da 2000 mAh garantisce settimane di utilizzo senza ricarica, mentre il telaio in alluminio spazzolato elimina flessioni e vibrazioni durante la digitazione. Inoltre, la retroilluminazione RGB per singolo tasto offre oltre 24 effetti configurabili. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 65.99
    },
    {
        id: 329,
        name: "Tappetino Titan Plus Bianco Artico",
        descrizione: "Il Tappetino Titan Plus Bianco Artico protegge la scrivania e migliora lo scorrimento del mouse. Lo spessore di 3 mm offre il giusto sostegno al polso, mentre i bordi cuciti impediscono lo sfilacciamento nel tempo. Inoltre, la superficie in microtessuto è ottimizzata per sensori ottici e laser. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 27.49
    },
    {
        id: 330,
        name: "Microfono Fenice Elite Lavanda",
        descrizione: "Il Microfono Fenice Elite Lavanda porta qualità broadcast in qualsiasi stanza della casa. La capsula a condensatore cattura la voce con dettaglio e naturalezza, mentre il pulsante mute touch con indicatore LED evita imbarazzi durante le dirette. Inoltre, la registrazione a 24 bit/48 kHz garantisce una qualità audio professionale. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 214.99
    },
    {
        id: 331,
        name: "Webcam Condor Pro Lavanda",
        descrizione: "La Webcam Condor Pro Lavanda ti fa apparire al meglio in ogni videochiamata, riunione o diretta. Il sensore in risoluzione 4K cattura ogni dettaglio con colori naturali, mentre funziona in modalità plug-and-play senza driver con tutte le principali piattaforme di videochiamata. Inoltre, la correzione automatica della luce compensa ambienti troppo bui o controluce. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 121.9
    },
    {
        id: 332,
        name: "Mouse Condor Ultra 5",
        descrizione: "Il Mouse Condor Ultra 5 unisce una forma ergonomica studiata a lungo a un sensore di nuova generazione. Il peso ridotto a soli 72 grammi riduce l'affaticamento della mano, mentre la modalità multi-dispositivo consente di passare da PC a tablet con un pulsante. Inoltre, i pulsanti laterali programmabili permettono di richiamare scorciatoie e macro con un solo tocco. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 139.99
    },
    {
        id: 333,
        name: "Cuffie Astra One 8",
        descrizione: "Le Cuffie Astra One 8 uniscono comfort da indossare tutto il giorno e una resa acustica sorprendente. I driver dinamici da 45 mm offrono bassi profondi e alti cristallini, mentre la modalità trasparenza permette di sentire l'ambiente circostante senza toglierle. Inoltre, il microfono con riduzione del rumore rende chiarissime chiamate e videoconferenze. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 82.99
    },
    {
        id: 334,
        name: "Hub USB Nova Elite Nero Notte",
        descrizione: "L'Hub USB Nova Elite Nero Notte trasforma qualsiasi portatile in una vera postazione desktop. L'uscita HDMI supporta monitor esterni fino a 4K a 60 Hz, mentre la scocca in alluminio dissipa il calore anche sotto carico. Inoltre, la ricarica passthrough fino a 100 W alimenta il portatile mentre lavori. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 128.49
    },
    {
        id: 335,
        name: "Casse Brezza Plus 7",
        descrizione: "Le Casse Brezza Plus 7 trasformano la scrivania in un piccolo studio d'ascolto. L'illuminazione RGB sincronizzata con la musica crea atmosfera, mentre la potenza complessiva di 20 W assicura un volume pieno senza distorsioni. Inoltre, i controlli di bassi e acuti permettono di adattare il suono all'ambiente. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 135.49
    },
    {
        id: 336,
        name: "Mouse Scoglio One 8",
        descrizione: "Il Mouse Scoglio One 8 trasforma ogni clic in un gesto rapido, fluido e naturale. Il sensore ottico da 26000 DPI traccia ogni spostamento senza scatti anche sulle superfici più difficili, mentre la rotella in metallo con scorrimento a frizione variabile rende rapidissima la navigazione di documenti lunghi. Inoltre, il peso ridotto a soli 58 grammi riduce l'affaticamento della mano. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 20.9
    },
    {
        id: 337,
        name: "SSD Esterno Opale Evo Verde Salvia",
        descrizione: "L'SSD Esterno Opale Evo Verde Salvia è il modo più rapido per ampliare lo spazio di archiviazione. La connessione USB-C è compatibile con PC, Mac, tablet e console, mentre la scocca resistente a urti e cadute protegge i dati anche in viaggio. Inoltre, le velocità di lettura fino a 1050 MB/s azzerano i tempi di attesa. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 127.9
    },
    {
        id: 338,
        name: "Monitor Scoglio Lite Blu Oceano",
        descrizione: "Il Monitor Scoglio Lite Blu Oceano ridefinisce la postazione con cornici sottilissime e un pannello di alto livello. La frequenza di aggiornamento di 144 Hz rende ogni movimento incredibilmente fluido, mentre il supporto HDR esalta contrasti e luminosità nei contenuti compatibili. Inoltre, il pannello IPS da 32 pollici con risoluzione Full HD restituisce dettagli nitidissimi. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 272.9
    },
    {
        id: 339,
        name: "Webcam Brezza One 4",
        descrizione: "La Webcam Brezza One 4 è la soluzione semplice e immediata per chi lavora o studia da remoto. La correzione automatica della luce compensa ambienti troppo bui o controluce, mentre l'autofocus rapido mantiene il volto sempre a fuoco anche quando ti muovi. Inoltre, la clip universale si fissa saldamente a monitor, portatili e treppiedi. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 58.9
    },
    {
        id: 340,
        name: "Router Onda Evo Grigio Siderale",
        descrizione: "Il Router Onda Evo Grigio Siderale elimina le zone morte e i cali di segnale una volta per tutte. La tecnologia mesh consente di estendere la copertura aggiungendo altri nodi, mentre il parental control integrato permette di gestire orari e contenuti per ogni membro della famiglia. Inoltre, lo standard Wi-Fi 6E raggiunge velocità combinate fino a 3 Gbps. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 164.9
    },
    {
        id: 341,
        name: "Tastiera Dolomia Core 1",
        descrizione: "La Tastiera Dolomia Core 1 regala una sensazione di digitazione solida, precisa e appagante. Il telaio in alluminio spazzolato elimina flessioni e vibrazioni durante la digitazione, mentre gli switch meccanici hot-swap si sostituiscono senza saldature, per personalizzare il feeling di ogni tasto. Inoltre, il layout italiano completo include tastierino numerico e tasti multimediali dedicati. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 109.99
    },
    {
        id: 342,
        name: "Mouse Altair Pro Blu Oceano",
        descrizione: "Il Mouse Altair Pro Blu Oceano unisce una forma ergonomica studiata a lungo a un sensore di nuova generazione. Il peso ridotto a soli 72 grammi riduce l'affaticamento della mano, mentre i pulsanti laterali programmabili permettono di richiamare scorciatoie e macro con un solo tocco. Inoltre, la batteria ricaricabile via USB-C offre fino a 60 ore di autonomia con una singola carica. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 85.99
    },
    {
        id: 343,
        name: "Tastiera Stratos One 1",
        descrizione: "La Tastiera Stratos One 1 porta sulla scrivania la qualità costruttiva delle tastiere da collezione. Gli switch meccanici hot-swap si sostituiscono senza saldature, per personalizzare il feeling di ogni tasto, mentre il poggiapolsi magnetico in similpelle sostiene i polsi nelle sessioni più lunghe. Inoltre, il telaio in alluminio spazzolato elimina flessioni e vibrazioni durante la digitazione. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 47.99
    },
    {
        id: 344,
        name: "Hub USB Orione Lite Grafite",
        descrizione: "L'Hub USB Orione Lite Grafite è la soluzione definitiva alla carenza di porte dei laptop moderni. La porta Ethernet gigabit assicura una connessione cablata stabile, mentre la scocca in alluminio dissipa il calore anche sotto carico. Inoltre, il trasferimento dati a 10 Gbps rende rapidissime le copie di file. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 37.99
    },
    {
        id: 345,
        name: "Monitor Polaris One 2",
        descrizione: "Il Monitor Polaris One 2 ridefinisce la postazione con cornici sottilissime e un pannello di alto livello. Il supporto HDR esalta contrasti e luminosità nei contenuti compatibili, mentre il supporto ergonomico regolabile in altezza, inclinazione e rotazione si adatta a ogni postura. Inoltre, la tecnologia flicker-free e il filtro per la luce blu riducono l'affaticamento visivo. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 205.99
    },
    {
        id: 346,
        name: "Stampante Riflesso Air Sabbia",
        descrizione: "La Stampante Riflesso Air Sabbia è la multifunzione pensata per chi vuole semplicità senza rinunciare alla qualità. Il sistema a serbatoi ricaricabili abbatte drasticamente il costo per pagina, mentre il display touch a colori rende intuitiva ogni operazione. Inoltre, la stampa fronte/retro automatica riduce il consumo di carta. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 79.49
    },
    {
        id: 347,
        name: "Webcam Meridiano Prime Nero Notte",
        descrizione: "La Webcam Meridiano Prime Nero Notte ti fa apparire al meglio in ogni videochiamata, riunione o diretta. Il sensore in risoluzione Full HD 1080p cattura ogni dettaglio con colori naturali, mentre la clip universale si fissa saldamente a monitor, portatili e treppiedi. Inoltre, la correzione automatica della luce compensa ambienti troppo bui o controluce. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 136.49
    },
    {
        id: 348,
        name: "Tappetino Aquila One 8",
        descrizione: "Il Tappetino Aquila One 8 dà ordine e stile a tutta la postazione di lavoro. Il trattamento idrorepellente protegge da schizzi e macchie, mentre lo spessore di 4 mm offre il giusto sostegno al polso. Inoltre, la superficie in microtessuto è ottimizzata per sensori ottici e laser. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 18.99
    },
    {
        id: 349,
        name: "Cuffie Altair Core 3",
        descrizione: "Le Cuffie Altair Core 3 uniscono comfort da indossare tutto il giorno e una resa acustica sorprendente. La modalità a bassa latenza sincronizza perfettamente audio e video nei giochi, mentre il microfono con riduzione del rumore rende chiarissime chiamate e videoconferenze. Inoltre, i cuscinetti in memory foam rivestiti in tessuto traspirante non affaticano le orecchie. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 139.9
    },
    {
        id: 350,
        name: "Stampante Fenice One 1",
        descrizione: "La Stampante Fenice One 1 porta in casa e in ufficio stampe nitide, veloci e affidabili. La stampa fronte/retro automatica riduce il consumo di carta, mentre lo scanner piano ad alta risoluzione digitalizza documenti e fotografie in pochi secondi. Inoltre, il vassoio da 250 fogli limita le interruzioni per il caricamento della carta. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Ideale sia per l'ufficio sia per il setup di casa. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 131.99
    },
    {
        id: 351,
        name: "Monitor Carbonio Lite 5",
        descrizione: "Il Monitor Carbonio Lite 5 offre una qualità d'immagine che fa la differenza tanto nel lavoro quanto nel gioco. Il pannello IPS da 27 pollici con risoluzione QHD restituisce dettagli nitidissimi, mentre la copertura del 99% dello spazio colore sRGB lo rende adatto a fotoritocco e grafica. Inoltre, la tecnologia flicker-free e il filtro per la luce blu riducono l'affaticamento visivo. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 256.99
    },
    {
        id: 352,
        name: "Mouse Opale Core 2",
        descrizione: "Il Mouse Opale Core 2 trasforma ogni clic in un gesto rapido, fluido e naturale. I piedini in PTFE puro assicurano uno scorrimento silenzioso e privo di attrito, mentre il sensore ottico da 26000 DPI traccia ogni spostamento senza scatti anche sulle superfici più difficili. Inoltre, gli switch ottici sono certificati per oltre 70 milioni di clic. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 76.99
    },
    {
        id: 353,
        name: "Casse Onice Plus 9",
        descrizione: "Le Casse Onice Plus 9 sono la scelta ideale per musica, film e videogiochi. Il telecomando incluso consente di gestire il volume dal divano, mentre gli ingressi Bluetooth, ottico e AUX permettono di collegare qualsiasi sorgente. Inoltre, le casse in legno MDF riducono le risonanze indesiderate. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 141.9
    },
    {
        id: 354,
        name: "Monitor Andromeda Pro 3",
        descrizione: "Il Monitor Andromeda Pro 3 apre una finestra nitida e brillante su tutto ciò che crei e guardi. Il pannello IPS da 32 pollici con risoluzione WQHD restituisce dettagli nitidissimi, mentre la frequenza di aggiornamento di 144 Hz rende ogni movimento incredibilmente fluido. Inoltre, la copertura del 99% dello spazio colore sRGB lo rende adatto a fotoritocco e grafica. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 614.99
    },
    {
        id: 355,
        name: "Hub USB Nova Pro 4",
        descrizione: "L'Hub USB Nova Pro 4 trasforma qualsiasi portatile in una vera postazione desktop. È plug-and-play e compatibile con Windows, macOS e Linux, mentre la scocca in alluminio dissipa il calore anche sotto carico. Inoltre, la porta Ethernet gigabit assicura una connessione cablata stabile. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 94.99
    },
    {
        id: 356,
        name: "Controller Zenith Core 9",
        descrizione: "Il Controller Zenith Core 9 rende ogni sessione di gioco più coinvolgente e reattiva. Gli stick con sensori a effetto Hall eliminano il fastidioso drift nel tempo, mentre i grilletti con corsa regolabile si adattano a sparatutto e giochi di guida. Inoltre, è compatibile con PC, smartphone e le principali console. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 77.99
    },
    {
        id: 357,
        name: "Supporto Laptop Scoglio Studio Sabbia",
        descrizione: "Il Supporto Laptop Scoglio Studio Sabbia unisce eleganza minimalista e solidità a tutta prova. La base stabile non oscilla nemmeno durante la digitazione più intensa, mentre i gommini in silicone proteggono il portatile da graffi e scivolamenti. Inoltre, si ripiega in pochi secondi e sta comodamente in uno zaino. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 67.9
    },
    {
        id: 358,
        name: "Supporto Laptop Nimbus Max 3",
        descrizione: "Il Supporto Laptop Nimbus Max 3 è l'accessorio ergonomico che trasforma il modo di lavorare. L'altezza e l'inclinazione sono regolabili su più livelli, mentre si ripiega in pochi secondi e sta comodamente in uno zaino. Inoltre, la base stabile non oscilla nemmeno durante la digitazione più intensa. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 84.99
    },
    {
        id: 359,
        name: "Casse Solaris Air Nero Notte",
        descrizione: "Le Casse Solaris Air Nero Notte riempiono la stanza con un suono potente e sorprendentemente definito. I woofer in fibra di carta garantiscono bassi caldi e ben controllati, mentre il telecomando incluso consente di gestire il volume dal divano. Inoltre, i tweeter in seta restituiscono alti morbidi e mai affaticanti. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 94.9
    },
    {
        id: 360,
        name: "Hub USB Polaris Lite 4",
        descrizione: "L'Hub USB Polaris Lite 4 è la soluzione definitiva alla carenza di porte dei laptop moderni. Il trasferimento dati a 10 Gbps rende rapidissime le copie di file, mentre la scocca in alluminio dissipa il calore anche sotto carico. Inoltre, la porta Ethernet gigabit assicura una connessione cablata stabile. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Ideale sia per l'ufficio sia per il setup di casa. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 25.49
    },
    {
        id: 361,
        name: "Supporto Laptop Solaris Air 6",
        descrizione: "Il Supporto Laptop Solaris Air 6 unisce eleganza minimalista e solidità a tutta prova. Il design aperto favorisce la circolazione dell'aria e riduce le temperature, mentre la struttura in alluminio sostiene portatili fino a 24 pollici. Inoltre, si ripiega in pochi secondi e sta comodamente in uno zaino. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 34.9
    },
    {
        id: 362,
        name: "Tastiera Lince Prime 8",
        descrizione: "La Tastiera Lince Prime 8 combina un design essenziale a una risposta dei tasti sorprendentemente reattiva. Il poggiapolsi magnetico in similpelle sostiene i polsi nelle sessioni più lunghe, mentre il telaio in alluminio spazzolato elimina flessioni e vibrazioni durante la digitazione. Inoltre, gli switch meccanici hot-swap si sostituiscono senza saldature, per personalizzare il feeling di ogni tasto. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 134.99
    },
    {
        id: 363,
        name: "Casse Andromeda Core Lavanda",
        descrizione: "Le Casse Andromeda Core Lavanda sono la scelta ideale per musica, film e videogiochi. L'illuminazione RGB sincronizzata con la musica crea atmosfera, mentre i tweeter in seta restituiscono alti morbidi e mai affaticanti. Inoltre, i woofer in fibra di carta garantiscono bassi caldi e ben controllati. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 136.9
    },
    {
        id: 364,
        name: "Microfono Andromeda Pro Grigio Siderale",
        descrizione: "Il Microfono Andromeda Pro Grigio Siderale rende ogni parola limpida, calda e piena di carattere. La capsula a condensatore cattura la voce con dettaglio e naturalezza, mentre l'uscita cuffie a latenza zero consente di monitorare la propria voce in tempo reale. Inoltre, si collega in USB-C senza bisogno di interfacce audio esterne. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 191.99
    },
    {
        id: 365,
        name: "Tastiera Eclipse One Bianco Artico",
        descrizione: "La Tastiera Eclipse One Bianco Artico regala una sensazione di digitazione solida, precisa e appagante. Il poggiapolsi magnetico in similpelle sostiene i polsi nelle sessioni più lunghe, mentre lo strato di smorzamento interno in silicone attenua il rumore di battitura. Inoltre, la connessione tri-mode (Bluetooth, 2,4 GHz e cavo) si adatta a qualsiasi postazione. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 48.99
    },
    {
        id: 366,
        name: "SSD Esterno Dolomia Air 4",
        descrizione: "L'SSD Esterno Dolomia Air 4 è pensato per fotografi, videomaker e professionisti in movimento. Le velocità di lettura fino a 2000 MB/s azzerano i tempi di attesa, mentre la capacità di 1 TB offre spazio per migliaia di foto, video e progetti. Inoltre, la crittografia hardware AES a 256 bit protegge i dati sensibili. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 108.99
    },
    {
        id: 367,
        name: "Monitor Carbonio One 5",
        descrizione: "Il Monitor Carbonio One 5 offre una qualità d'immagine che fa la differenza tanto nel lavoro quanto nel gioco. Le cornici ultrasottili su tre lati lo rendono perfetto per configurazioni multi-monitor, mentre il supporto HDR esalta contrasti e luminosità nei contenuti compatibili. Inoltre, la tecnologia flicker-free e il filtro per la luce blu riducono l'affaticamento visivo. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 226.9
    },
    {
        id: 368,
        name: "Lampada Monitor Glaciale Pro 4",
        descrizione: "La Lampada Monitor Glaciale Pro 4 rende più piacevoli e meno faticose le sessioni di lavoro serali. La luminosità si adatta automaticamente alla luce dell'ambiente, mentre la retroilluminazione RGB posteriore crea un'atmosfera rilassante. Inoltre, la temperatura colore è regolabile da 2700 K a 6500 K. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 91.9
    },
    {
        id: 369,
        name: "Microfono Vertex Air Bianco Artico",
        descrizione: "Il Microfono Vertex Air Bianco Artico è pensato per podcaster, streamer e musicisti che cercano un suono pulito. Il controllo del guadagno integrato permette regolazioni rapide al volo, mentre si collega in USB-C senza bisogno di interfacce audio esterne. Inoltre, la capsula a condensatore cattura la voce con dettaglio e naturalezza. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Ideale sia per l'ufficio sia per il setup di casa. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 43.99
    },
    {
        id: 370,
        name: "Casse Meridiano Lite Lavanda",
        descrizione: "Le Casse Meridiano Lite Lavanda uniscono un design raffinato a una resa sonora di alto livello. Gli ingressi Bluetooth, ottico e AUX permettono di collegare qualsiasi sorgente, mentre i controlli di bassi e acuti permettono di adattare il suono all'ambiente. Inoltre, i woofer in fibra di carta garantiscono bassi caldi e ben controllati. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 67.49
    },
    {
        id: 371,
        name: "SSD Esterno Vetta One Verde Salvia",
        descrizione: "L'SSD Esterno Vetta One Verde Salvia unisce dimensioni tascabili a prestazioni da disco interno. La certificazione IP65 lo difende da polvere e schizzi d'acqua, mentre la crittografia hardware AES a 256 bit protegge i dati sensibili. Inoltre, le velocità di lettura fino a 2000 MB/s azzerano i tempi di attesa. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 79.49
    },
    {
        id: 372,
        name: "Lampada Monitor Atlas Core Lavanda",
        descrizione: "La Lampada Monitor Atlas Core Lavanda è il tocco di luce che mancava alla tua postazione. Il controller wireless a rotella permette regolazioni immediate, mentre il fascio luminoso asimmetrico illumina la scrivania senza abbagliare. Inoltre, si aggancia a monitor piatti e curvi senza viti né adesivi. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 71.9
    },
    {
        id: 373,
        name: "Monitor Meridiano Plus Grafite",
        descrizione: "Il Monitor Meridiano Plus Grafite offre una qualità d'immagine che fa la differenza tanto nel lavoro quanto nel gioco. La tecnologia flicker-free e il filtro per la luce blu riducono l'affaticamento visivo, mentre il pannello IPS da 34 pollici con risoluzione Full HD restituisce dettagli nitidissimi. Inoltre, la frequenza di aggiornamento di 144 Hz rende ogni movimento incredibilmente fluido. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 347.49
    },
    {
        id: 374,
        name: "Mouse Iride Lite 7",
        descrizione: "Il Mouse Iride Lite 7 nasce per chi vuole precisione assoluta a ogni movimento del polso. Il sensore ottico da 12000 DPI traccia ogni spostamento senza scatti anche sulle superfici più difficili, mentre gli switch ottici sono certificati per oltre 70 milioni di clic. Inoltre, la connessione wireless a bassa latenza garantisce una risposta istantanea, paragonabile a quella di un cavo. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 26.9
    },
    {
        id: 375,
        name: "Stampante Scoglio One Nero Notte",
        descrizione: "La Stampante Scoglio One Nero Notte porta in casa e in ufficio stampe nitide, veloci e affidabili. Le stampe fotografiche a colori hanno toni vividi e sfumature morbide, mentre lo scanner piano ad alta risoluzione digitalizza documenti e fotografie in pochi secondi. Inoltre, stampa fino a 15 pagine al minuto con testi nitidi e neri profondi. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 124.9
    },
    {
        id: 376,
        name: "Webcam Quasar Prime 2",
        descrizione: "La Webcam Quasar Prime 2 ti fa apparire al meglio in ogni videochiamata, riunione o diretta. Il sensore in risoluzione 4K cattura ogni dettaglio con colori naturali, mentre il campo visivo di 90° inquadra comodamente anche più persone. Inoltre, funziona in modalità plug-and-play senza driver con tutte le principali piattaforme di videochiamata. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 145.49
    },
    {
        id: 377,
        name: "Controller Maestrale Pro 6",
        descrizione: "Il Controller Maestrale Pro 6 mette nelle tue mani il controllo totale di ogni partita. La batteria garantisce fino a 60 ore di gioco senza interruzioni, mentre i grilletti con corsa regolabile si adattano a sparatutto e giochi di guida. Inoltre, l'impugnatura gommata antiscivolo resta salda anche nelle partite più intense. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 123.49
    },
    {
        id: 378,
        name: "Microfono Neon Max Rosso Corsa",
        descrizione: "Il Microfono Neon Max Rosso Corsa è pensato per podcaster, streamer e musicisti che cercano un suono pulito. Il controllo del guadagno integrato permette regolazioni rapide al volo, mentre il supporto antivibrazione e il filtro anti-pop sono inclusi nella confezione. Inoltre, la capsula a condensatore cattura la voce con dettaglio e naturalezza. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 206.49
    },
    {
        id: 379,
        name: "Lampada Monitor Polaris Studio 2",
        descrizione: "La Lampada Monitor Polaris Studio 2 illumina la scrivania in modo uniforme senza creare riflessi sullo schermo. L'alimentazione USB-C elimina la necessità di prese aggiuntive, mentre la luminosità si adatta automaticamente alla luce dell'ambiente. Inoltre, la temperatura colore è regolabile da 2700 K a 6500 K. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 95.49
    },
    {
        id: 380,
        name: "SSD Esterno Pantera Ultra Sabbia",
        descrizione: "L'SSD Esterno Pantera Ultra Sabbia mette al sicuro i tuoi file e li porta ovunque alla massima velocità. Le velocità di lettura fino a 1050 MB/s azzerano i tempi di attesa, mentre la certificazione IP65 lo difende da polvere e schizzi d'acqua. Inoltre, la crittografia hardware AES a 256 bit protegge i dati sensibili. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 326.9
    },
    {
        id: 381,
        name: "Tappetino Cristallo Lite Grigio Siderale",
        descrizione: "Il Tappetino Cristallo Lite Grigio Siderale dà ordine e stile a tutta la postazione di lavoro. Lo spessore di 3 mm offre il giusto sostegno al polso, mentre la base in gomma naturale antiscivolo lo mantiene fermo in ogni situazione. Inoltre, il formato esteso da 120x60 cm ospita comodamente mouse e tastiera. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 14.9
    },
    {
        id: 382,
        name: "Webcam Pantera Core Titanio",
        descrizione: "La Webcam Pantera Core Titanio porta una qualità d'immagine professionale sulla tua scrivania. L'autofocus rapido mantiene il volto sempre a fuoco anche quando ti muovi, mentre il campo visivo di 90° inquadra comodamente anche più persone. Inoltre, funziona in modalità plug-and-play senza driver con tutte le principali piattaforme di videochiamata. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 91.49
    },
    {
        id: 383,
        name: "Tappetino Fenice Air Grigio Siderale",
        descrizione: "Il Tappetino Fenice Air Grigio Siderale dà ordine e stile a tutta la postazione di lavoro. Il trattamento idrorepellente protegge da schizzi e macchie, mentre la base in gomma naturale antiscivolo lo mantiene fermo in ogni situazione. Inoltre, il formato esteso da 120x60 cm ospita comodamente mouse e tastiera. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 10.99
    },
    {
        id: 384,
        name: "SSD Esterno Aurora Plus 8",
        descrizione: "L'SSD Esterno Aurora Plus 8 è il modo più rapido per ampliare lo spazio di archiviazione. Il software di backup automatico incluso rende semplice proteggere i file, mentre la scocca resistente a urti e cadute protegge i dati anche in viaggio. Inoltre, la certificazione IP65 lo difende da polvere e schizzi d'acqua. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 161.9
    },
    {
        id: 385,
        name: "Hub USB Phantom Ultra 1",
        descrizione: "L'Hub USB Phantom Ultra 1 mette ordine tra cavi e periferiche in un attimo. Il trasferimento dati a 10 Gbps rende rapidissime le copie di file, mentre è plug-and-play e compatibile con Windows, macOS e Linux. Inoltre, la porta Ethernet gigabit assicura una connessione cablata stabile. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 107.99
    },
    {
        id: 386,
        name: "Casse Ossidiana Studio Bianco Artico",
        descrizione: "Le Casse Ossidiana Studio Bianco Artico riempiono la stanza con un suono potente e sorprendentemente definito. L'illuminazione RGB sincronizzata con la musica crea atmosfera, mentre la potenza complessiva di 60 W assicura un volume pieno senza distorsioni. Inoltre, i tweeter in seta restituiscono alti morbidi e mai affaticanti. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 167.99
    },
    {
        id: 387,
        name: "Tastiera Sirio Elite 7",
        descrizione: "La Tastiera Sirio Elite 7 porta sulla scrivania la qualità costruttiva delle tastiere da collezione. Gli switch meccanici hot-swap si sostituiscono senza saldature, per personalizzare il feeling di ogni tasto, mentre la batteria da 4000 mAh garantisce settimane di utilizzo senza ricarica. Inoltre, la retroilluminazione RGB per singolo tasto offre oltre 24 effetti configurabili. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 192.49
    },
    {
        id: 388,
        name: "Stampante Kraken Prime 5",
        descrizione: "La Stampante Kraken Prime 5 unisce costi di stampa contenuti a prestazioni di livello professionale. Lo scanner piano ad alta risoluzione digitalizza documenti e fotografie in pochi secondi, mentre la modalità silenziosa consente di stampare anche di notte senza disturbare. Inoltre, la connessione Wi-Fi e l'app dedicata permettono di stampare direttamente dallo smartphone. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 330.49
    },
    {
        id: 389,
        name: "Microfono Condor Ultra Sabbia",
        descrizione: "Il Microfono Condor Ultra Sabbia è pensato per podcaster, streamer e musicisti che cercano un suono pulito. Il supporto antivibrazione e il filtro anti-pop sono inclusi nella confezione, mentre il controllo del guadagno integrato permette regolazioni rapide al volo. Inoltre, la registrazione a 24 bit/96 kHz garantisce una qualità audio professionale. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 206.49
    },
    {
        id: 390,
        name: "Microfono Pulsar Max Sabbia",
        descrizione: "Il Microfono Pulsar Max Sabbia dà alla tua voce la presenza e la chiarezza di uno studio di registrazione. La capsula a condensatore cattura la voce con dettaglio e naturalezza, mentre il supporto antivibrazione e il filtro anti-pop sono inclusi nella confezione. Inoltre, la registrazione a 24 bit/48 kHz garantisce una qualità audio professionale. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 241.9
    },
    {
        id: 391,
        name: "Hub USB Ferro Ultra Sabbia",
        descrizione: "L'Hub USB Ferro Ultra Sabbia trasforma qualsiasi portatile in una vera postazione desktop. La porta Ethernet gigabit assicura una connessione cablata stabile, mentre l'uscita HDMI supporta monitor esterni fino a 4K a 60 Hz. Inoltre, la ricarica passthrough fino a 100 W alimenta il portatile mentre lavori. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 109.9
    },
    {
        id: 392,
        name: "Tappetino Astra Pro Verde Salvia",
        descrizione: "Il Tappetino Astra Pro Verde Salvia dà ordine e stile a tutta la postazione di lavoro. Il trattamento idrorepellente protegge da schizzi e macchie, mentre la base in gomma naturale antiscivolo lo mantiene fermo in ogni situazione. Inoltre, i bordi cuciti impediscono lo sfilacciamento nel tempo. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 41.49
    },
    {
        id: 393,
        name: "Tastiera Saetta Prime 3",
        descrizione: "La Tastiera Saetta Prime 3 porta sulla scrivania la qualità costruttiva delle tastiere da collezione. Gli switch meccanici hot-swap si sostituiscono senza saldature, per personalizzare il feeling di ogni tasto, mentre la retroilluminazione RGB per singolo tasto offre oltre 30 effetti configurabili. Inoltre, il telaio in alluminio spazzolato elimina flessioni e vibrazioni durante la digitazione. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 151.99
    },
    {
        id: 394,
        name: "Controller Luna One Sabbia",
        descrizione: "Il Controller Luna One Sabbia unisce un'impugnatura comoda a una precisione chirurgica. La vibrazione a doppio motore restituisce ogni impatto e ogni esplosione, mentre è compatibile con PC, smartphone e le principali console. Inoltre, la batteria garantisce fino a 30 ore di gioco senza interruzioni. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 32.49
    },
    {
        id: 395,
        name: "Hub USB Neon Prime 9",
        descrizione: "L'Hub USB Neon Prime 9 trasforma qualsiasi portatile in una vera postazione desktop. Offre 9 porte, tra cui USB-A, USB-C, HDMI e lettore di schede SD, mentre la ricarica passthrough fino a 100 W alimenta il portatile mentre lavori. Inoltre, la scocca in alluminio dissipa il calore anche sotto carico. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 100.99
    },
    {
        id: 396,
        name: "Webcam Atlas Core 4",
        descrizione: "La Webcam Atlas Core 4 trasforma lo smart working con immagini nitide e un audio limpido. L'autofocus rapido mantiene il volto sempre a fuoco anche quando ti muovi, mentre il copriobiettivo integrato garantisce privacy totale quando non la usi. Inoltre, il sensore in risoluzione 4K cattura ogni dettaglio con colori naturali. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 80.9
    },
    {
        id: 397,
        name: "Mouse Mistral Max Grafite",
        descrizione: "Il Mouse Mistral Max Grafite trasforma ogni clic in un gesto rapido, fluido e naturale. Gli switch ottici sono certificati per oltre 90 milioni di clic, mentre la batteria ricaricabile via USB-C offre fino a 60 ore di autonomia con una singola carica. Inoltre, i piedini in PTFE puro assicurano uno scorrimento silenzioso e privo di attrito. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 141.99
    },
    {
        id: 398,
        name: "SSD Esterno Nebula Air Grafite",
        descrizione: "L'SSD Esterno Nebula Air Grafite è il modo più rapido per ampliare lo spazio di archiviazione. La scocca resistente a urti e cadute protegge i dati anche in viaggio, mentre la capacità di 4 TB offre spazio per migliaia di foto, video e progetti. Inoltre, la connessione USB-C è compatibile con PC, Mac, tablet e console. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 78.99
    },
    {
        id: 399,
        name: "Router Cobalto Air 7",
        descrizione: "Il Router Cobalto Air 7 è il cuore di una rete domestica moderna, sicura e senza rallentamenti. Il parental control integrato permette di gestire orari e contenuti per ogni membro della famiglia, mentre gestisce senza fatica oltre 128 dispositivi connessi contemporaneamente. Inoltre, lo standard Wi-Fi 6E raggiunge velocità combinate fino a 5,4 Gbps. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 75.49
    },
    {
        id: 400,
        name: "Monitor Vortex Max Sabbia",
        descrizione: "Il Monitor Vortex Max Sabbia è progettato per chi pretende colori fedeli e una fluidità impeccabile. Il tempo di risposta di 1 ms elimina scie e sfocature nelle scene più veloci, mentre la copertura del 99% dello spazio colore sRGB lo rende adatto a fotoritocco e grafica. Inoltre, la tecnologia flicker-free e il filtro per la luce blu riducono l'affaticamento visivo. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 875.99
    },
    {
        id: 401,
        name: "Lampada Monitor Eco Air 7",
        descrizione: "La Lampada Monitor Eco Air 7 illumina la scrivania in modo uniforme senza creare riflessi sullo schermo. La temperatura colore è regolabile da 2700 K a 6500 K, mentre la luminosità si adatta automaticamente alla luce dell'ambiente. Inoltre, la retroilluminazione RGB posteriore crea un'atmosfera rilassante. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 45.9
    },
    {
        id: 402,
        name: "Supporto Laptop Cobra Studio 3",
        descrizione: "Il Supporto Laptop Cobra Studio 3 porta lo schermo del portatile all'altezza degli occhi, salvando schiena e collo. I gommini in silicone proteggono il portatile da graffi e scivolamenti, mentre la struttura in alluminio sostiene portatili fino a 27 pollici. Inoltre, si ripiega in pochi secondi e sta comodamente in uno zaino. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 72.99
    },
    {
        id: 403,
        name: "Cuffie Onice One 7",
        descrizione: "Le Cuffie Onice One 7 uniscono comfort da indossare tutto il giorno e una resa acustica sorprendente. La connessione Bluetooth 5.3 multipoint le collega a due dispositivi contemporaneamente, mentre la struttura pieghevole e la custodia rigida le rendono perfette in viaggio. Inoltre, la batteria assicura fino a 30 ore di ascolto, con ricarica rapida in pochi minuti. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 61.99
    },
    {
        id: 404,
        name: "Supporto Laptop Luna Air 5",
        descrizione: "Il Supporto Laptop Luna Air 5 porta lo schermo del portatile all'altezza degli occhi, salvando schiena e collo. La struttura in alluminio sostiene portatili fino a 34 pollici, mentre il design aperto favorisce la circolazione dell'aria e riduce le temperature. Inoltre, si ripiega in pochi secondi e sta comodamente in uno zaino. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 33.49
    },
    {
        id: 405,
        name: "Lampada Monitor Cobra Evo Bianco Artico",
        descrizione: "La Lampada Monitor Cobra Evo Bianco Artico libera spazio sulla scrivania portando la luce proprio dove serve. La retroilluminazione RGB posteriore crea un'atmosfera rilassante, mentre la temperatura colore è regolabile da 2700 K a 6500 K. Inoltre, si aggancia a monitor piatti e curvi senza viti né adesivi. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 62.49
    },
    {
        id: 406,
        name: "Microfono Falco Prime 6",
        descrizione: "Il Microfono Falco Prime 6 è pensato per podcaster, streamer e musicisti che cercano un suono pulito. Il supporto antivibrazione e il filtro anti-pop sono inclusi nella confezione, mentre la registrazione a 24 bit/96 kHz garantisce una qualità audio professionale. Inoltre, la capsula a condensatore cattura la voce con dettaglio e naturalezza. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 141.99
    },
    {
        id: 407,
        name: "Cuffie Fenice Evo Grafite",
        descrizione: "Le Cuffie Fenice Evo Grafite uniscono comfort da indossare tutto il giorno e una resa acustica sorprendente. I cuscinetti in memory foam rivestiti in tessuto traspirante non affaticano le orecchie, mentre la batteria assicura fino a 70 ore di ascolto, con ricarica rapida in pochi minuti. Inoltre, la cancellazione attiva del rumore riduce il brusio di uffici, treni e aerei. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 158.99
    },
    {
        id: 408,
        name: "Webcam Vulcano Evo 3",
        descrizione: "La Webcam Vulcano Evo 3 trasforma lo smart working con immagini nitide e un audio limpido. La clip universale si fissa saldamente a monitor, portatili e treppiedi, mentre l'autofocus rapido mantiene il volto sempre a fuoco anche quando ti muovi. Inoltre, la registrazione a 60 fps rende fluidi anche streaming e tutorial. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 78.49
    },
    {
        id: 409,
        name: "Tastiera Aquila Core Verde Salvia",
        descrizione: "La Tastiera Aquila Core Verde Salvia regala una sensazione di digitazione solida, precisa e appagante. La connessione tri-mode (Bluetooth, 2,4 GHz e cavo) si adatta a qualsiasi postazione, mentre il poggiapolsi magnetico in similpelle sostiene i polsi nelle sessioni più lunghe. Inoltre, gli switch meccanici hot-swap si sostituiscono senza saldature, per personalizzare il feeling di ogni tasto. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 92.99
    },
    {
        id: 410,
        name: "Casse Solaris Core 9",
        descrizione: "Le Casse Solaris Core 9 uniscono un design raffinato a una resa sonora di alto livello. I woofer in fibra di carta garantiscono bassi caldi e ben controllati, mentre i tweeter in seta restituiscono alti morbidi e mai affaticanti. Inoltre, i controlli di bassi e acuti permettono di adattare il suono all'ambiente. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 104.49
    },
    {
        id: 411,
        name: "Webcam Stratos Air 7",
        descrizione: "La Webcam Stratos Air 7 è la soluzione semplice e immediata per chi lavora o studia da remoto. Il sensore in risoluzione 2K cattura ogni dettaglio con colori naturali, mentre l'autofocus rapido mantiene il volto sempre a fuoco anche quando ti muovi. Inoltre, la clip universale si fissa saldamente a monitor, portatili e treppiedi. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 46.49
    },
    {
        id: 412,
        name: "Router Opale Air 4",
        descrizione: "Il Router Opale Air 4 porta una connessione veloce e stabile in ogni angolo della casa. Il parental control integrato permette di gestire orari e contenuti per ogni membro della famiglia, mentre la priorità QoS dà la precedenza a gaming e videochiamate. Inoltre, gestisce senza fatica oltre 64 dispositivi connessi contemporaneamente. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Ideale sia per l'ufficio sia per il setup di casa. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 79.99
    },
    {
        id: 413,
        name: "Tappetino Silenzio Core 6",
        descrizione: "Il Tappetino Silenzio Core 6 dà ordine e stile a tutta la postazione di lavoro. La superficie in microtessuto è ottimizzata per sensori ottici e laser, mentre i bordi cuciti impediscono lo sfilacciamento nel tempo. Inoltre, il formato esteso da 120x60 cm ospita comodamente mouse e tastiera. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 26.9
    },
    {
        id: 414,
        name: "SSD Esterno Scoglio Studio Sabbia",
        descrizione: "L'SSD Esterno Scoglio Studio Sabbia mette al sicuro i tuoi file e li porta ovunque alla massima velocità. La scocca resistente a urti e cadute protegge i dati anche in viaggio, mentre la connessione USB-C è compatibile con PC, Mac, tablet e console. Inoltre, la certificazione IP65 lo difende da polvere e schizzi d'acqua. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 243.9
    },
    {
        id: 415,
        name: "Controller Vulcano One Grigio Siderale",
        descrizione: "Il Controller Vulcano One Grigio Siderale è progettato per competere ai massimi livelli e vincere. Gli stick con sensori a effetto Hall eliminano il fastidioso drift nel tempo, mentre l'impugnatura gommata antiscivolo resta salda anche nelle partite più intense. Inoltre, i grilletti con corsa regolabile si adattano a sparatutto e giochi di guida. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 66.49
    },
    {
        id: 416,
        name: "Microfono Graffio Pro Verde Salvia",
        descrizione: "Il Microfono Graffio Pro Verde Salvia porta qualità broadcast in qualsiasi stanza della casa. Il pattern cardioide isola la voce dai rumori ambientali, mentre la registrazione a 24 bit/96 kHz garantisce una qualità audio professionale. Inoltre, si collega in USB-C senza bisogno di interfacce audio esterne. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 150.99
    },
    {
        id: 417,
        name: "Microfono Fenice Air 6",
        descrizione: "Il Microfono Fenice Air 6 è pensato per podcaster, streamer e musicisti che cercano un suono pulito. Il supporto antivibrazione e il filtro anti-pop sono inclusi nella confezione, mentre il pattern cardioide isola la voce dai rumori ambientali. Inoltre, il pulsante mute touch con indicatore LED evita imbarazzi durante le dirette. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 62.9
    },
    {
        id: 418,
        name: "Mouse Iride Ultra Grafite",
        descrizione: "Il Mouse Iride Ultra Grafite è il compagno ideale per lunghe sessioni di lavoro e di gioco. La connessione wireless a bassa latenza garantisce una risposta istantanea, paragonabile a quella di un cavo, mentre la rotella in metallo con scorrimento a frizione variabile rende rapidissima la navigazione di documenti lunghi. Inoltre, i pulsanti laterali programmabili permettono di richiamare scorciatoie e macro con un solo tocco. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 139.49
    },
    {
        id: 419,
        name: "Controller Fulmine Studio 5",
        descrizione: "Il Controller Fulmine Studio 5 è progettato per competere ai massimi livelli e vincere. La batteria garantisce fino a 80 ore di gioco senza interruzioni, mentre la vibrazione a doppio motore restituisce ogni impatto e ogni esplosione. Inoltre, l'impugnatura gommata antiscivolo resta salda anche nelle partite più intense. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 150.99
    },
    {
        id: 420,
        name: "Tastiera Maestrale Ultra Bianco Artico",
        descrizione: "La Tastiera Maestrale Ultra Bianco Artico combina un design essenziale a una risposta dei tasti sorprendentemente reattiva. Gli switch meccanici hot-swap si sostituiscono senza saldature, per personalizzare il feeling di ogni tasto, mentre il telaio in alluminio spazzolato elimina flessioni e vibrazioni durante la digitazione. Inoltre, il layout italiano completo include tastierino numerico e tasti multimediali dedicati. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 209.99
    },
    {
        id: 421,
        name: "Tastiera Maestrale Max Bianco Artico",
        descrizione: "La Tastiera Maestrale Max Bianco Artico è pensata per chi scrive molto e non vuole scendere a compromessi sul comfort. Lo strato di smorzamento interno in silicone attenua il rumore di battitura, mentre la connessione tri-mode (Bluetooth, 2,4 GHz e cavo) si adatta a qualsiasi postazione. Inoltre, gli switch meccanici hot-swap si sostituiscono senza saldature, per personalizzare il feeling di ogni tasto. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 189.99
    },
    {
        id: 422,
        name: "Tastiera Drago Pro 4",
        descrizione: "La Tastiera Drago Pro 4 porta sulla scrivania la qualità costruttiva delle tastiere da collezione. Il poggiapolsi magnetico in similpelle sostiene i polsi nelle sessioni più lunghe, mentre il telaio in alluminio spazzolato elimina flessioni e vibrazioni durante la digitazione. Inoltre, la connessione tri-mode (Bluetooth, 2,4 GHz e cavo) si adatta a qualsiasi postazione. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 133.99
    },
    {
        id: 423,
        name: "Supporto Laptop Sirio Lite 9",
        descrizione: "Il Supporto Laptop Sirio Lite 9 porta lo schermo del portatile all'altezza degli occhi, salvando schiena e collo. L'altezza e l'inclinazione sono regolabili su più livelli, mentre la base stabile non oscilla nemmeno durante la digitazione più intensa. Inoltre, la struttura in alluminio sostiene portatili fino a 24 pollici. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 29.9
    },
    {
        id: 424,
        name: "Tastiera Aurora Plus Verde Salvia",
        descrizione: "La Tastiera Aurora Plus Verde Salvia porta sulla scrivania la qualità costruttiva delle tastiere da collezione. La batteria da 2000 mAh garantisce settimane di utilizzo senza ricarica, mentre la retroilluminazione RGB per singolo tasto offre oltre 18 effetti configurabili. Inoltre, lo strato di smorzamento interno in silicone attenua il rumore di battitura. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 81.49
    },
    {
        id: 425,
        name: "Monitor Cobra Studio 1",
        descrizione: "Il Monitor Cobra Studio 1 è progettato per chi pretende colori fedeli e una fluidità impeccabile. La frequenza di aggiornamento di 165 Hz rende ogni movimento incredibilmente fluido, mentre il supporto HDR esalta contrasti e luminosità nei contenuti compatibili. Inoltre, il pannello IPS da 27 pollici con risoluzione Full HD restituisce dettagli nitidissimi. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 561.99
    },
    {
        id: 426,
        name: "Cuffie Vertex Air Blu Oceano",
        descrizione: "Le Cuffie Vertex Air Blu Oceano portano l'esperienza d'ascolto a un livello superiore, ovunque tu sia. La modalità trasparenza permette di sentire l'ambiente circostante senza toglierle, mentre la modalità a bassa latenza sincronizza perfettamente audio e video nei giochi. Inoltre, i cuscinetti in memory foam rivestiti in tessuto traspirante non affaticano le orecchie. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 104.99
    },
    {
        id: 427,
        name: "SSD Esterno Astra Ultra Rosso Corsa",
        descrizione: "L'SSD Esterno Astra Ultra Rosso Corsa è il modo più rapido per ampliare lo spazio di archiviazione. La certificazione IP65 lo difende da polvere e schizzi d'acqua, mentre la connessione USB-C è compatibile con PC, Mac, tablet e console. Inoltre, il software di backup automatico incluso rende semplice proteggere i file. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 318.49
    },
    {
        id: 428,
        name: "Controller Meridiano Ultra Grigio Siderale",
        descrizione: "Il Controller Meridiano Ultra Grigio Siderale rende ogni sessione di gioco più coinvolgente e reattiva. I grilletti con corsa regolabile si adattano a sparatutto e giochi di guida, mentre l'impugnatura gommata antiscivolo resta salda anche nelle partite più intense. Inoltre, è compatibile con PC, smartphone e le principali console. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 159.99
    },
    {
        id: 429,
        name: "Controller Ossidiana Core 8",
        descrizione: "Il Controller Ossidiana Core 8 rende ogni sessione di gioco più coinvolgente e reattiva. Le palette posteriori rimappabili permettono comandi rapidissimi, mentre i grilletti con corsa regolabile si adattano a sparatutto e giochi di guida. Inoltre, gli stick con sensori a effetto Hall eliminano il fastidioso drift nel tempo. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 95.99
    },
    {
        id: 430,
        name: "Microfono Nimbus Studio 8",
        descrizione: "Il Microfono Nimbus Studio 8 è pensato per podcaster, streamer e musicisti che cercano un suono pulito. Il pulsante mute touch con indicatore LED evita imbarazzi durante le dirette, mentre la registrazione a 24 bit/48 kHz garantisce una qualità audio professionale. Inoltre, il pattern cardioide isola la voce dai rumori ambientali. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 152.99
    },
    {
        id: 431,
        name: "Controller Maestrale Ultra 4",
        descrizione: "Il Controller Maestrale Ultra 4 mette nelle tue mani il controllo totale di ogni partita. Gli stick con sensori a effetto Hall eliminano il fastidioso drift nel tempo, mentre la batteria garantisce fino a 30 ore di gioco senza interruzioni. Inoltre, i grilletti con corsa regolabile si adattano a sparatutto e giochi di guida. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 179.49
    },
    {
        id: 432,
        name: "Mouse Stratos Plus Verde Salvia",
        descrizione: "Il Mouse Stratos Plus Verde Salvia unisce una forma ergonomica studiata a lungo a un sensore di nuova generazione. Gli switch ottici sono certificati per oltre 70 milioni di clic, mentre il sensore ottico da 12000 DPI traccia ogni spostamento senza scatti anche sulle superfici più difficili. Inoltre, la modalità multi-dispositivo consente di passare da PC a tablet con un pulsante. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 65.99
    },
    {
        id: 433,
        name: "Cuffie Cobalto Plus Verde Salvia",
        descrizione: "Le Cuffie Cobalto Plus Verde Salvia sono pensate per isolarti dal mondo e lasciarti solo con la tua musica. La modalità trasparenza permette di sentire l'ambiente circostante senza toglierle, mentre i cuscinetti in memory foam rivestiti in tessuto traspirante non affaticano le orecchie. Inoltre, il microfono con riduzione del rumore rende chiarissime chiamate e videoconferenze. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 144.49
    },
    {
        id: 434,
        name: "Webcam Cobra Lite Blu Oceano",
        descrizione: "La Webcam Cobra Lite Blu Oceano è la soluzione semplice e immediata per chi lavora o studia da remoto. La registrazione a 60 fps rende fluidi anche streaming e tutorial, mentre funziona in modalità plug-and-play senza driver con tutte le principali piattaforme di videochiamata. Inoltre, il sensore in risoluzione Full HD 1080p cattura ogni dettaglio con colori naturali. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 62.99
    },
    {
        id: 435,
        name: "Casse Grifone Air 7",
        descrizione: "Le Casse Grifone Air 7 sono la scelta ideale per musica, film e videogiochi. L'illuminazione RGB sincronizzata con la musica crea atmosfera, mentre i tweeter in seta restituiscono alti morbidi e mai affaticanti. Inoltre, il telecomando incluso consente di gestire il volume dal divano. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Ideale sia per l'ufficio sia per il setup di casa. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 73.99
    },
    {
        id: 436,
        name: "Tappetino Plasma Evo Lavanda",
        descrizione: "Il Tappetino Plasma Evo Lavanda è il dettaglio che fa la differenza tra un buon setup e uno eccellente. I bordi cuciti impediscono lo sfilacciamento nel tempo, mentre si lava facilmente e torna come nuovo in pochi minuti. Inoltre, lo spessore di 3 mm offre il giusto sostegno al polso. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 28.99
    },
    {
        id: 437,
        name: "Lampada Monitor Zefiro Lite Grigio Siderale",
        descrizione: "La Lampada Monitor Zefiro Lite Grigio Siderale è il tocco di luce che mancava alla tua postazione. La luminosità si adatta automaticamente alla luce dell'ambiente, mentre l'alimentazione USB-C elimina la necessità di prese aggiuntive. Inoltre, il controller wireless a rotella permette regolazioni immediate. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 28.99
    },
    {
        id: 438,
        name: "Cuffie Fenice Pro Sabbia",
        descrizione: "Le Cuffie Fenice Pro Sabbia portano l'esperienza d'ascolto a un livello superiore, ovunque tu sia. La struttura pieghevole e la custodia rigida le rendono perfette in viaggio, mentre il microfono con riduzione del rumore rende chiarissime chiamate e videoconferenze. Inoltre, la modalità a bassa latenza sincronizza perfettamente audio e video nei giochi. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 208.49
    },
    {
        id: 439,
        name: "Hub USB Aurora Evo 9",
        descrizione: "L'Hub USB Aurora Evo 9 moltiplica le porte del tuo portatile con un solo, compatto accessorio. Il trasferimento dati a 10 Gbps rende rapidissime le copie di file, mentre offre 9 porte, tra cui USB-A, USB-C, HDMI e lettore di schede SD. Inoltre, è plug-and-play e compatibile con Windows, macOS e Linux. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 56.99
    },
    {
        id: 440,
        name: "Tappetino Levante Ultra 9",
        descrizione: "Il Tappetino Levante Ultra 9 protegge la scrivania e migliora lo scorrimento del mouse. La superficie in microtessuto è ottimizzata per sensori ottici e laser, mentre il trattamento idrorepellente protegge da schizzi e macchie. Inoltre, lo spessore di 3 mm offre il giusto sostegno al polso. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 52.9
    },
    {
        id: 441,
        name: "Router Shadow Prime 2",
        descrizione: "Il Router Shadow Prime 2 è il cuore di una rete domestica moderna, sicura e senza rallentamenti. La crittografia WPA3 e il firewall integrato proteggono la rete dalle intrusioni, mentre le antenne ad alto guadagno con beamforming indirizzano il segnale verso i dispositivi. Inoltre, lo standard Wi-Fi 6 raggiunge velocità combinate fino a 3 Gbps. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 221.9
    },
    {
        id: 442,
        name: "Hub USB Onice Ultra Titanio",
        descrizione: "L'Hub USB Onice Ultra Titanio è la soluzione definitiva alla carenza di porte dei laptop moderni. L'uscita HDMI supporta monitor esterni fino a 4K a 60 Hz, mentre offre 11 porte, tra cui USB-A, USB-C, HDMI e lettore di schede SD. Inoltre, la scocca in alluminio dissipa il calore anche sotto carico. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 104.49
    },
    {
        id: 443,
        name: "Tappetino Aquila Plus 4",
        descrizione: "Il Tappetino Aquila Plus 4 dà ordine e stile a tutta la postazione di lavoro. I bordi cuciti impediscono lo sfilacciamento nel tempo, mentre si lava facilmente e torna come nuovo in pochi minuti. Inoltre, il formato esteso da 80x30 cm ospita comodamente mouse e tastiera. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 27.9
    },
    {
        id: 444,
        name: "Supporto Laptop Carbonio Core Rosso Corsa",
        descrizione: "Il Supporto Laptop Carbonio Core Rosso Corsa è l'accessorio ergonomico che trasforma il modo di lavorare. L'altezza e l'inclinazione sono regolabili su più livelli, mentre i gommini in silicone proteggono il portatile da graffi e scivolamenti. Inoltre, la struttura in alluminio sostiene portatili fino a 24 pollici. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 38.9
    },
    {
        id: 445,
        name: "Hub USB Onice Studio 2",
        descrizione: "L'Hub USB Onice Studio 2 è la soluzione definitiva alla carenza di porte dei laptop moderni. La scocca in alluminio dissipa il calore anche sotto carico, mentre la porta Ethernet gigabit assicura una connessione cablata stabile. Inoltre, la ricarica passthrough fino a 100 W alimenta il portatile mentre lavori. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 79.99
    },
    {
        id: 446,
        name: "Casse Saetta Elite Bianco Artico",
        descrizione: "Le Casse Saetta Elite Bianco Artico uniscono un design raffinato a una resa sonora di alto livello. La potenza complessiva di 40 W assicura un volume pieno senza distorsioni, mentre le casse in legno MDF riducono le risonanze indesiderate. Inoltre, i tweeter in seta restituiscono alti morbidi e mai affaticanti. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 290.99
    },
    {
        id: 447,
        name: "Hub USB Helix Air Grigio Siderale",
        descrizione: "L'Hub USB Helix Air Grigio Siderale trasforma qualsiasi portatile in una vera postazione desktop. L'uscita HDMI supporta monitor esterni fino a 4K a 60 Hz, mentre la scocca in alluminio dissipa il calore anche sotto carico. Inoltre, offre 11 porte, tra cui USB-A, USB-C, HDMI e lettore di schede SD. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 23.49
    },
    {
        id: 448,
        name: "SSD Esterno Vulcano One 5",
        descrizione: "L'SSD Esterno Vulcano One 5 unisce dimensioni tascabili a prestazioni da disco interno. La crittografia hardware AES a 256 bit protegge i dati sensibili, mentre il software di backup automatico incluso rende semplice proteggere i file. Inoltre, la scocca resistente a urti e cadute protegge i dati anche in viaggio. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 99.99
    },
    {
        id: 449,
        name: "SSD Esterno Vetta Plus 2",
        descrizione: "L'SSD Esterno Vetta Plus 2 è pensato per fotografi, videomaker e professionisti in movimento. Il software di backup automatico incluso rende semplice proteggere i file, mentre le velocità di lettura fino a 2800 MB/s azzerano i tempi di attesa. Inoltre, la scocca resistente a urti e cadute protegge i dati anche in viaggio. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 187.9
    },
    {
        id: 450,
        name: "Monitor Kraken Prime Verde Salvia",
        descrizione: "Il Monitor Kraken Prime Verde Salvia ridefinisce la postazione con cornici sottilissime e un pannello di alto livello. Il supporto HDR esalta contrasti e luminosità nei contenuti compatibili, mentre la copertura del 99% dello spazio colore sRGB lo rende adatto a fotoritocco e grafica. Inoltre, le cornici ultrasottili su tre lati lo rendono perfetto per configurazioni multi-monitor. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 658.9
    },
    {
        id: 451,
        name: "Monitor Maestrale Prime Bianco Artico",
        descrizione: "Il Monitor Maestrale Prime Bianco Artico apre una finestra nitida e brillante su tutto ciò che crei e guardi. La porta USB-C con alimentazione fino a 65 W collega e ricarica il portatile con un solo cavo, mentre il supporto HDR esalta contrasti e luminosità nei contenuti compatibili. Inoltre, la frequenza di aggiornamento di 144 Hz rende ogni movimento incredibilmente fluido. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 672.49
    },
    {
        id: 452,
        name: "Cuffie Drago Plus 3",
        descrizione: "Le Cuffie Drago Plus 3 ti avvolgono in un suono pieno, dettagliato e ricco di sfumature. La modalità trasparenza permette di sentire l'ambiente circostante senza toglierle, mentre la batteria assicura fino a 30 ore di ascolto, con ricarica rapida in pochi minuti. Inoltre, i cuscinetti in memory foam rivestiti in tessuto traspirante non affaticano le orecchie. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 180.49
    },
    {
        id: 453,
        name: "SSD Esterno Kraken Core 2",
        descrizione: "L'SSD Esterno Kraken Core 2 mette al sicuro i tuoi file e li porta ovunque alla massima velocità. La scocca resistente a urti e cadute protegge i dati anche in viaggio, mentre la capacità di 2 TB offre spazio per migliaia di foto, video e progetti. Inoltre, la crittografia hardware AES a 256 bit protegge i dati sensibili. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 138.99
    },
    {
        id: 454,
        name: "Tastiera Iride Max 2",
        descrizione: "La Tastiera Iride Max 2 è pensata per chi scrive molto e non vuole scendere a compromessi sul comfort. Lo strato di smorzamento interno in silicone attenua il rumore di battitura, mentre i keycap in PBT double-shot resistono all'usura e non diventano lucidi con il tempo. Inoltre, la retroilluminazione RGB per singolo tasto offre oltre 24 effetti configurabili. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 214.9
    },
    {
        id: 455,
        name: "Cuffie Vetta Evo Sabbia",
        descrizione: "Le Cuffie Vetta Evo Sabbia uniscono comfort da indossare tutto il giorno e una resa acustica sorprendente. La batteria assicura fino a 80 ore di ascolto, con ricarica rapida in pochi minuti, mentre i cuscinetti in memory foam rivestiti in tessuto traspirante non affaticano le orecchie. Inoltre, il microfono con riduzione del rumore rende chiarissime chiamate e videoconferenze. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 142.49
    },
    {
        id: 456,
        name: "Router Meridiano Lite 5",
        descrizione: "Il Router Meridiano Lite 5 è pensato per famiglie connesse, gamer e professionisti in smart working. La porta WAN da 2,5 Gbps sfrutta al massimo le connessioni in fibra ottica, mentre la tecnologia mesh consente di estendere la copertura aggiungendo altri nodi. Inoltre, lo standard Wi-Fi 6E raggiunge velocità combinate fino a 5,4 Gbps. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 79.49
    },
    {
        id: 457,
        name: "Mouse Titan Lite Lavanda",
        descrizione: "Il Mouse Titan Lite Lavanda trasforma ogni clic in un gesto rapido, fluido e naturale. La modalità multi-dispositivo consente di passare da PC a tablet con un pulsante, mentre la rotella in metallo con scorrimento a frizione variabile rende rapidissima la navigazione di documenti lunghi. Inoltre, i pulsanti laterali programmabili permettono di richiamare scorciatoie e macro con un solo tocco. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 24.99
    },
    {
        id: 458,
        name: "Webcam Tuono Prime Lavanda",
        descrizione: "La Webcam Tuono Prime Lavanda ti fa apparire al meglio in ogni videochiamata, riunione o diretta. La correzione automatica della luce compensa ambienti troppo bui o controluce, mentre i due microfoni stereo con riduzione del rumore catturano la voce in modo chiaro. Inoltre, funziona in modalità plug-and-play senza driver con tutte le principali piattaforme di videochiamata. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 149.49
    },
    {
        id: 459,
        name: "Mouse Plasma Studio 7",
        descrizione: "Il Mouse Plasma Studio 7 è il compagno ideale per lunghe sessioni di lavoro e di gioco. I piedini in PTFE puro assicurano uno scorrimento silenzioso e privo di attrito, mentre i pulsanti laterali programmabili permettono di richiamare scorciatoie e macro con un solo tocco. Inoltre, il peso ridotto a soli 49 grammi riduce l'affaticamento della mano. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 110.99
    },
    {
        id: 460,
        name: "Microfono Aquila Elite 9",
        descrizione: "Il Microfono Aquila Elite 9 dà alla tua voce la presenza e la chiarezza di uno studio di registrazione. La capsula a condensatore cattura la voce con dettaglio e naturalezza, mentre l'uscita cuffie a latenza zero consente di monitorare la propria voce in tempo reale. Inoltre, si collega in USB-C senza bisogno di interfacce audio esterne. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 241.99
    },
    {
        id: 461,
        name: "Stampante Altair Pro 2",
        descrizione: "La Stampante Altair Pro 2 porta in casa e in ufficio stampe nitide, veloci e affidabili. La connessione Wi-Fi e l'app dedicata permettono di stampare direttamente dallo smartphone, mentre il vassoio da 250 fogli limita le interruzioni per il caricamento della carta. Inoltre, le stampe fotografiche a colori hanno toni vividi e sfumature morbide. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 375.99
    },
    {
        id: 462,
        name: "Stampante Titan Lite Lavanda",
        descrizione: "La Stampante Titan Lite Lavanda semplifica la gestione dei documenti di tutta la famiglia o del piccolo ufficio. Le stampe fotografiche a colori hanno toni vividi e sfumature morbide, mentre la connessione Wi-Fi e l'app dedicata permettono di stampare direttamente dallo smartphone. Inoltre, lo scanner piano ad alta risoluzione digitalizza documenti e fotografie in pochi secondi. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 166.9
    },
    {
        id: 463,
        name: "Controller Zefiro Ultra 6",
        descrizione: "Il Controller Zefiro Ultra 6 è progettato per competere ai massimi livelli e vincere. L'impugnatura gommata antiscivolo resta salda anche nelle partite più intense, mentre le palette posteriori rimappabili permettono comandi rapidissimi. Inoltre, i grilletti con corsa regolabile si adattano a sparatutto e giochi di guida. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 193.99
    },
    {
        id: 464,
        name: "Hub USB Graffio Pro 5",
        descrizione: "L'Hub USB Graffio Pro 5 trasforma qualsiasi portatile in una vera postazione desktop. Offre 11 porte, tra cui USB-A, USB-C, HDMI e lettore di schede SD, mentre la scocca in alluminio dissipa il calore anche sotto carico. Inoltre, la porta Ethernet gigabit assicura una connessione cablata stabile. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 90.99
    },
    {
        id: 465,
        name: "Microfono Tempesta Prime 7",
        descrizione: "Il Microfono Tempesta Prime 7 dà alla tua voce la presenza e la chiarezza di uno studio di registrazione. La capsula a condensatore cattura la voce con dettaglio e naturalezza, mentre il controllo del guadagno integrato permette regolazioni rapide al volo. Inoltre, il pattern cardioide isola la voce dai rumori ambientali. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 192.99
    },
    {
        id: 466,
        name: "Monitor Riflesso Elite Bianco Artico",
        descrizione: "Il Monitor Riflesso Elite Bianco Artico è progettato per chi pretende colori fedeli e una fluidità impeccabile. Il pannello IPS da 27 pollici con risoluzione Full HD restituisce dettagli nitidissimi, mentre il supporto HDR esalta contrasti e luminosità nei contenuti compatibili. Inoltre, le cornici ultrasottili su tre lati lo rendono perfetto per configurazioni multi-monitor. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 807.99
    },
    {
        id: 467,
        name: "Monitor Drago Max Grafite",
        descrizione: "Il Monitor Drago Max Grafite offre una qualità d'immagine che fa la differenza tanto nel lavoro quanto nel gioco. Il tempo di risposta di 1 ms elimina scie e sfocature nelle scene più veloci, mentre la porta USB-C con alimentazione fino a 65 W collega e ricarica il portatile con un solo cavo. Inoltre, il supporto HDR esalta contrasti e luminosità nei contenuti compatibili. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 810.99
    },
    {
        id: 468,
        name: "Supporto Laptop Zefiro Elite Bianco Artico",
        descrizione: "Il Supporto Laptop Zefiro Elite Bianco Artico migliora la postura e il raffreddamento del tuo portatile. L'altezza e l'inclinazione sono regolabili su più livelli, mentre i gommini in silicone proteggono il portatile da graffi e scivolamenti. Inoltre, il design aperto favorisce la circolazione dell'aria e riduce le temperature. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 76.49
    },
    {
        id: 469,
        name: "Stampante Carbonio Max 5",
        descrizione: "La Stampante Carbonio Max 5 semplifica la gestione dei documenti di tutta la famiglia o del piccolo ufficio. Stampa fino a 33 pagine al minuto con testi nitidi e neri profondi, mentre il vassoio da 150 fogli limita le interruzioni per il caricamento della carta. Inoltre, la stampa fronte/retro automatica riduce il consumo di carta. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 437.99
    },
    {
        id: 470,
        name: "Supporto Laptop Iride Max Grafite",
        descrizione: "Il Supporto Laptop Iride Max Grafite migliora la postura e il raffreddamento del tuo portatile. L'altezza e l'inclinazione sono regolabili su più livelli, mentre il design aperto favorisce la circolazione dell'aria e riduce le temperature. Inoltre, i gommini in silicone proteggono il portatile da graffi e scivolamenti. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 77.49
    },
    {
        id: 471,
        name: "SSD Esterno Silenzio Air Lavanda",
        descrizione: "L'SSD Esterno Silenzio Air Lavanda unisce dimensioni tascabili a prestazioni da disco interno. La capacità di 1 TB offre spazio per migliaia di foto, video e progetti, mentre la crittografia hardware AES a 256 bit protegge i dati sensibili. Inoltre, la certificazione IP65 lo difende da polvere e schizzi d'acqua. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 95.49
    },
    {
        id: 472,
        name: "Controller Shadow Studio Nero Notte",
        descrizione: "Il Controller Shadow Studio Nero Notte mette nelle tue mani il controllo totale di ogni partita. La batteria garantisce fino a 60 ore di gioco senza interruzioni, mentre gli stick con sensori a effetto Hall eliminano il fastidioso drift nel tempo. Inoltre, è compatibile con PC, smartphone e le principali console. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 149.99
    },
    {
        id: 473,
        name: "Microfono Stratos Ultra Sabbia",
        descrizione: "Il Microfono Stratos Ultra Sabbia dà alla tua voce la presenza e la chiarezza di uno studio di registrazione. Si collega in USB-C senza bisogno di interfacce audio esterne, mentre il pulsante mute touch con indicatore LED evita imbarazzi durante le dirette. Inoltre, la capsula a condensatore cattura la voce con dettaglio e naturalezza. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 246.49
    },
    {
        id: 474,
        name: "Controller Zefiro Lite 5",
        descrizione: "Il Controller Zefiro Lite 5 è progettato per competere ai massimi livelli e vincere. L'impugnatura gommata antiscivolo resta salda anche nelle partite più intense, mentre gli stick con sensori a effetto Hall eliminano il fastidioso drift nel tempo. Inoltre, la vibrazione a doppio motore restituisce ogni impatto e ogni esplosione. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 44.99
    },
    {
        id: 475,
        name: "Microfono Vortex Evo 6",
        descrizione: "Il Microfono Vortex Evo 6 è pensato per podcaster, streamer e musicisti che cercano un suono pulito. La capsula a condensatore cattura la voce con dettaglio e naturalezza, mentre il pattern cardioide isola la voce dai rumori ambientali. Inoltre, la registrazione a 24 bit/48 kHz garantisce una qualità audio professionale. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 100.49
    },
    {
        id: 476,
        name: "Tappetino Riflesso Lite 5",
        descrizione: "Il Tappetino Riflesso Lite 5 dà ordine e stile a tutta la postazione di lavoro. Si lava facilmente e torna come nuovo in pochi minuti, mentre il trattamento idrorepellente protegge da schizzi e macchie. Inoltre, lo spessore di 5 mm offre il giusto sostegno al polso. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 16.99
    },
    {
        id: 477,
        name: "Monitor Tempesta Prime Verde Salvia",
        descrizione: "Il Monitor Tempesta Prime Verde Salvia ridefinisce la postazione con cornici sottilissime e un pannello di alto livello. Il tempo di risposta di 1 ms elimina scie e sfocature nelle scene più veloci, mentre la porta USB-C con alimentazione fino a 65 W collega e ricarica il portatile con un solo cavo. Inoltre, il pannello IPS da 27 pollici con risoluzione Full HD restituisce dettagli nitidissimi. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 637.9
    },
    {
        id: 478,
        name: "Hub USB Nova Air Titanio",
        descrizione: "L'Hub USB Nova Air Titanio trasforma qualsiasi portatile in una vera postazione desktop. Offre 11 porte, tra cui USB-A, USB-C, HDMI e lettore di schede SD, mentre è plug-and-play e compatibile con Windows, macOS e Linux. Inoltre, l'uscita HDMI supporta monitor esterni fino a 4K a 60 Hz. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 24.99
    },
    {
        id: 479,
        name: "Tappetino Aurora Air 8",
        descrizione: "Il Tappetino Aurora Air 8 offre la superficie perfetta per movimenti precisi e controllati. I bordi cuciti impediscono lo sfilacciamento nel tempo, mentre la base in gomma naturale antiscivolo lo mantiene fermo in ogni situazione. Inoltre, la superficie in microtessuto è ottimizzata per sensori ottici e laser. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 19.99
    },
    {
        id: 480,
        name: "Tappetino Nova Plus 3",
        descrizione: "Il Tappetino Nova Plus 3 offre la superficie perfetta per movimenti precisi e controllati. Il formato esteso da 120x60 cm ospita comodamente mouse e tastiera, mentre i bordi cuciti impediscono lo sfilacciamento nel tempo. Inoltre, la superficie in microtessuto è ottimizzata per sensori ottici e laser. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 34.49
    },
    {
        id: 481,
        name: "Microfono Saetta Pro 5",
        descrizione: "Il Microfono Saetta Pro 5 dà alla tua voce la presenza e la chiarezza di uno studio di registrazione. Il pattern cardioide isola la voce dai rumori ambientali, mentre si collega in USB-C senza bisogno di interfacce audio esterne. Inoltre, l'uscita cuffie a latenza zero consente di monitorare la propria voce in tempo reale. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 157.9
    },
    {
        id: 482,
        name: "Router Riflesso Lite Titanio",
        descrizione: "Il Router Riflesso Lite Titanio è pensato per famiglie connesse, gamer e professionisti in smart working. L'app di configurazione guida l'installazione in pochi minuti, mentre le antenne ad alto guadagno con beamforming indirizzano il segnale verso i dispositivi. Inoltre, il parental control integrato permette di gestire orari e contenuti per ogni membro della famiglia. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Ideale sia per l'ufficio sia per il setup di casa. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 43.49
    },
    {
        id: 483,
        name: "SSD Esterno Zenith Ultra 7",
        descrizione: "L'SSD Esterno Zenith Ultra 7 mette al sicuro i tuoi file e li porta ovunque alla massima velocità. Le velocità di lettura fino a 2000 MB/s azzerano i tempi di attesa, mentre la certificazione IP65 lo difende da polvere e schizzi d'acqua. Inoltre, la capacità di 4 TB offre spazio per migliaia di foto, video e progetti. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 298.49
    },
    {
        id: 484,
        name: "Casse Levante One 5",
        descrizione: "Le Casse Levante One 5 riempiono la stanza con un suono potente e sorprendentemente definito. I controlli di bassi e acuti permettono di adattare il suono all'ambiente, mentre le casse in legno MDF riducono le risonanze indesiderate. Inoltre, gli ingressi Bluetooth, ottico e AUX permettono di collegare qualsiasi sorgente. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 86.99
    },
    {
        id: 485,
        name: "Router Opale Pro Nero Notte",
        descrizione: "Il Router Opale Pro Nero Notte è pensato per famiglie connesse, gamer e professionisti in smart working. La porta WAN da 2,5 Gbps sfrutta al massimo le connessioni in fibra ottica, mentre lo standard Wi-Fi 6E raggiunge velocità combinate fino a 3 Gbps. Inoltre, la crittografia WPA3 e il firewall integrato proteggono la rete dalle intrusioni. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 258.99
    },
    {
        id: 486,
        name: "Hub USB Cassiopea Studio Grafite",
        descrizione: "L'Hub USB Cassiopea Studio Grafite mette ordine tra cavi e periferiche in un attimo. L'uscita HDMI supporta monitor esterni fino a 4K a 60 Hz, mentre il trasferimento dati a 10 Gbps rende rapidissime le copie di file. Inoltre, la scocca in alluminio dissipa il calore anche sotto carico. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 88.9
    },
    {
        id: 487,
        name: "Hub USB Scirocco Plus Nero Notte",
        descrizione: "L'Hub USB Scirocco Plus Nero Notte mette ordine tra cavi e periferiche in un attimo. La porta Ethernet gigabit assicura una connessione cablata stabile, mentre è plug-and-play e compatibile con Windows, macOS e Linux. Inoltre, il trasferimento dati a 10 Gbps rende rapidissime le copie di file. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 65.49
    },
    {
        id: 488,
        name: "Monitor Ferro Ultra Grafite",
        descrizione: "Il Monitor Ferro Ultra Grafite ridefinisce la postazione con cornici sottilissime e un pannello di alto livello. La frequenza di aggiornamento di 240 Hz rende ogni movimento incredibilmente fluido, mentre le cornici ultrasottili su tre lati lo rendono perfetto per configurazioni multi-monitor. Inoltre, il supporto HDR esalta contrasti e luminosità nei contenuti compatibili. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 899.99
    },
    {
        id: 489,
        name: "SSD Esterno Opale Ultra Titanio",
        descrizione: "L'SSD Esterno Opale Ultra Titanio mette al sicuro i tuoi file e li porta ovunque alla massima velocità. La certificazione IP65 lo difende da polvere e schizzi d'acqua, mentre la scocca resistente a urti e cadute protegge i dati anche in viaggio. Inoltre, le velocità di lettura fino a 1050 MB/s azzerano i tempi di attesa. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 302.9
    },
    {
        id: 490,
        name: "Hub USB Scoglio Core 7",
        descrizione: "L'Hub USB Scoglio Core 7 è la soluzione definitiva alla carenza di porte dei laptop moderni. L'uscita HDMI supporta monitor esterni fino a 4K a 60 Hz, mentre la porta Ethernet gigabit assicura una connessione cablata stabile. Inoltre, offre 9 porte, tra cui USB-A, USB-C, HDMI e lettore di schede SD. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 49.49
    },
    {
        id: 491,
        name: "Cuffie Vertex Air 7",
        descrizione: "Le Cuffie Vertex Air 7 uniscono comfort da indossare tutto il giorno e una resa acustica sorprendente. La modalità trasparenza permette di sentire l'ambiente circostante senza toglierle, mentre la modalità a bassa latenza sincronizza perfettamente audio e video nei giochi. Inoltre, i cuscinetti in memory foam rivestiti in tessuto traspirante non affaticano le orecchie. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 82.99
    },
    {
        id: 492,
        name: "Monitor Pulsar Max 1",
        descrizione: "Il Monitor Pulsar Max 1 apre una finestra nitida e brillante su tutto ciò che crei e guardi. Le cornici ultrasottili su tre lati lo rendono perfetto per configurazioni multi-monitor, mentre la frequenza di aggiornamento di 144 Hz rende ogni movimento incredibilmente fluido. Inoltre, il tempo di risposta di 1 ms elimina scie e sfocature nelle scene più veloci. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 810.9
    },
    {
        id: 493,
        name: "Lampada Monitor Silenzio Ultra 9",
        descrizione: "La Lampada Monitor Silenzio Ultra 9 rende più piacevoli e meno faticose le sessioni di lavoro serali. Si aggancia a monitor piatti e curvi senza viti né adesivi, mentre la luminosità si adatta automaticamente alla luce dell'ambiente. Inoltre, la temperatura colore è regolabile da 2700 K a 6500 K. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 101.99
    },
    {
        id: 494,
        name: "Cuffie Polaris Core Titanio",
        descrizione: "Le Cuffie Polaris Core Titanio ti avvolgono in un suono pieno, dettagliato e ricco di sfumature. La struttura pieghevole e la custodia rigida le rendono perfette in viaggio, mentre il microfono con riduzione del rumore rende chiarissime chiamate e videoconferenze. Inoltre, la modalità a bassa latenza sincronizza perfettamente audio e video nei giochi. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 154.99
    },
    {
        id: 495,
        name: "Controller Zenith Elite Grafite",
        descrizione: "Il Controller Zenith Elite Grafite rende ogni sessione di gioco più coinvolgente e reattiva. Gli stick con sensori a effetto Hall eliminano il fastidioso drift nel tempo, mentre la vibrazione a doppio motore restituisce ogni impatto e ogni esplosione. Inoltre, i grilletti con corsa regolabile si adattano a sparatutto e giochi di guida. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 160.49
    },
    {
        id: 496,
        name: "Lampada Monitor Sirio Prime 4",
        descrizione: "La Lampada Monitor Sirio Prime 4 è il tocco di luce che mancava alla tua postazione. L'alimentazione USB-C elimina la necessità di prese aggiuntive, mentre la temperatura colore è regolabile da 2700 K a 6500 K. Inoltre, la retroilluminazione RGB posteriore crea un'atmosfera rilassante. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 74.9
    },
    {
        id: 497,
        name: "Cuffie Opale Prime 3",
        descrizione: "Le Cuffie Opale Prime 3 sono pensate per isolarti dal mondo e lasciarti solo con la tua musica. I driver dinamici da 45 mm offrono bassi profondi e alti cristallini, mentre la modalità a bassa latenza sincronizza perfettamente audio e video nei giochi. Inoltre, la batteria assicura fino a 30 ore di ascolto, con ricarica rapida in pochi minuti. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 202.99
    },
    {
        id: 498,
        name: "Mouse Vetta Elite Lavanda",
        descrizione: "Il Mouse Vetta Elite Lavanda è il compagno ideale per lunghe sessioni di lavoro e di gioco. Il peso ridotto a soli 63 grammi riduce l'affaticamento della mano, mentre la modalità multi-dispositivo consente di passare da PC a tablet con un pulsante. Inoltre, i pulsanti laterali programmabili permettono di richiamare scorciatoie e macro con un solo tocco. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 144.99
    },
    {
        id: 499,
        name: "Mouse Grifone Pro 3",
        descrizione: "Il Mouse Grifone Pro 3 nasce per chi vuole precisione assoluta a ogni movimento del polso. Il sensore ottico da 30000 DPI traccia ogni spostamento senza scatti anche sulle superfici più difficili, mentre i piedini in PTFE puro assicurano uno scorrimento silenzioso e privo di attrito. Inoltre, la batteria ricaricabile via USB-C offre fino a 80 ore di autonomia con una singola carica. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 105.9
    },
    {
        id: 500,
        name: "SSD Esterno Scoglio Air Titanio",
        descrizione: "L'SSD Esterno Scoglio Air Titanio è pensato per fotografi, videomaker e professionisti in movimento. Il software di backup automatico incluso rende semplice proteggere i file, mentre la crittografia hardware AES a 256 bit protegge i dati sensibili. Inoltre, la connessione USB-C è compatibile con PC, Mac, tablet e console. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 50.99
    },
    {
        id: 501,
        name: "Hub USB Cometa One 8",
        descrizione: "L'Hub USB Cometa One 8 è la soluzione definitiva alla carenza di porte dei laptop moderni. Offre 5 porte, tra cui USB-A, USB-C, HDMI e lettore di schede SD, mentre la scocca in alluminio dissipa il calore anche sotto carico. Inoltre, è plug-and-play e compatibile con Windows, macOS e Linux. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 34.99
    },
    {
        id: 502,
        name: "Stampante Cobra Elite 1",
        descrizione: "La Stampante Cobra Elite 1 è la multifunzione pensata per chi vuole semplicità senza rinunciare alla qualità. Il sistema a serbatoi ricaricabili abbatte drasticamente il costo per pagina, mentre stampa fino a 22 pagine al minuto con testi nitidi e neri profondi. Inoltre, il display touch a colori rende intuitiva ogni operazione. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 447.99
    },
    {
        id: 503,
        name: "Microfono Phantom Plus Sabbia",
        descrizione: "Il Microfono Phantom Plus Sabbia è pensato per podcaster, streamer e musicisti che cercano un suono pulito. Il pulsante mute touch con indicatore LED evita imbarazzi durante le dirette, mentre si collega in USB-C senza bisogno di interfacce audio esterne. Inoltre, il supporto antivibrazione e il filtro anti-pop sono inclusi nella confezione. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 99.99
    },
    {
        id: 504,
        name: "Tappetino Carbonio Evo Bianco Artico",
        descrizione: "Il Tappetino Carbonio Evo Bianco Artico protegge la scrivania e migliora lo scorrimento del mouse. Il formato esteso da 120x60 cm ospita comodamente mouse e tastiera, mentre lo spessore di 4 mm offre il giusto sostegno al polso. Inoltre, la base in gomma naturale antiscivolo lo mantiene fermo in ogni situazione. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 34.99
    },
    {
        id: 505,
        name: "Supporto Laptop Vortex Elite Titanio",
        descrizione: "Il Supporto Laptop Vortex Elite Titanio è l'accessorio ergonomico che trasforma il modo di lavorare. La struttura in alluminio sostiene portatili fino a 32 pollici, mentre i gommini in silicone proteggono il portatile da graffi e scivolamenti. Inoltre, si ripiega in pochi secondi e sta comodamente in uno zaino. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 80.99
    },
    {
        id: 506,
        name: "Monitor Polaris Prime Grafite",
        descrizione: "Il Monitor Polaris Prime Grafite offre una qualità d'immagine che fa la differenza tanto nel lavoro quanto nel gioco. La tecnologia flicker-free e il filtro per la luce blu riducono l'affaticamento visivo, mentre il pannello IPS da 34 pollici con risoluzione WQHD restituisce dettagli nitidissimi. Inoltre, la frequenza di aggiornamento di 165 Hz rende ogni movimento incredibilmente fluido. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 613.9
    },
    {
        id: 507,
        name: "Webcam Drago One Lavanda",
        descrizione: "La Webcam Drago One Lavanda è la soluzione semplice e immediata per chi lavora o studia da remoto. I due microfoni stereo con riduzione del rumore catturano la voce in modo chiaro, mentre la correzione automatica della luce compensa ambienti troppo bui o controluce. Inoltre, l'autofocus rapido mantiene il volto sempre a fuoco anche quando ti muovi. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 37.49
    },
    {
        id: 508,
        name: "Webcam Mistral Evo Nero Notte",
        descrizione: "La Webcam Mistral Evo Nero Notte trasforma lo smart working con immagini nitide e un audio limpido. La registrazione a 60 fps rende fluidi anche streaming e tutorial, mentre la correzione automatica della luce compensa ambienti troppo bui o controluce. Inoltre, funziona in modalità plug-and-play senza driver con tutte le principali piattaforme di videochiamata. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 102.49
    },
    {
        id: 509,
        name: "Hub USB Plasma Elite Nero Notte",
        descrizione: "L'Hub USB Plasma Elite Nero Notte è la soluzione definitiva alla carenza di porte dei laptop moderni. La porta Ethernet gigabit assicura una connessione cablata stabile, mentre il trasferimento dati a 10 Gbps rende rapidissime le copie di file. Inoltre, la ricarica passthrough fino a 100 W alimenta il portatile mentre lavori. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 125.49
    },
    {
        id: 510,
        name: "Casse Vertex Core 1",
        descrizione: "Le Casse Vertex Core 1 trasformano la scrivania in un piccolo studio d'ascolto. I tweeter in seta restituiscono alti morbidi e mai affaticanti, mentre gli ingressi Bluetooth, ottico e AUX permettono di collegare qualsiasi sorgente. Inoltre, le casse in legno MDF riducono le risonanze indesiderate. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 136.99
    },
    {
        id: 511,
        name: "Webcam Graffio Evo Nero Notte",
        descrizione: "La Webcam Graffio Evo Nero Notte è la soluzione semplice e immediata per chi lavora o studia da remoto. Funziona in modalità plug-and-play senza driver con tutte le principali piattaforme di videochiamata, mentre la correzione automatica della luce compensa ambienti troppo bui o controluce. Inoltre, la clip universale si fissa saldamente a monitor, portatili e treppiedi. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 109.99
    },
    {
        id: 512,
        name: "Stampante Shadow Ultra 7",
        descrizione: "La Stampante Shadow Ultra 7 unisce costi di stampa contenuti a prestazioni di livello professionale. Lo scanner piano ad alta risoluzione digitalizza documenti e fotografie in pochi secondi, mentre le stampe fotografiche a colori hanno toni vividi e sfumature morbide. Inoltre, stampa fino a 33 pagine al minuto con testi nitidi e neri profondi. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 486.49
    },
    {
        id: 513,
        name: "Stampante Vega Prime Rosso Corsa",
        descrizione: "La Stampante Vega Prime Rosso Corsa unisce costi di stampa contenuti a prestazioni di livello professionale. Le stampe fotografiche a colori hanno toni vividi e sfumature morbide, mentre lo scanner piano ad alta risoluzione digitalizza documenti e fotografie in pochi secondi. Inoltre, il vassoio da 250 fogli limita le interruzioni per il caricamento della carta. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 316.99
    },
    {
        id: 514,
        name: "Lampada Monitor Plasma Core Grafite",
        descrizione: "La Lampada Monitor Plasma Core Grafite è il tocco di luce che mancava alla tua postazione. La luminosità si adatta automaticamente alla luce dell'ambiente, mentre la retroilluminazione RGB posteriore crea un'atmosfera rilassante. Inoltre, la temperatura colore è regolabile da 2700 K a 6500 K. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 53.99
    },
    {
        id: 515,
        name: "Mouse Eclipse Lite 8",
        descrizione: "Il Mouse Eclipse Lite 8 trasforma ogni clic in un gesto rapido, fluido e naturale. I pulsanti laterali programmabili permettono di richiamare scorciatoie e macro con un solo tocco, mentre il sensore ottico da 12000 DPI traccia ogni spostamento senza scatti anche sulle superfici più difficili. Inoltre, il peso ridotto a soli 58 grammi riduce l'affaticamento della mano. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Ideale sia per l'ufficio sia per il setup di casa. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 35.9
    },
    {
        id: 516,
        name: "Router Vetta Prime Verde Salvia",
        descrizione: "Il Router Vetta Prime Verde Salvia è il cuore di una rete domestica moderna, sicura e senza rallentamenti. Le antenne ad alto guadagno con beamforming indirizzano il segnale verso i dispositivi, mentre la porta WAN da 2,5 Gbps sfrutta al massimo le connessioni in fibra ottica. Inoltre, il parental control integrato permette di gestire orari e contenuti per ogni membro della famiglia. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 287.99
    },
    {
        id: 517,
        name: "Monitor Cobra Elite Bianco Artico",
        descrizione: "Il Monitor Cobra Elite Bianco Artico apre una finestra nitida e brillante su tutto ciò che crei e guardi. Il supporto ergonomico regolabile in altezza, inclinazione e rotazione si adatta a ogni postura, mentre le cornici ultrasottili su tre lati lo rendono perfetto per configurazioni multi-monitor. Inoltre, la tecnologia flicker-free e il filtro per la luce blu riducono l'affaticamento visivo. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 894.9
    },
    {
        id: 518,
        name: "Lampada Monitor Solaris One 8",
        descrizione: "La Lampada Monitor Solaris One 8 libera spazio sulla scrivania portando la luce proprio dove serve. Si aggancia a monitor piatti e curvi senza viti né adesivi, mentre il controller wireless a rotella permette regolazioni immediate. Inoltre, il fascio luminoso asimmetrico illumina la scrivania senza abbagliare. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 47.9
    },
    {
        id: 519,
        name: "Monitor Plasma Elite Rosso Corsa",
        descrizione: "Il Monitor Plasma Elite Rosso Corsa è progettato per chi pretende colori fedeli e una fluidità impeccabile. La copertura del 100% dello spazio colore sRGB lo rende adatto a fotoritocco e grafica, mentre il supporto ergonomico regolabile in altezza, inclinazione e rotazione si adatta a ogni postura. Inoltre, le cornici ultrasottili su tre lati lo rendono perfetto per configurazioni multi-monitor. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 712.49
    },
    {
        id: 520,
        name: "Tappetino Andromeda Pro Rosso Corsa",
        descrizione: "Il Tappetino Andromeda Pro Rosso Corsa protegge la scrivania e migliora lo scorrimento del mouse. Il formato esteso da 120x60 cm ospita comodamente mouse e tastiera, mentre si lava facilmente e torna come nuovo in pochi minuti. Inoltre, i bordi cuciti impediscono lo sfilacciamento nel tempo. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 39.49
    },
    {
        id: 521,
        name: "Tappetino Kraken Plus Lavanda",
        descrizione: "Il Tappetino Kraken Plus Lavanda dà ordine e stile a tutta la postazione di lavoro. La superficie in microtessuto è ottimizzata per sensori ottici e laser, mentre il trattamento idrorepellente protegge da schizzi e macchie. Inoltre, si lava facilmente e torna come nuovo in pochi minuti. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 30.9
    },
    {
        id: 522,
        name: "Tastiera Plasma Studio Grafite",
        descrizione: "La Tastiera Plasma Studio Grafite regala una sensazione di digitazione solida, precisa e appagante. I keycap in PBT double-shot resistono all'usura e non diventano lucidi con il tempo, mentre gli switch meccanici hot-swap si sostituiscono senza saldature, per personalizzare il feeling di ogni tasto. Inoltre, la connessione tri-mode (Bluetooth, 2,4 GHz e cavo) si adatta a qualsiasi postazione. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 147.99
    },
    {
        id: 523,
        name: "Microfono Sirio Studio Nero Notte",
        descrizione: "Il Microfono Sirio Studio Nero Notte porta qualità broadcast in qualsiasi stanza della casa. La capsula a condensatore cattura la voce con dettaglio e naturalezza, mentre il controllo del guadagno integrato permette regolazioni rapide al volo. Inoltre, il pattern cardioide isola la voce dai rumori ambientali. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 186.99
    },
    {
        id: 524,
        name: "Controller Altair Air Rosso Corsa",
        descrizione: "Il Controller Altair Air Rosso Corsa rende ogni sessione di gioco più coinvolgente e reattiva. I grilletti con corsa regolabile si adattano a sparatutto e giochi di guida, mentre la batteria garantisce fino a 40 ore di gioco senza interruzioni. Inoltre, la vibrazione a doppio motore restituisce ogni impatto e ogni esplosione. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 47.99
    },
    {
        id: 525,
        name: "Tastiera Spectra Evo 3",
        descrizione: "La Tastiera Spectra Evo 3 combina un design essenziale a una risposta dei tasti sorprendentemente reattiva. Lo strato di smorzamento interno in silicone attenua il rumore di battitura, mentre il layout italiano completo include tastierino numerico e tasti multimediali dedicati. Inoltre, i keycap in PBT double-shot resistono all'usura e non diventano lucidi con il tempo. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 80.99
    },
    {
        id: 526,
        name: "Lampada Monitor Riflesso Air 6",
        descrizione: "La Lampada Monitor Riflesso Air 6 illumina la scrivania in modo uniforme senza creare riflessi sullo schermo. La retroilluminazione RGB posteriore crea un'atmosfera rilassante, mentre la luminosità si adatta automaticamente alla luce dell'ambiente. Inoltre, l'alimentazione USB-C elimina la necessità di prese aggiuntive. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Ideale sia per l'ufficio sia per il setup di casa. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 43.49
    },
    {
        id: 527,
        name: "Stampante Aquila Prime Titanio",
        descrizione: "La Stampante Aquila Prime Titanio è la multifunzione pensata per chi vuole semplicità senza rinunciare alla qualità. Le stampe fotografiche a colori hanno toni vividi e sfumature morbide, mentre stampa fino a 15 pagine al minuto con testi nitidi e neri profondi. Inoltre, la stampa fronte/retro automatica riduce il consumo di carta. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 354.99
    },
    {
        id: 528,
        name: "Microfono Eclipse Ultra 1",
        descrizione: "Il Microfono Eclipse Ultra 1 porta qualità broadcast in qualsiasi stanza della casa. Il supporto antivibrazione e il filtro anti-pop sono inclusi nella confezione, mentre si collega in USB-C senza bisogno di interfacce audio esterne. Inoltre, il pattern cardioide isola la voce dai rumori ambientali. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 209.99
    },
    {
        id: 529,
        name: "Microfono Fulmine Prime Verde Salvia",
        descrizione: "Il Microfono Fulmine Prime Verde Salvia rende ogni parola limpida, calda e piena di carattere. La registrazione a 24 bit/96 kHz garantisce una qualità audio professionale, mentre l'uscita cuffie a latenza zero consente di monitorare la propria voce in tempo reale. Inoltre, il supporto antivibrazione e il filtro anti-pop sono inclusi nella confezione. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 190.99
    },
    {
        id: 530,
        name: "Microfono Quasar Prime 8",
        descrizione: "Il Microfono Quasar Prime 8 è pensato per podcaster, streamer e musicisti che cercano un suono pulito. L'uscita cuffie a latenza zero consente di monitorare la propria voce in tempo reale, mentre il pulsante mute touch con indicatore LED evita imbarazzi durante le dirette. Inoltre, si collega in USB-C senza bisogno di interfacce audio esterne. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 154.49
    },
    {
        id: 531,
        name: "Stampante Nova Lite Nero Notte",
        descrizione: "La Stampante Nova Lite Nero Notte porta in casa e in ufficio stampe nitide, veloci e affidabili. Lo scanner piano ad alta risoluzione digitalizza documenti e fotografie in pochi secondi, mentre il vassoio da 250 fogli limita le interruzioni per il caricamento della carta. Inoltre, stampa fino a 15 pagine al minuto con testi nitidi e neri profondi. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 145.49
    },
    {
        id: 532,
        name: "SSD Esterno Eclipse Plus 4",
        descrizione: "L'SSD Esterno Eclipse Plus 4 mette al sicuro i tuoi file e li porta ovunque alla massima velocità. La capacità di 1 TB offre spazio per migliaia di foto, video e progetti, mentre il software di backup automatico incluso rende semplice proteggere i file. Inoltre, la scocca resistente a urti e cadute protegge i dati anche in viaggio. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 147.49
    },
    {
        id: 533,
        name: "Webcam Astra Air 2",
        descrizione: "La Webcam Astra Air 2 trasforma lo smart working con immagini nitide e un audio limpido. Il copriobiettivo integrato garantisce privacy totale quando non la usi, mentre funziona in modalità plug-and-play senza driver con tutte le principali piattaforme di videochiamata. Inoltre, l'autofocus rapido mantiene il volto sempre a fuoco anche quando ti muovi. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Ideale sia per l'ufficio sia per il setup di casa. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 54.99
    },
    {
        id: 534,
        name: "Microfono Lince Studio 4",
        descrizione: "Il Microfono Lince Studio 4 è pensato per podcaster, streamer e musicisti che cercano un suono pulito. Si collega in USB-C senza bisogno di interfacce audio esterne, mentre l'uscita cuffie a latenza zero consente di monitorare la propria voce in tempo reale. Inoltre, il controllo del guadagno integrato permette regolazioni rapide al volo. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 168.9
    },
    {
        id: 535,
        name: "Supporto Laptop Condor Max Verde Salvia",
        descrizione: "Il Supporto Laptop Condor Max Verde Salvia unisce eleganza minimalista e solidità a tutta prova. La struttura in alluminio sostiene portatili fino a 24 pollici, mentre il design aperto favorisce la circolazione dell'aria e riduce le temperature. Inoltre, l'altezza e l'inclinazione sono regolabili su più livelli. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 79.99
    },
    {
        id: 536,
        name: "Mouse Titan Elite 1",
        descrizione: "Il Mouse Titan Elite 1 è il compagno ideale per lunghe sessioni di lavoro e di gioco. I piedini in PTFE puro assicurano uno scorrimento silenzioso e privo di attrito, mentre gli switch ottici sono certificati per oltre 70 milioni di clic. Inoltre, il peso ridotto a soli 58 grammi riduce l'affaticamento della mano. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 123.9
    },
    {
        id: 537,
        name: "Router Condor Studio Nero Notte",
        descrizione: "Il Router Condor Studio Nero Notte elimina le zone morte e i cali di segnale una volta per tutte. Il parental control integrato permette di gestire orari e contenuti per ogni membro della famiglia, mentre la porta WAN da 2,5 Gbps sfrutta al massimo le connessioni in fibra ottica. Inoltre, la tecnologia mesh consente di estendere la copertura aggiungendo altri nodi. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 298.99
    },
    {
        id: 538,
        name: "Casse Titan Plus Titanio",
        descrizione: "Le Casse Titan Plus Titanio riempiono la stanza con un suono potente e sorprendentemente definito. I controlli di bassi e acuti permettono di adattare il suono all'ambiente, mentre i woofer in fibra di carta garantiscono bassi caldi e ben controllati. Inoltre, i tweeter in seta restituiscono alti morbidi e mai affaticanti. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 110.49
    },
    {
        id: 539,
        name: "Stampante Saetta Max 7",
        descrizione: "La Stampante Saetta Max 7 è la multifunzione pensata per chi vuole semplicità senza rinunciare alla qualità. La modalità silenziosa consente di stampare anche di notte senza disturbare, mentre stampa fino a 33 pagine al minuto con testi nitidi e neri profondi. Inoltre, le stampe fotografiche a colori hanno toni vividi e sfumature morbide. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 446.99
    },
    {
        id: 540,
        name: "SSD Esterno Cristallo Core 7",
        descrizione: "L'SSD Esterno Cristallo Core 7 è pensato per fotografi, videomaker e professionisti in movimento. La crittografia hardware AES a 256 bit protegge i dati sensibili, mentre la certificazione IP65 lo difende da polvere e schizzi d'acqua. Inoltre, la capacità di 2 TB offre spazio per migliaia di foto, video e progetti. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 146.99
    },
    {
        id: 541,
        name: "Webcam Pantera Core 5",
        descrizione: "La Webcam Pantera Core 5 trasforma lo smart working con immagini nitide e un audio limpido. Il copriobiettivo integrato garantisce privacy totale quando non la usi, mentre i due microfoni stereo con riduzione del rumore catturano la voce in modo chiaro. Inoltre, funziona in modalità plug-and-play senza driver con tutte le principali piattaforme di videochiamata. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 110.99
    },
    {
        id: 542,
        name: "Webcam Ferro Core 1",
        descrizione: "La Webcam Ferro Core 1 trasforma lo smart working con immagini nitide e un audio limpido. La clip universale si fissa saldamente a monitor, portatili e treppiedi, mentre il campo visivo di 78° inquadra comodamente anche più persone. Inoltre, l'autofocus rapido mantiene il volto sempre a fuoco anche quando ti muovi. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 80.99
    },
    {
        id: 543,
        name: "Controller Ferro Studio Verde Salvia",
        descrizione: "Il Controller Ferro Studio Verde Salvia è progettato per competere ai massimi livelli e vincere. È compatibile con PC, smartphone e le principali console, mentre la vibrazione a doppio motore restituisce ogni impatto e ogni esplosione. Inoltre, gli stick con sensori a effetto Hall eliminano il fastidioso drift nel tempo. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 148.9
    },
    {
        id: 544,
        name: "Controller Vetta Core 1",
        descrizione: "Il Controller Vetta Core 1 rende ogni sessione di gioco più coinvolgente e reattiva. È compatibile con PC, smartphone e le principali console, mentre l'impugnatura gommata antiscivolo resta salda anche nelle partite più intense. Inoltre, gli stick con sensori a effetto Hall eliminano il fastidioso drift nel tempo. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 83.9
    },
    {
        id: 545,
        name: "Stampante Aurora Studio Rosso Corsa",
        descrizione: "La Stampante Aurora Studio Rosso Corsa porta in casa e in ufficio stampe nitide, veloci e affidabili. La connessione Wi-Fi e l'app dedicata permettono di stampare direttamente dallo smartphone, mentre stampa fino a 22 pagine al minuto con testi nitidi e neri profondi. Inoltre, la stampa fronte/retro automatica riduce il consumo di carta. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 361.99
    },
    {
        id: 546,
        name: "Mouse Phantom Air 4",
        descrizione: "Il Mouse Phantom Air 4 unisce una forma ergonomica studiata a lungo a un sensore di nuova generazione. Il peso ridotto a soli 72 grammi riduce l'affaticamento della mano, mentre la connessione wireless a bassa latenza garantisce una risposta istantanea, paragonabile a quella di un cavo. Inoltre, gli switch ottici sono certificati per oltre 80 milioni di clic. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Ideale sia per l'ufficio sia per il setup di casa. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 10.99
    },
    {
        id: 547,
        name: "Stampante Orione Evo 8",
        descrizione: "La Stampante Orione Evo 8 unisce costi di stampa contenuti a prestazioni di livello professionale. Stampa fino a 22 pagine al minuto con testi nitidi e neri profondi, mentre il vassoio da 250 fogli limita le interruzioni per il caricamento della carta. Inoltre, le stampe fotografiche a colori hanno toni vividi e sfumature morbide. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 235.9
    },
    {
        id: 548,
        name: "Router Onda Pro 4",
        descrizione: "Il Router Onda Pro 4 è il cuore di una rete domestica moderna, sicura e senza rallentamenti. La crittografia WPA3 e il firewall integrato proteggono la rete dalle intrusioni, mentre gestisce senza fatica oltre 64 dispositivi connessi contemporaneamente. Inoltre, le antenne ad alto guadagno con beamforming indirizzano il segnale verso i dispositivi. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 274.49
    },
    {
        id: 549,
        name: "Mouse Meridiano Prime Verde Salvia",
        descrizione: "Il Mouse Meridiano Prime Verde Salvia trasforma ogni clic in un gesto rapido, fluido e naturale. I piedini in PTFE puro assicurano uno scorrimento silenzioso e privo di attrito, mentre la modalità multi-dispositivo consente di passare da PC a tablet con un pulsante. Inoltre, i pulsanti laterali programmabili permettono di richiamare scorciatoie e macro con un solo tocco. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 84.99
    },
    {
        id: 550,
        name: "Tappetino Graffio Prime Titanio",
        descrizione: "Il Tappetino Graffio Prime Titanio è il dettaglio che fa la differenza tra un buon setup e uno eccellente. I bordi cuciti impediscono lo sfilacciamento nel tempo, mentre la superficie in microtessuto è ottimizzata per sensori ottici e laser. Inoltre, la base in gomma naturale antiscivolo lo mantiene fermo in ogni situazione. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 37.99
    },
    {
        id: 551,
        name: "Tappetino Saetta Prime 6",
        descrizione: "Il Tappetino Saetta Prime 6 è il dettaglio che fa la differenza tra un buon setup e uno eccellente. Si lava facilmente e torna come nuovo in pochi minuti, mentre il trattamento idrorepellente protegge da schizzi e macchie. Inoltre, il formato esteso da 120x60 cm ospita comodamente mouse e tastiera. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 45.9
    },
    {
        id: 552,
        name: "Monitor Helix Evo Titanio",
        descrizione: "Il Monitor Helix Evo Titanio apre una finestra nitida e brillante su tutto ciò che crei e guardi. La tecnologia flicker-free e il filtro per la luce blu riducono l'affaticamento visivo, mentre la frequenza di aggiornamento di 144 Hz rende ogni movimento incredibilmente fluido. Inoltre, il supporto HDR esalta contrasti e luminosità nei contenuti compatibili. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 369.99
    },
    {
        id: 553,
        name: "Controller Ferro Ultra 4",
        descrizione: "Il Controller Ferro Ultra 4 rende ogni sessione di gioco più coinvolgente e reattiva. Le palette posteriori rimappabili permettono comandi rapidissimi, mentre la vibrazione a doppio motore restituisce ogni impatto e ogni esplosione. Inoltre, l'impugnatura gommata antiscivolo resta salda anche nelle partite più intense. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 199.99
    },
    {
        id: 554,
        name: "Microfono Opale Studio 8",
        descrizione: "Il Microfono Opale Studio 8 dà alla tua voce la presenza e la chiarezza di uno studio di registrazione. L'uscita cuffie a latenza zero consente di monitorare la propria voce in tempo reale, mentre il pattern cardioide isola la voce dai rumori ambientali. Inoltre, si collega in USB-C senza bisogno di interfacce audio esterne. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 193.9
    },
    {
        id: 555,
        name: "Tastiera Nimbus Studio 8",
        descrizione: "La Tastiera Nimbus Studio 8 combina un design essenziale a una risposta dei tasti sorprendentemente reattiva. Il poggiapolsi magnetico in similpelle sostiene i polsi nelle sessioni più lunghe, mentre la retroilluminazione RGB per singolo tasto offre oltre 24 effetti configurabili. Inoltre, la batteria da 2000 mAh garantisce settimane di utilizzo senza ricarica. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 137.99
    },
    {
        id: 556,
        name: "Controller Cristallo Studio 3",
        descrizione: "Il Controller Cristallo Studio 3 rende ogni sessione di gioco più coinvolgente e reattiva. La batteria garantisce fino a 70 ore di gioco senza interruzioni, mentre l'impugnatura gommata antiscivolo resta salda anche nelle partite più intense. Inoltre, i grilletti con corsa regolabile si adattano a sparatutto e giochi di guida. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 126.9
    },
    {
        id: 557,
        name: "Controller Pantera Elite 3",
        descrizione: "Il Controller Pantera Elite 3 rende ogni sessione di gioco più coinvolgente e reattiva. La vibrazione a doppio motore restituisce ogni impatto e ogni esplosione, mentre è compatibile con PC, smartphone e le principali console. Inoltre, la batteria garantisce fino a 30 ore di gioco senza interruzioni. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 168.99
    },
    {
        id: 558,
        name: "Microfono Ferro Plus 7",
        descrizione: "Il Microfono Ferro Plus 7 è pensato per podcaster, streamer e musicisti che cercano un suono pulito. L'uscita cuffie a latenza zero consente di monitorare la propria voce in tempo reale, mentre si collega in USB-C senza bisogno di interfacce audio esterne. Inoltre, il controllo del guadagno integrato permette regolazioni rapide al volo. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 112.99
    },
    {
        id: 559,
        name: "Supporto Laptop Zefiro Ultra 9",
        descrizione: "Il Supporto Laptop Zefiro Ultra 9 migliora la postura e il raffreddamento del tuo portatile. Si ripiega in pochi secondi e sta comodamente in uno zaino, mentre i gommini in silicone proteggono il portatile da graffi e scivolamenti. Inoltre, la struttura in alluminio sostiene portatili fino a 24 pollici. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 77.49
    },
    {
        id: 560,
        name: "Stampante Meridiano Evo Bianco Artico",
        descrizione: "La Stampante Meridiano Evo Bianco Artico è la multifunzione pensata per chi vuole semplicità senza rinunciare alla qualità. Lo scanner piano ad alta risoluzione digitalizza documenti e fotografie in pochi secondi, mentre la modalità silenziosa consente di stampare anche di notte senza disturbare. Inoltre, la connessione Wi-Fi e l'app dedicata permettono di stampare direttamente dallo smartphone. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 269.99
    },
    {
        id: 561,
        name: "Supporto Laptop Sirio Pro Grigio Siderale",
        descrizione: "Il Supporto Laptop Sirio Pro Grigio Siderale migliora la postura e il raffreddamento del tuo portatile. Si ripiega in pochi secondi e sta comodamente in uno zaino, mentre l'altezza e l'inclinazione sono regolabili su più livelli. Inoltre, la base stabile non oscilla nemmeno durante la digitazione più intensa. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 63.9
    },
    {
        id: 562,
        name: "Supporto Laptop Fulmine Studio Grigio Siderale",
        descrizione: "Il Supporto Laptop Fulmine Studio Grigio Siderale porta lo schermo del portatile all'altezza degli occhi, salvando schiena e collo. Si ripiega in pochi secondi e sta comodamente in uno zaino, mentre l'altezza e l'inclinazione sono regolabili su più livelli. Inoltre, i gommini in silicone proteggono il portatile da graffi e scivolamenti. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 65.99
    },
    {
        id: 563,
        name: "SSD Esterno Saetta Ultra 9",
        descrizione: "L'SSD Esterno Saetta Ultra 9 è il modo più rapido per ampliare lo spazio di archiviazione. Le velocità di lettura fino a 2800 MB/s azzerano i tempi di attesa, mentre la capacità di 2 TB offre spazio per migliaia di foto, video e progetti. Inoltre, la scocca resistente a urti e cadute protegge i dati anche in viaggio. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 273.49
    },
    {
        id: 564,
        name: "Controller Onice Air Grafite",
        descrizione: "Il Controller Onice Air Grafite mette nelle tue mani il controllo totale di ogni partita. La batteria garantisce fino a 40 ore di gioco senza interruzioni, mentre l'impugnatura gommata antiscivolo resta salda anche nelle partite più intense. Inoltre, gli stick con sensori a effetto Hall eliminano il fastidioso drift nel tempo. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 67.49
    },
    {
        id: 565,
        name: "Controller Silenzio Elite Blu Oceano",
        descrizione: "Il Controller Silenzio Elite Blu Oceano unisce un'impugnatura comoda a una precisione chirurgica. Gli stick con sensori a effetto Hall eliminano il fastidioso drift nel tempo, mentre i grilletti con corsa regolabile si adattano a sparatutto e giochi di guida. Inoltre, la vibrazione a doppio motore restituisce ogni impatto e ogni esplosione. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 174.99
    },
    {
        id: 566,
        name: "Webcam Cometa Air 7",
        descrizione: "La Webcam Cometa Air 7 porta una qualità d'immagine professionale sulla tua scrivania. Il copriobiettivo integrato garantisce privacy totale quando non la usi, mentre la clip universale si fissa saldamente a monitor, portatili e treppiedi. Inoltre, il sensore in risoluzione 4K cattura ogni dettaglio con colori naturali. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 38.99
    },
    {
        id: 567,
        name: "Casse Astra Studio 4",
        descrizione: "Le Casse Astra Studio 4 riempiono la stanza con un suono potente e sorprendentemente definito. Le casse in legno MDF riducono le risonanze indesiderate, mentre i woofer in fibra di carta garantiscono bassi caldi e ben controllati. Inoltre, i tweeter in seta restituiscono alti morbidi e mai affaticanti. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 229.99
    },
    {
        id: 568,
        name: "Stampante Fenice Elite 3",
        descrizione: "La Stampante Fenice Elite 3 unisce costi di stampa contenuti a prestazioni di livello professionale. Lo scanner piano ad alta risoluzione digitalizza documenti e fotografie in pochi secondi, mentre la connessione Wi-Fi e l'app dedicata permettono di stampare direttamente dallo smartphone. Inoltre, il sistema a serbatoi ricaricabili abbatte drasticamente il costo per pagina. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 477.9
    },
    {
        id: 569,
        name: "Supporto Laptop Iride Core Nero Notte",
        descrizione: "Il Supporto Laptop Iride Core Nero Notte unisce eleganza minimalista e solidità a tutta prova. La struttura in alluminio sostiene portatili fino a 32 pollici, mentre i gommini in silicone proteggono il portatile da graffi e scivolamenti. Inoltre, l'altezza e l'inclinazione sono regolabili su più livelli. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 50.49
    },
    {
        id: 570,
        name: "Webcam Ossidiana Elite Blu Oceano",
        descrizione: "La Webcam Ossidiana Elite Blu Oceano ti fa apparire al meglio in ogni videochiamata, riunione o diretta. Funziona in modalità plug-and-play senza driver con tutte le principali piattaforme di videochiamata, mentre l'autofocus rapido mantiene il volto sempre a fuoco anche quando ti muovi. Inoltre, il campo visivo di 78° inquadra comodamente anche più persone. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 194.49
    },
    {
        id: 571,
        name: "Casse Ferro Core 3",
        descrizione: "Le Casse Ferro Core 3 uniscono un design raffinato a una resa sonora di alto livello. Le casse in legno MDF riducono le risonanze indesiderate, mentre l'illuminazione RGB sincronizzata con la musica crea atmosfera. Inoltre, il telecomando incluso consente di gestire il volume dal divano. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 160.99
    },
    {
        id: 572,
        name: "SSD Esterno Levante Lite Verde Salvia",
        descrizione: "L'SSD Esterno Levante Lite Verde Salvia è pensato per fotografi, videomaker e professionisti in movimento. Le velocità di lettura fino a 2800 MB/s azzerano i tempi di attesa, mentre la certificazione IP65 lo difende da polvere e schizzi d'acqua. Inoltre, la capacità di 1 TB offre spazio per migliaia di foto, video e progetti. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 97.99
    },
    {
        id: 573,
        name: "Tastiera Graffio Elite 7",
        descrizione: "La Tastiera Graffio Elite 7 combina un design essenziale a una risposta dei tasti sorprendentemente reattiva. La batteria da 5000 mAh garantisce settimane di utilizzo senza ricarica, mentre il telaio in alluminio spazzolato elimina flessioni e vibrazioni durante la digitazione. Inoltre, il poggiapolsi magnetico in similpelle sostiene i polsi nelle sessioni più lunghe. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 192.99
    },
    {
        id: 574,
        name: "Tastiera Cobalto Core Bianco Artico",
        descrizione: "La Tastiera Cobalto Core Bianco Artico regala una sensazione di digitazione solida, precisa e appagante. Gli switch meccanici hot-swap si sostituiscono senza saldature, per personalizzare il feeling di ogni tasto, mentre il layout italiano completo include tastierino numerico e tasti multimediali dedicati. Inoltre, la batteria da 5000 mAh garantisce settimane di utilizzo senza ricarica. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 94.9
    },
    {
        id: 575,
        name: "Tappetino Drago Max 2",
        descrizione: "Il Tappetino Drago Max 2 dà ordine e stile a tutta la postazione di lavoro. La superficie in microtessuto è ottimizzata per sensori ottici e laser, mentre il formato esteso da 120x60 cm ospita comodamente mouse e tastiera. Inoltre, la base in gomma naturale antiscivolo lo mantiene fermo in ogni situazione. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 48.49
    },
    {
        id: 576,
        name: "Hub USB Vulcano Core 7",
        descrizione: "L'Hub USB Vulcano Core 7 mette ordine tra cavi e periferiche in un attimo. Il trasferimento dati a 10 Gbps rende rapidissime le copie di file, mentre la ricarica passthrough fino a 100 W alimenta il portatile mentre lavori. Inoltre, la scocca in alluminio dissipa il calore anche sotto carico. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 61.99
    },
    {
        id: 577,
        name: "Lampada Monitor Kraken Lite 7",
        descrizione: "La Lampada Monitor Kraken Lite 7 è il tocco di luce che mancava alla tua postazione. L'alimentazione USB-C elimina la necessità di prese aggiuntive, mentre la retroilluminazione RGB posteriore crea un'atmosfera rilassante. Inoltre, il controller wireless a rotella permette regolazioni immediate. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Ideale sia per l'ufficio sia per il setup di casa. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 45.99
    },
    {
        id: 578,
        name: "Monitor Riflesso Prime 9",
        descrizione: "Il Monitor Riflesso Prime 9 offre una qualità d'immagine che fa la differenza tanto nel lavoro quanto nel gioco. Il supporto HDR esalta contrasti e luminosità nei contenuti compatibili, mentre la tecnologia flicker-free e il filtro per la luce blu riducono l'affaticamento visivo. Inoltre, il supporto ergonomico regolabile in altezza, inclinazione e rotazione si adatta a ogni postura. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 676.49
    },
    {
        id: 579,
        name: "Monitor Ferro Evo Sabbia",
        descrizione: "Il Monitor Ferro Evo Sabbia offre una qualità d'immagine che fa la differenza tanto nel lavoro quanto nel gioco. Il supporto HDR esalta contrasti e luminosità nei contenuti compatibili, mentre il pannello IPS da 24 pollici con risoluzione Full HD restituisce dettagli nitidissimi. Inoltre, le cornici ultrasottili su tre lati lo rendono perfetto per configurazioni multi-monitor. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 329.99
    },
    {
        id: 580,
        name: "Tastiera Brezza Plus Grafite",
        descrizione: "La Tastiera Brezza Plus Grafite porta sulla scrivania la qualità costruttiva delle tastiere da collezione. I keycap in PBT double-shot resistono all'usura e non diventano lucidi con il tempo, mentre lo strato di smorzamento interno in silicone attenua il rumore di battitura. Inoltre, la connessione tri-mode (Bluetooth, 2,4 GHz e cavo) si adatta a qualsiasi postazione. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 77.49
    },
    {
        id: 581,
        name: "Supporto Laptop Altair Evo Bianco Artico",
        descrizione: "Il Supporto Laptop Altair Evo Bianco Artico unisce eleganza minimalista e solidità a tutta prova. L'altezza e l'inclinazione sono regolabili su più livelli, mentre i gommini in silicone proteggono il portatile da graffi e scivolamenti. Inoltre, il design aperto favorisce la circolazione dell'aria e riduce le temperature. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 43.99
    },
    {
        id: 582,
        name: "Webcam Pulsar One 6",
        descrizione: "La Webcam Pulsar One 6 trasforma lo smart working con immagini nitide e un audio limpido. Il sensore in risoluzione 2K cattura ogni dettaglio con colori naturali, mentre l'autofocus rapido mantiene il volto sempre a fuoco anche quando ti muovi. Inoltre, funziona in modalità plug-and-play senza driver con tutte le principali piattaforme di videochiamata. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 52.9
    },
    {
        id: 583,
        name: "Controller Scirocco Elite 3",
        descrizione: "Il Controller Scirocco Elite 3 è progettato per competere ai massimi livelli e vincere. L'impugnatura gommata antiscivolo resta salda anche nelle partite più intense, mentre le palette posteriori rimappabili permettono comandi rapidissimi. Inoltre, i grilletti con corsa regolabile si adattano a sparatutto e giochi di guida. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 175.99
    },
    {
        id: 584,
        name: "SSD Esterno Cometa Plus 2",
        descrizione: "L'SSD Esterno Cometa Plus 2 mette al sicuro i tuoi file e li porta ovunque alla massima velocità. La connessione USB-C è compatibile con PC, Mac, tablet e console, mentre le velocità di lettura fino a 2000 MB/s azzerano i tempi di attesa. Inoltre, la certificazione IP65 lo difende da polvere e schizzi d'acqua. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 150.9
    },
    {
        id: 585,
        name: "Tastiera Vetta Pro 8",
        descrizione: "La Tastiera Vetta Pro 8 combina un design essenziale a una risposta dei tasti sorprendentemente reattiva. La retroilluminazione RGB per singolo tasto offre oltre 30 effetti configurabili, mentre i keycap in PBT double-shot resistono all'usura e non diventano lucidi con il tempo. Inoltre, il telaio in alluminio spazzolato elimina flessioni e vibrazioni durante la digitazione. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 152.99
    },
    {
        id: 586,
        name: "Tastiera Riflesso One Verde Salvia",
        descrizione: "La Tastiera Riflesso One Verde Salvia porta sulla scrivania la qualità costruttiva delle tastiere da collezione. Il telaio in alluminio spazzolato elimina flessioni e vibrazioni durante la digitazione, mentre gli switch meccanici hot-swap si sostituiscono senza saldature, per personalizzare il feeling di ogni tasto. Inoltre, lo strato di smorzamento interno in silicone attenua il rumore di battitura. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 28.99
    },
    {
        id: 587,
        name: "Tastiera Brezza Max Sabbia",
        descrizione: "La Tastiera Brezza Max Sabbia regala una sensazione di digitazione solida, precisa e appagante. Il poggiapolsi magnetico in similpelle sostiene i polsi nelle sessioni più lunghe, mentre gli switch meccanici hot-swap si sostituiscono senza saldature, per personalizzare il feeling di ogni tasto. Inoltre, i keycap in PBT double-shot resistono all'usura e non diventano lucidi con il tempo. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 203.99
    },
    {
        id: 588,
        name: "Stampante Carbonio Max Rosso Corsa",
        descrizione: "La Stampante Carbonio Max Rosso Corsa unisce costi di stampa contenuti a prestazioni di livello professionale. Stampa fino a 15 pagine al minuto con testi nitidi e neri profondi, mentre la connessione Wi-Fi e l'app dedicata permettono di stampare direttamente dallo smartphone. Inoltre, la stampa fronte/retro automatica riduce il consumo di carta. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 492.99
    },
    {
        id: 589,
        name: "Controller Aquila Air 9",
        descrizione: "Il Controller Aquila Air 9 rende ogni sessione di gioco più coinvolgente e reattiva. La batteria garantisce fino a 80 ore di gioco senza interruzioni, mentre i grilletti con corsa regolabile si adattano a sparatutto e giochi di guida. Inoltre, la vibrazione a doppio motore restituisce ogni impatto e ogni esplosione. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 52.99
    },
    {
        id: 590,
        name: "Microfono Solaris Core Titanio",
        descrizione: "Il Microfono Solaris Core Titanio porta qualità broadcast in qualsiasi stanza della casa. Il supporto antivibrazione e il filtro anti-pop sono inclusi nella confezione, mentre il pulsante mute touch con indicatore LED evita imbarazzi durante le dirette. Inoltre, il controllo del guadagno integrato permette regolazioni rapide al volo. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 130.99
    },
    {
        id: 591,
        name: "Stampante Glaciale One 3",
        descrizione: "La Stampante Glaciale One 3 è la multifunzione pensata per chi vuole semplicità senza rinunciare alla qualità. La connessione Wi-Fi e l'app dedicata permettono di stampare direttamente dallo smartphone, mentre il vassoio da 100 fogli limita le interruzioni per il caricamento della carta. Inoltre, la stampa fronte/retro automatica riduce il consumo di carta. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 71.99
    },
    {
        id: 592,
        name: "SSD Esterno Cobalto Prime 6",
        descrizione: "L'SSD Esterno Cobalto Prime 6 è il modo più rapido per ampliare lo spazio di archiviazione. La crittografia hardware AES a 256 bit protegge i dati sensibili, mentre la certificazione IP65 lo difende da polvere e schizzi d'acqua. Inoltre, il software di backup automatico incluso rende semplice proteggere i file. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 246.99
    },
    {
        id: 593,
        name: "Tastiera Riflesso Evo Sabbia",
        descrizione: "La Tastiera Riflesso Evo Sabbia combina un design essenziale a una risposta dei tasti sorprendentemente reattiva. Lo strato di smorzamento interno in silicone attenua il rumore di battitura, mentre la batteria da 4000 mAh garantisce settimane di utilizzo senza ricarica. Inoltre, il poggiapolsi magnetico in similpelle sostiene i polsi nelle sessioni più lunghe. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 72.49
    },
    {
        id: 594,
        name: "Casse Tuono Core Grafite",
        descrizione: "Le Casse Tuono Core Grafite trasformano la scrivania in un piccolo studio d'ascolto. La potenza complessiva di 100 W assicura un volume pieno senza distorsioni, mentre i tweeter in seta restituiscono alti morbidi e mai affaticanti. Inoltre, gli ingressi Bluetooth, ottico e AUX permettono di collegare qualsiasi sorgente. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 118.9
    },
    {
        id: 595,
        name: "SSD Esterno Opale Studio 8",
        descrizione: "L'SSD Esterno Opale Studio 8 è il modo più rapido per ampliare lo spazio di archiviazione. Le velocità di lettura fino a 2000 MB/s azzerano i tempi di attesa, mentre la connessione USB-C è compatibile con PC, Mac, tablet e console. Inoltre, la scocca resistente a urti e cadute protegge i dati anche in viaggio. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 224.49
    },
    {
        id: 596,
        name: "Stampante Aurora Air Sabbia",
        descrizione: "La Stampante Aurora Air Sabbia porta in casa e in ufficio stampe nitide, veloci e affidabili. Lo scanner piano ad alta risoluzione digitalizza documenti e fotografie in pochi secondi, mentre la stampa fronte/retro automatica riduce il consumo di carta. Inoltre, il display touch a colori rende intuitiva ogni operazione. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Ideale sia per l'ufficio sia per il setup di casa. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 163.99
    },
    {
        id: 597,
        name: "Router Orione Max Titanio",
        descrizione: "Il Router Orione Max Titanio è pensato per famiglie connesse, gamer e professionisti in smart working. L'app di configurazione guida l'installazione in pochi minuti, mentre la tecnologia mesh consente di estendere la copertura aggiungendo altri nodi. Inoltre, la priorità QoS dà la precedenza a gaming e videochiamate. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 326.99
    },
    {
        id: 598,
        name: "SSD Esterno Opale Lite Rosso Corsa",
        descrizione: "L'SSD Esterno Opale Lite Rosso Corsa mette al sicuro i tuoi file e li porta ovunque alla massima velocità. Le velocità di lettura fino a 1050 MB/s azzerano i tempi di attesa, mentre la scocca resistente a urti e cadute protegge i dati anche in viaggio. Inoltre, la certificazione IP65 lo difende da polvere e schizzi d'acqua. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 62.9
    },
    {
        id: 599,
        name: "SSD Esterno Maestrale Core 7",
        descrizione: "L'SSD Esterno Maestrale Core 7 mette al sicuro i tuoi file e li porta ovunque alla massima velocità. La connessione USB-C è compatibile con PC, Mac, tablet e console, mentre le velocità di lettura fino a 2000 MB/s azzerano i tempi di attesa. Inoltre, il software di backup automatico incluso rende semplice proteggere i file. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 176.49
    },
    {
        id: 600,
        name: "Hub USB Saetta Prime Verde Salvia",
        descrizione: "L'Hub USB Saetta Prime Verde Salvia mette ordine tra cavi e periferiche in un attimo. La porta Ethernet gigabit assicura una connessione cablata stabile, mentre offre 5 porte, tra cui USB-A, USB-C, HDMI e lettore di schede SD. Inoltre, la ricarica passthrough fino a 100 W alimenta il portatile mentre lavori. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 77.99
    },
    {
        id: 601,
        name: "Tastiera Vertex Evo 4",
        descrizione: "La Tastiera Vertex Evo 4 regala una sensazione di digitazione solida, precisa e appagante. La retroilluminazione RGB per singolo tasto offre oltre 24 effetti configurabili, mentre il telaio in alluminio spazzolato elimina flessioni e vibrazioni durante la digitazione. Inoltre, i keycap in PBT double-shot resistono all'usura e non diventano lucidi con il tempo. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 88.99
    },
    {
        id: 602,
        name: "Tappetino Scoglio Plus Verde Salvia",
        descrizione: "Il Tappetino Scoglio Plus Verde Salvia è il dettaglio che fa la differenza tra un buon setup e uno eccellente. La superficie in microtessuto è ottimizzata per sensori ottici e laser, mentre si lava facilmente e torna come nuovo in pochi minuti. Inoltre, lo spessore di 4 mm offre il giusto sostegno al polso. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 31.99
    },
    {
        id: 603,
        name: "SSD Esterno Prisma Elite Verde Salvia",
        descrizione: "L'SSD Esterno Prisma Elite Verde Salvia unisce dimensioni tascabili a prestazioni da disco interno. La connessione USB-C è compatibile con PC, Mac, tablet e console, mentre le velocità di lettura fino a 2000 MB/s azzerano i tempi di attesa. Inoltre, la scocca resistente a urti e cadute protegge i dati anche in viaggio. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 293.49
    },
    {
        id: 604,
        name: "Tappetino Prisma Core Nero Notte",
        descrizione: "Il Tappetino Prisma Core Nero Notte dà ordine e stile a tutta la postazione di lavoro. I bordi cuciti impediscono lo sfilacciamento nel tempo, mentre la superficie in microtessuto è ottimizzata per sensori ottici e laser. Inoltre, il formato esteso da 90x40 cm ospita comodamente mouse e tastiera. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 30.99
    },
    {
        id: 605,
        name: "Webcam Iride Elite 3",
        descrizione: "La Webcam Iride Elite 3 ti fa apparire al meglio in ogni videochiamata, riunione o diretta. L'autofocus rapido mantiene il volto sempre a fuoco anche quando ti muovi, mentre il sensore in risoluzione 2K cattura ogni dettaglio con colori naturali. Inoltre, i due microfoni stereo con riduzione del rumore catturano la voce in modo chiaro. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 165.99
    },
    {
        id: 606,
        name: "Tastiera Polaris Lite 7",
        descrizione: "La Tastiera Polaris Lite 7 combina un design essenziale a una risposta dei tasti sorprendentemente reattiva. La retroilluminazione RGB per singolo tasto offre oltre 18 effetti configurabili, mentre la connessione tri-mode (Bluetooth, 2,4 GHz e cavo) si adatta a qualsiasi postazione. Inoltre, lo strato di smorzamento interno in silicone attenua il rumore di battitura. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 53.99
    },
    {
        id: 607,
        name: "Lampada Monitor Graffio Evo 1",
        descrizione: "La Lampada Monitor Graffio Evo 1 è il tocco di luce che mancava alla tua postazione. Si aggancia a monitor piatti e curvi senza viti né adesivi, mentre la luminosità si adatta automaticamente alla luce dell'ambiente. Inoltre, la temperatura colore è regolabile da 2700 K a 6500 K. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 54.9
    },
    {
        id: 608,
        name: "Monitor Plasma Elite Grigio Siderale",
        descrizione: "Il Monitor Plasma Elite Grigio Siderale offre una qualità d'immagine che fa la differenza tanto nel lavoro quanto nel gioco. La frequenza di aggiornamento di 240 Hz rende ogni movimento incredibilmente fluido, mentre il supporto ergonomico regolabile in altezza, inclinazione e rotazione si adatta a ogni postura. Inoltre, il pannello IPS da 32 pollici con risoluzione WQHD restituisce dettagli nitidissimi. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 744.9
    },
    {
        id: 609,
        name: "SSD Esterno Condor Air Nero Notte",
        descrizione: "L'SSD Esterno Condor Air Nero Notte mette al sicuro i tuoi file e li porta ovunque alla massima velocità. La certificazione IP65 lo difende da polvere e schizzi d'acqua, mentre la scocca resistente a urti e cadute protegge i dati anche in viaggio. Inoltre, la connessione USB-C è compatibile con PC, Mac, tablet e console. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 79.9
    },
    {
        id: 610,
        name: "Webcam Vortex Ultra Bianco Artico",
        descrizione: "La Webcam Vortex Ultra Bianco Artico ti fa apparire al meglio in ogni videochiamata, riunione o diretta. Il sensore in risoluzione Full HD 1080p cattura ogni dettaglio con colori naturali, mentre il copriobiettivo integrato garantisce privacy totale quando non la usi. Inoltre, la registrazione a 60 fps rende fluidi anche streaming e tutorial. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 193.99
    },
    {
        id: 611,
        name: "Monitor Ferro Max 8",
        descrizione: "Il Monitor Ferro Max 8 offre una qualità d'immagine che fa la differenza tanto nel lavoro quanto nel gioco. La tecnologia flicker-free e il filtro per la luce blu riducono l'affaticamento visivo, mentre il tempo di risposta di 1 ms elimina scie e sfocature nelle scene più veloci. Inoltre, le cornici ultrasottili su tre lati lo rendono perfetto per configurazioni multi-monitor. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 817.99
    },
    {
        id: 612,
        name: "Cuffie Aurora Lite Nero Notte",
        descrizione: "Le Cuffie Aurora Lite Nero Notte portano l'esperienza d'ascolto a un livello superiore, ovunque tu sia. La connessione Bluetooth 5.3 multipoint le collega a due dispositivi contemporaneamente, mentre i cuscinetti in memory foam rivestiti in tessuto traspirante non affaticano le orecchie. Inoltre, la struttura pieghevole e la custodia rigida le rendono perfette in viaggio. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 97.99
    },
    {
        id: 613,
        name: "Webcam Cassiopea Core Lavanda",
        descrizione: "La Webcam Cassiopea Core Lavanda ti fa apparire al meglio in ogni videochiamata, riunione o diretta. La registrazione a 60 fps rende fluidi anche streaming e tutorial, mentre il campo visivo di 95° inquadra comodamente anche più persone. Inoltre, il sensore in risoluzione 2K cattura ogni dettaglio con colori naturali. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 101.49
    },
    {
        id: 614,
        name: "Router Scoglio One 5",
        descrizione: "Il Router Scoglio One 5 è pensato per famiglie connesse, gamer e professionisti in smart working. La porta WAN da 2,5 Gbps sfrutta al massimo le connessioni in fibra ottica, mentre lo standard Wi-Fi 7 raggiunge velocità combinate fino a 11 Gbps. Inoltre, la priorità QoS dà la precedenza a gaming e videochiamate. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 45.99
    },
    {
        id: 615,
        name: "Hub USB Brezza Prime 7",
        descrizione: "L'Hub USB Brezza Prime 7 è la soluzione definitiva alla carenza di porte dei laptop moderni. L'uscita HDMI supporta monitor esterni fino a 4K a 60 Hz, mentre la ricarica passthrough fino a 100 W alimenta il portatile mentre lavori. Inoltre, la porta Ethernet gigabit assicura una connessione cablata stabile. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 85.99
    },
    {
        id: 616,
        name: "Lampada Monitor Solaris Evo 8",
        descrizione: "La Lampada Monitor Solaris Evo 8 illumina la scrivania in modo uniforme senza creare riflessi sullo schermo. L'alimentazione USB-C elimina la necessità di prese aggiuntive, mentre la luminosità si adatta automaticamente alla luce dell'ambiente. Inoltre, la temperatura colore è regolabile da 2700 K a 6500 K. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 50.49
    },
    {
        id: 617,
        name: "Monitor Condor Max Titanio",
        descrizione: "Il Monitor Condor Max Titanio offre una qualità d'immagine che fa la differenza tanto nel lavoro quanto nel gioco. Il tempo di risposta di 1 ms elimina scie e sfocature nelle scene più veloci, mentre la copertura del 99% dello spazio colore sRGB lo rende adatto a fotoritocco e grafica. Inoltre, la tecnologia flicker-free e il filtro per la luce blu riducono l'affaticamento visivo. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 735.99
    },
    {
        id: 618,
        name: "Tastiera Zenith Core Lavanda",
        descrizione: "La Tastiera Zenith Core Lavanda regala una sensazione di digitazione solida, precisa e appagante. La batteria da 5000 mAh garantisce settimane di utilizzo senza ricarica, mentre gli switch meccanici hot-swap si sostituiscono senza saldature, per personalizzare il feeling di ogni tasto. Inoltre, la connessione tri-mode (Bluetooth, 2,4 GHz e cavo) si adatta a qualsiasi postazione. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 82.99
    },
    {
        id: 619,
        name: "Supporto Laptop Luna Elite Lavanda",
        descrizione: "Il Supporto Laptop Luna Elite Lavanda porta lo schermo del portatile all'altezza degli occhi, salvando schiena e collo. L'altezza e l'inclinazione sono regolabili su più livelli, mentre la base stabile non oscilla nemmeno durante la digitazione più intensa. Inoltre, la struttura in alluminio sostiene portatili fino a 34 pollici. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 81.99
    },
    {
        id: 620,
        name: "Casse Astra Prime Verde Salvia",
        descrizione: "Le Casse Astra Prime Verde Salvia riempiono la stanza con un suono potente e sorprendentemente definito. I controlli di bassi e acuti permettono di adattare il suono all'ambiente, mentre il telecomando incluso consente di gestire il volume dal divano. Inoltre, i tweeter in seta restituiscono alti morbidi e mai affaticanti. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 213.9
    },
    {
        id: 621,
        name: "SSD Esterno Glaciale Pro Blu Oceano",
        descrizione: "L'SSD Esterno Glaciale Pro Blu Oceano unisce dimensioni tascabili a prestazioni da disco interno. Le velocità di lettura fino a 1050 MB/s azzerano i tempi di attesa, mentre la capacità di 2 TB offre spazio per migliaia di foto, video e progetti. Inoltre, la crittografia hardware AES a 256 bit protegge i dati sensibili. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 245.99
    },
    {
        id: 622,
        name: "Lampada Monitor Condor Lite Lavanda",
        descrizione: "La Lampada Monitor Condor Lite Lavanda rende più piacevoli e meno faticose le sessioni di lavoro serali. Si aggancia a monitor piatti e curvi senza viti né adesivi, mentre l'alimentazione USB-C elimina la necessità di prese aggiuntive. Inoltre, il fascio luminoso asimmetrico illumina la scrivania senza abbagliare. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 33.49
    },
    {
        id: 623,
        name: "Mouse Condor Lite Bianco Artico",
        descrizione: "Il Mouse Condor Lite Bianco Artico nasce per chi vuole precisione assoluta a ogni movimento del polso. La connessione wireless a bassa latenza garantisce una risposta istantanea, paragonabile a quella di un cavo, mentre il peso ridotto a soli 72 grammi riduce l'affaticamento della mano. Inoltre, i piedini in PTFE puro assicurano uno scorrimento silenzioso e privo di attrito. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 29.99
    },
    {
        id: 624,
        name: "Supporto Laptop Tuono One 4",
        descrizione: "Il Supporto Laptop Tuono One 4 porta lo schermo del portatile all'altezza degli occhi, salvando schiena e collo. I gommini in silicone proteggono il portatile da graffi e scivolamenti, mentre la base stabile non oscilla nemmeno durante la digitazione più intensa. Inoltre, l'altezza e l'inclinazione sono regolabili su più livelli. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 37.49
    },
    {
        id: 625,
        name: "Hub USB Carbonio Prime Grafite",
        descrizione: "L'Hub USB Carbonio Prime Grafite trasforma qualsiasi portatile in una vera postazione desktop. La scocca in alluminio dissipa il calore anche sotto carico, mentre la ricarica passthrough fino a 100 W alimenta il portatile mentre lavori. Inoltre, offre 9 porte, tra cui USB-A, USB-C, HDMI e lettore di schede SD. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 81.99
    },
    {
        id: 626,
        name: "Lampada Monitor Glaciale Elite Lavanda",
        descrizione: "La Lampada Monitor Glaciale Elite Lavanda illumina la scrivania in modo uniforme senza creare riflessi sullo schermo. La retroilluminazione RGB posteriore crea un'atmosfera rilassante, mentre la temperatura colore è regolabile da 2700 K a 6500 K. Inoltre, il controller wireless a rotella permette regolazioni immediate. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 104.99
    },
    {
        id: 627,
        name: "Mouse Nova Studio Sabbia",
        descrizione: "Il Mouse Nova Studio Sabbia trasforma ogni clic in un gesto rapido, fluido e naturale. I piedini in PTFE puro assicurano uno scorrimento silenzioso e privo di attrito, mentre i pulsanti laterali programmabili permettono di richiamare scorciatoie e macro con un solo tocco. Inoltre, il peso ridotto a soli 49 grammi riduce l'affaticamento della mano. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 110.49
    },
    {
        id: 628,
        name: "Tastiera Andromeda One Lavanda",
        descrizione: "La Tastiera Andromeda One Lavanda porta sulla scrivania la qualità costruttiva delle tastiere da collezione. Gli switch meccanici hot-swap si sostituiscono senza saldature, per personalizzare il feeling di ogni tasto, mentre il layout italiano completo include tastierino numerico e tasti multimediali dedicati. Inoltre, i keycap in PBT double-shot resistono all'usura e non diventano lucidi con il tempo. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 51.9
    },
    {
        id: 629,
        name: "Lampada Monitor Altair One Verde Salvia",
        descrizione: "La Lampada Monitor Altair One Verde Salvia rende più piacevoli e meno faticose le sessioni di lavoro serali. La luminosità si adatta automaticamente alla luce dell'ambiente, mentre il fascio luminoso asimmetrico illumina la scrivania senza abbagliare. Inoltre, l'alimentazione USB-C elimina la necessità di prese aggiuntive. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 27.49
    },
    {
        id: 630,
        name: "Hub USB Nova One Lavanda",
        descrizione: "L'Hub USB Nova One Lavanda è la soluzione definitiva alla carenza di porte dei laptop moderni. La ricarica passthrough fino a 100 W alimenta il portatile mentre lavori, mentre il trasferimento dati a 10 Gbps rende rapidissime le copie di file. Inoltre, è plug-and-play e compatibile con Windows, macOS e Linux. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 35.49
    },
    {
        id: 631,
        name: "Lampada Monitor Graffio Prime 3",
        descrizione: "La Lampada Monitor Graffio Prime 3 illumina la scrivania in modo uniforme senza creare riflessi sullo schermo. La retroilluminazione RGB posteriore crea un'atmosfera rilassante, mentre il fascio luminoso asimmetrico illumina la scrivania senza abbagliare. Inoltre, si aggancia a monitor piatti e curvi senza viti né adesivi. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 84.49
    },
    {
        id: 632,
        name: "Mouse Graffio Prime Rosso Corsa",
        descrizione: "Il Mouse Graffio Prime Rosso Corsa trasforma ogni clic in un gesto rapido, fluido e naturale. Il peso ridotto a soli 72 grammi riduce l'affaticamento della mano, mentre la rotella in metallo con scorrimento a frizione variabile rende rapidissima la navigazione di documenti lunghi. Inoltre, il sensore ottico da 16000 DPI traccia ogni spostamento senza scatti anche sulle superfici più difficili. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 95.99
    },
    {
        id: 633,
        name: "Mouse Levante One 5",
        descrizione: "Il Mouse Levante One 5 è il compagno ideale per lunghe sessioni di lavoro e di gioco. La rotella in metallo con scorrimento a frizione variabile rende rapidissima la navigazione di documenti lunghi, mentre la batteria ricaricabile via USB-C offre fino a 70 ore di autonomia con una singola carica. Inoltre, il sensore ottico da 30000 DPI traccia ogni spostamento senza scatti anche sulle superfici più difficili. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 33.99
    },
    {
        id: 634,
        name: "Monitor Onda Studio Grafite",
        descrizione: "Il Monitor Onda Studio Grafite ridefinisce la postazione con cornici sottilissime e un pannello di alto livello. La tecnologia flicker-free e il filtro per la luce blu riducono l'affaticamento visivo, mentre le cornici ultrasottili su tre lati lo rendono perfetto per configurazioni multi-monitor. Inoltre, la porta USB-C con alimentazione fino a 65 W collega e ricarica il portatile con un solo cavo. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 669.99
    },
    {
        id: 635,
        name: "Casse Levante Air 1",
        descrizione: "Le Casse Levante Air 1 trasformano la scrivania in un piccolo studio d'ascolto. La potenza complessiva di 20 W assicura un volume pieno senza distorsioni, mentre le casse in legno MDF riducono le risonanze indesiderate. Inoltre, i tweeter in seta restituiscono alti morbidi e mai affaticanti. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 41.99
    },
    {
        id: 636,
        name: "Mouse Aquila Max 2",
        descrizione: "Il Mouse Aquila Max 2 nasce per chi vuole precisione assoluta a ogni movimento del polso. La connessione wireless a bassa latenza garantisce una risposta istantanea, paragonabile a quella di un cavo, mentre il sensore ottico da 16000 DPI traccia ogni spostamento senza scatti anche sulle superfici più difficili. Inoltre, la rotella in metallo con scorrimento a frizione variabile rende rapidissima la navigazione di documenti lunghi. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 138.99
    },
    {
        id: 637,
        name: "Cuffie Scoglio Ultra Rosso Corsa",
        descrizione: "Le Cuffie Scoglio Ultra Rosso Corsa uniscono comfort da indossare tutto il giorno e una resa acustica sorprendente. I cuscinetti in memory foam rivestiti in tessuto traspirante non affaticano le orecchie, mentre la modalità a bassa latenza sincronizza perfettamente audio e video nei giochi. Inoltre, la modalità trasparenza permette di sentire l'ambiente circostante senza toglierle. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 345.99
    },
    {
        id: 638,
        name: "Stampante Polaris Elite 5",
        descrizione: "La Stampante Polaris Elite 5 è la multifunzione pensata per chi vuole semplicità senza rinunciare alla qualità. Il display touch a colori rende intuitiva ogni operazione, mentre lo scanner piano ad alta risoluzione digitalizza documenti e fotografie in pochi secondi. Inoltre, stampa fino a 15 pagine al minuto con testi nitidi e neri profondi. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 408.99
    },
    {
        id: 639,
        name: "Mouse Quasar Studio 7",
        descrizione: "Il Mouse Quasar Studio 7 unisce una forma ergonomica studiata a lungo a un sensore di nuova generazione. Il sensore ottico da 30000 DPI traccia ogni spostamento senza scatti anche sulle superfici più difficili, mentre la batteria ricaricabile via USB-C offre fino a 30 ore di autonomia con una singola carica. Inoltre, il peso ridotto a soli 49 grammi riduce l'affaticamento della mano. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 110.99
    },
    {
        id: 640,
        name: "Supporto Laptop Aurora Evo 7",
        descrizione: "Il Supporto Laptop Aurora Evo 7 è l'accessorio ergonomico che trasforma il modo di lavorare. La base stabile non oscilla nemmeno durante la digitazione più intensa, mentre i gommini in silicone proteggono il portatile da graffi e scivolamenti. Inoltre, l'altezza e l'inclinazione sono regolabili su più livelli. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 53.99
    },
    {
        id: 641,
        name: "Lampada Monitor Pulsar Ultra Verde Salvia",
        descrizione: "La Lampada Monitor Pulsar Ultra Verde Salvia è il tocco di luce che mancava alla tua postazione. La retroilluminazione RGB posteriore crea un'atmosfera rilassante, mentre il controller wireless a rotella permette regolazioni immediate. Inoltre, la temperatura colore è regolabile da 2700 K a 6500 K. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 116.99
    },
    {
        id: 642,
        name: "Stampante Sirio Air Verde Salvia",
        descrizione: "La Stampante Sirio Air Verde Salvia è la multifunzione pensata per chi vuole semplicità senza rinunciare alla qualità. La stampa fronte/retro automatica riduce il consumo di carta, mentre il display touch a colori rende intuitiva ogni operazione. Inoltre, le stampe fotografiche a colori hanno toni vividi e sfumature morbide. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 149.99
    },
    {
        id: 643,
        name: "Tastiera Pantera Core 3",
        descrizione: "La Tastiera Pantera Core 3 porta sulla scrivania la qualità costruttiva delle tastiere da collezione. La retroilluminazione RGB per singolo tasto offre oltre 24 effetti configurabili, mentre i keycap in PBT double-shot resistono all'usura e non diventano lucidi con il tempo. Inoltre, la batteria da 4000 mAh garantisce settimane di utilizzo senza ricarica. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 102.9
    },
    {
        id: 644,
        name: "Hub USB Fulmine Elite 1",
        descrizione: "L'Hub USB Fulmine Elite 1 mette ordine tra cavi e periferiche in un attimo. La ricarica passthrough fino a 100 W alimenta il portatile mentre lavori, mentre la porta Ethernet gigabit assicura una connessione cablata stabile. Inoltre, offre 9 porte, tra cui USB-A, USB-C, HDMI e lettore di schede SD. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 112.49
    },
    {
        id: 645,
        name: "Webcam Tempesta Lite Blu Oceano",
        descrizione: "La Webcam Tempesta Lite Blu Oceano trasforma lo smart working con immagini nitide e un audio limpido. La registrazione a 60 fps rende fluidi anche streaming e tutorial, mentre il sensore in risoluzione 2K cattura ogni dettaglio con colori naturali. Inoltre, il copriobiettivo integrato garantisce privacy totale quando non la usi. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 35.99
    },
    {
        id: 646,
        name: "Supporto Laptop Nimbus Air 7",
        descrizione: "Il Supporto Laptop Nimbus Air 7 unisce eleganza minimalista e solidità a tutta prova. I gommini in silicone proteggono il portatile da graffi e scivolamenti, mentre l'altezza e l'inclinazione sono regolabili su più livelli. Inoltre, il design aperto favorisce la circolazione dell'aria e riduce le temperature. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 28.49
    },
    {
        id: 647,
        name: "Hub USB Riflesso Lite 1",
        descrizione: "L'Hub USB Riflesso Lite 1 trasforma qualsiasi portatile in una vera postazione desktop. La ricarica passthrough fino a 100 W alimenta il portatile mentre lavori, mentre è plug-and-play e compatibile con Windows, macOS e Linux. Inoltre, la porta Ethernet gigabit assicura una connessione cablata stabile. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 24.49
    },
    {
        id: 648,
        name: "Microfono Vertex Air Grigio Siderale",
        descrizione: "Il Microfono Vertex Air Grigio Siderale dà alla tua voce la presenza e la chiarezza di uno studio di registrazione. Il pattern cardioide isola la voce dai rumori ambientali, mentre la registrazione a 24 bit/96 kHz garantisce una qualità audio professionale. Inoltre, il controllo del guadagno integrato permette regolazioni rapide al volo. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 39.49
    },
    {
        id: 649,
        name: "Tappetino Ossidiana Studio 7",
        descrizione: "Il Tappetino Ossidiana Studio 7 offre la superficie perfetta per movimenti precisi e controllati. La base in gomma naturale antiscivolo lo mantiene fermo in ogni situazione, mentre si lava facilmente e torna come nuovo in pochi minuti. Inoltre, lo spessore di 5 mm offre il giusto sostegno al polso. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 38.99
    },
    {
        id: 650,
        name: "Supporto Laptop Fulmine Studio Blu Oceano",
        descrizione: "Il Supporto Laptop Fulmine Studio Blu Oceano porta lo schermo del portatile all'altezza degli occhi, salvando schiena e collo. La struttura in alluminio sostiene portatili fino a 27 pollici, mentre l'altezza e l'inclinazione sono regolabili su più livelli. Inoltre, il design aperto favorisce la circolazione dell'aria e riduce le temperature. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 60.49
    },
    {
        id: 651,
        name: "Webcam Nebula Prime Sabbia",
        descrizione: "La Webcam Nebula Prime Sabbia è la soluzione semplice e immediata per chi lavora o studia da remoto. La registrazione a 60 fps rende fluidi anche streaming e tutorial, mentre la clip universale si fissa saldamente a monitor, portatili e treppiedi. Inoltre, il sensore in risoluzione 2K cattura ogni dettaglio con colori naturali. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 153.99
    },
    {
        id: 652,
        name: "Lampada Monitor Nimbus Pro 2",
        descrizione: "La Lampada Monitor Nimbus Pro 2 è il tocco di luce che mancava alla tua postazione. La luminosità si adatta automaticamente alla luce dell'ambiente, mentre si aggancia a monitor piatti e curvi senza viti né adesivi. Inoltre, la retroilluminazione RGB posteriore crea un'atmosfera rilassante. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 90.99
    },
    {
        id: 653,
        name: "Router Prisma One Grigio Siderale",
        descrizione: "Il Router Prisma One Grigio Siderale è pensato per famiglie connesse, gamer e professionisti in smart working. Il parental control integrato permette di gestire orari e contenuti per ogni membro della famiglia, mentre la crittografia WPA3 e il firewall integrato proteggono la rete dalle intrusioni. Inoltre, le antenne ad alto guadagno con beamforming indirizzano il segnale verso i dispositivi. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 86.99
    },
    {
        id: 654,
        name: "Hub USB Onice Studio 9",
        descrizione: "L'Hub USB Onice Studio 9 è la soluzione definitiva alla carenza di porte dei laptop moderni. La porta Ethernet gigabit assicura una connessione cablata stabile, mentre è plug-and-play e compatibile con Windows, macOS e Linux. Inoltre, l'uscita HDMI supporta monitor esterni fino a 4K a 60 Hz. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 79.99
    },
    {
        id: 655,
        name: "Stampante Condor Evo 9",
        descrizione: "La Stampante Condor Evo 9 è la multifunzione pensata per chi vuole semplicità senza rinunciare alla qualità. La modalità silenziosa consente di stampare anche di notte senza disturbare, mentre le stampe fotografiche a colori hanno toni vividi e sfumature morbide. Inoltre, stampa fino a 22 pagine al minuto con testi nitidi e neri profondi. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 200.9
    },
    {
        id: 656,
        name: "Stampante Iride Elite 7",
        descrizione: "La Stampante Iride Elite 7 è la multifunzione pensata per chi vuole semplicità senza rinunciare alla qualità. La stampa fronte/retro automatica riduce il consumo di carta, mentre la connessione Wi-Fi e l'app dedicata permettono di stampare direttamente dallo smartphone. Inoltre, il display touch a colori rende intuitiva ogni operazione. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 454.49
    },
    {
        id: 657,
        name: "Router Mistral Ultra Grafite",
        descrizione: "Il Router Mistral Ultra Grafite elimina le zone morte e i cali di segnale una volta per tutte. La crittografia WPA3 e il firewall integrato proteggono la rete dalle intrusioni, mentre l'app di configurazione guida l'installazione in pochi minuti. Inoltre, le antenne ad alto guadagno con beamforming indirizzano il segnale verso i dispositivi. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 371.99
    },
    {
        id: 658,
        name: "Mouse Aurora Evo 9",
        descrizione: "Il Mouse Aurora Evo 9 unisce una forma ergonomica studiata a lungo a un sensore di nuova generazione. Il peso ridotto a soli 63 grammi riduce l'affaticamento della mano, mentre la rotella in metallo con scorrimento a frizione variabile rende rapidissima la navigazione di documenti lunghi. Inoltre, il sensore ottico da 12000 DPI traccia ogni spostamento senza scatti anche sulle superfici più difficili. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 62.49
    },
    {
        id: 659,
        name: "Tastiera Shadow Ultra 7",
        descrizione: "La Tastiera Shadow Ultra 7 porta sulla scrivania la qualità costruttiva delle tastiere da collezione. Il telaio in alluminio spazzolato elimina flessioni e vibrazioni durante la digitazione, mentre il poggiapolsi magnetico in similpelle sostiene i polsi nelle sessioni più lunghe. Inoltre, lo strato di smorzamento interno in silicone attenua il rumore di battitura. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 218.49
    },
    {
        id: 660,
        name: "Monitor Zenith One 2",
        descrizione: "Il Monitor Zenith One 2 apre una finestra nitida e brillante su tutto ciò che crei e guardi. Le cornici ultrasottili su tre lati lo rendono perfetto per configurazioni multi-monitor, mentre il pannello IPS da 34 pollici con risoluzione Full HD restituisce dettagli nitidissimi. Inoltre, la porta USB-C con alimentazione fino a 65 W collega e ricarica il portatile con un solo cavo. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 297.49
    },
    {
        id: 661,
        name: "Mouse Drago Plus 7",
        descrizione: "Il Mouse Drago Plus 7 unisce una forma ergonomica studiata a lungo a un sensore di nuova generazione. Gli switch ottici sono certificati per oltre 90 milioni di clic, mentre la connessione wireless a bassa latenza garantisce una risposta istantanea, paragonabile a quella di un cavo. Inoltre, i piedini in PTFE puro assicurano uno scorrimento silenzioso e privo di attrito. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 56.99
    },
    {
        id: 662,
        name: "Casse Aquila Pro 2",
        descrizione: "Le Casse Aquila Pro 2 riempiono la stanza con un suono potente e sorprendentemente definito. Gli ingressi Bluetooth, ottico e AUX permettono di collegare qualsiasi sorgente, mentre i woofer in fibra di carta garantiscono bassi caldi e ben controllati. Inoltre, i controlli di bassi e acuti permettono di adattare il suono all'ambiente. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 220.9
    },
    {
        id: 663,
        name: "Stampante Aurora Core 2",
        descrizione: "La Stampante Aurora Core 2 semplifica la gestione dei documenti di tutta la famiglia o del piccolo ufficio. Il vassoio da 250 fogli limita le interruzioni per il caricamento della carta, mentre lo scanner piano ad alta risoluzione digitalizza documenti e fotografie in pochi secondi. Inoltre, le stampe fotografiche a colori hanno toni vividi e sfumature morbide. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 193.99
    },
    {
        id: 664,
        name: "Monitor Onice Plus 9",
        descrizione: "Il Monitor Onice Plus 9 è progettato per chi pretende colori fedeli e una fluidità impeccabile. Il tempo di risposta di 1 ms elimina scie e sfocature nelle scene più veloci, mentre la tecnologia flicker-free e il filtro per la luce blu riducono l'affaticamento visivo. Inoltre, la copertura del 99% dello spazio colore sRGB lo rende adatto a fotoritocco e grafica. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 316.99
    },
    {
        id: 665,
        name: "Microfono Carbonio Max 9",
        descrizione: "Il Microfono Carbonio Max 9 porta qualità broadcast in qualsiasi stanza della casa. Il supporto antivibrazione e il filtro anti-pop sono inclusi nella confezione, mentre il pattern cardioide isola la voce dai rumori ambientali. Inoltre, il pulsante mute touch con indicatore LED evita imbarazzi durante le dirette. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 232.49
    },
    {
        id: 666,
        name: "Webcam Ossidiana Ultra Bianco Artico",
        descrizione: "La Webcam Ossidiana Ultra Bianco Artico è la soluzione semplice e immediata per chi lavora o studia da remoto. Il copriobiettivo integrato garantisce privacy totale quando non la usi, mentre l'autofocus rapido mantiene il volto sempre a fuoco anche quando ti muovi. Inoltre, i due microfoni stereo con riduzione del rumore catturano la voce in modo chiaro. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 180.99
    },
    {
        id: 667,
        name: "Tastiera Titan Max Verde Salvia",
        descrizione: "La Tastiera Titan Max Verde Salvia è pensata per chi scrive molto e non vuole scendere a compromessi sul comfort. Il telaio in alluminio spazzolato elimina flessioni e vibrazioni durante la digitazione, mentre la connessione tri-mode (Bluetooth, 2,4 GHz e cavo) si adatta a qualsiasi postazione. Inoltre, la retroilluminazione RGB per singolo tasto offre oltre 18 effetti configurabili. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 194.49
    },
    {
        id: 668,
        name: "SSD Esterno Meridiano Max Grafite",
        descrizione: "L'SSD Esterno Meridiano Max Grafite unisce dimensioni tascabili a prestazioni da disco interno. La scocca resistente a urti e cadute protegge i dati anche in viaggio, mentre le velocità di lettura fino a 2000 MB/s azzerano i tempi di attesa. Inoltre, la connessione USB-C è compatibile con PC, Mac, tablet e console. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 320.99
    },
    {
        id: 669,
        name: "Hub USB Kraken Evo Grigio Siderale",
        descrizione: "L'Hub USB Kraken Evo Grigio Siderale mette ordine tra cavi e periferiche in un attimo. La ricarica passthrough fino a 100 W alimenta il portatile mentre lavori, mentre il trasferimento dati a 10 Gbps rende rapidissime le copie di file. Inoltre, l'uscita HDMI supporta monitor esterni fino a 4K a 60 Hz. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 57.99
    },
    {
        id: 670,
        name: "Supporto Laptop Ossidiana Core 8",
        descrizione: "Il Supporto Laptop Ossidiana Core 8 porta lo schermo del portatile all'altezza degli occhi, salvando schiena e collo. Si ripiega in pochi secondi e sta comodamente in uno zaino, mentre l'altezza e l'inclinazione sono regolabili su più livelli. Inoltre, i gommini in silicone proteggono il portatile da graffi e scivolamenti. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 42.99
    },
    {
        id: 671,
        name: "Supporto Laptop Vortex Core Nero Notte",
        descrizione: "Il Supporto Laptop Vortex Core Nero Notte è l'accessorio ergonomico che trasforma il modo di lavorare. I gommini in silicone proteggono il portatile da graffi e scivolamenti, mentre il design aperto favorisce la circolazione dell'aria e riduce le temperature. Inoltre, la struttura in alluminio sostiene portatili fino a 27 pollici. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 51.9
    },
    {
        id: 672,
        name: "Cuffie Levante Evo Bianco Artico",
        descrizione: "Le Cuffie Levante Evo Bianco Artico sono pensate per isolarti dal mondo e lasciarti solo con la tua musica. La modalità a bassa latenza sincronizza perfettamente audio e video nei giochi, mentre la cancellazione attiva del rumore riduce il brusio di uffici, treni e aerei. Inoltre, il microfono con riduzione del rumore rende chiarissime chiamate e videoconferenze. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 177.9
    },
    {
        id: 673,
        name: "Webcam Grifone Elite Titanio",
        descrizione: "La Webcam Grifone Elite Titanio trasforma lo smart working con immagini nitide e un audio limpido. La registrazione a 60 fps rende fluidi anche streaming e tutorial, mentre l'autofocus rapido mantiene il volto sempre a fuoco anche quando ti muovi. Inoltre, il copriobiettivo integrato garantisce privacy totale quando non la usi. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 189.49
    },
    {
        id: 674,
        name: "Tastiera Zenith One Rosso Corsa",
        descrizione: "La Tastiera Zenith One Rosso Corsa è pensata per chi scrive molto e non vuole scendere a compromessi sul comfort. La batteria da 4000 mAh garantisce settimane di utilizzo senza ricarica, mentre il layout italiano completo include tastierino numerico e tasti multimediali dedicati. Inoltre, lo strato di smorzamento interno in silicone attenua il rumore di battitura. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 35.99
    },
    {
        id: 675,
        name: "Tastiera Shadow Max Grafite",
        descrizione: "La Tastiera Shadow Max Grafite porta sulla scrivania la qualità costruttiva delle tastiere da collezione. Il telaio in alluminio spazzolato elimina flessioni e vibrazioni durante la digitazione, mentre la connessione tri-mode (Bluetooth, 2,4 GHz e cavo) si adatta a qualsiasi postazione. Inoltre, i keycap in PBT double-shot resistono all'usura e non diventano lucidi con il tempo. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 196.99
    },
    {
        id: 676,
        name: "Supporto Laptop Kraken Air Sabbia",
        descrizione: "Il Supporto Laptop Kraken Air Sabbia migliora la postura e il raffreddamento del tuo portatile. I gommini in silicone proteggono il portatile da graffi e scivolamenti, mentre la base stabile non oscilla nemmeno durante la digitazione più intensa. Inoltre, si ripiega in pochi secondi e sta comodamente in uno zaino. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 31.99
    },
    {
        id: 677,
        name: "Microfono Carbonio Studio 5",
        descrizione: "Il Microfono Carbonio Studio 5 rende ogni parola limpida, calda e piena di carattere. L'uscita cuffie a latenza zero consente di monitorare la propria voce in tempo reale, mentre la registrazione a 24 bit/48 kHz garantisce una qualità audio professionale. Inoltre, il supporto antivibrazione e il filtro anti-pop sono inclusi nella confezione. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 155.99
    },
    {
        id: 678,
        name: "Tastiera Cristallo Plus 2",
        descrizione: "La Tastiera Cristallo Plus 2 porta sulla scrivania la qualità costruttiva delle tastiere da collezione. Il telaio in alluminio spazzolato elimina flessioni e vibrazioni durante la digitazione, mentre la batteria da 5000 mAh garantisce settimane di utilizzo senza ricarica. Inoltre, il poggiapolsi magnetico in similpelle sostiene i polsi nelle sessioni più lunghe. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 116.49
    },
    {
        id: 679,
        name: "Tappetino Dolomia Prime 6",
        descrizione: "Il Tappetino Dolomia Prime 6 dà ordine e stile a tutta la postazione di lavoro. I bordi cuciti impediscono lo sfilacciamento nel tempo, mentre il trattamento idrorepellente protegge da schizzi e macchie. Inoltre, si lava facilmente e torna come nuovo in pochi minuti. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 44.99
    },
    {
        id: 680,
        name: "Mouse Vega Max Bianco Artico",
        descrizione: "Il Mouse Vega Max Bianco Artico trasforma ogni clic in un gesto rapido, fluido e naturale. I pulsanti laterali programmabili permettono di richiamare scorciatoie e macro con un solo tocco, mentre il peso ridotto a soli 63 grammi riduce l'affaticamento della mano. Inoltre, la batteria ricaricabile via USB-C offre fino a 80 ore di autonomia con una singola carica. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 124.99
    },
    {
        id: 681,
        name: "Supporto Laptop Maestrale Core Sabbia",
        descrizione: "Il Supporto Laptop Maestrale Core Sabbia porta lo schermo del portatile all'altezza degli occhi, salvando schiena e collo. Il design aperto favorisce la circolazione dell'aria e riduce le temperature, mentre l'altezza e l'inclinazione sono regolabili su più livelli. Inoltre, si ripiega in pochi secondi e sta comodamente in uno zaino. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 38.49
    },
    {
        id: 682,
        name: "Router Zefiro Evo 4",
        descrizione: "Il Router Zefiro Evo 4 è pensato per famiglie connesse, gamer e professionisti in smart working. La tecnologia mesh consente di estendere la copertura aggiungendo altri nodi, mentre la priorità QoS dà la precedenza a gaming e videochiamate. Inoltre, la crittografia WPA3 e il firewall integrato proteggono la rete dalle intrusioni. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 217.99
    },
    {
        id: 683,
        name: "Stampante Ossidiana One 9",
        descrizione: "La Stampante Ossidiana One 9 è la multifunzione pensata per chi vuole semplicità senza rinunciare alla qualità. La stampa fronte/retro automatica riduce il consumo di carta, mentre la modalità silenziosa consente di stampare anche di notte senza disturbare. Inoltre, la connessione Wi-Fi e l'app dedicata permettono di stampare direttamente dallo smartphone. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 146.9
    },
    {
        id: 684,
        name: "Microfono Pulsar Max 1",
        descrizione: "Il Microfono Pulsar Max 1 porta qualità broadcast in qualsiasi stanza della casa. La capsula a condensatore cattura la voce con dettaglio e naturalezza, mentre si collega in USB-C senza bisogno di interfacce audio esterne. Inoltre, l'uscita cuffie a latenza zero consente di monitorare la propria voce in tempo reale. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 225.99
    },
    {
        id: 685,
        name: "SSD Esterno Brezza Air Lavanda",
        descrizione: "L'SSD Esterno Brezza Air Lavanda è pensato per fotografi, videomaker e professionisti in movimento. La connessione USB-C è compatibile con PC, Mac, tablet e console, mentre il software di backup automatico incluso rende semplice proteggere i file. Inoltre, la certificazione IP65 lo difende da polvere e schizzi d'acqua. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 78.49
    },
    {
        id: 686,
        name: "Stampante Aurora Studio Verde Salvia",
        descrizione: "La Stampante Aurora Studio Verde Salvia unisce costi di stampa contenuti a prestazioni di livello professionale. La connessione Wi-Fi e l'app dedicata permettono di stampare direttamente dallo smartphone, mentre il display touch a colori rende intuitiva ogni operazione. Inoltre, il sistema a serbatoi ricaricabili abbatte drasticamente il costo per pagina. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 363.99
    },
    {
        id: 687,
        name: "Mouse Brezza Core Grafite",
        descrizione: "Il Mouse Brezza Core Grafite trasforma ogni clic in un gesto rapido, fluido e naturale. La connessione wireless a bassa latenza garantisce una risposta istantanea, paragonabile a quella di un cavo, mentre la modalità multi-dispositivo consente di passare da PC a tablet con un pulsante. Inoltre, il peso ridotto a soli 58 grammi riduce l'affaticamento della mano. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 71.9
    },
    {
        id: 688,
        name: "Supporto Laptop Condor Evo 5",
        descrizione: "Il Supporto Laptop Condor Evo 5 migliora la postura e il raffreddamento del tuo portatile. Il design aperto favorisce la circolazione dell'aria e riduce le temperature, mentre la base stabile non oscilla nemmeno durante la digitazione più intensa. Inoltre, si ripiega in pochi secondi e sta comodamente in uno zaino. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 49.99
    },
    {
        id: 689,
        name: "Microfono Tempesta Pro 2",
        descrizione: "Il Microfono Tempesta Pro 2 rende ogni parola limpida, calda e piena di carattere. La capsula a condensatore cattura la voce con dettaglio e naturalezza, mentre si collega in USB-C senza bisogno di interfacce audio esterne. Inoltre, l'uscita cuffie a latenza zero consente di monitorare la propria voce in tempo reale. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 146.99
    },
    {
        id: 690,
        name: "Cuffie Vega Core 7",
        descrizione: "Le Cuffie Vega Core 7 ti avvolgono in un suono pieno, dettagliato e ricco di sfumature. I cuscinetti in memory foam rivestiti in tessuto traspirante non affaticano le orecchie, mentre la cancellazione attiva del rumore riduce il brusio di uffici, treni e aerei. Inoltre, la modalità a bassa latenza sincronizza perfettamente audio e video nei giochi. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 123.99
    },
    {
        id: 691,
        name: "Router Onice Lite Rosso Corsa",
        descrizione: "Il Router Onice Lite Rosso Corsa è pensato per famiglie connesse, gamer e professionisti in smart working. La priorità QoS dà la precedenza a gaming e videochiamate, mentre le antenne ad alto guadagno con beamforming indirizzano il segnale verso i dispositivi. Inoltre, la tecnologia mesh consente di estendere la copertura aggiungendo altri nodi. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 77.99
    },
    {
        id: 692,
        name: "Controller Levante Studio Lavanda",
        descrizione: "Il Controller Levante Studio Lavanda è progettato per competere ai massimi livelli e vincere. La vibrazione a doppio motore restituisce ogni impatto e ogni esplosione, mentre è compatibile con PC, smartphone e le principali console. Inoltre, le palette posteriori rimappabili permettono comandi rapidissimi. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 134.49
    },
    {
        id: 693,
        name: "Lampada Monitor Vulcano Elite Lavanda",
        descrizione: "La Lampada Monitor Vulcano Elite Lavanda libera spazio sulla scrivania portando la luce proprio dove serve. La retroilluminazione RGB posteriore crea un'atmosfera rilassante, mentre la luminosità si adatta automaticamente alla luce dell'ambiente. Inoltre, si aggancia a monitor piatti e curvi senza viti né adesivi. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 109.9
    },
    {
        id: 694,
        name: "Stampante Carbonio One Blu Oceano",
        descrizione: "La Stampante Carbonio One Blu Oceano unisce costi di stampa contenuti a prestazioni di livello professionale. La modalità silenziosa consente di stampare anche di notte senza disturbare, mentre il sistema a serbatoi ricaricabili abbatte drasticamente il costo per pagina. Inoltre, il display touch a colori rende intuitiva ogni operazione. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 124.49
    },
    {
        id: 695,
        name: "Webcam Prisma Pro 8",
        descrizione: "La Webcam Prisma Pro 8 ti fa apparire al meglio in ogni videochiamata, riunione o diretta. Il sensore in risoluzione Full HD 1080p cattura ogni dettaglio con colori naturali, mentre funziona in modalità plug-and-play senza driver con tutte le principali piattaforme di videochiamata. Inoltre, la registrazione a 60 fps rende fluidi anche streaming e tutorial. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 126.49
    },
    {
        id: 696,
        name: "Microfono Carbonio Ultra 6",
        descrizione: "Il Microfono Carbonio Ultra 6 rende ogni parola limpida, calda e piena di carattere. Il pulsante mute touch con indicatore LED evita imbarazzi durante le dirette, mentre la registrazione a 24 bit/96 kHz garantisce una qualità audio professionale. Inoltre, il pattern cardioide isola la voce dai rumori ambientali. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 198.49
    },
    {
        id: 697,
        name: "Supporto Laptop Aurora Lite 1",
        descrizione: "Il Supporto Laptop Aurora Lite 1 migliora la postura e il raffreddamento del tuo portatile. La base stabile non oscilla nemmeno durante la digitazione più intensa, mentre si ripiega in pochi secondi e sta comodamente in uno zaino. Inoltre, i gommini in silicone proteggono il portatile da graffi e scivolamenti. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 31.99
    },
    {
        id: 698,
        name: "Tappetino Cristallo Lite 2",
        descrizione: "Il Tappetino Cristallo Lite 2 offre la superficie perfetta per movimenti precisi e controllati. La superficie in microtessuto è ottimizzata per sensori ottici e laser, mentre il formato esteso da 90x40 cm ospita comodamente mouse e tastiera. Inoltre, la base in gomma naturale antiscivolo lo mantiene fermo in ogni situazione. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 15.9
    },
    {
        id: 699,
        name: "Router Atlas Lite 7",
        descrizione: "Il Router Atlas Lite 7 porta una connessione veloce e stabile in ogni angolo della casa. Lo standard Wi-Fi 7 raggiunge velocità combinate fino a 5,4 Gbps, mentre le antenne ad alto guadagno con beamforming indirizzano il segnale verso i dispositivi. Inoltre, gestisce senza fatica oltre 64 dispositivi connessi contemporaneamente. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 92.49
    },
    {
        id: 700,
        name: "Hub USB Kraken Max Sabbia",
        descrizione: "L'Hub USB Kraken Max Sabbia trasforma qualsiasi portatile in una vera postazione desktop. Il trasferimento dati a 10 Gbps rende rapidissime le copie di file, mentre la ricarica passthrough fino a 100 W alimenta il portatile mentre lavori. Inoltre, la porta Ethernet gigabit assicura una connessione cablata stabile. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 104.99
    },
    {
        id: 701,
        name: "Controller Carbonio Lite Verde Salvia",
        descrizione: "Il Controller Carbonio Lite Verde Salvia è progettato per competere ai massimi livelli e vincere. È compatibile con PC, smartphone e le principali console, mentre le palette posteriori rimappabili permettono comandi rapidissimi. Inoltre, gli stick con sensori a effetto Hall eliminano il fastidioso drift nel tempo. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 43.99
    },
    {
        id: 702,
        name: "Hub USB Brezza Evo 7",
        descrizione: "L'Hub USB Brezza Evo 7 trasforma qualsiasi portatile in una vera postazione desktop. Offre 7 porte, tra cui USB-A, USB-C, HDMI e lettore di schede SD, mentre la porta Ethernet gigabit assicura una connessione cablata stabile. Inoltre, il trasferimento dati a 10 Gbps rende rapidissime le copie di file. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 63.99
    },
    {
        id: 703,
        name: "Mouse Dolomia Elite Lavanda",
        descrizione: "Il Mouse Dolomia Elite Lavanda trasforma ogni clic in un gesto rapido, fluido e naturale. La connessione wireless a bassa latenza garantisce una risposta istantanea, paragonabile a quella di un cavo, mentre la modalità multi-dispositivo consente di passare da PC a tablet con un pulsante. Inoltre, la batteria ricaricabile via USB-C offre fino a 30 ore di autonomia con una singola carica. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 127.49
    },
    {
        id: 704,
        name: "Casse Pantera Air Bianco Artico",
        descrizione: "Le Casse Pantera Air Bianco Artico sono la scelta ideale per musica, film e videogiochi. I tweeter in seta restituiscono alti morbidi e mai affaticanti, mentre l'illuminazione RGB sincronizzata con la musica crea atmosfera. Inoltre, i controlli di bassi e acuti permettono di adattare il suono all'ambiente. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 48.9
    },
    {
        id: 705,
        name: "Webcam Brezza Prime 4",
        descrizione: "La Webcam Brezza Prime 4 è la soluzione semplice e immediata per chi lavora o studia da remoto. Funziona in modalità plug-and-play senza driver con tutte le principali piattaforme di videochiamata, mentre i due microfoni stereo con riduzione del rumore catturano la voce in modo chiaro. Inoltre, il copriobiettivo integrato garantisce privacy totale quando non la usi. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 138.49
    },
    {
        id: 706,
        name: "Tastiera Nimbus Prime 1",
        descrizione: "La Tastiera Nimbus Prime 1 è pensata per chi scrive molto e non vuole scendere a compromessi sul comfort. Il telaio in alluminio spazzolato elimina flessioni e vibrazioni durante la digitazione, mentre la connessione tri-mode (Bluetooth, 2,4 GHz e cavo) si adatta a qualsiasi postazione. Inoltre, lo strato di smorzamento interno in silicone attenua il rumore di battitura. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 165.49
    },
    {
        id: 707,
        name: "Tastiera Lince Max Rosso Corsa",
        descrizione: "La Tastiera Lince Max Rosso Corsa porta sulla scrivania la qualità costruttiva delle tastiere da collezione. La retroilluminazione RGB per singolo tasto offre oltre 24 effetti configurabili, mentre il telaio in alluminio spazzolato elimina flessioni e vibrazioni durante la digitazione. Inoltre, gli switch meccanici hot-swap si sostituiscono senza saldature, per personalizzare il feeling di ogni tasto. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 186.9
    },
    {
        id: 708,
        name: "Router Scoglio Air Sabbia",
        descrizione: "Il Router Scoglio Air Sabbia è pensato per famiglie connesse, gamer e professionisti in smart working. Le antenne ad alto guadagno con beamforming indirizzano il segnale verso i dispositivi, mentre il parental control integrato permette di gestire orari e contenuti per ogni membro della famiglia. Inoltre, l'app di configurazione guida l'installazione in pochi minuti. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 128.49
    },
    {
        id: 709,
        name: "Lampada Monitor Tempesta Elite Grigio Siderale",
        descrizione: "La Lampada Monitor Tempesta Elite Grigio Siderale illumina la scrivania in modo uniforme senza creare riflessi sullo schermo. La retroilluminazione RGB posteriore crea un'atmosfera rilassante, mentre si aggancia a monitor piatti e curvi senza viti né adesivi. Inoltre, il controller wireless a rotella permette regolazioni immediate. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 103.99
    },
    {
        id: 710,
        name: "Tastiera Saetta Evo Blu Oceano",
        descrizione: "La Tastiera Saetta Evo Blu Oceano porta sulla scrivania la qualità costruttiva delle tastiere da collezione. Il telaio in alluminio spazzolato elimina flessioni e vibrazioni durante la digitazione, mentre gli switch meccanici hot-swap si sostituiscono senza saldature, per personalizzare il feeling di ogni tasto. Inoltre, il layout italiano completo include tastierino numerico e tasti multimediali dedicati. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 113.99
    },
    {
        id: 711,
        name: "Tappetino Pantera Ultra 2",
        descrizione: "Il Tappetino Pantera Ultra 2 dà ordine e stile a tutta la postazione di lavoro. Lo spessore di 3 mm offre il giusto sostegno al polso, mentre il trattamento idrorepellente protegge da schizzi e macchie. Inoltre, la superficie in microtessuto è ottimizzata per sensori ottici e laser. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 55.49
    },
    {
        id: 712,
        name: "Stampante Scoglio Evo Titanio",
        descrizione: "La Stampante Scoglio Evo Titanio è la multifunzione pensata per chi vuole semplicità senza rinunciare alla qualità. La modalità silenziosa consente di stampare anche di notte senza disturbare, mentre stampa fino a 33 pagine al minuto con testi nitidi e neri profondi. Inoltre, il sistema a serbatoi ricaricabili abbatte drasticamente il costo per pagina. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 193.9
    },
    {
        id: 713,
        name: "Supporto Laptop Fulmine One Verde Salvia",
        descrizione: "Il Supporto Laptop Fulmine One Verde Salvia migliora la postura e il raffreddamento del tuo portatile. Si ripiega in pochi secondi e sta comodamente in uno zaino, mentre il design aperto favorisce la circolazione dell'aria e riduce le temperature. Inoltre, l'altezza e l'inclinazione sono regolabili su più livelli. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 28.99
    },
    {
        id: 714,
        name: "Tastiera Vulcano Plus Grigio Siderale",
        descrizione: "La Tastiera Vulcano Plus Grigio Siderale porta sulla scrivania la qualità costruttiva delle tastiere da collezione. La retroilluminazione RGB per singolo tasto offre oltre 30 effetti configurabili, mentre il poggiapolsi magnetico in similpelle sostiene i polsi nelle sessioni più lunghe. Inoltre, il layout italiano completo include tastierino numerico e tasti multimediali dedicati. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 93.49
    },
    {
        id: 715,
        name: "SSD Esterno Solaris Elite 2",
        descrizione: "L'SSD Esterno Solaris Elite 2 mette al sicuro i tuoi file e li porta ovunque alla massima velocità. La capacità di 1 TB offre spazio per migliaia di foto, video e progetti, mentre la certificazione IP65 lo difende da polvere e schizzi d'acqua. Inoltre, la crittografia hardware AES a 256 bit protegge i dati sensibili. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 328.49
    },
    {
        id: 716,
        name: "Hub USB Nova Core 8",
        descrizione: "L'Hub USB Nova Core 8 mette ordine tra cavi e periferiche in un attimo. La scocca in alluminio dissipa il calore anche sotto carico, mentre la porta Ethernet gigabit assicura una connessione cablata stabile. Inoltre, la ricarica passthrough fino a 100 W alimenta il portatile mentre lavori. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 67.49
    },
    {
        id: 717,
        name: "SSD Esterno Onice Core 7",
        descrizione: "L'SSD Esterno Onice Core 7 è pensato per fotografi, videomaker e professionisti in movimento. La connessione USB-C è compatibile con PC, Mac, tablet e console, mentre la capacità di 4 TB offre spazio per migliaia di foto, video e progetti. Inoltre, la crittografia hardware AES a 256 bit protegge i dati sensibili. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 160.9
    },
    {
        id: 718,
        name: "Tappetino Vulcano Max Verde Salvia",
        descrizione: "Il Tappetino Vulcano Max Verde Salvia protegge la scrivania e migliora lo scorrimento del mouse. Il formato esteso da 90x40 cm ospita comodamente mouse e tastiera, mentre la superficie in microtessuto è ottimizzata per sensori ottici e laser. Inoltre, lo spessore di 3 mm offre il giusto sostegno al polso. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 51.99
    },
    {
        id: 719,
        name: "Hub USB Neon Max Verde Salvia",
        descrizione: "L'Hub USB Neon Max Verde Salvia è la soluzione definitiva alla carenza di porte dei laptop moderni. L'uscita HDMI supporta monitor esterni fino a 4K a 60 Hz, mentre è plug-and-play e compatibile con Windows, macOS e Linux. Inoltre, la ricarica passthrough fino a 100 W alimenta il portatile mentre lavori. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 110.9
    },
    {
        id: 720,
        name: "Cuffie Silenzio Evo 5",
        descrizione: "Le Cuffie Silenzio Evo 5 uniscono comfort da indossare tutto il giorno e una resa acustica sorprendente. La batteria assicura fino a 60 ore di ascolto, con ricarica rapida in pochi minuti, mentre la modalità a bassa latenza sincronizza perfettamente audio e video nei giochi. Inoltre, la cancellazione attiva del rumore riduce il brusio di uffici, treni e aerei. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 160.99
    },
    {
        id: 721,
        name: "Supporto Laptop Titan Plus 6",
        descrizione: "Il Supporto Laptop Titan Plus 6 unisce eleganza minimalista e solidità a tutta prova. La struttura in alluminio sostiene portatili fino a 27 pollici, mentre si ripiega in pochi secondi e sta comodamente in uno zaino. Inoltre, la base stabile non oscilla nemmeno durante la digitazione più intensa. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 54.9
    },
    {
        id: 722,
        name: "Hub USB Maestrale Max Lavanda",
        descrizione: "L'Hub USB Maestrale Max Lavanda mette ordine tra cavi e periferiche in un attimo. La porta Ethernet gigabit assicura una connessione cablata stabile, mentre la ricarica passthrough fino a 100 W alimenta il portatile mentre lavori. Inoltre, l'uscita HDMI supporta monitor esterni fino a 4K a 60 Hz. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 123.9
    },
    {
        id: 723,
        name: "Stampante Vetta Max Titanio",
        descrizione: "La Stampante Vetta Max Titanio porta in casa e in ufficio stampe nitide, veloci e affidabili. Il sistema a serbatoi ricaricabili abbatte drasticamente il costo per pagina, mentre la stampa fronte/retro automatica riduce il consumo di carta. Inoltre, la modalità silenziosa consente di stampare anche di notte senza disturbare. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 426.49
    },
    {
        id: 724,
        name: "Casse Aurora Pro 3",
        descrizione: "Le Casse Aurora Pro 3 riempiono la stanza con un suono potente e sorprendentemente definito. I tweeter in seta restituiscono alti morbidi e mai affaticanti, mentre le casse in legno MDF riducono le risonanze indesiderate. Inoltre, i controlli di bassi e acuti permettono di adattare il suono all'ambiente. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 207.9
    },
    {
        id: 725,
        name: "Controller Spectra Elite Lavanda",
        descrizione: "Il Controller Spectra Elite Lavanda unisce un'impugnatura comoda a una precisione chirurgica. È compatibile con PC, smartphone e le principali console, mentre la vibrazione a doppio motore restituisce ogni impatto e ogni esplosione. Inoltre, le palette posteriori rimappabili permettono comandi rapidissimi. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 190.9
    },
    {
        id: 726,
        name: "Tastiera Eco Pro 1",
        descrizione: "La Tastiera Eco Pro 1 porta sulla scrivania la qualità costruttiva delle tastiere da collezione. La batteria da 5000 mAh garantisce settimane di utilizzo senza ricarica, mentre il layout italiano completo include tastierino numerico e tasti multimediali dedicati. Inoltre, lo strato di smorzamento interno in silicone attenua il rumore di battitura. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 165.99
    },
    {
        id: 727,
        name: "Lampada Monitor Ossidiana One 7",
        descrizione: "La Lampada Monitor Ossidiana One 7 libera spazio sulla scrivania portando la luce proprio dove serve. La luminosità si adatta automaticamente alla luce dell'ambiente, mentre la retroilluminazione RGB posteriore crea un'atmosfera rilassante. Inoltre, il controller wireless a rotella permette regolazioni immediate. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 43.49
    },
    {
        id: 728,
        name: "Stampante Solaris Max Titanio",
        descrizione: "La Stampante Solaris Max Titanio porta in casa e in ufficio stampe nitide, veloci e affidabili. La stampa fronte/retro automatica riduce il consumo di carta, mentre il display touch a colori rende intuitiva ogni operazione. Inoltre, stampa fino a 15 pagine al minuto con testi nitidi e neri profondi. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 418.49
    },
    {
        id: 729,
        name: "Mouse Carbonio Air Grafite",
        descrizione: "Il Mouse Carbonio Air Grafite è il compagno ideale per lunghe sessioni di lavoro e di gioco. Gli switch ottici sono certificati per oltre 70 milioni di clic, mentre il sensore ottico da 26000 DPI traccia ogni spostamento senza scatti anche sulle superfici più difficili. Inoltre, la rotella in metallo con scorrimento a frizione variabile rende rapidissima la navigazione di documenti lunghi. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 19.49
    },
    {
        id: 730,
        name: "Router Vetta Plus Titanio",
        descrizione: "Il Router Vetta Plus Titanio è pensato per famiglie connesse, gamer e professionisti in smart working. La crittografia WPA3 e il firewall integrato proteggono la rete dalle intrusioni, mentre lo standard Wi-Fi 7 raggiunge velocità combinate fino a 11 Gbps. Inoltre, gestisce senza fatica oltre 64 dispositivi connessi contemporaneamente. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 147.49
    },
    {
        id: 731,
        name: "Microfono Orione One 1",
        descrizione: "Il Microfono Orione One 1 è pensato per podcaster, streamer e musicisti che cercano un suono pulito. Si collega in USB-C senza bisogno di interfacce audio esterne, mentre il controllo del guadagno integrato permette regolazioni rapide al volo. Inoltre, la capsula a condensatore cattura la voce con dettaglio e naturalezza. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 49.49
    },
    {
        id: 732,
        name: "Router Grifone Studio Grafite",
        descrizione: "Il Router Grifone Studio Grafite porta una connessione veloce e stabile in ogni angolo della casa. Gestisce senza fatica oltre 200 dispositivi connessi contemporaneamente, mentre l'app di configurazione guida l'installazione in pochi minuti. Inoltre, la crittografia WPA3 e il firewall integrato proteggono la rete dalle intrusioni. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 289.9
    },
    {
        id: 733,
        name: "Stampante Carbonio Air 3",
        descrizione: "La Stampante Carbonio Air 3 unisce costi di stampa contenuti a prestazioni di livello professionale. Il vassoio da 150 fogli limita le interruzioni per il caricamento della carta, mentre lo scanner piano ad alta risoluzione digitalizza documenti e fotografie in pochi secondi. Inoltre, stampa fino a 15 pagine al minuto con testi nitidi e neri profondi. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 83.49
    },
    {
        id: 734,
        name: "Casse Titan Plus 2",
        descrizione: "Le Casse Titan Plus 2 trasformano la scrivania in un piccolo studio d'ascolto. Il telecomando incluso consente di gestire il volume dal divano, mentre le casse in legno MDF riducono le risonanze indesiderate. Inoltre, i tweeter in seta restituiscono alti morbidi e mai affaticanti. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 151.99
    },
    {
        id: 735,
        name: "Router Falco Ultra 6",
        descrizione: "Il Router Falco Ultra 6 è pensato per famiglie connesse, gamer e professionisti in smart working. L'app di configurazione guida l'installazione in pochi minuti, mentre la crittografia WPA3 e il firewall integrato proteggono la rete dalle intrusioni. Inoltre, le antenne ad alto guadagno con beamforming indirizzano il segnale verso i dispositivi. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 393.99
    },
    {
        id: 736,
        name: "Lampada Monitor Plasma Ultra 3",
        descrizione: "La Lampada Monitor Plasma Ultra 3 è il tocco di luce che mancava alla tua postazione. La retroilluminazione RGB posteriore crea un'atmosfera rilassante, mentre il controller wireless a rotella permette regolazioni immediate. Inoltre, il fascio luminoso asimmetrico illumina la scrivania senza abbagliare. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 98.9
    },
    {
        id: 737,
        name: "Router Onda Studio Rosso Corsa",
        descrizione: "Il Router Onda Studio Rosso Corsa elimina le zone morte e i cali di segnale una volta per tutte. La porta WAN da 2,5 Gbps sfrutta al massimo le connessioni in fibra ottica, mentre la crittografia WPA3 e il firewall integrato proteggono la rete dalle intrusioni. Inoltre, il parental control integrato permette di gestire orari e contenuti per ogni membro della famiglia. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 244.99
    },
    {
        id: 738,
        name: "Cuffie Vulcano Elite Rosso Corsa",
        descrizione: "Le Cuffie Vulcano Elite Rosso Corsa uniscono comfort da indossare tutto il giorno e una resa acustica sorprendente. Il microfono con riduzione del rumore rende chiarissime chiamate e videoconferenze, mentre la modalità a bassa latenza sincronizza perfettamente audio e video nei giochi. Inoltre, i cuscinetti in memory foam rivestiti in tessuto traspirante non affaticano le orecchie. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 328.99
    },
    {
        id: 739,
        name: "Stampante Polaris Plus 4",
        descrizione: "La Stampante Polaris Plus 4 porta in casa e in ufficio stampe nitide, veloci e affidabili. La modalità silenziosa consente di stampare anche di notte senza disturbare, mentre stampa fino a 22 pagine al minuto con testi nitidi e neri profondi. Inoltre, la connessione Wi-Fi e l'app dedicata permettono di stampare direttamente dallo smartphone. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 265.99
    },
    {
        id: 740,
        name: "Stampante Zenith Ultra 1",
        descrizione: "La Stampante Zenith Ultra 1 è la multifunzione pensata per chi vuole semplicità senza rinunciare alla qualità. Il sistema a serbatoi ricaricabili abbatte drasticamente il costo per pagina, mentre la connessione Wi-Fi e l'app dedicata permettono di stampare direttamente dallo smartphone. Inoltre, stampa fino a 22 pagine al minuto con testi nitidi e neri profondi. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 402.99
    },
    {
        id: 741,
        name: "Tastiera Lince Elite 5",
        descrizione: "La Tastiera Lince Elite 5 porta sulla scrivania la qualità costruttiva delle tastiere da collezione. I keycap in PBT double-shot resistono all'usura e non diventano lucidi con il tempo, mentre gli switch meccanici hot-swap si sostituiscono senza saldature, per personalizzare il feeling di ogni tasto. Inoltre, il poggiapolsi magnetico in similpelle sostiene i polsi nelle sessioni più lunghe. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 177.99
    },
    {
        id: 742,
        name: "Controller Iride Core 6",
        descrizione: "Il Controller Iride Core 6 mette nelle tue mani il controllo totale di ogni partita. L'impugnatura gommata antiscivolo resta salda anche nelle partite più intense, mentre la vibrazione a doppio motore restituisce ogni impatto e ogni esplosione. Inoltre, è compatibile con PC, smartphone e le principali console. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 105.99
    },
    {
        id: 743,
        name: "Mouse Tuono Core 6",
        descrizione: "Il Mouse Tuono Core 6 nasce per chi vuole precisione assoluta a ogni movimento del polso. Il sensore ottico da 26000 DPI traccia ogni spostamento senza scatti anche sulle superfici più difficili, mentre la modalità multi-dispositivo consente di passare da PC a tablet con un pulsante. Inoltre, gli switch ottici sono certificati per oltre 70 milioni di clic. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 74.99
    },
    {
        id: 744,
        name: "Router Vulcano Ultra 1",
        descrizione: "Il Router Vulcano Ultra 1 è il cuore di una rete domestica moderna, sicura e senza rallentamenti. La crittografia WPA3 e il firewall integrato proteggono la rete dalle intrusioni, mentre lo standard Wi-Fi 7 raggiunge velocità combinate fino a 11 Gbps. Inoltre, la porta WAN da 2,5 Gbps sfrutta al massimo le connessioni in fibra ottica. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 357.9
    },
    {
        id: 745,
        name: "Router Pulsar One 6",
        descrizione: "Il Router Pulsar One 6 porta una connessione veloce e stabile in ogni angolo della casa. La crittografia WPA3 e il firewall integrato proteggono la rete dalle intrusioni, mentre lo standard Wi-Fi 6E raggiunge velocità combinate fino a 19 Gbps. Inoltre, gestisce senza fatica oltre 128 dispositivi connessi contemporaneamente. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 64.99
    },
    {
        id: 746,
        name: "Mouse Cometa Prime Verde Salvia",
        descrizione: "Il Mouse Cometa Prime Verde Salvia trasforma ogni clic in un gesto rapido, fluido e naturale. Il sensore ottico da 30000 DPI traccia ogni spostamento senza scatti anche sulle superfici più difficili, mentre la rotella in metallo con scorrimento a frizione variabile rende rapidissima la navigazione di documenti lunghi. Inoltre, gli switch ottici sono certificati per oltre 70 milioni di clic. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 89.9
    },
    {
        id: 747,
        name: "Controller Meridiano One Rosso Corsa",
        descrizione: "Il Controller Meridiano One Rosso Corsa mette nelle tue mani il controllo totale di ogni partita. La batteria garantisce fino a 80 ore di gioco senza interruzioni, mentre i grilletti con corsa regolabile si adattano a sparatutto e giochi di guida. Inoltre, è compatibile con PC, smartphone e le principali console. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 56.99
    },
    {
        id: 748,
        name: "Tastiera Carbonio Evo 3",
        descrizione: "La Tastiera Carbonio Evo 3 porta sulla scrivania la qualità costruttiva delle tastiere da collezione. Il poggiapolsi magnetico in similpelle sostiene i polsi nelle sessioni più lunghe, mentre il telaio in alluminio spazzolato elimina flessioni e vibrazioni durante la digitazione. Inoltre, gli switch meccanici hot-swap si sostituiscono senza saldature, per personalizzare il feeling di ogni tasto. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 71.9
    },
    {
        id: 749,
        name: "Tastiera Onda Evo Titanio",
        descrizione: "La Tastiera Onda Evo Titanio è pensata per chi scrive molto e non vuole scendere a compromessi sul comfort. La connessione tri-mode (Bluetooth, 2,4 GHz e cavo) si adatta a qualsiasi postazione, mentre lo strato di smorzamento interno in silicone attenua il rumore di battitura. Inoltre, il telaio in alluminio spazzolato elimina flessioni e vibrazioni durante la digitazione. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 80.99
    },
    {
        id: 750,
        name: "Router Prisma Ultra Verde Salvia",
        descrizione: "Il Router Prisma Ultra Verde Salvia porta una connessione veloce e stabile in ogni angolo della casa. La tecnologia mesh consente di estendere la copertura aggiungendo altri nodi, mentre lo standard Wi-Fi 6 raggiunge velocità combinate fino a 5,4 Gbps. Inoltre, l'app di configurazione guida l'installazione in pochi minuti. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 335.9
    },
    {
        id: 751,
        name: "Microfono Plasma Lite Verde Salvia",
        descrizione: "Il Microfono Plasma Lite Verde Salvia è pensato per podcaster, streamer e musicisti che cercano un suono pulito. L'uscita cuffie a latenza zero consente di monitorare la propria voce in tempo reale, mentre il pattern cardioide isola la voce dai rumori ambientali. Inoltre, si collega in USB-C senza bisogno di interfacce audio esterne. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 68.99
    },
    {
        id: 752,
        name: "Controller Altair Plus Grigio Siderale",
        descrizione: "Il Controller Altair Plus Grigio Siderale mette nelle tue mani il controllo totale di ogni partita. La vibrazione a doppio motore restituisce ogni impatto e ogni esplosione, mentre gli stick con sensori a effetto Hall eliminano il fastidioso drift nel tempo. Inoltre, la batteria garantisce fino a 70 ore di gioco senza interruzioni. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 105.99
    },
    {
        id: 753,
        name: "Lampada Monitor Falco Evo Sabbia",
        descrizione: "La Lampada Monitor Falco Evo Sabbia è il tocco di luce che mancava alla tua postazione. La retroilluminazione RGB posteriore crea un'atmosfera rilassante, mentre l'alimentazione USB-C elimina la necessità di prese aggiuntive. Inoltre, il controller wireless a rotella permette regolazioni immediate. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 52.99
    },
    {
        id: 754,
        name: "Mouse Phantom Air 2",
        descrizione: "Il Mouse Phantom Air 2 è il compagno ideale per lunghe sessioni di lavoro e di gioco. I pulsanti laterali programmabili permettono di richiamare scorciatoie e macro con un solo tocco, mentre la batteria ricaricabile via USB-C offre fino a 80 ore di autonomia con una singola carica. Inoltre, la connessione wireless a bassa latenza garantisce una risposta istantanea, paragonabile a quella di un cavo. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 12.99
    },
    {
        id: 755,
        name: "Hub USB Neon Studio 5",
        descrizione: "L'Hub USB Neon Studio 5 è la soluzione definitiva alla carenza di porte dei laptop moderni. La ricarica passthrough fino a 100 W alimenta il portatile mentre lavori, mentre l'uscita HDMI supporta monitor esterni fino a 4K a 60 Hz. Inoltre, la scocca in alluminio dissipa il calore anche sotto carico. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 87.99
    },
    {
        id: 756,
        name: "Controller Tuono Ultra 8",
        descrizione: "Il Controller Tuono Ultra 8 rende ogni sessione di gioco più coinvolgente e reattiva. Gli stick con sensori a effetto Hall eliminano il fastidioso drift nel tempo, mentre l'impugnatura gommata antiscivolo resta salda anche nelle partite più intense. Inoltre, è compatibile con PC, smartphone e le principali console. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 164.9
    },
    {
        id: 757,
        name: "Router Onice Air 3",
        descrizione: "Il Router Onice Air 3 è pensato per famiglie connesse, gamer e professionisti in smart working. La porta WAN da 2,5 Gbps sfrutta al massimo le connessioni in fibra ottica, mentre la crittografia WPA3 e il firewall integrato proteggono la rete dalle intrusioni. Inoltre, lo standard Wi-Fi 6E raggiunge velocità combinate fino a 5,4 Gbps. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 104.9
    },
    {
        id: 758,
        name: "Hub USB Pantera Elite 9",
        descrizione: "L'Hub USB Pantera Elite 9 mette ordine tra cavi e periferiche in un attimo. Il trasferimento dati a 10 Gbps rende rapidissime le copie di file, mentre l'uscita HDMI supporta monitor esterni fino a 4K a 60 Hz. Inoltre, la scocca in alluminio dissipa il calore anche sotto carico. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 105.99
    },
    {
        id: 759,
        name: "Stampante Ferro Core Rosso Corsa",
        descrizione: "La Stampante Ferro Core Rosso Corsa porta in casa e in ufficio stampe nitide, veloci e affidabili. Stampa fino a 22 pagine al minuto con testi nitidi e neri profondi, mentre lo scanner piano ad alta risoluzione digitalizza documenti e fotografie in pochi secondi. Inoltre, le stampe fotografiche a colori hanno toni vividi e sfumature morbide. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 235.99
    },
    {
        id: 760,
        name: "SSD Esterno Maestrale Prime Lavanda",
        descrizione: "L'SSD Esterno Maestrale Prime Lavanda unisce dimensioni tascabili a prestazioni da disco interno. La certificazione IP65 lo difende da polvere e schizzi d'acqua, mentre la capacità di 2 TB offre spazio per migliaia di foto, video e progetti. Inoltre, il software di backup automatico incluso rende semplice proteggere i file. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 213.99
    },
    {
        id: 761,
        name: "Cuffie Tempesta Elite 9",
        descrizione: "Le Cuffie Tempesta Elite 9 portano l'esperienza d'ascolto a un livello superiore, ovunque tu sia. La cancellazione attiva del rumore riduce il brusio di uffici, treni e aerei, mentre i cuscinetti in memory foam rivestiti in tessuto traspirante non affaticano le orecchie. Inoltre, la batteria assicura fino a 30 ore di ascolto, con ricarica rapida in pochi minuti. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 271.49
    },
    {
        id: 762,
        name: "Cuffie Scirocco Elite 5",
        descrizione: "Le Cuffie Scirocco Elite 5 uniscono comfort da indossare tutto il giorno e una resa acustica sorprendente. La connessione Bluetooth 5.3 multipoint le collega a due dispositivi contemporaneamente, mentre i cuscinetti in memory foam rivestiti in tessuto traspirante non affaticano le orecchie. Inoltre, la struttura pieghevole e la custodia rigida le rendono perfette in viaggio. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 327.99
    },
    {
        id: 763,
        name: "Hub USB Solaris Plus 7",
        descrizione: "L'Hub USB Solaris Plus 7 trasforma qualsiasi portatile in una vera postazione desktop. La ricarica passthrough fino a 100 W alimenta il portatile mentre lavori, mentre la scocca in alluminio dissipa il calore anche sotto carico. Inoltre, è plug-and-play e compatibile con Windows, macOS e Linux. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 68.99
    },
    {
        id: 764,
        name: "Supporto Laptop Kraken Studio 4",
        descrizione: "Il Supporto Laptop Kraken Studio 4 unisce eleganza minimalista e solidità a tutta prova. Il design aperto favorisce la circolazione dell'aria e riduce le temperature, mentre la base stabile non oscilla nemmeno durante la digitazione più intensa. Inoltre, la struttura in alluminio sostiene portatili fino a 34 pollici. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 67.99
    },
    {
        id: 765,
        name: "SSD Esterno Ossidiana Max Rosso Corsa",
        descrizione: "L'SSD Esterno Ossidiana Max Rosso Corsa unisce dimensioni tascabili a prestazioni da disco interno. La crittografia hardware AES a 256 bit protegge i dati sensibili, mentre la certificazione IP65 lo difende da polvere e schizzi d'acqua. Inoltre, le velocità di lettura fino a 2000 MB/s azzerano i tempi di attesa. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 288.99
    },
    {
        id: 766,
        name: "Controller Vertex Elite Sabbia",
        descrizione: "Il Controller Vertex Elite Sabbia rende ogni sessione di gioco più coinvolgente e reattiva. È compatibile con PC, smartphone e le principali console, mentre le palette posteriori rimappabili permettono comandi rapidissimi. Inoltre, l'impugnatura gommata antiscivolo resta salda anche nelle partite più intense. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 179.49
    },
    {
        id: 767,
        name: "Casse Vetta Max Rosso Corsa",
        descrizione: "Le Casse Vetta Max Rosso Corsa riempiono la stanza con un suono potente e sorprendentemente definito. I woofer in fibra di carta garantiscono bassi caldi e ben controllati, mentre le casse in legno MDF riducono le risonanze indesiderate. Inoltre, l'illuminazione RGB sincronizzata con la musica crea atmosfera. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 274.99
    },
    {
        id: 768,
        name: "Controller Dolomia Prime Sabbia",
        descrizione: "Il Controller Dolomia Prime Sabbia unisce un'impugnatura comoda a una precisione chirurgica. La batteria garantisce fino a 30 ore di gioco senza interruzioni, mentre è compatibile con PC, smartphone e le principali console. Inoltre, gli stick con sensori a effetto Hall eliminano il fastidioso drift nel tempo. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 147.9
    },
    {
        id: 769,
        name: "Stampante Aquila One Lavanda",
        descrizione: "La Stampante Aquila One Lavanda porta in casa e in ufficio stampe nitide, veloci e affidabili. La connessione Wi-Fi e l'app dedicata permettono di stampare direttamente dallo smartphone, mentre la stampa fronte/retro automatica riduce il consumo di carta. Inoltre, lo scanner piano ad alta risoluzione digitalizza documenti e fotografie in pochi secondi. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Ideale sia per l'ufficio sia per il setup di casa. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 116.9
    },
    {
        id: 770,
        name: "Microfono Eclipse Pro 7",
        descrizione: "Il Microfono Eclipse Pro 7 è pensato per podcaster, streamer e musicisti che cercano un suono pulito. La capsula a condensatore cattura la voce con dettaglio e naturalezza, mentre il supporto antivibrazione e il filtro anti-pop sono inclusi nella confezione. Inoltre, si collega in USB-C senza bisogno di interfacce audio esterne. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 152.99
    },
    {
        id: 771,
        name: "SSD Esterno Ossidiana Prime Bianco Artico",
        descrizione: "L'SSD Esterno Ossidiana Prime Bianco Artico mette al sicuro i tuoi file e li porta ovunque alla massima velocità. Il software di backup automatico incluso rende semplice proteggere i file, mentre la scocca resistente a urti e cadute protegge i dati anche in viaggio. Inoltre, la connessione USB-C è compatibile con PC, Mac, tablet e console. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 235.49
    },
    {
        id: 772,
        name: "Lampada Monitor Eco Core 2",
        descrizione: "La Lampada Monitor Eco Core 2 libera spazio sulla scrivania portando la luce proprio dove serve. Si aggancia a monitor piatti e curvi senza viti né adesivi, mentre la temperatura colore è regolabile da 2700 K a 6500 K. Inoltre, la luminosità si adatta automaticamente alla luce dell'ambiente. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 71.99
    },
    {
        id: 773,
        name: "Microfono Ossidiana Air Nero Notte",
        descrizione: "Il Microfono Ossidiana Air Nero Notte è pensato per podcaster, streamer e musicisti che cercano un suono pulito. La registrazione a 24 bit/96 kHz garantisce una qualità audio professionale, mentre il pulsante mute touch con indicatore LED evita imbarazzi durante le dirette. Inoltre, l'uscita cuffie a latenza zero consente di monitorare la propria voce in tempo reale. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 83.49
    },
    {
        id: 774,
        name: "Monitor Condor Air 2",
        descrizione: "Il Monitor Condor Air 2 offre una qualità d'immagine che fa la differenza tanto nel lavoro quanto nel gioco. La copertura del 99% dello spazio colore sRGB lo rende adatto a fotoritocco e grafica, mentre le cornici ultrasottili su tre lati lo rendono perfetto per configurazioni multi-monitor. Inoltre, il supporto HDR esalta contrasti e luminosità nei contenuti compatibili. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 291.99
    },
    {
        id: 775,
        name: "Controller Atlas Max 6",
        descrizione: "Il Controller Atlas Max 6 è progettato per competere ai massimi livelli e vincere. Le palette posteriori rimappabili permettono comandi rapidissimi, mentre l'impugnatura gommata antiscivolo resta salda anche nelle partite più intense. Inoltre, gli stick con sensori a effetto Hall eliminano il fastidioso drift nel tempo. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 175.99
    },
    {
        id: 776,
        name: "Tastiera Spectra Ultra 4",
        descrizione: "La Tastiera Spectra Ultra 4 porta sulla scrivania la qualità costruttiva delle tastiere da collezione. I keycap in PBT double-shot resistono all'usura e non diventano lucidi con il tempo, mentre il telaio in alluminio spazzolato elimina flessioni e vibrazioni durante la digitazione. Inoltre, la retroilluminazione RGB per singolo tasto offre oltre 30 effetti configurabili. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 202.9
    },
    {
        id: 777,
        name: "Webcam Zenith Evo 5",
        descrizione: "La Webcam Zenith Evo 5 porta una qualità d'immagine professionale sulla tua scrivania. L'autofocus rapido mantiene il volto sempre a fuoco anche quando ti muovi, mentre il campo visivo di 78° inquadra comodamente anche più persone. Inoltre, il copriobiettivo integrato garantisce privacy totale quando non la usi. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 79.99
    },
    {
        id: 778,
        name: "Stampante Silenzio Elite Rosso Corsa",
        descrizione: "La Stampante Silenzio Elite Rosso Corsa porta in casa e in ufficio stampe nitide, veloci e affidabili. Il sistema a serbatoi ricaricabili abbatte drasticamente il costo per pagina, mentre le stampe fotografiche a colori hanno toni vividi e sfumature morbide. Inoltre, la connessione Wi-Fi e l'app dedicata permettono di stampare direttamente dallo smartphone. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 392.49
    },
    {
        id: 779,
        name: "Mouse Aquila Core 9",
        descrizione: "Il Mouse Aquila Core 9 trasforma ogni clic in un gesto rapido, fluido e naturale. Il sensore ottico da 16000 DPI traccia ogni spostamento senza scatti anche sulle superfici più difficili, mentre i piedini in PTFE puro assicurano uno scorrimento silenzioso e privo di attrito. Inoltre, la modalità multi-dispositivo consente di passare da PC a tablet con un pulsante. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 69.49
    },
    {
        id: 780,
        name: "Tastiera Prisma Air 8",
        descrizione: "La Tastiera Prisma Air 8 combina un design essenziale a una risposta dei tasti sorprendentemente reattiva. La connessione tri-mode (Bluetooth, 2,4 GHz e cavo) si adatta a qualsiasi postazione, mentre gli switch meccanici hot-swap si sostituiscono senza saldature, per personalizzare il feeling di ogni tasto. Inoltre, il telaio in alluminio spazzolato elimina flessioni e vibrazioni durante la digitazione. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 28.49
    },
    {
        id: 781,
        name: "Microfono Grifone Evo Blu Oceano",
        descrizione: "Il Microfono Grifone Evo Blu Oceano porta qualità broadcast in qualsiasi stanza della casa. Il controllo del guadagno integrato permette regolazioni rapide al volo, mentre il supporto antivibrazione e il filtro anti-pop sono inclusi nella confezione. Inoltre, l'uscita cuffie a latenza zero consente di monitorare la propria voce in tempo reale. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 122.99
    },
    {
        id: 782,
        name: "Controller Vetta Pro 6",
        descrizione: "Il Controller Vetta Pro 6 unisce un'impugnatura comoda a una precisione chirurgica. I grilletti con corsa regolabile si adattano a sparatutto e giochi di guida, mentre la batteria garantisce fino a 70 ore di gioco senza interruzioni. Inoltre, l'impugnatura gommata antiscivolo resta salda anche nelle partite più intense. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 120.49
    },
    {
        id: 783,
        name: "Supporto Laptop Eclipse Evo 3",
        descrizione: "Il Supporto Laptop Eclipse Evo 3 è l'accessorio ergonomico che trasforma il modo di lavorare. La base stabile non oscilla nemmeno durante la digitazione più intensa, mentre si ripiega in pochi secondi e sta comodamente in uno zaino. Inoltre, la struttura in alluminio sostiene portatili fino a 27 pollici. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 50.9
    },
    {
        id: 784,
        name: "Webcam Aurora Core 2",
        descrizione: "La Webcam Aurora Core 2 porta una qualità d'immagine professionale sulla tua scrivania. Il sensore in risoluzione 4K cattura ogni dettaglio con colori naturali, mentre i due microfoni stereo con riduzione del rumore catturano la voce in modo chiaro. Inoltre, la registrazione a 60 fps rende fluidi anche streaming e tutorial. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 91.99
    },
    {
        id: 785,
        name: "Tastiera Drago Lite Lavanda",
        descrizione: "La Tastiera Drago Lite Lavanda regala una sensazione di digitazione solida, precisa e appagante. Gli switch meccanici hot-swap si sostituiscono senza saldature, per personalizzare il feeling di ogni tasto, mentre il layout italiano completo include tastierino numerico e tasti multimediali dedicati. Inoltre, lo strato di smorzamento interno in silicone attenua il rumore di battitura. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 25.99
    },
    {
        id: 786,
        name: "Supporto Laptop Vetta Lite Grafite",
        descrizione: "Il Supporto Laptop Vetta Lite Grafite migliora la postura e il raffreddamento del tuo portatile. Si ripiega in pochi secondi e sta comodamente in uno zaino, mentre il design aperto favorisce la circolazione dell'aria e riduce le temperature. Inoltre, l'altezza e l'inclinazione sono regolabili su più livelli. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Ideale sia per l'ufficio sia per il setup di casa. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 22.9
    },
    {
        id: 787,
        name: "Router Tempesta Evo Verde Salvia",
        descrizione: "Il Router Tempesta Evo Verde Salvia è pensato per famiglie connesse, gamer e professionisti in smart working. La crittografia WPA3 e il firewall integrato proteggono la rete dalle intrusioni, mentre le antenne ad alto guadagno con beamforming indirizzano il segnale verso i dispositivi. Inoltre, gestisce senza fatica oltre 200 dispositivi connessi contemporaneamente. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 141.99
    },
    {
        id: 788,
        name: "Webcam Luna Lite 3",
        descrizione: "La Webcam Luna Lite 3 porta una qualità d'immagine professionale sulla tua scrivania. Il campo visivo di 90° inquadra comodamente anche più persone, mentre il copriobiettivo integrato garantisce privacy totale quando non la usi. Inoltre, la correzione automatica della luce compensa ambienti troppo bui o controluce. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 32.99
    },
    {
        id: 789,
        name: "Monitor Lince Lite Bianco Artico",
        descrizione: "Il Monitor Lince Lite Bianco Artico è progettato per chi pretende colori fedeli e una fluidità impeccabile. La porta USB-C con alimentazione fino a 65 W collega e ricarica il portatile con un solo cavo, mentre la frequenza di aggiornamento di 144 Hz rende ogni movimento incredibilmente fluido. Inoltre, il supporto ergonomico regolabile in altezza, inclinazione e rotazione si adatta a ogni postura. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 228.9
    },
    {
        id: 790,
        name: "Webcam Ferro Core Titanio",
        descrizione: "La Webcam Ferro Core Titanio porta una qualità d'immagine professionale sulla tua scrivania. Il campo visivo di 90° inquadra comodamente anche più persone, mentre il copriobiettivo integrato garantisce privacy totale quando non la usi. Inoltre, la clip universale si fissa saldamente a monitor, portatili e treppiedi. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 104.99
    },
    {
        id: 791,
        name: "Monitor Riflesso Studio Nero Notte",
        descrizione: "Il Monitor Riflesso Studio Nero Notte apre una finestra nitida e brillante su tutto ciò che crei e guardi. La frequenza di aggiornamento di 240 Hz rende ogni movimento incredibilmente fluido, mentre il pannello IPS da 27 pollici con risoluzione 4K UHD restituisce dettagli nitidissimi. Inoltre, le cornici ultrasottili su tre lati lo rendono perfetto per configurazioni multi-monitor. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 630.9
    },
    {
        id: 792,
        name: "SSD Esterno Onda Prime Grigio Siderale",
        descrizione: "L'SSD Esterno Onda Prime Grigio Siderale è pensato per fotografi, videomaker e professionisti in movimento. La capacità di 1 TB offre spazio per migliaia di foto, video e progetti, mentre la connessione USB-C è compatibile con PC, Mac, tablet e console. Inoltre, le velocità di lettura fino a 2800 MB/s azzerano i tempi di attesa. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 211.9
    },
    {
        id: 793,
        name: "Tastiera Graffio Elite 3",
        descrizione: "La Tastiera Graffio Elite 3 regala una sensazione di digitazione solida, precisa e appagante. Il poggiapolsi magnetico in similpelle sostiene i polsi nelle sessioni più lunghe, mentre il layout italiano completo include tastierino numerico e tasti multimediali dedicati. Inoltre, il telaio in alluminio spazzolato elimina flessioni e vibrazioni durante la digitazione. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 183.49
    },
    {
        id: 794,
        name: "Casse Maestrale Evo 8",
        descrizione: "Le Casse Maestrale Evo 8 uniscono un design raffinato a una resa sonora di alto livello. I controlli di bassi e acuti permettono di adattare il suono all'ambiente, mentre l'illuminazione RGB sincronizzata con la musica crea atmosfera. Inoltre, le casse in legno MDF riducono le risonanze indesiderate. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 153.99
    },
    {
        id: 795,
        name: "Stampante Vetta Evo Nero Notte",
        descrizione: "La Stampante Vetta Evo Nero Notte è la multifunzione pensata per chi vuole semplicità senza rinunciare alla qualità. Il sistema a serbatoi ricaricabili abbatte drasticamente il costo per pagina, mentre la stampa fronte/retro automatica riduce il consumo di carta. Inoltre, il display touch a colori rende intuitiva ogni operazione. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 182.99
    },
    {
        id: 796,
        name: "Stampante Spectra Ultra Rosso Corsa",
        descrizione: "La Stampante Spectra Ultra Rosso Corsa porta in casa e in ufficio stampe nitide, veloci e affidabili. Il sistema a serbatoi ricaricabili abbatte drasticamente il costo per pagina, mentre la connessione Wi-Fi e l'app dedicata permettono di stampare direttamente dallo smartphone. Inoltre, la modalità silenziosa consente di stampare anche di notte senza disturbare. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 414.99
    },
    {
        id: 797,
        name: "Casse Glaciale Max 2",
        descrizione: "Le Casse Glaciale Max 2 uniscono un design raffinato a una resa sonora di alto livello. I woofer in fibra di carta garantiscono bassi caldi e ben controllati, mentre i controlli di bassi e acuti permettono di adattare il suono all'ambiente. Inoltre, gli ingressi Bluetooth, ottico e AUX permettono di collegare qualsiasi sorgente. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 234.99
    },
    {
        id: 798,
        name: "Mouse Cassiopea Prime 6",
        descrizione: "Il Mouse Cassiopea Prime 6 unisce una forma ergonomica studiata a lungo a un sensore di nuova generazione. La connessione wireless a bassa latenza garantisce una risposta istantanea, paragonabile a quella di un cavo, mentre i pulsanti laterali programmabili permettono di richiamare scorciatoie e macro con un solo tocco. Inoltre, la batteria ricaricabile via USB-C offre fino a 40 ore di autonomia con una singola carica. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 89.99
    },
    {
        id: 799,
        name: "Hub USB Onda Pro 9",
        descrizione: "L'Hub USB Onda Pro 9 trasforma qualsiasi portatile in una vera postazione desktop. Offre 5 porte, tra cui USB-A, USB-C, HDMI e lettore di schede SD, mentre il trasferimento dati a 10 Gbps rende rapidissime le copie di file. Inoltre, la porta Ethernet gigabit assicura una connessione cablata stabile. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 75.99
    },
    {
        id: 800,
        name: "Stampante Cristallo Evo 2",
        descrizione: "La Stampante Cristallo Evo 2 porta in casa e in ufficio stampe nitide, veloci e affidabili. Le stampe fotografiche a colori hanno toni vividi e sfumature morbide, mentre il vassoio da 150 fogli limita le interruzioni per il caricamento della carta. Inoltre, stampa fino a 15 pagine al minuto con testi nitidi e neri profondi. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 267.99
    },
    {
        id: 801,
        name: "Microfono Mistral Air 5",
        descrizione: "Il Microfono Mistral Air 5 è pensato per podcaster, streamer e musicisti che cercano un suono pulito. Il supporto antivibrazione e il filtro anti-pop sono inclusi nella confezione, mentre l'uscita cuffie a latenza zero consente di monitorare la propria voce in tempo reale. Inoltre, il pattern cardioide isola la voce dai rumori ambientali. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 80.9
    },
    {
        id: 802,
        name: "Monitor Drago Lite 6",
        descrizione: "Il Monitor Drago Lite 6 offre una qualità d'immagine che fa la differenza tanto nel lavoro quanto nel gioco. Il pannello IPS da 27 pollici con risoluzione 4K UHD restituisce dettagli nitidissimi, mentre il supporto HDR esalta contrasti e luminosità nei contenuti compatibili. Inoltre, le cornici ultrasottili su tre lati lo rendono perfetto per configurazioni multi-monitor. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 242.9
    },
    {
        id: 803,
        name: "Supporto Laptop Titan Max 8",
        descrizione: "Il Supporto Laptop Titan Max 8 unisce eleganza minimalista e solidità a tutta prova. Il design aperto favorisce la circolazione dell'aria e riduce le temperature, mentre la base stabile non oscilla nemmeno durante la digitazione più intensa. Inoltre, la struttura in alluminio sostiene portatili fino a 27 pollici. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 85.49
    },
    {
        id: 804,
        name: "Tastiera Stratos Air 3",
        descrizione: "La Tastiera Stratos Air 3 porta sulla scrivania la qualità costruttiva delle tastiere da collezione. I keycap in PBT double-shot resistono all'usura e non diventano lucidi con il tempo, mentre la batteria da 5000 mAh garantisce settimane di utilizzo senza ricarica. Inoltre, la connessione tri-mode (Bluetooth, 2,4 GHz e cavo) si adatta a qualsiasi postazione. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 38.99
    },
    {
        id: 805,
        name: "Stampante Astra Pro Sabbia",
        descrizione: "La Stampante Astra Pro Sabbia unisce costi di stampa contenuti a prestazioni di livello professionale. Lo scanner piano ad alta risoluzione digitalizza documenti e fotografie in pochi secondi, mentre il display touch a colori rende intuitiva ogni operazione. Inoltre, la stampa fronte/retro automatica riduce il consumo di carta. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 351.99
    },
    {
        id: 806,
        name: "Lampada Monitor Brezza Studio Blu Oceano",
        descrizione: "La Lampada Monitor Brezza Studio Blu Oceano è il tocco di luce che mancava alla tua postazione. Il controller wireless a rotella permette regolazioni immediate, mentre la luminosità si adatta automaticamente alla luce dell'ambiente. Inoltre, l'alimentazione USB-C elimina la necessità di prese aggiuntive. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 87.9
    },
    {
        id: 807,
        name: "Casse Solaris Ultra 1",
        descrizione: "Le Casse Solaris Ultra 1 riempiono la stanza con un suono potente e sorprendentemente definito. I woofer in fibra di carta garantiscono bassi caldi e ben controllati, mentre le casse in legno MDF riducono le risonanze indesiderate. Inoltre, la potenza complessiva di 40 W assicura un volume pieno senza distorsioni. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 265.99
    },
    {
        id: 808,
        name: "Hub USB Zenith Max Rosso Corsa",
        descrizione: "L'Hub USB Zenith Max Rosso Corsa trasforma qualsiasi portatile in una vera postazione desktop. Il trasferimento dati a 10 Gbps rende rapidissime le copie di file, mentre la ricarica passthrough fino a 100 W alimenta il portatile mentre lavori. Inoltre, è plug-and-play e compatibile con Windows, macOS e Linux. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 120.99
    },
    {
        id: 809,
        name: "Hub USB Meridiano Air Nero Notte",
        descrizione: "L'Hub USB Meridiano Air Nero Notte moltiplica le porte del tuo portatile con un solo, compatto accessorio. La ricarica passthrough fino a 100 W alimenta il portatile mentre lavori, mentre la scocca in alluminio dissipa il calore anche sotto carico. Inoltre, il trasferimento dati a 10 Gbps rende rapidissime le copie di file. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 22.49
    },
    {
        id: 810,
        name: "Supporto Laptop Sirio Studio 7",
        descrizione: "Il Supporto Laptop Sirio Studio 7 è l'accessorio ergonomico che trasforma il modo di lavorare. Si ripiega in pochi secondi e sta comodamente in uno zaino, mentre i gommini in silicone proteggono il portatile da graffi e scivolamenti. Inoltre, la struttura in alluminio sostiene portatili fino a 32 pollici. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 70.99
    },
    {
        id: 811,
        name: "Mouse Onice Plus 3",
        descrizione: "Il Mouse Onice Plus 3 è il compagno ideale per lunghe sessioni di lavoro e di gioco. La modalità multi-dispositivo consente di passare da PC a tablet con un pulsante, mentre la batteria ricaricabile via USB-C offre fino a 60 ore di autonomia con una singola carica. Inoltre, i piedini in PTFE puro assicurano uno scorrimento silenzioso e privo di attrito. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 61.99
    },
    {
        id: 812,
        name: "Monitor Lince Plus 8",
        descrizione: "Il Monitor Lince Plus 8 apre una finestra nitida e brillante su tutto ciò che crei e guardi. La porta USB-C con alimentazione fino a 65 W collega e ricarica il portatile con un solo cavo, mentre il pannello IPS da 34 pollici con risoluzione Full HD restituisce dettagli nitidissimi. Inoltre, il supporto ergonomico regolabile in altezza, inclinazione e rotazione si adatta a ogni postura. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 501.99
    },
    {
        id: 813,
        name: "Tappetino Glaciale Core Grigio Siderale",
        descrizione: "Il Tappetino Glaciale Core Grigio Siderale protegge la scrivania e migliora lo scorrimento del mouse. Il trattamento idrorepellente protegge da schizzi e macchie, mentre lo spessore di 4 mm offre il giusto sostegno al polso. Inoltre, la base in gomma naturale antiscivolo lo mantiene fermo in ogni situazione. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 26.99
    },
    {
        id: 814,
        name: "SSD Esterno Falco Pro 5",
        descrizione: "L'SSD Esterno Falco Pro 5 mette al sicuro i tuoi file e li porta ovunque alla massima velocità. La scocca resistente a urti e cadute protegge i dati anche in viaggio, mentre le velocità di lettura fino a 1050 MB/s azzerano i tempi di attesa. Inoltre, la connessione USB-C è compatibile con PC, Mac, tablet e console. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 240.99
    },
    {
        id: 815,
        name: "Mouse Mistral Core Grafite",
        descrizione: "Il Mouse Mistral Core Grafite trasforma ogni clic in un gesto rapido, fluido e naturale. Il sensore ottico da 30000 DPI traccia ogni spostamento senza scatti anche sulle superfici più difficili, mentre i piedini in PTFE puro assicurano uno scorrimento silenzioso e privo di attrito. Inoltre, il peso ridotto a soli 49 grammi riduce l'affaticamento della mano. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 72.49
    },
    {
        id: 816,
        name: "Lampada Monitor Vortex Core 7",
        descrizione: "La Lampada Monitor Vortex Core 7 è il tocco di luce che mancava alla tua postazione. La retroilluminazione RGB posteriore crea un'atmosfera rilassante, mentre la luminosità si adatta automaticamente alla luce dell'ambiente. Inoltre, la temperatura colore è regolabile da 2700 K a 6500 K. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 63.49
    },
    {
        id: 817,
        name: "Controller Lince Pro 9",
        descrizione: "Il Controller Lince Pro 9 unisce un'impugnatura comoda a una precisione chirurgica. La vibrazione a doppio motore restituisce ogni impatto e ogni esplosione, mentre l'impugnatura gommata antiscivolo resta salda anche nelle partite più intense. Inoltre, le palette posteriori rimappabili permettono comandi rapidissimi. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 148.99
    },
    {
        id: 818,
        name: "Microfono Cobalto Evo Verde Salvia",
        descrizione: "Il Microfono Cobalto Evo Verde Salvia rende ogni parola limpida, calda e piena di carattere. Il controllo del guadagno integrato permette regolazioni rapide al volo, mentre la capsula a condensatore cattura la voce con dettaglio e naturalezza. Inoltre, la registrazione a 24 bit/192 kHz garantisce una qualità audio professionale. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 99.99
    },
    {
        id: 819,
        name: "Router Silenzio Prime Lavanda",
        descrizione: "Il Router Silenzio Prime Lavanda porta una connessione veloce e stabile in ogni angolo della casa. La priorità QoS dà la precedenza a gaming e videochiamate, mentre le antenne ad alto guadagno con beamforming indirizzano il segnale verso i dispositivi. Inoltre, la tecnologia mesh consente di estendere la copertura aggiungendo altri nodi. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 256.9
    },
    {
        id: 820,
        name: "Tastiera Vulcano Ultra 1",
        descrizione: "La Tastiera Vulcano Ultra 1 è pensata per chi scrive molto e non vuole scendere a compromessi sul comfort. Gli switch meccanici hot-swap si sostituiscono senza saldature, per personalizzare il feeling di ogni tasto, mentre i keycap in PBT double-shot resistono all'usura e non diventano lucidi con il tempo. Inoltre, la retroilluminazione RGB per singolo tasto offre oltre 18 effetti configurabili. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 211.99
    },
    {
        id: 821,
        name: "Webcam Eco Core 3",
        descrizione: "La Webcam Eco Core 3 trasforma lo smart working con immagini nitide e un audio limpido. La registrazione a 60 fps rende fluidi anche streaming e tutorial, mentre l'autofocus rapido mantiene il volto sempre a fuoco anche quando ti muovi. Inoltre, il campo visivo di 95° inquadra comodamente anche più persone. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 106.99
    },
    {
        id: 822,
        name: "Tappetino Mistral Evo Lavanda",
        descrizione: "Il Tappetino Mistral Evo Lavanda è il dettaglio che fa la differenza tra un buon setup e uno eccellente. Il trattamento idrorepellente protegge da schizzi e macchie, mentre i bordi cuciti impediscono lo sfilacciamento nel tempo. Inoltre, il formato esteso da 80x30 cm ospita comodamente mouse e tastiera. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 24.99
    },
    {
        id: 823,
        name: "Stampante Vulcano Max Verde Salvia",
        descrizione: "La Stampante Vulcano Max Verde Salvia semplifica la gestione dei documenti di tutta la famiglia o del piccolo ufficio. La stampa fronte/retro automatica riduce il consumo di carta, mentre la modalità silenziosa consente di stampare anche di notte senza disturbare. Inoltre, stampa fino a 22 pagine al minuto con testi nitidi e neri profondi. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 427.99
    },
    {
        id: 824,
        name: "Cuffie Mistral Max 4",
        descrizione: "Le Cuffie Mistral Max 4 uniscono comfort da indossare tutto il giorno e una resa acustica sorprendente. La struttura pieghevole e la custodia rigida le rendono perfette in viaggio, mentre i cuscinetti in memory foam rivestiti in tessuto traspirante non affaticano le orecchie. Inoltre, la modalità trasparenza permette di sentire l'ambiente circostante senza toglierle. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 343.49
    },
    {
        id: 825,
        name: "Lampada Monitor Vega Plus Rosso Corsa",
        descrizione: "La Lampada Monitor Vega Plus Rosso Corsa rende più piacevoli e meno faticose le sessioni di lavoro serali. La retroilluminazione RGB posteriore crea un'atmosfera rilassante, mentre il fascio luminoso asimmetrico illumina la scrivania senza abbagliare. Inoltre, la luminosità si adatta automaticamente alla luce dell'ambiente. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 59.99
    },
    {
        id: 826,
        name: "Hub USB Neon Evo Nero Notte",
        descrizione: "L'Hub USB Neon Evo Nero Notte trasforma qualsiasi portatile in una vera postazione desktop. La ricarica passthrough fino a 100 W alimenta il portatile mentre lavori, mentre la porta Ethernet gigabit assicura una connessione cablata stabile. Inoltre, è plug-and-play e compatibile con Windows, macOS e Linux. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 57.99
    },
    {
        id: 827,
        name: "Router Orione Lite 2",
        descrizione: "Il Router Orione Lite 2 porta una connessione veloce e stabile in ogni angolo della casa. Gestisce senza fatica oltre 200 dispositivi connessi contemporaneamente, mentre la porta WAN da 2,5 Gbps sfrutta al massimo le connessioni in fibra ottica. Inoltre, la priorità QoS dà la precedenza a gaming e videochiamate. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 59.9
    },
    {
        id: 828,
        name: "Router Lince Air 6",
        descrizione: "Il Router Lince Air 6 porta una connessione veloce e stabile in ogni angolo della casa. Lo standard Wi-Fi 6E raggiunge velocità combinate fino a 5,4 Gbps, mentre il parental control integrato permette di gestire orari e contenuti per ogni membro della famiglia. Inoltre, la priorità QoS dà la precedenza a gaming e videochiamate. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 84.49
    },
    {
        id: 829,
        name: "Monitor Opale Pro 8",
        descrizione: "Il Monitor Opale Pro 8 offre una qualità d'immagine che fa la differenza tanto nel lavoro quanto nel gioco. La tecnologia flicker-free e il filtro per la luce blu riducono l'affaticamento visivo, mentre il tempo di risposta di 1 ms elimina scie e sfocature nelle scene più veloci. Inoltre, il supporto HDR esalta contrasti e luminosità nei contenuti compatibili. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 552.99
    },
    {
        id: 830,
        name: "Stampante Pulsar Pro 1",
        descrizione: "La Stampante Pulsar Pro 1 unisce costi di stampa contenuti a prestazioni di livello professionale. La modalità silenziosa consente di stampare anche di notte senza disturbare, mentre la stampa fronte/retro automatica riduce il consumo di carta. Inoltre, il sistema a serbatoi ricaricabili abbatte drasticamente il costo per pagina. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 321.9
    },
    {
        id: 831,
        name: "Tappetino Onice Pro 6",
        descrizione: "Il Tappetino Onice Pro 6 dà ordine e stile a tutta la postazione di lavoro. La base in gomma naturale antiscivolo lo mantiene fermo in ogni situazione, mentre il trattamento idrorepellente protegge da schizzi e macchie. Inoltre, si lava facilmente e torna come nuovo in pochi minuti. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 36.99
    },
    {
        id: 832,
        name: "Monitor Nova Core 3",
        descrizione: "Il Monitor Nova Core 3 è progettato per chi pretende colori fedeli e una fluidità impeccabile. Il supporto HDR esalta contrasti e luminosità nei contenuti compatibili, mentre la copertura del 99% dello spazio colore sRGB lo rende adatto a fotoritocco e grafica. Inoltre, la frequenza di aggiornamento di 240 Hz rende ogni movimento incredibilmente fluido. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 411.9
    },
    {
        id: 833,
        name: "Mouse Pantera Elite 6",
        descrizione: "Il Mouse Pantera Elite 6 nasce per chi vuole precisione assoluta a ogni movimento del polso. Il peso ridotto a soli 49 grammi riduce l'affaticamento della mano, mentre il sensore ottico da 26000 DPI traccia ogni spostamento senza scatti anche sulle superfici più difficili. Inoltre, la rotella in metallo con scorrimento a frizione variabile rende rapidissima la navigazione di documenti lunghi. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 122.99
    },
    {
        id: 834,
        name: "Webcam Nova Prime Titanio",
        descrizione: "La Webcam Nova Prime Titanio è la soluzione semplice e immediata per chi lavora o studia da remoto. I due microfoni stereo con riduzione del rumore catturano la voce in modo chiaro, mentre la correzione automatica della luce compensa ambienti troppo bui o controluce. Inoltre, il campo visivo di 90° inquadra comodamente anche più persone. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 118.9
    },
    {
        id: 835,
        name: "Casse Vertex Studio 3",
        descrizione: "Le Casse Vertex Studio 3 trasformano la scrivania in un piccolo studio d'ascolto. Le casse in legno MDF riducono le risonanze indesiderate, mentre i woofer in fibra di carta garantiscono bassi caldi e ben controllati. Inoltre, il telecomando incluso consente di gestire il volume dal divano. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 189.99
    },
    {
        id: 836,
        name: "SSD Esterno Vortex Studio 4",
        descrizione: "L'SSD Esterno Vortex Studio 4 unisce dimensioni tascabili a prestazioni da disco interno. Le velocità di lettura fino a 2000 MB/s azzerano i tempi di attesa, mentre la connessione USB-C è compatibile con PC, Mac, tablet e console. Inoltre, il software di backup automatico incluso rende semplice proteggere i file. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 238.99
    },
    {
        id: 837,
        name: "Controller Cometa Core Blu Oceano",
        descrizione: "Il Controller Cometa Core Blu Oceano è progettato per competere ai massimi livelli e vincere. L'impugnatura gommata antiscivolo resta salda anche nelle partite più intense, mentre la vibrazione a doppio motore restituisce ogni impatto e ogni esplosione. Inoltre, la batteria garantisce fino a 80 ore di gioco senza interruzioni. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 112.49
    },
    {
        id: 838,
        name: "Hub USB Aurora Elite 8",
        descrizione: "L'Hub USB Aurora Elite 8 mette ordine tra cavi e periferiche in un attimo. La porta Ethernet gigabit assicura una connessione cablata stabile, mentre la scocca in alluminio dissipa il calore anche sotto carico. Inoltre, è plug-and-play e compatibile con Windows, macOS e Linux. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 127.49
    },
    {
        id: 839,
        name: "Casse Stratos Studio Verde Salvia",
        descrizione: "Le Casse Stratos Studio Verde Salvia trasformano la scrivania in un piccolo studio d'ascolto. Gli ingressi Bluetooth, ottico e AUX permettono di collegare qualsiasi sorgente, mentre i tweeter in seta restituiscono alti morbidi e mai affaticanti. Inoltre, i woofer in fibra di carta garantiscono bassi caldi e ben controllati. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 169.9
    },
    {
        id: 840,
        name: "Microfono Drago Evo 6",
        descrizione: "Il Microfono Drago Evo 6 porta qualità broadcast in qualsiasi stanza della casa. Si collega in USB-C senza bisogno di interfacce audio esterne, mentre il controllo del guadagno integrato permette regolazioni rapide al volo. Inoltre, il pulsante mute touch con indicatore LED evita imbarazzi durante le dirette. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 92.99
    },
    {
        id: 841,
        name: "Router Ossidiana Prime 4",
        descrizione: "Il Router Ossidiana Prime 4 porta una connessione veloce e stabile in ogni angolo della casa. Lo standard Wi-Fi 6 raggiunge velocità combinate fino a 11 Gbps, mentre la priorità QoS dà la precedenza a gaming e videochiamate. Inoltre, l'app di configurazione guida l'installazione in pochi minuti. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 253.49
    },
    {
        id: 842,
        name: "Router Shadow Lite 2",
        descrizione: "Il Router Shadow Lite 2 elimina le zone morte e i cali di segnale una volta per tutte. Gestisce senza fatica oltre 64 dispositivi connessi contemporaneamente, mentre la priorità QoS dà la precedenza a gaming e videochiamate. Inoltre, l'app di configurazione guida l'installazione in pochi minuti. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 58.99
    },
    {
        id: 843,
        name: "Mouse Plasma Air Sabbia",
        descrizione: "Il Mouse Plasma Air Sabbia è il compagno ideale per lunghe sessioni di lavoro e di gioco. Il peso ridotto a soli 49 grammi riduce l'affaticamento della mano, mentre il sensore ottico da 16000 DPI traccia ogni spostamento senza scatti anche sulle superfici più difficili. Inoltre, la batteria ricaricabile via USB-C offre fino a 30 ore di autonomia con una singola carica. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Ideale sia per l'ufficio sia per il setup di casa. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 33.9
    },
    {
        id: 844,
        name: "SSD Esterno Cristallo Core 1",
        descrizione: "L'SSD Esterno Cristallo Core 1 è pensato per fotografi, videomaker e professionisti in movimento. La scocca resistente a urti e cadute protegge i dati anche in viaggio, mentre la connessione USB-C è compatibile con PC, Mac, tablet e console. Inoltre, la crittografia hardware AES a 256 bit protegge i dati sensibili. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 141.99
    },
    {
        id: 845,
        name: "Webcam Pulsar Core 6",
        descrizione: "La Webcam Pulsar Core 6 trasforma lo smart working con immagini nitide e un audio limpido. Funziona in modalità plug-and-play senza driver con tutte le principali piattaforme di videochiamata, mentre il sensore in risoluzione 4K cattura ogni dettaglio con colori naturali. Inoltre, la registrazione a 60 fps rende fluidi anche streaming e tutorial. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 82.99
    },
    {
        id: 846,
        name: "Lampada Monitor Shadow Plus 1",
        descrizione: "La Lampada Monitor Shadow Plus 1 rende più piacevoli e meno faticose le sessioni di lavoro serali. Il fascio luminoso asimmetrico illumina la scrivania senza abbagliare, mentre si aggancia a monitor piatti e curvi senza viti né adesivi. Inoltre, la temperatura colore è regolabile da 2700 K a 6500 K. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 66.49
    },
    {
        id: 847,
        name: "Webcam Shadow Lite 6",
        descrizione: "La Webcam Shadow Lite 6 trasforma lo smart working con immagini nitide e un audio limpido. La registrazione a 60 fps rende fluidi anche streaming e tutorial, mentre il campo visivo di 90° inquadra comodamente anche più persone. Inoltre, l'autofocus rapido mantiene il volto sempre a fuoco anche quando ti muovi. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 66.9
    },
    {
        id: 848,
        name: "Microfono Glaciale One 4",
        descrizione: "Il Microfono Glaciale One 4 è pensato per podcaster, streamer e musicisti che cercano un suono pulito. Si collega in USB-C senza bisogno di interfacce audio esterne, mentre il controllo del guadagno integrato permette regolazioni rapide al volo. Inoltre, la capsula a condensatore cattura la voce con dettaglio e naturalezza. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 83.49
    },
    {
        id: 849,
        name: "Microfono Glaciale One Blu Oceano",
        descrizione: "Il Microfono Glaciale One Blu Oceano è pensato per podcaster, streamer e musicisti che cercano un suono pulito. La capsula a condensatore cattura la voce con dettaglio e naturalezza, mentre il pattern cardioide isola la voce dai rumori ambientali. Inoltre, la registrazione a 24 bit/192 kHz garantisce una qualità audio professionale. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Ideale sia per l'ufficio sia per il setup di casa. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 50.99
    },
    {
        id: 850,
        name: "Controller Grifone Elite Titanio",
        descrizione: "Il Controller Grifone Elite Titanio unisce un'impugnatura comoda a una precisione chirurgica. I grilletti con corsa regolabile si adattano a sparatutto e giochi di guida, mentre la vibrazione a doppio motore restituisce ogni impatto e ogni esplosione. Inoltre, le palette posteriori rimappabili permettono comandi rapidissimi. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 182.49
    },
    {
        id: 851,
        name: "Cuffie Neon Max Verde Salvia",
        descrizione: "Le Cuffie Neon Max Verde Salvia sono pensate per isolarti dal mondo e lasciarti solo con la tua musica. La connessione Bluetooth 5.3 multipoint le collega a due dispositivi contemporaneamente, mentre la cancellazione attiva del rumore riduce il brusio di uffici, treni e aerei. Inoltre, la batteria assicura fino a 40 ore di ascolto, con ricarica rapida in pochi minuti. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 308.99
    },
    {
        id: 852,
        name: "SSD Esterno Onice Studio Bianco Artico",
        descrizione: "L'SSD Esterno Onice Studio Bianco Artico mette al sicuro i tuoi file e li porta ovunque alla massima velocità. La scocca resistente a urti e cadute protegge i dati anche in viaggio, mentre la crittografia hardware AES a 256 bit protegge i dati sensibili. Inoltre, il software di backup automatico incluso rende semplice proteggere i file. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 196.49
    },
    {
        id: 853,
        name: "Cuffie Silenzio Max 3",
        descrizione: "Le Cuffie Silenzio Max 3 ti avvolgono in un suono pieno, dettagliato e ricco di sfumature. I cuscinetti in memory foam rivestiti in tessuto traspirante non affaticano le orecchie, mentre la connessione Bluetooth 5.3 multipoint le collega a due dispositivi contemporaneamente. Inoltre, la modalità trasparenza permette di sentire l'ambiente circostante senza toglierle. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 344.9
    },
    {
        id: 854,
        name: "Controller Ossidiana Pro Bianco Artico",
        descrizione: "Il Controller Ossidiana Pro Bianco Artico unisce un'impugnatura comoda a una precisione chirurgica. È compatibile con PC, smartphone e le principali console, mentre i grilletti con corsa regolabile si adattano a sparatutto e giochi di guida. Inoltre, la batteria garantisce fino a 30 ore di gioco senza interruzioni. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 150.49
    },
    {
        id: 855,
        name: "Stampante Brezza Studio 8",
        descrizione: "La Stampante Brezza Studio 8 unisce costi di stampa contenuti a prestazioni di livello professionale. Il sistema a serbatoi ricaricabili abbatte drasticamente il costo per pagina, mentre la stampa fronte/retro automatica riduce il consumo di carta. Inoltre, stampa fino a 22 pagine al minuto con testi nitidi e neri profondi. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 370.9
    },
    {
        id: 856,
        name: "Router Glaciale Lite 8",
        descrizione: "Il Router Glaciale Lite 8 porta una connessione veloce e stabile in ogni angolo della casa. Il parental control integrato permette di gestire orari e contenuti per ogni membro della famiglia, mentre lo standard Wi-Fi 6E raggiunge velocità combinate fino a 11 Gbps. Inoltre, la porta WAN da 2,5 Gbps sfrutta al massimo le connessioni in fibra ottica. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 56.99
    },
    {
        id: 857,
        name: "Stampante Spectra One 8",
        descrizione: "La Stampante Spectra One 8 unisce costi di stampa contenuti a prestazioni di livello professionale. La connessione Wi-Fi e l'app dedicata permettono di stampare direttamente dallo smartphone, mentre le stampe fotografiche a colori hanno toni vividi e sfumature morbide. Inoltre, la stampa fronte/retro automatica riduce il consumo di carta. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 123.49
    },
    {
        id: 858,
        name: "Microfono Mistral Plus 1",
        descrizione: "Il Microfono Mistral Plus 1 è pensato per podcaster, streamer e musicisti che cercano un suono pulito. Il supporto antivibrazione e il filtro anti-pop sono inclusi nella confezione, mentre l'uscita cuffie a latenza zero consente di monitorare la propria voce in tempo reale. Inoltre, il pulsante mute touch con indicatore LED evita imbarazzi durante le dirette. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 124.9
    },
    {
        id: 859,
        name: "Stampante Cristallo One Titanio",
        descrizione: "La Stampante Cristallo One Titanio porta in casa e in ufficio stampe nitide, veloci e affidabili. La stampa fronte/retro automatica riduce il consumo di carta, mentre il sistema a serbatoi ricaricabili abbatte drasticamente il costo per pagina. Inoltre, le stampe fotografiche a colori hanno toni vividi e sfumature morbide. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 110.49
    },
    {
        id: 860,
        name: "Mouse Zefiro One Nero Notte",
        descrizione: "Il Mouse Zefiro One Nero Notte nasce per chi vuole precisione assoluta a ogni movimento del polso. I piedini in PTFE puro assicurano uno scorrimento silenzioso e privo di attrito, mentre la batteria ricaricabile via USB-C offre fino a 80 ore di autonomia con una singola carica. Inoltre, la connessione wireless a bassa latenza garantisce una risposta istantanea, paragonabile a quella di un cavo. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 44.49
    },
    {
        id: 861,
        name: "Casse Quasar Pro 4",
        descrizione: "Le Casse Quasar Pro 4 uniscono un design raffinato a una resa sonora di alto livello. La potenza complessiva di 20 W assicura un volume pieno senza distorsioni, mentre il telecomando incluso consente di gestire il volume dal divano. Inoltre, i controlli di bassi e acuti permettono di adattare il suono all'ambiente. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 196.9
    },
    {
        id: 862,
        name: "Microfono Atlas One 2",
        descrizione: "Il Microfono Atlas One 2 è pensato per podcaster, streamer e musicisti che cercano un suono pulito. Si collega in USB-C senza bisogno di interfacce audio esterne, mentre il controllo del guadagno integrato permette regolazioni rapide al volo. Inoltre, il pattern cardioide isola la voce dai rumori ambientali. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 57.49
    },
    {
        id: 863,
        name: "Casse Dolomia Lite 8",
        descrizione: "Le Casse Dolomia Lite 8 sono la scelta ideale per musica, film e videogiochi. Gli ingressi Bluetooth, ottico e AUX permettono di collegare qualsiasi sorgente, mentre il telecomando incluso consente di gestire il volume dal divano. Inoltre, le casse in legno MDF riducono le risonanze indesiderate. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 96.9
    },
    {
        id: 864,
        name: "Webcam Aurora Core Blu Oceano",
        descrizione: "La Webcam Aurora Core Blu Oceano porta una qualità d'immagine professionale sulla tua scrivania. La registrazione a 60 fps rende fluidi anche streaming e tutorial, mentre la clip universale si fissa saldamente a monitor, portatili e treppiedi. Inoltre, la correzione automatica della luce compensa ambienti troppo bui o controluce. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 102.9
    },
    {
        id: 865,
        name: "SSD Esterno Cristallo Elite Blu Oceano",
        descrizione: "L'SSD Esterno Cristallo Elite Blu Oceano è il modo più rapido per ampliare lo spazio di archiviazione. La scocca resistente a urti e cadute protegge i dati anche in viaggio, mentre il software di backup automatico incluso rende semplice proteggere i file. Inoltre, la connessione USB-C è compatibile con PC, Mac, tablet e console. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 285.49
    },
    {
        id: 866,
        name: "Controller Vulcano Lite Sabbia",
        descrizione: "Il Controller Vulcano Lite Sabbia è progettato per competere ai massimi livelli e vincere. I grilletti con corsa regolabile si adattano a sparatutto e giochi di guida, mentre è compatibile con PC, smartphone e le principali console. Inoltre, la batteria garantisce fino a 80 ore di gioco senza interruzioni. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 36.99
    },
    {
        id: 867,
        name: "Casse Silenzio Evo 4",
        descrizione: "Le Casse Silenzio Evo 4 sono la scelta ideale per musica, film e videogiochi. Il telecomando incluso consente di gestire il volume dal divano, mentre la potenza complessiva di 20 W assicura un volume pieno senza distorsioni. Inoltre, l'illuminazione RGB sincronizzata con la musica crea atmosfera. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 156.49
    },
    {
        id: 868,
        name: "Tastiera Lince Studio 7",
        descrizione: "La Tastiera Lince Studio 7 regala una sensazione di digitazione solida, precisa e appagante. La connessione tri-mode (Bluetooth, 2,4 GHz e cavo) si adatta a qualsiasi postazione, mentre la batteria da 4000 mAh garantisce settimane di utilizzo senza ricarica. Inoltre, gli switch meccanici hot-swap si sostituiscono senza saldature, per personalizzare il feeling di ogni tasto. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 139.99
    },
    {
        id: 869,
        name: "Monitor Altair Core Bianco Artico",
        descrizione: "Il Monitor Altair Core Bianco Artico ridefinisce la postazione con cornici sottilissime e un pannello di alto livello. Le cornici ultrasottili su tre lati lo rendono perfetto per configurazioni multi-monitor, mentre il tempo di risposta di 1 ms elimina scie e sfocature nelle scene più veloci. Inoltre, la tecnologia flicker-free e il filtro per la luce blu riducono l'affaticamento visivo. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 379.99
    },
    {
        id: 870,
        name: "Microfono Ossidiana Elite 9",
        descrizione: "Il Microfono Ossidiana Elite 9 rende ogni parola limpida, calda e piena di carattere. Il pattern cardioide isola la voce dai rumori ambientali, mentre l'uscita cuffie a latenza zero consente di monitorare la propria voce in tempo reale. Inoltre, la capsula a condensatore cattura la voce con dettaglio e naturalezza. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 212.99
    },
    {
        id: 871,
        name: "Webcam Solaris Max 1",
        descrizione: "La Webcam Solaris Max 1 porta una qualità d'immagine professionale sulla tua scrivania. La clip universale si fissa saldamente a monitor, portatili e treppiedi, mentre il sensore in risoluzione 4K cattura ogni dettaglio con colori naturali. Inoltre, funziona in modalità plug-and-play senza driver con tutte le principali piattaforme di videochiamata. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 165.9
    },
    {
        id: 872,
        name: "SSD Esterno Fulmine Evo Rosso Corsa",
        descrizione: "L'SSD Esterno Fulmine Evo Rosso Corsa mette al sicuro i tuoi file e li porta ovunque alla massima velocità. La certificazione IP65 lo difende da polvere e schizzi d'acqua, mentre la scocca resistente a urti e cadute protegge i dati anche in viaggio. Inoltre, il software di backup automatico incluso rende semplice proteggere i file. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 178.99
    },
    {
        id: 873,
        name: "Tastiera Pantera Elite 8",
        descrizione: "La Tastiera Pantera Elite 8 porta sulla scrivania la qualità costruttiva delle tastiere da collezione. I keycap in PBT double-shot resistono all'usura e non diventano lucidi con il tempo, mentre il poggiapolsi magnetico in similpelle sostiene i polsi nelle sessioni più lunghe. Inoltre, la retroilluminazione RGB per singolo tasto offre oltre 18 effetti configurabili. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 209.99
    },
    {
        id: 874,
        name: "Casse Maestrale Lite 7",
        descrizione: "Le Casse Maestrale Lite 7 riempiono la stanza con un suono potente e sorprendentemente definito. Il telecomando incluso consente di gestire il volume dal divano, mentre l'illuminazione RGB sincronizzata con la musica crea atmosfera. Inoltre, i controlli di bassi e acuti permettono di adattare il suono all'ambiente. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 67.9
    },
    {
        id: 875,
        name: "Monitor Sirio Plus 5",
        descrizione: "Il Monitor Sirio Plus 5 ridefinisce la postazione con cornici sottilissime e un pannello di alto livello. Il pannello IPS da 32 pollici con risoluzione WQHD restituisce dettagli nitidissimi, mentre le cornici ultrasottili su tre lati lo rendono perfetto per configurazioni multi-monitor. Inoltre, il tempo di risposta di 1 ms elimina scie e sfocature nelle scene più veloci. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 329.99
    },
    {
        id: 876,
        name: "Stampante Glaciale Evo Grigio Siderale",
        descrizione: "La Stampante Glaciale Evo Grigio Siderale semplifica la gestione dei documenti di tutta la famiglia o del piccolo ufficio. Stampa fino a 15 pagine al minuto con testi nitidi e neri profondi, mentre la stampa fronte/retro automatica riduce il consumo di carta. Inoltre, il vassoio da 250 fogli limita le interruzioni per il caricamento della carta. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 262.9
    },
    {
        id: 877,
        name: "Router Nebula Core Bianco Artico",
        descrizione: "Il Router Nebula Core Bianco Artico è il cuore di una rete domestica moderna, sicura e senza rallentamenti. La priorità QoS dà la precedenza a gaming e videochiamate, mentre la tecnologia mesh consente di estendere la copertura aggiungendo altri nodi. Inoltre, gestisce senza fatica oltre 128 dispositivi connessi contemporaneamente. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 137.99
    },
    {
        id: 878,
        name: "Cuffie Zefiro One 4",
        descrizione: "Le Cuffie Zefiro One 4 uniscono comfort da indossare tutto il giorno e una resa acustica sorprendente. La batteria assicura fino a 70 ore di ascolto, con ricarica rapida in pochi minuti, mentre la struttura pieghevole e la custodia rigida le rendono perfette in viaggio. Inoltre, i driver dinamici da 50 mm offrono bassi profondi e alti cristallini. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 92.99
    },
    {
        id: 879,
        name: "Supporto Laptop Vertex Max 2",
        descrizione: "Il Supporto Laptop Vertex Max 2 migliora la postura e il raffreddamento del tuo portatile. Il design aperto favorisce la circolazione dell'aria e riduce le temperature, mentre i gommini in silicone proteggono il portatile da graffi e scivolamenti. Inoltre, la base stabile non oscilla nemmeno durante la digitazione più intensa. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 79.9
    },
    {
        id: 880,
        name: "Tappetino Zenith Evo 5",
        descrizione: "Il Tappetino Zenith Evo 5 è il dettaglio che fa la differenza tra un buon setup e uno eccellente. La base in gomma naturale antiscivolo lo mantiene fermo in ogni situazione, mentre si lava facilmente e torna come nuovo in pochi minuti. Inoltre, i bordi cuciti impediscono lo sfilacciamento nel tempo. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 27.9
    },
    {
        id: 881,
        name: "Casse Ossidiana Prime Nero Notte",
        descrizione: "Le Casse Ossidiana Prime Nero Notte riempiono la stanza con un suono potente e sorprendentemente definito. I woofer in fibra di carta garantiscono bassi caldi e ben controllati, mentre le casse in legno MDF riducono le risonanze indesiderate. Inoltre, il telecomando incluso consente di gestire il volume dal divano. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 206.99
    },
    {
        id: 882,
        name: "Supporto Laptop Tuono Air 4",
        descrizione: "Il Supporto Laptop Tuono Air 4 è l'accessorio ergonomico che trasforma il modo di lavorare. La struttura in alluminio sostiene portatili fino a 27 pollici, mentre i gommini in silicone proteggono il portatile da graffi e scivolamenti. Inoltre, la base stabile non oscilla nemmeno durante la digitazione più intensa. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 27.49
    },
    {
        id: 883,
        name: "Tappetino Aquila Lite 2",
        descrizione: "Il Tappetino Aquila Lite 2 dà ordine e stile a tutta la postazione di lavoro. Si lava facilmente e torna come nuovo in pochi minuti, mentre la base in gomma naturale antiscivolo lo mantiene fermo in ogni situazione. Inoltre, la superficie in microtessuto è ottimizzata per sensori ottici e laser. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 17.49
    },
    {
        id: 884,
        name: "Webcam Grifone Lite Lavanda",
        descrizione: "La Webcam Grifone Lite Lavanda ti fa apparire al meglio in ogni videochiamata, riunione o diretta. Il sensore in risoluzione 2K cattura ogni dettaglio con colori naturali, mentre funziona in modalità plug-and-play senza driver con tutte le principali piattaforme di videochiamata. Inoltre, la registrazione a 60 fps rende fluidi anche streaming e tutorial. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 29.9
    },
    {
        id: 885,
        name: "Supporto Laptop Prisma Elite Rosso Corsa",
        descrizione: "Il Supporto Laptop Prisma Elite Rosso Corsa migliora la postura e il raffreddamento del tuo portatile. I gommini in silicone proteggono il portatile da graffi e scivolamenti, mentre il design aperto favorisce la circolazione dell'aria e riduce le temperature. Inoltre, si ripiega in pochi secondi e sta comodamente in uno zaino. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 78.99
    },
    {
        id: 886,
        name: "Tappetino Fenice Ultra 1",
        descrizione: "Il Tappetino Fenice Ultra 1 offre la superficie perfetta per movimenti precisi e controllati. Il trattamento idrorepellente protegge da schizzi e macchie, mentre i bordi cuciti impediscono lo sfilacciamento nel tempo. Inoltre, si lava facilmente e torna come nuovo in pochi minuti. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 51.9
    },
    {
        id: 887,
        name: "Monitor Shadow Pro 3",
        descrizione: "Il Monitor Shadow Pro 3 ridefinisce la postazione con cornici sottilissime e un pannello di alto livello. Le cornici ultrasottili su tre lati lo rendono perfetto per configurazioni multi-monitor, mentre la porta USB-C con alimentazione fino a 65 W collega e ricarica il portatile con un solo cavo. Inoltre, la copertura del 100% dello spazio colore sRGB lo rende adatto a fotoritocco e grafica. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 550.99
    },
    {
        id: 888,
        name: "Tappetino Titan Evo Rosso Corsa",
        descrizione: "Il Tappetino Titan Evo Rosso Corsa è il dettaglio che fa la differenza tra un buon setup e uno eccellente. La superficie in microtessuto è ottimizzata per sensori ottici e laser, mentre il trattamento idrorepellente protegge da schizzi e macchie. Inoltre, i bordi cuciti impediscono lo sfilacciamento nel tempo. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 30.99
    },
    {
        id: 889,
        name: "Hub USB Lince Prime 9",
        descrizione: "L'Hub USB Lince Prime 9 trasforma qualsiasi portatile in una vera postazione desktop. Offre 11 porte, tra cui USB-A, USB-C, HDMI e lettore di schede SD, mentre la porta Ethernet gigabit assicura una connessione cablata stabile. Inoltre, è plug-and-play e compatibile con Windows, macOS e Linux. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 75.99
    },
    {
        id: 890,
        name: "Tappetino Nimbus Air Verde Salvia",
        descrizione: "Il Tappetino Nimbus Air Verde Salvia è il dettaglio che fa la differenza tra un buon setup e uno eccellente. Il trattamento idrorepellente protegge da schizzi e macchie, mentre si lava facilmente e torna come nuovo in pochi minuti. Inoltre, i bordi cuciti impediscono lo sfilacciamento nel tempo. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 21.99
    },
    {
        id: 891,
        name: "Tappetino Nimbus Pro Grafite",
        descrizione: "Il Tappetino Nimbus Pro Grafite dà ordine e stile a tutta la postazione di lavoro. Il formato esteso da 120x60 cm ospita comodamente mouse e tastiera, mentre si lava facilmente e torna come nuovo in pochi minuti. Inoltre, la superficie in microtessuto è ottimizzata per sensori ottici e laser. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 35.9
    },
    {
        id: 892,
        name: "Casse Cometa Plus 3",
        descrizione: "Le Casse Cometa Plus 3 trasformano la scrivania in un piccolo studio d'ascolto. La potenza complessiva di 60 W assicura un volume pieno senza distorsioni, mentre i controlli di bassi e acuti permettono di adattare il suono all'ambiente. Inoltre, i tweeter in seta restituiscono alti morbidi e mai affaticanti. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 126.9
    },
    {
        id: 893,
        name: "Tappetino Iride Air Lavanda",
        descrizione: "Il Tappetino Iride Air Lavanda protegge la scrivania e migliora lo scorrimento del mouse. La base in gomma naturale antiscivolo lo mantiene fermo in ogni situazione, mentre i bordi cuciti impediscono lo sfilacciamento nel tempo. Inoltre, la superficie in microtessuto è ottimizzata per sensori ottici e laser. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 21.49
    },
    {
        id: 894,
        name: "Supporto Laptop Graffio Elite 7",
        descrizione: "Il Supporto Laptop Graffio Elite 7 migliora la postura e il raffreddamento del tuo portatile. I gommini in silicone proteggono il portatile da graffi e scivolamenti, mentre il design aperto favorisce la circolazione dell'aria e riduce le temperature. Inoltre, la struttura in alluminio sostiene portatili fino a 24 pollici. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 85.99
    },
    {
        id: 895,
        name: "Lampada Monitor Drago Evo Grigio Siderale",
        descrizione: "La Lampada Monitor Drago Evo Grigio Siderale libera spazio sulla scrivania portando la luce proprio dove serve. La temperatura colore è regolabile da 2700 K a 6500 K, mentre il fascio luminoso asimmetrico illumina la scrivania senza abbagliare. Inoltre, la retroilluminazione RGB posteriore crea un'atmosfera rilassante. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 53.99
    },
    {
        id: 896,
        name: "Tastiera Opale Lite 9",
        descrizione: "La Tastiera Opale Lite 9 combina un design essenziale a una risposta dei tasti sorprendentemente reattiva. Il layout italiano completo include tastierino numerico e tasti multimediali dedicati, mentre il poggiapolsi magnetico in similpelle sostiene i polsi nelle sessioni più lunghe. Inoltre, la batteria da 4000 mAh garantisce settimane di utilizzo senza ricarica. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 28.9
    },
    {
        id: 897,
        name: "Microfono Levante Prime Grafite",
        descrizione: "Il Microfono Levante Prime Grafite è pensato per podcaster, streamer e musicisti che cercano un suono pulito. La capsula a condensatore cattura la voce con dettaglio e naturalezza, mentre il pattern cardioide isola la voce dai rumori ambientali. Inoltre, il pulsante mute touch con indicatore LED evita imbarazzi durante le dirette. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 176.99
    },
    {
        id: 898,
        name: "Casse Helix Ultra Rosso Corsa",
        descrizione: "Le Casse Helix Ultra Rosso Corsa trasformano la scrivania in un piccolo studio d'ascolto. La potenza complessiva di 40 W assicura un volume pieno senza distorsioni, mentre gli ingressi Bluetooth, ottico e AUX permettono di collegare qualsiasi sorgente. Inoltre, l'illuminazione RGB sincronizzata con la musica crea atmosfera. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 236.99
    },
    {
        id: 899,
        name: "Webcam Altair Studio Lavanda",
        descrizione: "La Webcam Altair Studio Lavanda è la soluzione semplice e immediata per chi lavora o studia da remoto. L'autofocus rapido mantiene il volto sempre a fuoco anche quando ti muovi, mentre la correzione automatica della luce compensa ambienti troppo bui o controluce. Inoltre, il sensore in risoluzione 2K cattura ogni dettaglio con colori naturali. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 128.99
    },
    {
        id: 900,
        name: "Microfono Lince One 5",
        descrizione: "Il Microfono Lince One 5 dà alla tua voce la presenza e la chiarezza di uno studio di registrazione. Il controllo del guadagno integrato permette regolazioni rapide al volo, mentre il pulsante mute touch con indicatore LED evita imbarazzi durante le dirette. Inoltre, l'uscita cuffie a latenza zero consente di monitorare la propria voce in tempo reale. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 74.99
    },
    {
        id: 901,
        name: "SSD Esterno Stratos Lite 3",
        descrizione: "L'SSD Esterno Stratos Lite 3 è pensato per fotografi, videomaker e professionisti in movimento. La certificazione IP65 lo difende da polvere e schizzi d'acqua, mentre la capacità di 1 TB offre spazio per migliaia di foto, video e progetti. Inoltre, la crittografia hardware AES a 256 bit protegge i dati sensibili. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 115.9
    },
    {
        id: 902,
        name: "Webcam Solaris Core 3",
        descrizione: "La Webcam Solaris Core 3 trasforma lo smart working con immagini nitide e un audio limpido. Funziona in modalità plug-and-play senza driver con tutte le principali piattaforme di videochiamata, mentre la clip universale si fissa saldamente a monitor, portatili e treppiedi. Inoltre, la correzione automatica della luce compensa ambienti troppo bui o controluce. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 108.49
    },
    {
        id: 903,
        name: "Supporto Laptop Aquila Pro 1",
        descrizione: "Il Supporto Laptop Aquila Pro 1 è l'accessorio ergonomico che trasforma il modo di lavorare. Si ripiega in pochi secondi e sta comodamente in uno zaino, mentre il design aperto favorisce la circolazione dell'aria e riduce le temperature. Inoltre, l'altezza e l'inclinazione sono regolabili su più livelli. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 68.9
    },
    {
        id: 904,
        name: "Supporto Laptop Mistral Core Blu Oceano",
        descrizione: "Il Supporto Laptop Mistral Core Blu Oceano porta lo schermo del portatile all'altezza degli occhi, salvando schiena e collo. I gommini in silicone proteggono il portatile da graffi e scivolamenti, mentre l'altezza e l'inclinazione sono regolabili su più livelli. Inoltre, la struttura in alluminio sostiene portatili fino a 32 pollici. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 54.9
    },
    {
        id: 905,
        name: "Hub USB Helix Evo 5",
        descrizione: "L'Hub USB Helix Evo 5 mette ordine tra cavi e periferiche in un attimo. La porta Ethernet gigabit assicura una connessione cablata stabile, mentre è plug-and-play e compatibile con Windows, macOS e Linux. Inoltre, il trasferimento dati a 10 Gbps rende rapidissime le copie di file. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 67.99
    },
    {
        id: 906,
        name: "Router Spectra Core Sabbia",
        descrizione: "Il Router Spectra Core Sabbia elimina le zone morte e i cali di segnale una volta per tutte. La priorità QoS dà la precedenza a gaming e videochiamate, mentre gestisce senza fatica oltre 128 dispositivi connessi contemporaneamente. Inoltre, le antenne ad alto guadagno con beamforming indirizzano il segnale verso i dispositivi. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 208.99
    },
    {
        id: 907,
        name: "Monitor Lince One 2",
        descrizione: "Il Monitor Lince One 2 offre una qualità d'immagine che fa la differenza tanto nel lavoro quanto nel gioco. Il tempo di risposta di 1 ms elimina scie e sfocature nelle scene più veloci, mentre la tecnologia flicker-free e il filtro per la luce blu riducono l'affaticamento visivo. Inoltre, il pannello IPS da 34 pollici con risoluzione Full HD restituisce dettagli nitidissimi. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 129.9
    },
    {
        id: 908,
        name: "SSD Esterno Astra Max 3",
        descrizione: "L'SSD Esterno Astra Max 3 mette al sicuro i tuoi file e li porta ovunque alla massima velocità. La certificazione IP65 lo difende da polvere e schizzi d'acqua, mentre le velocità di lettura fino a 1050 MB/s azzerano i tempi di attesa. Inoltre, la capacità di 1 TB offre spazio per migliaia di foto, video e progetti. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 283.49
    },
    {
        id: 909,
        name: "Casse Pulsar Studio Grafite",
        descrizione: "Le Casse Pulsar Studio Grafite trasformano la scrivania in un piccolo studio d'ascolto. Gli ingressi Bluetooth, ottico e AUX permettono di collegare qualsiasi sorgente, mentre i controlli di bassi e acuti permettono di adattare il suono all'ambiente. Inoltre, la potenza complessiva di 100 W assicura un volume pieno senza distorsioni. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 228.99
    },
    {
        id: 910,
        name: "Router Fenice Ultra Grigio Siderale",
        descrizione: "Il Router Fenice Ultra Grigio Siderale è pensato per famiglie connesse, gamer e professionisti in smart working. L'app di configurazione guida l'installazione in pochi minuti, mentre la priorità QoS dà la precedenza a gaming e videochiamate. Inoltre, la porta WAN da 2,5 Gbps sfrutta al massimo le connessioni in fibra ottica. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 325.49
    },
    {
        id: 911,
        name: "Mouse Fulmine Lite 1",
        descrizione: "Il Mouse Fulmine Lite 1 unisce una forma ergonomica studiata a lungo a un sensore di nuova generazione. I pulsanti laterali programmabili permettono di richiamare scorciatoie e macro con un solo tocco, mentre la rotella in metallo con scorrimento a frizione variabile rende rapidissima la navigazione di documenti lunghi. Inoltre, gli switch ottici sono certificati per oltre 80 milioni di clic. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 26.99
    },
    {
        id: 912,
        name: "Tastiera Brezza Air Grafite",
        descrizione: "La Tastiera Brezza Air Grafite regala una sensazione di digitazione solida, precisa e appagante. Il telaio in alluminio spazzolato elimina flessioni e vibrazioni durante la digitazione, mentre lo strato di smorzamento interno in silicone attenua il rumore di battitura. Inoltre, il layout italiano completo include tastierino numerico e tasti multimediali dedicati. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Ideale sia per l'ufficio sia per il setup di casa. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 28.99
    },
    {
        id: 913,
        name: "SSD Esterno Condor Max Bianco Artico",
        descrizione: "L'SSD Esterno Condor Max Bianco Artico è il modo più rapido per ampliare lo spazio di archiviazione. La connessione USB-C è compatibile con PC, Mac, tablet e console, mentre la scocca resistente a urti e cadute protegge i dati anche in viaggio. Inoltre, il software di backup automatico incluso rende semplice proteggere i file. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 289.9
    },
    {
        id: 914,
        name: "Casse Lince Studio 3",
        descrizione: "Le Casse Lince Studio 3 uniscono un design raffinato a una resa sonora di alto livello. La potenza complessiva di 20 W assicura un volume pieno senza distorsioni, mentre l'illuminazione RGB sincronizzata con la musica crea atmosfera. Inoltre, le casse in legno MDF riducono le risonanze indesiderate. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 198.49
    },
    {
        id: 915,
        name: "Supporto Laptop Brezza Core Rosso Corsa",
        descrizione: "Il Supporto Laptop Brezza Core Rosso Corsa migliora la postura e il raffreddamento del tuo portatile. I gommini in silicone proteggono il portatile da graffi e scivolamenti, mentre la struttura in alluminio sostiene portatili fino a 34 pollici. Inoltre, l'altezza e l'inclinazione sono regolabili su più livelli. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 43.9
    },
    {
        id: 916,
        name: "Router Cobalto Prime 1",
        descrizione: "Il Router Cobalto Prime 1 porta una connessione veloce e stabile in ogni angolo della casa. L'app di configurazione guida l'installazione in pochi minuti, mentre le antenne ad alto guadagno con beamforming indirizzano il segnale verso i dispositivi. Inoltre, il parental control integrato permette di gestire orari e contenuti per ogni membro della famiglia. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 230.49
    },
    {
        id: 917,
        name: "Router Tuono Ultra Grigio Siderale",
        descrizione: "Il Router Tuono Ultra Grigio Siderale è il cuore di una rete domestica moderna, sicura e senza rallentamenti. La crittografia WPA3 e il firewall integrato proteggono la rete dalle intrusioni, mentre l'app di configurazione guida l'installazione in pochi minuti. Inoltre, gestisce senza fatica oltre 128 dispositivi connessi contemporaneamente. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 324.99
    },
    {
        id: 918,
        name: "Hub USB Zenith Elite Blu Oceano",
        descrizione: "L'Hub USB Zenith Elite Blu Oceano mette ordine tra cavi e periferiche in un attimo. È plug-and-play e compatibile con Windows, macOS e Linux, mentre l'uscita HDMI supporta monitor esterni fino a 4K a 60 Hz. Inoltre, offre 5 porte, tra cui USB-A, USB-C, HDMI e lettore di schede SD. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 122.9
    },
    {
        id: 919,
        name: "Tappetino Levante Max 6",
        descrizione: "Il Tappetino Levante Max 6 è il dettaglio che fa la differenza tra un buon setup e uno eccellente. Lo spessore di 5 mm offre il giusto sostegno al polso, mentre si lava facilmente e torna come nuovo in pochi minuti. Inoltre, i bordi cuciti impediscono lo sfilacciamento nel tempo. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 49.99
    },
    {
        id: 920,
        name: "Cuffie Atlas Air Titanio",
        descrizione: "Le Cuffie Atlas Air Titanio sono pensate per isolarti dal mondo e lasciarti solo con la tua musica. I driver dinamici da 45 mm offrono bassi profondi e alti cristallini, mentre la batteria assicura fino a 40 ore di ascolto, con ricarica rapida in pochi minuti. Inoltre, la cancellazione attiva del rumore riduce il brusio di uffici, treni e aerei. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 88.99
    },
    {
        id: 921,
        name: "Tappetino Vertex Evo Sabbia",
        descrizione: "Il Tappetino Vertex Evo Sabbia dà ordine e stile a tutta la postazione di lavoro. I bordi cuciti impediscono lo sfilacciamento nel tempo, mentre la base in gomma naturale antiscivolo lo mantiene fermo in ogni situazione. Inoltre, il formato esteso da 80x30 cm ospita comodamente mouse e tastiera. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 34.99
    },
    {
        id: 922,
        name: "Microfono Aquila Lite 3",
        descrizione: "Il Microfono Aquila Lite 3 dà alla tua voce la presenza e la chiarezza di uno studio di registrazione. Si collega in USB-C senza bisogno di interfacce audio esterne, mentre la capsula a condensatore cattura la voce con dettaglio e naturalezza. Inoltre, il pattern cardioide isola la voce dai rumori ambientali. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 81.49
    },
    {
        id: 923,
        name: "Mouse Pulsar Max 6",
        descrizione: "Il Mouse Pulsar Max 6 unisce una forma ergonomica studiata a lungo a un sensore di nuova generazione. La connessione wireless a bassa latenza garantisce una risposta istantanea, paragonabile a quella di un cavo, mentre i piedini in PTFE puro assicurano uno scorrimento silenzioso e privo di attrito. Inoltre, il sensore ottico da 16000 DPI traccia ogni spostamento senza scatti anche sulle superfici più difficili. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 118.99
    },
    {
        id: 924,
        name: "SSD Esterno Onice Air Grafite",
        descrizione: "L'SSD Esterno Onice Air Grafite è pensato per fotografi, videomaker e professionisti in movimento. Il software di backup automatico incluso rende semplice proteggere i file, mentre le velocità di lettura fino a 2000 MB/s azzerano i tempi di attesa. Inoltre, la certificazione IP65 lo difende da polvere e schizzi d'acqua. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 109.99
    },
    {
        id: 925,
        name: "Monitor Eco One 2",
        descrizione: "Il Monitor Eco One 2 ridefinisce la postazione con cornici sottilissime e un pannello di alto livello. Il pannello IPS da 34 pollici con risoluzione Full HD restituisce dettagli nitidissimi, mentre le cornici ultrasottili su tre lati lo rendono perfetto per configurazioni multi-monitor. Inoltre, il supporto HDR esalta contrasti e luminosità nei contenuti compatibili. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Ideale sia per l'ufficio sia per il setup di casa. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 130.99
    },
    {
        id: 926,
        name: "Mouse Lince Elite 6",
        descrizione: "Il Mouse Lince Elite 6 unisce una forma ergonomica studiata a lungo a un sensore di nuova generazione. I piedini in PTFE puro assicurano uno scorrimento silenzioso e privo di attrito, mentre la batteria ricaricabile via USB-C offre fino a 40 ore di autonomia con una singola carica. Inoltre, gli switch ottici sono certificati per oltre 80 milioni di clic. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 133.99
    },
    {
        id: 927,
        name: "Tastiera Cobalto Pro 2",
        descrizione: "La Tastiera Cobalto Pro 2 regala una sensazione di digitazione solida, precisa e appagante. Il telaio in alluminio spazzolato elimina flessioni e vibrazioni durante la digitazione, mentre lo strato di smorzamento interno in silicone attenua il rumore di battitura. Inoltre, la connessione tri-mode (Bluetooth, 2,4 GHz e cavo) si adatta a qualsiasi postazione. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 144.99
    },
    {
        id: 928,
        name: "Tastiera Nova Max Bianco Artico",
        descrizione: "La Tastiera Nova Max Bianco Artico porta sulla scrivania la qualità costruttiva delle tastiere da collezione. Lo strato di smorzamento interno in silicone attenua il rumore di battitura, mentre la retroilluminazione RGB per singolo tasto offre oltre 30 effetti configurabili. Inoltre, gli switch meccanici hot-swap si sostituiscono senza saldature, per personalizzare il feeling di ogni tasto. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 183.99
    },
    {
        id: 929,
        name: "Controller Falco Pro Grigio Siderale",
        descrizione: "Il Controller Falco Pro Grigio Siderale rende ogni sessione di gioco più coinvolgente e reattiva. La batteria garantisce fino a 60 ore di gioco senza interruzioni, mentre gli stick con sensori a effetto Hall eliminano il fastidioso drift nel tempo. Inoltre, la vibrazione a doppio motore restituisce ogni impatto e ogni esplosione. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 121.99
    },
    {
        id: 930,
        name: "Supporto Laptop Vertex One Titanio",
        descrizione: "Il Supporto Laptop Vertex One Titanio migliora la postura e il raffreddamento del tuo portatile. I gommini in silicone proteggono il portatile da graffi e scivolamenti, mentre l'altezza e l'inclinazione sono regolabili su più livelli. Inoltre, la struttura in alluminio sostiene portatili fino a 34 pollici. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 35.99
    },
    {
        id: 931,
        name: "Tappetino Andromeda Evo 6",
        descrizione: "Il Tappetino Andromeda Evo 6 è il dettaglio che fa la differenza tra un buon setup e uno eccellente. Si lava facilmente e torna come nuovo in pochi minuti, mentre lo spessore di 4 mm offre il giusto sostegno al polso. Inoltre, la superficie in microtessuto è ottimizzata per sensori ottici e laser. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 22.9
    },
    {
        id: 932,
        name: "Controller Orione One 8",
        descrizione: "Il Controller Orione One 8 è progettato per competere ai massimi livelli e vincere. L'impugnatura gommata antiscivolo resta salda anche nelle partite più intense, mentre la batteria garantisce fino a 70 ore di gioco senza interruzioni. Inoltre, le palette posteriori rimappabili permettono comandi rapidissimi. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 35.99
    },
    {
        id: 933,
        name: "Webcam Cobra Air 5",
        descrizione: "La Webcam Cobra Air 5 porta una qualità d'immagine professionale sulla tua scrivania. Il campo visivo di 95° inquadra comodamente anche più persone, mentre funziona in modalità plug-and-play senza driver con tutte le principali piattaforme di videochiamata. Inoltre, il copriobiettivo integrato garantisce privacy totale quando non la usi. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 25.9
    },
    {
        id: 934,
        name: "Casse Riflesso Ultra 9",
        descrizione: "Le Casse Riflesso Ultra 9 uniscono un design raffinato a una resa sonora di alto livello. La potenza complessiva di 100 W assicura un volume pieno senza distorsioni, mentre l'illuminazione RGB sincronizzata con la musica crea atmosfera. Inoltre, i tweeter in seta restituiscono alti morbidi e mai affaticanti. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 254.99
    },
    {
        id: 935,
        name: "Stampante Atlas Max 5",
        descrizione: "La Stampante Atlas Max 5 unisce costi di stampa contenuti a prestazioni di livello professionale. La modalità silenziosa consente di stampare anche di notte senza disturbare, mentre il display touch a colori rende intuitiva ogni operazione. Inoltre, il vassoio da 250 fogli limita le interruzioni per il caricamento della carta. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 400.99
    },
    {
        id: 936,
        name: "SSD Esterno Scoglio Air Rosso Corsa",
        descrizione: "L'SSD Esterno Scoglio Air Rosso Corsa è il modo più rapido per ampliare lo spazio di archiviazione. Le velocità di lettura fino a 2800 MB/s azzerano i tempi di attesa, mentre la scocca resistente a urti e cadute protegge i dati anche in viaggio. Inoltre, la certificazione IP65 lo difende da polvere e schizzi d'acqua. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Ideale sia per l'ufficio sia per il setup di casa. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 71.9
    },
    {
        id: 937,
        name: "Casse Spectra Air 4",
        descrizione: "Le Casse Spectra Air 4 sono la scelta ideale per musica, film e videogiochi. La potenza complessiva di 40 W assicura un volume pieno senza distorsioni, mentre il telecomando incluso consente di gestire il volume dal divano. Inoltre, i tweeter in seta restituiscono alti morbidi e mai affaticanti. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 90.99
    },
    {
        id: 938,
        name: "Router Zenith Core 9",
        descrizione: "Il Router Zenith Core 9 elimina le zone morte e i cali di segnale una volta per tutte. Il parental control integrato permette di gestire orari e contenuti per ogni membro della famiglia, mentre l'app di configurazione guida l'installazione in pochi minuti. Inoltre, la tecnologia mesh consente di estendere la copertura aggiungendo altri nodi. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 190.49
    },
    {
        id: 939,
        name: "Monitor Levante Evo 4",
        descrizione: "Il Monitor Levante Evo 4 apre una finestra nitida e brillante su tutto ciò che crei e guardi. La porta USB-C con alimentazione fino a 65 W collega e ricarica il portatile con un solo cavo, mentre la tecnologia flicker-free e il filtro per la luce blu riducono l'affaticamento visivo. Inoltre, il supporto HDR esalta contrasti e luminosità nei contenuti compatibili. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 488.49
    },
    {
        id: 940,
        name: "Tastiera Meridiano Prime 8",
        descrizione: "La Tastiera Meridiano Prime 8 è pensata per chi scrive molto e non vuole scendere a compromessi sul comfort. Gli switch meccanici hot-swap si sostituiscono senza saldature, per personalizzare il feeling di ogni tasto, mentre lo strato di smorzamento interno in silicone attenua il rumore di battitura. Inoltre, il poggiapolsi magnetico in similpelle sostiene i polsi nelle sessioni più lunghe. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 149.9
    },
    {
        id: 941,
        name: "Tastiera Meridiano Air Lavanda",
        descrizione: "La Tastiera Meridiano Air Lavanda è pensata per chi scrive molto e non vuole scendere a compromessi sul comfort. La connessione tri-mode (Bluetooth, 2,4 GHz e cavo) si adatta a qualsiasi postazione, mentre la batteria da 2000 mAh garantisce settimane di utilizzo senza ricarica. Inoltre, il layout italiano completo include tastierino numerico e tasti multimediali dedicati. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 30.99
    },
    {
        id: 942,
        name: "Controller Spectra Prime 1",
        descrizione: "Il Controller Spectra Prime 1 mette nelle tue mani il controllo totale di ogni partita. La batteria garantisce fino a 80 ore di gioco senza interruzioni, mentre le palette posteriori rimappabili permettono comandi rapidissimi. Inoltre, la vibrazione a doppio motore restituisce ogni impatto e ogni esplosione. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta ideale per lo smart working, lo studio e il tempo libero. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 156.99
    },
    {
        id: 943,
        name: "Router Vega Ultra 9",
        descrizione: "Il Router Vega Ultra 9 elimina le zone morte e i cali di segnale una volta per tutte. La tecnologia mesh consente di estendere la copertura aggiungendo altri nodi, mentre lo standard Wi-Fi 6E raggiunge velocità combinate fino a 5,4 Gbps. Inoltre, l'app di configurazione guida l'installazione in pochi minuti. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 366.9
    },
    {
        id: 944,
        name: "Casse Riflesso One Nero Notte",
        descrizione: "Le Casse Riflesso One Nero Notte uniscono un design raffinato a una resa sonora di alto livello. I woofer in fibra di carta garantiscono bassi caldi e ben controllati, mentre la potenza complessiva di 100 W assicura un volume pieno senza distorsioni. Inoltre, gli ingressi Bluetooth, ottico e AUX permettono di collegare qualsiasi sorgente. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 87.9
    },
    {
        id: 945,
        name: "Router Saetta One 6",
        descrizione: "Il Router Saetta One 6 elimina le zone morte e i cali di segnale una volta per tutte. Lo standard Wi-Fi 6E raggiunge velocità combinate fino a 5,4 Gbps, mentre la crittografia WPA3 e il firewall integrato proteggono la rete dalle intrusioni. Inoltre, l'app di configurazione guida l'installazione in pochi minuti. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Ideale sia per l'ufficio sia per il setup di casa. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 99.49
    },
    {
        id: 946,
        name: "Router Atlas One 2",
        descrizione: "Il Router Atlas One 2 elimina le zone morte e i cali di segnale una volta per tutte. La priorità QoS dà la precedenza a gaming e videochiamate, mentre la crittografia WPA3 e il firewall integrato proteggono la rete dalle intrusioni. Inoltre, la porta WAN da 2,5 Gbps sfrutta al massimo le connessioni in fibra ottica. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 79.99
    },
    {
        id: 947,
        name: "Controller Andromeda Plus 5",
        descrizione: "Il Controller Andromeda Plus 5 è progettato per competere ai massimi livelli e vincere. La batteria garantisce fino a 30 ore di gioco senza interruzioni, mentre gli stick con sensori a effetto Hall eliminano il fastidioso drift nel tempo. Inoltre, l'impugnatura gommata antiscivolo resta salda anche nelle partite più intense. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 88.49
    },
    {
        id: 948,
        name: "Monitor Lince Core Sabbia",
        descrizione: "Il Monitor Lince Core Sabbia apre una finestra nitida e brillante su tutto ciò che crei e guardi. La frequenza di aggiornamento di 240 Hz rende ogni movimento incredibilmente fluido, mentre la porta USB-C con alimentazione fino a 65 W collega e ricarica il portatile con un solo cavo. Inoltre, le cornici ultrasottili su tre lati lo rendono perfetto per configurazioni multi-monitor. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 390.99
    },
    {
        id: 949,
        name: "Hub USB Maestrale Air 3",
        descrizione: "L'Hub USB Maestrale Air 3 mette ordine tra cavi e periferiche in un attimo. La porta Ethernet gigabit assicura una connessione cablata stabile, mentre la scocca in alluminio dissipa il calore anche sotto carico. Inoltre, la ricarica passthrough fino a 100 W alimenta il portatile mentre lavori. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 36.99
    },
    {
        id: 950,
        name: "Stampante Prisma Ultra 3",
        descrizione: "La Stampante Prisma Ultra 3 semplifica la gestione dei documenti di tutta la famiglia o del piccolo ufficio. Il display touch a colori rende intuitiva ogni operazione, mentre il vassoio da 250 fogli limita le interruzioni per il caricamento della carta. Inoltre, la connessione Wi-Fi e l'app dedicata permettono di stampare direttamente dallo smartphone. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 489.9
    },
    {
        id: 951,
        name: "Mouse Eclipse Elite Bianco Artico",
        descrizione: "Il Mouse Eclipse Elite Bianco Artico unisce una forma ergonomica studiata a lungo a un sensore di nuova generazione. La connessione wireless a bassa latenza garantisce una risposta istantanea, paragonabile a quella di un cavo, mentre la modalità multi-dispositivo consente di passare da PC a tablet con un pulsante. Inoltre, i piedini in PTFE puro assicurano uno scorrimento silenzioso e privo di attrito. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 126.99
    },
    {
        id: 952,
        name: "Tastiera Meridiano Lite Blu Oceano",
        descrizione: "La Tastiera Meridiano Lite Blu Oceano regala una sensazione di digitazione solida, precisa e appagante. Il poggiapolsi magnetico in similpelle sostiene i polsi nelle sessioni più lunghe, mentre il telaio in alluminio spazzolato elimina flessioni e vibrazioni durante la digitazione. Inoltre, gli switch meccanici hot-swap si sostituiscono senza saldature, per personalizzare il feeling di ogni tasto. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 49.99
    },
    {
        id: 953,
        name: "Controller Ferro Lite 3",
        descrizione: "Il Controller Ferro Lite 3 rende ogni sessione di gioco più coinvolgente e reattiva. Le palette posteriori rimappabili permettono comandi rapidissimi, mentre i grilletti con corsa regolabile si adattano a sparatutto e giochi di guida. Inoltre, la batteria garantisce fino a 60 ore di gioco senza interruzioni. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 56.9
    },
    {
        id: 954,
        name: "Supporto Laptop Ferro One 4",
        descrizione: "Il Supporto Laptop Ferro One 4 migliora la postura e il raffreddamento del tuo portatile. Si ripiega in pochi secondi e sta comodamente in uno zaino, mentre l'altezza e l'inclinazione sono regolabili su più livelli. Inoltre, la struttura in alluminio sostiene portatili fino a 27 pollici. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 24.99
    },
    {
        id: 955,
        name: "Monitor Fenice Max Grafite",
        descrizione: "Il Monitor Fenice Max Grafite è progettato per chi pretende colori fedeli e una fluidità impeccabile. La frequenza di aggiornamento di 75 Hz rende ogni movimento incredibilmente fluido, mentre il supporto HDR esalta contrasti e luminosità nei contenuti compatibili. Inoltre, il supporto ergonomico regolabile in altezza, inclinazione e rotazione si adatta a ogni postura. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 754.49
    },
    {
        id: 956,
        name: "Monitor Spectra Air 5",
        descrizione: "Il Monitor Spectra Air 5 ridefinisce la postazione con cornici sottilissime e un pannello di alto livello. Il supporto HDR esalta contrasti e luminosità nei contenuti compatibili, mentre il supporto ergonomico regolabile in altezza, inclinazione e rotazione si adatta a ogni postura. Inoltre, la frequenza di aggiornamento di 240 Hz rende ogni movimento incredibilmente fluido. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 229.99
    },
    {
        id: 957,
        name: "SSD Esterno Stratos Studio Titanio",
        descrizione: "L'SSD Esterno Stratos Studio Titanio è pensato per fotografi, videomaker e professionisti in movimento. Il software di backup automatico incluso rende semplice proteggere i file, mentre la certificazione IP65 lo difende da polvere e schizzi d'acqua. Inoltre, la capacità di 2 TB offre spazio per migliaia di foto, video e progetti. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Ideale sia per l'ufficio sia per il setup di casa. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 198.99
    },
    {
        id: 958,
        name: "Supporto Laptop Plasma Elite 2",
        descrizione: "Il Supporto Laptop Plasma Elite 2 porta lo schermo del portatile all'altezza degli occhi, salvando schiena e collo. La base stabile non oscilla nemmeno durante la digitazione più intensa, mentre si ripiega in pochi secondi e sta comodamente in uno zaino. Inoltre, i gommini in silicone proteggono il portatile da graffi e scivolamenti. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta ideale per lo smart working, lo studio e il tempo libero. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 86.99
    },
    {
        id: 959,
        name: "Tappetino Eclipse Elite 8",
        descrizione: "Il Tappetino Eclipse Elite 8 protegge la scrivania e migliora lo scorrimento del mouse. Il trattamento idrorepellente protegge da schizzi e macchie, mentre si lava facilmente e torna come nuovo in pochi minuti. Inoltre, la superficie in microtessuto è ottimizzata per sensori ottici e laser. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 51.49
    },
    {
        id: 960,
        name: "Microfono Iride Prime Blu Oceano",
        descrizione: "Il Microfono Iride Prime Blu Oceano porta qualità broadcast in qualsiasi stanza della casa. Il pattern cardioide isola la voce dai rumori ambientali, mentre la capsula a condensatore cattura la voce con dettaglio e naturalezza. Inoltre, il supporto antivibrazione e il filtro anti-pop sono inclusi nella confezione. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 188.9
    },
    {
        id: 961,
        name: "Hub USB Eclipse Max Verde Salvia",
        descrizione: "L'Hub USB Eclipse Max Verde Salvia moltiplica le porte del tuo portatile con un solo, compatto accessorio. La ricarica passthrough fino a 100 W alimenta il portatile mentre lavori, mentre offre 7 porte, tra cui USB-A, USB-C, HDMI e lettore di schede SD. Inoltre, il trasferimento dati a 10 Gbps rende rapidissime le copie di file. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 118.49
    },
    {
        id: 962,
        name: "Controller Cristallo Air Grigio Siderale",
        descrizione: "Il Controller Cristallo Air Grigio Siderale è progettato per competere ai massimi livelli e vincere. La batteria garantisce fino a 30 ore di gioco senza interruzioni, mentre la vibrazione a doppio motore restituisce ogni impatto e ogni esplosione. Inoltre, i grilletti con corsa regolabile si adattano a sparatutto e giochi di guida. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 64.49
    },
    {
        id: 963,
        name: "Controller Titan Studio 4",
        descrizione: "Il Controller Titan Studio 4 unisce un'impugnatura comoda a una precisione chirurgica. I grilletti con corsa regolabile si adattano a sparatutto e giochi di guida, mentre le palette posteriori rimappabili permettono comandi rapidissimi. Inoltre, la vibrazione a doppio motore restituisce ogni impatto e ogni esplosione. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 135.9
    },
    {
        id: 964,
        name: "Monitor Maestrale Lite Bianco Artico",
        descrizione: "Il Monitor Maestrale Lite Bianco Artico apre una finestra nitida e brillante su tutto ciò che crei e guardi. La frequenza di aggiornamento di 75 Hz rende ogni movimento incredibilmente fluido, mentre la copertura del 99% dello spazio colore sRGB lo rende adatto a fotoritocco e grafica. Inoltre, la porta USB-C con alimentazione fino a 65 W collega e ricarica il portatile con un solo cavo. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 231.49
    },
    {
        id: 965,
        name: "Hub USB Sirio Air 3",
        descrizione: "L'Hub USB Sirio Air 3 trasforma qualsiasi portatile in una vera postazione desktop. La ricarica passthrough fino a 100 W alimenta il portatile mentre lavori, mentre il trasferimento dati a 10 Gbps rende rapidissime le copie di file. Inoltre, offre 11 porte, tra cui USB-A, USB-C, HDMI e lettore di schede SD. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 21.99
    },
    {
        id: 966,
        name: "Mouse Altair Elite Nero Notte",
        descrizione: "Il Mouse Altair Elite Nero Notte è il compagno ideale per lunghe sessioni di lavoro e di gioco. La modalità multi-dispositivo consente di passare da PC a tablet con un pulsante, mentre la rotella in metallo con scorrimento a frizione variabile rende rapidissima la navigazione di documenti lunghi. Inoltre, la connessione wireless a bassa latenza garantisce una risposta istantanea, paragonabile a quella di un cavo. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 117.49
    },
    {
        id: 967,
        name: "Tastiera Opale One 9",
        descrizione: "La Tastiera Opale One 9 è pensata per chi scrive molto e non vuole scendere a compromessi sul comfort. I keycap in PBT double-shot resistono all'usura e non diventano lucidi con il tempo, mentre la connessione tri-mode (Bluetooth, 2,4 GHz e cavo) si adatta a qualsiasi postazione. Inoltre, il poggiapolsi magnetico in similpelle sostiene i polsi nelle sessioni più lunghe. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 24.99
    },
    {
        id: 968,
        name: "Microfono Vertex Core 5",
        descrizione: "Il Microfono Vertex Core 5 porta qualità broadcast in qualsiasi stanza della casa. Il pulsante mute touch con indicatore LED evita imbarazzi durante le dirette, mentre il pattern cardioide isola la voce dai rumori ambientali. Inoltre, la capsula a condensatore cattura la voce con dettaglio e naturalezza. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 122.99
    },
    {
        id: 969,
        name: "Casse Tuono Pro 6",
        descrizione: "Le Casse Tuono Pro 6 trasformano la scrivania in un piccolo studio d'ascolto. L'illuminazione RGB sincronizzata con la musica crea atmosfera, mentre gli ingressi Bluetooth, ottico e AUX permettono di collegare qualsiasi sorgente. Inoltre, il telecomando incluso consente di gestire il volume dal divano. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 186.9
    },
    {
        id: 970,
        name: "Hub USB Riflesso Evo 8",
        descrizione: "L'Hub USB Riflesso Evo 8 è la soluzione definitiva alla carenza di porte dei laptop moderni. La scocca in alluminio dissipa il calore anche sotto carico, mentre è plug-and-play e compatibile con Windows, macOS e Linux. Inoltre, la ricarica passthrough fino a 100 W alimenta il portatile mentre lavori. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 67.49
    },
    {
        id: 971,
        name: "Webcam Graffio Studio 1",
        descrizione: "La Webcam Graffio Studio 1 è la soluzione semplice e immediata per chi lavora o studia da remoto. La correzione automatica della luce compensa ambienti troppo bui o controluce, mentre il sensore in risoluzione 4K cattura ogni dettaglio con colori naturali. Inoltre, i due microfoni stereo con riduzione del rumore catturano la voce in modo chiaro. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 113.49
    },
    {
        id: 972,
        name: "Supporto Laptop Aurora Air 9",
        descrizione: "Il Supporto Laptop Aurora Air 9 porta lo schermo del portatile all'altezza degli occhi, salvando schiena e collo. Si ripiega in pochi secondi e sta comodamente in uno zaino, mentre l'altezza e l'inclinazione sono regolabili su più livelli. Inoltre, il design aperto favorisce la circolazione dell'aria e riduce le temperature. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 29.99
    },
    {
        id: 973,
        name: "Mouse Phantom Plus Titanio",
        descrizione: "Il Mouse Phantom Plus Titanio nasce per chi vuole precisione assoluta a ogni movimento del polso. Il sensore ottico da 26000 DPI traccia ogni spostamento senza scatti anche sulle superfici più difficili, mentre la rotella in metallo con scorrimento a frizione variabile rende rapidissima la navigazione di documenti lunghi. Inoltre, la connessione wireless a bassa latenza garantisce una risposta istantanea, paragonabile a quella di un cavo. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 71.9
    },
    {
        id: 974,
        name: "Microfono Atlas Air 2",
        descrizione: "Il Microfono Atlas Air 2 è pensato per podcaster, streamer e musicisti che cercano un suono pulito. Il supporto antivibrazione e il filtro anti-pop sono inclusi nella confezione, mentre la capsula a condensatore cattura la voce con dettaglio e naturalezza. Inoltre, il pulsante mute touch con indicatore LED evita imbarazzi durante le dirette. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta eccellente per creativi, professionisti e gamer. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 71.49
    },
    {
        id: 975,
        name: "Controller Levante Core 6",
        descrizione: "Il Controller Levante Core 6 rende ogni sessione di gioco più coinvolgente e reattiva. Le palette posteriori rimappabili permettono comandi rapidissimi, mentre gli stick con sensori a effetto Hall eliminano il fastidioso drift nel tempo. Inoltre, l'impugnatura gommata antiscivolo resta salda anche nelle partite più intense. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 114.99
    },
    {
        id: 976,
        name: "Tappetino Opale Pro Verde Salvia",
        descrizione: "Il Tappetino Opale Pro Verde Salvia protegge la scrivania e migliora lo scorrimento del mouse. La base in gomma naturale antiscivolo lo mantiene fermo in ogni situazione, mentre la superficie in microtessuto è ottimizzata per sensori ottici e laser. Inoltre, il formato esteso da 90x40 cm ospita comodamente mouse e tastiera. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 35.9
    },
    {
        id: 977,
        name: "SSD Esterno Onice Core Grigio Siderale",
        descrizione: "L'SSD Esterno Onice Core Grigio Siderale è pensato per fotografi, videomaker e professionisti in movimento. La crittografia hardware AES a 256 bit protegge i dati sensibili, mentre il software di backup automatico incluso rende semplice proteggere i file. Inoltre, le velocità di lettura fino a 2800 MB/s azzerano i tempi di attesa. La serie Core bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 132.99
    },
    {
        id: 978,
        name: "Webcam Phantom Plus 6",
        descrizione: "La Webcam Phantom Plus 6 ti fa apparire al meglio in ogni videochiamata, riunione o diretta. La clip universale si fissa saldamente a monitor, portatili e treppiedi, mentre l'autofocus rapido mantiene il volto sempre a fuoco anche quando ti muovi. Inoltre, il sensore in risoluzione Full HD 1080p cattura ogni dettaglio con colori naturali. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 92.99
    },
    {
        id: 979,
        name: "Tappetino Meridiano Prime 8",
        descrizione: "Il Tappetino Meridiano Prime 8 dà ordine e stile a tutta la postazione di lavoro. I bordi cuciti impediscono lo sfilacciamento nel tempo, mentre il trattamento idrorepellente protegge da schizzi e macchie. Inoltre, si lava facilmente e torna come nuovo in pochi minuti. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 45.99
    },
    {
        id: 980,
        name: "Hub USB Prisma Max 9",
        descrizione: "L'Hub USB Prisma Max 9 è la soluzione definitiva alla carenza di porte dei laptop moderni. La ricarica passthrough fino a 100 W alimenta il portatile mentre lavori, mentre la scocca in alluminio dissipa il calore anche sotto carico. Inoltre, offre 9 porte, tra cui USB-A, USB-C, HDMI e lettore di schede SD. La serie Max è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 119.99
    },
    {
        id: 981,
        name: "Lampada Monitor Zefiro Prime Blu Oceano",
        descrizione: "La Lampada Monitor Zefiro Prime Blu Oceano illumina la scrivania in modo uniforme senza creare riflessi sullo schermo. L'alimentazione USB-C elimina la necessità di prese aggiuntive, mentre la retroilluminazione RGB posteriore crea un'atmosfera rilassante. Inoltre, la luminosità si adatta automaticamente alla luce dell'ambiente. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 81.99
    },
    {
        id: 982,
        name: "Router Helix Evo Verde Salvia",
        descrizione: "Il Router Helix Evo Verde Salvia elimina le zone morte e i cali di segnale una volta per tutte. Gestisce senza fatica oltre 64 dispositivi connessi contemporaneamente, mentre la tecnologia mesh consente di estendere la copertura aggiungendo altri nodi. Inoltre, la crittografia WPA3 e il firewall integrato proteggono la rete dalle intrusioni. La serie Evo bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Ideale sia per l'ufficio sia per il setup di casa. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 172.49
    },
    {
        id: 983,
        name: "Router Vulcano One 4",
        descrizione: "Il Router Vulcano One 4 è il cuore di una rete domestica moderna, sicura e senza rallentamenti. L'app di configurazione guida l'installazione in pochi minuti, mentre la crittografia WPA3 e il firewall integrato proteggono la rete dalle intrusioni. Inoltre, il parental control integrato permette di gestire orari e contenuti per ogni membro della famiglia. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 106.9
    },
    {
        id: 984,
        name: "Router Quasar Air Verde Salvia",
        descrizione: "Il Router Quasar Air Verde Salvia elimina le zone morte e i cali di segnale una volta per tutte. Il parental control integrato permette di gestire orari e contenuti per ogni membro della famiglia, mentre le antenne ad alto guadagno con beamforming indirizzano il segnale verso i dispositivi. Inoltre, la crittografia WPA3 e il firewall integrato proteggono la rete dalle intrusioni. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 128.9
    },
    {
        id: 985,
        name: "Stampante Prisma Studio Rosso Corsa",
        descrizione: "La Stampante Prisma Studio Rosso Corsa è la multifunzione pensata per chi vuole semplicità senza rinunciare alla qualità. Il display touch a colori rende intuitiva ogni operazione, mentre il vassoio da 250 fogli limita le interruzioni per il caricamento della carta. Inoltre, la stampa fronte/retro automatica riduce il consumo di carta. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 379.9
    },
    {
        id: 986,
        name: "Casse Eclipse One 8",
        descrizione: "Le Casse Eclipse One 8 uniscono un design raffinato a una resa sonora di alto livello. La potenza complessiva di 20 W assicura un volume pieno senza distorsioni, mentre le casse in legno MDF riducono le risonanze indesiderate. Inoltre, l'illuminazione RGB sincronizzata con la musica crea atmosfera. Nella versione One, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 96.49
    },
    {
        id: 987,
        name: "Mouse Cobalto Elite 1",
        descrizione: "Il Mouse Cobalto Elite 1 nasce per chi vuole precisione assoluta a ogni movimento del polso. Gli switch ottici sono certificati per oltre 70 milioni di clic, mentre i piedini in PTFE puro assicurano uno scorrimento silenzioso e privo di attrito. Inoltre, la connessione wireless a bassa latenza garantisce una risposta istantanea, paragonabile a quella di un cavo. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Una scelta eccellente per creativi, professionisti e gamer. Un acquisto pensato per durare, che si ripaga giorno dopo giorno.",
        price: 149.9
    },
    {
        id: 988,
        name: "Monitor Ferro Prime 5",
        descrizione: "Il Monitor Ferro Prime 5 apre una finestra nitida e brillante su tutto ciò che crei e guardi. Il pannello IPS da 32 pollici con risoluzione Full HD restituisce dettagli nitidissimi, mentre la tecnologia flicker-free e il filtro per la luce blu riducono l'affaticamento visivo. Inoltre, le cornici ultrasottili su tre lati lo rendono perfetto per configurazioni multi-monitor. Con la serie Prime si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 695.9
    },
    {
        id: 989,
        name: "Tastiera Quasar Ultra Bianco Artico",
        descrizione: "La Tastiera Quasar Ultra Bianco Artico regala una sensazione di digitazione solida, precisa e appagante. Gli switch meccanici hot-swap si sostituiscono senza saldature, per personalizzare il feeling di ogni tasto, mentre il layout italiano completo include tastierino numerico e tasti multimediali dedicati. Inoltre, il telaio in alluminio spazzolato elimina flessioni e vibrazioni durante la digitazione. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 196.99
    },
    {
        id: 990,
        name: "Mouse Nebula Ultra Rosso Corsa",
        descrizione: "Il Mouse Nebula Ultra Rosso Corsa è il compagno ideale per lunghe sessioni di lavoro e di gioco. La connessione wireless a bassa latenza garantisce una risposta istantanea, paragonabile a quella di un cavo, mentre il sensore ottico da 26000 DPI traccia ogni spostamento senza scatti anche sulle superfici più difficili. Inoltre, gli switch ottici sono certificati per oltre 70 milioni di clic. La serie Ultra è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 147.9
    },
    {
        id: 991,
        name: "Tastiera Zefiro Plus Lavanda",
        descrizione: "La Tastiera Zefiro Plus Lavanda è pensata per chi scrive molto e non vuole scendere a compromessi sul comfort. I keycap in PBT double-shot resistono all'usura e non diventano lucidi con il tempo, mentre il layout italiano completo include tastierino numerico e tasti multimediali dedicati. Inoltre, il telaio in alluminio spazzolato elimina flessioni e vibrazioni durante la digitazione. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 116.99
    },
    {
        id: 992,
        name: "Tappetino Cobalto Studio 5",
        descrizione: "Il Tappetino Cobalto Studio 5 dà ordine e stile a tutta la postazione di lavoro. Il trattamento idrorepellente protegge da schizzi e macchie, mentre il formato esteso da 90x40 cm ospita comodamente mouse e tastiera. Inoltre, lo spessore di 4 mm offre il giusto sostegno al polso. Con la serie Studio si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 35.99
    },
    {
        id: 993,
        name: "Stampante Nova Lite 9",
        descrizione: "La Stampante Nova Lite 9 porta in casa e in ufficio stampe nitide, veloci e affidabili. Il display touch a colori rende intuitiva ogni operazione, mentre lo scanner piano ad alta risoluzione digitalizza documenti e fotografie in pochi secondi. Inoltre, stampa fino a 15 pagine al minuto con testi nitidi e neri profondi. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Nella confezione trovi tutto il necessario per iniziare subito, con garanzia di 24 mesi.",
        price: 166.99
    },
    {
        id: 994,
        name: "Lampada Monitor Lince Pro 6",
        descrizione: "La Lampada Monitor Lince Pro 6 illumina la scrivania in modo uniforme senza creare riflessi sullo schermo. L'alimentazione USB-C elimina la necessità di prese aggiuntive, mentre la retroilluminazione RGB posteriore crea un'atmosfera rilassante. Inoltre, la temperatura colore è regolabile da 2700 K a 6500 K. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 79.99
    },
    {
        id: 995,
        name: "Tappetino Nimbus Elite 3",
        descrizione: "Il Tappetino Nimbus Elite 3 offre la superficie perfetta per movimenti precisi e controllati. I bordi cuciti impediscono lo sfilacciamento nel tempo, mentre si lava facilmente e torna come nuovo in pochi minuti. Inoltre, la base in gomma naturale antiscivolo lo mantiene fermo in ogni situazione. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Ideale sia per l'ufficio sia per il setup di casa. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 55.99
    },
    {
        id: 996,
        name: "Microfono Vetta Lite 9",
        descrizione: "Il Microfono Vetta Lite 9 porta qualità broadcast in qualsiasi stanza della casa. Il pulsante mute touch con indicatore LED evita imbarazzi durante le dirette, mentre si collega in USB-C senza bisogno di interfacce audio esterne. Inoltre, il pattern cardioide isola la voce dai rumori ambientali. Nella versione Lite, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Un alleato che ti accompagna dalla prima riunione del mattino all'ultima partita della sera. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 78.99
    },
    {
        id: 997,
        name: "Webcam Fulmine Plus 3",
        descrizione: "La Webcam Fulmine Plus 3 porta una qualità d'immagine professionale sulla tua scrivania. La clip universale si fissa saldamente a monitor, portatili e treppiedi, mentre il sensore in risoluzione 4K cattura ogni dettaglio con colori naturali. Inoltre, il copriobiettivo integrato garantisce privacy totale quando non la usi. La serie Plus bilancia perfettamente prestazioni, qualità costruttiva e prezzo. Una scelta eccellente per creativi, professionisti e gamer. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido e competente.",
        price: 94.9
    },
    {
        id: 998,
        name: "Router Aquila Pro 3",
        descrizione: "Il Router Aquila Pro 3 è il cuore di una rete domestica moderna, sicura e senza rallentamenti. La priorità QoS dà la precedenza a gaming e videochiamate, mentre lo standard Wi-Fi 7 raggiunge velocità combinate fino a 11 Gbps. Inoltre, il parental control integrato permette di gestire orari e contenuti per ogni membro della famiglia. Con la serie Pro si entra nella fascia professionale: materiali premium e cura in ogni dettaglio. Una scelta eccellente per creativi, professionisti e gamer. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 298.99
    },
    {
        id: 999,
        name: "Lampada Monitor Vortex Air 9",
        descrizione: "La Lampada Monitor Vortex Air 9 rende più piacevoli e meno faticose le sessioni di lavoro serali. La temperatura colore è regolabile da 2700 K a 6500 K, mentre la retroilluminazione RGB posteriore crea un'atmosfera rilassante. Inoltre, si aggancia a monitor piatti e curvi senza viti né adesivi. Nella versione Air, pensata per chi cerca l'essenziale fatto bene, offre il meglio al prezzo più accessibile. Una scelta ideale per lo smart working, lo studio e il tempo libero. Il rapporto qualità-prezzo è tra i più interessanti della sua categoria.",
        price: 47.49
    },
    {
        id: 1000,
        name: "Casse Andromeda Elite 1",
        descrizione: "Le Casse Andromeda Elite 1 trasformano la scrivania in un piccolo studio d'ascolto. Le casse in legno MDF riducono le risonanze indesiderate, mentre i tweeter in seta restituiscono alti morbidi e mai affaticanti. Inoltre, il telecomando incluso consente di gestire il volume dal divano. La serie Elite è il vertice della gamma, senza compromessi su materiali, prestazioni e finiture. Si integra con naturalezza in qualsiasi postazione, dalla più minimalista alla più scenografica. Una volta provata la differenza, sarà difficile tornare indietro.",
        price: 270.9
    }
];

export default db;
