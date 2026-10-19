import { useState } from "react";

const emptyForm = {
    name: "",
    descrizione: "",
    price: "",
    image: "",
    categoryIds: [],
}

// Inversion of Control: il form non sa cosa succede all'invio, chiama onSubmit(data)
// (una funzione che arriva da fuori e restituisce una Promise).
export default function ProductForm({ onSubmit, initialValues, onCancel, categories }) {
    function handleChange(event) {
        const target = event.target; // l'elemento che ha scatenato l'evento
        const targetName = target.name;
        const valueNew = target.value; // Sempre una stringa
        setForm({
            ...form,
            [targetName]: valueNew
        });
    }

    // Aggiunge o toglie l'id dall'array senza modificare quello nello stato (immutabilità)
    function toggleCategory(categoryId) {
        const alreadySelected = form.categoryIds.includes(categoryId);
        setForm({
            ...form,
            categoryIds: alreadySelected
                ? form.categoryIds.filter((id) => id !== categoryId)
                : [...form.categoryIds, categoryId]
        });
    }

    function handleSubmit(event) {
        event.preventDefault();
        onSubmit({ ...form, price: Number(form.price) })
            // In creazione svuoto i campi solo se è andata a buon fine; dopo una modifica
            // App azzera editingProduct, la key cambia e il form si ricrea vuoto
            .then(() => !isEditing && setForm(emptyForm))
            .catch(() => { }); // l'errore è già mostrato da chi ha passato onSubmit
    }

    const [form, setForm] = useState(initialValues ? {
        name: initialValues.name,
        descrizione: initialValues.descrizione,
        price: String(initialValues.price),
        image: initialValues.image ?? '',
        // senza questo, salvando una modifica il PUT riceverebbe categoryIds vuoto e perderebbe le categorie
        categoryIds: initialValues.categories.map((category) => category.id)
    } : emptyForm);
    const isEditing = Boolean(initialValues);
    return (
        <form onSubmit={handleSubmit} className="card card-body mb-4">
            <div className="row g-2 mb-3">
                <div className="col-md-4">
                    <input name="name" type="text" className="form-control" placeholder="Name" value={form.name}
                        onChange={handleChange} />
                </div>
                <div className="col-md-5">
                    <input name="descrizione" type="text" className="form-control" placeholder="Descrizione" value={form.descrizione}
                        onChange={handleChange} />
                </div>
                <div className="col-md-3">
                    <input name="price" type="number" className="form-control" placeholder="Price" value={form.price}
                        onChange={handleChange} />
                </div>
                <div className="col-12">
                    <input name="image" type="url" className="form-control" placeholder="URL dell'immagine (https://...)" value={form.image}
                        onChange={handleChange} />
                </div>
            </div>
            <fieldset className="mb-3">
                <legend className="fs-6">Categorie</legend>
                {categories.map((category) => (
                    <div key={category.id} className="form-check form-check-inline">
                        <label className="form-check-label">
                            <input type="checkbox" className="form-check-input"
                                checked={form.categoryIds.includes(category.id)}
                                onChange={() => toggleCategory(category.id)} />
                            {category.name}
                        </label>
                    </div>
                ))}
            </fieldset>
            <div className="d-flex gap-2">
            <button type="submit" className="btn btn-primary">
                {isEditing ? 'Salva modifiche' : 'Aggiungi prodotto'}
            </button>
            {
                onCancel && <button type="button" className="btn btn-outline-secondary" onClick={onCancel}>
                    Annulla
                </button>
            }
            </div>
            <p>
                {JSON.stringify(form)}
            </p>
        </form>
    );
}