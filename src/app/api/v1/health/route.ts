import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    status: 'healthy',
    timestamp: new Date().toISOString(),
    service: 'Saathi Elder Companion & Family Care API',
    version: '1.0.0',
    compliance: {
      framework: 'SOC 2 Type II',
      auditLogging: 'ACTIVE',
      securityHeaders: 'ACTIVE',
      piiSanitization: 'ACTIVE',
    }
  });
}
