import React, { useEffect } from "react";
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

        if (e.keyCode === 9) {
            //on tab press
            e.preventDefault();
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