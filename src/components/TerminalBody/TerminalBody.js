import React, { useEffect, useState } from "react";
import { COMMANDS, KEY_CODES } from "../../utils/constants";
import "./TerminalBody.css"
import root from "../../assets/data/root"

const TerminalBody = () => {

    const [fullCommand, setFullCommand] = useState("")
    const [currentPath, setCurrentPath] = useState("/")
    const [history, setHistory] = useState([])
    const [list, setList] = useState([])
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

    const listCMD = () => {
        const children = root[currentPath].children;
        const displayList = children.map( (item) => {
            return item.subpath
        })
        console.log(children, displayList)
        recordHistory(displayList)
        return displayList;
    }

    const executeCommand = () => {
        const [command, argument, options] = fullCommand.split(" ")
        console.log(command, argument, options)
        switch (command) {
            case COMMANDS.CLEAR:
                setHistory([]);
                break;
            case COMMANDS.LIST:
                recordHistory()
                setList(listCMD());
                break;

            default:
                break;
        }
    }

    const recordHistory = (displayList = null) => {

        const currentDetails = {
            path: currentPath,
            command: fullCommand,
        }
        let finalHistory = [...history, currentDetails]
        if (displayList) {
            finalHistory = [...finalHistory, displayList]
        }
        setHistory(finalHistory)
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
                recordHistory()
                executeCommand();
                break;

            default:
                break;
        }
        const terminalBody = document.getElementById("terminalBody")
        scrollToBottom(terminalBody)
    }

    const renderHistory = history.map((item) => {
        return Array.isArray(item) ?
            <>{item}<br /></>
            :
            <>{`${item.path}$\u00A0${item.command}`}<br /></>
    })

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