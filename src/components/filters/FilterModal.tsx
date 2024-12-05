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
    const { name, checked } = e.target;
    setLocalFilters((prevFilters) => ({
      ...prevFilters,
      [name]: checked,
    }));
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
      <div className="bg-white p-6 rounded shadow-md max-w-md w-full">
        <h2 className="text-xl font-bold mb-4">Filter Products</h2>
        <label className="block mb-2">
          <input
            type="checkbox"
            name="price"
            checked={localFilters.price}
            {...checkboxProps}
          />
          Price
        </label>
        <label className="block mb-2">
          <input
            type="checkbox"
            name="discount"
            checked={localFilters.discount}
            {...checkboxProps}
          />
          Discount
        </label>
        <label className="block mb-2">
          <input
            type="checkbox"
            name="name"
            checked={localFilters.name}
            {...checkboxProps}
          />
          Name
        </label>
        <label className="block mb-2">
          <input
            type="checkbox"
            name="new"
            checked={localFilters.new}
            {...checkboxProps}
          />
          New
        </label>
        <label className="block mb-4">
          <input
            type="checkbox"
            name="all"
            checked={localFilters.all}
            {...checkboxProps}
          />
          All
        </label>
        <div className="flex justify-end space-x-2">
          <button {...applyButtonProps}>Apply</button>
          <button {...closeButtonProps}>Close</button>
        </div>
      </div>
    </div>
  );
}

export default FilterModal;
