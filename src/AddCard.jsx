import { useState } from 'react';
import CustomCard from './Card.jsx';

let AddCard = () => {

    let [link, setLink] = useState([]);
    let [fact, setFact] = useState([]);
    let [ID, setID] = useState([]);
    let [cards, setCards] = useState([]);
    let [counter, setCounter] = useState(0)
    const [fetched, setFetched] = useState(false);

    let showDisplay = () => {
        if (!fetched) {
            Promise.all([fetch('https://api.thecatapi.com/v1/images/search?limit=10&breed_ids=beng&api_key=REPLACE_ME')
                .then(catting => catting.json()),
            fetch('https://meowfacts.herokuapp.com/?count=10').then(catting => catting.json())]).
                then(([cats, facts]) => {
                    const IDs = cats.map(cat => cat.id);
                    const urls = cats.map(cat => cat.url);
                    setLink(urls);
                    setID(IDs)
                    setFact(facts.data);
                    setCards([<CustomCard photo={urls[0]} about={facts.data[0]} id={IDs[0]} key={0} />]);
                    setCounter(1);
                    setFetched(true);
                });
        } else {
            counter < link.length &&
                setCards([...cards, <CustomCard photo={link[counter]} id={ID[counter]} about={fact[counter]} key={counter} />]);
            setCounter(prev => prev + 1);
        };
    };

    let hideDisplay = () => {
        setCards(prev => prev.slice(0, -1));
        setCounter(prev => Math.max(prev - 1, 0));
    };

    return (
        <>

            <div className="flex justify-center gap-6 mb-6">
                <button
                    onClick={showDisplay}
                    className="px-5 py-2 bg-blue-600 text-black rounded hover:bg-blue-700 transition">
                    Adding {counter < 11 ? counter : ''}
                </button>
                <button
                    onClick={hideDisplay}
                    className="px-5 py-2 bg-red-600 text-black rounded hover:bg-red-700 transition">
                    Removing
                </button>
            </div>
            <hr className="mb-6" />
            <div className="flex flex-row flex-wrap gap-6 justify-center">
                {cards}
            </div>

        </>
    )
};
export default AddCard;



