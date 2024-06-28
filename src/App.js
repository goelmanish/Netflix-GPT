import { Provider } from "react-redux";
import Body from "./components/Body";
import appStore from "./utils/appStore";
import {
  BrowserRouter,
  Route,
  RouterProvider,
  Routes,
  createBrowserRouter,
} from "react-router-dom";
import Login from "./components/Login";
import Browse from "./components/Browse";

function App() {
  const appRoute = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children:[
         {
            path: "",
            element: <Login />,
          }
          ,
          { 
            path: "browse", 
            element: <Browse /> 
          },
        
      ]
    }
  ]);

  return (
    <Provider store={appStore}>
      <RouterProvider  router={appRoute} />
    </Provider>   
  );
}

export default App;
