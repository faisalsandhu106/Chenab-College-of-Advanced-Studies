import { Navigate, Route, Routes } from "react-router-dom"
import { useState } from "react"
import Home from "./UserPages/Home"
import About from "./UserPages/About"
import ContactUs from "./UserPages/ContactUs"
import Header from "./Components/Common/Header"
import Course from "./UserPages/Course"
import ApplyForm from "./UserPages/ApplyForm"
import Footer from "./Components/Common/Footer"
import NotFoundPage from "./UserPages/NotFoundPage"
import SingleCourse from "./Components/CourseComp/SingleCourse"
import SingleEvents from "./Components/EventComp/SingleEvents"
import Events from "./UserPages/Events"
import SignUp from "./Admin/SignUp"
import Login from "./Admin/Login"
import RefreshHandle from "./Admin/RefreshHandle"
import AdminPanel from "./Admin/AdminPages/AdminPanel"
import AdminDashboard from "./Admin/AdminPages/AdminDashboard"
import AdmissionForm from "./Admin/AdminPages/AdmissionForm"
import StudentReview from "./Admin/AdminPages/StudentReviews"
import ContactForm from "./Admin/AdminPages/ContactForm"
import Courses from "./Admin/AdminPages/Courses"
import Event from "./Admin/AdminPages/Event"
import UpdateEvent from "./Admin/AdminPages/AdminComponents/EventComp/UpdateEvent"
import CreateEvent from "./Admin/AdminPages/AdminComponents/EventComp/CreateEvent"
import IndivContactForm from "./Admin/AdminPages/AdminComponents/ContactFormComp/IndivContactForm"
import CreateCompuCourse from "./Admin/AdminPages/AdminComponents/CourseComp/CreateCompuCourse"
import UpdateCompuCourse from "./Admin/AdminPages/AdminComponents/CourseComp/UpdateCompuCourse"
import UpdateAllCourse from "./Admin/AdminPages/AdminComponents/CourseComp/UpdateAllCourse"
import CreateAllCourses from "./Admin/AdminPages/AdminComponents/CourseComp/CreateAllCourses"
import IndivStudentReview from "./Admin/AdminPages/AdminComponents/studentreviewsComp/IndivStudentReview"
import IndivStudentAddmission from "./Admin/AdminPages/AdminComponents/AdmissionformComp/IndivStudentAddmission"
import ScrollTheTop from "./Components/Common/ScrollTheTop"
import AdminProfileEdit from "./Admin/AdminPages/AdminProfileEdit"

function App() {
  const [isAuthenticated, setAuthenticated] = useState(false);

  const PrivateRoute = ({ element }) => {
    return isAuthenticated ? element : <Navigate to={'/login'} />
  };

  return (
    <>
      <RefreshHandle setAuthenticated={setAuthenticated} />
      <Header />
      <ScrollTheTop />
      <Routes>
        <Route path="/" element={<Navigate to='/home' />} />
        <Route path="/home" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/course" element={<Course />} />
        <Route path="/course/:id/singlePage" element={<SingleCourse />} />
        <Route path="/event" element={<Events />} />
        <Route path="/event/:id/singlePage" element={<SingleEvents />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/apply-form" element={<ApplyForm />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        <Route path="/admin" element={<AdminPanel />}>
          <Route path='/admin/dashboard' element={<PrivateRoute element={<AdminDashboard />} />} />

          <Route path="/admin/edit-profile/:id" element={<AdminProfileEdit />} />

          <Route path="/admin/allcourses" element={<Courses />} />
          <Route path="/admin/allcourses/:id/edit" element={<UpdateAllCourse />} />
          <Route path="/admin/allcourses/create" element={<CreateAllCourses />} />
          <Route path="/admin/ITcourse/:id/edit" element={<UpdateCompuCourse />} />
          <Route path="/admin/ITcourse/create" element={<CreateCompuCourse />} />

          <Route path="/admin/contactform" element={<ContactForm />} />
          <Route path="/admin/contactform/:id" element={<IndivContactForm />} />

          <Route path="/admin/allevents" element={<Event />} />
          <Route path="/admin/allevents/:id/edit" element={<UpdateEvent />} /> 
          <Route path="/admin/allevents/create" element={<CreateEvent />} />

          <Route path="/admin/studentreviews" element={<StudentReview />} />
          <Route path="/admin/studentreviews/:id" element={<IndivStudentReview />} />

          <Route path="/admin/admissionform" element={<AdmissionForm />} />
          <Route path="/admin/admissionform/:id" element={<IndivStudentAddmission />} />

        </Route>
        <Route path="/*" element={<NotFoundPage />} />
      </Routes >
      <Footer />
    </>
  )
}

export default App
