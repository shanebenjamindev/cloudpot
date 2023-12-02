import { useEffect, useState } from 'react';
import employeeData from '/public/cloudpot-employee/employeeData.json';
import { useNavigate } from 'react-router-dom';

const useLocalStorageUser = () => {
    const [user, setUser] = useState(null);
    const navigate = useNavigate()
    useEffect(() => {
        const storedUser = JSON.parse(localStorage.getItem('user'));

        if (storedUser) {
            setUser(storedUser);
        }
    }, []);

    const saveUser = (newUser) => {
        if (newUser.maNV === "") {
            alert('Enter Code');
        } else {
            const isEmployeeValid = employeeData.find((employee) => newUser.maNV === employee.maNV);

            if (isEmployeeValid) {
                localStorage.setItem('user', JSON.stringify(newUser));
                setUser(newUser);
                navigate('/', { replace: true})
            } else {
                alert("Wrong code");
            }
        }
    };

    const clearUser = () => {
        localStorage.removeItem('user');
        setUser(null);
    };

    return { user, saveUser, clearUser };
};

export default useLocalStorageUser;
