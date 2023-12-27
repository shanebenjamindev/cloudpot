import { useState } from 'react';
import './combo.css';

import menuCombo from '/public/images/cloudpot-menu/menuCombo.json';

export default function Combo() {
    const [hoveredCombo, setHoveredCombo] = useState(null);

    return (
        <div className='section__Combo container bg-white my-5 p-2 border rounded'>
            <h1 className='section__Title'>Set Combos</h1>
            <div className='row'>
                <div className='col-md-8 chartImg'>
                    {hoveredCombo && (
                        <img className='' src={hoveredCombo.ChartImg} alt={hoveredCombo.ComboName} />
                    )}
                </div>
                <ul className='col-md-4 text-right'>
                    {menuCombo.map((combo) => (
                        <li
                            key={combo.ComboName}
                            onClick={() => setHoveredCombo(combo)}
                            className='combo__Item'
                        >
                            {combo.ComboName}
                        </li>
                    ))}
                </ul>


            </div>
        </div>
    );
}
