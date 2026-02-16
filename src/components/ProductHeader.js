import "../styles/ProductHeader.css";
import { FiChevronDown, FiChevronRight } from "react-icons/fi";

export default function ProductHeader({ count }) {
  return (
    <section className="product-header">
      <div className="container-header">
        <div className="hero">
          <h1>DISCOVER OUR PRODUCTS</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Amet est posuere rhoncus
            scelerisque. Dolor integer scelerisque nibh amet mi ut elementum
            dolor.
          </p>
        </div>

        <div className="products-topbar">
          <div className="left-filter">
            <span className="items desktop-only">{count} ITEMS</span>

            <span className="showfilter">
              <span className="desktop-only">
                <FiChevronRight className="filters-arrow" /> SHOW FILTER
              </span>
              <span className="mobile-only">FILTER</span>
            </span>
          </div>

          <div className="sort-wrapper">
            <div className="sort">
              RECOMMENDED <FiChevronDown />
            </div>

            <div className="sort-menu">
              <p className="active">✓ RECOMMENDED</p>
              <p>NEWEST FIRST</p>
              <p>POPULAR</p>
              <p>PRICE : HIGH TO LOW</p>
              <p>PRICE : LOW TO HIGH</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
