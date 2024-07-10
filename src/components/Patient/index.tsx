import { Patient, Diagnosis } from "../../types";
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import PatientEntry from "./PatientEntry";

interface Props {
    patient: Patient | undefined;
    diagnoses: Diagnosis[];
}

const SinglePatient = ({ patient, diagnoses }: Props) => {
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
                <h3>Entries</h3>
                {patient.entries.map(entry => <PatientEntry key={entry.id} entry={entry} diagnoses={diagnoses}/>)}
            </div>

        );
    }
};

export default SinglePatient;