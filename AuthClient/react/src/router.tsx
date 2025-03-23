import { createBrowserRouter } from "react-router";
import AppLayout from "./components/appLayout";
import AllChallenges from "./components/challenges/allChallenges";
import ShowChallenge from "./components/challenges/showChallenge";
import Home from "./components/home";
import Connect from "./components/connect";

export const router = createBrowserRouter([
  
    {
        path: '/',
        element: <AppLayout />,
        children: [
          { path: 'home', element: <Home/>},
          { path: 'connect', element: <Connect/>},
          { path: 'challenges', element: <AllChallenges /> },
          {
            path: 'allChallenges/:id', // הכנס את ה-id בתוך ה-path של האתגר
            element: <ShowChallenge />
          }
        ]
      }
])

  // {
    //     path: '/',
    //     element: <AppLayout />,
    //     children: [
    //         { path: 'allChallenges', element: <AllChallenges /> },
    //         {
    //             path: 'allChallenges', element: <AllChallenges />,
    //             children: [
    //                 {
    //                     path: ':id',
    //                     element:<ShowChallenge/>
    //                 }]
    //         },
    //     ]
    // }