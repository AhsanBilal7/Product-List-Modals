import logo from "./logo.svg";
import "./App.css";
import Main from "./Component/Main";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NoPage from "./Component/NoPage/NoPage";
import NoPage2 from "./Component/NoPage2/NoPage2";
import ProfileCard from "./Component/CardComp/CardComp";
function importAll(r) {
  let images = {};
  r.keys().forEach((item, index) => {
    images[item.replace("./", "")] = r(item);
  });
  return images;
}
const sho = importAll(
  require.context("./pictures/shoes", false, /\.(png|jpe?g|svg)$/)
);
function App() {
  return (
    <>
      <div className="App"></div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Main />} />
          <Route path="/main" element={<Main />} />
          <Route path="/nopage" element={<NoPage2 />} />
          <Route path="/profilepage/:arrayName/:id" element={<ProfileCard />} />
          <Route path="*" element={<NoPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
