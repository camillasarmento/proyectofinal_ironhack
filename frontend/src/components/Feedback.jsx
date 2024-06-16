// eslint-disable-next-line no-unused-vars
import React from 'react';

export function Feedback() {
    const items = [
        {
            id: 1,
            name: "Cristiany P.",
            review: "Muy buen servicio al cliente, calidad excelente, un personal muy cualificado y en cuanto a eventos, los mejores, reparten a toda la isla si es necesario y puntuales...\n" +
                "Para mí..los mejores.\n" +
                "Además de trabajar los fines de semana.",
        },
        {
            id: 2,
            name: "Jaime D.",
            review: "Una empresa familiar, con un servicio más que excelente, calidad de hielo inmejorable y cuando un cliente lo precisa le sirven sin problemas y por supuesto unos precios más que competitivos relación/calidad/precio/servicio perfecto\n" +
                "Y lo mejor de todo....siguen creciendo."
        },
        {
            id: 3,
            name: "David Johnson",
            review: "El servicio es inmejorable, tuvimos un evento en domingo y no dudaron en darnos servicio, puntuales y muy profesionales\n" +
                "Repetiremos con esta empresa sin duda alguna\n" +
                "Gracias !!!!.",
        },
        {
            id: 1,
            name: "Jota C.",
            review: "Para nosotros y por nuestra experiencia, de los más profesionales y cumplidores en la isla. Fabrican y distribuyen\n"+
            " su propio hielo con una muy buena calidad. Un acierto esta empresa."
        },
        {
            id: 2,
            name: "Roberto M.",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque bibendum nulla sed elit consequat, consequat\n"+
                " blandit urna bibendum."
        },

    ];

    return (
        <div className="bg-white min-h-screen">
            <div className="max-w-screen-lg p-4 mx-auto">
                <div className="pb-8">
                    {/* Add Title or Subtitle if needed */}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    {items.map(({id, name, review}) => (
                        <div key={id} className="shadow-md rounded-lg overflow-hidden bg-blue-500 text-white p-4">
                            <div className="text-lg font-bold mb-2">{name}</div>
                            <p className="text-sm">{review}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Feedback;
