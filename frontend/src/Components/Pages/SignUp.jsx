import React from 'react';
import { useTranslation } from 'react-i18next';

import avatarImages from '../../images/signup.jpg';
import SignUpForm from '../SignUpForm.jsx';

const SignUp = () => {
  const { t } = useTranslation();

  return (
    <div className="container-fluid h-100">
      <div className="row justify-content-center align-content-center h-100">
        <div className="col-12 col-md-8 col-xxl-6">
          <div className="card shadow-sm">
            <div className="card-body d-flex flex-column flex-md-row justify-content-around align-items-center p-5">
              <div>
                <img
                  style={{ width: '200px', height: '200px' }}
                  src={avatarImages}
                  className="rounded-circle img-thumbnail mt-5"
                  alt={t('signup.header')}
                />
              </div>
              <SignUpForm />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
