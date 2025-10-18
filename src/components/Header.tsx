import {useEffect} from 'react';
// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import {neonCursor} from 'https://unpkg.com/threejs-toys@0.0.8/build/threejs-toys.module.cdn.min.js'
import './Header.css';

const Header = () => {
    useEffect(() => {
        const headerEl = document.getElementById('header');
        if (headerEl) {
            neonCursor({
                el: headerEl,
                shaderPoints: 16,
                curvePoints: 80,
                curveLerp: 0.5,
                radius1: 5,
                radius2: 30,
                velocityTreshold: 10,
                sleepRadiusX: 100,
                sleepRadiusY: 100,
                sleepTimeCoefX: 0.0025,
                sleepTimeCoefY: 0.0025,
            });
        }

        const spans = document.querySelectorAll('.header-title span');

        const handleMouseOver = (e: MouseEvent) => {
            (e.target as HTMLElement).classList.add('active');
        };

        const handleClick = (e: MouseEvent) => {
            (e.target as HTMLElement).classList.add('active');
        };

        const handleAnimationEnd = (e: AnimationEvent) => {
            (e.target as HTMLElement).classList.remove('active');
        };

        spans.forEach((span, idx) => {
            span.addEventListener('mouseover', handleMouseOver as EventListener);
            span.addEventListener('click', handleClick as EventListener);
            span.addEventListener('animationend', handleAnimationEnd as EventListener);

            const timeoutId = setTimeout(() => {
                span.classList.add('active');
            }, 500 * (idx + 1));

            return () => {
                clearTimeout(timeoutId);
                span.removeEventListener('mouseover', handleMouseOver as EventListener);
                span.removeEventListener('click', handleClick as EventListener);
                span.removeEventListener('animationend', handleAnimationEnd as EventListener);
            };
        });
    }, []);

    return (
        <header className="header">
            <div className="container" id="header" style={{maxWidth: '100vw'}}>
                <ul className="social-icons pt-3" style={{paddingLeft: '32px'}}>
                    <li className="social-item">
                        <a href="https://github.com/SamSifisoMndebele" target="_blank" rel="noopener noreferrer"
                           className="social-link text-light">
                            <i className="fa-brands fa-github"></i>
                        </a>
                    </li>
                    <li className="social-item">
                        <a href="https://wa.me/27721646430?text=%3E%20From%20Portfolio%0AHi%20Sam,%0A" target="_blank"
                           rel="noopener noreferrer" className="social-link text-light">
                            <i className="fa-brands fa-whatsapp"></i>
                        </a>
                    </li>
                    <li className="social-item">
                        <a href="mailto:sams.mndebele@avidco.co.za" target="_blank" rel="noopener noreferrer"
                           className="social-link text-light">
                            <i className="fa-regular fa-envelope"></i>
                        </a>
                    </li>
                    <li className="social-item">
                        <a href="https://www.facebook.com/sam.sifiso.mndebele" target="_blank" rel="noopener noreferrer"
                           className="social-link text-light">
                            <i className="fa-brands fa-facebook-f"></i>
                        </a>
                    </li>
                    <li className="social-item">
                        <a href="https://www.instagram.com/sam.sifiso.mndebele" target="_blank"
                           rel="noopener noreferrer" className="social-link text-light">
                            <i className="fa-brands fa-instagram"></i>
                        </a>
                    </li>
                </ul>
                <div className="header-content" style={{paddingLeft: '8vw', paddingRight: '8vh'}}>
                    <h4 className="header-subtitle">I am</h4>
                    <h1 className="header-title">
                        <span>S</span>
                        <span>A</span>
                        <span>M</span>
                        {' '}
                        <span>S</span>
                        <span>I</span>
                        <span>F</span>
                        <span>I</span>
                        <span>S</span>
                        <span>O</span>
                    </h1>
                    <h1 className="header-title">
                        <span>M</span>
                        <span>N</span>
                        <span>D</span>
                        <span>E</span>
                        <span>B</span>
                        <span>E</span>
                        <span>L</span>
                        <span>E</span>
                    </h1>
                    <h6 className="header-mono">Full Stack Developer</h6>
                </div>
            </div>
        </header>
    );
};

export default Header;
