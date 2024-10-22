
import "./page.css";

export default function About() {
  return (
    
   <main className="about-container">
    <h1> Progress Representation</h1>
     <section className="purpose-section">
      <p>This site is mainly for learning and display purposes.</p>
    </section>
    <section className="completed-section">
      <h2>Completed</h2>
      <ul>
        <li>Navigation</li>
        <li> Responsiveness</li>
        <li> Navigation burger</li>
        <li>Carousel </li>
       </ul>
    </section>
   
    <section className="in-progress-section">
      <h2>Currently in progress</h2>
      <ul>
        <li>
          User autentification
        </li>
        <li>
          Services page
        </li>
        <li>
          Data Fetch
        </li>
        
      </ul>
    </section>
   </main>
   
 
  );
}
