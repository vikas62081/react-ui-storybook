import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { SideBar } from '../.';
import { ButtonAppBar } from '../.';
import ListAltRoundedIcon from '@mui/icons-material/ListAltRounded';
import PeopleAltRoundedIcon from '@mui/icons-material/PeopleAltRounded';
import SettingsIcon from '@mui/icons-material/Settings';
import LogoutOutlinedIcon from '@mui/icons-material/LogoutOutlined';
import LockIcon from '@mui/icons-material/Lock';

const root = document.getElementById('root');

const menuList = [
  {
    title: 'Account Settings',
    icon: <SettingsIcon fontSize="small" />,
    to: '/AccountSettings',
  },
  {
    title: 'Change Password',
    icon: <LockIcon fontSize="small" />,
    to: '/ChangePassword',
  },
  {
    title: 'Log out',
    icon: <LogoutOutlinedIcon fontSize="small" />,
    to: '/LogOut',
  },
];
const data = {
  company: 'Company Name',
  address: '2642 Ross Street #1138c Chicago, IL ',
  email: 'morehumanthanhuman.com',
  phone: '708-252-0235',
  Image:
    'https://robohash.org/inventoresapientemollitia.png?size=50x50&set=set1',

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

  const [companyData, setCompanyData] = React.useState({
    company: '',
    address: '',
    email: '',
    phone: '',
    image: '',
  });
  React.useEffect(() => {
    fetch('https://62c119a32af60be89ec1b31b.mockapi.io/api/v1/sidebar')
      .then((resp) => resp.json())
      .then((resp) => setSidebar(resp));
    fetch('https://62c119a32af60be89ec1b31b.mockapi.io/api/v1/company')
      .then((resp) => resp.json())
      .then((resp) => setCompanyData(resp[0]));
  }, []);

  return (
    <div>
      {' '}
      <ButtonAppBar
        title1="Explore myCOI Central"
        title2="Feedback"
        userName="Test User"
        menuList={menuList}
        image="https://robohash.org/inventoresapientemollitia.png?size=50x50&set=set1"
      />
      <SideBar
        SideBarItems={sidebar}
        company={companyData.company}
        address={companyData.address}
        email={companyData.email}
        phone={companyData.phone}
        activeIndex={0}
        // image={companyData?.image}
        image="https://robohash.org/inventoresapientemollitia.png?size=50x50&set=set1"
      />
    </div>
  );
};

ReactDOM.render(<App />, root);
