import { useState } from "react";
import LoginPage from "./compoments/LoginPage";
import ProductPage from "./compoments/ProductPage";
function App() {
  const [isAuth, setIsAuth] = useState(false); //設定驗證初始狀態
 return <>
  {/* 產品表格(判斷顯示"登入畫面"or"商品列表(後台)") */}
  {isAuth ? (
    <ProductPage />
  ) : (
    <LoginPage setIsAuth={setIsAuth} />
  )}
</>
}

export default App;
