import React from 'react'
import IconProps from './iconprops'

function MonitorIcon(props: IconProps) {
    return (
        <svg width="15" height="13" viewBox="0 0 15 13" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M13.6121 0H0.497857C0.218571 0 0 0.216667 0 0.493519V6.71667V9.25648C0 9.53333 0.218571 9.75 0.497857 9.75H6.55714V12.013H3.77643C3.49714 12.013 3.27857 12.2296 3.27857 12.5065C3.27857 12.7833 3.49714 13 3.77643 13H10.3336C10.6129 13 10.8314 12.7833 10.8314 12.5065C10.8314 12.2296 10.6129 12.013 10.3336 12.013H7.55286V9.75H13.6121C13.8914 9.75 14.11 9.53333 14.11 9.25648V6.71667V0.493519C14.11 0.216667 13.8914 0 13.6121 0ZM13.1143 8.76296H0.995714V7.19815H13.1143V8.76296ZM13.1143 6.22315H0.995714V0.987037H13.1143V6.22315Z" fill="#9294A3"/>
        </svg>
    )
}

export default MonitorIcon