import { Patient } from "../../types";

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
            <p>{patient.name}</p>
        );
    }
};

export default SinglePatient;