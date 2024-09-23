import React, { useState } from 'react';

interface AccordionItemProps {
    question: string;
    answer: string;
}

const Accourdian: React.FC<AccordionItemProps> = ({ question, answer }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="py-5">
            <details className="group" open={isOpen} onClick={() => setIsOpen(!isOpen)}>
                <summary className="flex cursor-pointer list-none items-center justify-between font-medium">
                    <span>{question}</span>
                    <span className={`transition ${isOpen ? 'rotate-180' : ''}`}>
                        <svg
                            fill="none"
                            height="24"
                            shapeRendering="geometricPrecision"
                            stroke="currentColor"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="1.5"
                            viewBox="0 0 24 24"
                            width="24"
                        >
                            <path d="M6 9l6 6 6-6"></path>
                        </svg>
                    </span>
                </summary>
                {isOpen && (
                    <p className="group-open:animate-pulse mt-3 text-neutral-600">{answer}</p>
                )}
            </details>
        </div>
    );
};

export default Accourdian;
