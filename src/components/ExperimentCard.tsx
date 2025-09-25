import React from 'react';
import { HoverModal } from './HoverModal';

interface ExperimentCardProps {
  title: string;
  description: string;
  year: string;
  previewImage: string;
  previewAlt: string;
  onClick?: () => void;
}

export const ExperimentCard: React.FC<ExperimentCardProps> = ({
  title,
  description,
  year,
  previewImage,
  previewAlt,
  onClick
}) => {
  return (
    <HoverModal
      previewImage={previewImage}
      previewAlt={previewAlt}
      title={title}
      description={description}
    >
      <div 
        className="flex justify-between items-start cursor-pointer transition-all duration-150 hover:text-gray-900 hover:font-medium p-2 -m-2 rounded hover:bg-gray-100"
        onClick={onClick}
      >
        <div>
          <h3 className="text-sm">{title}</h3>
          <p className="text-xs text-gray-600 mt-1">
            {description}
          </p>
        </div>
        <span className="text-xs text-gray-500 ml-4">{year}</span>
      </div>
    </HoverModal>
  );
};