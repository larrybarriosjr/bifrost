import { PassengerData } from "types/app"

export enum AgeGroup {
  ADULT = "Adult",
  CHILD = "Child",
  INFANT = "Infant"
}

export enum AgeGroupDisplay {
  ADULT = "Adult",
  CHILD = "Child (2-12 y/o)",
  INFANT = "Infant (0-1 y/o)"
}

export enum Honorific {
  MR = "Mr",
  MS = "Ms",
  MRS = "Mrs"
}

export enum HonorificDisplay {
  MR = "Mr.",
  MS = "Ms.",
  MRS = "Mrs."
}

export const InitialPassengerData = (id: number): PassengerData => ({
  id,
  honorific: Honorific.MR,
  fullName: "",
  ageGroup: AgeGroup.ADULT
})
