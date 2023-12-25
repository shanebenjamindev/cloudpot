import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import useLocalStorageUser from '/src/assets/hooks';
import './login.css';
import employeeData from '/public/cloudpot-employee/employeeData.json';

export default function Login() {

    const [state, setState] = useState({
        maNV: "",
        tenNV: employeeData.tenNV
    });

    const [validationMessage, setValidationMessage] = useState('');
    const { saveUser } = useLocalStorageUser();

    const navigate = useNavigate();

    const handleOnChange = (e) => {
        const { name, value } = e.target;
        setState({
            ...state,
            [name]: value,
        });
    };

    const handleLogin = (e) => {
       return saveUser(state);
    };

    return (
        <div className='login-page bg-dark text-white'>
            <div className='bg-dark w-50 p-2 border rounded'>
                <form className='form' onSubmit={handleLogin}>
                    <label>Mã đăng nhập</label>
                    <p>(mã nhân viên)</p>
                    <input
                        type='text'
                        className='form-control'
                        name='maNV'
                        id='maNV'
                        onChange={handleOnChange}
                    />

                    <div className='invalid-feedback'>{validationMessage}</div>

                    <button
                        type='submit'
                        className='form-control mt-2 btn btn-success'
                    >
                        Đăng nhập
                    </button>
                </form>
            </div>
        </div>
    );
}
