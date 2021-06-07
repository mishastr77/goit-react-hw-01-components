import Profile from './components/socialProfile/Profile';
import user from './data/users.json';
import StatisticList from './components/statistic/StatisticList';
import statisticDate from './data/statistical-data.json';
import FriendList from './components/friendList/FriendList';
import friends from './data/friends.json';
import TransactionHistory from './components/transactions/TransactionHistory';
import transaction from './data/transactions.json';
import 'modern-normalize/modern-normalize.css';

const App = () => {
  return (
    <div>
      <Profile user={user} />
      <StatisticList statistics={statisticDate} />
      <FriendList friends={friends} />
      <TransactionHistory transaction={transaction} />
    </div>
  );
};

export default App;
