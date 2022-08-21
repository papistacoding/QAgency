import './App.css';
import { routes } from './Routes/routes';
import { Route, Routes, BrowserRouter } from 'react-router-dom';
import { ILoggerProps } from './interfaces/LoggerProps';
import { PostsList } from './Components/PostsList';
import { Post } from './Components/Post';
import { NotFound } from './Components/NotFound';

export const App = (props:ILoggerProps) => {
  console.log(props.consoleLogger, "<App>");
  
  return (
    <>
      <BrowserRouter>
        <Routes>
           {/* { routes.map((route:any) =>  <Route path={route.path} element={route.component}/>)}  ovako bi inace napravio ali kroz 20 min nisam nasao nacin da posaljem propove pa sam odustao jer se zurim  */}
          <Route path='/posts' element={<PostsList consoleLogger={props.consoleLogger}/>}/>
          <Route path='/posts/:postId' element={<Post consoleLogger={props.consoleLogger}/>}/>
          <Route path='/*' element={<NotFound consoleLogger={props.consoleLogger}/>}/>
        </Routes>
      </BrowserRouter>
    </>
  );
}

