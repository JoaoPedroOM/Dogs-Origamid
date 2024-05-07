import { BrowserRouter } from "react-router-dom";
import { AppRoutes } from "./app.routes";
import { UserStorage } from "../UserContext";
import Footer from "../Components/Footer";

export function Routes() {
  return (
    <BrowserRouter>
      <UserStorage>
        <main className=" soFlex">
          <AppRoutes />
        </main>
        <Footer/>
      </UserStorage>
    </BrowserRouter>
  );
}
