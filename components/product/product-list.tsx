/* eslint-disable @typescript-eslint/no-explicit-any */
import ProductCard from './product-card';

const ProductList = ({
  data,
  title,
  limit,
}: {
  data: any[];
  title?: string;
  limit?: number;
}) => {
  // Apply limit if provided, otherwise show all products
  const limitedData = limit ? data.slice(0, limit) : data;

  return (
    <div className='my-10'>
      <h2 className='h2-bold mb-4'>{title}</h2>
      {limitedData.length > 0 ? (
        limitedData.map((product: any) => (
          <ProductCard key={product.slug} product={product} />
        ))
      ) : (
        <div>
          <p>No products found</p>
        </div>
      )}
    </div>
  );
};

export default ProductList;