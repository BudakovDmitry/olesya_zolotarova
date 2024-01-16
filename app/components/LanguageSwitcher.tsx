'use client'

import React, { useState } from 'react';
import Link from 'next/link';

const LanguageSwitcher = ({ options, onSelect }: any) => {
    const currentPath = window.location.pathname
    const [isOpen, setIsOpen] = useState(false);

    const handleOptionClick = () => {
        setIsOpen(false);
    };

    return (
        <div className="dropdown-container">
            <button className="dropdown-button" onClick={() => setIsOpen(!isOpen)}>
                <span>{currentPath.substring(1) || 'uk'}</span>
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M6 9L12 15L18 9" stroke="#496E0D" strokeWidth="3" strokeLinecap="round"
                          strokeLinejoin="round"/>
                </svg>
            </button>
            <ul className={`dropdown-list ${isOpen ? 'open' : ''}`}>
                {options?.map((option: any) => (
                    <li className="dropdown-item" key={option}>
                        <a href={`/${option.toLowerCase()}`} className='dropdown-item_link'  onClick={() => handleOptionClick()}>
                            {option}
                        </a>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default LanguageSwitcher;
