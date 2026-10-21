import { client } from "../prisma-client.js";

export default async function checkProductBody(req, res, next) {
    const { name, descrizione, price, image, categoryIds = [] } = req.body ?? {}; // Il JSON contenuto nel corpo del messaggio inviato dal Client

    if (!Array.isArray(categoryIds)) {
        return res.status(400).json({
            success: false,
            message: 'categoryIds deve essere un array',
            data: null
        });
    }

    let uniqueIds = [];
    for (let i = 0; i < categoryIds.length; i++) {
        const id = categoryIds[i];

        if (!Number.isInteger(id) || id <= 0) {
            return res.status(400).json({
                success: false,
                message: 'categoryIds deve contenere tutti numeri, maggiori di 0',
                data: null
            });
        }

        if (!uniqueIds.includes(id)) {
            uniqueIds.push(id);
        }
    }


    const categoryFound = await client.category.count({
        where: {
            id: {
                in: uniqueIds
            }
        }
    });

    if (categoryFound !== uniqueIds.length) {
        return res.status(400).json({
            success: false,
            message: 'Una o più categorie non esistono',
            data: null
        });
    }


    // Prima si controlla il body (400), poi si scrive nel database
    if (typeof name !== 'string' || name.trim() === '') {
        return res.status(400).json({
            success: false,
            message: 'name è obbligatorio',
            data: null
        });
    }

    if (descrizione !== undefined && typeof descrizione !== 'string') {
        return res.status(400).json({
            success: false,
            message: 'descrizione deve essere una stringa',
            data: null
        });
    }

    // image è opzionale: se manca resta undefined e il PUT non tocca l'immagine già salvata.
    // Stringa vuota o null = nessuna immagine; accettiamo URL http(s) o immagini locali /imgs/<id>.jpg.
    let sanitizedImage = undefined;

    if (image !== undefined) {
        if (image !== null && typeof image !== 'string') {
            return res.status(400).json({
                success: false,
                message: 'image deve essere una stringa',
                data: null
            });
        }

        sanitizedImage = (image ?? '').trim() || null;

        if (sanitizedImage !== null) {
            if (sanitizedImage.length > 500) {
                return res.status(400).json({
                    success: false,
                    message: 'image deve essere lunga al massimo 500 caratteri',
                    data: null
                });
            }

            const isLocalImage = /^\/imgs\/\d+\.jpg$/.test(sanitizedImage);
            // new URL lancia un errore se la stringa non è un URL valido
            let imageUrl;
            try {
                imageUrl = new URL(sanitizedImage);
            } catch {
                imageUrl = null;
            }

            if (!isLocalImage && (imageUrl === null || (imageUrl.protocol !== 'http:' && imageUrl.protocol !== 'https:'))) {
                return res.status(400).json({
                    success: false,
                    message: 'image deve essere un URL http(s) o un percorso /imgs/<id>.jpg',
                    data: null
                });
            }
        }
    }

    // Number('abc') è NaN e NaN <= 0 è false: serve il controllo separato con Number.isNaN()
    // Number.isFinite esclude anche Infinity; il tetto evita l'overflow della colonna DECIMAL(10, 2)
    if (price === undefined || price === null || price === '' || !Number.isFinite(Number(price)) || Number(price) <= 0 || Number(price) >= 100000000) {
        return res.status(400).json({
            success: false,
            message: 'price è obbligatorio e deve essere un numero maggiore di 0 e minore di 100000000',
            data: null
        });
    }

    req.sanitizedData = {
        name: name.trim(),
        descrizione: (descrizione ?? '').trim(), // descrizione è opzionale
        price: Number(price),
        image: sanitizedImage,
        categoryIds: uniqueIds,
    };

    next();
}
