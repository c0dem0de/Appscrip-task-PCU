import ProductHeader from "../components/ProductHeader";
import ProductsGrid from "../components/ProductsGrid";

/* SEO metadata */
export const metadata = {
  title: "Appscrip Store | Discover Our Products",
  description:
    "Explore premium handcrafted fashion, accessories and lifestyle collections. Appscrip product listing task.",
};

/* Server-side data fetch with error handling */
async function getProducts() {
  try {
    const res = await fetch("https://fakestoreapi.com/products", {
      next: { revalidate: 3600 }, // Cache for 1 hour instead of no-store
    });
    
    // Check if response is successful
    if (!res.ok) {
      console.error(`HTTP error! status: ${res.status}`);
      throw new Error(`Failed to fetch products: ${res.status}`);
    }
    
    // Check if response is JSON
    const contentType = res.headers.get("content-type");
    if (!contentType || !contentType.includes("application/json")) {
      console.error("Response is not JSON, received:", contentType);
      throw new Error("Response is not JSON");
    }
    
    const data = await res.json();
    return data;
  } catch (error) {
    console.error("Error fetching products:", error.message);
    // Return empty array as fallback to prevent app crash
    return [];
  }
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
