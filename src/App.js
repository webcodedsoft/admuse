import React, {Component} from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import './App.css';
import NavBarStyleOne from './components/common/NavBarStyleOne';
import Home from './components/homepage/Home';
import NotFound from './components/notfound/NotFound';
import MediaHouses from './components/media-house/mediaHouses';
import MediaHouse from './components/media-house/mediaHouse';
import MediaHouseForm from './components/media-house/mediaHouseForm';
import MediaHouseOwned from './components/media-house/mediaHouseOwned';
import RegisterForm from './components/auth/registerForm';
import LoginForm from './components/auth/loginForm';

import Logout from './components/auth/logout';
import WalletHistory from './components/user/WalletHistory';
import TypeForm from './components/media-house/type/typeForm';
import Programs from './components/media-house/programs/programs';
import programForm from './components/media-house/programs/programForm';
import Slots from './components/media-house/slots/slots';
import SlotForm from './components/media-house/slots/slotForm';
import SearchSlot from './components/media-house/slots/searchSlot';
import SearchResult from './components/media-house/slots/searchResult';
import AgeGroups from './components/media-house/age-group/ageGroups';
import AgeGroupForm from './components/media-house/age-group/ageGroupForm';
import CostFactorForm from './components/media-house/cost-factor/costFactorForm';
import CostFactor from './components/media-house/cost-factor/costFactor';
import InterestForm from './components/media-house/interest/interestForm';
import Interest from './components/media-house/interest/interest';
import LiteracyLevelForm from './components/media-house/literacy-level/literacyLevelForm';
import LiteracyLevel from './components/media-house/literacy-level/literacyLevel';
import ProfessionalLevel from './components/media-house/professional-level/professionalLevel';
import ProfessionalLevelForm from './components/media-house/professional-level/professionalLevelForm';
import SocialClass from './components/media-house/social-class/socialClass';
import Channels from './components/media-house/channel/channels';
import Schedule from './components/media-house/schedule/schedule';
import ChannelForm from './components/media-house/channel/channelForm';
import SocialClassForm from './components/media-house/social-class/socialClassForm';
import ScheduleForm from './components/media-house/schedule/scheduleForm';
import Subchannels from './components/media-house/subchannel/subchannels';
import SubChannelForm from './components/media-house/subchannel/subchannelForm';
import UserList from './components/user/UserList';
import UserForm from './components/user/userForm';

import ListSlots from './components/media-house/slots/listSlots';
import Cart from './components/cart/cart';
import Bids from './components/cart/bids';
import Bookings from './components/bookings/bookings';
import AllPrograms from './components/media-house/programs/allPrograms';

import Contacts from "./components/media-house/contacts/Contacts";
import ContactCreate from "./components/media-house/contacts/ContactCreate";
import Wishlist from './components/cart/wishlist';
import ProgramDetails from './components/media-house/programs/programDetails';

import { loadProgressBar } from 'axios-progress-bar';
import 'axios-progress-bar/dist/nprogress.css';
import MediaHouseDetails from './components/media-house/mediaHouseDetails';
import SlotDetails from './components/media-house/slots/SlotDetails';
import ChooseSlot from './components/media-house/slots/chooseSlot';
import MediaCalendar from './components/media-house/slots/mediaCalendar';
import SlotsAll from './components/media-house/slots/slotsAll';
import AllData from './components/media-house/allData';
import MediaHouseDashboard from './components/user/mediaHouseDashboard';
import CampaigneDashboard from './components/user/campaigneDashboard';

import auth from './services/authService';
import ProtectedRoute from './components/common/protectedRoute';
import Types from './components/media-house/type/types';
import BookingsManage from './components/bookings/bookingsManage';
import SelectMediaHouses from './components/media-house/wizard/SelectMediaHouse';
import SelectProgram from './components/media-house/wizard/SelectProgram';
import ManageBids from './components/cart/ManageBids';
import SelectSlots from './components/media-house/wizard/SelectSlots';
import BulkUpload from './components/media-house/BulkUpload';
import Account from './components/user/Account';
import BulkSlotUpload from './components/media-house/slots/BulkSlotUpload';
import Size from './components/media-house/sizes/size';
import SizeForm from './components/media-house/sizes/sizeForm';
import ConfirmBooking from './components/cart/confirmBooking';

loadProgressBar();

class App extends Component {

  state = {};

  componentDidMount() {
    const user = auth.getCurrentUserObject();
    this.setState({user});
    
  }

