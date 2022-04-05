import React, { useState, useEffect } from 'react';
import TagBtn from './TagBtn';
const images = [
    { id: 1, imageName: 'img1.jpg', tag: 'wave' },
    { id: 2, imageName: 'img2.jpg', tag: 'science' },
    { id: 3, imageName: 'img3.jpg', tag: 'wave' },
    { id: 4, imageName: 'img4.jpg', tag: 'wave' },
    { id: 5, imageName: 'img5.jpg', tag: 'science' },
    { id: 6, imageName: 'img6.jpg', tag: 'arts' },
    { id: 7, imageName: 'img7.jpg', tag: 'arts' },
    { id: 8, imageName: 'img8.jpg', tag: 'science' },
    { id: 9, imageName: 'img9.jpg', tag: 'technical' },
    { id: 10, imageName: 'img10.jpg', tag: 'technical' },
    { id: 11, imageName: 'img11.jpg', tag: 'tecnnical' },
    { id: 12, imageName: 'img12.jpg', tag: 'science' },
];

const MainImageGallery = () => {
    const [tag, setTag] = useState("all");
    const [filterImg, setFilterImg] = useState([]);
    useEffect(() => {
        tag === 'all' ? setFilterImg(images) : setFilterImg(images.filter(image => image.tag === tag))

    }, [tag]);

    return (
        <>
            <div className='btn-box'>
                <TagBtn name="all" handleSetTag={setTag} />
                <TagBtn name="science" handleSetTag={setTag} />
                <TagBtn name="technical" handleSetTag={setTag} />
                <TagBtn name="arts" handleSetTag={setTag} />
                <TagBtn name="wave" handleSetTag={setTag} />
                
            </div>

            <div className='container img-container'>
                {filterImg.map(image => 
                <div key={image.id} className="image-card">
                    <img className='image' src={`/images/${image.imageName}`} alt="" />
                </div>
                )}
            </div>
        </>
    )
}

export default MainImageGallery