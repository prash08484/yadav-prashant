import { useState, useEffect, useRef } from 'react';
import { FiX } from 'react-icons/fi';
import { Corner } from '../../../types';
import { sherriiMessages } from '../../../data/sherrii-messages';
import { Toast } from '../../ui/Toast';
import { getCornerClasses, getRandomCorner } from '../../../utils/sherrii-positions';

const useAnnoyingMessages = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [currentMessage, setCurrentMessage] = useState(sherriiMessages[0]);
  const [isTyping, setIsTyping] = useState(false);
  const [currentCorner, setCurrentCorner] = useState<Corner>('bottom-right');
  const [isDismissed, setIsDismissed] = useState(false);

  useEffect(() => {
    if (isDismissed) {
      setIsOpen(false);
      return;
    }
    const showSherrii = () => {
      if (!isOpen && !isDismissed) {
        setCurrentCorner(getRandomCorner());
        setCurrentMessage(sherriiMessages[Math.floor(Math.random() * sherriiMessages.length)]);
        setIsOpen(true);
      }
    };
    const initialDelay = Math.random() * 5000 + 3000;
    const initialTimer = setTimeout(showSherrii, initialDelay);
    const interval = setInterval(() => {
      if (!isOpen && !isDismissed) {
        const randomDelay = Math.random() * 60000 + 30000;
        setTimeout(showSherrii, randomDelay);
      }
    }, 10000);
    return () => {
      clearTimeout(initialTimer);
      clearInterval(interval);
    };
  }, [isOpen, isDismissed]);

  useEffect(() => {
    if (!isOpen || isDismissed) return;
    const interval = setInterval(() => {
      if (isDismissed) {
        clearInterval(interval);
        return;
      }
      setIsTyping(true);
      setTimeout(() => {
        if (isDismissed) return;
        setCurrentMessage(sherriiMessages[Math.floor(Math.random() * sherriiMessages.length)]);
        setIsTyping(false);
        if (Math.random() < 0.3) setCurrentCorner(getRandomCorner());
      }, 500);
    }, 7000);
    return () => clearInterval(interval);
  }, [isOpen, isDismissed]);

  const handleDismiss = () => {
    setIsDismissed(true);
    setIsOpen(false);
  };

  const restartMessages = () => {
    setIsDismissed(false);
    setCurrentCorner(getRandomCorner());
    setCurrentMessage(sherriiMessages[Math.floor(Math.random() * sherriiMessages.length)]);
    setIsOpen(true);
  };

  return { 
    isOpen, 
    currentMessage, 
    isTyping, 
    currentCorner, 
    isDismissed, 
    setIsOpen, 
    setIsDismissed: handleDismiss,
    restartMessages
  };
};

const SherriiBubble = ({ message, isTyping, onClose }: { message: string; isTyping: boolean; onClose: () => void }) => (
  <div className="flex items-center gap-3 bg-white dark:bg-neutral-800 border border-neutral-200 dark:border-neutral-700 rounded-full shadow-2xl px-4 py-3 pr-2 max-w-[calc(100vw-3rem)]">
    <div className="flex-shrink-0 w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-600 rounded-full flex items-center justify-center">
      <span className="text-xl">👩</span>
    </div>
    <div className="flex-1 min-w-0 max-w-[200px]">
      {isTyping ? (
        <div className="flex gap-1">
          <span className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '0ms' }} />
          <span className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '150ms' }} />
          <span className="w-2 h-2 bg-neutral-400 rounded-full animate-bounce" style={{ animationDelay: '300ms' }} />
        </div>
      ) : (
        <p className="text-neutral-900 dark:text-neutral-100 text-xs font-medium break-words whitespace-pre-wrap">
          {message}
        </p>
      )}
    </div>
    <button
      onClick={onClose}
      className="flex-shrink-0 text-neutral-400 hover:text-neutral-600 dark:hover:text-neutral-200 transition-colors p-1.5 hover:rotate-90 duration-300 rounded-full hover:bg-neutral-100 dark:hover:bg-neutral-700"
      aria-label="Close"
    >
      <FiX className="w-4 h-4" />
    </button>
  </div>
);

