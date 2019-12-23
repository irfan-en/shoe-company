import React from 'react';
import './Homepage.style.scss';

const Homepage = () => (
    <div className='homepage'>
        <div className='directory-menu'>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Shoes</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Lather Shoes</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Calza Shoes</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Bata Shoes</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>
            <div className='menu-item'>
                <div className='content'>
                    <h1 className='title'>Sage Shoes</h1>
                    <span className='subtitle'>Shop Now</span>
                </div>
            </div>
        </div>
    </div>
)

export default Homepage;