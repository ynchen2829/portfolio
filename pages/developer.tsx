import Link from 'next/link';
function developer(){
    return(
        <div className='text-white'>
            <section id="about" className="bg-gradient-to-r from-gray-900 to-gray-500 text-left">
                <Link href="/" type="button" className="flex justify-start py-2 text-md bg-transparent mx-10 gap-2">
                    <svg className="w-5 h-5 rtl:rotate-180" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18" />
                    </svg>
                    <span>Go Home</span>
                </Link>
                <div className="container mx-auto py-16 grid-col-2 flex items-end">
                    <div className="col-span-1 w-1/2">
                        <h2 className="text-4xl font-mono my-5">01. About Me</h2>
                        <p className="mb-2 text-lg">
                            My name is Yinuo, I am graduating from the University of Texas in December 2023 with degrees in Computer Engineering and Film.👩‍🔬
                        </p>
                        <p className="mb-6 text-lg">
                            In short, I make websites: front to back, UI to database. I also like exploring cloud technologies and distributed systems as an 
                            extension from my college interests.
                        </p>
                        <Link href={'/Yinuo Chen Resume.pdf'}
                        className=" border focus:ring-4 focus:outline-none font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center focus:ring-gray-600 bg-gray-800 border-gray-700 text-white hover:bg-gray-700 mr-2 mb-2">
                        <svg aria-hidden="true"className="w-6 h-5 mr-2 -ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path d="M17 17H17.01M17.4 14H18C18.9319 14 19.3978 14 19.7654 14.1522C20.2554 14.3552 20.6448 14.7446 20.8478 15.2346C21 15.6022 21 16.0681 21 17C21 17.9319 21 18.3978 20.8478 18.7654C20.6448 19.2554 20.2554 19.6448 19.7654 19.8478C19.3978 20 18.9319 20 18 20H6C5.06812 20 4.60218 20 4.23463 19.8478C3.74458 19.6448 3.35523 19.2554 3.15224 18.7654C3 18.3978 3 17.9319 3 17C3 16.0681 3 15.6022 3.15224 15.2346C3.35523 14.7446 3.74458 14.3552 4.23463 14.1522C4.60218 14 5.06812 14 6 14H6.6M12 15V4M12 15L9 12M12 15L15 12" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path> </g></svg>
                        Download Resume
                        </Link>
                    </div>
                    <div className="col-span-1 ml-20">
                        <img width={300} src="/profile.png" alt=""/>
                        <p className="text-gray-400 text-sm text-right"> image powered by WHEE</p>
                    </div>
 
                </div>
            </section>
        
            <section id="projects" className="bg-gradient-to-l from-gray-900 to-gray-500 text-left">
                <div className="container mx-auto py-16">
                    <h2 className="text-4xl font-mono my-5">02. Portfolio</h2>
                    
                    <div className="mx-auto flex justify-center grid-cols-3 mb-28 p-10">
                        <div className="flex-1 h-60 col-span-2">
                            <div className="h-min overflow-hidden rounded-md">
                                <img className="hover:scale-110 transition-all duration-500 cursor-pointer" src="/portfolio/ground-transportation.png" alt="" />
                            </div>
                        </div>
                        <div className="flex-1 h-60 col-span-1 w-1/2 ml-8">
                            <h2 className="text-2xl font-mon mb-4"> 
                                Expedia Landing Page</h2>
                            <p className="text-lg text-gray-200 mb-2">
                            Developed a comprehensive ground transportation search form with a server-driven user interface approach.
                            </p>
                            <ul className="space-y-1 text-slate-400 list-disc list-inside mb-5">
                                <li>
                                Advanced zipcode-based hotel location search.
                                </li>
                                <li>
                                Efficient schema design for data querying.
                                </li>
                                <li>
                                Robust error validation.
                                </li>
                                <li>
                                Streamlined search URL construction and redirection.
                                </li>
                            </ul>
                            <p className="font-mono mb-5 font-semibold">
                                React.js GraphQL ApolloClient Cypress
                            </p>
                        </div>
                    </div>

                    <div className="mx-auto flex justify-center grid-cols-3 my-12">
                        <div className="flex-1 p-4 ml-4 col-span-1 w-1/2">
                            <h2 className="text-2xl font-mono mb-5"> 
                                New Year Gala Check-in</h2>
                            <p className="text-lg text-gray-200 mb-2">
                            Developed an event registration check-in system for a 400+ consumer festival event.                            </p>
                            <ul className="space-y-1 text-slate-400 list-disc list-inside mb-5">
                                <li>
                                One-to-one secure unique ID check in
                                </li>
                                <li>
                                Automatic email verification
                                </li>
                                <li>
                                optimized guest arrival time 
                                </li>
                            </ul>
                            <p className="font-mono mb-5 font-semibold">
                                Next.js GoogleAPI TailwindCSS Vercel
                            </p>
                        </div>
                        <div className="flex-1 p-4 col-span-2 flex flex-row gap-16">
                            <div className="h-min overflow-hidden rounded-md basis-1/3">
                                <img className="hover:scale-110 transition-all duration-500 cursor-pointer" src="/portfolio/lottery-1.png" alt="" />
                            </div>
                            <div className="h-min overflow-hidden rounded-md basis-1/3">
                                <img className="hover:scale-110 transition-all duration-500 cursor-pointer" src="/portfolio/lottery-2.png" alt="" />
                            </div>
                        </div>
                    </div>

                    <div className="mx-auto flex justify-center grid-cols-3 mb-28 p-10">
                        <div className="flex-1 h-60 col-span-2">
                            <div className="h-min overflow-hidden rounded-md">
                                <img className="hover:scale-110 transition-all duration-500 cursor-pointer" src="/portfolio/check-out.png" alt="" />
                            </div>
                        </div>
                        <div className="flex-1 h-60 col-span-1 w-1/2 ml-8">
                            <h2 className="text-2xl font-mon mb-4"> 
                                Hardware Checkout Simulation</h2>
                            <p className="text-lg text-gray-200 mb-5">
                            Constructed a web application for a HaaS system to simulate purchasing hardware resources.                            </p>
                            <p className="font-mono mb-5 font-semibold">
                                React.js Python Flask MongoDB Heroku
                            </p>
                        </div>
                    </div>
                    
                    <div className="mx-auto flex justify-center grid-cols-3 my-12">
                        <div className="flex-1 p-4 ml-4 col-span-1 w-1/2">
                            <h2 className="text-2xl font-mono mb-5"> 
                                Wampus.fyi (WIP)</h2>
                            <p className="text-lg text-gray-200 mb-2">
                            Comprehensive web hub that democratizes information related to student housing at UT.                             </p>
                            <ul className="space-y-1 text-slate-400 list-disc list-inside mb-5">
                                <li>
                                Filters for apartment 
                                </li>
                                <li>
                                Machine Learning Algorithm for housing value prediction
                                </li>
                                <li>
                                Map to table correlation
                                </li>
                            </ul>
                            <p className="font-mono mb-5 font-semibold">
                                Vue.js Flask RestAPI GithubAction FireBase MongoDB
                            </p>
                        </div>
                        <div className="flex-1 p-4">
                            <div className="h-min overflow-hidden rounded-md">
                                <img className="hover:scale-110 transition-all duration-500 cursor-pointer" src="/portfolio/wampus.png" alt="" />
                            </div>
                        </div>
                    </div>

                </div>
            </section>
        </div>
    );
}

export default developer;