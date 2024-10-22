import Image from "next/image";
import "./page.css"


export default function Contact() {
  return (
    <div>
      <section className="Info-container">
       <div className="info-item">
       <Image className="icon" src="/ches.png" alt="chess" width={32} height={32}/>
        <h2>Chess</h2>
        <p>Playing chess is one of my passions. It's a bit too late too play competetivly, but still its a good stimulae for brain. Plus I have decent elo of 1450.</p></div>
    <div class="info-item"> 
        <Image className="icon" src="/coding.svg" alt="Coding" width={32} height={32}/>
        <h2>Programming</h2>
        <p>My favourite programing language is Java. Using this language, I am able to create mobile-desktop apps with UI, storing all user data and other info in databases.
          Hopefully I will be able to master Javascipt/HTML/React/Next.js soon.</p></div>
    <div className="info-item">
         <Image className="icon" src="/images.png" alt="Football" width={32} height={32}/>
        <h2>Football</h2>
        <p>I like to both watch and play football. Furthermore, analyze it with my friends and coworkers.</p>
    </div>
    <div class="info-item"> 
        <Image className="icon" src="/build.webp" alt="Architecture" width={32} height={32}/>
        <h2>Building computers</h2>
        <p>From young age I was allways interested in hardware, thus I started building pc's. Covering from easy OS installs to fully connecting all components in order to have or give operatinal computer.</p>
    </div>     
    </section>
    </div>
  );
}
