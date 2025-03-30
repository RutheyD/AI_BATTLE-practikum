import { createBrowserRouter } from "react-router";
import AppLayout from "./components/appLayout";
import AllChallenges from "./components/challenges/allChallenges";
import ShowChallenge from "./components/challenges/showChallenge";
import Home from "./components/home";
import Connect from "./components/connect";
import WinnersImages from "./components/challenges/winnersImages";

export const router = createBrowserRouter([
  
    {
        path: '/',
        element: <AppLayout />,
        children: [
          { index: true, element: <Home/> },
          { path: 'home', element: <Home/>},
          { path: 'connect', element: <Connect/>},
          { path: 'challenges', element: <AllChallenges /> },
          {
            path: 'allChallenges/:id', 
            element: <ShowChallenge />
          },
          { path: 'winners', element: <WinnersImages /> },
          
        ]
      }
])

 