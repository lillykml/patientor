
import { Entry, Diagnosis } from "../../types";
import HealthCheck from "./HealthCheckEntry";
import Hospital from "./HospitalEntry";
import OccupationalHealthcare from "./OccupationalHealthcareEntry";
import { assertNever } from "../../utils";

interface Props {
    entry: Entry;
    diagnoses: Diagnosis[];
}
const PatientEntry = ({ entry, diagnoses }: Props) => {
    switch(entry.type){
        case 'HealthCheck':
            return <HealthCheck entry={entry} />;
        case 'Hospital':
            return <Hospital entry={entry} diagnoses={diagnoses}/>;
        case 'OccupationalHealthcare': 
            return <OccupationalHealthcare />;
        default:
            return assertNever(entry);
    }

    return (
        <div>
            <p>{entry.date} {entry.description}</p>

        </div>
    );
};

export default PatientEntry;