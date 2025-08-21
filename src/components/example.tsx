import React, { useState } from 'react';

type ColorButtonProps = {
    initialColor?: string;
};

const ColorButton: React.FC<ColorButtonProps> = ({ initialColor = 'blue' }) => {
    const [color, setColor] = useState(initialColor);

    const toggleColor = () => {
        setColor(prev => (prev === 'blue' ? 'green' : 'blue'));
    };

    return (
        <button
            onClick={toggleColor}
            style={{
                backgroundColor: color,
                color: 'white',
                padding: '0.5rem 1rem',
                borderRadius: '4px',
                border: 'none',
                cursor: 'pointer'
            }}
        >
            Cambiar a {color === 'blue' ? 'verde' : 'azul'}
        </button>
    );
};

export default ColorButton;
