import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

type CategoriesListProps = {
    title: string;
    isDeletable?: boolean;
    isDisabled?: boolean;
    className?: string;
    onButtonClick?: () => void;
  };
export default function CategoriesList({title, isDisabled, isDeletable, className, onButtonClick} : CategoriesListProps ){
    return (
        <div className={`w-full mb-3 p-2 flex flex-row rounded ${isDisabled? `bg-gray-100 text-gray-500` : `bg-white shadow-lg`} ${className}`} >
            <h4 className="text-left">{title || 'Category'}</h4>
            {(!isDisabled && isDeletable) && (
                <button className="ml-auto text-red-500 h-8 w-8 rounded-full hover:bg-red-200 active:text-red-300"
                    onClick={onButtonClick}
                >
                    <FontAwesomeIcon icon={faTrash} />
                </button>
            )}
        </div>
    )
}