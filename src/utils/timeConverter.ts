import dayjs from 'dayjs'
import duration from 'dayjs/plugin/duration'

dayjs.extend(duration)

export const timeConverter = (time: number) => {
  const duration = dayjs.duration(time)
  const hours = duration.hours()
  const minutes = duration.minutes()
  const seconds = duration.seconds()
  const days = duration.days()

  if (days > 0)
    return `${days}d ${hours}h ${minutes}m`

  else if (hours > 0)
    return `${hours}h ${minutes}m ${seconds}s`

  else if (minutes > 0)
    return `${minutes}m ${seconds}s`

  else
    return `${seconds}s`
}
