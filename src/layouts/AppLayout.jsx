import { Header } from "./Header";
import { Footer } from "./Footer";
import { Outlet } from "react-router-dom";

export const AppLayout = () => {
  return (
    <div className="applayout">
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};
