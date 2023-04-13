import Head from 'next/head';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css"
import Nav from '../nav';

const photosG = [
  { src: '/photo/graduation/IMG_05-min.jpg', caption: 'Senior portrait 2' },
  { src: '/photo/graduation/IMG_14-min.jpeg', caption: 'Senior portrait 3' },
  { src: '/photo/graduation/IMG_01-min.jpeg', caption: 'Senior portrait 4' },
  { src: '/photo/graduation/IMG_02-min.jpg', caption: 'Senior portrait 3' },
  { src: '/photo/graduation/IMG_04-min.jpg', caption: 'Senior portrait 4' },
  { src: '/photo/graduation/IMG_06-min.jpeg', caption: 'Senior portrait 4' },
  { src: '/photo/graduation/IMG_08-min.jpeg', caption: 'Senior portrait 4' },
  { src: '/photo/graduation/IMG_12-min.jpg', caption: 'Senior portrait 4' },
  { src: '/photo/graduation/IMG_13-min.jpeg', caption: 'Senior portrait 4' },
  { src: '/photo/graduation/IMG_15-min.jpeg', caption: 'Senior portrait 4' },
  { src: '/photo/graduation/IMG_16-min.jpg', caption: 'Senior portrait 4' },
  { src: '/photo/graduation/IMG_17-min.jpeg', caption: 'Senior portrait 4' },
];

const photos = [
    { src: '/photo/graduation/IMG_0-min.jpg', caption: 'Senior portrait 1' },
    { src: '/photo/graduation/IMG_11-min.jpeg', caption: 'Senior portrait 2' },
    { src: '/photo/graduation/IMG_03-min.jpeg', caption: 'Senior portrait 1' },
];

