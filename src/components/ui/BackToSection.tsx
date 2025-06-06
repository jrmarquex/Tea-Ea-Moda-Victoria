
import React from 'react';
import { Button } from '@/components/ui/button';
import { ArrowLeft } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface BackToSectionProps {
  sectionId?: string;
}

export const BackToSection: React.FC<BackToSectionProps> = ({ sectionId }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate('/');
    
    // After navigation, scroll to the specific section if provided
    if (sectionId) {
      setTimeout(() => {
        const element = document.getElementById(sectionId);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    }
  };

  return (
    <Button 
      onClick={handleBackClick}
      variant="outline" 
      size="icon"
      className="fixed left-6 top-28 z-40 bg-white/80 backdrop-blur-sm hover:bg-white shadow-md"
    >
      <ArrowLeft size={20} />
    </Button>
  );
};
