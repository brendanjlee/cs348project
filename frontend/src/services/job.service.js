import http from '../http-common';

class JobDataService {
  getAll() {
    return http.get('/job');
  }

  getBySkill(skill_id) {
    return http.get(`/job/byskill/${skill_id}`);
  }

  getByExperience(experience) {
    return http.get(`/job/byexperience/${Number(experience)}`);
  }
}

export default new JobDataService();