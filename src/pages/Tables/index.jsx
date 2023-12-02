import React from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import useLocalStorageUser from '/src/assets/hooks/index'; // Update the path to your useLocalStorageUser hook

import tangG from '/public/images/cloudpot-tables/tangG.jpg';
import tang1 from '/public/images/cloudpot-tables/tang1.jpg';

import './tables.css';

export default function Tables() {
  const { user, saveUser, clearUser } = useLocalStorageUser();
  const navigate = useNavigate();

  return (
    <section className=''>
      {user ? (
        <div className='section__Tables'>
          <div className='row table-content'>
            <div className='col-md-3'>Tầng 1</div>
            <div className='col-md-9'>
              <img src={tang1} alt='Tang 1' />
            </div>
          </div>

          <div className='row table-content'>
            <div className='col-md-3'>Tầng G </div>
            <div className='col-md-9'>
              <img src={tangG} alt='Tang G' />
            </div>
          </div>
        </div>
      ) : (
        <div className='authCheck'>
          <div className='text-center'>
            <h1 className='text-danger'>Chức năng chỉ cho nhân viên</h1>
            <button className='btn btn-outline-success' onClick={() => navigate('/login-page')}>Đăng nhập để tiếp tục</button>
          </div>
        </div>
      )}
    </section>
  );
}
