import React, { useState } from 'react';

const Image = () => {
  const [images, setImages] = useState([]);

  const add = () => {
    const newImage = { id: Date.now(), width: 900, height: 500 };
    setImages([...images, newImage]);
  };

  const increase = (id) => {
    setImages((prevImages) =>
      prevImages.map((image) =>
        image.id === id ? { ...image, width: 1500, height: 800 } : image
      )
    );
  };

  const decrease = (id) => {
    setImages((prevImages) =>
      prevImages.map((image) =>
        image.id === id ? { ...image, width: 250, height: 150 } : image
      )
    );
  };

  const deleteImg = (id) => {

    const updatedImages = images.filter((image) => image.id !== id);
    setImages(updatedImages);
  };

  return (
    <div>
      {images.map((image) => (
        <div key={image.id}>
          <a href="https://www.metro.tokyo.lg.jp/">
            <div id="img">
            <img
            id={`tokyo-${image.id}`}
            src={process.env.PUBLIC_URL + '/images/tokyo.jpg'}
            alt="Tokyo, Shinjuku"
            title="Tokyo, Shinjuku"
            width={image.width}
            height={image.height}
          />
            </div>
          </a>
        </div>
      ))}
      <div id="img"></div>
      <p>
        <button onClick={add}>Додати</button>

        <button onClick={() => increase(images[images.length - 1]?.id)}>
          Збільшити
        </button>
        <button onClick={() => decrease(images[images.length - 1]?.id)}>
          Зменшити
        </button>
        <button onClick={() => deleteImg(images[images.length - 1]?.id)}>Видалити</button>
      </p>
    </div>
  );
};

export default Image;
