import React, { useState } from 'react';
import MainLayout from '../../../components/layout/MainLayout.jsx';
import PageHeader from '../../../components/common/PageHeader.jsx';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Input from '../../../components/common/Input.jsx';
import Select from '../../../components/common/Select.jsx';
import FormActions from '../../../components/forms/FormActions.jsx';
import { useNavigate } from 'react-router-dom';

export function AddStudent() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    studentId: '',
    fullName: '',
    email: '',
    departmentId: 'MCA',
    classId: 'MCA-2A'
  });

  const handleChange = (field) => (e) => {
    setFormData((prev) => ({ ...prev, [field]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitting new student in Phase 4', formData);
    navigate(-1);
  };

  return (
    <MainLayout>
      <PageHeader
        title="Enroll New Student"
        subtitle="Register student credentials, assign departmental cohort, and create student profile"
      />

      <Card sx={{ p: 4, maxWidth: 700 }} component="form" onSubmit={handleSubmit}>
        <Box sx={{ display: 'grid', gridTemplateColumns: { xs: '1fr', sm: '1fr 1fr' }, gap: 2.5, mb: 2 }}>
          <Input label="Student ID / Roll No" value={formData.studentId} onChange={handleChange('studentId')} required />
          <Input label="Full Name" value={formData.fullName} onChange={handleChange('fullName')} required />
          <Input label="Email Address" type="email" value={formData.email} onChange={handleChange('email')} required />
          <Select
            label="Department"
            value={formData.departmentId}
            onChange={handleChange('departmentId')}
            options={[
              { value: 'MCA', label: 'Master of Computer Applications' },
              { value: 'CSE', label: 'Computer Science and Engineering' }
            ]}
          />
        </Box>
        <FormActions onCancel={() => navigate(-1)} submitLabel="Enroll Student" />
      </Card>
    </MainLayout>
  );
}

export default AddStudent;
