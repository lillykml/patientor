import { Diagnosis } from "./types";

export const assertNever = (value: never): never => {
    throw new Error(
      `Unhandled discriminated union member: ${JSON.stringify(value)}`
    );
};

export const findDescription = (icd10: string, diagnoses: Diagnosis[]): string | undefined => {
  const diagnosis = diagnoses.find(diagnose => diagnose.code === icd10);
  return diagnosis ? diagnosis.name : undefined;
};
