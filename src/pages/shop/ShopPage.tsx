import { useState, ChangeEvent, useCallback, useEffect } from 'react';
import CapePages from '../../components/capePages/PagesCape';
import {
  AdjustmentsHorizontalIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/solid';
import { CgDisplayFullwidth } from 'react-icons/cg';
import ProductList from '../../components/cards/ProductList';
import FilterModal from './FilterModal';
import SectionQuality from '../../components/SectionQuality/SectionQuality';

interface Filters {
  price: boolean;
  discount: boolean;
  name: boolean;
  new: boolean;
  all: boolean;
}

interface Product {
  id: number;
  name: string;
  description: string;
  originalPrice: number;
  discountedPrice: number;
  discount: number;
  imageUrl: string;
  new: string;
}

function ShopPage() {
  const iconClasses = 'w-10 xl:w-7';
  const buttonClasses = 'px-7 py-3 rounded-md text-base';

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCount, setShowCount] = useState<number>(16);
  const [filters, setFilters] = useState<Filters>({
    price: false,
    discount: false,
    name: false,
    new: false,
    all: false,
  });
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [products, setProducts] = useState<Product[]>([]);
  const [displayedProducts, setDisplayedProducts] = useState<Product[]>([]);

  const applyFilters = useCallback(
    (products: Product[], filters: Filters): Product[] => {
      let filteredProducts = products;

      if (filters.all) {
        return [...products].sort((a, b) => a.id - b.id);
      }
      if (filters.name) {
        filteredProducts = filteredProducts.sort((a, b) =>
          a.name.localeCompare(b.name),
        );
      }
      if (filters.price) {
        filteredProducts = filteredProducts.sort(
          (a, b) => a.originalPrice - b.originalPrice,
        );
      }
      if (filters.discount) {
        filteredProducts = filteredProducts.sort(
          (a, b) => b.discount - a.discount,
        );
      }
      if (filters.new) {
        filteredProducts = filteredProducts.filter(
          (product) => product.new === 'New',
        );
      }

      return filteredProducts;
    },
    [],
  );

  const fetchProducts = useCallback(async () => {
    try {
      const response = await fetch('http://localhost:3001/products');
      const data = await response.json();
      setProducts(data);
      setDisplayedProducts(data.slice(0, 16));
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  }, []);

  useEffect(() => {
    fetchProducts();
  }, [fetchProducts]);

  useEffect(() => {
    setCurrentPage(1);
  }, [showCount]);

  useEffect(() => {
    function updateDisplayedProducts() {
      const filteredProducts = applyFilters(products, filters);
      const paginatedProducts = [];
      for (let i = 0; i < filteredProducts.length; i += 16) {
        paginatedProducts.push(filteredProducts.slice(i, i + 16));
      }

      const currentProducts = paginatedProducts[currentPage - 1] || [];
      setDisplayedProducts(
        currentProducts.slice(0, showCount - (currentPage - 1) * 16),
      );
    }

    updateDisplayedProducts();
  }, [currentPage, products, showCount, filters, applyFilters]);

  const handleShowCountChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = Number(event.target.value);
      setShowCount(value);
      setCurrentPage(1);
      const orderedProducts = [...products].sort((a, b) => a.id - b.id);
      setDisplayedProducts(orderedProducts.slice(0, value));
    },
    [products],
  );

  const handlePageChange = useCallback(
    (pageNumber: number) => () => {
      setCurrentPage(pageNumber);
    },
    [],
  );

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const handleApplyFilters = useCallback((newFilters: Filters) => {
    setFilters(newFilters);
  }, []);

  return (
    <section>
      <CapePages title="Shop" />
      <main>
        <article className="flex flex-col bg-WhisperWhite mb-12 lg:flex-row lg:h-28 lg:gap-4 lg:mb-0 lg:justify-between lg:px-2 xl:px-28">
          <div
            id="container-first"
            className="flex flex-col items-center py-5 gap-8 lg:flex-row lg:items-center lg:justify-between"
          >
            <div
              id="container-icons"
              className="flex gap-5 items-center border-b-4 border-gray-400 pb-5 lg:border-b-0 lg:border-r-2 lg:h-10 lg:overflow-hidden lg:pr-7 lg:pb-0"
            >
              <AdjustmentsHorizontalIcon className={iconClasses} />
              <button
                onClick={openModal}
                className="text-2xl font-medium hover:text-Goldenrod"
              >
                Filter
              </button>
              <Squares2X2Icon className={iconClasses} />
              <CgDisplayFullwidth className="w-14 h-9 xl:w-7" />
            </div>
            <div id="container-result" className="flex">
              <p>
                Showing <span>1 - {Number(showCount) || 0}</span> of{' '}
                <span>48</span> results
              </p>
            </div>
          </div>

          <div
            id="container-second"
            className="flex flex-col text-center items-center gap-6 pt-2 pb-7 lg:flex-row lg:pt-5"
          >
            <div className="flex items-center gap-6">
              <p className="text-2xl lg:text-xl">Show</p>
              <input
                type="number"
                placeholder="16"
                value={showCount}
                onChange={handleShowCountChange}
                min="1"
                max="48"
                className="bg-white px-1 py-3 text-center text-gray-500"
              />
            </div>
            <p className="text-2xl lg:text-xl">Sort by</p>
            <input
              type="text"
              placeholder="Default"
              className="py-4 px-4 w-52"
            />
          </div>
        </article>
        <ProductList products={displayedProducts} />
        <FilterModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onApply={handleApplyFilters}
          filters={filters}
        />
      </main>
      <div className="flex justify-center gap-6 pb-10">
        {[1, 2, 3].map((label) => (
          <button
            key={label}
            onClick={handlePageChange(label)}
            className={`${buttonClasses} ${currentPage === label ? 'bg-Goldenrod text-white' : 'bg-warm-cream text-black border-2 border-gray-100'}`}
            disabled={
              (label === 2 && showCount < 17) || (label === 3 && showCount < 25)
            }
          >
            {label}
          </button>
        ))}
        <button
          className={`${buttonClasses} bg-gray-200 text-gray-500`}
          disabled
        >
          Next
        </button>
      </div>
      <SectionQuality />
    </section>
  );
}

export default ShopPage;
