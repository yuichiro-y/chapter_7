import { BrowserRouter ,Routes, Route, Navigate} from "react-router-dom"
import App from "./App"
import { TopPage } from "./TopPage"
import { PostDetail } from "./Detail"
import { Contact } from "./ContactPage"

export const RouteLink = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<App />}>
          <Route index element={<TopPage />}/>
            <Route path="Contact" element={<Contact />} />          
            <Route path="posts" element={<Navigate to="/" replace />} />
            <Route path="posts/:id" element={<PostDetail />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}