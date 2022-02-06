import { useRouter } from 'next/dist/client/router';
import Products from '../../components/Products';
import Pagination from '../../components/Pagination';

export default function ProductsPage() {
  const { query } = useRouter();
  // console.log(typeof query.page, typeof 3);
  const page = parseInt(query.page);
  // console.log(typeof page);
  return (
    <div>
      <Pagination page={page || 1} />

      {/* 3. Filter the products for the current page */}
      <Products page={page || 1} />

      <Pagination page={page || 1} />
    </div>
  );
}
