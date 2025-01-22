

import React from 'react';
import './Sidebar.css';

interface SidebarProps {
  sidebar: boolean;
}

const Sidebar: React.FC<SidebarProps> = ({ sidebar }) => {
  return (
    <div className={`Sidebar ${sidebar ? '' : 'small-sidebar'}`}>
        <div className= 'Einstellung'>
            <h3>Einstellungen</h3>
        </div>

        <div className="shortcut-links">
            <div className="side-link">
                <p>Konto</p>
            </div>
            <div className="side-link">
                <p>Benachrichtigungen</p>
            </div>
            <div className="side-link">
                <p>Wiedergabe und Leistung</p>
            </div>
            <div className="side-link">
                <p>Datenschutz</p>
            </div>
            <div className="side-link">
                <p>Verbundene Apps</p>
            </div>
            <div className="side-link">
                <p>Abrechnungen und Zahlungen</p>
            </div>
            <div className="side-link">
                <p>Erweiterte Einstellungen</p>
            </div>
      </div>
    </div>
  );
};

export default Sidebar;
