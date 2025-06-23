import React from 'react';
import Card from '../components/Card'; // Import the Card component


const Vets: React.FC = () => {
    const vets = [
        { name: 'Healthy Pets Veterinary', type: 'General Vet', age: '10+ years', additionalInfo: 'Location: 123 Pet St, Pet City, CA' },
        { name: 'Animal Care Clinic', type: 'Emergency Vet', age: '8 years', additionalInfo: '24/7 Emergency Care' },
        { name: 'Paws & Claws Vet', type: 'Specialist Vet', age: '5 years', additionalInfo: 'Focus on Surgical Procedures' },
        { name: 'Pet Health Center', type: 'Wellness Vet', age: '12 years', additionalInfo: 'Offers vaccinations and routine check-ups' },
        { name: 'Happy Tails Veterinary', type: 'Holistic Vet', age: '7 years', additionalInfo: 'Specializes in acupuncture and herbal treatments' },
    ];

    return (
        <div>
            <h1>Vets Page</h1>
            <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {vets.map((vet, index) => (
                    <Card
                        key={index}
                        name={vet.name}
                        type={vet.type}
                        age={vet.age}
                        additionalInfo={vet.additionalInfo}
                    />
                ))}
            </div>
        </div>
    );
};

export default Vets;
