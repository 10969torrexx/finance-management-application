import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

type CategoriesListProps = {
    title: string;
    isDeletable?: boolean;
    isDisabled?: boolean;
  };
export default function CategoriesList({title, isDisabled, isDeletable} : CategoriesListProps ){
    return (
        <div className={`w-full mb-3 p-4 flex flex-row gap-4 rounded ${isDisabled? `bg-gray-100 text-gray-500` : `bg-white shadow-lg`}`}>
            <h4 className="text-left">{title}</h4>
            {(!isDisabled && isDeletable) && (
                <button className="ml-auto text-red-500 hover:text-red-700">
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            )}
        </div>
    )
}