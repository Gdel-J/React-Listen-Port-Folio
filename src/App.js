import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Header from './components/Header/index';
import About from './components/About/index';
import Portfolio from './components/Portfolio/index';
import Contact from './components/Contact/index';
import Resume from './components/Resume/index';
import Footer from './components/Footer/index';

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
