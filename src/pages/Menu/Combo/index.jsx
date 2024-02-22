import { useState } from 'react';
import './combo.css';

import menuData from '/src/menuData.json';

export default function Combo() {
    const [hoveredCombo, setHoveredCombo] = useState(menuData.ComboList[0]);

    return (
        <section id='section__Combo' className='my-2'>
            <h1 className='section__Title'>Set Combos</h1>
            <hr className="" style={{ border: "1px solid var(--secondary-color)" }} />

            <div>
                {hoveredCombo && (
                    <img className='' width={"100%"} src={hoveredCombo.ChartImg} alt={hoveredCombo.ComboName} />
                )}
            </div>
            <div className='container d-md-flex'>
                {menuData.ComboList.map((combo) => (
                    <li
                        key={combo.ComboName}
                        onClick={() => setHoveredCombo(combo)}
                        className='combo__Item'
                    >
                        {combo.ComboName}
                    </li>
                ))}
            </div>

        </section>
    );
}
