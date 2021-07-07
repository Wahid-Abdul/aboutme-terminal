import React, { useEffect, useState } from "react";
import { COMMANDS, KEY_CODES } from "../../utils/constants";
import "./TerminalBody.css"
const TerminalBody = () => {

    const [fullCommand, setFullCommand] = useState("")
    const [currentPath, setCurrentPath] = useState("/")
    const [history, setHistory] = useState([])
    useEffect(() => {
        focusInput();
    }, [])

    const inputRef = React.useRef();

    const scrollToBottom = (element) => {

        element.scrollTo({
            top: element.scrollHeight,
            left: 0,
            behavior: 'smooth'
        });
    }

    const onClickBody = () => {
        focusInput();
    }

    const focusInput = () => {
        inputRef.current.focus()
    }

    const executeCommand = () => {
        const [command, argument, options] = fullCommand.split(" ")
        console.log(command, argument, options)
        switch (command) {
            case COMMANDS.CLEAR:
                setHistory([]);
                break;

            default:
                break;
        }
    }

    const recordHistory = () => {
        const currentDetails = {
            path: currentPath,
            command: fullCommand,
        }
        setHistory([...history, currentDetails])
        setFullCommand("")
    }

    const onChangeText = (e) => {

        const keyCode = e.keyCode
        switch (keyCode) {
            case KEY_CODES.TAB:
                e.preventDefault();
                break;

            case KEY_CODES.ENTER:
                e.preventDefault();
                recordHistory(currentPath, fullCommand)
                executeCommand();
                break;

            default:
                break;
        }
        const terminalBody = document.getElementById("terminalBody")
        scrollToBottom(terminalBody)
    }

    const renderHistory = history.map((item) => <>{`${item.path}$ ${item.command}`}<br /></>)

    return (
        <div className="terminalBody" onClick={onClickBody} id="terminalBody">
            <div className="textContainer">
                {renderHistory}
                {currentPath}$&nbsp;{fullCommand}
                <input className="commandInput"
                    value={fullCommand}
                    type="hidden"
                    type="text"
                    onChange={(e) => setFullCommand(e.target.value)}
                    ref={inputRef} onKeyDown={onChangeText}
                />
            </div>
        </div>
    )
}
export default TerminalBody;