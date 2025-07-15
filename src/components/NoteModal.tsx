import React from 'react';
import { X } from 'lucide-react';

interface Note {
  id: string;
  title: string;
  content: string;
  date: string;
  fullContent?: string;
}

interface NoteModalProps {
  note: Note | null;
  isOpen: boolean;
  onClose: () => void;
}

export const NoteModal: React.FC<NoteModalProps> = ({ note, isOpen, onClose }) => {
  if (!isOpen || !note) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
      <div className="bg-white rounded-lg max-w-2xl w-full max-h-[80vh] overflow-y-auto">
        <div className="p-6">
          <div className="flex justify-between items-start mb-4">
            <h2 className="text-lg font-normal">{note.title}</h2>
            <button
              onClick={onClose}
              className="text-gray-500 hover:text-gray-700 transition-colors duration-150"
            >
              <X size={20} />
            </button>
          </div>
          
          <div className="mb-4">
            <p className="text-sm text-gray-600 whitespace-pre-line leading-6">
              {note.fullContent || note.content}
            </p>
          </div>
          
          <div className="text-xs text-gray-500">
            {note.date}
          </div>
        </div>
      </div>
    </div>
  );
};