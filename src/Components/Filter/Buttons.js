import Filter from './Filter';
import './FilterStyle.css';

const Buttons = () => {

    return (
        <div className="buttonsContainer">
            {['ROSES', 'PEONIES', 'LILIES', 'TULIPS', 'GLADIOLUS', 'SHOW ALL'].map(category => <Filter category={category} key={category} /> )}
        </div>
    )
}

export default Buttons;

