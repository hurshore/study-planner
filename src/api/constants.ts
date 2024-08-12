export const API_URL = 'http://localhost:3000/api/v1';

export const ENDPONTS = {
  FILE_UPLOAD: '/file-upload',
  GENERATE_ASSESSMENT: (assessmentId: number) =>
    `/assessments/${assessmentId}/suggestions`, // TODO: change endpoit from /suggestions to /generate
  GENERATE_QUESTIONS: '/question/generate',
  ASSESSMENT: '/assessments', // TODO: change endpoint from /assessments to /assessment
};
