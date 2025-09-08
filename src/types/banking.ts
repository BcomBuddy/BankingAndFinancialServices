export interface Module {
  id: string;
  title: string;
  unit: string;
  description: string;
  theory: string;
  simulator?: SimulatorConfig;
}

export interface SimulatorConfig {
  type: 'calculator' | 'demo' | 'validator' | 'comparison';
  title: string;
  description: string;
  inputs: InputField[];
  formula?: string;
  steps?: string[];
}

export interface InputField {
  name: string;
  label: string;
  type: 'number' | 'text' | 'select' | 'date';
  required?: boolean;
  options?: string[];
  min?: number;
  max?: number;
  step?: number;
  placeholder?: string;
}

export interface Unit {
  id: string;
  title: string;
  icon: string;
  description: string;
  modules: Module[];
}

export interface SimulatorResult {
  result: number | string;
  steps: string[];
  formula: string;
}