import React, { useState, ChangeEvent, useMemo } from 'react';
import CapePages from '../../components/capePages/capePages';
import {
  AdjustmentsHorizontalIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/solid';
import { CgDisplayFullwidth } from 'react-icons/cg';
import FilteredProductList from '../../components/filters/FilteredProductList';
import FilterModal from '../../components/filters/FilterModal';

interface Filters {
  price: boolean;
  discount: boolean;
  name: boolean;
  new: boolean;
  all: boolean;
}

const ShopPage = () => {
  const icons = 'w-10';
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCount, setShowCount] = useState(16);
  const [filters, setFilters] = useState<Filters>({
    price: false,
    discount: false,
    name: false,
    new: false,
    all: false,
  });

  const handleShowCountChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = Number(event.target.value);
    if (value >= 1 && value <= 32) {
      setShowCount(value);
    }
  };

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const applyFilters = (newFilters: Filters) => {
    setFilters(newFilters);
  };

  const memoizedFilteredProductList = useMemo(
    () => <FilteredProductList showCount={showCount} filters={filters} />,
    [showCount, filters],
  );

  return (
    <section>
      <CapePages title="Shop" />
      <main>
        <article className="flex h-28 bg-WhisperWhite justify-between gap-4">
          <div
            id="container-first"
            className="flex items-center gap-4 justify-between"
          >
            <div id="container-icons" className="flex">
              <AdjustmentsHorizontalIcon className={icons} />
              <button onClick={openModal}>Filter</button>
              <Squares2X2Icon className={icons} />
              <CgDisplayFullwidth className={icons} />
            </div>
            <div id="container-result" className="flex">
              <p>
                Showing <span>1 - {showCount}</span> of <span>32</span> results
              </p>
            </div>
          </div>
          <div id="container-second" className="flex border-2">
            <p>Show</p>
            <input
              type="number"
              placeholder="16"
              value={showCount}
              onChange={handleShowCountChange}
              min="1"
              max="32"
            />
            <p>Sort by</p>
            <input type="text" placeholder="Default" />
          </div>
        </article>
        {memoizedFilteredProductList}
        <FilterModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onApply={applyFilters}
          filters={filters}
        />
      </main>
    </section>
  );
};

export default ShopPage;
