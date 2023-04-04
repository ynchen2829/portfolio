import React from "react";
import Nav from "./nav";

function Book(){
    return(
    <div>
        <Nav></Nav>
        <div className="bg-gray-100 px-4 flex flex-col justify-center items-center">
        <h1 className="text-5xl max-w-5xl mx-auto my-10 font-bold text-gray-800">Woo Hoo! You Are Here!</h1>
        <p className="text-xl max-w-5xl mx-auto font-italic text-gray-600 mt-4">
        Hello, I'm Yinuo (pronounced as ee-no). I've been passionate about photography since 2015, when I received my first camera. 
        I pursued my passion and earned a degree in Radio-Television-Film from UT. 
        </p>
        <p className="text-xl max-w-5xl mx-auto font-italic text-gray-600 mt-4 mb-10">
            Over time, I developed a particular interest in portrait photography, which brings us to the present. 
            So let's talk more about your photo shoot!   
        </p> 
        </div>

        <div className="max-w-5xl mx-auto px-4 my-10">
            <h2 className="text-3xl font-bold text-gray-800 mb-8">Booking Timeline</h2>
            
            {/* timeline component  */}
            <ol className="relative border-l border-gray-200 dark:border-gray-700">                  
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Day of Booking</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Initial Contact</h3>
                    <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">Within 24 hour of booking, you will be contacted via email (for weChat users, please leave your weChat as well)</p>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">72 Hour Within Booking</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Customized Shooting Plan</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        After we establish the initial contact, we can get to know each other, and talk details about the shooting. 
                        Here we will secure your session, finalize the shooting plan, and pay the <b>deposit of $50 per person </b>.</p>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">Day of Shooting</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Official Photo Shoot</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        Get Ready to have a blast with me! For my ladies, please bring comfortable shoes to walk on campus.
                        After the shooting, we will also select the photos you like together!
                        </p>
                </li>
                <li className="mb-10 ml-4">
                    <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                    <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">2 Weeks within Shooting</time>
                    <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Photo Delivery</h3>
                    <p className="text-base font-normal text-gray-500 dark:text-gray-400">
                        I deliver edited photos within two weeks from the date of shooting, which depends on my workload for the week. 
                        After the photos are delivered, you will have another two weeks and <b>two chances for the photos to be re-edited</b> as well! </p>
                </li>
            </ol>

            <h2 className="text-3xl font-bold text-gray-800 my-8">Price & Offering</h2>
            <h3 className="text-xl font-semibold text-gray-700 mb-3">Individual Graduation Shoot</h3>
            <div className="text-gray-700 dark:text-gray-400">
                <p>Starting at $100, includes</p>
                <ul className="list-disc my-2">
                <li>60 minutes shooting time, unlimited locations.</li>
                <li>50-70 color graded photos.</li>
                <li>Minimum of 8 fine edits (edit on messy background, clothes wrinkles, facial features, anything you don't like!)</li>
                </ul>
                <p>Every hour on top of the shoot is +$30, with at least additional 20 color graded photos and 3 fine edits per hour.</p>
            </div>

            <h3 className="text-xl font-semibold text-gray-700 mt-8 mb-3">Group Graduation Shoot</h3>
            <div className="text-gray-700 dark:text-gray-400">
                <p>Starting at $100, with each additional peron +$50 (max 5 people), includes</p>
                <ul className="list-disc my-2">
                <li>60 minutes shooting time, unlimited locations.</li>
                <li>Minimum 30 color graded photos per person.</li>
                <li>Minimum of 5 fine edits per person (edit on messy background, clothes wrinkles, facial features, anything you don't like!)</li>
                </ul>
                <p>Every hour on top of the shoot is +$20, with at least additional 10 color graded photos and 2 fine edits per hour per person </p>
            </div>

            <h3 className="text-xl font-semibold text-gray-700 mt-8 mb-3">Individual or Couple Any Shoot</h3>
            <div className="text-gray-700 dark:text-gray-400">
                <p>Starting at $70, with each additional peron +$50 (max 2 people), includes</p>
                <ul className="list-disc my-2">
                <li>60 minutes shooting time, 2 locations.</li>
                <li>Minimum 30 color graded photos per person.</li>
                <li>Minimum of 5 fine edits per person (edit on messy background, clothes wrinkles, facial features, anything you don't like!)</li>
                </ul>
                <p>Every hour on top of the shoot is +$20, with at least additional 10 color graded photos and 2 fine edits per hour per person </p>

                <p className="text-red-300"> Ask me about <b>special offers</b> for Lolita, HanFu, JK shooting!!!  </p>
            </div>

            <h2 className="text-3xl font-bold text-gray-800 my-8">Book Your Session!</h2>
                <p className="text-gray-700 dark:text-gray-400 mb-5"> 
                Please note that Calendly can only show 30 minute sessions, but we do shootings of at least 1 hr!
                This is only to book for the day, and details are for discussion during our initial contact.
                (Don't forget to leave your weChat ID if you are using weChat)
                </p>
                <div className="max-w-screen mx-auto">
                <iframe
                    src="https://calendly.com/ynchen2829/graduation-photoshoot"
                    width="100%"
                    height="650"
                    frameBorder="0"
                ></iframe>
                </div>
        </div>
    </div>
    );
}

export default Book;