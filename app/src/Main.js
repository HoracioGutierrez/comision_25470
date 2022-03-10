import { Route, Routes } from "react-router-dom";
import { toast } from "react-toastify";
import ItemListContainer from "./ItemListContainer";
import ItemDetailContainer from "./ItemDetailContainer";
import Carrito from "./Carrito"

const Main = (props) => {

    const handleToast = () => {
        toast.info("Soy un toast :)")
    }

    return (
        <main className="container">
            <Routes>
                <Route path="/" element={<ItemListContainer/>}/>
                <Route path="/tipo/:id" element={<ItemListContainer/>}/>
                <Route path="/carrito" element={<Carrito/>}/>
                <Route path="/pokemon/:id" element={<ItemDetailContainer/>}/>
            </Routes>
        </main>
    );
}

export default Main;