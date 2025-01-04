import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

interface TeamMember {
  name: string;
  role: string;
  image: string;
}

interface TeamSection {
  title: string;
  members: TeamMember[];
}

const PatronSection: TeamSection = {
  title: "Patrons",
  members: [
    { name: "Dr. John Doe", role: "CEO", image: "/placeholder.svg?height=200&width=200" },
    { name: "Dr. Jane Smith", role: "Chancellor", image: "/placeholder.svg?height=200&width=200" },
    { name: "Dr. Alice Johnson", role: "Pro Vice Chancellor", image: "/placeholder.svg?height=200&width=200" },
    { name: "Dr. Bob Brown", role: "Vice Chancellor", image: "/placeholder.svg?height=200&width=200" },
  ]
};

const SBTeam: TeamSection = {
  title: "Student Branch (SB) Team",
  members: [
    { name: "Shubhranshu Shekhar Dash", role: "Chairperson", image: "/placeholder.svg?height=200&width=200" },
    { name: "Anurag Kumar Singh", role: "Vice Chairperson", image: "/placeholder.svg?height=200&width=200" },
    { name: "Rashi Bajpai", role: "Secretary", image: "/placeholder.svg?height=200&width=200" },
    { name: "Manas Saxena", role: "Tech Lead", image: "/placeholder.svg?height=200&width=200" },
    { name: "Siddhaeth Agrawal", role: "Treasurer", image: "/placeholder.svg?height=200&width=200" },
  ]
};

const SBCTeams: TeamSection[] = [
  {
    title: "Computer Society",
    members: [
      { name: "Prof. Alan Turing", role: "Advisor", image: "/placeholder.svg?height=200&width=200" },
      { name: "Grace Hopper", role: "Chairperson", image: "/placeholder.svg?height=200&width=200" },
      { name: "Tim Berners-Lee", role: "Vice Chairperson", image: "/placeholder.svg?height=200&width=200" },
      { name: "Ada Lovelace", role: "Secretary", image: "/placeholder.svg?height=200&width=200" },
      { name: "Linus Torvalds", role: "Tech Lead", image: "/placeholder.svg?height=200&width=200" },
      { name: "Margaret Hamilton", role: "Treasurer", image: "/placeholder.svg?height=200&width=200" },
    ]
  },
  {
    title: "Industry Applications Society",
    members: [
      { name: "Dr. Nikola Tesla", role: "Advisor", image: "/placeholder.svg?height=200&width=200" },
      { name: "Thomas Edison", role: "Chairperson", image: "/placeholder.svg?height=200&width=200" },
      { name: "George Westinghouse", role: "Vice Chairperson", image: "/placeholder.svg?height=200&width=200" },
      { name: "Edith Clarke", role: "Secretary", image: "/placeholder.svg?height=200&width=200" },
      { name: "Charles Steinmetz", role: "Tech Lead", image: "/placeholder.svg?height=200&width=200" },
      { name: "Elihu Thomson", role: "Treasurer", image: "/placeholder.svg?height=200&width=200" },
    ]
  },
  {
    title: "Women in Engineering",
    members: [
      { name: "Dr. Marie Curie", role: "Advisor", image: "/placeholder.svg?height=200&width=200" },
      { name: "Hedy Lamarr", role: "Chairperson", image: "/placeholder.svg?height=200&width=200" },
      { name: "Radia Perlman", role: "Vice Chairperson", image: "/placeholder.svg?height=200&width=200" },
      { name: "Anita Borg", role: "Secretary", image: "/placeholder.svg?height=200&width=200" },
      { name: "Stephanie Kwolek", role: "Tech Lead", image: "/placeholder.svg?height=200&width=200" },
      { name: "Lynn Conway", role: "Treasurer", image: "/placeholder.svg?height=200&width=200" },
    ]
  }
];

function TeamMemberCard({ member }: { member: TeamMember }) {
  return (
    <Card className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 shadow-lg rounded-xl overflow-hidden transition-all duration-300 hover:shadow-xl hover:scale-105">
      <CardContent className="p-4">
        <Image
          src={member.image}
          alt={member.name}
          width={200}
          height={200}
          className="rounded-full mx-auto mb-4"
        />
        <CardTitle className="text-center text-lg font-semibold text-blue-800 dark:text-blue-200">
          {member.name}
        </CardTitle>
        <p className="text-center text-sm text-gray-600 dark:text-gray-400">{member.role}</p>
      </CardContent>
    </Card>
  );
}

function TeamSection({ section }: { section: TeamSection }) {
  return (
    <div className="mb-12">
      <h2 className="text-2xl font-bold mb-6 text-blue-900 dark:text-blue-100">{section.title}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {section.members.map((member, index) => (
          <TeamMemberCard key={index} member={member} />
        ))}
      </div>
    </div>
  );
}

export default function TeamsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-blue-100 dark:from-gray-900 dark:to-gray-800">
      <main className="container mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold text-center mb-12 text-blue-900 dark:text-blue-100">
          Our Teams
        </h1>

        <TeamSection section={PatronSection} />
        
        <Card className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 shadow-lg rounded-xl mb-12">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-900 dark:text-blue-100">Student Branch (SB)</CardTitle>
          </CardHeader>
          <CardContent>
            <TeamSection section={SBTeam} />
          </CardContent>
        </Card>

        <Accordion type="single" collapsible className="mb-12">
          <AccordionItem value="sbc">
            <AccordionTrigger className="text-2xl font-bold text-blue-900 dark:text-blue-100">
              Student Branch Chapters (SBC)
            </AccordionTrigger>
            <AccordionContent>
              {SBCTeams.map((sbc, index) => (
                <Card key={index} className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 shadow-lg rounded-xl mb-6 last:mb-0">
                  <CardHeader>
                    <CardTitle className="text-xl font-semibold text-blue-800 dark:text-blue-200">{sbc.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <TeamSection section={sbc} />
                  </CardContent>
                </Card>
              ))}
            </AccordionContent>
          </AccordionItem>
        </Accordion>

        <Card className="backdrop-blur-md bg-white/30 dark:bg-gray-800/30 shadow-lg rounded-xl">
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-blue-900 dark:text-blue-100">SMIEEEs</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-gray-700 dark:text-gray-300">
              Senior Members of IEEE (SMIEEEs) play a crucial role in mentoring and guiding our student branches. 
              Their expertise and experience contribute significantly to the growth and development of our IEEE community at Galgotias University.
            </p>
          </CardContent>
        </Card>
      </main>
    </div>
  );
}

