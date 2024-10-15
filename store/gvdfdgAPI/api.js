import axios from "axios"
const gvdfdgAPI = axios.create({
  baseURL: "https://gvdfdg-1040.botics.co",
  headers: { Accept: "application/json", "Content-Type": "application/json" }
})
function api_docs_schema_retrieve(payload) {
  return gvdfdgAPI.get(`/api-docs/schema/`, { params: { lang: payload.lang } })
}
function api_v1_login_create(payload) {
  return gvdfdgAPI.post(`/api/v1/login/`, payload)
}
function api_v1_signup_create(payload) {
  return gvdfdgAPI.post(`/api/v1/signup/`, payload)
}
function api_v1_uvcvdhd_list(payload) {
  return gvdfdgAPI.get(`/api/v1/uvcvdhd/`)
}
function api_v1_uvcvdhd_create(payload) {
  return gvdfdgAPI.post(`/api/v1/uvcvdhd/`, payload)
}
function api_v1_uvcvdhd_retrieve(payload) {
  return gvdfdgAPI.get(`/api/v1/uvcvdhd/${payload.id}/`)
}
function api_v1_uvcvdhd_update(payload) {
  return gvdfdgAPI.put(`/api/v1/uvcvdhd/${payload.id}/`, payload)
}
function api_v1_uvcvdhd_partial_update(payload) {
  return gvdfdgAPI.patch(`/api/v1/uvcvdhd/${payload.id}/`, payload)
}
function api_v1_uvcvdhd_destroy(payload) {
  return gvdfdgAPI.delete(`/api/v1/uvcvdhd/${payload.id}/`)
}
function rest_auth_login_create(payload) {
  return gvdfdgAPI.post(`/rest-auth/login/`, payload)
}
function rest_auth_logout_create(payload) {
  return gvdfdgAPI.post(`/rest-auth/logout/`)
}
function rest_auth_password_change_create(payload) {
  return gvdfdgAPI.post(`/rest-auth/password/change/`, payload)
}
function rest_auth_password_reset_create(payload) {
  return gvdfdgAPI.post(`/rest-auth/password/reset/`, payload)
}
function rest_auth_password_reset_confirm_create(payload) {
  return gvdfdgAPI.post(`/rest-auth/password/reset/confirm/`, payload)
}
function rest_auth_registration_create(payload) {
  return gvdfdgAPI.post(`/rest-auth/registration/`, payload)
}
function rest_auth_registration_resend_email_create(payload) {
  return gvdfdgAPI.post(`/rest-auth/registration/resend-email/`, payload)
}
function rest_auth_registration_verify_email_create(payload) {
  return gvdfdgAPI.post(`/rest-auth/registration/verify-email/`, payload)
}
function rest_auth_user_retrieve(payload) {
  return gvdfdgAPI.get(`/rest-auth/user/`)
}
function rest_auth_user_update(payload) {
  return gvdfdgAPI.put(`/rest-auth/user/`, payload)
}
function rest_auth_user_partial_update(payload) {
  return gvdfdgAPI.patch(`/rest-auth/user/`, payload)
}
export const apiService = {
  api_docs_schema_retrieve,
  api_v1_login_create,
  api_v1_signup_create,
  api_v1_uvcvdhd_list,
  api_v1_uvcvdhd_create,
  api_v1_uvcvdhd_retrieve,
  api_v1_uvcvdhd_update,
  api_v1_uvcvdhd_partial_update,
  api_v1_uvcvdhd_destroy,
  rest_auth_login_create,
  rest_auth_logout_create,
  rest_auth_password_change_create,
  rest_auth_password_reset_create,
  rest_auth_password_reset_confirm_create,
  rest_auth_registration_create,
  rest_auth_registration_resend_email_create,
  rest_auth_registration_verify_email_create,
  rest_auth_user_retrieve,
  rest_auth_user_update,
  rest_auth_user_partial_update
}
