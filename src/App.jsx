import { useState } from "react";
import Header from "./components/Header";
import SwitchPage from "./components/SwitchPage";
import UserData from "./components/UserData";
import Button from "./components/Button";
import SearchUserById from "./components/SearchUserById";

function App() {
  const [showData, setShowData] = useState(false);

  return (
    <div>
      <Header />
      <SwitchPage />

      {showData ? (
        <Button
          btnText={"Hide User Data"}
          btnFn={() => {
            setShowData(false);
          }}
        />
      ) : (
        <Button
          btnText={"Show User Data"}
          btnFn={() => {
            setShowData(true);
          }}
        />
      )}

      <SearchUserById />

      {showData ? <UserData /> : ""}

      
    </div>
  );
}

export default App;
