import React, { useState, useRef, useEffect } from 'react';

interface HoverModalProps {
  children: React.ReactNode;
  previewImage: string;
  previewAlt: string;
  title: string;
  description: string;
}

export const HoverModal: React.FC<HoverModalProps> = ({
  children,
  previewImage,
  previewAlt,
  title,
  description
}) => {
  const [isHovered, setIsHovered] = useState(false);
  const [modalPosition, setModalPosition] = useState({ x: 0, y: 0 });
  const hoverRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (isHovered && hoverRef.current) {
        const rect = hoverRef.current.getBoundingClientRect();
        const modalWidth = 320;
        const modalHeight = 240;
        
        // Position modal to the right of the cursor with some offset
        let x = e.clientX + 20;
        let y = e.clientY - modalHeight / 2;
        
        // Adjust if modal would go off screen
        if (x + modalWidth > window.innerWidth) {
          x = e.clientX - modalWidth - 20;
        }
        
        if (y < 10) {
          y = 10;
        } else if (y + modalHeight > window.innerHeight - 10) {
          y = window.innerHeight - modalHeight - 10;
        }
        
        setModalPosition({ x, y });
      }
    };

    if (isHovered) {
      document.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [isHovered]);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <>
      <div
        ref={hoverRef}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        className="relative"
      >
        {children}
      </div>
      
      {isHovered && (
        <div
          ref={modalRef}
          className="fixed z-50 pointer-events-none"
          style={{
            left: `${modalPosition.x}px`,
            top: `${modalPosition.y}px`,
          }}
        >
          <div className="bg-white rounded-lg shadow-2xl border border-gray-200 overflow-hidden w-80 transform transition-all duration-200 ease-out">
            <img
              src={previewImage}
              alt={previewAlt}
              className="w-full h-48 object-cover"
              style={{ width: '320px', height: '192px' }}
            />
          </div>
        </div>
      )}
    </>
  );
};