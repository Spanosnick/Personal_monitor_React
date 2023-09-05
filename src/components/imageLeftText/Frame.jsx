import React from 'react';
import './frams.css';

function Frame({ isDefaultContent }) {
    return (
        <div className="specialcontainer">
            <div className="image-container">
                <img
                    src={isDefaultContent ? "/fruits.png" : "/bag.png"}
                    alt={isDefaultContent ? "A beautiful picture" : "Image of a bag"}
                />
                <div className="text-container">
                    {isDefaultContent ? (
                        <>
                            <h1>Ένα βήμα προς την καλύτερη έκδοση του εαυτού μας!</h1>
                            <p>Εξερεύνησε τον κόσμο της ισορροπημένης διατροφής. Ανακάλυψε τη χαρά της ευεξίας!</p>
                        </>
                    ) : (
                        <>
                            <h1>Πληροφορία της ημέρας!</h1>
                            <p>Το ήξερες ότι το μήλο αποτελείται κατά κύριο λόγο από νερό; Καθώς περίπου το 86% του βάρους του είναι νερό. Αυτό το καθιστά ένα αναζωογονητικό φρούτο με χαμηλή περιεκτικότητα σε θερμίδες, και είναι ιδανικό για ενυδάτωση και αίσθηση κορεσμού.</p>
                        </>
                    )}
                </div>
            </div>
        </div>
    );
}

export default Frame;
