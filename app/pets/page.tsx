import React from 'react';

interface Pet {
    name: string;
    type: string;
    age: number;
}

const Pets: React.FC = () => {
    const pets: Pet[] = [
        { name: 'Buddy', type: 'Dog', age: 5 },
        { name: 'Whiskers', type: 'Cat', age: 3 },
        { name: 'Goldie', type: 'Fish', age: 2 },
    ];

    return (
        <div>
            <h1>Pets Page</h1>
    <ul>
    {pets.map((pet, index) => (
            <li key={index}>
                <h3>{pet.name}</h3>
                <p>Type: {pet.type}</p>
    <p>Age: {pet.age}</p>
    </li>
))}
    </ul>
    </div>
);
};

export default Pets;
