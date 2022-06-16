import { db } from 'api/src/lib/db'

export default async () => {
  const TimeEntries = [
    {
      id: 1,
      title: 'Track Time',
      startTime: '2020-01-01T00:00:00.000Z',
      endTime: '2020-01-01T01:00:00.000Z',
    },
    {
      id: 2,
      title: 'Work Focused',
      startTime: '2020-01-01T01:00:00.000Z',
      endTime: '2020-01-01T02:00:00.000Z',
    },
    {
      id: 3,
      title: 'Get Shit Done',
      startTime: '2020-01-01T02:00:00.000Z',
      endTime: '2020-01-01T03:00:00.000Z',
    },
  ]

  for (const entry of TimeEntries) {
    await db.timeEntry.upsert({
      where: { id: entry.id },
      create: {
        id: entry.id,
        title: entry.title,
        startTime: entry.startTime,
        endTime: entry.endTime,
      },
      update: {},
    })

    console.log(`  Seeded "${entry.title}"`)
  }
}
