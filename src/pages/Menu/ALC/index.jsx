// src/components/ALC.jsx
import { useState, useEffect } from 'react';
import * as XLSX from 'xlsx';
import './ALC.css'

const ALC = () => {
    const [excelData, setExcelData] = useState(null);

    useEffect(() => {
        // Trigger file input programmatically
        loadDefaultFile();
    }, []);

    const loadDefaultFile = () => {
        // Replace 'your-default-file.xlsx' with the path or URL of your default Excel file
        const defaultFile = '../../../../public/images/cloudpot-menu/menu.xlsx';

        fetch(defaultFile)
            .then((response) => response.arrayBuffer())
            .then((data) => {
                const workbook = XLSX.read(new Uint8Array(data), { type: 'array' });
                const sheetData = XLSX.utils.sheet_to_json(workbook.Sheets[workbook.SheetNames[0]]);
                setExcelData(sheetData);
            })
            .catch((error) => {
                console.error('Error loading default file:', error);
            });
    };

    return (
        <div className="container mt-5">
            {excelData && (
                <div className="table-responsive">
                    <table className="table table-bordered table-striped">
                        <thead className="thead-dark">
                            <tr>
                                <th>Tên món</th>
                                <th>Giá bán HCM</th>
                                <th>Thời gian chín</th>
                                <th>Nước chấm</th>
                                <th>Rau ăn kèm</th>
                                <th>ĐL tổng gram</th>
                            </tr>
                        </thead>
                        <tbody>
                            {excelData.map((row, index) => (
                                <tr key={index}>
                                    <td>{row['Tên món']}</td>
                                    <td>{row['Giá bán HCM']}</td>
                                    <td>{row['Thời gian chín']}</td>
                                    <td>{row['Nước chấm']}</td>
                                    <td>{row['Rau ăn kèm']}</td>
                                    <td>{row['ĐL tổng gram']}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
        </div>
    );
};

export default ALC;
