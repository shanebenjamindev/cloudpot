import './combo.css';
import { Link } from "react-router-dom";
export default function Combo() {
    return (
        <div className='section__Combo container bg-white my-5 p-2 border rounded'>
            <h1 className='section__Title'>Set Combos</h1>
            <ul>
                <li>
                    <Link to="">
                        Thanh Xuân 1.299k - 12 món
                    </Link>
                </li>
                <li>
                    <Link to="">
                        Tươi Mới 1.199k - 13 món
                    </Link></li>
                <li>
                    <Link to="">
                        Bổ Dưỡng 1.390k - 13 món
                    </Link>
                </li>
                <li>
                    <Link to="">
                        Tâm Giao 599k - 12 món
                    </Link>
                </li>
                <li>
                    <Link to="">
                        Thành Ý 899k - 15 món
                    </Link>
                </li>
            </ul>
        </div>
    )
}
