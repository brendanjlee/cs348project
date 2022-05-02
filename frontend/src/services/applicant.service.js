import http from '../http-common';

class ApplicantDataService {
  // get all applicants
  getAll() {
    return http.get('/applicant');
  }

  // get applicant by email
  get(email) {
    console.log(email)
    return http.get(`/applicant/${email}`);
  }

  // create new applicant
  create(data) {
    console.log(data)
    return http.post('/applicant/', data);
  }

  // delete applicant
  delete(id) {
    return http.post(`/tutorials/${id}`);
  }
}

export default new ApplicantDataService();