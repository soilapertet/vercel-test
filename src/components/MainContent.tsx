import { commsMembers } from "../data"
import ClubMember from "./ClubMember"

const MainContent = () => {
  return (
    <>
      <h1 className='text-4xl p-5 bg-periwinkle'>BMERIT Comms Team</h1>
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