export default function checkProductId(req, res, next) {
    const id = Number(req.params.id);

    // Gli id sono interi positivi (autoincrement): scarta 0, '', 1.5, 'abc'
    if (!Number.isInteger(id) || id <= 0) {
        return res.status(400).json({
            success: false,
            message: `parametro id "${req.params.id}" errato`,
            data: null
        });
    }

    next();
}