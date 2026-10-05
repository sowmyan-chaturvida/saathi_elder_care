import { NextResponse } from 'next/server';
import { careStore } from '@/server/db/careStore';

export async function GET() {
  const summary = careStore.getFamilySummary();
  return NextResponse.json({
    success: true,
    data: summary,
    timestamp: new Date().toISOString(),
  });
}
