const API_BASE = import.meta.env.VITE_API_URL || 'http://localhost:5001';

export async function analyzeResume(file, jobDescription = '') {
  const formData = new FormData();
  formData.append('resume', file);
  if (jobDescription.trim()) {
    formData.append('jobDescription', jobDescription);
  }

  const response = await fetch(`${API_BASE}/api/resume/analyze`, {
    method: 'POST',
    body: formData,
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.error || 'Failed to analyze resume');
  }

  return response.json();
}

export async function saveResumeAnalysis(data) {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('You must be logged in to save results.');

  const response = await fetch(`${API_BASE}/api/resume/save`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.error || 'Failed to save analysis');
  }

  return response.json();
}

export async function getResumeHistory() {
  const token = localStorage.getItem('token');
  if (!token) throw new Error('You must be logged in to view history.');

  const response = await fetch(`${API_BASE}/api/resume/history`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok) {
    const err = await response.json();
    throw new Error(err.error || 'Failed to fetch history');
  }

  return response.json();
}
