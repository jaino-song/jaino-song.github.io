"use client";
import { ReactNode, useEffect, useState, cloneElement, isValidElement } from "react";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    children: ReactNode;
}

const Modal = ({ isOpen, onClose, children }: ModalProps) => {
    const [isClosing, setIsClosing] = useState(false);
    const [shouldRender, setShouldRender] = useState(isOpen);

    useEffect(() => {
        if (isOpen) {
            setShouldRender(true);
            setIsClosing(false);
            document.body.style.overflow = 'hidden';
        }
    }, [isOpen]);

    useEffect(() => {
        return () => {
            document.body.style.overflow = 'unset';
        };
    }, []);

    const handleClose = () => {
        if (isClosing) return; // Prevent double trigger
        setIsClosing(true);
        setTimeout(() => {
            setShouldRender(false);
            document.body.style.overflow = 'unset';
            onClose();
        }, 300);
    };

    if (!shouldRender) return null;

    // Clone children and pass handleClose as onClose prop
    const childrenWithProps = isValidElement(children)
        ? cloneElement(children as React.ReactElement<{ onClose?: () => void }>, { onClose: handleClose })
        : children;

    return (
        <div 
            className={`fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 ${isClosing ? 'animate-fadeOut' : 'animate-fadeIn'}`}
            onClick={handleClose}
        >
            {/* Overlay with 80% opacity black */}
            <div className={`absolute inset-0 bg-black opacity-80 ${isClosing ? 'animate-fadeOut' : 'animate-fadeIn'}`} />
            
            {/* Modal content - responsive width and height, scrollable */}
            <div 
                className={`relative w-full sm:w-[95vw] md:w-[90vw] lg:w-255 max-w-7xl h-[95vh] sm:h-[90vh] overflow-y-auto bg-Background rounded-xl sm:rounded-[20px] z-10 ${isClosing ? 'animate-scaleOut' : 'animate-scaleIn'}`}
                onClick={(e) => e.stopPropagation()}
            >
                {childrenWithProps}
            </div>
        </div>
    );
};

export default Modal;

