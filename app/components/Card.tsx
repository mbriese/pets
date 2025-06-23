import React from 'react';

interface CardProps {
    name: string;
    type: string;
    age: string;
    additionalInfo?: string;  // For Vets and Parks, additional info like location or services/facilities
}

const Card: React.FC<CardProps> = ({ name, type, age, additionalInfo }) => {
    return (
        <div className="bg-white p-6 rounded-lg shadow-lg w-full max-w-sm mx-auto">
            <h3 className="text-xl font-semibold text-center mb-2">{name}</h3>
            <p className="text-center text-gray-700">{type}</p>
            <p className="text-center text-gray-500">{age}</p>
            {additionalInfo && <p className="mt-4 text-gray-600 text-center">{additionalInfo}</p>}
        </div>
    );
};

export default Card;
