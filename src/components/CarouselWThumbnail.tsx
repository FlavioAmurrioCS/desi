import { useState } from "react";
import { Carousel, CarouselItem } from "reactstrap";

type CarouselWThumbnailProps = {
  data: string[];
};

export default function CarouselWThumbnail({ data }: CarouselWThumbnailProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const [animating, setAnimating] = useState(false);

  const onExiting = () => setAnimating(true);

  const onExited = () => setAnimating(false);

  const next = () => {
    if (animating) return;
    const nextIndex = activeIndex === data.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex = activeIndex === 0 ? data.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (i: number) => {
    if (animating) return;
    setActiveIndex(i);
  };

  const slides = data.map((data, i) => {
    return (
      <CarouselItem onExiting={onExiting} onExited={onExited} key={i}>
        <img src={data} alt="Building" />
      </CarouselItem>
    );
  });

  return (
    <div className="carousel-container">
      <ol className="carousel-indicators">
        {data.map((item, index) => {
          return (
            <li
              key={index}
              onClick={() => goToIndex(index)}
              className={index === activeIndex ? "" : "inactive-item"}
              style={{ backgroundImage: `url(${item})` }}
            />
          );
        })}
      </ol>
      <Carousel activeIndex={activeIndex} next={next} previous={previous}>
        {slides}
      </Carousel>
    </div>
  );
}
