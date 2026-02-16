import "../styles/ProductsGrid.css";
import { MdFavoriteBorder } from "react-icons/md";

export default function ProductsGrid({ products }) {
  return (
    <section className="products">
      <div className="container">
        <div className="grid">
          {products.map((item) => (
            <div className="card" key={item.id}>
              <img src={item.image} alt={item.title} className="card-img" />

              <div className="title-row">
                <p className="title">{item.title}</p>
                <span className="wishlist mobile-only">
                  <MdFavoriteBorder />
                </span>
              </div>

              <div className="card-bottom">
                <p className="signin">
                  Sign in or Create an account to see pricing
                </p>

                <span className="wishlist desktop-only">
                  <MdFavoriteBorder />
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