export default function graduation() {
    
  return (
    <div className='bg-orange-100'>
        <Nav></Nav>
      <Head>
        <title>Graduation Portraits</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="bg-gradient-to-b from-amber-800 to-amber-600 text-white max-w-screen mx-auto flex flex-col md:flex-row items-center md:items-stretch">
        <div className="w-1/2 ml-40 my-10">
            <h1 className="text-4xl font-bold mb-4">Let&apos;s Celebrate!</h1>
            <p className="text-2xl mb-4 leading-loose whitespace-pre-wrap">
            You did it! Hook &apos;em horns! 🤘🎓<br className='mt-2'/>
            From the Tower to the Main Mall, <br className='mt-2'/>
            You have made unforgettable memories on campus,<br className='mt-2'/>
            Those memories are deserved to be recorded professionally!
            </p>
        </div>
        <div className="w-1/2 ">
            <img src={photos[0].src} alt="Image Description" className="w-full h-auto"/>
        </div>
        </div>
        <div className="custom-shape-divider-top-1681358446">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M602.45,3.86h0S572.9,116.24,281.94,120H923C632,116.24,602.45,3.86,602.45,3.86Z" className="shape-fill"></path>
            </svg>
        </div>

        {/* photo gallery */}
        <div className='max-w-screen flex-col md:flex-row items-center md:items-stretch bg-orange-100'>
        <div>
            <div className="pt-10 px-5 flex items-center justify-center w-3/4 m-auto"> 
                <Carousel autoPlay >
                {photosG.map((photo,index) => (
                <div key={index}>
                    <img src={photo.src} className="max-h-[75vh] hover:max-h-screen object-contain hover:object-fill"/>
                </div>
                ))}
                </Carousel>
            </div>
        </div>
        </div>

        <div className="custom-shape-divider-top-1681358631">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" className="shape-fill"></path>
                <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" className="shape-fill"></path>
                <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" className="shape-fill"></path>
            </svg>
        </div>

        <div className="bg-gradient-to-b from-amber-700 via-amber-700 to-orange-100 text-white max-w-screen mx-auto flex flex-col md:flex-row items-center md:items-stretch">
        <div className="w-1/2 ">
            <img src={photos[1].src} alt="Image Description" className="w-full h-auto"/>
        </div>
        <div className="w-1/2 ml-40 my-10 mr-20 leading-10">
            <h1 className="text-5xl font-bold mb-4 mt-20">Individual Package</h1>
            <div className="text-white text-xl">
                <p>Base Rate $100, includes</p>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10">
                    <div className="relative mb-12 px-3 lg:mb-0">
                        <div className="mb-2 flex justify-center">
                        <span className="text-primary">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-14 w-14">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                        </svg>
                        </span>
                        </div>
                        <h5 className="mb-6 font-bold text-primary">60</h5>
                        <h6 className="mb-0 font-normal dark:text-neutral-50">Minutes</h6>
                        <div
                        className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 lg:block"></div>
                    </div>
                    <div className="relative mb-12 px-3 lg:mb-0">
                        <div className="mb-2 flex justify-center">
                        <span className="text-primary">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-14 w-14">
                            <path d="M5.68 5.792 7.345 7.75 5.681 9.708a2.75 2.75 0 1 1 0-3.916ZM8 6.978 6.416 5.113l-.014-.015a3.75 3.75 0 1 0 0 5.304l.014-.015L8 8.522l1.584 1.865.014.015a3.75 3.75 0 1 0 0-5.304l-.014.015L8 6.978Zm.656.772 1.663-1.958a2.75 2.75 0 1 1 0 3.916L8.656 7.75Z"/>
                            </svg>
                        </span>
                        </div>
                        <h5 className="mb-6 font-bold text-primary">Unlimited</h5>
                        <h6 className="mb-0 font-normal dark:text-neutral-50">Locations</h6>
                        <div
                        className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 lg:block"></div>
                    </div>
                    <div className="relative mb-12 px-3 lg:mb-0">
                        <div className="mb-2 flex justify-center">
                        <span className="text-primary">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-14 w-14">
                            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                            <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z"/>
                            </svg>
                        </span>
                        </div>
                        <h5 className="mb-6 font-bold text-primary">50-70</h5>
                        <h6 className="mb-0 font-normal dark:text-neutral-50">Color Graded</h6>
                        <div
                        className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 lg:block"></div>
                    </div>

                    <div className="relative mb-12 px-3 lg:mb-0">
                        <div className="mb-2 flex justify-center">
                        <span className="text-primary">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-14 w-14">
                            <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"/>
                            </svg>
                        </span>
                        </div>
                        <h5 className="mb-6 font-bold text-primary">6+</h5>
                        <h6 className="mb-0 font-normal dark:text-neutral-50">Fine Edits</h6>
                        <div
                        className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 lg:block"></div>
                    </div>
                    </div>
                <p>Every hour on top of the shoot:</p>
                <p className="text-bold text-2xl">+$30 ONLY</p>
                <p>Every additional hour, you will receive at least <b>20</b> color graded photos and 3 fine edits.</p>
            </div>

            <p className='text-white mt-10'>*Fine edits include touches on messy background, clothes wrinkles, facial features, anything you don&apos;t like!</p>
        </div>
        </div>
        
        <div className='h-32 bg-orange-100 p-3 pt-8'>
            <hr className="h-1 mb-2 w-full bg-amber-900 "/>
            <hr className="h-1 my-2 w-full bg-amber-700 "/>
            <hr className="h-1 my-2 w-full bg-amber-500 "/>
            <hr className="h-1 my-2 w-full bg-amber-300"/>
        </div>

        <div className="bg-gradient-to-b from-orange-100 via-orange-300 to-orange-400 text-amber-800 max-w-screen mx-auto flex flex-col md:flex-row items-center md:items-stretch">
        <div className="w-1/2 mr-20 my-10 ml-20 leading-10">
            <h1 className="text-5xl font-bold mb-4">Group Package</h1>
            <div className=" text-xl">
                <p>Base Rate $100, with each additional person +$50</p>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 my-10">
                    <div className="relative mb-12 px-3 lg:mb-0">
                        <div className="mb-2 flex justify-center">
                        <span className="text-primary">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-14 w-14">
                        <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z"/>
                        </svg>
                        </span>
                        </div>
                        <h5 className="mb-6 font-bold text-primary">60</h5>
                        <h6 className="mb-0 font-normal dark:text-neutral-50">Minutes</h6>
                        <div
                        className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 lg:block"></div>
                    </div>
                    <div className="relative mb-12 px-3 lg:mb-0">
                        <div className="mb-2 flex justify-center">
                        <span className="text-primary">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-14 w-14">
                            <path d="M5.68 5.792 7.345 7.75 5.681 9.708a2.75 2.75 0 1 1 0-3.916ZM8 6.978 6.416 5.113l-.014-.015a3.75 3.75 0 1 0 0 5.304l.014-.015L8 8.522l1.584 1.865.014.015a3.75 3.75 0 1 0 0-5.304l-.014.015L8 6.978Zm.656.772 1.663-1.958a2.75 2.75 0 1 1 0 3.916L8.656 7.75Z"/>
                            </svg>
                        </span>
                        </div>
                        <h5 className="mb-6 font-bold text-primary">Unlimited</h5>
                        <h6 className="mb-0 font-normal dark:text-neutral-50">Locations</h6>
                        <div
                        className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 lg:block"></div>
                    </div>
                    <div className="relative mb-12 px-3 lg:mb-0">
                        <div className="mb-2 flex justify-center">
                        <span className="text-primary">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-14 w-14">
                            <path d="M6.002 5.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0z"/>
                            <path d="M1.5 2A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13zm13 1a.5.5 0 0 1 .5.5v6l-3.775-1.947a.5.5 0 0 0-.577.093l-3.71 3.71-2.66-1.772a.5.5 0 0 0-.63.062L1.002 12v.54A.505.505 0 0 1 1 12.5v-9a.5.5 0 0 1 .5-.5h13z"/>
                            </svg>
                        </span>
                        </div>
                        <h5 className="mb-6 font-bold text-primary">30+</h5>
                        <h6 className="mb-0 font-normal dark:text-neutral-50">Color Graded/person</h6>
                        <div
                        className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 lg:block"></div>
                    </div>

                    <div className="relative mb-12 px-3 lg:mb-0">
                        <div className="mb-2 flex justify-center">
                        <span className="text-primary">
                            <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            fill="currentColor"
                            className="h-14 w-14">
                            <path d="M14.778.085A.5.5 0 0 1 15 .5V8a.5.5 0 0 1-.314.464L14.5 8l.186.464-.003.001-.006.003-.023.009a12.435 12.435 0 0 1-.397.15c-.264.095-.631.223-1.047.35-.816.252-1.879.523-2.71.523-.847 0-1.548-.28-2.158-.525l-.028-.01C7.68 8.71 7.14 8.5 6.5 8.5c-.7 0-1.638.23-2.437.477A19.626 19.626 0 0 0 3 9.342V15.5a.5.5 0 0 1-1 0V.5a.5.5 0 0 1 1 0v.282c.226-.079.496-.17.79-.26C4.606.272 5.67 0 6.5 0c.84 0 1.524.277 2.121.519l.043.018C9.286.788 9.828 1 10.5 1c.7 0 1.638-.23 2.437-.477a19.587 19.587 0 0 0 1.349-.476l.019-.007.004-.002h.001"/>
                            </svg>
                        </span>
                        </div>
                        <h5 className="mb-6 font-bold text-primary">5+</h5>
                        <h6 className="mb-0 font-normal dark:text-neutral-50">Fine Edits/person</h6>
                        <div
                        className="absolute right-0 top-0 hidden h-full min-h-[1em] w-px self-stretch border-t-0 bg-gradient-to-tr from-transparent via-neutral-500 to-transparent opacity-25 dark:opacity-100 lg:block"></div>
                    </div>
                    </div>
                <p>Every hour on top of the shoot:</p>
                <p className="text-bold text-2xl">+$20/PERSON ONLY</p>
                <p>Every additional hour, you will receive at least <b>10</b> color graded photos and 2 fine edits per person.</p>
            </div>
        </div>
        <div className="w-1/2">
            <img src={photos[2].src} alt="Image Description" className="w-full h-auto"/>
        </div>
        </div>
        <div className="custom-shape-divider-top-1681357707">
            <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className="shape-fill"></path>
            </svg>
        </div>



        <div className="max-w-5xl mx-auto px-4 mt-10 pb-20">
            <h2 className="text-3xl font-bold text-amber-800 mb-8">Booking Timeline</h2>
            
            {/* timeline component  */}
            <ol className="relative border-l border-amber-200 dark:border-amber-700">                  
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-amber-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-amber-900 dark:bg-amber-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-amber-600 dark:text-amber-500">Day of Booking</time>
                    <h3 className="text-lg font-semibold text-amber-900 dark:text-white">Initial Contact</h3>
                    <p className="mb-4 text-base font-normal text-amber-500 dark:text-amber-600">Within 24 hour of booking, you will be contacted via email (for weChat users, please leave your weChat as well)</p>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-amber-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-amber-900 dark:bg-amber-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-amber-600 dark:text-amber-500">72 Hour Within Booking</time>
                    <h3 className="text-lg font-semibold text-amber-900 dark:text-white">Customized Shooting Plan</h3>
                    <p className="text-base font-normal text-amber-500 dark:text-amber-600">
                        After we establish the initial contact, we can get to know each other, and talk details about the shooting. 
                        Here we will secure your session, finalize the shooting plan, and pay the <b>deposit of $50 per person </b>.</p>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-amber-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-amber-900 dark:bg-amber-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-amber-600 dark:text-amber-500">Day of Shooting</time>
                    <h3 className="text-lg font-semibold text-amber-900 dark:text-white">Official Photo Shoot</h3>
                    <p className="text-base font-normal text-amber-500 dark:text-amber-600">
                        Get Ready to have a blast with me! For my ladies, please bring comfortable shoes to walk on campus.
                        After the shooting, we will also select the photos you like together!
                        </p>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-amber-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-amber-900 dark:bg-amber-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-amber-600 dark:text-amber-500">2 Weeks within Shooting</time>
                    <h3 className="text-lg font-semibold text-amber-900 dark:text-white">Photo Delivery</h3>
                    <p className="text-base font-normal text-amber-500 dark:text-amber-600">
                        I deliver edited photos within two weeks from the date of shooting, which depends on my workload for the week. 
                        After the photos are delivered, you will have another two weeks and <b>two chances for the photos to be re-edited</b> as well! </p>
                </li>
            </ol>


            <h2 className="text-3xl font-bold text-amber-800 mb-8 mt-20">Book Your Session!</h2>
                <p className="text-amber-700 mb-5"> 
                Please note that Calendly can only show 30 minute sessions, but we do shootings of at least 1 hr!
                This is only to book for the day, and details are for discussion during our initial contact.
                (Don&apos;t forget to leave your weChat ID if you are using weChat)
                </p>
                <div className="max-w-screen mx-auto">
                <iframe
                    src="https://calendly.com/ynchen2829/graduation-photoshoot"
                    width="100%"
                    height="800"
                    frameBorder="0"
                ></iframe>
                </div>

            </div>

            <footer>
            <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
            <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2023 <a className="hover:underline">Yinuo Chen</a>. All Rights Reserved.</span>
    
            </footer>


    </div>
  );
}
