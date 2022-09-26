import styled from "styled-components";
import Header from "../../components/Header";
import Firstselling from "./components/Firstselling";
import StoreInfo from "./components/StoreInfo";
import Additem from "./components/AddItem";
import Footer from "../../components/Footer";
import Item from "./components/Item";
import AddItemBox from "./components/AddItemBox";

function Newpost() {
  return (
    <>
      <Header />
      <main>
        <Firstselling />
        <StoreInfo />
        <Item />
        {/* <Additem /> */}
        <AddItemBox />
      </main>
      <Footer />
    </>
  );
}

export default Newpost;
