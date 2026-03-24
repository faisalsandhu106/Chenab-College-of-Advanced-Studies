import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../AdminReducer/AdminReducer'
import axios from "axios";
import { hendleError, hendleSuccess } from "../../Components/Utils";

const API = "https://chenab-college-backend.vercel.app/admin";

const AdminContext = createContext();

const initialState = {
    //* ------------------
    AllCourse: [],
    isCourseLoading: false,
    IsCourseError: false,

    //* ------------------
    AllITCourse: [],
    isITCourseLoading: false,
    IsITCourseError: false,

    //* ------------------
    AllEvent: [],
    isEventLoading: false,
    IsEventError: false,

    //* ------------------
    AllContactForm: [],
    isContactFormLoading: false,
    IsContactFormError: false,

    //* ------------------
    AllStudentReview: [],
    isStudentReviewLoading: false,
    IsStudentReviewError: false,

    //* ------------------
    AllStudentAddmission: [],
    isStudentAddmissionLoading: false,
    IsStudentAddmissionError: false,

    //* ------------------

};

const AdminProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    //* Get All Course API Data
    //* -------------------------
    const getAllCourse = async () => {
        dispatch({ type: "SET_COURSE_LOADING" })
        try {
            const res = await axios.get(`${API}/allcourse`)
            const Allcourse = await res.data;
            // console.log('data', Allcourse)
            dispatch({ type: "SET_COURSE_DATA", payload: Allcourse })

        } catch (error) {
            dispatch({ type: "SET_COURSE_ERROR", error })
        }
    };


    //! Delete Course in Admin Panel
    //! -----------------------------
    const deleteCourse = async (id) => {
        try {
            const isConfirmed = window.confirm("Are you sure you want to delete this Course");
            if (!isConfirmed) {
                return;
            };

            const res = await axios.delete(`${API}/allcourse/delete/${id}`);
            if (res) {
                hendleSuccess('Delete Successfully')
            }

        } catch (error) {
            console.log(error)
        }

        // const isConfirmed = window.confirm("Are you sure you want to delete this course?")
        // if (!isConfirmed) {
        //     return;
        // };
        // const res = await fetch(`${API}/allcourse/delete/${id}`, {
        //     method: 'DELETE',
        //     headers: {
        //         'Content-Type': 'application/json'
        //     }
        // })

        // const Apidata = await res.json()
        // // console.log(Apidata)

        // if (res.ok) {
        //     hendleSuccess('Delete Successfully')
        // } else if (!res) {
        //     hendleError('Delete error')
        // }
    };


    //* Get All Computer Courses API Data
    //* -----------------------------
    const getAllITCourseForm = async () => {
        dispatch({ type: "SET_ITCOURSE_LOADING" })
        try {
            const res = await axios.get(`${API}/allComputerCourse`)
            const data = await res.data;
            // console.log('data', data)
            dispatch({ type: "SET_ITCOURSE_DATA", payload: data })

        } catch (error) {
            dispatch({ type: "SET_ITCOURSE_ERROR", error })
        }
    };


    //! Delete Course Blog in Admin Panel
    //! ---------------------------------
    const deleteCourseBlog = async (id) => {
        try {
            const isConfirmed = window.confirm("Are you sure you want to delete this Course Blog");
            if (!isConfirmed) {
                return;
            };

            const res = await axios.delete(`${API}/ComputerCourse/delete/${id}`);
            if (res) {
                hendleSuccess('Delete Successfully')
            }

        } catch (error) {
            console.log(error)
        }
    };


    //* Get All Event API Data
    //* -------------------------
    const getAllEvent = async () => {
        dispatch({ type: "SET_EVENT_LOADING" })
        try {
            const res = await axios.get(`${API}/allevent`)
            const AllEvent = await res.data;
            // console.log('data', AllEvent)
            dispatch({ type: "SET_EVENT_DATA", payload: AllEvent })

        } catch (error) {
            dispatch({ type: "SET_EVENT_ERROR", error })
        }
    };


    //! Delete Event in Admin Panel
    //! ---------------------------
    const deleteEvent = async (id) => {
        try {
            const isConfirmed = window.confirm("Are you sure you want to delete this Event");
            if (!isConfirmed) {
                return;
            };

            const res = await axios.delete(`${API}/event/delete/${id}`);
            if (res) {
                hendleSuccess('Delete Successfully')
            }

        } catch (error) {
            console.log(error)
        }
    };


    //* Get All Contact Form API Data
    //* -----------------------------
    const getAllContactForm = async () => {
        dispatch({ type: "SET_CONTACTFORM_LOADING" })
        try {
            const res = await axios.get(`${API}/allContactForm`)
            const data = await res.data;
            // console.log('data', data)
            dispatch({ type: "SET_CONTACTFORM_DATA", payload: data })

        } catch (error) {
            dispatch({ type: "SET_CONTACTFORM_ERROR", error })
        }
    };


    //! Delete Contact Form in Admin Panel
    //! -----------------------------
    const deleteContactForm = async (id) => {
        try {
            const isConfirmed = window.confirm("Are you sure you want to delete this Contact Form");
            if (!isConfirmed) {
                return;
            };

            const res = await axios.delete(`${API}/ContactForm/delete/${id}`);
            if (res) {
                hendleSuccess('Delete Successfully')
            }

        } catch (error) {
            console.log(error)
        }
    };


    //* Get All Student Reviews API Data
    //* --------------------------------
    const getAllStudentReview = async () => {
        dispatch({ type: "SET_STUDENTREVIEW_LOADING" })
        try {
            const res = await axios.get(`${API}/allStudentReview`)
            const data = await res.data;
            // console.log('data', data)
            dispatch({ type: "SET_STUDENTREVIEW_DATA", payload: data })

        } catch (error) {
            dispatch({ type: "SET_STUDENTREVIEW_ERROR", error })
        }
    };


    //! Delete Student review in Admin Panel
    //! ------------------------------------
    const deletereview = async (id) => {
        try {
            const isConfirmed = window.confirm("Are you sure you want to delete this Student Review?");
            if (!isConfirmed) {
                return;
            };

            const res = await axios.delete(`${API}/studentReview/delete/${id}`);
            if (res) {
                hendleSuccess('Delete Successfully')
            }

        } catch (error) {
            console.log(error)
        }
    };


    //* Get All Student Addmission API Data
    //* --------------------------------
    const getAllStudentAddmission = async () => {
        dispatch({ type: "SET_STUDENTADDMISSION_LOADING" })
        try {
            const res = await axios.get(`${API}/allStudentAddmission`)
            const data = await res.data;
            // console.log('data', data)
            dispatch({ type: "SET_STUDENTADDMISSION_DATA", payload: data })

        } catch (error) {
            dispatch({ type: "SET_STUDENTADDMISSION_ERROR", error })
        }
    };


    //! Delete Student Addmission in Admin Panel
    //! ------------------------------------
    const deleteAdmissionForm = async (id) => {
        try {
            const isConfirmed = window.confirm("Are you sure you want to delete this Addmission Form?");
            if (!isConfirmed) {
                return;
            };

            const res = await axios.delete(`${API}/studentAddmission/delete/${id}`);
            if (res) {
                hendleSuccess('Delete Successfully')
            }

        } catch (error) {
            console.log(error)
        }
    };


    useEffect(() => {
        getAllCourse()
        getAllITCourseForm()
        getAllEvent()
        getAllContactForm()
        getAllStudentReview()
        getAllStudentAddmission()
    }, [])

    return (
        <AdminContext.Provider value={{ ...state, deleteCourse, deleteCourseBlog, deleteContactForm, deleteEvent, deletereview, deleteAdmissionForm }}>
            {children}
        </AdminContext.Provider>
    )
};


//* Custom Hook
const UseAdminContext = () => {
    return useContext(AdminContext)
}

export { AdminContext, AdminProvider, UseAdminContext }