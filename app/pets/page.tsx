import React from 'react';
import Card from '../components/Card'; // Import the Card component


const Pets: React.FC = () => {
    const pets = [
        { name: 'Bella', type: 'Labrador Retriever', age: '3 years' },
        { name: 'Max', type: 'Golden Retriever', age: '5 years' },
        { name: 'Charlie', type: 'Bulldog', age: '2 years' },
        { name: 'Lucy', type: 'Poodle', age: '4 years' },
        { name: 'Rocky', type: 'German Shepherd', age: '3 years' },
    ];

    return (
        <>
            <h1>Pets Page</h1>
            <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {pets.map((pet, index) => (
                    <Card
                        key={index}
                        name={pet.name}
                        type={pet.type}
                        age={pet.age}
                    />
                ))}
            </div>
        </>

);
};

export default Pets;
