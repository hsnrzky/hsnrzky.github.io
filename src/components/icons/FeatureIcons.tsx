import React from 'react';
import { Code, GitBranch, Scale } from 'lucide-react';

interface IconProps extends React.SVGProps<SVGSVGElement> {}

export const GoIcon: React.FC<IconProps> = (props) => (
  <Code {...props} />
);

export const MicroservicesIcon: React.FC<IconProps> = (props) => (
  <GitBranch {...props} />
);

export const ScalabilityIcon: React.FC<IconProps> = (props) => (
  <Scale {...props} />
);