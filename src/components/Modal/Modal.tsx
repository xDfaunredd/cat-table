import { IoMdCloseCircleOutline } from "react-icons/io";

type Props = {
  imageUrl: string;
  onClose: () => void;
};

const Modal = ({ imageUrl, onClose }: Props) => {
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center  "
      onClick={() => onClose()}
    >
      <div className="bg-white p-10 rounded-lg relative">
        <img
          src={imageUrl}
          alt="Large view"
          className="w-[300px] h-[300px] object-cover"
        />
        <button
          onClick={onClose}
          className=" bg-transparent text-white  rounded absolute top-2 right-2"
        >
          <IoMdCloseCircleOutline color="red" className="text-4xl" />
        </button>
      </div>
    </div>
  );
};

export default Modal;
