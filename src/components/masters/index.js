import { Routes, Route } from "react-router-dom";
import Clients from "./clients";
import UserMaster from "./userMaster";
import Categories from "./categories";
import Account from "./account";
import TwoFieldMaster from "./twoFieldMaster";

export default function Masters() {
  return (
    <Routes>
      <Route path="/clients" element={<Clients />} />
      <Route path="/users" element={<UserMaster />} />
      <Route path="/categoryAndSubCategory" element={<Categories />} />
      <Route path="/accounts" element={<Account />} />
      <Route path="/twoFieldMaster" element={<TwoFieldMaster />} />
    </Routes>
  );
}
