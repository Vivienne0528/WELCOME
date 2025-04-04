import { Route, Routes } from "react-router-dom"
import Login from "../components/Login"
import Register from "../components/Register"

export const AppRoutes = () => {
    return <Routes>
        <Route path="/" element={<Login />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/Register" element={<Register />}></Route>
    </Routes>
}
