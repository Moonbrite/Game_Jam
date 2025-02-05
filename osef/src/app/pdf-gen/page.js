'use client'
import html2pdf from 'html2pdf.js'

export default function PDFGen() {
  return (
    <>
      <div className="w-[45rem] mx-auto mt-14 p-1" id="devis">
        <div className="flex justify-between">
          <div>
            <h2 className="font-bold text-2xl mb-40">LOGO</h2>
            <p className="text-xl ml-10">
              <span className="font-bold">
                PRYSMOR
                </span><br />
                01 53 17 15 20<br />
                23 Rue du Pelissier<br />
                63000 Clermont-Ferrand
            </p>
          </div>
          <div>
            <h2 className="font-bold text-xl">Devis N°1</h2>
            <h2 className="font-bold text-xl">Date : 05/02/2025</h2>
            <div className="mt-64 mr-10">
              <p className="text-xl text-end"><span className="font-bold">
                JACQUES Marc</span><br />3 Rue de la Rue<br />06200 Nice
              </p>
            </div>
          </div>
        </div>
        <table className="w-full mt-28 mb-72">
          <thead>
            <tr>
              <th className="px-8 border-2">Description</th>
              <th className="px-8 border-2">Quantité</th>
              <th className="px-8 border-2">Unité</th>
              <th className="px-8 border-2">Prix unitaire HT</th>
              <th className="px-8 border-2">Total HT</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td className="border-2 text-center">Prises</td>
              <td className="border-2 text-center">10</td>
              <td className="border-2 text-center">10</td>
              <td className="border-2 text-center">10</td>
              <td className="border-2 text-center">100</td>
            </tr>
            <tr>
              <td className="border-2 text-center">Disjoncteurs</td>
              <td className="border-2 text-center">10</td>
              <td className="border-2 text-center">10</td>
              <td className="border-2 text-center">10</td>
              <td className="border-2 text-center">100</td>
            </tr>
            <tr>
              <td></td>
              <td></td>
              <td></td>
              <td></td>
              <td className="border-2 text-center">200</td>
            </tr>
          </tbody>
        </table>
        <span className="text-[12px]">
          Conditions générales de vente
          Ce devis est valable pendant 30 jours à compter de sa date d'émission. Après ce délai, les prix pourront être réajustés.
          Les prix indiqués sont hors taxes et peuvent être modifiés en fonction des quantités ou spécifications.
          Le paiement est dû selon les modalités précisées et des pénalités seront appliquées en cas de retard.
          L'entreprise ne pourra être tenue responsable en cas de force majeure.
          En validant ce devis, le client accepte ces conditions.
        </span>
      </div>
    </>
  );
}
