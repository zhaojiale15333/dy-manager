import { NextResponse } from 'next/server'
import { writeJSONFile, readJSONFile } from '../../../../utils/store'

export async function POST(req: any) {
  const data = await req.json()
  writeJSONFile(data, 'data.json')
  return NextResponse.json({ code: 200 })
}

export async function GET() {
  const jsonData = await readJSONFile('data.json')

  return NextResponse.json({ data: jsonData })
}
