import { createContext, useContext, useEffect, useReducer } from "react";
import reducer from '../Reducer/UserReducer'
import axios from "axios";

const AppContext = createContext();

const API = "https://chenab-college-backend.vercel.app";

const initialState = {
    isLoading: false,
    isError: false,
    isEventLoading: false,
    isEventError: false,
    isITcourseLoading: false,
    isITcourseError: false,
    isStudentsReviewLoading: false,
    isStudentsReviewError: false,
    Allcourses: [],
    AllEvent: [],
    ITcourse: [],
    StudentsReview: [],
    featureCourse: [],
    futerEvent: [],
    futureITcourse: [],
    SingleEvent: [],
    SingleEventLoading: false,
    SingleEventError: false,
};

const CourseProvider = ({ children }) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    //* Get All Course API Data
    //* -----------------------
    const getAllCourse = async (API) => {
        dispatch({ type: "SET_LOADING" })
        try {
            const res = await axios.get(`${API}/api/course`)
            const Allcourses = await res.data.course;
            // console.log('data', Allcourses)
            dispatch({ type: "SET_COURSE_DATA", payload: Allcourses })

        } catch (error) {
            dispatch({ type: "SET_ERROR", error })
        }
    };


    //* Get All Events API Data
    //* -----------------------
    const getAllEvent = async (API) => {
        dispatch({ type: "SET_EVENT_LOADING" })
        try {
            const res = await axios.get(`${API}/api/event`)
            const AllEvent = await res.data.events;
            // console.log('data', AllEvent)
            dispatch({ type: "SET_EVENT_DATA", payload: AllEvent })

        } catch (error) {
            dispatch({ type: "SET_EVENT_ERROR", error })
        }
    };


    //* Get Individual Event Data
    //* -------------------------
    const getIndividualEvent = async (url) => {
        // dispatch({ type: "SET_SINGLEVENT_LOADING" })
        try {
            const res = await axios.get(url, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            const SingleEvent = await res.data.events;
            dispatch({ type: "SET_SINGLEVENT_DATA", payload: SingleEvent })

        } catch (error) {
            // dispatch({ type: "SET_SINGLEVENT_ERROR", error })
            console.log(error)
        }
    };


    //* Get IT Courses API Data
    //* -----------------------
    const getITCourse = async (API) => {
        dispatch({ type: "SET_ITCOURSE_LOADING" })
        try {
            const res = await axios.get(`${API}/api/ITcourse`);
            const ITcourse = await res.data.course;
            // console.log('data', ITcourse);
            dispatch({ type: "SET_ITCOURSE_DATA", payload: ITcourse });

        } catch (error) {
            dispatch({ type: "SET_ITCOURSE_ERROR", error });
        }
    };


    //* Get Students Review API Data
    //* ----------------------------
    const studentsReview = async (API) => {
        dispatch({ type: "SET_STUDENTSREVIEW_LOADING" })
        try {
            const res = await axios.get(`${API}/contact/studentreview`);
            const StudentsReview = await res.data;
            // console.log('data', StudentsReview);
            dispatch({ type: "SET_STUDENTSREVIEW_DATA", payload: StudentsReview });

        } catch (error) {
            dispatch({ type: "SET_STUDENTSREVIEW_ERROR", error });
        }
    };


    useEffect(() => {
        getAllCourse(API);
        getITCourse(API);
        getAllEvent(API);
        studentsReview(API);
    }, []);


    return (
        <AppContext.Provider value={{ ...state, getIndividualEvent }}>
            {children}
        </AppContext.Provider>
    )
};

//* Custom Hook
const UseCourseContext = () => {
    return useContext(AppContext)
}

export { AppContext, CourseProvider, UseCourseContext }