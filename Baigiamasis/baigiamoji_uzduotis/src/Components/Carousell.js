"use client";
import React from 'react'
import Image from 'next/image'
import "./Carousell.css";
import { useState, useEffect } from 'react';
import Link from 'next/link';

const Carousell = () => {
    const [slideIndex, setSlideIndex] = useState(1);
  
    useEffect(() => {
        showSlides(slideIndex);
    
        // Cleanup function to prevent memory leaks
        return () => {
          const slides = document.getElementsByClassName("mySlides");
          for (let i = 0; i < slides.length; i++) {
            slides[i].style.display = "none";
          }
        };
      }, [slideIndex]);
    
      const plusSlides = (n) => {
        setSlideIndex((prevIndex) => prevIndex + n);
      };
    
      const currentSlide = (n) => {
        setSlideIndex(n);
      };
    
      const showSlides = (n) => {
        const slides = document.getElementsByClassName("mySlides");
        const dots = document.getElementsByClassName("dot");
        
        if (n > slides.length) setSlideIndex(1);
        if (n < 1) setSlideIndex(slides.length);
        
        for (let i = 0; i < slides.length; i++) {
          slides[i].style.display = "none";
        }
        
        for (let i = 0; i < dots.length; i++) {
          dots[i].className = dots[i].className.replace(" active", "");
        }
    
        if (slides[slideIndex - 1]) {
          slides[slideIndex - 1].style.display = "block";
          dots[slideIndex - 1].className += " active";
        }
      };
  
    return (
      <div >
        <div className="slideshowContainer">
          <div className="mySlides fade">
            <div className="numbertext">1 / 3</div>
            
            <Image src="/img4.jpg"  width={1200} height={400} alt="coding" />
            
            <Link href="https://edina.lt/ " target="_blank"><div className="text">First slide</div></Link>
            
          </div>
  
          <div className="mySlides fade">
            <div className="numbertext">2 / 3</div>
            
           <Image src="/img2.jpg"  width={1200} height={400} alt="edina" />
            
           <Link href="https://edina.lt/ " target="_blank">
            <div className="text">First Ever Deployed Website</div>
            </Link>
          </div>
  
          <div className="mySlides fade">
            <div className="numbertext">3 / 3</div>
           
          
            <Image src="/img1.jpg"  width={1200} height={400} alt="Github" />
           
            <Link href="https://github.com/Lukusenzee/IamJunior" target="_blank">
            <div className="text">Github Repository</div>
            </Link>
          </div>
  
          <a className="prev" onClick={() => plusSlides(-1)}>❮</a>
          <a className="next" onClick={() => plusSlides(1)}>❯</a>
        </div>
  
        <br />
  
        <div style={{ textAlign: 'center' }}>
          <span className="dot" onClick={() => currentSlide(1)}></span>
          <span className="dot" onClick={() => currentSlide(2)}></span>
          <span className="dot" onClick={() => currentSlide(3)}></span>
        </div>
      </div>
    );
  };
  
  export default Carousell;