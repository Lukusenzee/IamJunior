"use client";
import React, { useState } from "react";
import "./page.css";

const countryList = ['', 'Lithuania', 'Latvia', 'Estonia', 'Poland', 'Other']; 

export default function Contact() {
    const [nationality, setNationality] = useState(countryList[0]); 

    return (
        <div className="site-container">
            <h1>Contact Me</h1>
            <p>Feel free to inquire if needed in the form below:</p>
            <div className="form-container">
                <form action="https://formspree.io/f/xgvevopg" method="POST">
                    <label>
                        Name
                        <input type="text" name="name" required />
                    </label>
                    <label>
                        Your Email:
                        <input type="email" name="email" required />
                    </label>
                    <label>
                        Nationality:
                        <select
                            name="nationality"
                            value={nationality}
                            onChange={(e) => setNationality(e.target.value)}
                            required
                        >
                            {countryList.map((country) => (
                                <option key={country} value={country}>
                                    {country}
                                </option>
                            ))}
                        </select>
                    </label>
                    <label>
                        Your Message:
                        <textarea name="message" required></textarea>
                    </label>
                    <button type="submit">Send</button>
                </form>
            </div>
        </div>
    );
}
