import Inputs from './components/Inputs'
import Components from './components/Inputs01'
import NewComponent from './components/newComponent'
import MyComponent from './components/myComponents'
import PracCompo from './components/pracCompo'
import MultiForm from './components/multiForm'
import NewApi from './components/newAPI'
import ProjectCompo from './components/projCompo'
import ColorPicker from './components/colorPicker'
import InputColor from './components/InputColor'
import Greetings from './components/greetings'
import SignUp from './components/sgnUp'
import Login from './components/login'
import { Route, Routes } from 'react-router-dom'
import HomePage from './components/homePage'
import ListUsers from './components/users/listUsers'
import CreateUser from './components/users/addUser'
import './App.css'
import QuoteDetails from './components/quotes/quoteDetails'
import Quotes from './components/quotes/quote'
import Search from './primeComponents/users/search'
import { USER_SEARCH_PATH, QUOTE_DETAIL_PATH, QUOTE_PATH, USER_ADD_PATH, USER_PATH } from './constant/routePath'


function App() {

  return (

    <div className="container mx-auto">
      <Routes>
        <Route path='/' element={<HomePage />}></Route>
        <Route path="/inputs" element={<Inputs />}></Route>
        <Route path="/components" element={<Components />}></Route>
        <Route path="/newcomponent" element={<NewComponent />}></Route>
        <Route path="/mycomponent" element={<MyComponent />}></Route>
        <Route path="/praccompo" element={<PracCompo />}></Route>
        <Route path="/multiform" element={<MultiForm />}></Route>
        <Route path="/newapi" element={<NewApi />}></Route>
        <Route path="/projectcompo" element={<ProjectCompo />}></Route>
        <Route path="/colorpicker" element={<ColorPicker />}></Route>
        <Route path="/inputcolor" element={<InputColor />}></Route>
        <Route path="/greetings" element={<Greetings />}></Route>
        <Route path="/newapi" element={<NewApi />}></Route>
        <Route path="/signup" element={<SignUp />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path={QUOTE_PATH} element={<Quotes />}></Route>
        <Route path={QUOTE_DETAIL_PATH} element={<QuoteDetails />}></Route>
        <Route path={USER_PATH} element={<ListUsers />}></Route>
        <Route path={USER_ADD_PATH} element={<CreateUser />}></Route>
        <Route path={USER_ADD_PATH} element={<CreateUser />}></Route>
        <Route path={USER_SEARCH_PATH} element={<Search />}></Route>
      </Routes>

    </div>



  )
}

export default App
