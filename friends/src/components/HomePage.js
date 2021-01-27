import React, {useState, useEffect} from 'react'

function HomePage() {

  const [notes, setNotes] = useState([])

  useEffect(() => {

    if(localStorage.token){
      console.log('yes')
      let b = localStorage.notes
      b = JSON.parse(b)
      // console.log(b)
      setNotes(b)

    }else{
      console.log('no')
    }
  },[])

  console.log(notes)


  return (
    <main>
      <h2>Home Page</h2>
      <div>
        <h3>Notes: </h3>
            {
              notes.length > 0 && notes.map(note => {
                return(
                  <div>
                    <h2>{note.title}</h2>
                  </div>
                )
              })
            }

      </div>
    </main>
  )
}

export default HomePage
