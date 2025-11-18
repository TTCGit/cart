import CartContainer from "./components/CartContainer/CartContainer";
import Header from "./components/Header/Header";
import Layout from "./components/Layout/Layout";
import { useCartContextContainer } from "./context/CartContext";

function App() {
  const { loading } = useCartContextContainer();

  if (loading) {
    return (
      <main className="loading w-full h-screen justify-center items-center flex">
        <div>...loading</div>
      </main>
    );
  }

  return (
    <Layout>
      <Header />
      <CartContainer />
    </Layout>
  );
}
export default App;
