import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import About from './About'

function Dashboard() {
  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user } = useSelector((state) => state.auth)

  useEffect(() => {

    if (!user) {
      navigate('/login')
    }

  }, [user, navigate, dispatch])

  return (
    <>
      <section className='heading'>
        <About />
      </section>



        

    </>
  )
}

export default Dashboard
