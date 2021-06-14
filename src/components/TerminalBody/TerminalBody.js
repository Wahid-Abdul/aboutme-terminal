import React, { useEffect } from "react";
import { KEY_CODES } from "../../utils/constants";
import "./TerminalBody.css"
const TerminalBody = () => {
    const inputRef = React.useRef();
    useEffect(() => {
        focusInput();
    }, [])
    const onClickBody = () => {
        focusInput();
    }

    const focusInput = () => {
        inputRef.current.focus()
    }

    const onChangeText = (e) => {

        const keyCode = e.keyCode
        switch (keyCode) {
            case KEY_CODES.TAB:
                e.preventDefault();
                break;

            case KEY_CODES.ENTER:
                e.preventDefault();
                break;

            default:
                break;
        }
    }

    return (
        <div className="terminalBody" onClick={onClickBody}>
            <div>
                $<input className="commandInput" type="text" ref={inputRef} onKeyDown={onChangeText} />
            </div>
        </div>
    )
}
export default TerminalBody;