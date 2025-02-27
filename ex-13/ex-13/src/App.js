import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from "react";
import UserPosts from "./components/UserPosts";
import ValidatedInput from "./components/ValidatedInput";
import LoginForm from "./components/LoginForm";
import 'bootstrap/dist/css/bootstrap.min.css';
import RegistrationForm from './components/RegistrationForm';

const App = () => {
  const [userId, setUserId] = useState(1);

  return (
    <div>
      {/* <h1>Danh sách bài viết của người dùng {userId}</h1>
      <UserPosts userId={userId} />
      <button onClick={() => setUserId(userId + 1)}>
        Xem bài viết của người dùng khác
      </button> */}
      <ValidatedInput />
      <LoginForm />
      <RegistrationForm/>
    </div>
  );
};

export default App;
