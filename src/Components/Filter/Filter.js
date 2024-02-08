import { useDispatch, useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/categorySlice";
import { filterCategory } from "../../redux/categorySlice";
import './FilterStyle.css';

const Filter = ({ category }) => {

    const dispatch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory);

    return (
        <div>
            <button onClick={() => {dispatch(filterCategory(category))}} className={selectedCategory === category ? 'categoryButtonSelected' : 'btn'}>{category}</button>
        </div>
    )
}

export default Filter;