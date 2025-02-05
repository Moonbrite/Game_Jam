import { useState } from "react";

export default function ElectricityForm() {

    const [formData, setFormData] = useState({
        logement: "",
        projet: "",
        pieces: "",
        surface: 15
    });

    const [message, setMessage] = useState("");
    const [listProducts, setListProducts] = useState([]);

    const produitsElectriques = [
        { nom: "Prise", marque: "Le Petit", ratio: 4, prix: 9.99 },
        { nom: "Luminaire", marque: "Le Petit", ratio: 10, prix: 13.99 },
        { nom: "Disjoncteur 10A", marque: "Le Petit", ratio: 10, prix: 15.99 },
        { nom: "Différentiel 30mA", marque: "Le Petit", ratio: null, prix: 24.99 },
    ];

    function genererProduits(surface) {
        if (isNaN(surface) || surface <= 0) {
            return [];
        }

        return produitsElectriques.map(produit => {
            let quantite = produit.ratio ? Math.ceil(surface / produit.ratio) : 1;
            return { nom: produit.nom, marque: produit.marque, quantite, prix: produit.prix };
        });
    }

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const { logement, projet, pieces, surface } = formData;

        if (!logement || !projet || !pieces || !surface) {
            setMessage("Veuillez remplir tous les champs.");
            setListProducts([]);
            return;
        }

        setMessage("Formulaire soumis avec succès.");
        setListProducts(genererProduits(Number(surface)));
    };

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Type de logement :
                <select name="logement" onChange={handleChange}>
                    <option value="">-- Sélectionner --</option>
                    <option value="Appartement">Appartement</option>
                    <option value="Maison">Maison</option>
                </select>
            </label>

            <label>
                Type de projet :
                <select name="projet" onChange={handleChange}>
                    <option value="">-- Sélectionner --</option>
                    <option value="Construction">Construction</option>
                    <option value="Rénovation">Rénovation</option>
                </select>
            </label>

            <label>
                Pièces concernées :
                <select name="pieces" onChange={handleChange}>
                    <option value="">-- Sélectionner --</option>
                    <option value="Chambre">Chambre</option>
                </select>
            </label>

            <label>
                Surface en m² :
                <input type="number" name="surface" value={formData.surface} onChange={handleChange} />
            </label>

            <button type="submit">Envoyer</button>

            {message && <p>{message}</p>}

            {listProducts.length > 0 && (
                <ul>
                    {listProducts.map((produit, index) => (
                        <li key={index}>
                            <strong>{produit.nom}</strong> - {produit.marque} - Quantité: {produit.quantite} Prix: {produit.prix} €
                        </li>
                    ))}
                </ul>
            )}
        </form>
    );
}
