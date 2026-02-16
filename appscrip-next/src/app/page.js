import ProductHeader from "../components/ProductHeader";
import ProductsGrid from "../components/ProductsGrid";

/* SEO metadata */
export const metadata = {
  title: "Appscrip Store | Discover Our Products",
  description:
    "Explore premium handcrafted fashion, accessories and lifestyle collections. Appscrip product listing task.",
};

/* Server-side data fetch */
async function getProducts() {
  const res = await fetch("https://fakestoreapi.com/products", {
    cache: "no-store",
  });

  return res.json();
}

export default async function Home() {
  const products = await getProducts();

  return (
    <>
      {/* Schema Markup for SEO */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            name: "Discover Our Products",
            description: "Browse premium handcrafted fashion and accessories.",
          }),
        }}
      />

      {/* Header receives dynamic count */}
      <ProductHeader count={products.length} />

      {/* Products grid receives fetched products */}
      <ProductsGrid products={products} />
    </>
  );
}
