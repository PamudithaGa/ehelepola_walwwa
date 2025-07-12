import React from 'react'

const LocationMap:React.FC = () => {
  return (
    <div>
            <div className="w-full rounded-4xl h-[500px] overflow-hidden max-w-full">
        <iframe
            title="Ehelepola Walawwa"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3802.9342877355907!2d80.6361025748133!3d7.294743542712804!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ae3662c7dc013f7%3A0x43419ba57c5c7185!2sEhelepola%20Walawwa%2C%20Kandy!5e1!3m2!1sen!2slk!4v1752337618805!5m2!1sen!2slk"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
        </div>
    </div>
  )
}

export default LocationMap
