import { OccupationalHealthcareEntry, Diagnosis } from "../../types";
import { findDescription } from "../../utils";
import { Box } from '@mui/material';
import WorkIcon from '@mui/icons-material/Work';


interface Props {
    entry: OccupationalHealthcareEntry;
    diagnoses: Diagnosis[];
}


const OccupationalHealthcare = ({ entry, diagnoses }: Props) => {
    return (
        <Box sx={{
            border: '1px solid black',
            borderRadius: '8px',
            padding: '8px',
            marginTop: '8px',
          }}>
          <p>{entry.date} <WorkIcon /></p>
          <p style={{fontStyle: 'italic'}}>{entry.description}</p>
          <ul>
            {entry.diagnosisCodes?.map((code, index) => <li key={index}>{code} {findDescription(code, diagnoses)}</li>)}
          </ul>
          {entry.sickLeave && <p>Sick leave from {entry.sickLeave.startDate} to {entry.sickLeave.endDate}</p>}
          <p>diagnose by {entry.specialist}</p>
          </Box>
    );
};

export default OccupationalHealthcare;