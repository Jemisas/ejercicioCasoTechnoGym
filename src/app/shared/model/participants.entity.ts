export interface ParticipantsEntity {
  id: number;
  participantId: number;
  firstName: string;
  lastName: string;
  photoUrl: string;
  centerId: number;
  ranking: number;
  recordTime: string;
  marathonCenterName?: string;
}
