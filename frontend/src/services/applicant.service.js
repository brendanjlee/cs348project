import http from '../http-common';

class ApplicantDataService {
  // get all applicants
  getAll() {
    return http.get('/applicant');
  }

  // get applicant by id
  get(id) {
    return http.get(`/applicant/${id}`);
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