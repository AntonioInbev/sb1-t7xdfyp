import React from 'react'
import { Calendar, Image } from 'lucide-react'

interface Activity {
  id: number
  title: string
  date: string
  description: string
  imageUrl: string
}

interface ActivityCardProps {
  activity: Activity
}

const ActivityCard: React.FC<ActivityCardProps> = ({ activity }) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <img src={activity.imageUrl} alt={activity.title} className="w-full h-48 object-cover" />
      <div className="p-4">
        <h3 className="text-xl font-semibold mb-2">{activity.title}</h3>
        <p className="text-gray-600 mb-2 flex items-center">
          <Calendar className="w-4 h-4 mr-1" />
          {activity.date}
        </p>
        <p className="text-gray-700">{activity.description}</p>
      </div>
    </div>
  )
}

export default ActivityCard