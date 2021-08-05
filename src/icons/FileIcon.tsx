import React from 'react';
import IconProps from './iconprops';

function FileIcon(props: IconProps) {
    return (
        <svg width="13" height="15" viewBox="0 0 13 15" fill="none" xmlns="http://www.w3.org/2000/svg" {...props}>
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.534068 15H12.4659C12.7655 15 13 14.7674 13 14.4703V0.529716C13 0.232558 12.7655 0 12.4659 0H3.51703C3.47796 0 3.42585 0 3.38677 0.0129199C3.37375 0.0129199 3.36072 0.0258398 3.36072 0.0258398C3.32164 0.0387597 3.29559 0.0516796 3.25651 0.0645995C3.24349 0.0775194 3.23046 0.0775194 3.21743 0.0904393C3.17836 0.116279 3.13928 0.142119 3.11323 0.180879L0.130261 3.66925C0.0911824 3.70801 0.0651303 3.75969 0.0390782 3.81137C0.0260521 3.82429 0.0260521 3.85013 0.0260521 3.86305C0.0130261 3.90181 0.0130261 3.94057 0 3.97933C0 3.99225 0 3.99225 0 4.00517V14.4574C0 14.7674 0.247495 15 0.534068 15ZM2.98297 1.97674V3.50129H1.68036L2.98297 1.97674ZM1.06814 4.5478H3.51703C3.81663 4.5478 4.0511 4.31525 4.0511 4.01809V1.05943H11.9319V13.9406H1.06814V4.5478ZM10.3427 5.69767H2.65731C2.35772 5.69767 2.12325 5.93023 2.12325 6.22739C2.12325 6.52455 2.35772 6.75711 2.65731 6.75711H10.3427C10.6423 6.75711 10.8768 6.52455 10.8768 6.22739C10.8768 5.93023 10.6423 5.69767 10.3427 5.69767ZM10.3427 8.25581H2.65731C2.35772 8.25581 2.12325 8.48837 2.12325 8.78553C2.12325 9.08269 2.35772 9.31524 2.65731 9.31524H10.3427C10.6423 9.31524 10.8768 9.08269 10.8768 8.78553C10.8768 8.50129 10.6423 8.25581 10.3427 8.25581Z" fill="#9294A3"/>
        </svg>
    )
}

export default FileIcon;