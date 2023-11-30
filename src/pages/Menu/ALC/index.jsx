import { useState } from 'react';
import menuJson from '../../../../public/images/cloudpot-menu/menuJson.json';
import './ALC.css'


const ALC = () => {
    const data = menuJson;
    const [searchTerm, setSearchTerm] = useState('');

    const filteredData = data.map((group, groupIndex) => {
        const filteredGroup = {
            [Object.keys(group)[0]]: group[Object.keys(group)[0]].filter((item) =>
                item.Tênmón.toLowerCase().includes(searchTerm.toLowerCase())
            ),
        };
        return filteredGroup;
    });

    return (
        <section id='section__ALC' className="container mt-5">
            <div className='d-md-flex  justify-content-between'>
                <h3 className='section__Title col-md-7'>Menu ALC</h3>
                <input
                    type="text"
                    className='form-control col-md-5'
                    placeholder="Search..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <hr className="w-25" style={{ border: "1px solid var(--secondary-color)" }} />


            {filteredData.map((group, groupIndex) => (
                <div key={groupIndex}>
                    <h4 className='table-title'>{Object.keys(group)[0]}</h4>
                    <div className="table-responsive bg-white">
                        <table className="table table-bordered table-striped">
                            <thead className="thead text-white bg-success">
                                <tr>
                                    <th>STT</th>
                                    <th>Tên món</th>
                                    <th>Thời gian chín</th>
                                    <th>ĐL tổng (gram)</th>
                                    <th>Nước chấm</th>
                                    <th>Rau ăn kèm</th>
                                    <th>Giá bán (HCM)</th>
                                </tr>
                            </thead>
                            <tbody>
                                {group[Object.keys(group)[0]].map((item, itemIndex) => (
                                    <tr key={itemIndex}>
                                        <td>{item.STT}</td>
                                        <td>{item.Tênmón}</td>
                                        <td>{item.Thờigianchín}</td>
                                        <td>{item.ĐLtổnggram} gram</td>
                                        <td>{item.Nướcchấm !== null ? (<div className='text-success'> {item.Nướcchấm}</div>) : (<div className='text-danger'>none</div>)}</td>
                                        <td>{item.Rauănkèm !== null ? (<div className='text-success'> {item.Rauănkèm}</div>) : (<div className='text-danger'>none</div>)}</td>
                                        <td>{item.GiábánHCM} VND</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            ))}
        </section>
    );
};

export default ALC;
