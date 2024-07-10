
import { Entry, Diagnosis } from "../../types";

interface Props {
    entry: Entry;
    diagnoses: Diagnosis[];
}

const findDescription = (icd10: string, diagnoses: Diagnosis[]): string | undefined => {
    const diagnosis = diagnoses.find(diagnose => diagnose.code === icd10);
    return diagnosis ? diagnosis.name : undefined;
    };

const PatientEntry = ({ entry, diagnoses }: Props) => {
    return (
        <div>
            <p>{entry.date} {entry.description}</p>
            <ul>
                {entry.diagnosisCodes?.map((code, index) => <li key={index}>{code} {findDescription(code, diagnoses)}</li>)}
            </ul>
        </div>
    );
};

export default PatientEntry;