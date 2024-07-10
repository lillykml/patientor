import { HospitalEntry, Diagnosis } from "../../types";
import { findDescription } from "../../utils";
import { Box } from '@mui/material';
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';

interface Props {
    entry: HospitalEntry;
    diagnoses: Diagnosis[];
}

const Hospital = ({ entry, diagnoses }: Props) => {
    return(
        <Box sx={{
            border: '1px solid black',
            borderRadius: '8px',
            padding: '16px'
          }}>
          <p>{entry.date} <LocalHospitalIcon /></p>
          <p style={{fontStyle: 'italic'}}>{entry.description}</p>
          <ul>
            {entry.diagnosisCodes?.map((code, index) => <li key={index}>{code} {findDescription(code, diagnoses)}</li>)}
          </ul>
          <p>Discharge on {entry.discharge.date} because {entry.discharge.criteria}</p>
          <p>diagnose by {entry.specialist}</p>
          </Box>
    );
};

export default Hospital;