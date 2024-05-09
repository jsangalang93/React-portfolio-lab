const h2 = {
  
  textAlign: 'center',
  
}
const h1 = { 
  textAlign: 'center'
}

const li = {
  listStyleType: 'none'
}
const App =  () => {
const skill = { text: "A skill I have!", done: true}
const mySkills = [
  {
    skill: 'Embedded JavaScript',
    comfort: 9,
    frontEnd: true,
    Backend: true
  },
  {
    skill: 'CSS',
    comfort: 9,
    frontEnd: true,
    backend: false
  },
  {
    skill: 'HTML',
    comfort: 8,
    frontEnd: true,
    backend: false
  },
]
return (
<>
<h1 style= {h1}>Skills For Jordan Sangalang</h1>
<h2 style= {h2}>Coding Languages</h2>
<ul>
{mySkills.map((currentSkill, index) =>(
<li style={li} key= {index}>
  
  <div style={h2}>
  <b>{currentSkill.skill} </b>
  <div><br />
  <b>Comfort level: </b>{currentSkill.comfort}
  </div>
  <div>
  <b>Front End: </b> {currentSkill.frontEnd ? 'true' : 'false'}
  </div>
  <div>
  <b>Back End: </b> {currentSkill.backend ? 'true' : 'false'}
  </div><br />
  </div>
</li>
))}
</ul>


</>
)
}
export default App;

// return(
//   <>

    
//     <li>
//     <p>language: </p>{SkillElements[0]}<p>comfort level:</p>{SkillElements.comfort}
//     </li>
//   </ul>
//   {/* <ul>{SkillElements.comfort}</ul> */}

//   <h2>Front End Knowledge</h2>
//   <ul>
  

//   </ul>
//   <h2>Back End Knowledge</h2>
//     <ul>
//       {SkillElements.backend}
//     </ul>
//   </>
// )
//   return( <li key={index}>
    
//       (currentSkill.frontEnd === true) ?
//       <h1>{currentSkill.text}</h1>

//       :

//       currentSkill.text
    
//     </li>
// )})
  // console.log(SkillElements);

  // return <>
  // <h1>This is a test</h1>

  // { (skill.frontEnd === true) ?
  
  //     <h1> This is something I know how to do.</h1>
  // :

  // 'this is a skill I still have to work on.' }

  // <ul>{skillElements}</ul>
  
  // </>
// }

// export default App;