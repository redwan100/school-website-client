import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const baseApi = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: "http://localhost:5000",
  }),

  endpoints: (builder) => ({
    /* -------------------------------------------------------------------------- */
    /*                            //TODO: STUDENT SLICE                           */
    /* -------------------------------------------------------------------------- */
    getTeachers: builder.query({
      query: () => "/all-teacher",
    }),

    getSingleTeacher: builder.query({
      query: (id) => `/single-teacher/${id}`,
    }),

    createTeacher: builder.mutation({
      query: (student) => ({
        url: "/add-teacher",
        method: "POST",
        body: student,
      }),
    }),

    updateTeacher: builder.mutation({
      query: ({ id, formDataToSend }) => ({
        url: `/update-teacher/${id}`,
        method: "PATCH",
        body: formDataToSend,
      }),
    }),

    deleteTeacher: builder.mutation({
      query: (id) => ({
        url: `/delete-teacher/${id}`,
        method: "DELETE",
      }),
    }),

    /* -------------------------------------------------------------------------- */
    /*                            //TODO: SCHOOL INFORMATION SLICE                           */
    /* -------------------------------------------------------------------------- */
    getSchoolInfo: builder.query({
      query: () => "/all-school-information",
    }),

    getSchoolInfoSingle: builder.query({
      query: (id) => `/single-school-information/${id}`,
    }),

    createSchoolInfo: builder.mutation({
      query: (formData) => ({
        url: "/add-school-information",
        method: "POST",
        body: formData,
      }),
    }),

    updateSchoolInfo: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/update-school-information/${id}`,
        method: "PATCH",
        body: formData,
      }),
    }),

    deleteSchoolInfo: builder.mutation({
      query: (id) => ({
        url: `/delete-school-information/${id}`,
        method: "DELETE",
      }),
    }),

    /* -------------------------------------------------------------------------- */
    /*                            //TODO: STUDENT SLICE                           */
    /* -------------------------------------------------------------------------- */
    getStudents: builder.query({
      query: () => "/all-student",
    }),

    getSingleStudent: builder.query({
      query: (id) => `/single-student/${id}`,
    }),

    createStudent: builder.mutation({
      query: (student) => ({
        url: "/add-student",
        method: "POST",
        body: student,
      }),
    }),

    updateStudent: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/update-student/${id}`,
        method: "PATCH",
        body: formData,
      }),
    }),

    deleteStudent: builder.mutation({
      query: (id) => ({
        url: `/delete-student/${id}`,
        method: "DELETE",
      }),
    }),

    /* -------------------------------------------------------------------------- */
    /*                            // TODO: NOTICE SLICE                           */
    /* -------------------------------------------------------------------------- */
    createNotice: builder.mutation({
      query: (notice) => ({
        url: "/add-notice",
        method: "POST",
        body: notice,
      }),
    }),

    getNotice: builder.query({
      query: () => "/notice",
    }),

    getSingleNotice: builder.query({
      query: (id) => `/single-notice/${id}`,
    }),

    deleteNotice: builder.mutation({
      query: (id) => ({
        url: `/delete-notice/${id}`,
        method: "DELETE",
      }),
    }),

    updateNotice: builder.mutation({
      query: ({ noticeName, id }) => ({
        url: `/update-notice/${id}`,
        method: "PATCH",
        body: { notice: noticeName },
      }),
    }),
    /* -------------------------------------------------------------------------- */
    /*                           // TODO: ABOUT US SLICE                          */
    /* -------------------------------------------------------------------------- */
    createAbout: builder.mutation({
      query: (message) => ({
        url: "/add-about",
        method: "POST",
        body: message,
      }),
    }),

    getAbout: builder.query({
      query: () => "/about",
    }),

    getSingleAbout: builder.query({
      query: (id) => `/single-about/${id}`,
    }),

    updateAbout: builder.mutation({
      query: ({ id, message }) => ({
        url: `/update-about/${id}`,
        method: "PATCH",
        body: { message },
      }),
    }),

    deleteAbout: builder.mutation({
      query: (id) => ({
        url: `/delete-about/${id}`,
        method: "DELETE",
      }),
    }),

    /* -------------------------------------------------------------------------- */
    /*                        // TODO: COMMUNICATION SLICE                        */
    /* -------------------------------------------------------------------------- */
    createCommunication: builder.mutation({
      query: (data) => ({
        url: "/add-communication",
        method: "POST",
        body: data,
      }),
    }),

    getCommunication: builder.query({
      query: () => "/communication",
    }),

    updateCommunication: builder.mutation({
      query: ({ id, data }) => ({
        url: `/update-communication/${id}`,
        method: "PATCH",
        body: data,
      }),
    }),

    deleteCommunication: builder.mutation({
      query: (id) => ({
        url: `/delete-communication/${id}`,
        method: "DELETE",
      }),
    }),

    getSingleCommunication: builder.query({
      query: (id) => `/single-communication/${id}`,
    }),
    /* -------------------------------------------------------------------------- */
    /*                           // TODO: GALLERY SLICE                           */
    /* -------------------------------------------------------------------------- */
    createGallery: builder.mutation({
      query: (gallery) => ({
        url: "/add-gallery",
        method: "POST",
        body: gallery,
      }),
    }),

    getAllImages: builder.query({
      query: () => "/all-gallery",
    }),

    getGallery: builder.query({
      query: () => "/gallery",
    }),

    deleteGallery: builder.mutation({
      query: (id) => ({
        url: `/delete-gallery/${id}`,
        method: "DELETE",
      }),
    }),

    /* -------------------------------------------------------------------------- */
    /*                           TODO: EXAM RESULT SLICE                          */
    /* -------------------------------------------------------------------------- */

    getResult: builder.query({
      query: () => "/all-result",
    }),

    getSingleResult: builder.query({
      query: (id) => `/single-result/${id}`,
    }),

    createResult: builder.mutation({
      query: (student) => ({
        url: "/add-result",
        method: "POST",
        body: student,
      }),
    }),

    updateResult: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/update-result/${id}`,
        method: "PATCH",
        body: formData,
      }),
    }),

    deleteResult: builder.mutation({
      query: (id) => ({
        url: `/delete-result/${id}`,
        method: "DELETE",
      }),
    }),

    /* -------------------------------------------------------------------------- */
    /*                            //TODO: TRAINING SLICE                           */
    /* -------------------------------------------------------------------------- */
    getTraining: builder.query({
      query: () => "/all-training",
    }),

    getSingleTraining: builder.query({
      query: (id) => `/single-training/${id}`,
    }),

    createTraining: builder.mutation({
      query: (student) => ({
        url: "/add-training",
        method: "POST",
        body: student,
      }),
    }),

    updateTraining: builder.mutation({
      query: ({ id, formData }) => ({
        url: `/update-training/${id}`,
        method: "PATCH",
        body: formData,
      }),
    }),

    deleteTraining: builder.mutation({
      query: (id) => ({
        url: `/delete-training/${id}`,
        method: "DELETE",
      }),
    }),
  }),
});

export const {
  useGetTeachersQuery,
  useGetSingleTeacherQuery,
  useCreateTeacherMutation,
  useUpdateTeacherMutation,
  useDeleteTeacherMutation,
  useGetSchoolInfoQuery,
  useGetSchoolInfoSingleQuery,
  useDeleteSchoolInfoMutation,
  useUpdateSchoolInfoMutation,
  useCreateSchoolInfoMutation,
  useGetStudentsQuery,
  useGetSingleStudentQuery,
  useUpdateStudentMutation,
  useDeleteStudentMutation,
  useCreateStudentMutation,
  useCreateNoticeMutation,
  useGetNoticeQuery,
  useGetSingleNoticeQuery,
  useDeleteNoticeMutation,
  useUpdateNoticeMutation,
  useCreateCommunicationMutation,
  useGetCommunicationQuery,
  useUpdateCommunicationMutation,
  useDeleteCommunicationMutation,
  useGetSingleCommunicationQuery,
  useCreateGalleryMutation,
  useGetGalleryQuery,
  useGetAllImagesQuery,
  useDeleteGalleryMutation,
  useCreateAboutMutation,
  useGetAboutQuery,
  useGetSingleAboutQuery,
  useUpdateAboutMutation,
  useDeleteAboutMutation,
  useGetResultQuery,
  useGetSingleResultQuery,
  useUpdateResultMutation,
  useCreateResultMutation,
  useDeleteResultMutation,
  useGetTrainingQuery,
  useGetSingleTrainingQuery,
  useUpdateTrainingMutation,
  useDeleteTrainingMutation,
  useCreateTrainingMutation,
} = baseApi;
