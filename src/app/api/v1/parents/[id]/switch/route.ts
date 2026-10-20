import { NextRequest, NextResponse } from 'next/server';
import { careStore } from '@/server/db/careStore';

export async function POST(
  _request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const switched = careStore.switchActiveParent(id);

  if (!switched) {
    return NextResponse.json(
      {
        success: false,
        error: {
          code: 'PARENT_NOT_FOUND',
          message: 'Selected parent profile does not exist.',
        },
      },
      { status: 404 }
    );
  }

  return NextResponse.json({
    success: true,
    data: switched,
  });
}
