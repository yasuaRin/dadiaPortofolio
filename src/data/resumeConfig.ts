// Configuration for CV / Resume and Portfolio Downloads
export interface ResumeConfig {
  cvFileName: string;
  cvDownloadUrl: string; // Direct link or Google Drive link
  cvViewUrl: string; // Viewable link (e.g. Google Drive preview / Dropbox / hosted PDF)
  lastUpdated: string;
}

export const resumeConfig: ResumeConfig = {
  cvFileName: 'CV_Ni_Putu_Dadia_Yasuarini.pdf',
  // You can replace this with your direct Google Drive sharing link or hosted PDF link
  cvDownloadUrl: 'https://drive.google.com/file/d/1_YOUR_GOOGLE_DRIVE_CV_ID/view?usp=sharing',
  cvViewUrl: 'https://drive.google.com/file/d/1_YOUR_GOOGLE_DRIVE_CV_ID/view?usp=sharing',
  lastUpdated: 'August 2026'
};
