import { commsMembers } from "../data"
import ClubMember from "./ClubMember"

const MainContent = () => {
  return (
    <>
      <h1 className='text-4xl p-5 bg-periwinkle'>BMERIT Comms Team</h1>
      <div className='bg-babyPowder p-5 w-25 text-night flex flex-col justify-center items-center'>
        <div className='bg-periwinkle p-5 rounded-md'>
          <h3 className="text-2xl font-bold">Team Responsibilities</h3>
          <ul className="m-5 text-lg list-disc text-left">
            <li>Send regular club updates via newsletters</li>
            <li>Manage the club’s social media accounts (Instagram, Facebook, Twitter, LinkedIn, etc.)</li>
            <li>Design promotional materials (flyers, posters, graphics, etc.)</li>
          </ul>
        </div>
        {
          commsMembers.map((member) => {
            return (
              <ClubMember 
                name={member.name}
                team={member.team}
                linkedIn={member.linkedin}
              />
            )
          })
        }
      </div>
    </>
  )
}

export default MainContent