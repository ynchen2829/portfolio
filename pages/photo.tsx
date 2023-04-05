import React from 'react';
import NavBar from './nav';
import Image from 'next/image';

const photos = [
  { src: '/Home/grad.jpeg', caption: 'Graduation', url:'/photo/graduation' },
  { src: '/Home/travel.jpeg', caption: 'Travel', url:'/photo/travel' },
  { src: '/Home/engagement.jpg', caption: 'Engagement', url:'/photo/engagement' },
  { src: '/Home/ramen.jpeg', caption: 'Food', url:'/photo/food' },
  { src: '/Home/goat.jpg', caption: 'Through My Eyes', url:'/photo/through_my_eyes' },
  { src: '/Home/video.jpg', caption: 'Film Production' , url:'https://vimeo.com/user143122670'},
];

function Photo(){
  return (
    <div className="min-h-screen">
      <NavBar></NavBar>
      <div className="fixed bottom-0 right-0 mb-8 mr-8">
    </div>
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="columns-3xs gap-4">
          {photos.map((photo) => (
            <div key={photo.src} className="group relative mb-4">
              <Image
                src={photo.src}
                alt={photo.caption}
                className="w-full h-auto"
              />
              <a href={photo.url}>
              <div className="opacity-0 group-hover:opacity-100 absolute inset-0 flex justify-center items-center bg-black bg-opacity-75 transition-opacity">
                <p className="text-white text-lg">{photo.caption}</p>
              </div>
              </a>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Photo;
