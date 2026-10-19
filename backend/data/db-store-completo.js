const db = [
    {
        id: 1,
        name: "Router Polaris Max Bianco Artico",
        descrizione: "Con Router Polaris Max Bianco Artico la scrivania diventa più comoda, ordinata ed efficiente. La struttura robusta resiste all'uso quotidiano e si pulisce con un panno. La connessione wireless a bassa latenza garantisce una risposta immediata. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido.",
        price: 115.99,
        image: "https://picsum.photos/seed/1/600/400"
    },
    {
        id: 2,
        name: "Mouse Opale Plus 9",
        descrizione: "Mouse Opale Plus 9 è pensato per chi lavora e si diverte ogni giorno al computer. La struttura robusta resiste all'uso quotidiano e si pulisce con un panno. La connessione wireless a bassa latenza garantisce una risposta immediata. È compatibile con i principali sistemi operativi e con la maggior parte dei dispositivi.",
        price: 111.99,
        image: "https://picsum.photos/seed/2/600/400"
    },
    {
        id: 3,
        name: "Microfono Opale Core 7",
        descrizione: "Microfono Opale Core 7 unisce un design curato a prestazioni affidabili. I materiali scelti sono leggeri ma resistenti, per portarlo ovunque. Le finiture opache evitano riflessi e impronte anche dopo molte ore. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido.",
        price: 104.99,
        image: "https://picsum.photos/seed/3/600/400"
    },
    {
        id: 4,
        name: "Webcam Prisma Elite Sabbia",
        descrizione: "Webcam Prisma Elite Sabbia unisce un design curato a prestazioni affidabili. Le finiture opache evitano riflessi e impronte anche dopo molte ore. La connessione wireless a bassa latenza garantisce una risposta immediata. Una scelta ideale per lo smart working, lo studio e il tempo libero.",
        price: 31.99,
        image: "https://picsum.photos/seed/4/600/400"
    },
    {
        id: 5,
        name: "Stampante Glaciale Max 9",
        descrizione: "Con Stampante Glaciale Max 9 la scrivania diventa più comoda, ordinata ed efficiente. Le finiture opache evitano riflessi e impronte anche dopo molte ore. I materiali scelti sono leggeri ma resistenti, per portarlo ovunque. È compatibile con i principali sistemi operativi e con la maggior parte dei dispositivi.",
        price: 95.99,
        image: "https://picsum.photos/seed/5/600/400"
    },
    {
        id: 6,
        name: "Tappetino Pulsar Lite Verde Salvia",
        descrizione: "Il prodotto Tappetino Pulsar Lite Verde Salvia nasce per chi vuole qualità senza compromessi. La connessione wireless a bassa latenza garantisce una risposta immediata. Il consumo energetico ridotto allunga la durata e rispetta l'ambiente. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido.",
        price: 38.99,
        image: "https://picsum.photos/seed/6/600/400"
    },
    {
        id: 7,
        name: "SSD Glaciale Plus Nero",
        descrizione: "SSD Glaciale Plus Nero unisce un design curato a prestazioni affidabili. L'installazione è semplice: si collega e funziona, senza driver da cercare. I materiali scelti sono leggeri ma resistenti, per portarlo ovunque. È compatibile con i principali sistemi operativi e con la maggior parte dei dispositivi.",
        price: 179.99,
        image: "https://picsum.photos/seed/7/600/400"
    },
    {
        id: 8,
        name: "Tappetino Polaris Air 3",
        descrizione: "Tappetino Polaris Air 3 unisce un design curato a prestazioni affidabili. La struttura robusta resiste all'uso quotidiano e si pulisce con un panno. Le finiture opache evitano riflessi e impronte anche dopo molte ore. Una scelta ideale per lo smart working, lo studio e il tempo libero.",
        price: 16.99,
        image: "https://picsum.photos/seed/8/600/400"
    },
    {
        id: 9,
        name: "Supporto Laptop Ossidiana Elite Lavanda",
        descrizione: "Supporto Laptop Ossidiana Elite Lavanda unisce un design curato a prestazioni affidabili. Le finiture opache evitano riflessi e impronte anche dopo molte ore. La struttura robusta resiste all'uso quotidiano e si pulisce con un panno. È compatibile con i principali sistemi operativi e con la maggior parte dei dispositivi.",
        price: 80.99,
        image: "https://picsum.photos/seed/9/600/400"
    },
    {
        id: 10,
        name: "Cuffie Ossidiana Plus 1",
        descrizione: "Il prodotto Cuffie Ossidiana Plus 1 nasce per chi vuole qualità senza compromessi. Le finiture opache evitano riflessi e impronte anche dopo molte ore. I materiali scelti sono leggeri ma resistenti, per portarlo ovunque. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido.",
        price: 328.99,
        image: "https://picsum.photos/seed/10/600/400"
    },
    {
        id: 11,
        name: "Supporto Laptop Prisma Air 5",
        descrizione: "Con Supporto Laptop Prisma Air 5 la scrivania diventa più comoda, ordinata ed efficiente. I materiali scelti sono leggeri ma resistenti, per portarlo ovunque. Le finiture opache evitano riflessi e impronte anche dopo molte ore. Una scelta ideale per lo smart working, lo studio e il tempo libero.",
        price: 21.99,
        image: "https://picsum.photos/seed/11/600/400"
    },
    {
        id: 12,
        name: "Supporto Laptop Zefiro Ultra 5",
        descrizione: "Supporto Laptop Zefiro Ultra 5 unisce un design curato a prestazioni affidabili. La connessione wireless a bassa latenza garantisce una risposta immediata. I materiali scelti sono leggeri ma resistenti, per portarlo ovunque. Una scelta ideale per lo smart working, lo studio e il tempo libero.",
        price: 59.99,
        image: "https://picsum.photos/seed/12/600/400"
    },
    {
        id: 13,
        name: "Tappetino Opale Plus 3",
        descrizione: "Il prodotto Tappetino Opale Plus 3 nasce per chi vuole qualità senza compromessi. L'installazione è semplice: si collega e funziona, senza driver da cercare. La connessione wireless a bassa latenza garantisce una risposta immediata. Una scelta ideale per lo smart working, lo studio e il tempo libero.",
        price: 15.99,
        image: "https://picsum.photos/seed/13/600/400"
    },
    {
        id: 14,
        name: "SSD Polaris Air 9",
        descrizione: "SSD Polaris Air 9 unisce un design curato a prestazioni affidabili. Il consumo energetico ridotto allunga la durata e rispetta l'ambiente. Le finiture opache evitano riflessi e impronte anche dopo molte ore. È compatibile con i principali sistemi operativi e con la maggior parte dei dispositivi.",
        price: 195.99,
        image: "https://picsum.photos/seed/14/600/400"
    },
    {
        id: 15,
        name: "Stampante Vortex One 5",
        descrizione: "Il prodotto Stampante Vortex One 5 nasce per chi vuole qualità senza compromessi. La struttura robusta resiste all'uso quotidiano e si pulisce con un panno. Le finiture opache evitano riflessi e impronte anche dopo molte ore. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido.",
        price: 591.99,
        image: "https://picsum.photos/seed/15/600/400"
    },
    {
        id: 16,
        name: "Tastiera Pulsar Core 7",
        descrizione: "Tastiera Pulsar Core 7 è pensato per chi lavora e si diverte ogni giorno al computer. Le finiture opache evitano riflessi e impronte anche dopo molte ore. La struttura robusta resiste all'uso quotidiano e si pulisce con un panno. Una scelta ideale per lo smart working, lo studio e il tempo libero.",
        price: 141.99,
        image: "https://picsum.photos/seed/16/600/400"
    },
    {
        id: 17,
        name: "Microfono Zefiro Elite Nero",
        descrizione: "Microfono Zefiro Elite Nero unisce un design curato a prestazioni affidabili. L'installazione è semplice: si collega e funziona, senza driver da cercare. I materiali scelti sono leggeri ma resistenti, per portarlo ovunque. È compatibile con i principali sistemi operativi e con la maggior parte dei dispositivi.",
        price: 138.99,
        image: "https://picsum.photos/seed/17/600/400"
    },
    {
        id: 18,
        name: "Controller Glaciale Core 7",
        descrizione: "Il prodotto Controller Glaciale Core 7 nasce per chi vuole qualità senza compromessi. Il consumo energetico ridotto allunga la durata e rispetta l'ambiente. La struttura robusta resiste all'uso quotidiano e si pulisce con un panno. È compatibile con i principali sistemi operativi e con la maggior parte dei dispositivi.",
        price: 35.99,
        image: "https://picsum.photos/seed/18/600/400"
    },
    {
        id: 19,
        name: "Router Prisma Core 5",
        descrizione: "Con Router Prisma Core 5 la scrivania diventa più comoda, ordinata ed efficiente. La connessione wireless a bassa latenza garantisce una risposta immediata. I materiali scelti sono leggeri ma resistenti, per portarlo ovunque. Una scelta ideale per lo smart working, lo studio e il tempo libero.",
        price: 67.99,
        image: "https://picsum.photos/seed/19/600/400"
    },
    {
        id: 20,
        name: "Cuffie Solaris Lite Verde Salvia",
        descrizione: "Cuffie Solaris Lite Verde Salvia è pensato per chi lavora e si diverte ogni giorno al computer. I materiali scelti sono leggeri ma resistenti, per portarlo ovunque. La connessione wireless a bassa latenza garantisce una risposta immediata. È compatibile con i principali sistemi operativi e con la maggior parte dei dispositivi.",
        price: 346.99,
        image: "https://picsum.photos/seed/20/600/400"
    },
    {
        id: 21,
        name: "Microfono Polaris Lite Nero",
        descrizione: "Microfono Polaris Lite Nero unisce un design curato a prestazioni affidabili. Il consumo energetico ridotto allunga la durata e rispetta l'ambiente. L'installazione è semplice: si collega e funziona, senza driver da cercare. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido.",
        price: 81.99,
        image: "https://picsum.photos/seed/21/600/400"
    },
    {
        id: 22,
        name: "Tappetino Pulsar Air 7",
        descrizione: "Il prodotto Tappetino Pulsar Air 7 nasce per chi vuole qualità senza compromessi. La struttura robusta resiste all'uso quotidiano e si pulisce con un panno. La connessione wireless a bassa latenza garantisce una risposta immediata. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido.",
        price: 29.99,
        image: "https://picsum.photos/seed/22/600/400"
    },
    {
        id: 23,
        name: "Mouse Ossidiana Air 9",
        descrizione: "Mouse Ossidiana Air 9 è pensato per chi lavora e si diverte ogni giorno al computer. La struttura robusta resiste all'uso quotidiano e si pulisce con un panno. Il consumo energetico ridotto allunga la durata e rispetta l'ambiente. È compatibile con i principali sistemi operativi e con la maggior parte dei dispositivi.",
        price: 71.99,
        image: "https://picsum.photos/seed/23/600/400"
    },
    {
        id: 24,
        name: "Microfono Solaris One 9",
        descrizione: "Microfono Solaris One 9 unisce un design curato a prestazioni affidabili. La struttura robusta resiste all'uso quotidiano e si pulisce con un panno. I materiali scelti sono leggeri ma resistenti, per portarlo ovunque. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido.",
        price: 201.99,
        image: "https://picsum.photos/seed/24/600/400"
    },
    {
        id: 25,
        name: "Webcam Glaciale Max 3",
        descrizione: "Il prodotto Webcam Glaciale Max 3 nasce per chi vuole qualità senza compromessi. I materiali scelti sono leggeri ma resistenti, per portarlo ovunque. L'installazione è semplice: si collega e funziona, senza driver da cercare. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido.",
        price: 113.99,
        image: "https://picsum.photos/seed/25/600/400"
    },
    {
        id: 26,
        name: "Supporto Laptop Ossidiana Plus Sabbia",
        descrizione: "Supporto Laptop Ossidiana Plus Sabbia è pensato per chi lavora e si diverte ogni giorno al computer. Le finiture opache evitano riflessi e impronte anche dopo molte ore. Il consumo energetico ridotto allunga la durata e rispetta l'ambiente. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido.",
        price: 80.99,
        image: "https://picsum.photos/seed/26/600/400"
    },
    {
        id: 27,
        name: "Mouse Zefiro Plus 3",
        descrizione: "Con Mouse Zefiro Plus 3 la scrivania diventa più comoda, ordinata ed efficiente. La connessione wireless a bassa latenza garantisce una risposta immediata. Le finiture opache evitano riflessi e impronte anche dopo molte ore. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido.",
        price: 107.99,
        image: "https://picsum.photos/seed/27/600/400"
    },
    {
        id: 28,
        name: "Tappetino Zefiro Elite 7",
        descrizione: "Tappetino Zefiro Elite 7 è pensato per chi lavora e si diverte ogni giorno al computer. I materiali scelti sono leggeri ma resistenti, per portarlo ovunque. La struttura robusta resiste all'uso quotidiano e si pulisce con un panno. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido.",
        price: 29.99,
        image: "https://picsum.photos/seed/28/600/400"
    },
    {
        id: 29,
        name: "Hub USB Polaris Core Sabbia",
        descrizione: "Il prodotto Hub USB Polaris Core Sabbia nasce per chi vuole qualità senza compromessi. Le finiture opache evitano riflessi e impronte anche dopo molte ore. I materiali scelti sono leggeri ma resistenti, per portarlo ovunque. È compatibile con i principali sistemi operativi e con la maggior parte dei dispositivi.",
        price: 13.99,
        image: "https://picsum.photos/seed/29/600/400"
    },
    {
        id: 30,
        name: "Supporto Laptop Pulsar Ultra Nero",
        descrizione: "Supporto Laptop Pulsar Ultra Nero è pensato per chi lavora e si diverte ogni giorno al computer. L'installazione è semplice: si collega e funziona, senza driver da cercare. Le finiture opache evitano riflessi e impronte anche dopo molte ore. È compatibile con i principali sistemi operativi e con la maggior parte dei dispositivi.",
        price: 86.99,
        image: "https://picsum.photos/seed/30/600/400"
    },
    {
        id: 31,
        name: "Tappetino Solaris Plus Verde Salvia",
        descrizione: "Il prodotto Tappetino Solaris Plus Verde Salvia nasce per chi vuole qualità senza compromessi. Le finiture opache evitano riflessi e impronte anche dopo molte ore. La struttura robusta resiste all'uso quotidiano e si pulisce con un panno. È compatibile con i principali sistemi operativi e con la maggior parte dei dispositivi.",
        price: 19.99,
        image: "https://picsum.photos/seed/31/600/400"
    },
    {
        id: 32,
        name: "Tastiera Prisma Air Bianco Artico",
        descrizione: "Con Tastiera Prisma Air Bianco Artico la scrivania diventa più comoda, ordinata ed efficiente. La struttura robusta resiste all'uso quotidiano e si pulisce con un panno. Le finiture opache evitano riflessi e impronte anche dopo molte ore. È compatibile con i principali sistemi operativi e con la maggior parte dei dispositivi.",
        price: 141.99,
        image: "https://picsum.photos/seed/32/600/400"
    },
    {
        id: 33,
        name: "Monitor Pulsar Plus Nero",
        descrizione: "Monitor Pulsar Plus Nero è pensato per chi lavora e si diverte ogni giorno al computer. Le finiture opache evitano riflessi e impronte anche dopo molte ore. I materiali scelti sono leggeri ma resistenti, per portarlo ovunque. È compatibile con i principali sistemi operativi e con la maggior parte dei dispositivi.",
        price: 840.99,
        image: "https://picsum.photos/seed/33/600/400"
    },
    {
        id: 34,
        name: "Webcam Polaris One Nero",
        descrizione: "Webcam Polaris One Nero è pensato per chi lavora e si diverte ogni giorno al computer. La connessione wireless a bassa latenza garantisce una risposta immediata. L'installazione è semplice: si collega e funziona, senza driver da cercare. Una scelta ideale per lo smart working, lo studio e il tempo libero.",
        price: 39.99,
        image: "https://picsum.photos/seed/34/600/400"
    },
    {
        id: 35,
        name: "Microfono Ossidiana Elite 5",
        descrizione: "Microfono Ossidiana Elite 5 unisce un design curato a prestazioni affidabili. Le finiture opache evitano riflessi e impronte anche dopo molte ore. L'installazione è semplice: si collega e funziona, senza driver da cercare. Una scelta ideale per lo smart working, lo studio e il tempo libero.",
        price: 198.99,
        image: "https://picsum.photos/seed/35/600/400"
    },
    {
        id: 36,
        name: "Controller Pulsar Air 9",
        descrizione: "Controller Pulsar Air 9 è pensato per chi lavora e si diverte ogni giorno al computer. Le finiture opache evitano riflessi e impronte anche dopo molte ore. I materiali scelti sono leggeri ma resistenti, per portarlo ovunque. Una scelta ideale per lo smart working, lo studio e il tempo libero.",
        price: 147.99,
        image: "https://picsum.photos/seed/36/600/400"
    },
    {
        id: 37,
        name: "Casse Solaris Max Verde Salvia",
        descrizione: "Il prodotto Casse Solaris Max Verde Salvia nasce per chi vuole qualità senza compromessi. I materiali scelti sono leggeri ma resistenti, per portarlo ovunque. La struttura robusta resiste all'uso quotidiano e si pulisce con un panno. Una scelta ideale per lo smart working, lo studio e il tempo libero.",
        price: 86.99,
        image: "https://picsum.photos/seed/37/600/400"
    },
    {
        id: 38,
        name: "Lampada Zefiro Elite Bianco Artico",
        descrizione: "Il prodotto Lampada Zefiro Elite Bianco Artico nasce per chi vuole qualità senza compromessi. L'installazione è semplice: si collega e funziona, senza driver da cercare. Il consumo energetico ridotto allunga la durata e rispetta l'ambiente. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido.",
        price: 55.99,
        image: "https://picsum.photos/seed/38/600/400"
    },
    {
        id: 39,
        name: "Router Prisma One 5",
        descrizione: "Con Router Prisma One 5 la scrivania diventa più comoda, ordinata ed efficiente. L'installazione è semplice: si collega e funziona, senza driver da cercare. Il consumo energetico ridotto allunga la durata e rispetta l'ambiente. Una scelta ideale per lo smart working, lo studio e il tempo libero.",
        price: 150.99,
        image: "https://picsum.photos/seed/39/600/400"
    },
    {
        id: 40,
        name: "Hub USB Zefiro One 5",
        descrizione: "Con Hub USB Zefiro One 5 la scrivania diventa più comoda, ordinata ed efficiente. Le finiture opache evitano riflessi e impronte anche dopo molte ore. Il consumo energetico ridotto allunga la durata e rispetta l'ambiente. È compatibile con i principali sistemi operativi e con la maggior parte dei dispositivi.",
        price: 12.99,
        image: "https://picsum.photos/seed/40/600/400"
    },
    {
        id: 41,
        name: "Router Glaciale Ultra Sabbia",
        descrizione: "Router Glaciale Ultra Sabbia è pensato per chi lavora e si diverte ogni giorno al computer. La connessione wireless a bassa latenza garantisce una risposta immediata. Le finiture opache evitano riflessi e impronte anche dopo molte ore. È compatibile con i principali sistemi operativi e con la maggior parte dei dispositivi.",
        price: 123.99,
        image: "https://picsum.photos/seed/41/600/400"
    },
    {
        id: 42,
        name: "Monitor Ossidiana One Verde Salvia",
        descrizione: "Il prodotto Monitor Ossidiana One Verde Salvia nasce per chi vuole qualità senza compromessi. I materiali scelti sono leggeri ma resistenti, per portarlo ovunque. La connessione wireless a bassa latenza garantisce una risposta immediata. È compatibile con i principali sistemi operativi e con la maggior parte dei dispositivi.",
        price: 444.99,
        image: "https://picsum.photos/seed/42/600/400"
    },
    {
        id: 43,
        name: "Webcam Ossidiana Ultra 3",
        descrizione: "Webcam Ossidiana Ultra 3 unisce un design curato a prestazioni affidabili. Il consumo energetico ridotto allunga la durata e rispetta l'ambiente. La connessione wireless a bassa latenza garantisce una risposta immediata. Una scelta ideale per lo smart working, lo studio e il tempo libero.",
        price: 88.99,
        image: "https://picsum.photos/seed/43/600/400"
    },
    {
        id: 44,
        name: "Mouse Opale Core 3",
        descrizione: "Il prodotto Mouse Opale Core 3 nasce per chi vuole qualità senza compromessi. I materiali scelti sono leggeri ma resistenti, per portarlo ovunque. Le finiture opache evitano riflessi e impronte anche dopo molte ore. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido.",
        price: 113.99,
        image: "https://picsum.photos/seed/44/600/400"
    },
    {
        id: 45,
        name: "Mouse Polaris Air 3",
        descrizione: "Mouse Polaris Air 3 unisce un design curato a prestazioni affidabili. I materiali scelti sono leggeri ma resistenti, per portarlo ovunque. La struttura robusta resiste all'uso quotidiano e si pulisce con un panno. Una scelta ideale per lo smart working, lo studio e il tempo libero.",
        price: 16.99,
        image: "https://picsum.photos/seed/45/600/400"
    },
    {
        id: 46,
        name: "Router Glaciale Lite Bianco Artico",
        descrizione: "Router Glaciale Lite Bianco Artico è pensato per chi lavora e si diverte ogni giorno al computer. Il consumo energetico ridotto allunga la durata e rispetta l'ambiente. Le finiture opache evitano riflessi e impronte anche dopo molte ore. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido.",
        price: 148.99,
        image: "https://picsum.photos/seed/46/600/400"
    },
    {
        id: 47,
        name: "SSD Ossidiana One 1",
        descrizione: "SSD Ossidiana One 1 è pensato per chi lavora e si diverte ogni giorno al computer. L'installazione è semplice: si collega e funziona, senza driver da cercare. Le finiture opache evitano riflessi e impronte anche dopo molte ore. È compatibile con i principali sistemi operativi e con la maggior parte dei dispositivi.",
        price: 226.99,
        image: "https://picsum.photos/seed/47/600/400"
    },
    {
        id: 48,
        name: "Stampante Opale Ultra 9",
        descrizione: "Il prodotto Stampante Opale Ultra 9 nasce per chi vuole qualità senza compromessi. La struttura robusta resiste all'uso quotidiano e si pulisce con un panno. Il consumo energetico ridotto allunga la durata e rispetta l'ambiente. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido.",
        price: 190.99,
        image: "https://picsum.photos/seed/48/600/400"
    },
    {
        id: 49,
        name: "SSD Solaris Lite Blu Oceano",
        descrizione: "Con SSD Solaris Lite Blu Oceano la scrivania diventa più comoda, ordinata ed efficiente. La connessione wireless a bassa latenza garantisce una risposta immediata. Il consumo energetico ridotto allunga la durata e rispetta l'ambiente. È compatibile con i principali sistemi operativi e con la maggior parte dei dispositivi.",
        price: 204.99,
        image: "https://picsum.photos/seed/49/600/400"
    },
    {
        id: 50,
        name: "Webcam Zefiro Lite 5",
        descrizione: "Webcam Zefiro Lite 5 unisce un design curato a prestazioni affidabili. Il consumo energetico ridotto allunga la durata e rispetta l'ambiente. La connessione wireless a bassa latenza garantisce una risposta immediata. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido.",
        price: 77.99,
        image: "https://picsum.photos/seed/50/600/400"
    },
    {
        id: 51,
        name: "Webcam Opale Lite Verde Salvia",
        descrizione: "Webcam Opale Lite Verde Salvia è pensato per chi lavora e si diverte ogni giorno al computer. La connessione wireless a bassa latenza garantisce una risposta immediata. Il consumo energetico ridotto allunga la durata e rispetta l'ambiente. È compatibile con i principali sistemi operativi e con la maggior parte dei dispositivi.",
        price: 95.99,
        image: "https://picsum.photos/seed/51/600/400"
    },
    {
        id: 52,
        name: "Router Vortex Ultra Nero",
        descrizione: "Con Router Vortex Ultra Nero la scrivania diventa più comoda, ordinata ed efficiente. Il consumo energetico ridotto allunga la durata e rispetta l'ambiente. La connessione wireless a bassa latenza garantisce una risposta immediata. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido.",
        price: 193.99,
        image: "https://picsum.photos/seed/52/600/400"
    },
    {
        id: 53,
        name: "SSD Solaris Plus 3",
        descrizione: "Il prodotto SSD Solaris Plus 3 nasce per chi vuole qualità senza compromessi. L'installazione è semplice: si collega e funziona, senza driver da cercare. La connessione wireless a bassa latenza garantisce una risposta immediata. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido.",
        price: 48.99,
        image: "https://picsum.photos/seed/53/600/400"
    },
    {
        id: 54,
        name: "Router Pulsar Lite 3",
        descrizione: "Con Router Pulsar Lite 3 la scrivania diventa più comoda, ordinata ed efficiente. La struttura robusta resiste all'uso quotidiano e si pulisce con un panno. Le finiture opache evitano riflessi e impronte anche dopo molte ore. È compatibile con i principali sistemi operativi e con la maggior parte dei dispositivi.",
        price: 150.99,
        image: "https://picsum.photos/seed/54/600/400"
    },
    {
        id: 55,
        name: "Hub USB Aquila One Blu Oceano",
        descrizione: "Con Hub USB Aquila One Blu Oceano la scrivania diventa più comoda, ordinata ed efficiente. I materiali scelti sono leggeri ma resistenti, per portarlo ovunque. Il consumo energetico ridotto allunga la durata e rispetta l'ambiente. È compatibile con i principali sistemi operativi e con la maggior parte dei dispositivi.",
        price: 58.99,
        image: "https://picsum.photos/seed/55/600/400"
    },
    {
        id: 56,
        name: "Router Aquila One Blu Oceano",
        descrizione: "Router Aquila One Blu Oceano è pensato per chi lavora e si diverte ogni giorno al computer. Le finiture opache evitano riflessi e impronte anche dopo molte ore. I materiali scelti sono leggeri ma resistenti, per portarlo ovunque. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido.",
        price: 224.99,
        image: "https://picsum.photos/seed/56/600/400"
    },
    {
        id: 57,
        name: "Lampada Opale Plus 5",
        descrizione: "Lampada Opale Plus 5 è pensato per chi lavora e si diverte ogni giorno al computer. L'installazione è semplice: si collega e funziona, senza driver da cercare. Le finiture opache evitano riflessi e impronte anche dopo molte ore. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido.",
        price: 21.99,
        image: "https://picsum.photos/seed/57/600/400"
    },
    {
        id: 58,
        name: "Router Polaris Air 7",
        descrizione: "Con Router Polaris Air 7 la scrivania diventa più comoda, ordinata ed efficiente. Le finiture opache evitano riflessi e impronte anche dopo molte ore. L'installazione è semplice: si collega e funziona, senza driver da cercare. È compatibile con i principali sistemi operativi e con la maggior parte dei dispositivi.",
        price: 262.99,
        image: "https://picsum.photos/seed/58/600/400"
    },
    {
        id: 59,
        name: "Tappetino Vortex Elite Nero",
        descrizione: "Tappetino Vortex Elite Nero è pensato per chi lavora e si diverte ogni giorno al computer. Le finiture opache evitano riflessi e impronte anche dopo molte ore. I materiali scelti sono leggeri ma resistenti, per portarlo ovunque. Una scelta ideale per lo smart working, lo studio e il tempo libero.",
        price: 22.99,
        image: "https://picsum.photos/seed/59/600/400"
    },
    {
        id: 60,
        name: "Supporto Laptop Aquila Ultra Verde Salvia",
        descrizione: "Il prodotto Supporto Laptop Aquila Ultra Verde Salvia nasce per chi vuole qualità senza compromessi. Le finiture opache evitano riflessi e impronte anche dopo molte ore. I materiali scelti sono leggeri ma resistenti, per portarlo ovunque. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido.",
        price: 48.99,
        image: "https://picsum.photos/seed/60/600/400"
    },
    {
        id: 61,
        name: "Tappetino Vortex Elite 7",
        descrizione: "Tappetino Vortex Elite 7 unisce un design curato a prestazioni affidabili. Le finiture opache evitano riflessi e impronte anche dopo molte ore. L'installazione è semplice: si collega e funziona, senza driver da cercare. È compatibile con i principali sistemi operativi e con la maggior parte dei dispositivi.",
        price: 27.99,
        image: "https://picsum.photos/seed/61/600/400"
    },
    {
        id: 62,
        name: "Monitor Opale Plus 7",
        descrizione: "Monitor Opale Plus 7 unisce un design curato a prestazioni affidabili. Le finiture opache evitano riflessi e impronte anche dopo molte ore. La struttura robusta resiste all'uso quotidiano e si pulisce con un panno. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido.",
        price: 390.99,
        image: "https://picsum.photos/seed/62/600/400"
    },
    {
        id: 63,
        name: "Monitor Glaciale Lite 5",
        descrizione: "Monitor Glaciale Lite 5 è pensato per chi lavora e si diverte ogni giorno al computer. La struttura robusta resiste all'uso quotidiano e si pulisce con un panno. Il consumo energetico ridotto allunga la durata e rispetta l'ambiente. È compatibile con i principali sistemi operativi e con la maggior parte dei dispositivi.",
        price: 221.99,
        image: "https://picsum.photos/seed/63/600/400"
    },
    {
        id: 64,
        name: "Cuffie Vortex Max 1",
        descrizione: "Cuffie Vortex Max 1 è pensato per chi lavora e si diverte ogni giorno al computer. Le finiture opache evitano riflessi e impronte anche dopo molte ore. I materiali scelti sono leggeri ma resistenti, per portarlo ovunque. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido.",
        price: 275.99,
        image: "https://picsum.photos/seed/64/600/400"
    },
    {
        id: 65,
        name: "Tappetino Pulsar Core Lavanda",
        descrizione: "Tappetino Pulsar Core Lavanda è pensato per chi lavora e si diverte ogni giorno al computer. L'installazione è semplice: si collega e funziona, senza driver da cercare. La connessione wireless a bassa latenza garantisce una risposta immediata. È compatibile con i principali sistemi operativi e con la maggior parte dei dispositivi.",
        price: 20.99,
        image: "https://picsum.photos/seed/65/600/400"
    },
    {
        id: 66,
        name: "Microfono Glaciale Elite 7",
        descrizione: "Microfono Glaciale Elite 7 unisce un design curato a prestazioni affidabili. L'installazione è semplice: si collega e funziona, senza driver da cercare. La struttura robusta resiste all'uso quotidiano e si pulisce con un panno. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido.",
        price: 102.99,
        image: "https://picsum.photos/seed/66/600/400"
    },
    {
        id: 67,
        name: "Cuffie Vortex Elite Sabbia",
        descrizione: "Il prodotto Cuffie Vortex Elite Sabbia nasce per chi vuole qualità senza compromessi. La connessione wireless a bassa latenza garantisce una risposta immediata. La struttura robusta resiste all'uso quotidiano e si pulisce con un panno. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido.",
        price: 68.99,
        image: "https://picsum.photos/seed/67/600/400"
    },
    {
        id: 68,
        name: "Tastiera Aquila Air Lavanda",
        descrizione: "Tastiera Aquila Air Lavanda è pensato per chi lavora e si diverte ogni giorno al computer. Il consumo energetico ridotto allunga la durata e rispetta l'ambiente. I materiali scelti sono leggeri ma resistenti, per portarlo ovunque. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido.",
        price: 211.99,
        image: "https://picsum.photos/seed/68/600/400"
    },
    {
        id: 69,
        name: "Controller Polaris Plus 5",
        descrizione: "Con Controller Polaris Plus 5 la scrivania diventa più comoda, ordinata ed efficiente. La struttura robusta resiste all'uso quotidiano e si pulisce con un panno. Il consumo energetico ridotto allunga la durata e rispetta l'ambiente. È compatibile con i principali sistemi operativi e con la maggior parte dei dispositivi.",
        price: 175.99,
        image: "https://picsum.photos/seed/69/600/400"
    },
    {
        id: 70,
        name: "Controller Ossidiana Max Nero",
        descrizione: "Con Controller Ossidiana Max Nero la scrivania diventa più comoda, ordinata ed efficiente. Il consumo energetico ridotto allunga la durata e rispetta l'ambiente. I materiali scelti sono leggeri ma resistenti, per portarlo ovunque. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido.",
        price: 116.99,
        image: "https://picsum.photos/seed/70/600/400"
    },
    {
        id: 71,
        name: "Router Aquila Lite 1",
        descrizione: "Router Aquila Lite 1 unisce un design curato a prestazioni affidabili. La struttura robusta resiste all'uso quotidiano e si pulisce con un panno. Il consumo energetico ridotto allunga la durata e rispetta l'ambiente. Una scelta ideale per lo smart working, lo studio e il tempo libero.",
        price: 209.99,
        image: "https://picsum.photos/seed/71/600/400"
    },
    {
        id: 72,
        name: "Hub USB Zefiro Elite Nero",
        descrizione: "Hub USB Zefiro Elite Nero unisce un design curato a prestazioni affidabili. Il consumo energetico ridotto allunga la durata e rispetta l'ambiente. La connessione wireless a bassa latenza garantisce una risposta immediata. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido.",
        price: 30.99,
        image: "https://picsum.photos/seed/72/600/400"
    },
    {
        id: 73,
        name: "Tappetino Solaris Core Sabbia",
        descrizione: "Tappetino Solaris Core Sabbia unisce un design curato a prestazioni affidabili. La struttura robusta resiste all'uso quotidiano e si pulisce con un panno. Il consumo energetico ridotto allunga la durata e rispetta l'ambiente. Una scelta ideale per lo smart working, lo studio e il tempo libero.",
        price: 55.99,
        image: "https://picsum.photos/seed/73/600/400"
    },
    {
        id: 74,
        name: "Tastiera Polaris Ultra 3",
        descrizione: "Il prodotto Tastiera Polaris Ultra 3 nasce per chi vuole qualità senza compromessi. I materiali scelti sono leggeri ma resistenti, per portarlo ovunque. La connessione wireless a bassa latenza garantisce una risposta immediata. Una scelta ideale per lo smart working, lo studio e il tempo libero.",
        price: 66.99,
        image: "https://picsum.photos/seed/74/600/400"
    },
    {
        id: 75,
        name: "Microfono Ossidiana Air 9",
        descrizione: "Il prodotto Microfono Ossidiana Air 9 nasce per chi vuole qualità senza compromessi. La connessione wireless a bassa latenza garantisce una risposta immediata. Il consumo energetico ridotto allunga la durata e rispetta l'ambiente. È compatibile con i principali sistemi operativi e con la maggior parte dei dispositivi.",
        price: 187.99,
        image: "https://picsum.photos/seed/75/600/400"
    },
    {
        id: 76,
        name: "Monitor Aquila Ultra 5",
        descrizione: "Il prodotto Monitor Aquila Ultra 5 nasce per chi vuole qualità senza compromessi. I materiali scelti sono leggeri ma resistenti, per portarlo ovunque. La struttura robusta resiste all'uso quotidiano e si pulisce con un panno. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido.",
        price: 175.99,
        image: "https://picsum.photos/seed/76/600/400"
    },
    {
        id: 77,
        name: "Stampante Glaciale Elite Nero",
        descrizione: "Stampante Glaciale Elite Nero è pensato per chi lavora e si diverte ogni giorno al computer. Le finiture opache evitano riflessi e impronte anche dopo molte ore. La connessione wireless a bassa latenza garantisce una risposta immediata. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido.",
        price: 441.99,
        image: "https://picsum.photos/seed/77/600/400"
    },
    {
        id: 78,
        name: "Router Vortex Plus 5",
        descrizione: "Il prodotto Router Vortex Plus 5 nasce per chi vuole qualità senza compromessi. La struttura robusta resiste all'uso quotidiano e si pulisce con un panno. Le finiture opache evitano riflessi e impronte anche dopo molte ore. È compatibile con i principali sistemi operativi e con la maggior parte dei dispositivi.",
        price: 176.99,
        image: "https://picsum.photos/seed/78/600/400"
    },
    {
        id: 79,
        name: "Hub USB Zefiro Lite Blu Oceano",
        descrizione: "Hub USB Zefiro Lite Blu Oceano unisce un design curato a prestazioni affidabili. La struttura robusta resiste all'uso quotidiano e si pulisce con un panno. La connessione wireless a bassa latenza garantisce una risposta immediata. È compatibile con i principali sistemi operativi e con la maggior parte dei dispositivi.",
        price: 20.99,
        image: "https://picsum.photos/seed/79/600/400"
    },
    {
        id: 80,
        name: "Tappetino Opale One 5",
        descrizione: "Con Tappetino Opale One 5 la scrivania diventa più comoda, ordinata ed efficiente. I materiali scelti sono leggeri ma resistenti, per portarlo ovunque. La connessione wireless a bassa latenza garantisce una risposta immediata. È compatibile con i principali sistemi operativi e con la maggior parte dei dispositivi.",
        price: 35.99,
        image: "https://picsum.photos/seed/80/600/400"
    },
    {
        id: 81,
        name: "SSD Ossidiana Elite Blu Oceano",
        descrizione: "Il prodotto SSD Ossidiana Elite Blu Oceano nasce per chi vuole qualità senza compromessi. Le finiture opache evitano riflessi e impronte anche dopo molte ore. La struttura robusta resiste all'uso quotidiano e si pulisce con un panno. Una scelta ideale per lo smart working, lo studio e il tempo libero.",
        price: 77.99,
        image: "https://picsum.photos/seed/81/600/400"
    },
    {
        id: 82,
        name: "Stampante Glaciale Lite 9",
        descrizione: "Con Stampante Glaciale Lite 9 la scrivania diventa più comoda, ordinata ed efficiente. L'installazione è semplice: si collega e funziona, senza driver da cercare. La connessione wireless a bassa latenza garantisce una risposta immediata. È compatibile con i principali sistemi operativi e con la maggior parte dei dispositivi.",
        price: 93.99,
        image: "https://picsum.photos/seed/82/600/400"
    },
    {
        id: 83,
        name: "Lampada Zefiro One 3",
        descrizione: "Con Lampada Zefiro One 3 la scrivania diventa più comoda, ordinata ed efficiente. I materiali scelti sono leggeri ma resistenti, per portarlo ovunque. Le finiture opache evitano riflessi e impronte anche dopo molte ore. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido.",
        price: 91.99,
        image: "https://picsum.photos/seed/83/600/400"
    },
    {
        id: 84,
        name: "Supporto Laptop Solaris Max Bianco Artico",
        descrizione: "Il prodotto Supporto Laptop Solaris Max Bianco Artico nasce per chi vuole qualità senza compromessi. I materiali scelti sono leggeri ma resistenti, per portarlo ovunque. La struttura robusta resiste all'uso quotidiano e si pulisce con un panno. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido.",
        price: 88.99,
        image: "https://picsum.photos/seed/84/600/400"
    },
    {
        id: 85,
        name: "Microfono Vortex Ultra Lavanda",
        descrizione: "Microfono Vortex Ultra Lavanda è pensato per chi lavora e si diverte ogni giorno al computer. La connessione wireless a bassa latenza garantisce una risposta immediata. Il consumo energetico ridotto allunga la durata e rispetta l'ambiente. Una scelta ideale per lo smart working, lo studio e il tempo libero.",
        price: 139.99,
        image: "https://picsum.photos/seed/85/600/400"
    },
    {
        id: 86,
        name: "SSD Prisma Elite 9",
        descrizione: "SSD Prisma Elite 9 è pensato per chi lavora e si diverte ogni giorno al computer. La connessione wireless a bassa latenza garantisce una risposta immediata. Le finiture opache evitano riflessi e impronte anche dopo molte ore. È compatibile con i principali sistemi operativi e con la maggior parte dei dispositivi.",
        price: 118.99,
        image: "https://picsum.photos/seed/86/600/400"
    },
    {
        id: 87,
        name: "Supporto Laptop Opale One 1",
        descrizione: "Il prodotto Supporto Laptop Opale One 1 nasce per chi vuole qualità senza compromessi. I materiali scelti sono leggeri ma resistenti, per portarlo ovunque. La struttura robusta resiste all'uso quotidiano e si pulisce con un panno. È compatibile con i principali sistemi operativi e con la maggior parte dei dispositivi.",
        price: 73.99,
        image: "https://picsum.photos/seed/87/600/400"
    },
    {
        id: 88,
        name: "Controller Ossidiana Air Sabbia",
        descrizione: "Il prodotto Controller Ossidiana Air Sabbia nasce per chi vuole qualità senza compromessi. L'installazione è semplice: si collega e funziona, senza driver da cercare. Le finiture opache evitano riflessi e impronte anche dopo molte ore. Una scelta ideale per lo smart working, lo studio e il tempo libero.",
        price: 155.99,
        image: "https://picsum.photos/seed/88/600/400"
    },
    {
        id: 89,
        name: "Router Opale Plus 9",
        descrizione: "Con Router Opale Plus 9 la scrivania diventa più comoda, ordinata ed efficiente. L'installazione è semplice: si collega e funziona, senza driver da cercare. La struttura robusta resiste all'uso quotidiano e si pulisce con un panno. Una scelta ideale per lo smart working, lo studio e il tempo libero.",
        price: 172.99,
        image: "https://picsum.photos/seed/89/600/400"
    },
    {
        id: 90,
        name: "Mouse Prisma Plus Bianco Artico",
        descrizione: "Mouse Prisma Plus Bianco Artico è pensato per chi lavora e si diverte ogni giorno al computer. Il consumo energetico ridotto allunga la durata e rispetta l'ambiente. L'installazione è semplice: si collega e funziona, senza driver da cercare. È compatibile con i principali sistemi operativi e con la maggior parte dei dispositivi.",
        price: 106.99,
        image: "https://picsum.photos/seed/90/600/400"
    },
    {
        id: 91,
        name: "Casse Solaris One Lavanda",
        descrizione: "Casse Solaris One Lavanda unisce un design curato a prestazioni affidabili. La connessione wireless a bassa latenza garantisce una risposta immediata. La struttura robusta resiste all'uso quotidiano e si pulisce con un panno. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido.",
        price: 281.99,
        image: "https://picsum.photos/seed/91/600/400"
    },
    {
        id: 92,
        name: "Cuffie Vortex Elite Lavanda",
        descrizione: "Cuffie Vortex Elite Lavanda è pensato per chi lavora e si diverte ogni giorno al computer. L'installazione è semplice: si collega e funziona, senza driver da cercare. I materiali scelti sono leggeri ma resistenti, per portarlo ovunque. È compatibile con i principali sistemi operativi e con la maggior parte dei dispositivi.",
        price: 340.99,
        image: "https://picsum.photos/seed/92/600/400"
    },
    {
        id: 93,
        name: "Lampada Zefiro Plus Blu Oceano",
        descrizione: "Lampada Zefiro Plus Blu Oceano è pensato per chi lavora e si diverte ogni giorno al computer. L'installazione è semplice: si collega e funziona, senza driver da cercare. Il consumo energetico ridotto allunga la durata e rispetta l'ambiente. Una scelta ideale per lo smart working, lo studio e il tempo libero.",
        price: 80.99,
        image: "https://picsum.photos/seed/93/600/400"
    },
    {
        id: 94,
        name: "Tastiera Opale Plus Bianco Artico",
        descrizione: "Tastiera Opale Plus Bianco Artico è pensato per chi lavora e si diverte ogni giorno al computer. L'installazione è semplice: si collega e funziona, senza driver da cercare. I materiali scelti sono leggeri ma resistenti, per portarlo ovunque. È compatibile con i principali sistemi operativi e con la maggior parte dei dispositivi.",
        price: 97.99,
        image: "https://picsum.photos/seed/94/600/400"
    },
    {
        id: 95,
        name: "SSD Pulsar Core Sabbia",
        descrizione: "Con SSD Pulsar Core Sabbia la scrivania diventa più comoda, ordinata ed efficiente. L'installazione è semplice: si collega e funziona, senza driver da cercare. La connessione wireless a bassa latenza garantisce una risposta immediata. È compatibile con i principali sistemi operativi e con la maggior parte dei dispositivi.",
        price: 128.99,
        image: "https://picsum.photos/seed/95/600/400"
    },
    {
        id: 96,
        name: "SSD Opale Ultra 7",
        descrizione: "SSD Opale Ultra 7 unisce un design curato a prestazioni affidabili. I materiali scelti sono leggeri ma resistenti, per portarlo ovunque. L'installazione è semplice: si collega e funziona, senza driver da cercare. È compatibile con i principali sistemi operativi e con la maggior parte dei dispositivi.",
        price: 104.99,
        image: "https://picsum.photos/seed/96/600/400"
    },
    {
        id: 97,
        name: "Stampante Glaciale Ultra 5",
        descrizione: "Con Stampante Glaciale Ultra 5 la scrivania diventa più comoda, ordinata ed efficiente. Le finiture opache evitano riflessi e impronte anche dopo molte ore. L'installazione è semplice: si collega e funziona, senza driver da cercare. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido.",
        price: 581.99,
        image: "https://picsum.photos/seed/97/600/400"
    },
    {
        id: 98,
        name: "Supporto Laptop Zefiro Air 7",
        descrizione: "Il prodotto Supporto Laptop Zefiro Air 7 nasce per chi vuole qualità senza compromessi. L'installazione è semplice: si collega e funziona, senza driver da cercare. La struttura robusta resiste all'uso quotidiano e si pulisce con un panno. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido.",
        price: 23.99,
        image: "https://picsum.photos/seed/98/600/400"
    },
    {
        id: 99,
        name: "Microfono Vortex Lite Sabbia",
        descrizione: "Microfono Vortex Lite Sabbia è pensato per chi lavora e si diverte ogni giorno al computer. La connessione wireless a bassa latenza garantisce una risposta immediata. La struttura robusta resiste all'uso quotidiano e si pulisce con un panno. Il prodotto è coperto da 2 anni di garanzia e da un servizio di assistenza rapido.",
        price: 76.99,
        image: "https://picsum.photos/seed/99/600/400"
    },
    {
        id: 100,
        name: "Tappetino Solaris Ultra Lavanda",
        descrizione: "Tappetino Solaris Ultra Lavanda è pensato per chi lavora e si diverte ogni giorno al computer. Le finiture opache evitano riflessi e impronte anche dopo molte ore. Il consumo energetico ridotto allunga la durata e rispetta l'ambiente. È compatibile con i principali sistemi operativi e con la maggior parte dei dispositivi.",
        price: 9.99,
        image: "https://picsum.photos/seed/100/600/400"
    }
];

export default db;
