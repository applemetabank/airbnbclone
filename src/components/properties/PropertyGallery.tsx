import { useState } from 'react';
import { Dialog, DialogContent } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Expand } from 'lucide-react';
import { cn } from '@/lib/utils';

interface PropertyGalleryProps {
  images: string[];
  selectedIndex: number;
  onSelect: (index: number) => void;
}

export function PropertyGallery({
  images,
  selectedIndex,
  onSelect,
}: PropertyGalleryProps) {
  const [showFullscreen, setShowFullscreen] = useState(false);

  const handlePrevious = () => {
    onSelect(selectedIndex === 0 ? images.length - 1 : selectedIndex - 1);
  };

  const handleNext = () => {
    onSelect(selectedIndex === images.length - 1 ? 0 : selectedIndex + 1);
  };

  return (
    <>
      <div className="relative rounded-lg overflow-hidden">
        <div className="grid grid-cols-4 gap-2 aspect-[16/9]">
          <div className="col-span-2 row-span-2 relative group">
            <img
              src={images[0]}
              alt="Main property image"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </div>
          <div className="relative group">
            <img
              src={images[1]}
              alt="Property image"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </div>
          <div className="relative group">
            <img
              src={images[2]}
              alt="Property image"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </div>
          <div className="relative group">
            <img
              src={images[3]}
              alt="Property image"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </div>
          <div className="relative group">
            <img
              src={images[4]}
              alt="Property image"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />
          </div>
        </div>

        <Button
          variant="secondary"
          size="icon"
          className="absolute bottom-4 right-4"
          onClick={() => setShowFullscreen(true)}
        >
          <Expand className="h-4 w-4" />
        </Button>
      </div>

      <Dialog open={showFullscreen} onOpenChange={setShowFullscreen}>
        <DialogContent className="max-w-7xl h-[90vh]">
          <div className="relative h-full">
            <img
              src={images[selectedIndex]}
              alt={`Property image ${selectedIndex + 1}`}
              className="w-full h-full object-contain"
            />
            
            <Button
              variant="secondary"
              size="icon"
              className="absolute left-4 top-1/2 -translate-y-1/2"
              onClick={handlePrevious}
            >
              <ChevronLeft className="h-4 w-4" />
            </Button>
            
            <Button
              variant="secondary"
              size="icon"
              className="absolute right-4 top-1/2 -translate-y-1/2"
              onClick={handleNext}
            >
              <ChevronRight className="h-4 w-4" />
            </Button>

            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
              {images.map((_, index) => (
                <button
                  key={index}
                  className={cn(
                    'w-2 h-2 rounded-full transition-colors',
                    index === selectedIndex
                      ? 'bg-primary'
                      : 'bg-primary/30 hover:bg-primary/50'
                  )}
                  onClick={() => onSelect(index)}
                />
              ))}
            </div>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
}