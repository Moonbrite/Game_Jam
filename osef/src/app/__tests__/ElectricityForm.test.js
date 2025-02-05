import { ElectricityForm } from "../components/ElectricityForm";
import { render, screen, fireEvent } from '@testing-library/react';


describe('ElectricityForm', () => {
    test('affiche les produits corrects pour une surface de 15m²', () => {
        render(<ElectricityForm />);

        // Remplir les champs du formulaire
        fireEvent.change(screen.getByLabelText(/Type de logement :/i), { target: { value: 'Appartement' } });
        fireEvent.change(screen.getByLabelText(/Type de projet :/i), { target: { value: 'Construction' } });
        fireEvent.change(screen.getByLabelText(/Pièces concernées :/i), { target: { value: 'Chambre' } });
        fireEvent.change(screen.getByLabelText(/Surface en m² :/i), { target: { value: '15' } });

        fireEvent.click(screen.getByRole('button', { name: /Envoyer/i }));

        // Vérifier le message de succès
        expect(screen.getByText(/Formulaire soumis avec succès/i)).toBeInTheDocument();

        // Vérifier les produits générés
        const listItems = screen.getAllByRole('listitem');
        expect(listItems).toHaveLength(4);

        // Vérifier les quantités attendues
        expect(listItems[0]).toHaveTextContent(/Quantité: 4/); // Prise (15/4 = 3.75 → arrondi à 4)
        expect(listItems[1]).toHaveTextContent(/Quantité: 2/); // Luminaire (15/10 = 1.5 → 2)
        expect(listItems[2]).toHaveTextContent(/Quantité: 2/); // Disjoncteur (15/10 = 1.5 → 2)
        expect(listItems[3]).toHaveTextContent(/Quantité: 1/); // Différentiel (15/80 = 0.1875 → 1)
    });

    test('affiche une erreur si un champ est manquant', () => {
        render(<ElectricityForm />);

        // Ne pas remplir le champ "Type de logement"
        fireEvent.change(screen.getByLabelText(/Type de projet :/i), { target: { value: 'Construction' } });
        fireEvent.change(screen.getByLabelText(/Pièces concernées :/i), { target: { value: 'Chambre' } });

        fireEvent.click(screen.getByRole('button', { name: /Envoyer/i }));

        expect(screen.getByText(/Veuillez remplir tous les champs/i)).toBeInTheDocument();
        expect(screen.queryByRole('listitem')).toBeNull();
    });

    test('ne génère pas de produits si la surface est 0', () => {
        render(<ElectricityForm />);

        fireEvent.change(screen.getByLabelText(/Type de logement :/i), { target: { value: 'Appartement' } });
        fireEvent.change(screen.getByLabelText(/Type de projet :/i), { target: { value: 'Construction' } });
        fireEvent.change(screen.getByLabelText(/Pièces concernées :/i), { target: { value: 'Chambre' } });
        fireEvent.change(screen.getByLabelText(/Surface en m² :/i), { target: { value: '0' } });

        fireEvent.click(screen.getByRole('button', { name: /Envoyer/i }));

        // Message de succès mais liste vide
        expect(screen.getByText(/Formulaire soumis avec succès/i)).toBeInTheDocument();
        expect(screen.queryByRole('listitem')).toBeNull();
    });

    test('génère les produits correctement pour une surface de 80m²', () => {
        render(<ElectricityForm />);

        fireEvent.change(screen.getByLabelText(/Type de logement :/i), { target: { value: 'Appartement' } });
        fireEvent.change(screen.getByLabelText(/Type de projet :/i), { target: { value: 'Construction' } });
        fireEvent.change(screen.getByLabelText(/Pièces concernées :/i), { target: { value: 'Chambre' } });
        fireEvent.change(screen.getByLabelText(/Surface en m² :/i), { target: { value: '80' } });

        fireEvent.click(screen.getByRole('button', { name: /Envoyer/i }));

        const listItems = screen.getAllByRole('listitem');
        expect(listItems[3]).toHaveTextContent(/Quantité: 1/); // Différentiel (80/80 = 1)
    });

    test('génère les produits correctement pour une surface de 81m²', () => {
        render(<ElectricityForm />);

        fireEvent.change(screen.getByLabelText(/Type de logement :/i), { target: { value: 'Appartement' } });
        fireEvent.change(screen.getByLabelText(/Type de projet :/i), { target: { value: 'Construction' } });
        fireEvent.change(screen.getByLabelText(/Pièces concernées :/i), { target: { value: 'Chambre' } });
        fireEvent.change(screen.getByLabelText(/Surface en m² :/i), { target: { value: '81' } });

        fireEvent.click(screen.getByRole('button', { name: /Envoyer/i }));

        const listItems = screen.getAllByRole('listitem');
        expect(listItems[3]).toHaveTextContent(/Quantité: 2/); // Différentiel (81/80 = 1.0125 → 2)
    });

    test('ne génère pas de produits si la surface est invalide (NaN)', () => {
        render(<ElectricityForm />);

        fireEvent.change(screen.getByLabelText(/Type de logement :/i), { target: { value: 'Appartement' } });
        fireEvent.change(screen.getByLabelText(/Type de projet :/i), { target: { value: 'Construction' } });
        fireEvent.change(screen.getByLabelText(/Pièces concernées :/i), { target: { value: 'Chambre' } });
        fireEvent.change(screen.getByLabelText(/Surface en m² :/i), { target: { value: 'abc' } });

        fireEvent.click(screen.getByRole('button', { name: /Envoyer/i }));

        // Le formulaire est soumis mais la surface est invalide
        expect(screen.getByText(/Formulaire soumis avec succès/i)).toBeInTheDocument();
        expect(screen.queryByRole('listitem')).toBeNull();
    });
});
