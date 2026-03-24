import React from 'react'

const UserReducer = (state, action) => {
    switch (action.type) {

        //TODO ----------------------------
        //TODO Get Subject Course`s API Data-----------------------------------------
        case "SET_LOADING":
            return {
                ...state,
                isLoading: true,
            };

        case "SET_COURSE_DATA": {
            const featureCourses = action.payload.filter((curElem) => {
                return curElem.feature !== "false";
            });
            // console.log('featureCourse', featureCourses)

            return {
                ...state,
                isLoading: false,
                Allcourses: action.payload,
                featureCourse: featureCourses,
            };
        }

        case "SET_ERROR":
            return {
                ...state,
                isLoading: false,
                isError: true
            };


        //TODO -------------------
        //TODO Get Events API Data---------------------------------------------------
        case "SET_EVENT_LOADING":
            return {
                ...state,
                isEventLoading: true,
            };

        case "SET_EVENT_DATA": {
            const futerEvent = action.payload.filter((curElem) => {
                return curElem.future !== "false";
            });
            // console.log('futerEvent', futerEvent)

            return {
                ...state,
                isEventLoading: false,
                AllEvent: action.payload,
                futerEvent: futerEvent,
            };
        }

        case "SET_EVENT_ERROR":
            return {
                ...state,
                isEventLoading: false,
                isEventError: true
            };


        //TODO -------------------
        //TODO Get IndividualEvent Events API Data-----------------------------------
        // case "SET_SINGLEVENT_LOADING":
        //     return {
        //         ...state,
        //         SingleEventLoading: true,
        //     };

        case "SET_SINGLEVENT_DATA": {
            return {
                ...state,
                // SingleEventLoading: false,
                SingleEvent: action.payload
            };
        }

        // case "SET_SINGLEVENT_ERROR":
        //     return {
        //         ...state,
        //         SingleEventLoading: false,
        //         SingleEventError: true
        //     };



        //TODO ------------------------
        //TODO Get IT Course`s API Data------------------------------------------------
        case "SET_ITCOURSE_LOADING":
            return {
                ...state,
                isITcourseLoading: true,
            };

        case "SET_ITCOURSE_DATA": {
            const futureITcourse = action.payload.filter((curElem) => {
                return curElem.future === "true";
            });
            // console.log('futureITcourse', futureITcourse)

            return {
                ...state,
                isITcourseLoading: false,
                ITcourse: action.payload,
                futureITcourse: futureITcourse,
            };
        }

        case "SET_ITCOURSE_ERROR":
            return {
                ...state,
                isITcourseLoading: false,
                isITcourseError: true
            };


        //TODO ----------------------------
        //TODO Get Students Review API Data-----------------------------------------------
        case "SET_STUDENTSREVIEW_LOADING":
            return {
                ...state,
                isStudentsReviewLoading: true,
            };

        case "SET_STUDENTSREVIEW_DATA": {
            return {
                ...state,
                isStudentsReviewLoading: false,
                StudentsReview: action.payload,
            };
        }

        case "SET_STUDENTSREVIEW_ERROR":
            return {
                ...state,
                isStudentsReviewLoading: false,
                isStudentsReviewError: true
            };


        default:
            return {
                state,
            };
    };
}

export default UserReducer