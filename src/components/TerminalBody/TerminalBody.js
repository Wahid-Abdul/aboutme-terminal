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

    return (
        <div className="terminalBody" onClick={onClickBody}>
            <div>
                $<input className="commandInput" type="text" ref={inputRef} />
            </div>
        </div>
    )
}
export default TerminalBody;