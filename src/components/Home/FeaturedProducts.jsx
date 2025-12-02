import ProductCard from "../Products/ProductCard";
import "./FeaturedProducts.css";
import useData from "../../Hook/useData";
import ProductCardSkeleton from "../Products/ProductCardSkeleton";

// 주요 제품 섹션 컴포넌트
export default function FeaturedProducts() {
  const { data: products, error, isLoading } = useData("/products/featured");
  const skeletons = [1, 2, 3];
  return (
    <section className="featured_products">
      <h2>주요제품</h2>
      {/* 대표 상품 표시 */}
      <div className="align_center featured_products_list">
        {error && <em className="form_error">{error}</em>}
        {isLoading && skeletons.map((n) => <ProductCardSkeleton key={n} />)}
        {products?.map((products) => (
          <ProductCard key={products._id} product={products} />
        ))}
      </div>
    </section>
  );
}
