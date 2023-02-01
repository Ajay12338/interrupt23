import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';
import React from 'react';
import styles from './Header.module.css';
import Home from '../Home/Home';
import Event from '../Event/Event';
import EventCard from '../EventCard/EventCard';
import EventsList from '../EventsList/EventsList';
import Ace from '../Ace/Ace';
import Guidelines from '../Guidelines/Guidelines';
import Contact from '../Contact/Contact';

function Header() {
	return (
        <Router>
            <div className={styles.Header}>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/event">Event</Link>
                    </li>
                    <li>
                        <Link to="/eventcard">EventCard</Link>
                    </li>
                    <li>
                        <Link to="/eventslist">EventsList</Link>
                    </li>
                    <li>
                        <Link to="/ace">Ace</Link>
                    </li>
                    <li>
                        <Link to="/guidelines">Guidelines</Link>
                    </li>
                    <li>
                        <Link to="/contact">Contact</Link>
                    </li>
                </ul>

                <Routes>
                    <Route exact path='/' element={< Home/>}></Route>
                    <Route exact path='/event' element={< Event />}></Route>
                    <Route exact path='/eventcard' element={< EventCard />}></Route>
                    <Route exact path='/eventslist' element={< EventsList />}></Route>
                    <Route exact path='/ace' element={< Ace />}></Route>
                    <Route exact path='/guidelines' element={< Guidelines />}></Route>
                    <Route exact path='/contact' element={< Contact />}></Route>
                </Routes>
            </div>
        </Router>
		)
}

export default Header;
