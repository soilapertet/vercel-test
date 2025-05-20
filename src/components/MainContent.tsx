import { commsMembers } from "../data"
import ClubMember from "./ClubMember"

const MainContent = () => {
  return (
    <>
      <h1 className='text-4xl p-5 bg-periwinkle'>BMERIT Comms Team</h1>
      <div className='bg-teagreen'>
        <h3 className='text-3xl font-bold'>Team Responsibilities</h3>
        <p className="text-lg">
          The Communications Team manages the club’s social media presence by creating engaging content, 
          promoting events, and maintaining consistent branding across platforms to increase visibility and 
          member engagement.
        </p>
      </div>
      <div className='bg-teagreen p-5 w-25 text-night flex flex-col justify-center items-center'>
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