
import { Entry } from "../../types";

interface Props {
    entry: Entry;
}

const PatientEntry = ({ entry }: Props) => {
    return (
        <div>
            <p>{entry.date} {entry.description}</p>
            <ul>
                {entry.diagnosisCodes?.map((code, index) => <li key={index}>{code}</li>)}
            </ul>
        </div>
    );
};

export default PatientEntry;