import http from '../http-common';

class JoinedJobDataService {
  // Retrieve all jobs
  getAll() {
    return http.get('/joinedJob');
  }

  // Retrieve by skill (string, ex: Programming)
  getBySkill(skill_id) {
    return http.get(`/joinedJob/byskill/${skill_id}`);
  }

  // Retrieve by min experience (int, ex: 5)
  getByExperience(experience) {
    return http.get(`/joinedJob/byexperience/${(experience)}`);
  }

  // Retrieve by company_name (string, ex: Facebook)
  getByCompany(company_name) {
    return http.get(`/joinedJob/bycompany/${company_name}`);
  }

  // Retrieve by field name (string, ex: Information Technology)
  getByField(field_name) {
    return http.get(`/joinedJob/byfield/${field_name}`);
  }

  // Update job applicant count by job_id
  updateApplicantCount(job_id) {
    return http.get(`/joinedJob/${job_id}`);
  }
}

export default new JoinedJobDataService();