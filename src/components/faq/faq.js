// components/FAQ.js

import React, { useState } from 'react';
import './faq.css';

function FAQComponent() {
    const [faqs, setfaqs] = useState([
        {
            question: 'How many programmers does it take to screw in a lightbulb?',
            answer: 'None. We don\'t address hardware issues.',
            open: true
        },
        {
            question: 'Who is the most awesome person?',
            answer: 'You. The Viewer.',
            open: false
        },
        {
            question: 'How many questions does it take to make a successful FAQ Page?',
            answer: 'This many.',
            open: false
        }
    ]);

    const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open;
            } else {
                faq.open = false;
            }

            return faq;
        }));
    }

    return (
        <div className="faqs">
            {faqs.map((faq, i) => (
                <SingleFAQ faq={faq} index={i} toggleFAQ={toggleFAQ} />
            ))}
        </div>
    );
}

function SingleFAQ({ faq, index, toggleFAQ }) {
    return (
        <div
            className={"faq " + (faq.open ? 'open' : '')}
            key={index}
            onClick={() => toggleFAQ(index)}
        >
            <div className="faq-question">
                {faq.question}
            </div>
            <div className="faq-answer">
                {faq.answer}
            </div>
        </div>
    )
}

export default FAQComponent;