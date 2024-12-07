import { useState, ChangeEvent, useMemo, useCallback } from 'react';
import CapePages from '../../components/capePages/PagesCape';
import {
  AdjustmentsHorizontalIcon,
  Squares2X2Icon,
} from '@heroicons/react/24/solid';
import { CgDisplayFullwidth } from 'react-icons/cg';
import FilteredProductList from '../../components/filters/FilteredProductList';
import FilterModal from '../../components/filters/FilterModal';
import SectionQuality from '../../components/SectionQuality/SectionQuality';

interface Filters {
  price: boolean;
  discount: boolean;
  name: boolean;
  new: boolean;
  all: boolean;
}

function ShopPage() {
  const icons = 'w-10 xl:w-7';
  const buttonsCustom = 'px-7 py-3 rounded-md text-base';

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [showCount, setShowCount] = useState<string>('16');
  const [filters, setFilters] = useState<Filters>({
    price: false,
    discount: false,
    name: false,
    new: false,
    all: false,
  });
  const [activeButton, setActiveButton] = useState<number | string>(1);

  const handleShowCountChange = useCallback(
    (event: ChangeEvent<HTMLInputElement>) => {
      const value = event.target.value;
      if (
        value === '' ||
        (/^\d+$/.test(value) && Number(value) >= 0 && Number(value) <= 32)
      ) {
        setShowCount(value);
      }
    },
    [],
  );

  const openModal = useCallback(() => {
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
  }, []);

  const applyFilters = useCallback((newFilters: Filters) => {
    setFilters(newFilters);
  }, []);

  const memoizedFilteredProductList = useMemo(
    () => (
      <FilteredProductList
        showCount={Number(showCount) || 0}
        filters={filters}
      />
    ),
    [showCount, filters],
  );

  const handleButtonClick = useCallback(
    (label: number | string) => () => {
      setActiveButton(label);
    },
    [],
  );

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
              <AdjustmentsHorizontalIcon className={icons} />
              <button onClick={openModal} className="text-2xl font-medium">
                Filter
              </button>
              <Squares2X2Icon className={icons} />
              <CgDisplayFullwidth className="w-14 h-9 xl:w-7" />
            </div>
            <div id="container-result" className="flex">
              <p>
                Showing <span>1 - {Number(showCount) || 0}</span> of{' '}
                <span>32</span> results
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
                max="32"
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
        {memoizedFilteredProductList}
        <FilterModal
          isOpen={isModalOpen}
          onClose={closeModal}
          onApply={applyFilters}
          filters={filters}
        />
      </main>
      <div className="flex justify-center gap-6 pb-10">
        {[1, 2, 3, 'Next'].map((label) => (
          <button
            key={label}
            onClick={handleButtonClick(label)}
            className={`${buttonsCustom} ${
              activeButton === label
                ? 'bg-Goldenrod text-white'
                : 'bg-warm-cream text-black border-2 border-gray-100'
            }`}
          >
            {label}
          </button>
        ))}
      </div>
      <SectionQuality />
    </section>
  );
}

export default ShopPage;
