import { useState } from 'react';
import menuJson from '../../../../public/images/cloudpot-menu/menuJson.json';
import './ALC.css';

const ALC = () => {
  const data = menuJson;
  const [searchTerm, setSearchTerm] = useState('');

  // Group items by "Nhóm"
  const groupedData = data.reduce((result, item) => {
    const groupName = item.Nhóm;
    if (!result[groupName]) {
      result[groupName] = [];
    }
    result[groupName].push(item);
    return result;
  }, {});

  // Filter and display grouped data
  const filteredData = Object.keys(groupedData).map((groupName, groupIndex) => {
    return {
      groupName,
      items: groupedData[groupName].filter((item) =>
        item['Tên món'].toLowerCase().includes(searchTerm.toLowerCase())
      ),
    };
  });

  // Calculate number of tables in each column
  const tablesPerColumn = Math.ceil(filteredData.length / 2);

  return (
    <section id='section__ALC' className='w-75 mx-auto mt-5'>
      <div className='d-md-flex justify-content-between'>
        <h3 className='section__Title col-md-7'>Menu ALC</h3>
        <input
          type='text'
          className='form-control col-md-5'
          placeholder='Search...'
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
      <hr className='w-25' style={{ border: '1px solid var(--secondary-color)' }} />

      <div className='row'>
        {filteredData.map((group, groupIndex) => (
          <div key={groupIndex} className={`col-md-${tablesPerColumn > 1 ? '6' : '12'}`}>
            <h4 className='table-title'>{group.groupName}</h4>
            <div className='table-responsive bg-white'>
              <table className='table table-bordered table-striped'>
                <thead className='thead text-white bg-success'>
                  <tr>
                    <th>STT</th>
                    <th>Tên món</th>
                    <th>ĐL tổng (gram)</th>
                    <th>Giá bán (HCM)</th>
                    <th>Nước chấm</th>
                    <th>Rau ăn kèm</th>
                    <th>Note</th>
                  </tr>
                </thead>
                <tbody>
                  {group.items.map((item, itemIndex) => (
                    <tr key={itemIndex}>
                      <td>{itemIndex + 1}</td>
                      <td>{item['Tên món']}</td>
                      <td>{item['ĐL']} gram</td>
                      <td>{item['Giá bán HCM']} VND</td>
                      <td>
                        {item['Nước chấm'] !== null ? (
                          <div className='text-success'>{item['Nước chấm']}</div>
                        ) : (
                          <div className='text-danger'>none</div>
                        )}
                      </td>
                      <td>
                        {item['Rau ăn kèm'] !== null ? (
                          <div className='text-success'>{item['Rau ăn kèm']}</div>
                        ) : (
                          <div className='text-danger'>none</div>
                        )}
                      </td>
                      <td>{item['Note']}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ALC;
