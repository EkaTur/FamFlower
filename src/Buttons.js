import Filter from './Filter';

const Buttons = () => {

    return (
        <div className="buttonsContainer">
            {['ROSES', 'PEONIES', 'LILIES', 'TULIPS', 'GLADIOLUS', 'SHOW ALL'].map(category => <Filter category={category} key={category} /> )}
        </div>
    )

        //{data, setMyFlowers}
    // const chosenFlowers = (searchTerm) => {
    //     const newFlowers = data.filter(item => item.searchTerm.includes(searchTerm));
    //     setMyFlowers(newFlowers);
    // };
    
    // return (
    //     <div className="">
    //         <button className="btn" onClick={() => chosenFlowers('roses')}>ROSES</button>
    //         <button className="btn" onClick={() => chosenFlowers('peony')}>PEONIES</button>
    //         <button className="btn" onClick={() => chosenFlowers('lilies')}>LILIES</button>
    //         <button className="btn" onClick={() => chosenFlowers('tulips')}>TULIPS</button>
    //         <button className="btn" onClick={() => chosenFlowers('gladiolus')}>GLADIOLUS</button>
    //         <button className="btn" onClick={() => setMyFlowers(data)}>SHOW ALL</button>
    //     </div>
    // )
}

export default Buttons;

