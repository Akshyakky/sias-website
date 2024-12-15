// components/Logo.tsx
import React from 'react';

interface LogoProps {
    variant?: 'default' | 'small' | 'hero';
    className?: string;
}

const Logo = ({ variant = 'default', className = '' }: LogoProps) => {
    const sizes = {
        small: 'h-6 w-auto', // Smaller header logo
        default: 'h-10 w-auto',
        hero: 'w-32 md:w-40 h-auto' // Reduced hero size significantly
    };

    const containerStyles = {
        small: 'bg-white p-1 rounded-md',
        default: 'bg-white p-1.5 rounded-lg',
        hero: 'bg-white p-4 rounded-lg shadow-lg mx-auto' // Reduced padding
    };

    return (
        <div className={`inline-block ${containerStyles[variant]} ${className}`}>
            <img
                src="/images/Sias_4c.jpg"
                alt="SIAS Accounting"
                className={`${sizes[variant]} object-contain`}
            />
        </div>
    );
};

export default Logo;