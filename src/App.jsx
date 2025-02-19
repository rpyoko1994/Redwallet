import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import './App.css'
import Welcome from '../pages/welcome';
import TermAndConditions from '../pages/term&conditions';
import PrivacyPolitic from '../pages/privacypolitic';
import Onboarding from '../pages/onboarding';
import OrderSuccess from '../pages/OrderSuccess';
import TopupBalance from '../pages/TopupBalance';
import Faceid from '../pages/FaceID';
import Finger from '../pages/finger';
import GetStarted from '../pages/GetStarted';
import Started from '../pages/Started';
import UploadPhoto from '../pages/UploadPhoto';
import VerifySuccess from '../pages/VerifySucess';
import UploadIdPhoto from '../pages/UploadIdPhoto';
import ProofOfResidency from '../pages/ProofOfResidency';
import SelectAReason from '../pages/SelectAReason';
import CountryOfResidence from '../pages/CountryOfResidence';
import SuccessState from '../pages/SuccessState'
import CreatePin from '../pages/CreatePin';
import SignUp from '../pages/SignUp';
import Login from '../pages/Login';
import VerificationCode from '../pages/VerificationCode';
import PhoneNumber from '../pages/PhoneNumber';
import ForgotPassword from '../pages/ForgotPassword';
import MyAccount from '../pages/MyAccount';
import PersonalData from '../pages/PersonalData';


const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        {/* Rutas de la aplicación */}
        <Routes>
        
          <Route path="/welcome" element ={<Welcome/>} />
          <Route path="/signup" element ={<SignUp/>}/>
          <Route path="/login" element ={<Login/>}/>
          <Route path="/phonenumber" element ={<PhoneNumber/>}/>
          <Route path="/verificationcode" element ={<VerificationCode/>}/>
          <Route path="/forgotpassword" element ={<ForgotPassword/>}/>
          <Route path="/myaccount" element ={<MyAccount/>}/>
          <Route path="/personaldata" element ={<PersonalData/>}/>
          <Route path="/getstarted" element ={<GetStarted/>} />
          <Route path="/started" element ={<Started/>} />
          <Route path="/onboarding" element ={<Onboarding/>} />
          <Route path="/ordersuccess" element ={<OrderSuccess/>} />
          <Route path="/successstate" element ={<SuccessState/>} />
          <Route path="/faceid" element ={<Faceid/>} />
          <Route path="/finger" element ={<Finger/>} />
          <Route path="/topupbalance" element ={<TopupBalance/>} />
          <Route path="/uploadphoto" element ={<UploadPhoto/>} />
          <Route path="/proofofresidency" element ={<ProofOfResidency/>} />
          <Route path="/countryofresidence" element ={<CountryOfResidence/>} />
          <Route path="/selectareason" element ={<SelectAReason/>} />
          <Route path="/createpin" element ={<CreatePin/>} />
          <Route path="/uploadidphoto" element ={<UploadIdPhoto/>} />
          <Route path="/verifysuccess" element ={<VerifySuccess/>} />
          <Route path="/termandconditions" element ={<TermAndConditions/>} />
          <Route path="/privacyPolitic" element ={<PrivacyPolitic/>} />
         
        </Routes>
      </div>
    </Router>
  );
};

export default App;
