import FollowerColumn from '../components/FollowerColumn'

const Home = () => {
  return (
    <div className='container'>
      <FollowerColumn />
      <div className='feed'>
        <h1>Home</h1>
      </div>
      <div className='suggested-box'></div>
    </div>
  )
}

export default Home
