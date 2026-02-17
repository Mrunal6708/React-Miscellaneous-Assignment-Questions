import React,{Suspense} from "react";
//  import UserProfile from './UserProfile.js'; // expects exact match


const UserProfileLazy = React.lazy(() => import("./UserProfile"));
function App() {
  return (
    <div>
      <h1>MY App</h1>
      <Suspense fallback={<h2>Loading...</h2>}>
        <UserProfileLazy />
      </Suspense>
    </div>
  );
}

export default App;