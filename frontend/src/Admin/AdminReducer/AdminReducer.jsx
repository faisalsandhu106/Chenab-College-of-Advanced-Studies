import React from 'react'

const AdminReducer = (state, action) => {
    switch (action.type) {

        //TODO ----------------------------
        //TODO Get All Courses ------------
        case "SET_COURSE_LOADING":
            return {
                ...state,
                isCourseLoading: true,
            };

        case "SET_COURSE_DATA": {
            // const featureCourses = action.payload.filter((curElem) => {
            //     return curElem.feature !== false;
            // });
            // console.log('featureCourse', featureCourses)

            return {
                ...state,
                isCourseLoading: false,
                AllCourse: action.payload,
                // featureCourse: featureCourses,
            };
        }

        case "SET_COURSE_ERROR":
            return {
                ...state,
                isCourseLoading: false,
                IsCourseError: true
            };


        //TODO ----------------------------
        //TODO Get All Computer Courses ---
        case "SET_ITCOURSE_LOADING":
            return {
                ...state,
                isITCourseLoading: true,
            };

        case "SET_ITCOURSE_DATA": {
            // const featureCourses = action.payload.filter((curElem) => {
            //     return curElem.feature !== false;
            // });
            // console.log('featureCourse', featureCourses)

            return {
                ...state,
                isITCourseLoading: false,
                AllITCourse: action.payload,
                // featureCourse: featureCourses,
            };
        }

        case "SET_ITCOURSE_ERROR":
            return {
                ...state,
                isITCourseLoading: false,
                IsITCourseError: true
            };


        //TODO ----------------------------
        //TODO Get All Events -------------
        case "SET_EVENT_LOADING":
            return {
                ...state,
                isEventLoading: true,
            };

        case "SET_EVENT_DATA": {
            // const featureCourses = action.payload.filter((curElem) => {
            //     return curElem.feature !== false;
            // });
            // console.log('featureCourse', featureCourses)

            return {
                ...state,
                isEventLoading: false,
                AllEvent: action.payload,
                // featureCourse: featureCourses,
            };
        }

        case "SET_EVENT_ERROR":
            return {
                ...state,
                isEventLoading: false,
                IsEventError: true
            };


        //TODO ----------------------------
        //TODO Get All Contact Form -------
        case "SET_CONTACTFORM_LOADING":
            return {
                ...state,
                isContactFormLoading: true,
            };

        case "SET_CONTACTFORM_DATA": {
            return {
                ...state,
                isContactFormLoading: false,
                AllContactForm: action.payload,
            };
        }

        case "SET_CONTACTFORM_ERROR":
            return {
                ...state,
                isContactFormLoading: false,
                IsContactFormError: true
            };



        //TODO ----------------------------
        //TODO Get All Student Review -----
        case "SET_STUDENTREVIEW_LOADING":
            return {
                ...state,
                isStudentReviewLoading: true,
            };

        case "SET_STUDENTREVIEW_DATA": {
            return {
                ...state,
                isStudentReviewLoading: false,
                AllStudentReview: action.payload,
            };
        }

        case "SET_STUDENTREVIEW_ERROR":
            return {
                ...state,
                isStudentReviewLoading: false,
                IsStudentReviewError: true
            };



        //TODO ----------------------------
        //TODO Get All Student Addmission -
        case "SET_STUDENTADDMISSION_LOADING":
            return {
                ...state,
                isStudentAddmissionLoading: true,
            };

        case "SET_STUDENTADDMISSION_DATA": {
            return {
                ...state,
                isStudentAddmissionLoading: false,
                AllStudentAddmission: action.payload,
            };
        }

        case "SET_STUDENTADDMISSION_ERROR":
            return {
                ...state,
                isStudentAddmissionLoading: false,
                IsStudentAddmissionError: true
            };




        default:
            return (
                state
            )
    }
}

export default AdminReducer