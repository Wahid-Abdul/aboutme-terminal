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
            Terminal
        </div>
    )
}

export default TerminalTitle;                                                              