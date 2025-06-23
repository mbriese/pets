import React from 'react';

interface Vet {
    name: string;
    specialty: string;
    experience: number;
}

const Vets: React.FC = () => {
    const vets: Vet[] = [
        { name: 'Dr. John Smith', specialty: 'Small Animals', experience: 10 },
        { name: 'Dr. Jane Doe', specialty: 'Exotic Animals', experience: 8 },
        { name: 'Dr. Michael Johnson', specialty: 'Large Animals', experience: 15 },
    ];

    return (
        <div>
            <h1>Vets Page</h1>
            <ul>
                {vets.map((vet, index) => (
                    <li key={index}>
                        <h3>{vet.name}</h3>
                        <p>Specialty: {vet.specialty}</p>
                        <p>Experience: {vet.experience} years</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Vets;
