import { useState, useRef } from 'react';
import logo from './logo.png';
import Navigator from './nav.js';
import Header from './header.js';
import Footer from './footer.js';
import ShowResult from './show-result.js';

function HexaToRgb () {
    const [insertValue, setInsertValue] = useState('');
    const [styleExample, setStyleExample] = useState('rgb(0, 0, 0)');
    const showValue = useRef(false);

    function handleChange (event) {
        setInsertValue(event.target.value);
    };

    function handleClickCalcule () {
        const valueToCalculate = insertValue.replace('#', '');
        let R, G, B;

        if (insertValue.length == 3) {
            R = valueToCalculate[0] + valueToCalculate[0];
            G = valueToCalculate[1] + valueToCalculate[1];
            B = valueToCalculate[2] + valueToCalculate[2];
            showValue.current = true;
        } else if (insertValue.length == 6) {
            R = valueToCalculate[0] + valueToCalculate[1];
            G = valueToCalculate[2] + valueToCalculate[3];
            B = valueToCalculate[4] + valueToCalculate[5];
            showValue.current = true;
        } else (showValue.current = false);

        const resultR = parseInt(R || 0, 16);
        const resultG = parseInt(G || 0, 16);
        const resultB = parseInt(B || 0, 16);
        const result = `rgb(${resultR}, ${resultG}, ${resultB})`;

        setStyleExample(result);
        console.log(result);
    };

    return (
        <div class="test">
            <section className="card-h-to-r">
                <header>Hex to RGB Color Converter</header>
                <span>How to use:<br />
                Enter a hex color code to convert to rgb
                </span>
                <span>Hex color code:</span>
                <div>
                    <input type="text" onChange={handleChange}
                        placeholder="#FFFFFF"
                        maxLength="6" />
                    <button onClick={handleClickCalcule}>Convert Color</button>
                </div>
                {showValue.current && <ShowResult styleExample={styleExample} />}
            </section>
        </div>
    );
}

// <a href="https://www.google.com.br">RGB</a>
export default HexaToRgb;