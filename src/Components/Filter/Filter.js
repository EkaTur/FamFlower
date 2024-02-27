import { useDispatch, useSelector } from "react-redux";
import { getSelectedCategory } from "../../redux/categorySlice";
import { filterCategory } from "../../redux/categorySlice";
import './FilterStyle.css';
import gsap from "gsap";
import { useLayoutEffect } from "react";

const Filter = ({ category }) => {

    useLayoutEffect(() => {
        gsap.fromTo('.btn', {opacity: 0}, {opacity: 1, duration: 3, stagger: 0.2})
    }, [])

    const dispatch = useDispatch();
    const selectedCategory = useSelector(getSelectedCategory);

    return (
        <div>
            <button onClick={() => {dispatch(filterCategory(category))}} className={selectedCategory === category ? 'categoryButtonSelected' : 'btn'}>{category}</button>
        </div>
    )
}

export default Filter;