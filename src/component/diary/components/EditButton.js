import Button from '@mui/material/Button';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';

function EditButton({ onClick }) {
    return (
        <Button onClick={onClick}>
            <CreateOutlinedIcon color="action" />
        </Button>
    );
}

export default EditButton;
