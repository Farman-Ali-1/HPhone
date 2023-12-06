import { BrowserRouter, Routes, Route } from "react-router-dom";

import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Category from "./Components/Category/Category";
import SingleProduct from "./Components/SingleProduct/singleproduct";
import Newsletter from "./Components/Footer/Newslatter/Newslatter";
import AppContext from "./Utils/Context";
import Product from "./Components/Products/Product";

function App() {
    return (
        <BrowserRouter>
            <AppContext>
                <Header />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/category/:id" element={<Category />} />
                    <Route path="/product/:id" element={<SingleProduct />} />
                </Routes>
                <Newsletter />
                <Product/>
                <Footer />
            </AppContext>
        </BrowserRouter>
    );
}

export default App;