// Cute Butterfly Component with Nudge Animation
const CuteButterfly = ({ isDragging }: { isDragging: boolean }) => (
  <div className={`relative w-16 h-16 sm:w-20 sm:h-20 ${isDragging ? '' : 'animate-nudge'}`}>
    <svg
      viewBox="0 0 100 100"
      className="w-full h-full"
      style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.15))' }}
    >
      {/* Upper Left Wing */}
      <ellipse cx="30" cy="35" rx="20" ry="25" fill="#ff6b9d" opacity="0.9" />
      <ellipse cx="30" cy="35" rx="15" ry="20" fill="#ff8fab" />
      <ellipse cx="25" cy="30" rx="8" ry="10" fill="#ffb3d9" />
      
      {/* Upper Right Wing */}
      <ellipse cx="70" cy="35" rx="20" ry="25" fill="#ff6b9d" opacity="0.9" />
      <ellipse cx="70" cy="35" rx="15" ry="20" fill="#ff8fab" />
      <ellipse cx="75" cy="30" rx="8" ry="10" fill="#ffb3d9" />
      
      {/* Lower Left Wing */}
      <ellipse cx="30" cy="65" rx="20" ry="25" fill="#c77dff" opacity="0.9" />
      <ellipse cx="30" cy="65" rx="15" ry="20" fill="#d89eff" />
      <ellipse cx="25" cy="70" rx="8" ry="10" fill="#e6b3ff" />
      
      {/* Lower Right Wing */}
      <ellipse cx="70" cy="65" rx="20" ry="25" fill="#c77dff" opacity="0.9" />
      <ellipse cx="70" cy="65" rx="15" ry="20" fill="#d89eff" />
      <ellipse cx="75" cy="70" rx="8" ry="10" fill="#e6b3ff" />
      
      {/* Body */}
      <ellipse cx="50" cy="50" rx="4" ry="35" fill="#4a5568" />
      <ellipse cx="50" cy="45" rx="3" ry="8" fill="#2d3748" />
      
      {/* Antennae */}
      <line x1="50" y1="15" x2="45" y2="10" stroke="#2d3748" strokeWidth="2" strokeLinecap="round" />
      <line x1="50" y1="15" x2="55" y2="10" stroke="#2d3748" strokeWidth="2" strokeLinecap="round" />
      <circle cx="45" cy="10" r="2" fill="#ff6b9d" />
      <circle cx="55" cy="10" r="2" fill="#ff6b9d" />
      
      {/* Wing Patterns - Left Upper */}
      <circle cx="25" cy="30" r="3" fill="#ffffff" opacity="0.7" />
      <circle cx="32" cy="38" r="2" fill="#ffffff" opacity="0.5" />
      
      {/* Wing Patterns - Right Upper */}
      <circle cx="75" cy="30" r="3" fill="#ffffff" opacity="0.7" />
      <circle cx="68" cy="38" r="2" fill="#ffffff" opacity="0.5" />
      
      {/* Wing Patterns - Left Lower */}
      <circle cx="25" cy="70" r="3" fill="#ffffff" opacity="0.7" />
      <circle cx="32" cy="62" r="2" fill="#ffffff" opacity="0.5" />
      
      {/* Wing Patterns - Right Lower */}
      <circle cx="75" cy="70" r="3" fill="#ffffff" opacity="0.7" />
      <circle cx="68" cy="62" r="2" fill="#ffffff" opacity="0.5" />
    </svg>
    
    {/* Nudge Animation Styles */}
    <style>{`
      @keyframes nudge {
        0%, 100% {
          transform: translateX(0) rotate(0deg);
        }
        10% {
          transform: translateX(8px) rotate(-5deg);
        }
        20% {
          transform: translateX(0) rotate(0deg);
        }
        30% {
          transform: translateX(6px) rotate(3deg);
        }
        40% {
          transform: translateX(0) rotate(0deg);
        }
        50% {
          transform: translateX(4px) rotate(-2deg);
        }
        60% {
          transform: translateX(0) rotate(0deg);
        }
        70% {
          transform: translateX(3px) rotate(2deg);
        }
        80% {
          transform: translateX(0) rotate(0deg);
        }
        90% {
          transform: translateX(2px) rotate(-1deg);
        }
        100% {
          transform: translateX(0) rotate(0deg);
        }
      }
      .animate-nudge {
        animation: nudge 2s ease-in-out infinite;
      }
    `}</style>
  </div>
);

export const Sherrii = () => {
  // Sherrii annoying messages feature disabled
  return null;
};