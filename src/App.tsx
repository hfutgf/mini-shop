import Loading from "components/Loading";
import MainLayout from "layouts/MainLayout";
import { Suspense, useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import { Error, routes } from "./routes";
import { getProducts } from "services/product.service";
import { useStore } from "store";

function App() {
  const { products, setProducts } = useStore((state: any) => state);
  useEffect(() => {
    getProducts().then((res) => setProducts(res));
  }, []);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <MainLayout>
          <Routes>
            {routes.map((route) => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}
            <Route path="*" element={<Error />} />
          </Routes>
        </MainLayout>
      </Suspense>
    </>
  );
}

export default App;
