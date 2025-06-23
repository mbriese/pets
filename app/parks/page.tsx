import React from 'react';
import Card from '../components/Card'; // Import the Card component


const Parks: React.FC = () => {
    const parks = [
        { name: 'Sunny Meadows Park', type: 'Dog Park', age: 'Established 2010', additionalInfo: 'Facilities: Walking Trails, Picnic Areas' },
        { name: 'Green Valley Park', type: 'Public Park', age: 'Established 2005', additionalInfo: 'Facilities: Dog-Friendly Zones' },
        { name: 'Riverfront Park', type: 'Family Park', age: 'Established 2015', additionalInfo: 'Facilities: Playgrounds, Dog Run' },
        { name: 'Lakeside Park', type: 'Nature Park', age: 'Established 2012', additionalInfo: 'Facilities: Bird Watching, Trails' },
        { name: 'City Central Park', type: 'Urban Park', age: 'Established 2000', additionalInfo: 'Facilities: Sports Fields, Dog Park' },
    ];

    return (
        <div>
            <h1>Parks Page</h1>
            <div className="container mx-auto p-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {parks.map((park, index) => (
                    <Card
                        key={index}
                        name={park.name}
                        type={park.type}
                        age={park.age}
                        additionalInfo={park.additionalInfo}
                    />
                ))}
            </div>
        </div>
    );
};

export default Parks;
