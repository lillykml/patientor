import { Patient } from "../../types";
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';

interface Props {
    patient: Patient | undefined;
}

const SinglePatient = ({ patient }: Props) => {
    if(!patient) {
        return(
            <p>This Patient does not exsit.</p>
        );
    } else {
        return(
            <div>
            <h2>{patient.name}</h2>
            {patient.gender === 'female' ? <FemaleIcon /> : <MaleIcon />}
            <p>ssn: {patient.ssn}</p>
            <p>occupation: {patient.occupation}</p>
            </div>

        );
    }
};

export default SinglePatient;