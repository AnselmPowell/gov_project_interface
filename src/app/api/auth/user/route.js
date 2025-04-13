export const dynamic = 'force-dynamic';

import { cookies } from 'next/headers';
import jwt from  'jsonwebtoken';
import * as authSchema from '@/database/schema/authSchema';

import { NextResponse } from 'next/server';
import config from '@/config';
const JWT_SECRET = process.env.JWT_SECRET;


const GOVERNANCE_API_URL = `${config.backendApiUrl}governance/analyze/analyze_documents/`;

export async function GET() {
  // const cookieStore = cookies();
  // const refreshToken = cookieStore.get('refreshToken')?.value;

  // if (!refreshToken) {
  //   return new Response(JSON.stringify({ message: 'No user logged in' }), {
  //     status: 200,
  //     headers: { 'Content-Type': 'application/json' },
  //   });
  // }

  // try {
  //   const decoded = jwt.verify(refreshToken, JWT_SECRET);
  //   const user = await authSchema.findUserById(decoded.userId);
  //   if (user) {
     
  //     return new Response(JSON.stringify(user), {
  //       status: 200,
  //       headers: { 'Content-Type': 'application/json' },
  //     });
  //   } else {
  //     throw new Error('User not found');
  //   }
  // } catch (error) {
  //   console.error('Error getting current user:', error);
  //   return new Response(JSON.stringify({ message: 'No user logged in' }), {
  //     status: 200,
  //     headers: { 'Content-Type': 'application/json' },
  //   });
  // }
  try {
          console.log("[POST] Starting document analysis simulation");
          // const formData = await request.formData();
          // const files = formData.getAll('files');
  
          // console.log("Files received:", files.map(f => f.name));
  
          // if (!files || files.length === 0) {
          //     return NextResponse.json(
          //         { error: "No files provided" },
          //         { status: 400 }
          //     );
          // }
  
          // // For simulation, create fake file data
          // const filesData = files.map(file => ({
          //     file_id: Math.random().toString(36).substring(7),
          //     file_name: file.name,
          //     file_url: "https://example.com/fake-url",
          //     file_type: file.type
          // }));
  
          console.log("Sending to backend:",);
  
          // Send to Django backend
          const response = await fetch(GOVERNANCE_API_URL, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json',
              },
              // body: JSON.stringify({ documents: filesData }),
              credentials: 'include',
          });
  
          if (!response.ok) {
              throw new Error('Failed to analyze documents');
          }
  
          const data = await response.json();
          return NextResponse.json(data);
  
      } catch (error) {
          console.error('[POST] Analysis error:', error);
          return NextResponse.json(
              { error: 'Failed to analyze documents' },
              { status: 500 }
          );
      }
}