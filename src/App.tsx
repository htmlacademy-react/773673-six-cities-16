import Main from './pages/Main';

interface IProps {
  offersCount: number;
}

const App = ({ offersCount }: IProps) => <Main offersCount={offersCount} />;

export default App;
