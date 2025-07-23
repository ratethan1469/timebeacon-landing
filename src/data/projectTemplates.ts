export interface ProjectTemplate {
  id: string;
  name: string;
  client: string;
  category: 'implementation' | 'ongoing-support' | 'training' | 'consulting' | 'escalation';
  description: string;
  estimatedRate: number;
  color: string;
  tags: string[];
}

export const projectTemplates: ProjectTemplate[] = [
  {
    id: 'crm-implementation',
    name: 'CRM Implementation',
    client: 'Client Name - CRM Implementation',
    category: 'implementation',
    description: 'Complete CRM system implementation including data migration, customization, and user training.',
    estimatedRate: 150,
    color: '#3b82f6',
    tags: ['CRM', 'Implementation', 'Data Migration', 'Training']
  },
  {
    id: 'erp-consulting',
    name: 'ERP Consulting',
    client: 'Client Name - ERP Consulting',
    category: 'consulting',
    description: 'Strategic ERP selection and implementation planning consultation.',
    estimatedRate: 175,
    color: '#8b5cf6',
    tags: ['ERP', 'Strategy', 'Planning', 'Analysis']
  },
  {
    id: 'api-integration',
    name: 'API Integration',
    client: 'Client Name - API Integration',
    category: 'implementation',
    description: 'Custom API development and third-party system integration.',
    estimatedRate: 140,
    color: '#10b981',
    tags: ['API', 'Integration', 'Development', 'Systems']
  },
  {
    id: 'ongoing-support',
    name: 'Ongoing Support',
    client: 'Client Name - Ongoing Support',
    category: 'ongoing-support',
    description: 'Monthly recurring support and maintenance services.',
    estimatedRate: 125,
    color: '#f59e0b',
    tags: ['Support', 'Maintenance', 'Recurring', 'Help Desk']
  },
  {
    id: 'user-training',
    name: 'User Training Program',
    client: 'Client Name - User Training',
    category: 'training',
    description: 'Comprehensive user training program for new system adoption.',
    estimatedRate: 120,
    color: '#ef4444',
    tags: ['Training', 'Education', 'User Adoption', 'Documentation']
  },
  {
    id: 'data-migration',
    name: 'Data Migration',
    client: 'Client Name - Data Migration',
    category: 'implementation',
    description: 'Legacy system data extraction, transformation, and migration.',
    estimatedRate: 160,
    color: '#06b6d4',
    tags: ['Data', 'Migration', 'ETL', 'Legacy Systems']
  },
  {
    id: 'security-audit',
    name: 'Security Audit',
    client: 'Client Name - Security Audit',
    category: 'consulting',
    description: 'Comprehensive security assessment and compliance review.',
    estimatedRate: 180,
    color: '#dc2626',
    tags: ['Security', 'Audit', 'Compliance', 'Risk Assessment']
  },
  {
    id: 'escalation-support',
    name: 'Escalation Support',
    client: 'Client Name - Escalation',
    category: 'escalation',
    description: 'High-priority issue resolution and emergency support.',
    estimatedRate: 200,
    color: '#991b1b',
    tags: ['Escalation', 'Emergency', 'Critical', 'Urgent']
  }
];