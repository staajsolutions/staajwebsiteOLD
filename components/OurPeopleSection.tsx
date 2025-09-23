import Image from "next/image"

const people = [
    {
        name: "Sam Spampinato",
        title: "Founder and President",
        description:
            "Sam leads STAAJ with a focus on clarity, results, and real relationships. He brings years of experience scaling businesses and helps clients think bigger while staying grounded in what works.",
        image: "/images/p1.png",
    },
    {
        name: "Bryna Kirzner",
        title: "Founder and Chief Operating Officer",
        description:
            "Bryna keeps everything running smoothly. She's an expert in operations and team leadership, and she helps clients turn big goals into simple, workable plans.",
        image: "/images/p2.jpeg",
    },
    {
        name: "Garrett Finley",
        title: "Co-Founder and Director of Operational Integrity",
        description:
            "Garrett makes sure every client feels supported and seen. He blends process expertise with a deep commitment to service, helping teams work smarter and communicate better.",
        image: "/images/p4.png",
    },
    {
        name: "Alex Wichman",
        title: "Co-Founder and Director of Marketing",
        description:
            "Alex helps clients find their voice and connect with the right audience. He brings creative energy and strategic thinking to every project, making sure brands grow with purpose.",
        image: "/images/p3.jpeg",
    },
]

export default function OurPeopleSection() {
    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">Meet Our Leadership Team</h2>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        The team behind STAAJ Solutions brings together deep expertise, clarity, and a passion for helping
                        businesses grow with confidence.
                    </p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                    {people.map((person) => (
                        <div
                            key={person.name}
                            className="bg-gradient-to-br from-gray-50 to-pink-50 rounded-2xl p-8 flex flex-col sm:flex-row items-center sm:items-start gap-8 transform transition-all duration-300 hover:shadow-2xl hover:scale-105"
                        >
                            <div className="flex-shrink-0">
                                <div className="relative w-32 h-32 sm:w-40 sm:h-40 rounded-full overflow-hidden shadow-lg border-4 border-white">
                                    <Image
                                        src={person.image || "/placeholder.svg"}
                                        alt={`Portrait of ${person.name}`}
                                        layout="fill"
                                        objectFit="cover"
                                    />
                                </div>
                            </div>
                            <div className="text-center sm:text-left">
                                <h3 className="text-2xl font-bold text-gray-900">{person.name}</h3>
                                <p className="text-md font-semibold text-pink-600 mb-3">{person.title}</p>
                                <p className="text-gray-600 leading-relaxed">{person.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
