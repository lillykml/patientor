import { Patient, Diagnosis } from "../../types";
import { Button } from '@mui/material';
import FemaleIcon from '@mui/icons-material/Female';
import MaleIcon from '@mui/icons-material/Male';
import PatientEntry from "./PatientEntry";
import { useState } from "react";
import AddEntryModal from "../AddEntryModal";
import { EntryFormValues } from "../../types";
import axios from "axios";


interface Props {
    patient: Patient | undefined;
    diagnoses: Diagnosis[];
}

const SinglePatient = ({ patient, diagnoses }: Props) => {

    const [modalOpen, setModalOpen] = useState<boolean>(false);
    const [error, setError] = useState<string>();
  
    const openModal = (): void => setModalOpen(true);
  
    const closeModal = (): void => {
      setModalOpen(false);
      setError(undefined);
    };

const submitNewEntry = async (values: EntryFormValues) => {
    try {
        console.log(values);
        // const patient = await patientService.create(values);
        // setPatients(patients.concat(patient));
        setModalOpen(false);
    } catch (e: unknown) {
        if (axios.isAxiosError(e)) {
        if (e?.response?.data && typeof e?.response?.data === "string") {
            const message = e.response.data.replace('Something went wrong. Error: ', '');
            console.error(message);
            setError(message);
        } else {
            setError("Unrecognized axios error");
        }
        } else {
        console.error("Unknown error", e);
        setError("Unknown error");
        }
    }
    };

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
                <AddEntryModal modalOpen={modalOpen}
                    onSubmit={submitNewEntry}
                    error={error}
                    onClose={closeModal}
                />
                <Button variant="contained" onClick={() => openModal()}>
                    Add New Entry
                </Button>
                {patient.entries.map(entry => <PatientEntry key={entry.id} entry={entry} diagnoses={diagnoses}/>)}
            </div>

        );
    }
};

export default SinglePatient;