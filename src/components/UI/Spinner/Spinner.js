import React from 'react';

import styled from 'styled-components';

const SpinnerCSS = styled.div`
.loader,
.loader:before,
.loader:after {
    border-radius: 50%;
}
.loader {
    color: #eaad87;
    font-size: 11px;
    text-indent: -99999em;
    margin: 55px auto;
    position: relative;
    width: 10em;
    height: 10em;
    box-shadow: inset 0 0 0 1em;
    -webkit-transform: translateZ(0);
    -ms-transform: translateZ(0);
    transform: translateZ(0);
}
.loader:before,
.loader:after {
    position: absolute;
    content: '';
}
.loader:before {
    width: 5.2em;
    height: 10.2em;
    background: white;
    border-radius: 10.2em 0 0 10.2em;
    top: -0.1em;
    left: -0.1em;
    -webkit-transform-origin: 5.2em 5.1em;
    transform-origin: 5.2em 5.1em;
    -webkit-animation: load2 2s infinite ease 1.5s;
    animation: load2 2s infinite ease 1.5s;
}
.loader:after {
    width: 5.2em;
    height: 10.2em;
    background: white;
    border-radius: 0 10.2em 10.2em 0;
    top: -0.1em;
    left: 5.1em;
    -webkit-transform-origin: 0px 5.1em;
    transform-origin: 0px 5.1em;
    -webkit-animation: load2 2s infinite ease;
    animation: load2 2s infinite ease;
}
@-webkit-keyframes load2 {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
@keyframes load2 {
    0% {
        -webkit-transform: rotate(0deg);
        transform: rotate(0deg);
    }
    100% {
        -webkit-transform: rotate(360deg);
        transform: rotate(360deg);
    }
}
`;


const spinner = () => (
    <SpinnerCSS>
        <div class="loader">Loading...</div>
    </SpinnerCSS>
);

export default spinner;