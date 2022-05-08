
import {Button} from "antd";
import {Link, useNavigate} from "react-router-dom";


export default function CategoryView() {


    const b = ["Gesundheit", "Meditation", "Studium", "Sport", "Unterhaltung"];



    return (
        <>
            <h1>Kaegorie auswählen:</h1>


            {b.map(x=>{
                return (<Link to={"/evaluate/"+x}>
                    <Button type="primary">{x}</Button>
                </Link>)
            })}


        </>
    );
}