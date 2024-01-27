import { Provider } from "react-redux";
import "./App.css";
import Body from "./components/Body";
import Head from "./components/Head";
import MainContainer from "./components/MainContainer";
import store from "./utils/store";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import WatchPage from "./pages/WatchPage";
import Error from "./components/Error";
function App() {
  const appRouter = createBrowserRouter([
    {
      path: "/",
      element: <Body />,
      children: [
        {
          path: "/",
          element: <MainContainer />,
        },
        {
          path: "watch",
          element: <WatchPage />,
        },
      ],
      errorElement: <Error />,
    },
  ]);
  return (
    <Provider store={store}>
      <div>
        <Head />
        <RouterProvider router={appRouter} />
        {/* 
      
      Head
      Body
       Sidebar
        MenuItems
       MainContainer
        BUttonList
        VideoContainer
          VideoCard
   
      
          
        */}
      </div>
    </Provider>
  );
}

export default App;
