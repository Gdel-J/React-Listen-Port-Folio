import React from 'react';
import Project from '../project';

const Portfolio = () => {
    return (
        <section>
            <h2>Portfolio</h2>
            <div>
                <Project />
                <Project />
                <Project />
                {/* Add as many Project components as you have projects */}
            </div>
        </section>
    );
}

export default Portfolio;
