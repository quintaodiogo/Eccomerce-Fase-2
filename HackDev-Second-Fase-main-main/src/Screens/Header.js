import ButtonClean from "../Components/ButtonClean";
import InputSearch from "../Components/InputSearch";
import "./Header.css";

function Header() {
  return (
    <div className="header">
      <div className="logo">
        <a href="/">
          <strong>GoDev</strong>Shop
        </a>
      </div>
      <ButtonClean txt={"Roupas"} />
      <ButtonClean txt={"Acessórios"} />
      <InputSearch />
    </div>
  );
}
export default Header;
