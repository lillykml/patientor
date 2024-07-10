import { useState, useEffect } from "react";
import axios from "axios";
import { Route, Link, Routes, useMatch } from "react-router-dom";
import { Button, Divider, Container, Typography } from '@mui/material';

import { apiBaseUrl } from "./constants";
import { Patient, Diagnosis } from "./types";
import SinglePatient from "./components/Patient";

import patientService from "./services/patients";
import diagnosisService from './services/diagnoses';
import PatientListPage from "./components/PatientListPage";

const App = () => {
  const [patients, setPatients] = useState<Patient[]>([]);
  const [diagnoses, setDiagnoses] = useState<Diagnosis[]>([]);
  const match = useMatch('/patients/:id');
  const patient: Patient | undefined = match && match.params ? patients.find(patient => patient.id === match.params.id) : undefined;

  useEffect(() => {
    void axios.get<void>(`${apiBaseUrl}/ping`);

    const fetchPatientList = async () => {
      const patients = await patientService.getAll();
      setPatients(patients);
    };

    const fetchDiagnosisList = async () => {
      const diagnoses = await diagnosisService.getAll();
      setDiagnoses(diagnoses);
    };

    void fetchPatientList();
    void fetchDiagnosisList();
  }, []);
  
  return (
    <div className="App">
      <Container>
        <Typography variant="h3" style={{ marginBottom: "0.5em" }}>
          Patientor
        </Typography>
        <Button component={Link} to="/" variant="contained" color="primary">
          Home
        </Button>
        <Divider hidden />
        <Routes>
          <Route path="/" element={<PatientListPage patients={patients} setPatients={setPatients} />} />
          <Route path='/patients/:id' element={<SinglePatient patient={patient} diagnoses={diagnoses}/>} />
        </Routes>
      </Container>
    </div>
  );
};

export default App;
