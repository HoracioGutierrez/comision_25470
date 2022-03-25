import { Route, Routes } from "react-router-dom";
import { toast } from "react-toastify";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Carrito from "./Carrito"
import Test from "./Test";

const Main = ({nombre,apellido}) => {
    return (
        <main className="container">
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/tipo/:id" element={<ItemListContainer/>}/>
                <Route path="/carrito" element={<Carrito/>}/>
                <Route path="/pokemon/:id" element={<ItemDetailContainer/>}/>
                <Route path="/test" element={<Test/>} />
            </Routes>
        </main>
    );
}

export default Main;