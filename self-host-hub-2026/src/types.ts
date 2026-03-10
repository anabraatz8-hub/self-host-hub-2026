export interface Audience {
  title: string;
  description: string;
}

export interface ApplicationExample {
  title: string;
  description: string;
}

export interface CommandEntry {
  title: string;
  description: string;
  command: string;
}

export interface SupportedStack {
  name: string;
  description: string;
}

export interface InstallationStep {
  title: string;
  description: string;
  command?: string;
}

export interface AdvantageDetail {
  tag: string;
  explanation: string;
  youtubeUrl?: string;
}

export interface DeployDetail {
  description: string;
  script?: string;
}

export interface DeployMethods {
  dragNDrop: boolean;
  autoDeploy: boolean;
  ftp: boolean;
  upload: boolean;
  cli: boolean;
}

export interface DistroInfo {
  name: string;
  command: string;
}

export interface Platform {
  id: string;
  position: number;
  name: string;
  focus: string;
  advantages: string | (string | AdvantageDetail)[];
  examples: string;
  detailedExamples: (string | ApplicationExample)[];
  hardwareMin: string;
  hardwareRec: string;
  difficulty: 'Muito fácil' | 'Fácil' | 'Médio' | 'Médio-Difícil' | 'Difícil';
  targetAudience: string;
  audiences?: Audience[];
  subcategories: string[];
  repoUrl?: string;
  downloadUrl?: string;
  installCommand?: string;
  installGuide?: string;
  commands?: CommandEntry[];
  supportedStacks?: SupportedStack[];
  installationSteps?: InstallationStep[];
  supportedDistros?: DistroInfo[];
  deployMethods?: DeployMethods;
  deployDetails?: Partial<Record<keyof DeployMethods, DeployDetail>>;
  deployDescription?: string;
}

export interface SummaryGroup {
  category: string;
  suggestions: string[];
}
