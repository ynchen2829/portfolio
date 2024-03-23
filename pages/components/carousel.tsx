import { useState } from 'react';

interface CarouselProps {
    slides: string[];
  }

const Carousel :React.FC<CarouselProps> =({slides}) => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const changeSlide = (index:number) => {
        setCurrentSlide(index);
    };

    if (!slides || slides.length === 0) {
        return null; // or some placeholder
    }

    return (
        <div className="carousel w-full relative">
            {slides.map((slide, index) => (
                <div key={index} className={`carousel-item relative w-full ${index === currentSlide ? 'block' : 'hidden'}`}>
                    <img src={slide} className="w-full" />
                </div>
            ))}
            {/* Navigation Buttons */}
            <div className="absolute inset-0 flex justify-between items-center">
                <button
                    onClick={() => changeSlide((currentSlide - 1 + slides.length) % slides.length)}
                    className="btn btn-circle bg-white bg-opacity-75 p-2 rounded-full shadow-lg text-xl z-10"
                    aria-label="Previous slide"
                    style={{ marginLeft: '10px' }}
                >
                    ❮
                </button>
                <button
                    onClick={() => changeSlide((currentSlide + 1) % slides.length)}
                    className="btn btn-circle bg-white bg-opacity-75 p-2 rounded-full shadow-lg text-xl z-10"
                    aria-label="Next slide"
                    style={{ marginRight: '10px' }}
                >
                    ❯
                </button>
            </div>
        </div>
    );
};

export default Carousel;
