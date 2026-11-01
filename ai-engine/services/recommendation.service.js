export const generateRecommendations = (studentData) => {
  const recommendations = [];

  if (studentData.attendancePct < 75) {
    recommendations.push({
      title: 'Prioritize Attendance Recovery',
      description: `Current attendance is ${studentData.attendancePct}%, below the institutional 75% threshold. Attend scheduled remedial lab sessions.`,
      priority: 'high',
      targetSubject: 'General Compliance'
    });
  }

  if (studentData.averageScore < 50) {
    recommendations.push({
      title: 'Participate in Faculty Peer-Tutoring',
      description: 'Review foundational textbook problem sets and schedule a one-on-one consultation with the course instructor.',
      priority: 'high',
      targetSubject: 'Core Curriculum'
    });
  } else if (studentData.averageScore >= 80) {
    recommendations.push({
      title: 'Explore Advanced Research Electives',
      description: 'Your scores indicate high mastery. Consider contributing to departmental open-source or research projects.',
      priority: 'low',
      targetSubject: 'Advanced Studies'
    });
  }

  return recommendations;
};

export default {
  generateRecommendations
};
