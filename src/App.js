import {ItemsContextProvider} from './contextAPI/globalState';
import Form from './Components/Form'
import ListItems from './Components/List';
import {AppContainer , AppHeader } from './styles';
function App() {
  return (
    <ItemsContextProvider>
      <AppContainer>
        <AppHeader>To-do List </AppHeader>
        <Form/>
        <ListItems/>
      </AppContainer>
    </ItemsContextProvider>

  );
}

export default App;
