import Link from 'next/link';
import Carousel from './components/carousel';
function developer(){
    const DeBriefSlides = [
        "portfolio/debrief.png",
        "portfolio/debrief-1.png",
        "portfolio/debrief-2.png"
    ];

    return(

        <div className='font-mono'>
            <nav className="fixed top-0 left-0 w-full bg-slate-50 bg-opacity-50 z-50 backdrop-blur">
            <div className="mx-auto max-w-6xl">
                    <div className="flex justify-between items-center h-16">
                        <div className="flex px-6 md:px-0">
                            <Link href="/" className="py-5 hover:text-gray-400">Home</Link>
                        </div>
                        <div className="flex">
                            <div className="flex items-center space-x-1">
                            <a href="#about" className="py-5 px-3 hover:text-gray-400">About</a>
                            <a href="#projects" className="py-5 px-3 hover:text-gray-400">Projects</a>
                            {/* <a href="#contacts" className="py-5 px-3 hover:text-gray-400">Contacts</a> */}
                            </div>
                        </div>
                    </div>
                </div>
            </nav>

            <section id="about" className="bg-white text-left">
                <div className="container py-16 md:grid md:grid-cols-2 gap-4 items-end max-w-6xl mx-auto">
                    <div className="md:col-span-1 md:order-2 w-full px-4">
                        <h2 className="text-4xl font-mono my-5">01. About Me</h2>
                        <p className="mb-2 text-lg">
                            My name is Yinuo, I just graduated from the University of Texas in December 2023 with degrees in Computer Engineering and Film.👩‍🔬
                        </p>
                        <p className="mb-6 text-lg">
                            In short, I make websites: front to back, UI to database. I also like exploring ML technologies and distributed systems as an 
                            extension from my college interests.
                        </p>
                        {/* <Link href={'/Yinuo Chen Resume.pdf'} target="_blank"
                        className="border focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-gray-600 bg-gray-800 border-gray-700 text-white hover:bg-gray-700 mr-2 mb-2">
                            <svg aria-hidden="true" className="w-6 h-5 mr-2 -ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff">
                                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                                <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
                                <g id="SVGRepo_iconCarrier">
                                    <path d="M17 17H17.01M17.4 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3.15224 15.2346C3.35523 14.7446 3.74458 14.3552 4.23463 14.1522C4.60218 14 5.06812 14 6 14H6.6M12 15V4M12 15L9 12M12 15L15 12" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
                                </g>
                            </svg>
                            Download Resume
                        </Link> */}
                    </div>
                    <div className="md:col-span-1 md:order-1 px-4 md:ml-20 flex justify-center md:justify-start">
                        <div>
                            <img width={280} src="/memoji.png" alt="My profile img"/>
                            <p className="text-gray-400 text-sm text-right">image powered by DALL-E</p>
                            <p className="text-gray-400 text-xs text-right">and my amazing prompt engineering</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id="projects" className="bg-gray-100 text-left">
                <div className="container mx-auto py-16 max-w-6xl">
                    <h2 className="text-4xl font-mono my-5">02. Portfolio</h2>
                    
                    <div className="flex flex-col md:grid md:grid-cols-3 mb-28 items-center md:items-stretch">
                        <div className="md:col-span-2 w-full md:w-auto mb-4 md:order-2">
                            <div className="overflow-hidden rounded-md"
                            onClick={()=> window.open("https://expedia.com","_blank")}>
                                <img className="hover:scale-110 transition-all duration-500 cursor-pointer w-full" src="/portfolio/ground-transportation.png" alt="" />
                            </div>
                        </div>

                        <div className="w-11/12 md:col-span-1 md:order-1">
                            <h2 className="text-2xl font-mono">Expedia Landing Page</h2>
                            <p className="text-lg text-gray-600 mb-2">
                            Developed a comprehensive ground transportation search form as an Expedia intern with a server-driven user interface approach.
                            </p>
                            <ul className="space-y-1 text-slate-400 list-disc list-inside mb-5">
                                <li>Advanced zipcode-based hotel location search.</li>
                                <li>Efficient schema design for data querying.</li>
                                <li>Robust error validation.</li>
                                <li>Streamlined search URL construction and redirection.</li>
                            </ul>
                            <p className="font-mono mb-5 font-semibold">
                                React.js GraphQL ApolloClient Cypress
                            </p>
                        </div>
                    </div>

                    {/* DeBrief project */}
                    <div className="flex flex-col md:grid md:grid-cols-3 mb-28 items-center md:items-stretch">
                        <div className="md:col-span-2 w-full md:w-auto md:order-1 md:pr-10">
                           <Carousel slides={DeBriefSlides}/>
                        </div>
                        <div className="w-11/12 order-1 md:order-2 md:col-span-1 mt-4">
                            <h2 className="text-2xl font-mon mb-4">DeBrief</h2>
                            <p className="text-lg text-gray-600 mb-5">
                            Website that simplifies bills that are introduced in government from sophisticated legal language to everyday casual speech, in order to make civic matters more accessible for all.
                            </p>
                            <ul className="space-y-1 text-slate-400 list-disc list-inside mb-5">
                                <li>Filters and Search</li>
                                <li>Periodic web scrapping to get new bills</li>
                            </ul>
                            <p className="font-mono mb-5 font-semibold">
                                Next.js Python OpenAI(API) Azure beautiful-soup
                            </p>
                        </div>
                    </div>

                    {/*New Year Gala Check-in */}
                    <div className="flex flex-col md:grid md:grid-cols-3 mb-28 items-center md:items-stretch">
                        <div className="w-11/12 order-2 md:order-1 md:col-span-1 mt-4">
                            <h2 className="text-2xl font-mono mb-5">New Year Gala Check-in</h2>
                            <p className="text-lg text-gray-600 mb-2">
                            Developed an event registration check-in system for a 400+ consumer festival event.
                            </p>
                            <ul className="space-y-1 text-slate-400 list-disc list-inside mb-5">
                                <li>One-to-one secure unique ID check in</li>
                                <li>Automatic email verification</li>
                                <li>optimized guest arrival time</li>
                            </ul>
                            <p className="font-mono mb-5 font-semibold">
                                Next.js GoogleAPI TailwindCSS Vercel
                            </p>
                        </div>
                        <div className="md:col-span-2 flex flex-row gap-4 order-1 md:order-2">
                            <div className="overflow-hidden rounded-md basis-1/2">
                                <img className="md:h-[calc(66.67vh)] md:object-contain hover:scale-110 transition-all duration-500 cursor-pointer w-full" src="/portfolio/lottery-1.png" alt="" />
                            </div>
                            <div className="overflow-hidden rounded-md basis-1/2">
                                <img className="md:h-[calc(66.67vh)] md:object-contain hover:scale-110 transition-all duration-500 cursor-pointer w-full" src="/portfolio/lottery-2.png" alt="" />
                            </div>
                        </div>
                    </div>

                    {/*Hardware check out system */}
                    <div className="flex flex-col md:grid md:grid-cols-3 mb-28 items-center md:items-stretch">
                        <div className="md:col-span-2 w-full md:w-auto md:order-1 md:pr-10">
                            <div className="overflow-hidden rounded-md">
                                <img className="hover:scale-110 transition-all duration-500 cursor-pointer w-full" src="/portfolio/check-out.png" alt="" />
                            </div>                        </div>
                        <div className="w-11/12 order-1 md:order-2 md:col-span-1 mt-4">
                            <h2 className="text-2xl font-mono mb-4">Hardware Checkout Simulation</h2>
                            <p className="text-lg text-gray-600 mb-5">
                            Constructed a web application for a HaaS system to simulate purchasing hardware resources.
                            </p>
                            <p className="font-mono mb-5 font-semibold">
                                React.js Python Flask MongoDB Heroku
                            </p>
                        </div>
                    </div>

                     {/* Wampus.fyi */}
                    <div className="flex flex-col md:grid md:grid-cols-3 my-28 items-center md:items-stretch">
                        <div className="w-11/12 order-2 md:order-1 md:col-span-1 mt-4">
                            <h2 className="text-2xl font-mono mb-5">Wampus.fyi (WIP)</h2>
                            <p className="text-lg text-gray-600 mb-2">
                            Comprehensive web hub that democratizes information related to student housing at UT.
                            </p>
                            <ul className="space-y-1 text-slate-400 list-disc list-inside mb-5">
                                <li>Filters for apartment</li>
                                <li>Machine Learning Algorithm for housing value prediction</li>
                                <li>Map to table correlation</li>
                            </ul>
                            <p className="font-mono mb-5 font-semibold">
                                Vue.js Flask RestAPI GithubAction FireBase MongoDB
                            </p>
                        </div>
                        {/* Image section */}
                        <div className="md:col-span-2 w-full md:w-auto flex justify-center order-1 md:order-2 m-4">
                            <div className="overflow-hidden rounded-md">
                                <img className="hover:scale-110 transition-all duration-500 cursor-pointer w-full" src="/portfolio/wampus.png" alt="" />
                    </div>
                    </div>

                    </div>
                </div>
            </section>

            <footer className="bg-gray-800 text-white py-6">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center text-sm sm:text-base">
                    © Yinuo Chen 2023 💌 Made with Love
                    </div>
                    <div className="flex justify-center mt-4 space-x-6">
                        <a href="https://www.linkedin.com/in/yinuo-chen-20008b196/" target="_blank" rel="noopener noreferrer" className="hover:text-gray-400">
                            LinkedIn
                        </a>
                        <a href="mailto:ynchen2829@gmail.com" className="hover:text-gray-400">
                            Email
                        </a>
                    </div>
                </div>
                </footer>

        </div>
    );
}

export default developer;