import SharedLayout from "./components/SharedLayout/SharedLayout";
import { AppStyle } from "./App.styled";
import { lazy, Suspense } from "react";
import { Navigate, Route, Routes } from "react-router-dom";


const HomePage = lazy(() => import("./pages/HomePage/HomePage"));
const FavoritePage = lazy(() => import("./pages/FavoritePage/FavoritePage"));

function App() {
  return (
    <AppStyle>
      <SharedLayout>
        <Suspense fallback={"loading.."}>
          <Routes>
            <Route index path="/" element={<HomePage />}></Route>
            <Route path="/favorite" element={<FavoritePage />}></Route>
            <Route path="*" element={<Navigate to="/" />}></Route>
          </Routes>
        </Suspense>
      </SharedLayout>
    </AppStyle>
  );
}

export default App;
