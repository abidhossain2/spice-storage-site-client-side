import React from 'react';
import './AboutUs.css'

const AboutUs = () => {
    return (
        <div>
            <div className='about-us'>
                <h4>About Us</h4>
                <div className='about-us-txt'>
                    <p>
                        Stared in Czechoslovakia in 1927. In 1966, he entered the spice trade along with his wife and lifelong partner, Blanche and established Pacific Spice Company. With hard work, determination and his strong religious faith he successfully grew his small business, buying and selling spices and herbs for local food businesses. In the early years, Akiba would come home excited about every sale even if it was just 10 pounds of pepper sold straight out of the back of his station wagon.
                    </p>
                </div>
                <div className='about-us-container'>
                    <div className="about-us-box">
                        <h2>100</h2>
                        <p>Categories Products</p>
                    </div>
                    <div className="about-us-box">
                        <h2>95</h2>
                        <p>Hardworking People</p>
                    </div>
                    <div className="about-us-box">
                        <h2>15</h2>
                        <p>Supplier Company</p>
                    </div>
                    <div className="about-us-box">
                        <h2>20</h2>
                        <p>Years of Business</p>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default AboutUs;