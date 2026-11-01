import React from 'react';
import Box from '@mui/material/Box';
import Button from '../common/Button.jsx';

export function FormActions({
  onCancel,
  onSubmit,
  submitLabel = 'Save Changes',
  cancelLabel = 'Cancel',
  loading = false,
  disabled = false
}) {
  return (
    <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 1.5, mt: 3, pt: 2, borderTop: '1px solid #e2e8f0' }}>
      {onCancel && (
        <Button variant="outlined" color="inherit" onClick={onCancel} disabled={loading}>
          {cancelLabel}
        </Button>
      )}
      <Button
        variant="contained"
        color="primary"
        type="submit"
        onClick={onSubmit}
        loading={loading}
        disabled={disabled}
      >
        {submitLabel}
      </Button>
    </Box>
  );
}

export default FormActions;
