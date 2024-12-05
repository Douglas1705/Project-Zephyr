import { useEffect } from 'react';

interface ConfirmationMessageProps {
  message: string;
  onClose: () => void;
}

function ConfirmationMessage({ message, onClose }: ConfirmationMessageProps) {
  useEffect(() => {
    const timer = setTimeout(onClose, 10000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div className="fixed top-4 inset-x-0 mx-auto bg-green-500 text-white px-4 py-2 rounded shadow-lg text-center max-w-md">
      {message}
    </div>
  );
}

export default ConfirmationMessage;
