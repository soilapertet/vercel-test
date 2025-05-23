import type { Member } from "../data"

const ClubMember = (member: Member) => {
  return (
    <>
      <div className="rounded-md m-5 p-5 w-1/2 flex flex-col bg-periwinkle">
          <h2 className='text-3xl font-bold'>{member.name}</h2>
          <div className='flex flex-row gap-2 justify-center items-center'>
            <p className="font-bold  text-lg">Team: </p>
            <p className='text-lg'>{member.team}</p>
          </div>
          {member.linkedIn && <div className='flex flex-row gap-2 justify-center items-center'>
            <p className="font-bold text-lg">LinkedIn:  
              <a href={member.linkedIn} className="font-normal"> {member.linkedIn}</a>
            </p>
          </div>}
        </div>
    </>
  )
}

export default ClubMember