import { useState, useEffect } from 'react';

interface Filters {
  price: boolean;
  discount: boolean;
  name: boolean;
  new: boolean;
  all: boolean;
}

interface FilterModalProps {
  isOpen: boolean;
  onClose: () => void;
  onApply: (_filters: Filters) => void;
  filters: Filters;
}

function FilterModal({ isOpen, onClose, onApply, filters }: FilterModalProps) {
  const [localFilters, setLocalFilters] = useState(filters);

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name } = e.target;
    const updatedFilters = {
      price: false,
      discount: false,
      name: false,
      new: false,
      all: false,
      [name]: e.target.checked,
    };
    setLocalFilters(updatedFilters);
  };

  const handleApplyFilters = () => {
    onApply(localFilters);
    onClose();
  };

  const checkboxProps = {
    onChange: handleCheckboxChange,
    className: 'mr-2',
  };

  const applyButtonProps = {
    onClick: handleApplyFilters,
    className: 'bg-blue-500 text-white px-4 py-2 rounded',
  };

  const closeButtonProps = {
    onClick: onClose,
    className: 'bg-gray-500 text-white px-4 py-2 rounded',
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
      <div className="bg-white bg-opacity-80 p-8 rounded-xl shadow-2xl max-w-lg w-10/12 mx-auto my-8 md:w-full">
        <div className="flex justify-center mb-0">
          <img
            src="https://compasschallenge-furniro-images.s3.us-east-2.amazonaws.com/logo-furniro.svg"
            alt="Logo"
            className="w-24 h-24"
          />
        </div>
        <h2 className="text-3xl text-center font-bold mb-10 text-Goldenrod">
          Filter Properties
        </h2>
        <div className="space-y-4">
          <label className="flex items-center custom-checkbox">
            <input
              type="checkbox"
              name="price"
              checked={localFilters.price}
              {...checkboxProps}
            />
            <span className="text-gray-800 font-semibold text-xl">Price</span>
          </label>
          <label className="flex items-center custom-checkbox">
            <input
              type="checkbox"
              name="discount"
              checked={localFilters.discount}
              {...checkboxProps}
            />
            <span className="text-gray-800 font-semibold text-xl">
              Discount
            </span>
          </label>
          <label className="flex items-center custom-checkbox">
            <input
              type="checkbox"
              name="name"
              checked={localFilters.name}
              {...checkboxProps}
            />
            <span className="text-gray-800 font-semibold text-xl">Name</span>
          </label>
          <label className="flex items-center custom-checkbox">
            <input
              type="checkbox"
              name="new"
              checked={localFilters.new}
              {...checkboxProps}
            />
            <span className="text-gray-800 font-semibold text-xl">New</span>
          </label>
          <label className="flex items-center custom-checkbox">
            <input
              type="checkbox"
              name="all"
              checked={localFilters.all}
              {...checkboxProps}
            />
            <span className="text-gray-800 font-semibold text-xl">All</span>
          </label>
        </div>
        <div className="flex justify-end mt-6 space-x-3">
          <button
            {...applyButtonProps}
            className="bg-white text-black px-6 py-3 rounded-md hover:bg-Goldenrod hover:text-white transition duration-200 shadow-md"
          >
            Apply
          </button>
          <button
            {...closeButtonProps}
            className="bg-gray-300 text-gray-800 px-6 py-3 rounded-md hover:bg-gray-400 transition duration-200 shadow-md"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}
{
  ('codigo funcionando');
}
export default FilterModal;
