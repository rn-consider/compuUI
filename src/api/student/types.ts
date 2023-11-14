// types.ts

export type StudentInfo = {
  StudentName: string
  SchoolName: string
  Grade: string
  Parent1Name: string
  Parent1Phone: string
  Parent2Name: string
  Parent2Phone: string
  Address: string
}



export type UpdateStudentRequest = {
  StudentName?: string
  SchoolName?: string
  Grade?: string
  Parent1Name?: string
  Parent1Phone?: string
  Parent2Name?: string
  Parent2Phone?: string
  Address?: string
}
