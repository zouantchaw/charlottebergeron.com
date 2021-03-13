import React from 'react';
import { useState, useEffect } from 'react';

function EssayShow(match) {

    useEffect(() => {
        fetchEssay();
        console.log(match.match.params.id)
    }, []);

    const [essays, setEssay] = useState({});

    const fetchEssay = async () => {
        const fetchEssay = await fetch('http://localhost:8080/api/essays');
        const essays = await fetchEssay.json()
        setEssay(essays)
        console.log(essays)
    };

    return (
        <div>
            Test
        </div>
    );
}

export default EssayShow;