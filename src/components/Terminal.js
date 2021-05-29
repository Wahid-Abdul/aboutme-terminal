
import './Terminal.css'
import TerminalBody from "./TerminalBody/TerminalBody";
import TerminalTitle from "./TerminalTitle/TerminalTitle";

const Terminal = () => {

    return (
        <div className="terminal" id="dragTerminal">
            <TerminalTitle />
            <TerminalBody />
        </div>
    )
}
export default Terminal;