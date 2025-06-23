import React from 'react';

interface Park {
    name: string;
    location: string;
    size: number; // in acres
}

const Parks: React.FC = () => {
    const parks: Park[] = [
        { name: 'Central Park', location: 'New York City', size: 843 },
        { name: 'Yellowstone National Park', location: 'Wyoming, Montana, Idaho', size: 2.2 * 1000 },
        { name: 'Yosemite National Park', location: 'California', size: 748 },
    ];

    return (
        <div>
            <h1>Parks Page</h1>
            <ul>
                {parks.map((park, index) => (
                    <li key={index}>
                        <h3>{park.name}</h3>
                        <p>Location: {park.location}</p>
                        <p>Size: {park.size} acres</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default Parks;
