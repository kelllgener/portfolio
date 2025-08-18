import { useEffect } from "react";

interface Props {
	show: boolean;
	onClose: () => void;
}


const Modal = ({ show, onClose }: Props) => {
	if (!show) return null;
	return (
		<div className="fixed inset-0 flex items-center justify-center bg-black/50 z-50">
			<div
				className="bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-2xl transform transition-all 
                       animate-bounceIn max-w-sm w-full text-center"
			>
				<h2 className="text-lg font-semibold text-black dark:text-white">
					Download Complete
				</h2>
				<p className="text-sm text-gray-600 dark:text-gray-400 mt-2">
					Your resume has been downloaded successfully.
				</p>

				<button
					onClick={onClose}
					className="mt-4 px-4 py-2 rounded-xl bg-teal-600 text-white hover:bg-teal-700 transition"
				>
					Close
				</button>
			</div>
		</div>
	);
};

export default Modal;
