import Header from "./components/header";
import Footer from "./components/footer";
import ProductsList from "./Products/page";
import Cart from "./components/cart";

export default function Home() {
  return (
    <>
      <Header />
      {/* <Cart /> */}
      <ProductsList />
      <Footer />
    </>
  );
}
