
import {Button} from "antd";
import {Link, useNavigate} from "react-router-dom";
import {useRecoilState} from "recoil";
import {category_state} from "../../atoms/atoms";


export default function CategoryView() {


    const b = ["Gesundheit", "Meditation", "Studium", "Sport", "Unterhaltung"];
    const [category, setCategory] = useRecoilState(category_state);
    const navigate = useNavigate();

    function redirect(category) {
        setCategory(category);
        navigate("/evaluate")
    }

    return (
        <>
            <h1>Kaegorie auswählen:</h1>


            {b.map(x=>{
                return (<Button key= {x} type="primary" onClick={redirect.bind(this,x)}>{x}</Button>)
            })}


        </>
    );
}