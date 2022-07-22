import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SideBar } from '../.';
import { ButtonAppBar } from '../.';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const root = document.getElementById('root');

const data = {
  company: 'Company Name',
  address: '2642 Ross Street #1138c Chicago, IL ',
  email: 'morehumanthanhuman.com',
  phone: '708-252-0235',
  activeIndex: 2,

  SideBarItems: [
    {
      title: 'Home',
      icon: <ListAltRoundedIcon />,
      to: '/',
    },
    {
      title: 'Compliance Review',
      icon: <PeopleAltRoundedIcon />,
      to: '/compliance-review',
    },
  ],
};
const App = () => {
  const [sidebar, setSidebar] = React.useState([]);
  const [profile, setProfile] = React.useState([]);

  const [companyData, setCompanyData] = React.useState({
    company: '',
    address: '',
    email: '',
    phone: '',
  });
  React.useEffect(() => {
    fetch('https://62c119a32af60be89ec1b31b.mockapi.io/api/v1/sidebar')
      .then((resp) => resp.json())
      .then((resp) => setSidebar(resp));
    fetch('https://62c119a32af60be89ec1b31b.mockapi.io/api/v1/company')
      .then((resp) => resp.json())
      .then((resp) => setCompanyData(resp[0]));
  });
  return (
    <div>
      <BrowserRouter>
        <Routes></Routes>
        <SideBar
          SideBarItems={sidebar}
          company={companyData.company}
          address={companyData.address}
          email={companyData.email}
          phone={companyData.phone}
          activeIndex={0}
        >
          <ButtonAppBar
            title1="Hello"
            title2="Hey"
            userName="Vikas"
            menuList={[
              {
                title: 'profile',
                icon: <PeopleAltRoundedIcon />,
                to: '/profile',
              },
            ]}
          />
        </SideBar>
      </BrowserRouter>
    </div>
  );
};

ReactDOM.render(<App />, root);
