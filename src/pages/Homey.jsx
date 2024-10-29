import React, { useContext } from 'react';
import Navbar from '../components/Navbar';
import Column from '../components/Column';
import DataContext from '../context/dataContext';
import '../styles/home.css';

const Home = () => {
    const { tickets, sortTickets } = useContext(DataContext);

    const renderColumns = () => {
        return Object.entries(tickets).map(([group, tickets]) => (
            <Column key={group} title={group} cardData={sortTickets(tickets)} />
        ));
    };

    return (<>
          <Navbar />
        <div className="board-wrapper">
            <div className="board-container">{renderColumns()}</div>
        </div>
        </>
    );
};

export default Home;
