import { NextResponse } from 'next/server';
import datastoreApi from '../datastoreApi';

export async function GET() {
    try {
      const data = await datastoreApi('users/');
      console.log({data});
      return NextResponse.json(data);
    } catch (error) {
      console.error("Error fetching users:", error);
      return NextResponse.json(
        { message: 'Failed to fetch users', error: error.message },
        { status: 500 }
      );
    }
}
  
export async function POST(request) {
    try {
      const body = await request.json();
      const data = await datastoreApi('users/', {
        method: 'POST',
        body: JSON.stringify(body),
      });
      return NextResponse.json(data, { status: 201 });
    } catch (error) {
      console.error("Error creating user:", error);
      return NextResponse.json(
        { message: 'Failed to create user' },
        { status: 500 }
      );
    }
  }