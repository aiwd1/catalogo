import { useState } from "react";

const emptyForm = {
    name: "",
    descrizione: "",
    price: ""
}

// Inversion of Control: il form non sa cosa succede all'invio, chiama onSubmit(data)
// (una funzione che arriva da fuori e restituisce una Promise).
export default function ProductForm({ onSubmit, initialValues, onCancel }) {
    function handleChange(event) {
        const target = event.target; // l'elemento che ha scatenato l'evento
        const targetName = target.name;
        const valueNew = target.value; // Sempre una stringa
        setForm({
            ...form,
            [targetName]: valueNew
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
        price: String(initialValues.price)
    } : emptyForm);
    const isEditing = Boolean(initialValues);
    return (
        <form onSubmit={handleSubmit}>
            <input name="name" type="text" placeholder="Name" value={form.name}
                onChange={handleChange} />
            <input name="descrizione" type="text" placeholder="Descrizione" value={form.descrizione}
                onChange={handleChange} />
            <input name="price" type="number" placeholder="Price" value={form.price}
                onChange={handleChange} />
            <button type="submit">
                {isEditing ? 'Salva modifiche' : 'Aggiungi prodotto'}
            </button>
            {
                onCancel && <button type="button" onClick={onCancel}>
                    Annulla
                </button>
            }
            <p>
                {JSON.stringify(form)}
            </p>
        </form>
    );
}