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
import OrderCrypto from '../pages/OrderCrypto';
import OrderNFT from '../pages/OrderNFT';
import OrderPreview from '../pages/OrderPreview';
import SelectPay from '../pages/SelectPay';
import PaymentMethod from '../pages/PaymentMethod';
import WithdrawBalance from '../pages/WithdrawBalance';
import SelectLenguaje from '../pages/SelectLenguaje';
import WitdrawalDestination from '../pages/WitdrawalDestination';
import BankAccount from '../pages/BankAccount';
import BankAccountDetail from '../pages/BankAccountDetail';
import Navbar from '../component/Navbar';
import NavbarRetroceso from '../component/NavbarRetroceso';
import LinkYourBank from '../pages/LinkYourBank';
import ConfirmOrder from '../pages/ConfirmOrder';
import HistoryCrypto from '../pages/HistoryCrypto';
import Home from '../pages/Home';
import SearchCrypto from '../pages/SearchCrypto';
import Cryptocurrency from '../pages/Cryptocurrency';
import DetailChart from '../pages/DetailChart';
import PortfolioOfCrypto from '../pages/PortfolioOfCrypto';
import ExchangeCrypto from '../pages/ExchangeCrypto';
import BuyCrypto from '../pages/BuyCrypto';
import SellCrypto from '../pages/SellCrypto';
import PushNotification from '../pages/PushNotification';
import HelpCenter from '../pages/HelpCenter';
import Faq from '../pages/Faq';
import Historial from '../pages/Historial';
import Options from '../pages/Options';
import BuyCrypto2 from '../pages/BuyCrypto2';
import BuyCrypto3 from '../pages/BuyCrypto3';
import BuyCrypto4 from '../pages/BuyCrypto4';
import RedWallet from '../pages/Redwallet';
import DetailCategory from '../pages/DetailCategory';
import Collection from '../pages/Collections';
import Activity from '../pages/Activity';
import Send from '../pages/Send';


const App = () => {
  return (
    <Router>
      <div className="min-h-screen">
        {/* Rutas de la aplicación */}
        <Routes>
        
          <Route path="/welcome" element ={<Welcome/>} />
          <Route path="/redwallet" element ={<RedWallet/>} />
          <Route path="/signup" element ={<SignUp/>}/>
          <Route path="/login" element ={<Login/>}/>
          <Route path="/home" element ={<Home/>}/>
          <Route path="/phonenumber" element ={<PhoneNumber/>}/>
          <Route path="/detailcategory" element ={<DetailCategory/>}/>
          <Route path="/collection" element ={<Collection/>}/>
          <Route path="/activity" element ={<Activity/>}/>
          <Route path="/verificationcode" element ={<VerificationCode/>}/>
          <Route path="/forgotpassword" element ={<ForgotPassword/>}/>
          <Route path="/myaccount" element ={<MyAccount/>}/>
          <Route path="/options" element ={<Options/>}/>
          <Route path="/personaldata" element ={<PersonalData/>}/>
          <Route path="/getstarted" element ={<GetStarted/>} />
          <Route path="/send" element ={<Send/>} />
          <Route path="/bankaccount" element ={<BankAccount/>} />
          <Route path="/linkyourbank" element ={<LinkYourBank/>} />
          <Route path="/bankaccountdetail" element ={<BankAccountDetail/>} />
          <Route path="/started" element ={<Started/>} />
          <Route path="/onboarding" element ={<Onboarding/>} />
          <Route path="/witdrawaldestination" element ={<WitdrawalDestination/>} />
          <Route path="/ordersuccess" element ={<OrderSuccess/>} />
          <Route path="/successstate" element ={<SuccessState/>} />
          <Route path="/historycrypto" element ={<HistoryCrypto/>} />
          <Route path="/cryptocurrency" element ={<Cryptocurrency/>} />
          <Route path="/detailchart" element ={<DetailChart/>} />
          <Route path="/portfolioofcrypto" element ={<PortfolioOfCrypto/>} />
          <Route path="/exchangecrypto" element ={<ExchangeCrypto/>} />
          <Route path="/buycrypto" element ={<BuyCrypto/>} />
          <Route path="/buycrypto2" element ={<BuyCrypto2/>} />
          <Route path="/buycrypto3" element ={<BuyCrypto3/>} />
          <Route path="/buycrypto4" element ={<BuyCrypto4/>} />
          <Route path="/sellcrypto" element ={<SellCrypto/>} />
          <Route path="/searchcrypto" element ={<SearchCrypto/>} />
          <Route path="/ordercrypto" element ={<OrderCrypto/>} />
          <Route path="/confirmorder" element ={<ConfirmOrder/>} />
          <Route path="/withdrawbalance" element ={<WithdrawBalance/>} />
          <Route path="/selectlenguaje" element ={<SelectLenguaje/>} />
          <Route path="/ordernft" element ={<OrderNFT/>} />
          <Route path="/selectpay" element ={<SelectPay/>} />
          <Route path="/orderpreview" element ={<OrderPreview/>} />
          <Route path="/faceid" element ={<Faceid/>} />
          <Route path="/finger" element ={<Finger/>} />
          <Route path="/topupbalance" element ={<TopupBalance/>} />
          <Route path="/paymentmethod" element ={<PaymentMethod/>} />
          <Route path="/uploadphoto" element ={<UploadPhoto/>} />
          <Route path="/proofofresidency" element ={<ProofOfResidency/>} />
          <Route path="/countryofresidence" element ={<CountryOfResidence/>} />
          <Route path="/selectareason" element ={<SelectAReason/>} />
          <Route path="/createpin" element ={<CreatePin/>} />
          <Route path="/uploadidphoto" element ={<UploadIdPhoto/>} />
          <Route path="/verifysuccess" element ={<VerifySuccess/>} />
          <Route path="/pushnotification" element ={<PushNotification/>} />
          <Route path="/helpcenter" element ={<HelpCenter/>} />
          <Route path="/historial" element ={<Historial/>} />
          <Route path="/faq" element ={<Faq/>} />
          <Route path="/termandconditions" element ={<TermAndConditions/>} />
          <Route path="/privacyPolitic" element ={<PrivacyPolitic/>} />
         
        </Routes>
      </div>
    </Router>
  );
};

export default App;
