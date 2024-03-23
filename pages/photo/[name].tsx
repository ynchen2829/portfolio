import fs from 'fs';
import { useRouter } from 'next/router';
import path from 'path';
import Nav from '../components/photo_nav';

function Gallery(photoList:any) {
  const router = useRouter();
  const name = router.query["name"];
  console.log("gallery name is "+name);
  return (
    <div className="bg-gray-100 min-h-screen">
      <Nav></Nav>
      <div className="fixed bottom-5 right-0 mb-8 mr-8">
        <a href={'/book'}className=" bg-white text-gray-800 hover:text-gray-500 font-bold py-2 px-4 rounded underline">
          Book a Session
        </a>
      </div>
      <main className="max-w-5xl mx-auto px-4 py-8">
        <div className="columns-2 gap-6">
          {photoList.photoList.map((photo:any) => (
            <div key={photo} className="group relative mb-4">
              <img width={300} height={500} src={`/photo/${name}/${photo}`} alt="" className="w-full h-auto" />
              {/* this is for showing the name of the photo when hovered */}
              {/* <div className="opacity-0 group-hover:opacity-100 absolute inset-0 flex justify-center items-center bg-black bg-opacity-75 transition-opacity">
                <p className="text-white text-lg">{photo}</p>
              </div> */}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export async function getStaticProps(context:any) {
  const name = context.params.name;
  const photosDirectory = path.join(process.cwd(), '/public/photo/'+name);
  let photoList = fs.readdirSync(photosDirectory);
  photoList = photoList.filter(item => !(/(^|\/)\.[^\/\.]/g).test(item));

  return {
    props: {
      photoList,
    },
  };
}

export const getStaticPaths = async () => {

  return {
      paths: [{params: { name: 'engagement' }},
              {params: { name: 'food' }},
              // {params: { name: 'graduation' }},
              {params: { name: 'through_my_eyes' }},
              {params: { name: 'travel' }},
             ], //indicates that no page needs be created at build time
      fallback: 'blocking' //indicates the type of fallback
  }
}

export default Gallery;