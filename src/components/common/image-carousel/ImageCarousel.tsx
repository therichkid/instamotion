import { useEffect, useState } from 'react';
import './ImageCarousel.scss';

interface Props {
  images: string[];
}

const ImageCarousel = (props: Props) => {
  let [currentIndex, setCurrentIndex] = useState<number>(0);
  let [currentImage, setCurrentImage] = useState<string>('');

  useEffect(() => {
    if (props.images.length) {
      const image = props.images[0];

      setCurrentIndex(0);
      setCurrentImage(image);
    }
  }, [props.images]);

  const nextImage = () => {
    let nextIndex: number;
    if (currentIndex === props.images.length - 1) {
      nextIndex = 0;
    } else {
      nextIndex = currentIndex + 1;
    }
    const image = props.images[nextIndex];

    setCurrentImage(image);
    setCurrentIndex(nextIndex);
  };

  const prevImage = () => {
    let prevIndex: number;
    if (currentIndex === 0) {
      prevIndex = props.images.length - 1;
    } else {
      prevIndex = currentIndex - 1;
    }

    const image = props.images[prevIndex];

    setCurrentImage(image);
    setCurrentIndex(prevIndex);
  };

  return (
    <div className="image-carousel">
      <img src={currentImage} alt="" />

      <button onClick={prevImage} className=" prev-button">
        &#8249;
      </button>
      <button onClick={nextImage} className=" next-button">
        &#8250;
      </button>

      <div className="position-indicator">
        {currentIndex + 1} of {props.images.length}
      </div>
    </div>
  );
};

export default ImageCarousel;
