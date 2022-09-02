import "./styles.css";
import { useParams } from "react-router-dom";
import { getPost } from "../Content/posts";
import Header from "../Header/Header"
import Footer from "../Footer/Footer";
export default function ContentDetails() {
  let params = useParams();
  let post = getPost(parseInt(params.Id, 10));
  return (
    <div>
      <Header />
      <div id="containerD">
        <div id="imageselection">
          <img src={post.preview} alt="" />
        </div>
        <div id="productDetails">
          <div id="details">
            <h2>{post.description}</h2>
            <h3>{post.price}</h3>
            <h2>{post.name}</h2>
            <h2>Tamanho</h2>
            <div id="tamanho">
              {post.size.map((tamanho) => {
                return <h2>{tamanho}</h2>;
              })}
            </div>
          </div>
          <div id="button">
            <button>Select</button>
          </div>
        </div>
      </div>
      <Footer/>
    </div>
  );
}
