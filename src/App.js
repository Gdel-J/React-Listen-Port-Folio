import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Contact from './components/Contact';
import Resume from './components/Resume';
import Footer from './components/Footer';

const App = () => {
    return (
        <div>
            <Header />
            <main>
                <Switch>
                    <Route exact path="/" component={About} />
                    <Route path="/portfolio" component={Portfolio} />
                    <Route path="/contact" component={Contact} />
                    <Route path="/resume" component={Resume} />
                </Switch>
            </main>
            <Footer />
        </div>
    );
}

export default App;
