import React, { useState } from 'react';
import MainLayout from '../../../components/layout/MainLayout.jsx';
import PageHeader from '../../../components/common/PageHeader.jsx';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import Input from '../../../components/common/Input.jsx';
import FormActions from '../../../components/forms/FormActions.jsx';
import { useNavigate } from 'react-router-dom';

export function EditStudent() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: 'Rahul Verma',
    email: 'rahul.verma@eduinsight.ai'
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Update student record', formData);
    navigate(-1);
  };

  return (
    <MainLayout>
      <PageHeader
        title="Edit Student Details"
        subtitle="Update academic details and profile properties for MCA2024-001"
      />
      <Card sx={{ p: 4, maxWidth: 700 }} component="form" onSubmit={handleSubmit}>
        <Box sx={{ display: 'grid', gridTemplateColumns: '1fr', gap: 2.5, mb: 2 }}>
          <Input
            label="Full Name"
            value={formData.fullName}
            onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
            required
          />
          <Input
            label="Email Address"
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            required
          />
        </Box>
        <FormActions onCancel={() => navigate(-1)} submitLabel="Save Changes" />
      </Card>
    </MainLayout>
  );
}

export default EditStudent;
