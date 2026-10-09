export default function checkProductBody(req, res, next) {
    const { name, descrizione, price } = req.body ?? {}; // Il JSON contenuto nel corpo del messaggio inviato dal Client

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

    // Number('abc') è NaN e NaN <= 0 è false: serve il controllo separato con Number.isNaN()
    if (price === undefined || price === null || price === '' || Number.isNaN(Number(price)) || Number(price) <= 0) {
        return res.status(400).json({
            success: false,
            message: 'price è obbligatorio e deve essere un numero maggiore di 0',
            data: null
        });
    }

    req.sanitizedData = {
        name: name.trim(),
        descrizione: descrizione.trim(),
        price: Number(price),
    };

    next();
}