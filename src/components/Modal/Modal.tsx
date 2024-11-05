type Props = {
  imageUrl: string;
  onClose: () => void;
};

const Modal = ({ imageUrl, onClose }: Props) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center"
      onClick={() => onClose()}
    >
      <div className="bg-white p-4 rounded-lg">
        <img
          src={imageUrl}
          alt="Large view"
          className="w-[300px] h-[300px] object-cover"
        />
        <button
          onClick={onClose}
          className="mt-4 bg-red-500 text-white px-4 py-2 rounded"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
