import { HealthCheckEntry } from "../../types";
import { Box } from '@mui/material';
import MedicalServicesIcon from '@mui/icons-material/MedicalServices';
import FavoriteIcon from '@mui/icons-material/Favorite';

interface Props {
    entry: HealthCheckEntry;
}

const healthRating = (rating: number): string => {
    switch(rating) {
        case 3: return 'red';
        case 2: return 'orange';
        case 1: return 'yellow';
        case 0: return 'green';
        default: return 'black';
    }
};

const HealthCheck = ({ entry }: Props) => {

    return(
        <Box sx={{
            border: '1px solid black',
            borderRadius: '8px',
            padding: '8px',
            marginTop: '8px',
          }}>
            <p>{entry.date} <MedicalServicesIcon /></p>
            <p style={{fontStyle: 'italic'}}>{entry.description}</p>
            <FavoriteIcon sx={{ color: healthRating(entry.healthCheckRating) }} />
            <p>diagnose by {entry.specialist}</p>
        </Box>
    );
};

export default HealthCheck;