  render() {
      return (
        <div>
          <NavBarStyleOne user={this.state.user} />
          <Switch>
            
            <ProtectedRoute path='/cart/checkout' component={ConfirmBooking} />
            <Route path='/cart' component={Cart} />

            <ProtectedRoute path='/bids/manage' component={ManageBids} />
            <ProtectedRoute path='/bids' component={Bids} />
            <ProtectedRoute path='/wishlist' component={Wishlist} />

            <ProtectedRoute path='/users/create' component={UserForm} />
            <ProtectedRoute path='/users/edit/:user' component={UserForm} />
            <ProtectedRoute path='/users' component={UserList} />
            <ProtectedRoute path='/user/wallet-history' component={WalletHistory} />
            <ProtectedRoute path='/user/account' component={Account} />
            <ProtectedRoute path='/user/bookings' component={Bookings} />
            <ProtectedRoute path='/bookings/manage' component={BookingsManage} />

            <ProtectedRoute path='/age-group/edit/:agegroup' component={AgeGroupForm} />
            <ProtectedRoute path='/age-group/create' component={AgeGroupForm} />
            <ProtectedRoute path='/age-group/list' component={AgeGroups} />

            <ProtectedRoute path='/cost-factor/edit/:cost_factor' component={CostFactorForm} />
            <ProtectedRoute path='/cost-factor/create' component={CostFactorForm} />
            <ProtectedRoute path='/cost-factor/list' component={CostFactor} />

            <ProtectedRoute path='/interest/edit/:interest' component={InterestForm} />
            <ProtectedRoute path='/interest/create' component={InterestForm} />
            <ProtectedRoute path='/interest/list' component={Interest} />

            <ProtectedRoute path='/literacy-level/edit/:level' component={LiteracyLevelForm} />
            <ProtectedRoute path='/literacy-level/create' component={LiteracyLevelForm} />
            <ProtectedRoute path='/literacy-level/list' component={LiteracyLevel} />

            <ProtectedRoute path='/professional-level/edit/:level' component={ProfessionalLevelForm} />
            <ProtectedRoute path='/professional-level/create' component={ProfessionalLevelForm} />
            <ProtectedRoute path='/professional-level/list' component={ProfessionalLevel} />

            <ProtectedRoute path='/schedule/list' component={Schedule} />
            <ProtectedRoute path='/schedule/edit/:schedule' component={ScheduleForm} />
            <ProtectedRoute path='/schedule/create' component={ScheduleForm} />

            <ProtectedRoute path='/sizes/list' component={Size} />
            <ProtectedRoute path='/sizes/edit/:size' component={SizeForm} />
            <ProtectedRoute path='/sizes/create' component={SizeForm} />

            <ProtectedRoute path='/contacts/create' component={ContactCreate} />
            <ProtectedRoute path='/contacts' component={Contacts} />

            <ProtectedRoute path='/social-class/list' component={SocialClass} />
            <ProtectedRoute path='/social-class/edit/:social_class' component={SocialClassForm} />
            <ProtectedRoute path='/social-class/create' component={SocialClassForm} />

            <ProtectedRoute path='/channels/list' component={Channels} />
            <ProtectedRoute path='/channels/edit/:channel' component={ChannelForm} />
            <ProtectedRoute path='/channels/create' component={ChannelForm} />
            <ProtectedRoute path='/channels/subchannels/list/:channel' component={Subchannels} />
            <ProtectedRoute path='/media-house/channel/:channel/subchannels/edit/:subchannel' component={SubChannelForm} />
            <ProtectedRoute path='/media-house/channel/:channel/subchannels/create' component={SubChannelForm} />

            <ProtectedRoute path='/types/create' component={TypeForm} />
            <ProtectedRoute path='/types/list' component={Types} />
            
            <ProtectedRoute path="/wizard/:action/select/media-house" component={SelectMediaHouses} />
            <ProtectedRoute path="/wizard/select/program/:shortname" component={SelectProgram} />
            <ProtectedRoute path="/wizard/select/slot/:shortname" component={SelectSlots} />

            <ProtectedRoute path='/media-house/slot/media-calendar' component={MediaCalendar} />
            <Route path='/media-house/slot/choose' component={ChooseSlot} />
            <Route path='/media-house/slot/view/:slot_id' component={SlotDetails} />
            <Route path='/media-house/slot/list/:location?/:social_class?' exact component={ListSlots} />
            <ProtectedRoute path='/media-house/slot/search/result' component={SearchResult} />
            <ProtectedRoute path='/media-house/slot/search' component={SearchSlot} />
            <ProtectedRoute path='/media-house/:shortname/program/:programname/slot/create' component={SlotForm} />
            <ProtectedRoute path='/media-house/:shortname/program/:programname/slot/upload' component={BulkSlotUpload} />
            <ProtectedRoute path='/media-house/:shortname/program/:programname/slot/list' component={Slots} />
            <ProtectedRoute path='/slots/all' component={SlotsAll} />

            <ProtectedRoute path='/all-data' component={AllData} />


            <ProtectedRoute path='/campaigns-dashboard' component={CampaigneDashboard} />
            <ProtectedRoute path='/program/:media_house/:shortname' component={ProgramDetails} />
            <ProtectedRoute path='/media-house/:shortname/program/list' component={Programs} />
            <ProtectedRoute path='/media-house/:shortname/program/create' component={programForm} />
            <ProtectedRoute path='/all-programs' component={AllPrograms} />

            <ProtectedRoute path='/media-house/info/:shortname' component={MediaHouseDetails} />
            <ProtectedRoute path='/media-house/view/:shortname' component={MediaHouse} />
            <ProtectedRoute path='/media-house/owned' component={MediaHouseOwned} />
            <ProtectedRoute path='/media-house/edit/:shortname' component={MediaHouseForm} />
            <ProtectedRoute path='/media-house/bulk-upload' component={BulkUpload} />
            <ProtectedRoute path='/media-house/create' component={MediaHouseForm} />
            <ProtectedRoute path='/media-house/dashboard' component={MediaHouseDashboard} />
            <ProtectedRoute path='/media-house' component={MediaHouses} />

            <Route path='/logout' component={Logout} />
            <Route path='/login' component={LoginForm} />
            <Route path='/register' component={RegisterForm} />
            <Route path='/not-found' component={NotFound} />
            <Route path="/" exact component={ Home } /> 
            <Redirect to="/not-found" />
          </Switch>
        </div>
      );
  }
}

export default App;
