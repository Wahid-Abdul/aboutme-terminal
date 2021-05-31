import { useEffect } from 'react';
import dragElement from '../../utils/dragEnabler';
import './TerminalTitle.css';

const TerminalTitle = () => {
    useEffect(() => {
        const header = document.getElementById('dragTerminalTitle')
        const terminal = document.getElementById('dragTerminal')
        dragElement(header, terminal)
    })
    return (
        <div className="header" id="dragTerminalTitle">
            <div className="actionButtons">
                <span className="actionButton">x</span>
                <span className="actionButton">i</span>
                <span className="actionButton">o</span>
            </div>
            <div className="titleContainer">
                Terminal
            </div>

        </div>
    )
}

export default TerminalTitle;                                                              