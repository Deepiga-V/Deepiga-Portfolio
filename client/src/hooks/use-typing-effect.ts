import { useState, useEffect } from 'react';

interface UseTypingEffectProps {
  texts: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseBeforeDelete?: number;
  pauseBeforeType?: number;
}

export function useTypingEffect({
  texts,
  typingSpeed = 150,
  deletingSpeed = 50,
  pauseBeforeDelete = 1000,
  pauseBeforeType = 300
}: UseTypingEffectProps) {
  const [textIndex, setTextIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    if (!texts.length) return;

    const currentText = texts[textIndex];
    let timeout: ReturnType<typeof setTimeout>;

    if (isDeleting) {
      // Delete a character
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex - 1));
        setCharIndex(prev => prev - 1);
        
        // If all characters are deleted
        if (charIndex <= 1) {
          setIsDeleting(false);
          setTextIndex((prev) => (prev + 1) % texts.length);
          setTimeout(() => {
            setCharIndex(0);
          }, pauseBeforeType);
        }
      }, deletingSpeed);
    } else {
      // Type a character
      timeout = setTimeout(() => {
        setDisplayText(currentText.substring(0, charIndex + 1));
        setCharIndex(prev => prev + 1);
        
        // If all characters are typed
        if (charIndex >= currentText.length) {
          setTimeout(() => {
            setIsDeleting(true);
          }, pauseBeforeDelete);
        }
      }, typingSpeed);
    }

    return () => clearTimeout(timeout);
  }, [texts, textIndex, charIndex, isDeleting, typingSpeed, deletingSpeed, pauseBeforeDelete, pauseBeforeType]);

  return displayText;
}
