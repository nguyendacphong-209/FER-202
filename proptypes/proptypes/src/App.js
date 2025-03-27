
import './App.css';
import UserProfile from "./components/UserProfile";
import UserProfile2 from "./components/UserProfile2";
import MyForm from "./components/MyForm";
import UserForm from './components/UserForm';

function App() {
  const handleFormSubmit = (formData) => {
    console.log("Dữ liệu đã gửi:", formData);
  };

  return (
    <div className="App">
      <h1>Ứng Dụng React</h1>

      {/* Trường hợp hợp lệ */}
      <UserProfile name="Nguyễn Văn A" age={25} />

      {/* Trường hợp name không hợp lệ */}
      <UserProfile name="" age={25} />

      {/* Trường hợp tuổi không hợp lệ */}
      <UserProfile name="Nguyễn Văn B" age="twenty five" />

      {/* Trường hợp không nhập tuổi */}
      <UserProfile name="Nguyễn Văn C" age={null} />

      <h2>Vi du so 2 </h2>
      <UserProfile2 name="Nguyễn Văn A" age={25} onSubmit={handleFormSubmit} />
      <UserProfile2
        name="Nguyễn Văn B"
        age="twenty five"
        onSubmit={handleFormSubmit}
      />
      <UserProfile2 name="" age={30} onSubmit={handleFormSubmit} />

      <h3> Vi du so 3</h3>
      <MyForm title="Đăng Ký Người Dùng" onSubmit={handleFormSubmit} />
      <h4> Vi du so 4 </h4>
      <UserForm onSubmit={handleFormSubmit} />
    </div>

  );
}

export default App;
